import { Link } from "gatsby"
import React, { useState } from "react";

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const navLinks = [
    {
      label: "Home",
      link: "/",
      order: 0
    },
    {
      label: "Our Contributions",
      link: "/contributions",
      order: 1
    },
    {
      label: "Explore Projects",
      link: "/explore-projects",
      order: 2
    },
    {
      label: "Blog",
      link: "/blog",
      order: 3
    }
  ];

  const renderNavLinks = () => {
    const sortedNavLinks = navLinks.sort((a, b) =>
      a.order > b.order ? 1 : -1
    );

    return sortedNavLinks.map(navItem => {
      return (
        <li className="primary-header-nav-link-item" key={navItem.order}>
          <a href={navItem.link} className="primary-header-nav-link">
            {navItem.label}
          </a>
        </li>
      );
    });
  };

  return (
    <header className="primary-header-container">
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

export default Header;
