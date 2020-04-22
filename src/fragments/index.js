import { graphql } from 'gatsby';

export const projectFields = graphql`
  fragment projectFields on ProjectsJson {
    id
    name
    title
    fullName
    stats {
      contributors
      releases
      id
      pullRequests {
        open
      }
      searchCategory
      commits
      cachedIssues {
        createdAt
        # createdBy
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
        # name
        # url
      }
      issues {
        open
      }
      screenshots
    }
    githubUrl
    iconUrl
    description
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
    mainContent {
      mdx: parent {
        ... on Mdx {
          compiledMdx: body
        }
      }
    }
  }
`;

export const exploreProjectsFields = graphql`
  fragment exploreProjectsFields on ProjectsJson {
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
`;
