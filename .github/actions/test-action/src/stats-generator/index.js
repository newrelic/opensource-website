const core = require('@actions/core');
const fsp = require('fs').promises;
const path = require('path');

const { createGithubClient } = require('./github/github-client');
const { calculateAndWriteProjectStats } = require('./processor');
const { ORG_REPOS, EXCLUDED_PROJECTS } = require('../shared/constants');
const { sleep } = require('../shared/helpers');

const getAllReposForOrg = require('./queries/get-all-repos-for-org');
const log = require('./lib/log');

/**
 * Generates project stats files by fetching all non-fork and unarchived repos in a list of orgs.
 * @param {*} organizations The organizations to query
 * @param {*} paginationLimit Limits the number of repos that get called at once
 */
async function generateStatsForOrgs({ organizations, paginationLimit = 5 }) {
  const GH_TOKEN = core.getInput('github-token') || process.env.GH_TOKEN;
  const delay = 1000;

  log.info(
    `Generating stats for orgs: [${organizations
      .map((o) => `${o.org}`)
      .join(',')}]`
  );

  let results = [];
  for (const { org } of organizations) {
    const github = await createGithubClient(org, '', GH_TOKEN);

    log.magenta(`Fetching all repos for org: ${org}`);
    const { repos } = await getAllReposForOrg(github)({
      org,
      paginationLimit,
    });

    log.magenta(`Number of fetched repos: ${repos.length}`);
    results = [...results, ...repos];

    // Now that repos were fetched, get contributor stats and write files
    log.magenta(`Begin - process stats and write files for org: ${org}`);
    for (const repo of repos) {
      await calculateAndWriteProjectStats(repo);
      await sleep(delay);
    }
    log.magenta(`Finished - stats processed for org: ${org}`);
  }

  return results;
}

/**
 * Returns fullName from project file
 * @param {*} file Project file
 * @param {*} outputDir Directory of project file
 */
async function getProjectFullName(file, outputDir) {
  const data = await fsp.readFile(path.join(outputDir, file));
  return JSON.parse(data).fullName;
}

/**
 * Generates list of projects that are in src/data/projects plus those we're
 * explicitly not generating stats for.
 */
async function getProjectsAndExclusions() {
  const workingDir =
    process.env.GITHUB_WORKSPACE || path.join(__dirname, '../../../../../');
  const projectsDir = core.getInput('stats-dir') || 'src/data/projects';
  const outputDir = path.resolve(workingDir, projectsDir);

  const projectFiles = await fsp.readdir(outputDir);
  const projects = await Promise.all(
    projectFiles.map((file) => getProjectFullName(file, outputDir))
  );

  log.info(
    `Number of projects present in src/data/projects: ${projects.length}`
  );

  return [...projects, ...EXCLUDED_PROJECTS];
}

/**
 * Calculates and outputs object containing diff with:
 * 1) stats have been generated but no corresponding project file
 * 2) project file exists, but stats weren't generated
 * @param {*} results Stats data resulting from GitHub queries
 */
async function generateDiff(results) {
  const projectList = await getProjectsAndExclusions();
  const repos = results.map((r) => r.nameWithOwner);
  const missingProjects = repos.filter((r) => !projectList.includes(r));

  // also filter on EXCLUDED_PROJECTS since that's included in projectList, but
  // we don't want stats for those
  const projectsWhereNoStatsGenerated = projectList.filter(
    (p) => !repos.includes(p) && !EXCLUDED_PROJECTS.includes(p)
  );

  return { missingProjects, projectsWhereNoStatsGenerated };
}

/**
 * Main entrypoint. Fetches stats data through GitHub GraphQL Client, then
 * performs diff to output discrepancies in generated data.
 */
async function script() {
  const PAGINATION_LIMIT = 5;

  // TODO: First thing script should do is delete all files from project-stats directory to remove deleted projects

  // Get all stats data for newrelic and newrelic-experimental orgs
  const results = await generateStatsForOrgs({
    organizations: ORG_REPOS,
    paginationLimit: PAGINATION_LIMIT,
  });
  log.info(`Total fetched repos: ${results.length}`);

  const { missingProjects, projectsWhereNoStatsGenerated } = await generateDiff(
    results
  );

  // Just logging this for info ATM
  log.info(
    `Projects with generated stats but no corresponding file in src/data/projects: ${missingProjects.length}`
  );
  log.magenta(
    `\n -- Stats generated, but no corresponding project json file detected --`
  );
  log.red(missingProjects);
  log.magenta(`-----------------------------------------\n`);

  log.info(
    `Projects exist but no stats were generated: ${projectsWhereNoStatsGenerated.length}`
  );
  log.magenta(`\n -- Projects missing generated stats files --`);
  log.red(projectsWhereNoStatsGenerated);
  log.magenta(`-----------------------------------------`);

  return undefined;
}

module.exports = {
  script,
};
