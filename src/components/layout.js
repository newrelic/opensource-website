import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import './styles.scss';
import favicon from '../images/favicon.svg';
import { GlobalFooter } from '@newrelic/gatsby-theme-newrelic';

const Layout = ({
  children,
  hasHeaderBg,
  fullWidth,
  className,
  mainClassName,
  editLink,
}) => {
  return (
    <div
      className={className}
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
      `}
    >
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header hasHeaderBg={hasHeaderBg} editLink={editLink} />
      <main
        className={mainClassName}
        css={css`
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
          flex-grow: 1;
          flex-shrink: 0; // because nested flexbox elements in safari are buggy

          & > hr {
            height: 2px;
            margin: 36px 0;
            background-color: var(--color-neutrals-200);
            border: none;
          }

          ${fullWidth &&
          css`
            max-width: 1180px;
          `}
        `}
      >
        {children}
      </main>
      <GlobalFooter fileRelativePath={editLink} />
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
