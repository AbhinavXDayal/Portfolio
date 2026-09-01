import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="editorial-section" id="about" aria-label="About Me">
      <h2 className="section-title mono">About</h2>

      <div className="about-prose">
        <p className="lead-paragraph">
          I am an <span className="highlight">App Developer</span> specializing in cross-platform mobile engineering with <span className="highlight">React Native, React.js, and TypeScript</span>.
        </p>

        <p>
          At <span className="highlight">Aronix Web Technology</span>, I build responsive UI components, navigation flows, and integrate RESTful APIs for a hospital management application. My background includes developing web interfaces and dashboards at <span className="highlight">PCS Management Consultancy</span> and hands-on software development training at <span className="highlight">EICT Academy, IIT Kanpur</span>.
        </p>

        <p>
          I focus on component-based architecture, predictable state management, and crafting interfaces that feel fast, reliable, and intuitive across devices.
        </p>
      </div>
    </section>
  );
};
