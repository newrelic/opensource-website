const core = require('@actions/core');

const { createGithubClient } = require('./github/github-client');
const { calculateAndWriteProjectStats } = require('./processor');
const { ORG_REPOS } = require('../shared/constants');

const getAllReposForOrg = require('./queries/get-all-repos-for-org');
const log = require('./lib/log');

/**
 * Generates project stats files by fetching all non-fork and unarchived repos in a list of orgs.
 * @param {*} organizations The organizations to query
 * @param {*} paginationLimit Limits the number of repos that get called at once
 */
async function generateStatsForOrgs({ organizations, paginationLimit = 25 }) {
  const GH_TOKEN = core.getInput('github-token') || process.env.GH_TOKEN;

  log.info(
    `Generating stats for orgs: [${organizations
      .map(o => `${o.org}`)
      .join(',')}]`
  );

  let results = [];
  for (const { org } of organizations) {
    const github = await createGithubClient(org, '', GH_TOKEN);

    log.magenta(`Fetching all repos for org: ${org}`);
    const { repos } = await getAllReposForOrg(github)({
      org,
      paginationLimit
    });

    log.magenta(`Number of fetched repos: ${repos.length}`);
    results = [...results, ...repos];

    // Now that repos were fetched, get contributor stats and write files
    log.magenta(`Begin - process stats and write files for org: ${org}`);
    for (const repo of repos) {
      await calculateAndWriteProjectStats(repo);
    }
    log.magenta(`Finished - stats processed for org: ${org}`);
  }

  return results;
}

async function script() {
  const PAGINATION_LIMIT = 25;

  // Get all stats data for newrelic and newrelic-experimental orgs
  const results = await generateStatsForOrgs({
    organizations: ORG_REPOS,
    paginationLimit: PAGINATION_LIMIT
  });

  log.info(`Total fetched repos: ${results.length}`);

  // TODO: Build diff of result repos and those remaining in src/data/projects directory, then query one by one

  return undefined;
}

module.exports = {
  script
};
