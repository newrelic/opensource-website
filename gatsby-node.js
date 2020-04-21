/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require(`fs`);
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * Custom Type Definitions
 */
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const additionalTypeDefs = fs.readFileSync(`type-defs.gql`, {
    encoding: `utf-8`
  });
  createTypes(additionalTypeDefs);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `projectsJson`) {
    const basePath = `projects`;
    const slug = createFilePath({ node, getNode, basePath });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query allProjects {
      allProjectsJson {
        edges {
          node {
            id
            name
            fullName
            permalink
          }
        }
      }
    }
  `);
  const pages = result.data.allProjectsJson.edges;

  pages.forEach(({ node }) => {
    createPage({
      path: `projects/${node.fullName}`,
      component: path.resolve(`./src/templates/project-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        fullName: node.fullName
      }
    });
  });
};
