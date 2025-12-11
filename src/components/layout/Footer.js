// src/components/layout/Footer.js
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-text">© {year} Elmeri Kallio.</span>

        <div className="footer-links">
          <Link to="/projects" className="footer-link">
            Projects
          </Link>
          <a
            href="https://github.com/Elmerikallio"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/elmeri-kallio-632885348/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
