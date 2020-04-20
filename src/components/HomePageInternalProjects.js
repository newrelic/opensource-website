
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import styles from './HomePageInternalProjects.module.scss'

const HomePageInternalProjects = (data) => {
  const projects = data.data

  return (
    <div className={styles.featuredInternalProjects}>
      {projects.map(project => {
        return (
          <Link to={project.permalink} className={styles.featuredInternalProject} key={project.title}>
            <img src={project.iconUrl} className={styles.featuredInternalProjectIcon} alt={`Icon for ${project.title}`}/>
            <div className={styles.featuredInternalProjectMeta}>
              <h4 className={styles.featuredInternalProjectTitle}>{project.title}</h4>
              <p className={styles.featuredInternalProjectDescription}>{project.shortDescription}</p>
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