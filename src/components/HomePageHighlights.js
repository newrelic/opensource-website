import React from 'react';
import PropTypes from 'prop-types';
import ProjectModule from './ProjectModule';

import styles from './HomePageHighlights.module.scss';

const HomePageHighlights = ({ data }) => {
  const projects = data;
  return (
    <div className={styles.featuredExternalProjects}>
      <h4 className={styles.featuredExternalProjectsTitle}>
        Projects that we support
      </h4>
      <p className={styles.featuredExternalProjectsDescription}>
        New Relic contributes resources to the development of these projects.
        {` `}
        <a href="/external-projects">View all</a>.
      </p>
      <div className={styles.externalProjectsList}>
        {projects.map(project => {
          return <ProjectModule data={project} key={project.title} row />;
        })}
      </div>
    </div>
  );
};

HomePageHighlights.propTypes = {
  data: PropTypes.array
};

export default HomePageHighlights;
