// src/pages/Projects/Projects.js
import React from "react";
import { DecryptTitle } from "../../components/ui/DecryptTitle";
import { projects } from "../../config/projects";
import { ProjectCard } from "../../components/common/ProjectCard";

export const Projects = () => {
  return (
    <section className="page">
      <DecryptTitle text="Projects" />
      <div className="section-header">
        <p className="section-subtitle">
          A selection of projects that show what I have worked on.
        </p>
      </div>

      <div className="projects-grid projects-grid-large">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
