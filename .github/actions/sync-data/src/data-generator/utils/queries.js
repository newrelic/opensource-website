const { SCREENSHOT_FOLDERS } = require('./constants');

const repositoryStats = (owner, repo) => {

  // TO DO - Ascertain Github's GraphQL query limits
  const screenshots = Object.entries(SCREENSHOT_FOLDERS).reduce((p, [ key, value ]) => {
    const screenShotFragment = `
      ` + key + `: object(expression: "` + value + `") {
        ... on Tree {
          entries {
            name
          }
        }
      }
    `
    return p + `
    
    ` + screenShotFragment;
  }, '');

  return `
  {
    repository(name: "` + repo + `", owner: "` + owner + `") {
      id
      collaborators {
        totalCount
      }
      releases {
        totalCount
      }
      openIssues: issues(filterBy: {states: OPEN }) {
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
      ` + screenshots + `
    }
  }
`;
}

module.exports = {
  repositoryStats 
}