import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export const Education: React.FC = () => {
  return (
    <section className="education-section-root" id="education" aria-label="Education">
      <div className="container">
        <SectionHeader number="05" title="EDUCATION" />

        <div className="education-single-row">
          <div className="edu-degree-text">
            Bachelor of Computer Applications (BCA)
          </div>
          <div className="edu-institution-text">
            SRMCEM — Shri Ramswaroop Memorial College of Engineering and Management
          </div>
          <div className="edu-graduation-year mono">
            Graduated 2025
          </div>
        </div>
      </div>
    </section>
  );
};
