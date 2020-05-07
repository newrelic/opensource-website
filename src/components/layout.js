/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './Footer';
import './styles.scss';

const Layout = ({
  children,
  hasHeaderBg,
  fullWidth,
  className,
  mainClassName
}) => {
  return (
    <div className={`layout-container ${className}`}>
      <Header hasHeaderBg={hasHeaderBg} />
      <main
        className={`layout-container-main ${
          fullWidth ? `full-width` : ''
        } ${mainClassName && mainClassName}`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasHeaderBg: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.object,
  mainClassName: PropTypes.object
};

export default Layout;
