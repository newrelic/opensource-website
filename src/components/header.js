import { Link } from "gatsby"
import React, { useState } from "react";
import navLinks from '../data/navigation.json'
import PropTypes from "prop-types"

import styles from "../components/Header.module.scss"

const Header = ({hasHeaderBg}) => {
  console.log(styles);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const renderNavLinks = () => {
    const sortedNavLinks = navLinks.navigation.sort((a, b) =>
      a.order > b.order ? 1 : -1
    );

    return sortedNavLinks.map(navItem => {
      return (
        <li className={styles.primaryHeaderNavLinkItem} key={navItem.order}>
          <Link to={navItem.link} className={styles.primaryHeaderNavLink}>
            {navItem.label}
          </Link>
        </li>
      );
    });
  };

  return (
    <header className={`${styles.primaryHeaderContainer} ${hasHeaderBg ? styles.hasHeaderBg : ''}`}>
      <a href="/" className={styles.primaryHeaderLogo}>
        New Relic Open Source
      </a>

      <ul className={styles.primaryHeaderNavLinks}>{renderNavLinks()}</ul>

      <div
        className={`${styles.primaryHeaderMobileNav} ${
          mobileMenuActive ? styles.mobileMenuActive : ""
        }`}
      >
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
        >
          Menu
        </button>
        <ul className={styles.primaryHeaderMobileNavLinks}>{renderNavLinks()}</ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  hasHeaderBg: PropTypes.bool
}



export default Header;
