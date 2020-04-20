import { graphql } from "gatsby"

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
  }
`;