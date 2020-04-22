const core = require('@actions/core');
const { generateData } = require('./data-generator/index');

/**
 * Run the script like `GH_TOKEN=<token> PROJECTS=<true|false> PROJECT_STATS=<true|false> npm start`
 */
async function run() {
  try {
    const projects =
      (core.getInput('projects') || process.env.PROJECTS) === 'true';
    const project_stats =
      (core.getInput('project-stats') || process.env.PROJECT_STATS) === 'true';

    generateData({ projects, project_stats });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
