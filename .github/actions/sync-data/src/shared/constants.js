const ORG_REPOS = [
  {
    org: 'newrelic'
  },

  // TO DO - resolve permissions on GH_TOKEN to fix this error:
  // (node:12679) UnhandledPromiseRejectionWarning: GraphqlError: Must have push access to view repository collaborators.
  {
    org: 'newrelic-experimental'
  }

  // For more specific org/repo combinations, i.e. a solution to how to include a partner project
  // or a project we contribute to in other organizations
  // {
  //   "org": "newrelic",
  //   "repo": "nr1-workload-geoops"
  // }
];

const EXCLUDED_PROJECTS = [
  'adopt-open-jdk',
  'open-telemetry/opentelemetry-go',
  'open-telemetry/opentelemetry-java',
  'open-telemetry',
  'w3c-trace-context',
  'newrelic-developer-toolkit',
  'newrelic-extends_newrelic_rpm',
  'newrelic-open-source-office',
  'newrelic-open-source-tools',
  'newrelic-sidecar'
];

// TO DO - Ascertain Github's GraphQL query limits
// If we end up with too many of these, GraphQL could get grumpy
const SCREENSHOT_FOLDERS = {
  screenshots: 'master:screenshots/',
  assetsScreenshots: 'master:assets/screenshots/',
  assetsDocumentationImages: 'master:assets/documentation-images/',
  catalogScreenshots: 'master:catalog/screenshots/'
};

module.exports = {
  ORG_REPOS,
  EXCLUDED_PROJECTS,
  SCREENSHOT_FOLDERS
};
