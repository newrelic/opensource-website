import React from 'react';
import PropTypes from 'prop-types';

import styles from './GlobalHeader.module.scss';

const GlobalHeader = ({ hasHeaderBg, className }) => {
  return (
    <div
      className={`${styles.globalHeaderContainer} ${
        hasHeaderBg ? styles.hasHeaderBg : ''
      } ${className || className}`}
    >
      <div className={styles.globalHeaderContent}>
        <div className={styles.leftSideLinksContainer}>
          <a
            href="https://newrelic.com/"
            className={styles.logo}
            rel="noopener noreferrer"
          >
            New Relic
          </a>

          <ul className={styles.leftSideLinks}>
            <li className={styles.leftSideLinkItem}>
              <a
                href="https://developer.newrelic.com/"
                className={styles.leftSideLink}
              >
                Developers
              </a>
            </li>
            <li className={`${styles.leftSideLinkItem} ${styles.active}`}>
              <a href="#" className={styles.leftSideLink}>
                Open Source
              </a>
            </li>
            <li className={styles.leftSideLinkItem}>
              <a
                href="https://docs.newrelic.com/"
                className={styles.leftSideLink}
              >
                Docs
              </a>
            </li>
          </ul>
        </div>

        <ul className={styles.rightSideButtons}>
          <li className={`${styles.rightSideButton} ${styles.githubButton}`}>
            <a
              href="https://github.com/newrelic/opensource-website"
              className={styles.githubButtonLink}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

GlobalHeader.propTypes = {
  hasHeaderBg: PropTypes.bool,
  className: PropTypes.string
};

export default GlobalHeader;
