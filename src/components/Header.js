import { Link } from 'gatsby';
import { css } from '@emotion/react';
import React, { useState } from 'react';
import navLinks from '../data/navigation.json';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ChevronRight } from 'react-feather';

import { GlobalHeader, Logo } from '@newrelic/gatsby-theme-newrelic';

import * as styles from './Header.module.scss';

const Header = ({ hasHeaderBg }) => {
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
        customStyles={{ navLeftMargin: '60px' }}
        className={mobileMenuActive ? styles.existsInActiveMobileMenu : ''}
        css={css`
          .dark-mode & {
            /* The header does not change color with the rest of the theme 
            * This locks those color values specifically for the header. */
            --color-neutrals-050: #fafbfb;
            --color-neutrals-100: #f4f5f5;
            --color-neutrals-500: #b9bdbd;
            --color-neutrals-600: #8e9494;
          }
        `}
      />
      <header
        className={`${styles.primaryHeaderContainer} 
        ${hasHeaderBg ? styles.hasHeaderBg : ''}`}
      >
        <Link
          to="/"
          css={css`
            display: block;
            width: 257px;

            @media screen and (max-width: 724px) {
              width: 160px;
              z-index: 500;
            }
          `}
        >
          <Logo width="100%" />
        </Link>

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
    </>
  );
  /* eslint-enable */
};

Header.propTypes = {
  hasHeaderBg: PropTypes.bool,
};

export default Header;
