import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { Location, Match } from '@reach/router';

import navLinks from '../data/navigation.json';
import styles from './Footer.module.scss';
import editIcon from '../images/icon-edit.svg';
import { GitHub } from 'react-feather';

import packageJson from '../../package.json';

const Footer = ({ editLink = false }) => {
  const renderNavLinks = () => {
    const sortedNavLinks = navLinks.navigation.sort((a, b) =>
      a.order > b.order ? 1 : -1
    );

    return sortedNavLinks.map(navItem => {
      return (
        <li className={styles.footerNavLinkItem} key={navItem.order}>
          <Link to={navItem.link} className={styles.footerNavLink}>
            {navItem.label}
          </Link>
        </li>
      );
    });
  };

  return (
    <Location>
      {({ location }) => {
        return (
          <Match path={location.pathname}>
            {// eslint-disable-next-line no-unused-vars
            ({ location, match }) => {
              // TO DO - Remove <Match>? It seemingly adds no additional context outside of what <Location> gives us
              return (
                <footer className={styles.footerContainer}>
                  <section className={styles.footerPrimaryContent}>
                    <Link to="/" className={styles.footerLogo}>
                      New Relic Open Source
                    </Link>
                    <ul className={styles.footerNavLinks}>
                      <li className={styles.footerNavLinkItem} key="0">
                        <Link to="/standards" className={styles.footerNavLink}>
                          Standards
                        </Link>
                      </li>
                      {renderNavLinks()}
                    </ul>
                    <div className={styles.footerCTAContainer}>
                      {editLink && (
                        <a
                          href={editLink}
                          rel="noopener noreferrer"
                          className={styles.footerCTA}
                          target="__blank"
                        >
                          <img
                            src={editIcon}
                            alt="pencil icon"
                            className={styles.editButtonIcon}
                          />
                          Edit this page
                        </a>
                      )}
                      <a
                        href={editLink}
                        rel="noopener noreferrer"
                        className={styles.footerCTA}
                        target="__blank"
                      >
                        <GitHub color="#7DA5A8" size={14} />
                        Create an issue
                      </a>
                    </div>
                  </section>
                  <section className={styles.footerSecondaryContentContainer}>
                    <div className={styles.footerSecondaryContent}>
                      <small
                        className={`${styles.footerLegal} ${styles.footerMeta}`}
                      >
                        Copyright &copy; {new Date().getFullYear()} New Relic
                        Inc.
                      </small>
                      <small
                        className={`${styles.version} ${styles.footerMeta}`}
                      >
                        Version {packageJson.version}
                      </small>
                    </div>
                  </section>
                </footer>
              );
            }}
          </Match>
        );
      }}
    </Location>
  );
};

Footer.propTypes = {
  editLink: PropTypes.string
};

export default Footer;
