// src/pages/home/Home.jsx
import React from "react";

export const Home = () => {
    return (
        <section className="page page-home">
            <div className="hero">
                <p className="hero-kicker">Software Engineering • Web Development</p>
                <h1 className="hero-title">
                    Hi, I'm <span className="hero-highlight">Elmeri</span>.
                </h1>
                <p className="hero-subtitle">
                    I build modern web applications with a focus on clean architecture, usability, and performance.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};