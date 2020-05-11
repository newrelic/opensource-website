import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectModule.module.scss';

const ProjectModule = ({ data }) => {
  const project = data;

  return (
    <div className={styles.projectModule} key={project.title}>
      <img
        className={styles.projectModuleIcon}
        src={project.icon}
        alt={`icon for ${project.title}`}
      />
      <h4 className={styles.projectModuleTitle}>{project.title}</h4>
      <p className={styles.projectModuleDescription}>{project.description}</p>
      <a href={project.link} className={`button ${styles.projectModuleButton}`}>
        Read more
      </a>
      <footer className={styles.projectModuleFooter}>
        <a className={styles.projectModuleFooterLink} href={project.githubUrl}>
          View in Github
        </a>
        <a className={styles.projectModuleFooterLink} href={project.website}>
          Go to website
        </a>
      </footer>
    </div>
  );
};

/* eslint-disable react/no-unused-prop-types */
ProjectModule.propTypes = {
  data: PropTypes.array
};
/* eslint-enable */

export default ProjectModule;
