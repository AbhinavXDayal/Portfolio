import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Tag } from '../ui/Tag';

export const About: React.FC = () => {
  return (
    <section className="about-section" id="about" aria-label="About Me">
      <div className="container">
        <SectionHeading
          number="01"
          title="ABOUT ME"
        />

        <div className="about-v4-card">
          <div className="about-v4-grid">
            {/* Left: Large Statement & Metadata */}
            <div className="about-v4-left">
              <h3 className="about-statement">
                Building high-reliability mobile applications and modern web interfaces with precision.
              </h3>

              <div className="about-meta-row mono">
                <span className="meta-pill">Based in India</span>
                <span className="meta-sep">•</span>
                <span className="meta-pill">App Development</span>
                <span className="meta-sep">•</span>
                <span className="meta-pill">Web Development</span>
              </div>
            </div>

            {/* Right: Concise Factual Narrative & Technologies */}
            <div className="about-v4-right">
              <p className="about-v4-text">
                I am an <span className="text-highlight">App Developer</span> specializing in cross-platform mobile engineering with <span className="text-highlight">React Native, React.js, and TypeScript</span>.
              </p>
              <p className="about-v4-text">
                At <span className="text-highlight">Aronix Web Technology</span>, I develop responsive mobile screens, navigation architectures, and RESTful API integrations for a hospital management application. Grounded by earlier web development at <span className="text-highlight">PCS Management Consultancy</span> and training at <span className="text-highlight">EICT Academy, IIT Kanpur</span>, I focus on component-based architecture and clean, maintainable code.
              </p>

              <div className="about-tags-cloud">
                <Tag label="React Native" variant="accent" size="sm" />
                <Tag label="React.js" variant="accent" size="sm" />
                <Tag label="TypeScript" variant="accent" size="sm" />
                <Tag label="JavaScript" variant="subtle" size="sm" />
                <Tag label="REST APIs" variant="subtle" size="sm" />
                <Tag label="Expo" variant="subtle" size="sm" />
                <Tag label="State Management" variant="subtle" size="sm" />
                <Tag label="Axios" variant="subtle" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
