import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export const About: React.FC = () => {
  return (
    <section className="about-section-root" id="about" aria-label="About Me">
      <div className="container">
        <SectionHeader number="01" title="ABOUT" />

        <div className="about-grid-composition">
          {/* Left Column: Big Statement */}
          <div className="about-statement-col">
            <h3 className="about-lead-statement">
              Engineering fluid, high-reliability mobile apps and responsive web interfaces with modern JavaScript & TypeScript.
            </h3>
            <div className="about-location-tag mono">
              <span>Based in India</span>
              <span className="dot-sep">•</span>
              <span>Available Globally</span>
            </div>
          </div>

          {/* Right Column: Factual Background & Core Focus */}
          <div className="about-narrative-col">
            <p className="about-narrative-p">
              I am an <strong className="text-highlight">App Developer</strong> focused on building cross-platform mobile applications and responsive frontend architectures. At <strong className="text-highlight">Aronix Web Technology</strong>, I develop reusable UI components, navigation flows, and integrate RESTful APIs for production hospital management software.
            </p>
            <p className="about-narrative-p">
              My engineering foundation includes web development at <strong className="text-highlight">PCS Management Consultancy</strong> and practical software training at <strong className="text-highlight">EICT Academy, IIT Kanpur</strong>. I emphasize component modularity, maintainable code practices, and thoughtful user interfaces that perform reliably under real-world usage.
            </p>

            {/* Core Stack inline text list */}
            <div className="about-stack-line mono">
              <span className="stack-label">Core Ecosystem:</span>
              <span className="stack-items">React Native, React.js, TypeScript, Expo, REST APIs, State Management, Axios, Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
