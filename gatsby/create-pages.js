const path = require(`path`);

const allProjectsQuery = `
  query allProjects {
    allProjects(filter: {projectType: {eq: "newrelic"}}) {
      edges {
        node {
          ...exploreProjectsFields
        }
      }
    }
    allCategories: allProjects {
      group(field: ossCategory___title) {
        fieldValue
        totalCount
      }
    }
    allLanguages: allProjects {
      group(field: stats___languages___name) {
        fieldValue
        totalCount
      }
    }
    
    allProjectTags {
      group(field: title) {
        fieldValue
      }
    }
  }

  fragment exploreProjectsFields on Projects {
    id
    slug
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
      description
    }
    owner {
      login
      type
    }
    permalink
    primaryLanguage
    projectTags {
      slug
      title
    }
    shortDescription
    supportUrl
    projectTags {
      title
      slug
    }
    title
    version
    website {
      title
      url
    }
  }
`;

const getProjectComponent = projectType => {
  if (projectType === 'external') {
    return path.resolve('./src/templates/external-project-page.js');
  }

  if (projectType === 'external') {
    return path.resolve('./src/templates/partner-project-page.js');
  }

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

    // https://www.gatsbyjs.org/docs/actions/#createPage
    createPage({
      path: `projects/${node.fullName}`, // {org/user}/{repository-foo-name}, ex. newrelic/nr1-workload-geoops
      component,
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

  const allProjectsResult = await graphql(allProjectsQuery);
  const {
    allProjects,
    allCategories,
    allLanguages,
    allProjectTags
  } = allProjectsResult.data;

  createPage({
    path: '/explore-projects',
    component: path.resolve(`./src/templates/explore-projects.js`),
    context: {
      projectData: {
        allProjects: allProjects.edges.map(p => p.node),
        allLanguages: allLanguages.group,
        allCategories: allCategories.group,
        allProjectTags: allProjectTags.group,
        // sortBy:
        searchEngineOptions: {
          indexStrategy: 'Prefix match',
          searchSanitizer: 'Lower Case',
          indexFields: [
            ['slug'],
            ['fullName'],
            ['name'],
            ['description'],
            ['ossCategory', 'title'],
            ['website', 'title'],
            ['projectTags', 'title'],
            ['primaryLanguage']

            // Nested array syntax doesn't work until this PR is merged:
            // https://github.com/bvaughn/js-search/pull/78/files#diff-5d56a676b2913ba26d67295fe642d9b0R18
            // ['stats', 'languages', '[]', 'name']
          ],
          removeStopWords: true
        }
      }
    }
  });
};

module.exports = async params => {
  createProjectPages(params);
  createExploreProjects(params);
};
