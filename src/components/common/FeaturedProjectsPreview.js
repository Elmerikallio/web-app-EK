// src/components/common/FeaturedProjectsPreview.js
import React from "react";
import { projects } from "../../config/projects";
import { ProjectCard } from "./ProjectCard";

export const FeaturedProjectsPreview = () => {
  const featured = projects.filter((p) => p.highlight).slice(0, 3);

  return (
    <section id="projects" className="section section-projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A glimpse into the kinds of things I like to build. More details on
          the projects page.
        </p>
      </div>

      <div className="projects-grid">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
