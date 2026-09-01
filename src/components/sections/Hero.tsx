import React from 'react';
import { scrollToSection } from '../../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero" aria-label="Introduction">
      <div className="hero-status-row">
        <span className="status-dot" aria-hidden="true" />
        <span className="status-text mono">Available for full-time & high-impact contract roles</span>
      </div>

      <div className="hero-header">
        <h1 className="hero-title">Abhinav Dayal</h1>
        <p className="hero-role mono">App Developer • Delhi / Lucknow, IN</p>
      </div>

      <p className="hero-tagline">
        Building thoughtful web & mobile experiences with React, React Native & modern JavaScript.
      </p>

      <div className="hero-actions">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}
          className="editorial-link primary"
        >
          View Projects ↓
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
          className="editorial-link"
        >
          Get in Touch →
        </a>
      </div>
    </section>
  );
};
