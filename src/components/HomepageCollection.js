import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';

import * as styles from './HomepageCollection.module.scss';
import SimpleProjectModule from './SimpleProjectModule';

const HomepageCollection = ({ projects }) => {
  const [projectsHovered, setProjectsHovered] = useState(false);
  return (
    <div className={styles.homepageCollection}>
      <h4 className={styles.title}>Instrumentation projects</h4>
      <p className={styles.description}>
        Instrument everything with our open source agents, tools, and sdk's or{' '}
        <a href="/collections">see other highlighted collections.</a>
      </p>

      <div
        className={`${styles.projectsContainer} ${
          projectsHovered && styles.projectsHovered
        }`}
        onMouseOver={() => {
          setProjectsHovered(true);
        }}
        onMouseOut={() => {
          setProjectsHovered(false);
        }}
      >
        <Button
          className={styles.ctaButton}
          as="a"
          variant={Button.VARIANT.PRIMARY}
          href="/instrumentation"
          css={css`
            .dark-mode & {
              border-color: transparent;
            }

            &&&:after {
              display: none;
            }
          `}
        >
          <span>Explore open source instrumentation</span>
        </Button>
        {projects.map((project) => {
          const link = project.permalink.replace(
            'https://opensource.newrelic.com',
            ''
          );
          return (
            <SimpleProjectModule
              className={styles.project}
              data={project}
              key={project.slug}
              projectLink={link}
            />
          );
        })}
      </div>
    </div>
  );
};

HomepageCollection.propTypes = {
  projects: PropTypes.array,
};

export default HomepageCollection;
