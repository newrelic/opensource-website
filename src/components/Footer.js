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
          <a href={navItem.link} className="footer-nav-link">
            {navItem.label}
          </a>
        </li>
      );
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-logo-container">
        <a href="/" className="footer-logo">
          New Relic Open Source
        </a>
        <small className="footer-legal">Copyright &copy; {new Date().getFullYear()} New Relic Inc.</small>
      </div>

      <ul className="footer-nav-links">{renderNavLinks()}</ul>
    </footer>
  );
};

export default Footer;
