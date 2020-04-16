/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./Footer"
import "./styles.scss"

const Layout = ({ children, hasHeaderBg }) => {
  return (
    <div className="layout-container">
      <Header hasHeaderBg={hasHeaderBg} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 980,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasHeaderBg: PropTypes.bool
}

export default Layout
