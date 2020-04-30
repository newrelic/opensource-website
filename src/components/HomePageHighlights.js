import React from 'react';
import PropTypes from 'prop-types';

import styles from './HomePageHighlights.module.scss';

const HomePageHighlights = data => {
  const projects = data.data;

  return (
    <div className={styles.featuredExternalProjects}>
      {projects.map(project => {
        return (
          <div className={styles.featuredExternalProject} key={project.title}>
            <img
              className={styles.featuredExternalProjectIcon}
              src={project.icon}
              alt={`icon for ${project.title}`}
            />
            <h4 className={styles.featuredExternalProjectTitle}>
              {project.title}
            </h4>
            <p className={styles.featuredExternalProjectDescription}>
              {project.description}
            </p>
            <a
              href="#"
              className={`button ${styles.featuredExternalProjectButton}`}
            >
              Read more
            </a>
            <footer className={styles.featuredExternalProjectFooter}>
              <a
                className={styles.featuredExternalProjectFooterLink}
                href={project.githubUrl}
              >
                View in Github
              </a>
              <a
                className={styles.featuredExternalProjectFooterLink}
                href={project.website}
              >
                Go to website
              </a>
            </footer>
          </div>
        );
      })}
    </div>
  );
};

/* eslint-disable react/no-unused-prop-types */
HomePageHighlights.propTypes = {
  data: PropTypes.array
};
/* eslint-enable */

export default HomePageHighlights;
