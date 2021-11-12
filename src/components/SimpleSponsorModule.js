// This is for the projects we support section on the home page
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as styles from './SimpleProjectModule.module.scss';
import withDarkMode from './withDarkMode';
import Image from './Image';
import placeholderProjectIcon from '../images/page-heading-icon-placeholder.jpg';
import placeholderProjectIconLight from '../images/page-heading-icon-placeholder-light.png';

const SimpleSponsorModule = ({ data: project, className, darkMode }) => {
  const link = project.url.replace('https://opensource.newrelic.com', '');

  return (
    <Link
      to={link}
      className={`${styles.project} ${className || ''}`}
      key={project.name}
    >
      <Image
        src={project.avatarUrl}
        fallbackSrc={
          darkMode.value ? placeholderProjectIconLight : placeholderProjectIcon
        }
        alt={`Icon for ${project.name}`}
        className={styles.projectIcon}
      />
      <div>
        <h4 className={styles.projectTitle}>{project.name}</h4>
        <p className={styles.projectDescription}>
          {project.bio}
          {project.description}
        </p>
      </div>
    </Link>
  );
};

SimpleSponsorModule.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  darkMode: PropTypes.object,
};

export default withDarkMode(SimpleSponsorModule);
