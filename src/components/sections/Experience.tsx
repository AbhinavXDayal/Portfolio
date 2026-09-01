import React from 'react';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section className="editorial-section" id="experience" aria-label="Work Experience">
      <h2 className="section-title mono">Experience</h2>

      <div className="experience-list">
        {experiences.map((exp) => (
          <article key={exp.id} className="experience-item">
            <div className="experience-header">
              <div className="role-and-company">
                <h3 className="role-title">{exp.role}</h3>
                <span className="company-name">{exp.company}</span>
              </div>
              <div className="period-and-loc mono">
                <span>{exp.period}</span>
                <span className="loc-dim"> — {exp.location}</span>
              </div>
            </div>

            <ul className="bullet-list">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="bullet-item">
                  <span className="bullet-dash" aria-hidden="true">—</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
