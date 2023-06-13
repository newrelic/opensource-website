const core = require('@actions/core');
const { createOctokit } = require('./github-client');
const { prettyPrint, sleep } = require('../../shared/helpers');

// TODO: Set Default_Org via param, since the getContributorStats query won't always be for the newrelic org
const DEFAULT_ORG = 'newrelic';
const GH_TOKEN = core.getInput('github-token') || process.env.GH_TOKEN;

const octokit = createOctokit({
  DEFAULT_ORG,
  accessToken: GH_TOKEN,
  cacheKey: '',
});

const fetchContributorStats = async function (owner, repo) {
  // console.log("creating octokit")
  // const octokit = await createGithubClient(DEFAULT_ORG, '', token)
  // console.log("octokit created", octokit);
  // console.log(`fetchContributorStats: owner[${owner}], repo[${repo}]`);
  try {
    // const contributorStats = await octokit.repos.getContributorsStats({
    const contributorStats = await octokit.request(
      'GET /repos/:owner/:repo/stats/contributors',
      {
        owner,
        repo,
      }
    );
    // console.log(`Result: ${contributorStats}`);
    return contributorStats;
  } catch (e) {
    prettyPrint(
      `[ERROR] at stats-generator.github.fetchContributorStats.fetchContributorStats \n  | owner: ${owner}, repo: ${repo} \n  | ${e}`
    );
  }
};

const fetchRepoStatsByContributor_withRetry = async (owner, repo, retries) => {
  const delay = 3000;
  let error;
  for (let i = 0; i < retries; i++) {
    try {
      return await getRepoStatsByContributor(owner, repo);
    } catch (err) {
      error = err;
      prettyPrint(
        `[WARNING] at stats-generator.github.fetchContributorStats.fetchRepoStatsByContributor_withRetry \n  | Try #${
          i + 1
        } | owner: ${owner}, repo: ${repo} | getRepoStatsByContributor failed, retrying after ${
          delay / 1000
        }s delay\n`
      );
      await sleep(delay);
    }
  }

  prettyPrint(error.message);
  return null;
};

const getRepoStatsByContributor = async function (owner, repo) {
  const response = await fetchContributorStats(owner, repo);
  const { /* status, url, headers, */ data } = response;

  if (Array.isArray(data)) {
    const formattedContributorStats = data.map(({ total, author }) => ({
      total: total,
      author: author,
    }));
    return formattedContributorStats;
  }

  // fetchContributorStats failed to return data, logging output and letting retry flow
  throw new Error(
    `[ERROR] at stats-generator.github.fetchContributorStats.getRepoStatsByContributor \n  | owner: ${owner}, repo: ${repo} \n  | fetchContributorStats failed: No stats returned\n`
  );
};

const fetchStats = async function (owner, repo) {
  const retries = 3;
  const contributorStats = await fetchRepoStatsByContributor_withRetry(
    owner,
    repo,
    retries
  );

  return contributorStats ? { contributorStats } : null;
};

// (async function() {
//   octokit = await createGithubClient(DEFAULT_ORG, '', token);
// })();

module.exports = {
  fetchStats,
};
