// src/components/layout/Navbar.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../config/navLinks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-mark">EK</span>
          <span className="navbar-logo-text">Elmeri Kallio</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                "navbar-link" + (isActive ? " navbar-link-active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile button */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-line" />
          <span className="navbar-toggle-line" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="navbar-mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                "navbar-mobile-link" + (isActive ? " navbar-mobile-link-active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};
