import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from '../templates/projects.module.scss';

const ProjectCard = ({ project: p }) => {
  const link = p.permalink.replace('https://opensource.newrelic.com', '');

  return (
    <Link className={styles.projectContainer} key={p.id} to={link}>
      <div className={`${styles.projectPrimaryContent}`}>
        <header className={styles.projectHeader}>
          <img src={p.icon} alt="icon for" className={styles.projectIcon} />
          <h5 className={styles.projectTitle}>{p.title}</h5>
        </header>
        <p className={`${styles.projectDescription}`}>
          {p.description
            ? p.description
            : `There is no description for this project`}
        </p>
      </div>
      <footer className={styles.projectFooter}>
        <span className={styles.projectFooterMeta}>{p.ossCategory.title}</span>
        {p.primaryLanguage !== null && (
          <span className={styles.projectFooterMeta}>{p.primaryLanguage}</span>
        )}
      </footer>
    </Link>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object
};

export default ProjectCard;
