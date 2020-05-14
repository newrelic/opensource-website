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
      <div className={styles.projectModulePrimaryContent}>
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
      <footer className={styles.projectModuleFooter}>
        <span className={styles.projectModuleFooterLink}>
          {project.team ? project.team.length : 0} contributors from New Relic
        </span>
      </footer>
    </div>
  );
};

ProjectModule.propTypes = {
  data: PropTypes.array,
  row: PropTypes.bool
};

export default ProjectModule;
