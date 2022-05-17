import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as styles from './SimpleProjectModule.module.scss';
import withDarkMode from './withDarkMode';
import Image from './Image';

const SimpleProjectModule = ({ data: project, className }) => {
  const link = project.permalink.replace('https://opensource.newrelic.com', '');

  return (
    <Link
      to={link}
      className={`${styles.project} ${className || ''}`}
      key={project.title}
    >
      <Image
        src={project.iconUrl}
        alt={`Icon for ${project.title}`}
        className={styles.projectIcon}
      />
      <div>
        <h4 className={styles.projectTitle}>{project.title}</h4>
        <p className={styles.projectDescription}>{project.shortDescription}</p>
      </div>
    </Link>
  );
};

SimpleProjectModule.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
};

export default withDarkMode(SimpleProjectModule);
