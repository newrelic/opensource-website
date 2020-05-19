import { Link } from 'gatsby';
import React, { useState } from 'react';
import navLinks from '../data/navigation.json';
import PropTypes from 'prop-types';
import { ChevronRight } from 'react-feather';

import GlobalHeader from './GlobalHeader';

import styles from './Header.module.scss';

const Header = ({ hasHeaderBg }) => {
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
            {mobileMenuActive && <ChevronRight color="#000d0d" />}
          </Link>
        </li>
      );
    });
  };

  /* eslint-disable react/button-has-type */
  return (
    <>
      <GlobalHeader
        hasHeaderBg={hasHeaderBg}
        className={mobileMenuActive && styles.existsInActiveMobileMenu}
      />
      <div className={styles.primaryHeaderContainerWrapper}>
        {/* 
          The above div seems reudndant, right? Maybe it is, but it exists because
          in safari when you have a flexbox inside of a flexbox that doesn't have a
          well defined height (e.g. 100%), the inner flexbox collapses :/. So I have
          this extra div here to be the `display: block` element between my flexbox
          elements.
        */}
        <header
          className={`${styles.primaryHeaderContainer} ${
            hasHeaderBg ? styles.hasHeaderBg : ''
          }`}
        >
          <a href="/" className={styles.primaryHeaderLogo}>
            New Relic Open Source
          </a>

          <ul className={styles.primaryHeaderNavLinks}>{renderNavLinks()}</ul>

          <div
            className={`${styles.primaryHeaderMobileNav} ${
              mobileMenuActive ? styles.mobileMenuActive : ''
            }`}
          >
            <button
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuActive(!mobileMenuActive)}
            >
              Menu
            </button>
            <ul className={styles.primaryHeaderMobileNavLinks}>
              {renderNavLinks()}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
  /* eslint-enable */
};

Header.propTypes = {
  hasHeaderBg: PropTypes.bool
};

export default Header;
