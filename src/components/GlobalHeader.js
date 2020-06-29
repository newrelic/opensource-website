import React from 'react';
import PropTypes from 'prop-types';
import DarkModeToggle from './DarkModeToggle';
import { GitHub, Edit } from 'react-feather';

import styles from './GlobalHeader.module.scss';

const GlobalHeader = ({ hasHeaderBg, className, editLink }) => {
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
              <a href="/" className={styles.leftSideLink}>
                Open Source
              </a>
            </li>
            <li className={styles.leftSideLinkItem}>
              <a
                href="https://docs.newrelic.com/"
                className={styles.leftSideLink}
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>

        <ul className={styles.rightSideButtons}>
          <li
            className={`${styles.rightSideButton} ${styles.editPageButton}`}
            title="Edit this page"
          >
            <a
              href={editLink}
              className={styles.editPageButtonLink}
              target="__blank"
            >
              <Edit color="#000D0D" size={14} className={styles.editIcon} />
            </a>
          </li>
          <li
            className={`${styles.rightSideButton} ${styles.githubButton}`}
            title="View the GitHub repo for this website"
          >
            <a
              href="https://github.com/newrelic/opensource-website"
              className={styles.githubButtonLink}
              target="__blank"
            >
              <GitHub color="#000D0D" size={14} className={styles.githubIcon} />
            </a>
          </li>
          <li
            className={`styles.darkModeToggle ${styles.rightSideButton}`}
            title="Toggle dark mode"
          >
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

GlobalHeader.propTypes = {
  hasHeaderBg: PropTypes.bool,
  className: PropTypes.string,
  editLink: PropTypes.string
};

export default GlobalHeader;
