import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import withDarkMode from './withDarkMode';
import * as styles from './ProjectModule.module.scss';

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
        <Image
          src={project.iconUrl}
          alt={`Icon for ${project.title}`}
          className={styles.projectModuleIcon}
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
  data: PropTypes.object,
  row: PropTypes.bool,
};

export default withDarkMode(ProjectModule);
