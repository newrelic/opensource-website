const repositoryStats = (owner, repo) => {
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
      issues(filterBy: {states: OPEN, labels: "good first issue"}, first: 3) {
        totalCount
        nodes {
          id
          title
          url
          createdAt
          comments {
            totalCount
          }
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
    }
  }
`;
}

module.exports = {
  repositoryStats 
}