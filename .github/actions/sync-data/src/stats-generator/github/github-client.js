const { Octokit } = require('@octokit/core');
const { throttling } = require('@octokit/plugin-throttling');
const retryPlugin = require('@octokit/plugin-retry');

const MyOctokit = Octokit.plugin(throttling, retryPlugin);
const log = require('../lib/log');

const addGraphQL = require('./graphql');

function isRateLimited(response) {
  return response.headers['x-ratelimit-remaining'] === '0';
}

// https://developer.github.com/v3/#abuse-rate-limits,
// most of the requests that hit abuse limits have word "abuse" in status text
function hitAbuseLimits(response) {
  return /\babuse\b/i.test(response.statusText);
}

const createOctokit = ({ org, accessToken, tokenType = 'token', cacheKey }) => {
  // A "throttling ID" is a key to be used in redis by Throttling library.
  // All octokit instances with the same throttlingId using the same Redis server
  // will share the throttling.
  // We want this to be throttled by GitHub org for now or provided cacheKey or if
  // none is provided generate a random one so we are not using "empty string" and not locking all
  // clients that didn't provide org or cacheKey.
  const throttlingId = cacheKey || org || Math.random();

  return new MyOctokit({
    // set custom URL for on-premise GitHub Enterprise installations
    baseUrl: 'https://api.github.com',
    auth: `${tokenType} ${accessToken}`,
    userAgent: '',
    retry: { retries: 3 },
    throttle: {
      // connection: redisConnection,
      id: throttlingId,

      enabled: true,
      // sometimes Github just returns API limit as 0 and next reset as "3600 seconds"
      // and then immediately recovers. This blocks the process for 1 hour. That is just not
      // acceptable, so we set upper bound and retry in 10 seconds when we see "next retry"
      // greater than that.
      maxRetryAfterSeconds: 10,
      // default is 5, bumpting to 10 because for certain orgs we hit the limit
      minimumAbuseRetryAfter: 10,

      // eslint-disable-next-line no-unused-vars
      retryWhen: (response, options) =>
        // grahpql requests return 200 in most cases, even whne there is an error, this
        // hook captures when it's a retry condition for those
        isRateLimited(response) || hitAbuseLimits(response),
      onRateLimit: (retryAfter, options) => {
        log.warn(
          `Request quota exhausted for request ${options.method} ${options.url}`
        );

        // retry twice
        if (options.request.retryCount < 2) {
          log.warn(
            `Retrying after ${retryAfter} seconds, retry attempt=${options
              .request.retryCount + 1}`
          );
          // Return true to automatically retry the request after retryAfter seconds
          return true;
        }

        return undefined;
      },
      onSecondaryRateLimit: (retryAfter, options, octokit) => {
        // does not retry, only logs a warning
        log.warn(
          `SecondaryRateLimit detected for request ${options.method} ${options.url}`
        );
      },
      onAbuseLimit: (retryAfter, options) => {
        // does not retry, only logs a warning
        log.warn(`Abuse detected for request ${options.method} ${options.url}`);
        log.json(options);
        return true;
      }
    },
    log: {
      // eslint-disable-next-line no-unused-vars
      debug: (operation, payload) => {},
      info: log.info,
      warn: log.warn,
      error: log.error
    }
  });
};

/**
 * the [@octokit/rest Node.js module](https://github.com/octokit/rest.js),
 * which wraps the [GitHub API](https://developer.github.com/v3/) and allows
 * you to do almost anything programmatically that you can do through a web
 * browser.
 * @see {@link https://github.com/octokit/rest.js}
 */
async function createGithubClient(org, cacheKey, accessToken) {
  const githubAccessToken = accessToken;

  // Sometimes it's handy to provide access token externally from one-off scripts or else,
  // to test things locally but using production keys. In that case getInstallationAccessToken
  // won't work, because it requires production app / credentials and locally that is not accessible.
  // So this is an easy escape hatch for that.
  // if (!githubAccessToken) {
  // 	githubAccessToken = await getInstallationAccessToken(org)
  // }

  const octokit = createOctokit({
    org,
    accessToken: githubAccessToken,
    cacheKey
  });

  addGraphQL(octokit, org);

  return octokit;
}

function createGithubUserClient(org, userAccessToken) {
  const octokit = createOctokit({
    org,
    accessToken: userAccessToken,
    // it makes sense to set locks on token level, so we control concurrency per user
    cacheKey: userAccessToken
  });

  addGraphQL(octokit, org);
  return octokit;
}

module.exports = {
  createGithubClient,
  createGithubUserClient,
  createOctokit
};
