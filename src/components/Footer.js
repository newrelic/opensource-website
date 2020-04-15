import { Link } from "gatsby"
import React from "react";
import navLinks from '../data/navigation.json'

const Footer = () => {

  const renderNavLinks = () => {
    const sortedNavLinks = navLinks.navigation.sort((a, b) =>
      a.order > b.order ? 1 : -1
    );

    return sortedNavLinks.map(navItem => {
      return (
        <li className="footer-nav-link-item" key={navItem.order}>
          <Link to={navItem.link} className="footer-nav-link">
            {navItem.label}
          </Link>
        </li>
      );
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-contents">
        <div className="footer-logo-container">
          <Link to="/" className="footer-logo">New Relic Open Source</Link>
          <small className="footer-legal">Copyright &copy; {new Date().getFullYear()} New Relic Inc.</small>
        </div>
        <ul className="footer-nav-links">{renderNavLinks()}</ul>
      </div>
    </footer>
  );
};

export default Footer;
