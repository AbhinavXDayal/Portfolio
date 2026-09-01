import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section className="experience-section-root" id="experience" aria-label="Work Experience">
      <div className="container">
        <SectionHeader number="03" title="EXPERIENCE" />

        <div className="experience-editorial-list">
          {experiences.map((exp) => (
            <article key={exp.id} className="experience-row-item">
              {/* Date & Location Column */}
              <div className="experience-date-col mono">
                <span className="experience-period">{exp.period}</span>
                <span className="experience-location">{exp.location}</span>
                {exp.isCurrent && (
                  <span className="experience-current-badge">CURRENT</span>
                )}
              </div>

              {/* Role & Company Column */}
              <div className="experience-role-col">
                <h3 className="experience-role-title">{exp.role}</h3>
                <span className="experience-company-name">{exp.company}</span>
              </div>

              {/* Highlights Column */}
              <div className="experience-desc-col">
                <ul className="experience-highlights-list">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="experience-highlight-bullet">
                      <span className="bullet-marker" aria-hidden="true">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
