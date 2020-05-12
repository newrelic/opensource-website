import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectModule.module.scss';

const ProjectModule = ({ data }) => {
  const project = data;
  project.permalink = project.permalink
    ? project.permalink.replace('https://opensource.newrelic.com', '')
    : '';

  return (
    <div className={styles.projectModule} key={project.slug}>
      <img
        className={styles.projectModuleIcon}
        src={project.iconUrl}
        alt={`icon for ${project.title}`}
      />
      <div className={styles.projectModuleCopy}>
        <h4 className={styles.projectModuleTitle}>{project.title}</h4>
        <p className={styles.projectModuleDescription}>{project.description}</p>
        <a
          href={project.permalink}
          className={`button ${styles.projectModuleButton}`}
        >
          Read more
        </a>
      </div>
      <footer className={styles.projectModuleFooter}>
        <span className={styles.projectModuleFooterLink}>
          {project.contributorTotal} contributors from New Relic
        </span>
      </footer>
    </div>
  );
};

ProjectModule.propTypes = {
  data: PropTypes.array
};

export default ProjectModule;
