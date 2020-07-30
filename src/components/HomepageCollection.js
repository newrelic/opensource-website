import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/core';

import styles from './HomepageCollection.module.scss';
import SimpleProjectModule from './SimpleProjectModule';

const HomepageCollection = ({ data }) => {
  const [projectsHovered, setProjectsHovered] = useState(false);
  const projects = Object.values(data).map((project, i) => {return project.node})
 
  return (
    <div className={styles.homepageCollection}>
      <h4 className={styles.title}>Instrumentation projects</h4>
      <p className={styles.description}>
        Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. <a href="/collections">Other highlighted projects</a>
      </p>

      <div className={`${styles.projectsContainer} ${projectsHovered && styles.projectsHovered}`} onMouseOver={() => {setProjectsHovered(true)}} onMouseOut={() => {setProjectsHovered(false)}}>
        <Button
          className={styles.ctaButton}
          as="a"
          variant={Button.VARIANT.PRIMARY}
          href="/instrumentation"
          target="__blank"
          css={css`
            .dark-mode & {
              border-color: transparent;
            }

            &&&:after {
              display: none;
            }
          `}
        >
          
          <span className={styles.subProjectCallToActionLabel}>
            View all
          </span>
        </Button>
        
        {projects.map((project, i) => {
          const link = project.permalink.replace(
            'https://opensource.newrelic.com',
            ''
          );
          if (i <= 5) {
            return (
              <SimpleProjectModule className={styles.project} data={project} key={project.slug} projectLink={link} />
            );
          }
        })}
      </div>
    </div>
  );
};

HomepageCollection.propTypes = {
  data: PropTypes.object
};

export default HomepageCollection;
