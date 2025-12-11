// src/pages/About/About.js
import React from "react";
import { DecryptTitle } from "../../components/ui/DecryptTitle";

export const About = () => {
  return (
    <section className="page">
      <DecryptTitle text="About" />
      <div className="section-header">
        <p className="section-subtitle">
          ICT engineering student with a focus on software engineering and
          project management, building modern web apps and learning by doing.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm currently studying information and communication technology with
            a specialization in software engineering and project management. I
            enjoy designing and building web applications end-to-end, from
            backend APIs to polished frontends.
          </p>
          <p>
            I like working on projects where I can combine clean architecture,
            good development practices, and a focus on usability. This portfolio
            collects some of the work I'm most proud of so far.
          </p>
        </div>

        <div className="about-facts">
          <h2 className="about-subtitle">Quick facts</h2>
          <ul className="about-facts-list">
            <li>📍 Based in Finland</li>
            <li>🎓 ICT engineering student</li>
            <li>🧠 Placeholder</li>
            <li>💻 Placeholder</li>
            <li>🚀 Placeholder</li>
          </ul>
        </div>
      </div>

      <div className="about-timeline">
        <h2 className="about-subtitle">Experience & education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="timeline-period">2023 – now</p>
              <p className="timeline-title">ICT Engineering Studies</p>
              <p className="timeline-description">
                Focusing on software engineering, project management, and
                building real-world applications as part of coursework and
                projects.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="timeline-period">Projects</p>
              <p className="timeline-title">Backend & Full-stack Work</p>
              <p className="timeline-description">
                Built backend services, REST APIs, and full-stack projects using
                JavaScript, Node.js, React, and Python-based tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
