import { graphql } from "gatsby"

export const projectFields = graphql`
  fragment projectFields on ProjectsJson {
    id
    name
    fullName
    stats {
      releases
      id
      pullRequests {
        open
      }
      searchCategory
      commits
      cachedIssues {
        createdAt
        createdBy
        id
        title
        url
        comments {
          count
        }
      }
      cachedContributors {
        avatarUrl
        contributions
        htmlUrl
        id
        login
        name
        url
      }
      issues {
        open
      }
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
    screenshots
    shortDescription
  }
`;