import { Link } from "gatsby"
import React, { useState } from "react";
import navLinks from '../data/navigation.json'
import PropTypes from "prop-types"

const Header = ({hasHeaderBg}) => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const renderNavLinks = () => {
    const sortedNavLinks = navLinks.navigation.sort((a, b) =>
      a.order > b.order ? 1 : -1
    );

    return sortedNavLinks.map(navItem => {
      return (
        <li className="primary-header-nav-link-item" key={navItem.order}>
          <Link to={navItem.link} className="primary-header-nav-link">
            {navItem.label}
          </Link>
        </li>
      );
    });
  };

  return (
    <header className={`primary-header-container ${hasHeaderBg ? 'has-header-bg' : ''}`}>
      <a href="/" className="primary-header-logo">
        New Relic Open Source
      </a>

      <ul className="primary-header-nav-links">{renderNavLinks()}</ul>

      <div
        className={`primary-header-mobile-nav ${
          mobileMenuActive ? "mobile-menu-active" : ""
        }`}
      >
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
        >
          Menu
        </button>
        <ul className="primary-header-mobile-nav-links">{renderNavLinks()}</ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  hasHeaderBg: PropTypes.bool
}



export default Header;
