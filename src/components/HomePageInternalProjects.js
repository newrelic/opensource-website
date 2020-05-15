import React from 'react';
import PropTypes from 'prop-types';
import SimpleProjectModule from './SimpleProjectModule';

import styles from './HomePageInternalProjects.module.scss';

const HomePageInternalProjects = ({ data }) => {
  const projects = data;

  return (
    <div className={styles.featuredInternalProjects}>
      {projects.map(project => {
        const link = project.permalink.replace(
          'https://opensource.newrelic.com',
          ''
        );
        return (
          <SimpleProjectModule
            data={project}
            key={data.title}
            projectLink={link}
          />
        );
      })}
    </div>
  );
};

/* eslint-disable react/no-unused-prop-types */
HomePageInternalProjects.propTypes = {
  data: PropTypes.array
};
/* eslint-enable */

export default HomePageInternalProjects;
