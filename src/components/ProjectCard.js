import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { get } from 'lodash';
import Image from './Image';

import * as styles from '../pages/explore-projects.module.scss';
import withDarkMode from './withDarkMode';

const ProjectCard = ({ project: p }) => {
  const link = p.permalink.replace('https://opensource.newrelic.com', '');

  return (
    <Link className={styles.projectContainer} key={p.id} to={link}>
      <div>
        <header className={styles.projectHeader}>
          <Image
            src={p.iconUrl}
            alt={`Icon for ${p.title}`}
            className={styles.projectIcon}
          />
          <h5 className={styles.projectTitle}>{p.title}</h5>
        </header>
        <p className={`${styles.projectDescription}`}>
          {p.description
            ? p.description
            : `There is no description for this project`}
        </p>
      </div>
      <footer className={styles.projectFooter}>
        <span className={styles.projectFooterMeta}>
          {get(p, 'ossCategory.title', '')}
        </span>
        {p.primaryLanguage !== null && (
          <span className={styles.projectFooterMeta}>{p.primaryLanguage}</span>
        )}
      </footer>
    </Link>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default withDarkMode(ProjectCard);
