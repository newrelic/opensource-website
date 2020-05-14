import React from 'react';
import PropTypes from 'prop-types';
import ProjectModule from './ProjectModule';

import styles from './HomePageHighlights.module.scss';

const HomePageHighlights = data => {
  const projects = data.data;

  return (
    <div className={styles.featuredExternalProjects}>
      <h4 className={styles.featuredExternalProjectsTitle}>
        Projects that we love
      </h4>
      <p className={styles.featuredExternalProjectsDescription}>
        New Relic contributes resources to the development of these projects.
        {` `}
        <a href="/external-projects">View all</a>
      </p>
      <div className={styles.externalProjectsList}>
        {projects.map(project => {
          return <ProjectModule data={project} key={project.title} row />;
        })}
      </div>
    </div>
  );
};

/* eslint-disable react/no-unused-prop-types */
HomePageHighlights.propTypes = {
  data: PropTypes.array
};
/* eslint-enable */

export default HomePageHighlights;
