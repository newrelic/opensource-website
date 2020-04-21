import { Link } from 'gatsby';
import React from 'react';
import navLinks from '../data/navigation.json';

import styles from './Footer.module.scss';

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
    <footer className={styles.footerContainer}>
      <div className={styles.footerContents}>
        <div className={styles.footerLogoContainer}>
          <Link to="/" className={styles.footerLogo}>
            New Relic Open Source
          </Link>
          <small className={styles.footerLegal}>
            Copyright &copy; {new Date().getFullYear()} New Relic Inc.
          </small>
        </div>
        <ul className={styles.footerNavLinks}>{renderNavLinks()}</ul>
      </div>
    </footer>
  );
};

export default Footer;
