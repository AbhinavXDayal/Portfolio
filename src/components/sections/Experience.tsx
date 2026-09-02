import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section className="experience-section" id="experience" aria-label="Work Experience">
      <div className="container">
        <SectionHeading
          number="03"
          title="EXPERIENCE"
        />

        <div className="experience-v4-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-v4-row">
              {/* Date & Location Column */}
              <div className="exp-v4-date-col mono">
                <span className="exp-v4-period">{exp.period}</span>
                <span className="exp-v4-location">{exp.location}</span>
                {exp.isCurrent && <span className="exp-v4-present-tag">PRESENT</span>}
              </div>

              {/* Role & Company Column */}
              <div className="exp-v4-role-col">
                <h3 className="exp-v4-role">{exp.role}</h3>
                <span className="exp-v4-company">{exp.company}</span>
              </div>

              {/* Description Column */}
              <div className="exp-v4-desc-col">
                <ul className="exp-v4-bullet-list">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="exp-v4-bullet-item">
                      <span className="bullet-dash" aria-hidden="true">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
