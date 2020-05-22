const core = require('@actions/core');
const { createOctokit } = require('./github-client');
const { prettyPrintJson, prettyPrint } = require('../../shared/helpers');

// TODO: Set Default_Org via param, since the getContributorStats query won't always be for the newrelic org
const DEFAULT_ORG = 'newrelic';
const GH_TOKEN = core.getInput('github-token') || process.env.GH_TOKEN;

const octokit = createOctokit({
  DEFAULT_ORG,
  accessToken: GH_TOKEN,
  cacheKey: ''
});

const fetchContributorStats = async function(owner, repo) {
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
        repo
      }
    );
    // console.log(`Result: ${contributorStats}`);
    return contributorStats;
  } catch (e) {
    prettyPrint(
      `[ERROR] data-generator.fetch.fetchContributorStats | {"owner": ${owner}, "repo": ${repo}} | ${e}`
    );
  }
};

const getRepoStatsByContributor = async function(owner, repo) {
  try {
    const response = await fetchContributorStats(owner, repo);
    const { /* status, url, headers, */ data } = response;

    if (Array.isArray(data)) {
      const formattedContributorStats = data.map(({ total, author }) => ({
        total: total,
        author: author
      }));

      // prettyPrint(formattedContributorStats);
      return formattedContributorStats;
    }

    prettyPrint(
      `[WARNING] No repoStatsByContributor found for Owner: ${owner} Repo: ${repo}`
    );
    prettyPrint('Instead found: ');
    prettyPrintJson(data);
  } catch (e) {
    prettyPrint(
      `[ERROR] stats-generator.github.getRepoStatsByContributor | {"owner": ${owner}, "repo": ${repo}} | ${e}`
    );
  }

  return {};
};

const fetchStats = async function(owner, repo) {
  // 1. Graphql, includes releases.totalCount, issues.totalCount, forks.totalCount, pullRequests.totalCount
  // const repoStats = await fetchRepositoryStats(owner, repo);
  // prettyPrint(Object.keys(repoStats.repository));
  /*
    [
      'id',               'collaborators',
      'releases',         'issues',
      'forks',            'pullRequests',
      'pushedAt',         'milestones',
      'mentionableUsers', 'languages',
      'labels',           'isFork',
      'deployments',      'commitComments'
    ]*/

  // 2a. Individual Contributor stats
  const contributorStats = await getRepoStatsByContributor(owner, repo); // strips out the 'weeks' object

  // prettyPrint(contributorStats);

  // TO DO - Find a better way than listing all contributors
  // 2b. Number of contributors by way of listing all contributors
  // const contributors = await octokit.repos.listContributors({
  //   owner,
  //   repo
  // });
  // prettyPrint(Object.keys(contributors));
  // const contributorCount = contributors.data || 0;

  // return { repoStats: repoStats.repository, contributorStats };
  return { contributorStats };
};

// (async function() {
//   octokit = await createGithubClient(DEFAULT_ORG, '', token);
// })();

module.exports = {
  fetchStats
};
