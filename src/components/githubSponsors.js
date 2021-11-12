import React from 'react';
import PropTypes from 'prop-types';
import SimpleSponsorModule from './SimpleSponsorModule';

import * as styles from './HomePageInternalProjects.module.scss';

const GithubSponsors = ({ data }) => {
  const projects = data;

  return (
    <div className={styles.featuredInternalProjects}>
      {projects.map((project) => {
        const link = project.url.replace('https://opensource.newrelic.com', '');
        return (
          <SimpleSponsorModule
            data={project}
            key={project.name}
            projectLink={link}
          />
        );
      })}
    </div>
  );
};

GithubSponsors.propTypes = {
  data: PropTypes.array,
};

export default GithubSponsors;
