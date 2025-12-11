// src/pages/Contact/Contact.js
import React from "react";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just prevent reload; later you can integrate EmailJS / backend.
    console.log("Contact form submitted");
  };

  return (
    <section id="contact" className="page">
      <div className="section-header">
        <h1 className="page-title">Contact</h1>
        <p className="section-subtitle">
          Feel free to reach out if you want to talk about a project, an idea,
          or just connect.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-text">
            The easiest way to reach me is by email. You can also find me on
            GitHub and LinkedIn.
          </p>

          <div className="contact-detail">
            <span className="contact-label">Email</span>
            <a href="mailto:your.email@example.com" className="contact-value">
              your.email@example.com
            </a>
          </div>

          <div className="contact-detail">
            <span className="contact-label">GitHub</span>
            <a
              href="https://github.com/Elmerikallio"
              target="_blank"
              rel="noreferrer"
              className="contact-value"
            >
              github.com/Elmerikallio
            </a>
          </div>

          <div className="contact-detail">
            <span className="contact-label">LinkedIn</span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="contact-value"
            >
              linkedin.com/in/your-profile
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="form-input"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="form-input"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="form-textarea"
              rows="4"
              placeholder="What would you like to talk about?"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-magnetic">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
