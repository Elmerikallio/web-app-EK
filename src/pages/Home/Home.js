// src/pages/Home/Home.js
import React from "react";
import { FeaturedProjectsPreview } from "../../components/common/FeaturedProjectsPreview";
import { SkillsStrip } from "../../components/common/SkillsStrip";
import { useRef } from "react";

export const Home = () => {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--cursor-x", `${x}px`);
    el.style.setProperty("--cursor-y", `${y}px`);
  };

  const handleMouseEnter = () => {
    heroRef.current?.classList.add("hero-interactive-active");
  };

  const handleMouseLeave = () => {
    heroRef.current?.classList.remove("hero-interactive-active");
  };

  return (
    <section className="page page-home">
      {/* Hero */}
      <div
        ref={heroRef}
        className="hero hero-interactive"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="hero-kicker">Software Engineering</p>
        <h1 className="hero-title">
          Hi, I'm <span className="hero-highlight">Elmeri</span>.
        </h1>
        <p className="hero-subtitle">
          I build modern web applications with a focus on clean architecture,
          usability, and performance.
        </p>

        <div className="hero-actions">
          <a href="projects" className="btn btn-primary">
            View projects
          </a>
          <a href="contact" className="btn btn-secondary">
            Contact me
          </a>
        </div>
      </div>

      {/* SKILLS STRIP */}
      <SkillsStrip />

      {/* FEATURED PROJECTS PREVIEW */}
      <FeaturedProjectsPreview />
    </section>
  );
};
