const path = require(`path`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query allProjects {
      allProjectsJson {
        edges {
          node {
            id
            name
            slug
            fullName
            permalink
          }
        }
      }
    }
  `);
  const pages = result.data.allProjectsJson.edges;

  pages.forEach(({ node }) => {
    // https://www.gatsbyjs.org/docs/actions/#createPage
    createPage({
      path: `projects/${node.fullName}`, // {org/user}/{repository-foo-name}, ex. newrelic/nr1-workload-geoops
      component: path.resolve(`./src/templates/project-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.

        slug: node.slug // {org/user}-{repository-foo-name}, ex. newrelic-nr1-workload-geoops
      }
    });
  });
};
