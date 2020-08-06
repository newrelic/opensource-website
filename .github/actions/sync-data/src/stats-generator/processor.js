const core = require('@actions/core');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const { fetchStats } = require('./github/fetchContributorStats');
const { SCREENSHOT_FOLDERS } = require('../shared/constants');
const { prettyPrint } = require('../shared/helpers');

const OVERWRITE_EXISTING = true;
const DEFAULT_DIR = 'src/data/project-stats';

async function calculateAndWriteProjectStats(project) {
  const owner = project.owner.login;
  const repo = project.name;

  // prettyPrint('Fetching stats for ' + project.fullName);

  const stats = await fetchStats(owner, repo);

  if (stats != null) {
    writeProjectStatsToGatsby(project, formatStats(project, stats));
  } else {
    prettyPrint(
      `[WARNING] at processor.calculateAndWriteProjectStats \n  | owner: ${owner}, repo: ${repo} \n  | No stats found, skipping writing stats. Check to see if this is expected (i.e. does repo have any contributions?).\n`
    );
  }
}

function formatStats(project, stats) {
  // const { repoStats, contributorStats } = stats;
  const { contributorStats } = stats;
  const contributorCount = contributorStats.length;

  const screenshots = Object.entries(SCREENSHOT_FOLDERS).reduce(
    (p, [key, path]) => {
      const fileNames = project[key];

      if (!fileNames || fileNames === null) {
        return p;
      }

      // prettyPrintJson(fileNames);
      // TODO filter out .gitkeep

      if (Array.isArray(fileNames.entries)) {
        const fullPaths = fileNames.entries.map((file) => {
          const dir = path.replace(':', '/'); // Replace "master:" with "master/"
          // const url = `https://github.com/` + project.fullName + `/blob/` + dir + file.name + '?raw=true';
          const url = `https://raw.githubusercontent.com/${project.nameWithOwner}/${dir}${file.name}`;
          return url;
        });
        return p.concat(fullPaths);
      }
      return p;
    },
    []
  );

  const cachedContributors = Array.isArray(contributorStats)
    ? contributorStats.map((i) => {
        return {
          id: _.get(i, 'author.id'),
          login: _.get(i, 'author.login'),
          avatarUrl: _.get(i, 'author.avatar_url'),
          htmlUrl: _.get(i, 'author.html_url'),
          contributions: _.get(i, 'total'),
        };
      })
    : [];

  const latestReleaseName = _.get(project, 'latestTag.nodes[0].name', false);
  const latestRelease = {
    name: latestReleaseName,
    date: _.get(project, 'latestTag.nodes[0].target.authoredDate', null),
  };

  return {
    projectFullName: _.get(project, 'nameWithOwner'),
    issues: {
      open: _.get(project, 'openIssues.totalCount'),
    },
    releases: _.get(project, 'tags.totalCount'),
    latestRelease: latestReleaseName ? latestRelease : null,
    commits: _.get(project, 'totalCommits.target.history.totalCount'),
    lastSixMonthsCommitTotal: _.get(
      project,
      'lastSixMonths.target.history.totalCount'
    ),
    contributors: contributorCount,
    pullRequests: {
      open: _.get(project, 'pullRequests.totalCount'), // Filtering by a status of OPEN
    },
    searchCategory: 'good first issue',
    cachedIssues: project.goodFirstIssues.nodes.map((node) => ({
      ...node,
      createdBy:
        _.get(node, 'author.name') || _.get(node, 'author.login') || 'Unknown',
    })), // Note: createdBy is author.login
    cachedContributors,
    languages: _.get(project, 'languages.nodes'),
    screenshots: screenshots,
    license: project.licenseInfo ? { ...project.licenseInfo } : null,
  };
}

function writeProjectStatsToGatsby(project, projectStats) {
  const workingDir =
    process.env.GITHUB_WORKSPACE || path.join(__dirname, '../../../../../');
  const statsDir = core.getInput('stats-dir') || DEFAULT_DIR;
  const outputDir = path.resolve(workingDir, statsDir);

  const fileName = project.nameWithOwner.replace('/', '-');
  const outputPath = `${outputDir}/${fileName}.json`.toLowerCase();

  const exists = fs.existsSync(outputPath);
  const jsonContent = JSON.stringify(projectStats, null, 2);

  prettyPrint(`Writing File: ${outputPath}`);

  if (OVERWRITE_EXISTING || !exists) {
    fs.writeFileSync(outputPath, jsonContent);
  }
}

module.exports = {
  calculateAndWriteProjectStats,
};
