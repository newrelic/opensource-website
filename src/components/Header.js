import { Link } from 'gatsby';
import { css } from '@emotion/core';
import React, { useState } from 'react';
import navLinks from '../data/navigation.json';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ChevronRight } from 'react-feather';
import DarkModeToggle from './DarkModeToggle';

import { GlobalHeader } from '@newrelic/gatsby-theme-newrelic';

import styles from './Header.module.scss';

const Header = ({ hasHeaderBg, editLink }) => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const renderNavLinks = () => {
    const sortedNavLinks = navLinks.navigation.sort((a, b) =>
      a.order > b.order ? 1 : -1
    );

    return sortedNavLinks.map((navItem) => {
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
      <Helmet>
        <html
          className={mobileMenuActive ? styles.htmlHasActiveMobileMenu : ''}
        />
      </Helmet>
      <GlobalHeader
        search
        className={mobileMenuActive ? styles.existsInActiveMobileMenu : ''}
        editUrl={editLink}
        css={css`
          ul {
            line-height: 14px;
            font-size: 16px;
          }

          a {
            border-bottom: none;
          }

          z-index: 1000000;
        `}
      />
      <header
        className={`${styles.primaryHeaderContainer} ${
          hasHeaderBg ? styles.hasHeaderBg : ''
        } ${mobileMenuActive ? styles.parentOfActiveMobileMenu : ''}`}
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
          <DarkModeToggle className={styles.headerDarkModeToggle} />
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
    </>
  );
  /* eslint-enable */
};

Header.propTypes = {
  hasHeaderBg: PropTypes.bool,
  editLink: PropTypes.string,
};

export default Header;
