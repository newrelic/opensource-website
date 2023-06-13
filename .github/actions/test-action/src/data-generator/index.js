/**
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

const { organizationRepositoryIterator, fetchRepo } = require('./fetch');
const { ORG_REPOS } = require('../shared/constants');
const { prettyPrint, sleep } = require('../shared/helpers');

/**
 * 1. Create a personal access token with the following scopes:
 *   user - Just read:user
 *   public_repo - Yes
 *   repo
 *   repo_deployment
 *   repo:status - Yes
 *   read:repo_hook
 *   read:org
 *   read:public_key
 *   read:gpg_key
 * 2. Run the script like `GH_TOKEN=<your token> npm start`
 */

const OVERWRITE_EXISTING = true;

function formatRepositories(repositories) {
  const humanize = (slug) => slug.replace('-', ' ');
  return repositories.map((r) => {
    return {
      name: r.name,
      fullName: r.full_name.toLowerCase(),
      slug: r.full_name.replace('/', '-'),
      owner: {
        login: r.owner.login,
        type: r.owner.type,
      },
      title: humanize(r.name),
      supportUrl: 'https://discuss.newrelic.com/', // TO DO
      githubUrl: r.html_url,
      permalink: `https://opensource.newrelic.com/projects/${r.full_name}`,
      iconUrl: `${r.html_url}/blob/master/icon.png?raw=true`, // TO DO - Can we rely on this?
      shortDescription: '', // TO DO
      description: r.description,
      // "screenshots": [ "https://github.com/newrelic/nr1-workload-geoops/blob/master/assets/documentation-images/detail-panel-legend.png?raw=true", "https://github.com/newrelic/nr1-workload-geoops/blob/master/assets/documentation-images/file-upload.png?raw=true" ],
      ossCategory: {
        title: 'Lorem Ipsum',
        slug: 'lorem-ipsum',
      }, // TO DO
      projectTags: [],
      primaryLanguage: r.language,
      tags: ['point-of-sale', 'maps', 'infrastructure'], // TO DO
      website: {
        title: humanize(r.name), // TO DO - Can/should be different
        url: r.html_url, // TO DO - this won't always be the Github repo url?
      },
    };
  });
}

function writeProjectsToGatsby(projects) {
  projects.forEach((project) => {
    const fileName = `${project.fullName.replace('/', '-')}.json`;
    const outputDir = path.resolve(
      __dirname,
      '../../../../../src/data/projects'
    );
    const outputPath = `${outputDir}/${fileName}`.toLowerCase();
    const exists = fs.existsSync(outputPath);
    const jsonContent = JSON.stringify(project, null, 2);

    if (OVERWRITE_EXISTING || !exists) {
      fs.writeFileSync(outputPath, jsonContent);
    }
  });
}

/*
 * Generates files with a filename like:
 * projects/<organization>-<repository-name>.json
 */
async function generateProjects({ iteratorOptions }) {
  const delay = 2000;

  if (iteratorOptions.repo) {
    const response = await fetchRepo({
      options: iteratorOptions,
    });

    processProjects(response);
    await sleep(delay);
    return;
  }

  const iterator = organizationRepositoryIterator(iteratorOptions)();
  let result = iterator.next();
  const response = await result.value;
  processProjects(response);

  while (!result.done) {
    result = await iterator.next();
    const response = await result.value;
    processProjects(response);
    await sleep(delay);
  }
}

function processProjects(response) {
  const { /* status, url, headers, */ data } = response;
  const dataAsArray = Array.isArray(data) ? data : [data];
  const filteredRepos = dataAsArray.filter((r) => r && !r.archived && !r.fork);

  prettyPrint(
    `After removing Archived repositories found ${filteredRepos.length} results:`
  );
  prettyPrint(
    filteredRepos.map((d) => `id: ${d.id} ${d.full_name}`).join('\n')
  );

  writeProjectsToGatsby(formatRepositories(filteredRepos));
}

/**
 * RequestError [HttpError]: You have triggered an abuse detection mechanism. Please wait a few minutes before you try again.
 */
async function generateData({ projects = false, project_stats = false }) {
  const defaultOptions = { pages: 0, start_page: 1, per_page: 100 };

  prettyPrint(`Projects: ${projects} | Project_Stats: ${project_stats}`);

  if (projects) {
    prettyPrint('Processing projects...');
    for (const { org, repo = false } of ORG_REPOS) {
      await generateProjects({
        iteratorOptions: {
          ...defaultOptions,
          org,
          repo,
        },
      });
      await sleep(2000);
    }
  }
}

module.exports = {
  generateData,
};
