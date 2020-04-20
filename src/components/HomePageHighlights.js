
import React from 'react'
import PropTypes from 'prop-types'

const HomePageHighlights = (data) => {
  const projects = data.data


  return (
    <div className="featured-external-projects">
      {projects.map(project => {
        return (
          <div className="featured-external-project" key={project.title}>
            <img className="featured-external-project-icon" src={project.icon} alt={`icon for ${project.title}`} />
            <h4 className="featured-external-project-title">{project.title}</h4>
            <p className="featured-external-project-description">{project.description}</p>
            <a href="#" className="button primary-button featured-external-project-button">Read more</a>
            <footer className="featured-external-project-footer">
              <a className="featured-external-project-footer-link" href={project.githubUrl}>View in Github</a>
              <a className="featured-external-project-footer-link" href={project.website}>
                Go to website
              </a>
            </footer>
          </div>
        )
      })}
    </div>
  )
}

HomePageHighlights.propTypes = {
  data: PropTypes.object
}

export default HomePageHighlights