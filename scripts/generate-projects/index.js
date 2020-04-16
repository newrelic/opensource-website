
/*
 * 
 * Purpose:
 * A script to generate the necessary Github repository (project/project-stats) data files for the opensource.newrelic.com
 * Github provides 2 different API's for accessing this information, their REST-based API and their newer GraphQL API
 * 
 * Resources:
 * - https://octokit.github.io/rest.js/v17
 * - https://developer.github.com/v4/
 * - https://github.com/octokit/graphql.js
 * 
 */

const path = require('path');
const fs = require('fs');
const {
  fetchRepositories,
  fetchStats
} = require('./fetch');

const prettyPrintJson = (json) => console.log(JSON.stringify(json, null, 2));
const prettyPrint = (message) => console.log(message);

/*
 * 1. Create a personal access token with the following scopes:
    user - Just read:user
    public_repo - Yes
    repo
    repo_deployment
    repo:status - Yes
    read:repo_hook
    read:org
    read:public_key
    read:gpg_key
  2. Run the script like `GH_TOKEN=<your token> npm start`
 */

const OVERWRITE_EXISTING = true;

function formatRepositories(repositories) {
  const humanize = (slug) => slug.replace('-', ' ');

  return repositories.map(r => {
    return {
      "name": r.name,
      "fullName": r.full_name,
      "owner": {
        "login": r.owner.login,
        "type": r.owner.type,
      },
      "title": humanize(r.name),
      "supportUrl": "https://discuss.newrelic.com/", // TO DO
      "githubUrl": r.html_url,
      "permalink": "https://opensource.newrelic.com/projects/" + r.full_name,
      "iconUrl": r.html_url + "blob/master/icon.png?raw=true", // TO DO - Can we rely on this?
      "shortDescription": "", // TO DO
      "description": r.description,
      "screenshots": [
        // TO DO
      ],
      "ossCategory": {
        "title": "Lorem Ipsum",
        "slug": "lorem-ipsum"
      }, // TO DO
      "projectType": {
        "title": "New Relic One App",
        "slug": "nr1-app"
      }, // TO DO
      "primaryLanguage": r.language,
      "tags": [
        "point-of-sale",
        "maps",
        "infrastructure"
      ], // TO DO
      "website": {
        "title": humanize(r.name), // TO DO - Can/should be different
        "url": r.html_url // TO DO - this won't always be the Github repo url?
      },
      "version": "0.1.0"
    }
  })
}

function formatStats (project, stats) {
  const { repoStats, contributorStats } = stats;
  const contributorCount = contributorStats.length;

  return {
    "projectFullName": project.fullName,
    "issues": {
      "open": repoStats.issues.totalCount // Filtering by a status of OPEN
    },
    "releases": repoStats.releases.totalCount, // TO DO
    "commits": repoStats.defaultBranchRef.target.history.totalCount,
    "contributors": contributorCount,
    "pullRequests": {
      "open": repoStats.pullRequests.totalCount // Filtering by a status of OPEN
    },
    "searchCategory": "good first issue", // TO DO - Use this to go get cachedIssues? We should move this onto the project object
    "cachedIssues": repoStats.issues.nodes || [], // Note: createdBy is author.login
    "cachedContributors": contributorStats.map(i => ({
      id: i.author.id,
      login: i.author.login,
      avatar_url: i.author.avatar_url,
      html_url: i.author.html_url,
      total_contributions: i.total
    })),
    "languages": repoStats.languages.nodes
  }
}

function writeProjectToGatsby(project) {
  const fileName = project.fullName.replace('/', '-') + '.json';
  const outputDir = path.resolve(__dirname, '../../src/data/projects');
  const outputPath = outputDir + '/' + fileName; 
  const exists = fs.existsSync(outputPath);
  const jsonContent = JSON.stringify(project, null, 2);
  
  prettyPrint('Writing ' + fileName);

  if (OVERWRITE_EXISTING || !exists) {
    fs.writeFileSync(outputPath, jsonContent);
  }
}

async function calculateAndWriteProjectStats(project) {
  const owner = project.owner.login;
  const repo = project.name;

  prettyPrint('Fetching stats for ' + project.fullName);

  const stats = await fetchStats(owner, repo);
  // prettyPrintJson(stats);

  const projectStats = formatStats(project, stats);
  // prettyPrintJson(projectStats);

  writeProjectStatsToGatsby(project, projectStats);
}

function writeProjectStatsToGatsby(project, projectStats) {
  const fileName = project.fullName.replace('/', '-');
  const outputDir = path.resolve(__dirname, '../../src/data/project-stats');
  const outputPath = outputDir + '/' + fileName + '.json'; 
  const exists = fs.existsSync(outputPath);
  const jsonContent = JSON.stringify(projectStats, null, 2);
  
  if (OVERWRITE_EXISTING || !exists) {
    fs.writeFileSync(outputPath, jsonContent);
  }
}

async function start () {
  prettyPrint('Fetching repositories...');
  // projects/<organization>-<repository-name>.json
  const repos = await fetchRepositories({ page: 4, per_page: 25 });
  const formattedRepos = formatRepositories(repos);
  formattedRepos.forEach(writeProjectToGatsby);

  prettyPrint('Calculating statistics for each project...');
  // project-stats/<organization>-<repository-name>.json
  formattedRepos.forEach(calculateAndWriteProjectStats);
}


(async function () {
  start()
})();
