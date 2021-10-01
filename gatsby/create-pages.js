// https://www.gatsbyjs.org/docs/actions/#createPage
const path = require(`path`);

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
  const { createPage, createRedirect } = actions;
  const result = await graphql(`
    query AllProjects {
      allProjects {
        edges {
          node {
            id
            name
            slug
            fullName
            redirects
            permalink
            projectType
          }
        }
      }
    }
  `);
  const pages = result.data.allProjects.edges;

  const appendTrailingSlash = (pathname) =>
    pathname.endsWith('/') ? pathname : `${pathname}/`;

  pages.forEach(({ node }) => {
    const component = getProjectComponent(node.projectType);
    const path = `/projects/${node.fullName}`;
    if (node.redirects) {
      node.redirects.map((redirect) => {
        // Create redirects for paths with and without a trailing slash
        const pathWithTrailingSlash = appendTrailingSlash(redirect);
        const pathWithoutTrailingSlash = pathWithTrailingSlash.slice(0, -1);

        createRedirect({
          fromPath: pathWithTrailingSlash,
          toPath: path,
          redirectInBrowser: true,
          isPermanent: true,
        });

        createRedirect({
          fromPath: pathWithoutTrailingSlash,
          toPath: path,
          redirectInBrowser: true,
          isPermanent: true,
        });
      });
    }
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

module.exports = async (params) => {
  await createProjectPages(params);
};
