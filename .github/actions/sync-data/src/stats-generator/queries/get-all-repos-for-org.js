const { get } = require('../lib/ramda-sheep');
const { SCREENSHOT_FOLDERS } = require('../../shared/constants');
const fetchAllPages = require('../github/fetch-all-pages');

// rate limiting cost of this query is ~1
const reposForOrgQuery = ({
  org,
  paginationLimit,
  timeRange,
  screenshots
}) => endCursor => ({
  query: /* GraphQL */ `
    # query reposForOrg($pullRequestStates: [PullRequestState!], $endCursor: String) {
    query reposForOrg($endCursor: String,
    #  $timeRange: GitTimestamp = timeRange, 
    #  $screenshots: String = screenshots
     ) {
      # organization(login: "${org}") {
      # 	id
      # 	login
      # 	repositories(first: 100, after: $endCursor , orderBy: {field: NAME, direction: ASC}) {
      # 		nodes {
      # 			id
      # 			name
      # 			isArchived
      # 			pullRequests(first: 1, states: $pullRequestStates) { totalCount }
      # 		}
      # 		pageInfo { hasNextPage endCursor }
      # 	}
      # }

      # organization(login: "${org}") {
      # 	repositories(first: 100, after: $endCursor, isFork: false, privacy: PUBLIC) {
      # 		totalCount
      # 		nodes {
      # 			id
      # 			name
      # 			nameWithOwner
      # 			owner {
      # 				login
      # 			}
      # 			url
      # 			description
      # 			languages(first: 10) {
      # 				nodes {
      # 					name
      # 				}
      # 			}
      # 			primaryLanguage {
      # 				name
      # 			}
      # 			isArchived
      # 			licenseInfo {
      # 				id
      # 				name
      # 				spdxId
      # 				url
      # 				featured
      # 				key
      # 			}
      # 		}
      # 		pageInfo {
      # 			endCursor
      # 			hasNextPage
      # 		}
      # 	}
      # }
      # rateLimit { limit cost remaining resetAt }

      # organization(login: "${org}") {
      # 	repositories(first: 20, after: $endCursor, isFork: false, privacy: PUBLIC) {
      # 		totalCount
      # 		# nodes {
      # 		# 	name
      # 		# 	nameWithOwner
      # 		# 	owner {
      # 		# 		login
      # 		# 	}
      # 		# 	url
      # 		# 	description
      # 		# 	languages(first: 10) {
      # 		# 		nodes {
      # 		# 			name
      # 		# 		}
      # 		# 	}
      # 		# 	primaryLanguage {
      # 		# 		name
      # 		# 	}
      # 		# 	isArchived
      # 		# 	licenseInfo {
      # 		# 		id
      # 		# 		name
      # 		# 		spdxId
      # 		# 		url
      # 		# 		featured
      # 		# 		key
      # 		# 	}
      # 		# }
      # 		pageInfo {
      # 			endCursor
      # 			hasNextPage
      # 		}
      # 		# edges {
      # 			nodes {
      # 				id
      # 				collaborators {
      # 					totalCount
      # 				}
      # 				releases {
      # 					totalCount
      # 				}
      # 				tags: refs(refPrefix: "refs/tags/") {
      # 					totalCount
      # 				}
      # 				latestTag: refs(refPrefix: "refs/tags/", last: 1) {
      # 					nodes {
      # 						id
      # 						name
      # 						target {
      # 							... on Commit {
      # 								id
      # 								authoredDate
      # 							}
      # 						}
      # 					}
      # 				}
      # 				openIssues: issues(filterBy: {states: OPEN}) {
      # 					totalCount
      # 				}
      # 				goodFirstIssues: issues(filterBy: {states: OPEN, labels: "good first issue"}, first: 3) {
      # 					totalCount
      # 					nodes {
      # 						id
      # 						title
      # 						url
      # 						createdAt
      # 						comments {
      # 							totalCount
      # 						}
      # 						author {
      # 							login
      # 							... on User {
      # 								id
      # 								email
      # 								name
      # 							}
      # 						}
      # 						number
      # 					}
      # 				}
      # 				forks {
      # 					totalCount
      # 				}
      # 				pullRequests(states: OPEN) {
      # 					totalCount
      # 				}
      # 				pushedAt
      # 				defaultBranchRef {
      # 					target {
      # 						... on Commit {
      # 							history {
      # 								totalCount
      # 							}
      # 						}
      # 					}
      # 				}
      # 				milestones(states: OPEN) {
      # 					totalCount
      # 				}
      # 				mentionableUsers {
      # 					totalCount
      # 				}
      # 				languages(first: 10) {
      # 					nodes {
      # 						id
      # 						name
      # 						color
      # 					}
      # 				}
      # 				isFork
      # 				deployments {
      # 					totalCount
      # 				}
      # 				commitComments {
      # 					totalCount
      # 				}
      # 				licenseInfo {
      # 					id
      # 					name
      # 					spdxId
      # 					url
      # 					featured
      # 					key
      # 				}
      # 			}
      # 		# }
      # 	}
      # }
      # rateLimit {
      # 	cost
      # 	limit
      # 	remaining
      # 	resetAt
      # }


      
      
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
            totalCommits: defaultBranchRef {
              target {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
            last30Days: defaultBranchRef {
              target {
                ... on Commit {
                  history(since: "${timeRange}") {
                    totalCount
                  }
                }
              }
            }
            # defaultBranchRef {
            #   target {
            #     ... on Commit {
            #       history {
            #         totalCount
            #         edges {
            #           node {
            #             history(since: "2019-09-16T16:32:44.116Z") {
            #               totalCount
            #             }
            #           }
            #         }
            #       }
            #     }
            #   }
            # }
            # object(expression: "master") {
            #   ... on Commit {
            #     history(since: "${timeRange}") {
            #       totalCount
            #     }
            #   }
            # }
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
    endCursor
    // timeRange,
    // screenshots,
  }
});

/**
 * Gets the date one month ago, accounting for different month lengths
 */
const getDateOneMonthAgo = () => {
  const d = new Date();
  // console.log(d.toLocaleDateString());
  const month = d.getMonth();
  d.setMonth(d.getMonth() - 1);
  while (d.getMonth() === month) {
    d.setDate(d.getDate() - 1);
  }
  return d.toISOString();
};

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

const getAllReposForOrg = github => async ({
  org,
  paginationLimit,
  timeRange = getDateOneMonthAgo(),
  screenshots = screenshotsQuery
}) => {
  const { results: allRepos /* , lastPageProps */ } = await fetchAllPages(
    github,
    {
      createQuery: reposForOrgQuery({
        org,
        paginationLimit,
        timeRange,
        screenshots
      }),
      resultSelector: get('repos')
    }
  );

  const repos = allRepos.filter(repo => repo && !repo.archived && !repo.fork);

  // return just the string representing the repo name
  return { repos /* , lastPageProps */ };
};

module.exports = getAllReposForOrg;
