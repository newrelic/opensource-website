const { get } = require('../lib/ramda-sheep');
const { SCREENSHOT_FOLDERS } = require('../../shared/constants');
const fetchAllPages = require('../github/fetch-all-pages');

// rate limiting cost of this query is ~1
const reposForOrgQuery = ({ org, paginationLimit, timeRange, screenshots }) => (
  endCursor
) => ({
  query: /* GraphQL */ `
    query reposForOrg($endCursor: String) {
      repos: search(query: "org:${org} fork:false archived:false is:public", type: REPOSITORY, first: ${paginationLimit}, after: $endCursor) {
        repositoryCount
        nodes {
          ... on Repository {
            id
            name
            nameWithOwner
            owner {
              login
            }
            collaborators {
              totalCount
            }
            releases {
              totalCount
            }
            tags: refs(refPrefix: "refs/tags/") {
              totalCount
            }
            latestTag: refs(refPrefix: "refs/tags/", last: 1, , orderBy: {field: TAG_COMMIT_DATE, direction: ASC}) {
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
            totalCommits: defaultBranchRef {
              target {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
            lastSixMonths: defaultBranchRef {
              target {
                ... on Commit {
                  history(since: "${timeRange}") {
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
            ${screenshots}
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      rateLimit {
        cost
        limit
        remaining
        resetAt
      }
    }
  `,
  variables: {
    endCursor,
  },
});

/**
 * Gets the date one month ago, accounting for different month lengths
 */
const getDateOneMonthAgo = () => {
  const d = new Date();
  // console.log(d.toLocaleDateString());
  const month = d.getMonth();
  d.setMonth(d.getMonth() - 6);
  while (d.getMonth() === month) {
    d.setDate(d.getDate() - 6);
  }
  return d.toISOString();
};

/**
 * Builds the screenshot query fragment
 */
const screenshotsQuery = Object.entries(SCREENSHOT_FOLDERS).reduce(
  (p, [key, value]) => {
    const screenShotFragment = `
    ${key}: object(expression: "${value}") {
      ... on Tree {
        entries {
          name
        }
      }
    }
  `;
    return `${p}
  
  ${screenShotFragment}`;
  },
  ''
);

const getAllReposForOrg = (github) => async ({
  org,
  paginationLimit,
  timeRange = getDateOneMonthAgo(),
  screenshots = screenshotsQuery,
}) => {
  const { results: allRepos } = await fetchAllPages(github, {
    createQuery: reposForOrgQuery({
      org,
      paginationLimit,
      timeRange,
      screenshots,
    }),
    resultSelector: get('repos'),
  });

  const repos = allRepos.filter((repo) => repo && !repo.archived && !repo.fork);

  // return just the string representing the repo name
  return { repos };
};

module.exports = getAllReposForOrg;
