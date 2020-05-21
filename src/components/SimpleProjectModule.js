import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { handleBrokenImages } from '../utils';
import useDarkMode from 'use-dark-mode';

import styles from './SimpleProjectModule.module.scss';

const SimpleProjectModule = ({ data: project, className }) => {
  const darkMode = useDarkMode(false);

  const link = project.permalink.replace('https://opensource.newrelic.com', '');
  return (
    <Link
      to={link}
      className={`${styles.project} ${className || ''}`}
      key={project.title}
    >
      <img
        src={project.iconUrl}
        className={styles.projectIcon}
        alt={`Icon for ${project.title}`}
        onError={event =>
          handleBrokenImages({ event: event, darkModeActive: darkMode.value })
        }
      />
      <div className={styles.projectMeta}>
        <h4 className={styles.projectTitle}>{project.title}</h4>
        <p className={styles.projectDescription}>{project.shortDescription}</p>
      </div>
    </Link>
  );
};

SimpleProjectModule.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string
};

export default SimpleProjectModule;
