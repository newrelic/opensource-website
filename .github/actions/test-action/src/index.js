const core = require('@actions/core');
const { generateData } = require('./data-generator/index');
const { script } = require('./stats-generator/index');
const runScript = require('./stats-generator/lib/run-script');

/**
 * To generate both projects and project-stats (old method):
 * >> `GH_TOKEN=<token> PROJECTS=<true|false> PROJECT_STATS=<true|false> npm start`
 *
 * To only generate project-stats:
 * >> `GH_TOKEN=<token> PROJECT_STATS=<true|false> npm start`
 */
async function run() {
  try {
    const projects =
      (core.getInput('projects') || process.env.PROJECTS) === 'true';
    const project_stats =
      (core.getInput('project-stats') || process.env.PROJECT_STATS) === 'true';

    // Use data-generator for generating projects, but project_stats no longer supported
    if (projects) {
      await generateData({ projects, project_stats: false });
    }

    // Use stats-generator to generate project-stats since it uses paginated GraphQL GitHub client
    if (project_stats) {
      await runScript(script);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
