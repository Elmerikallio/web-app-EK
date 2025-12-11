import React from "react";
import { skills } from "../../config/skills";

export const SkillsStrip = () => {
  return (
    <section className="section section-skills">
      <div className="section-header">
        <h2 className="section-title">Core Skills</h2>
        <p className="section-subtitle">
          A mix of frontend, backend, and project work from my studies and work
          experience.
        </p>
      </div>

      <div className="pill-row">
        {skills.map((skill) => (
          <span key={skill} className="pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
