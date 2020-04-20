
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

const HomePageInternalProjects = (data) => {
  const projects = data.data

  return (
    <div className="featured-internal-projects">
      {projects.map(project => {
        return (
          <Link to={project.permalink} className="featured-internal-project" key={project.title}>
            <img src={project.iconUrl} className="featured-internal-project-icon" alt={`Icon for ${project.title}`}/>
            <div className="featured-internal-project-meta">
              <h4 className="featured-internal-project-title">{project.title}</h4>
              <p className="featured-internal-project-description">{project.shortDescription}</p>
            </div>
          </Link> 
        )
      })}
    </div>
  )
}

HomePageInternalProjects.propTypes = {
  data: PropTypes.array
}

export default HomePageInternalProjects