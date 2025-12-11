// src/components/common/FeaturedProjectsPreview.js
import React from "react";
import { projects } from "../../config/projects";

export const FeaturedProjectsPreview = () => {
    const featured = projects.filter((p) => p.highlight).slice(0, 3);

    return (
        <section id="projects" className="section section-projects">
            <div className="section-header">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    A glimpse into the kinds of things I like to build. More details on the projects page.
                </p>
            </div>

            <div className="projects-grid">
                {featured.map((project) => (
                    <article key={project.id} className="project-card">
                        <div className="project-card-inner">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-role">{project.role}</p>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech-row">
                                {project.tech.map((t) => (
                                    <span key={t} className="pill pill-compact">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};