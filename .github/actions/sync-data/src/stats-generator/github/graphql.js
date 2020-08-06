const R = require('ramda');
const chalk = require('chalk');
const startTimeSpan = require('time-span');
const { distanceInWords } = require('date-fns');

const {
  removeNewLines,
  removeTabsAndSpaces,
  removeEscapedCharacters,
} = require('../lib/utils');
const log = require('../lib/log');

const removeAllExtraCharacters = R.pipe(
  removeNewLines,
  removeTabsAndSpaces,
  removeEscapedCharacters
);

class GraphQLError extends Error {
  constructor(errors, query, variables) {
    super(JSON.stringify(errors));
    this.name = 'GraphQLError';
    this.query = removeAllExtraCharacters(query && query.query);
    this.variables = variables;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    }
  }
}

const getQueryName = (query) =>
  R.path([1], query.match(/[query|mutation] \s*(\w+)/m)) || 'unknown name';

const QUERY_COST_THRESHOLD = 50;

const logQueryInfoAndRemainingLimits = ({ org, data, query, elapsedMs }) => {
  if (!data || !data.rateLimit) return;

  const { remaining, cost, limit, resetAt } = data.rateLimit;
  const nextResetAt = distanceInWords(new Date(), new Date(resetAt));

  if (cost > QUERY_COST_THRESHOLD) {
    log.warn(
      // eslint-disable-next-line prefer-template
      chalk`Expensive GraphQL query detected, cost={red ${cost}}, ` +
        chalk`{white ${remaining}/${limit}} available per hour. ` +
        `query="${query.slice(0, 200)}...", org=${org}`
    );
    log.cyan(`Next reset in ${nextResetAt}`);
  }

  const remainingPercent = Math.round((remaining / limit) * 100);

  if (remainingPercent < 10) {
    log.warn(
      `Less than 10% of Github GraphQL API limit remaining ` +
        `${chalk`{red ${remaining}}/${limit} available per hour.`}`
    );
  }
  const queryName = getQueryName(query);

  log.info(
    `${chalk`{blue GraphQl query name=${queryName}} cost=${cost}, remaining=${remaining}, limit=${limit}, `}remainingPercent=${remainingPercent}, resetAt=${resetAt}, nextResetAt=${nextResetAt}, ` +
      `githubOrg=${org}, elapsedMs=${elapsedMs}ms`
  );

  if (queryName === 'unknown name') {
    log.info(
      `Query that does not have a name: query=${removeAllExtraCharacters(
        query
      )}`
    );
  }
};

const logMutationInfo = ({ org, mutation, elapsedMs }) => {
  const mutationName = getQueryName(mutation);

  log.info(
    chalk`{blue GraphQl mutation name=${mutationName}}, githubOrg=${org}, elapsedMs=${elapsedMs}ms`
  );

  if (mutationName === 'unknown name') {
    log.info(
      `Query that does not have a name: query=${removeAllExtraCharacters(
        mutation
      )}`
    );
  }
};

const graphql = (octokit, org, { operationType }) => async (
  query,
  variables,
  headers
) => {
  // rate limit only works for queries
  if (!query.query.includes('rateLimit') && operationType === 'query') {
    log.warn(
      'Detected graphql query that does not include "rateLimit"' +
        ' Every Github GraphQL query should include the following query: \n',
      `rateLimit {
					limit
					cost
					remaining
					resetAt
				}`
    );
  }

  const endTimeSpan = startTimeSpan();
  const resp = await octokit.request({
    headers: {
      accept:
        // enable isDraft preview
        'application/vnd.github.shadow-cat-preview+json, ' +
        // enable and mergeStateStatus
        'application/vnd.github.merge-info-preview+json, ' +
        // enable Checks (Check Suites)
        'application/vnd.github.antiope-preview+json',
      'content-type': 'application/json',
      ...headers,
    },
    method: 'POST',
    url: '/graphql',

    query: query.query,
    variables: query.variables,
  });

  if (resp.status !== 200) {
    log.warn(`Got non 200 HTTP status from GraphQL status=${resp.status}`);
  }

  const elapsedMs = Math.round(endTimeSpan());
  const { data, errors } = resp.data;
  const cleanedUpQuery = removeAllExtraCharacters(query.query);

  if (operationType === 'query') {
    logQueryInfoAndRemainingLimits({
      org,
      data,
      query: cleanedUpQuery,
      elapsedMs,
    });
  } else if (operationType === 'mutation') {
    logMutationInfo({ org, mutation: cleanedUpQuery, elapsedMs });
  }

  if (errors) {
    log.warn(
      'Graphql query returned some errors: ',
      R.pipe(R.pluck('message'), R.uniq)(errors),
      'Total errors: ',
      errors.length
    );
    // it's "nomral" to have errors if data property is non empty
    // those could be due to lack of permissions, but API would still retur
    // partial results
    if (!data) {
      throw new GraphQLError(errors, cleanedUpQuery, variables);
    }
  }

  return data;
};

// eslint-disable-next-line no-unused-vars
function addGraphQL(octokit, org, user = '') {
  octokit.query = graphql(octokit, org, { operationType: 'query' });
  octokit.mutation = graphql(octokit, org, { operationType: 'mutation' });
}

module.exports = addGraphQL;
