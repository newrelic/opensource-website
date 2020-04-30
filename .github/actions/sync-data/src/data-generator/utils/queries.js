const { SCREENSHOT_FOLDERS } = require('./constants');

const repositoryStats = (owner, repo) => {
  // TO DO - Ascertain Github's GraphQL query limits
  const screenshots = Object.entries(SCREENSHOT_FOLDERS).reduce(
    (p, [key, value]) => {
      const screenShotFragment =
        `
      ${  key  }: object(expression: "${  value  }") {
        ... on Tree {
          entries {
            name
          }
        }
      }
    `
      return (
        p +
        `
    
    ` +
        screenShotFragment
      );
    },
    ''
  );

  return (`
    query RepositoryStats ($owner: String!, $repo: String!) {
      repository(name: $repo, owner: $owner) {
        id
        collaborators {
          totalCount
        }
        releases {
          totalCount
        }
        tags: refs(refPrefix: "refs/tags/") {
          totalCount
        }
        latestTag: refs(refPrefix: "refs/tags/", last: 1) {
          nodes {
            id
            name
            target {
              ... on Commit {
                id
                authoredDate
              }
            }
          }
        }
        openIssues: issues(filterBy: {states: OPEN}) {
          totalCount
        }
        goodFirstIssues: issues(filterBy: {states: OPEN, labels: "good first issue"}, first: 3) {
          totalCount
          nodes {
            id
            title
            url
            createdAt
            comments {
              totalCount
            }
            author {
              login
              ... on User {
                id
                email
                name
              }
            }
            number
          }
        }
        forks {
          totalCount
        }
        pullRequests(states: OPEN) {
          totalCount
        }
        pushedAt
        defaultBranchRef {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
        milestones(states: OPEN) {
          totalCount
        }
        mentionableUsers {
          totalCount
        }
        languages(first: 10) {
          nodes {
            id
            name
            color
          }
        }
        isFork
        deployments {
          totalCount
        }
        commitComments {
          totalCount
        }
        licenseInfo {
          id
          name
          spdxId
          url
          featured
          key
        }
        licenseInfo {
          id
          name
          spdxId
          url
          featured
          key
        }
        ${  screenshots  }
      }
    }
  `)
};

module.exports = {
  repositoryStats,
};
