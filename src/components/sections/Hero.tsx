import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/social';
import { scrollToSection } from '../../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section-root" id="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-layout">
          {/* Status Indicator */}
          <div className="hero-status-pill">
            <span className="status-dot-indicator" aria-hidden="true" />
            <span className="status-label mono">{personalInfo.status}</span>
          </div>

          {/* Large Editorial Headline */}
          <div className="hero-title-block">
            <h1 className="hero-name-heading">
              Abhinav Dayal
            </h1>
            <p className="hero-role-title">
              App Developer <span className="hero-role-sep mono">/</span> <span className="hero-tech-sub">React Native, React.js & TypeScript</span>
            </p>
          </div>

          {/* Supporting Intro Line */}
          <p className="hero-description-copy">
            {personalInfo.tagline}
          </p>

          {/* Direct Action Links */}
          <div className="hero-action-links">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="hero-primary-link"
            >
              <span>View Selected Work</span>
              <ArrowDownRight size={16} className="hero-link-icon" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="hero-secondary-link"
            >
              <span>Contact Me</span>
              <ArrowUpRight size={15} className="hero-link-icon" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              onClick={(e) => {
                if (personalInfo.resumeUrl.startsWith('#')) {
                  e.preventDefault();
                  scrollToSection(personalInfo.resumeUrl.replace('#', ''));
                }
              }}
              className="hero-secondary-link"
            >
              <span>Resume</span>
              <ArrowUpRight size={15} className="hero-link-icon" />
            </a>
          </div>

          {/* Quick Context Bar */}
          <div className="hero-meta-bar mono">
            <div className="meta-bar-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">Delhi / Lucknow, India</span>
            </div>
            <div className="meta-bar-divider" aria-hidden="true" />
            <div className="meta-bar-item">
              <span className="meta-label">Specialization</span>
              <span className="meta-value">Cross-Platform UI & REST APIs</span>
            </div>
            <div className="meta-bar-divider" aria-hidden="true" />
            <div className="meta-bar-item">
              <span className="meta-label">Current Role</span>
              <span className="meta-value">Aronix Web Technology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
