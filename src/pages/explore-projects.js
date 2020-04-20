import React from "react"
import { StaticQuery } from "gatsby"

const exploreProjectsPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query ExploreProjectsQuery {
          allProjectsJson(limit: 100) {
            nodes {
              ...exploreProjectsFields
            }
          }
        }
      `}
      render={data => {
        const projects = data.allProjectsJson.nodes;
        const projectListing = projects.map(p => {
          return (
            <li key={p.id}>{p.fullName}</li>
          )
        })
        return (
          <>
            <h1>{projects.length} total projects</h1>
            <ul>{projectListing}</ul>
          </>

        )
      }}
    />
  )
}

export default exploreProjectsPage;