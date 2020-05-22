import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import placeholderProjectIcon from '../images/page-heading-icon-placeholder.jpg';
import placeholderProjectIconLight from '../images/page-heading-icon-placeholder-light.png';

import styles from './SimpleProjectModule.module.scss';

const SimpleProjectModule = ({ data: project, className }) => {
  const darkMode = useDarkMode(false);
  const link = project.permalink.replace('https://opensource.newrelic.com', '');
  const placeholderIcon = darkMode.value
    ? placeholderProjectIconLight
    : placeholderProjectIcon;
  const imgIconUrl =
    project.iconUrl !== null && project.iconUrl !== ''
      ? project.iconUrl
      : placeholderIcon;

  return (
    <Link
      to={link}
      className={`${styles.project} ${className || ''}`}
      key={project.title}
    >
      <img
        src={imgIconUrl}
        alt={`Icon for ${project.title}`}
        className={styles.projectIcon}
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
