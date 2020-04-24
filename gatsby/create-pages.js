const path = require(`path`);

const createProjectPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query allProjects {
      allProjects {
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
  const pages = result.data.allProjects.edges;

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

/*
 * Note:
 *    Although our exploreProjectsFields fragment defined in src/fragments/index.js is available in /pages,
 *    it is not automagically available when running graphql here. For now, we've copied it.
 *
 * TO DO:
 *    Investigate if Gatsby has this available somewhere when running the API methods, perhaps
 *    something like graphql.fragments[name of fragment]
 */
const createExploreProjects = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query allProjects {
      allProjects {
        edges {
          node {
            ...exploreProjectsFields
          }
        }
      }
    }

    fragment exploreProjectsFields on Projects {
      id
      fullName
      githubUrl
      stats {
        id
        contributors
        commits
        languages {
          id
          name
          color
        }
        releases
        screenshots
      }
      description
      iconUrl
      name
      ossCategory {
        slug
        title
      }
      owner {
        login
        type
      }
      permalink
      primaryLanguage
      projectType {
        slug
        title
      }
      shortDescription
      supportUrl
      tags
      title
      version
      website {
        title
        url
      }
    }
  `);

  const allProjects = result.data.allProjects.edges;

  createPage({
    path: '/explore-projects',
    component: path.resolve(`./src/templates/explore-projects.js`),
    context: {
      projectData: {
        allProjects: allProjects.map(p => p.node),
        options: {
          indexStrategy: 'Prefix match',
          searchSanitizer: 'Lower Case',
          TitleIndex: true,
          AuthorIndex: true,
          SearchByTerm: true
        }
      }
    }
  });
};

module.exports = async params => {
  createProjectPages(params);
  createExploreProjects(params);
};
