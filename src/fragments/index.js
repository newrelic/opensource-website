import { graphql } from 'gatsby';

export const projectFields = graphql`
  fragment projectFields on Projects {
    id
    acceptsContributions
    name
    title
    fullName
    slug
    isParentProject
    stats {
      contributors
      releases
      id
      pullRequests {
        open
      }
      searchCategory
      commits
      lastSixMonthsCommitTotal
      cachedIssues {
        createdAt
        id
        title
        url
        comments {
          totalCount
        }
        number
      }
      cachedContributors {
        avatarUrl
        contributions
        htmlUrl
        id
        login
      }
      issues {
        open
      }
      latestRelease {
        date
        name
      }
      license {
        key
        name
        spdxId
        url
      }
      screenshots
    }
    githubUrl
    defaultBranch
    contributingGuideUrl
    iconUrl
    description
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
    shortDescription
    supportUrl
    projectTags {
      title
      slug
    }
    projectType
    team {
      name
      avatarUrl
      githubUrl
      role
    }
    website {
      url
    }
    mainContent {
      mdx: parent {
        ... on Mdx {
          compiledMdx: body
          fields {
            fileRelativePath
          }
        }
      }
    }
  }
`;

export const exploreProjectsFields = graphql`
  fragment exploreProjectsFields on Projects {
    id
    fullName
    slug
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
      lastSixMonthsCommitTotal
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
    projectType
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
