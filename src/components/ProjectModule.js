import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectModule.module.scss';

const ProjectModule = ({ data, row }) => {
  const project = data;
  project.permalink = project.permalink
    ? project.permalink.replace('https://opensource.newrelic.com', '')
    : '';

  return (
    <div
      className={`${styles.projectModule} ${row ? styles.styleRow : ''}`}
      key={project.slug}
    >
      <div
        className={styles.projectModulePrimaryContent}
        onClick={() => {
          location.href = project.permalink;
        }}
      >
        <img
          className={styles.projectModuleIcon}
          src={project.iconUrl}
          alt={`icon for ${project.title}`}
        />
        <div className={styles.projectModuleCopy}>
          <h4 className={styles.projectModuleTitle}>{project.title}</h4>
          <p className={styles.projectModuleDescription}>
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

ProjectModule.propTypes = {
  data: PropTypes.array,
  row: PropTypes.bool
};

export default ProjectModule;
