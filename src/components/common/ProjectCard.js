// src/components/common/ProjectCard.js
import React from "react";

export const ProjectCard = ({ project }) => {
  const { title, description, tech, role, github, demo } = project;

  return (
    <article className="project-card">
      <div className="project-card-inner">
        <h3 className="project-title">{title}</h3>

        {role && <p className="project-role">{role}</p>}

        <p className="project-description">{description}</p>

        {tech && tech.length > 0 && (
          <div className="project-tech-row">
            {tech.map((t) => (
              <span key={t} className="pill pill-compact">
                {t}
              </span>
            ))}
          </div>
        )}

        {(github || demo) && (
          <div className="project-links-row">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
