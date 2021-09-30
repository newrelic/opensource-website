// https://www.gatsbyjs.org/docs/actions/#createPage
const path = require(`path`);
const externalRedirects = require('../src/data/external-redirects.json');

const getProjectComponent = (projectType) => {
  if (projectType === 'external') {
    return path.resolve('./src/templates/external-project-page.js');
  }

  // @future
  // if (projectType === 'partner') {
  //   return path.resolve('./src/templates/partner-project-page.js');
  // }

  return path.resolve(`./src/templates/project-page.js`);
};

const createProjectPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query AllProjects {
      allProjects {
        edges {
          node {
            id
            name
            slug
            fullName
            permalink
            projectType
          }
        }
      }
    }
  `);
  const pages = result.data.allProjects.edges;

  pages.forEach(({ node }) => {
    const component = getProjectComponent(node.projectType);
    const path = `/projects/${node.fullName}`;
    createPage({
      path, // projects/{org/user}/{repository-foo-name}, ex. projects/newrelic/nr1-workload-geoops
      component,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.

        slug: node.slug, // {org/user}-{repository-foo-name}, ex. newrelic-nr1-workload-geoops
        pagePath: path,
      },
    });
  });
};

const createExternalRedirects = async ({ actions }) => {
  const { createRedirect } = actions;
  externalRedirects.forEach(({ toUrl, fromPaths }) => {
    fromPaths.forEach((path) => {
      createRedirect({
        fromPath: path,
        toPath: toUrl,
        isPermanent: true,
        redirectInBrowser: true,
      });
    });
  });
};

module.exports = async (params) => {
  await createProjectPages(params);
  await createExternalRedirects(params);
};
