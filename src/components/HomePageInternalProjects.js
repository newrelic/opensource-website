import React from 'react';
import PropTypes from 'prop-types';
import SimpleProjectModule from './SimpleProjectModule';

import * as styles from './HomePageInternalProjects.module.scss';

const HomePageInternalProjects = ({ data }) => {
  const projects = data;

  return (
    <div className={styles.featuredInternalProjects}>
      {projects.map((project) => {
        const link = project.permalink.replace(
          'https://opensource.newrelic.com',
          ''
        );
        return (
          <SimpleProjectModule
            data={project}
            key={project.slug}
            projectLink={link}
          />
        );
      })}
    </div>
  );
};
HomePageInternalProjects.propTypes = {
  data: PropTypes.array,
};

export default HomePageInternalProjects;
