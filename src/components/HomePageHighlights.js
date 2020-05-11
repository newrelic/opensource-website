import React from 'react';
import PropTypes from 'prop-types';
import ProjectModule from './ProjectModule';

import styles from './HomePageHighlights.module.scss';

const HomePageHighlights = data => {
  const projects = data.data;

  return (
    <div className={styles.featuredExternalProjects}>
      {projects.map(project => {
        return <ProjectModule data={project} key={project.title} />;
      })}
    </div>
  );
};

/* eslint-disable react/no-unused-prop-types */
HomePageHighlights.propTypes = {
  data: PropTypes.array
};
/* eslint-enable */

export default HomePageHighlights;
