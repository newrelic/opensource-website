import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { Location, Match } from '@reach/router';
import { getEditLinkFromLocation } from '../utils';

import navLinks from '../data/navigation.json';
import styles from './Footer.module.scss';
import editIcon from '../images/icon-edit.svg';

import packageJson from '../../package.json';

const Footer = () => {
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
        const editLink = getEditLinkFromLocation({ location });

        return (
          <Match path={location.pathname}>
            {// eslint-disable-next-line no-unused-vars
            ({ location, match }) => {
              // TO DO - Remove <Match>? It seemingly adds no additional context outside of what <Location> gives us
              return (
                <footer className={styles.footerContainer}>
                  <div className={styles.footerContents}>
                    <div className={styles.footerLogoContainer}>
                      <Link to="/" className={styles.footerLogo}>
                        New Relic Open Source
                      </Link>
                      {editLink && (
                        <a
                          href={editLink}
                          rel="noopener noreferrer"
                          className={styles.editButton}
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
                    </div>
                    <div className={styles.meta}>
                      <small className={styles.version}>
                        Version {packageJson.version}
                      </small>
                      <small className={styles.footerLegal}>
                        Copyright &copy; {new Date().getFullYear()} New Relic
                        Inc.
                      </small>
                    </div>
                    <ul className={styles.footerNavLinks}>
                      {renderNavLinks()}
                    </ul>
                  </div>
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
  //
};

export default Footer;
