/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';
import './styles.scss';
import favicon from '../images/favicon.svg';

const Layout = ({
  children,
  hasHeaderBg,
  fullWidth,
  className,
  mainClassName,
  editLink,
}) => {
  return (
    <div className={`layout-container ${className}`}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header hasHeaderBg={hasHeaderBg} />
      <main
        className={`layout-container-main ${fullWidth ? `full-width` : ''} ${
          mainClassName && mainClassName
        }`}
      >
        {children}
      </main>
      <Footer editLink={editLink} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasHeaderBg: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  mainClassName: PropTypes.string,
  editLink: PropTypes.string,
};

export default Layout;
