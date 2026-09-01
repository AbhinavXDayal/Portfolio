import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const Education: React.FC = () => {
  return (
    <section className="education-section" id="education" aria-label="Education">
      <div className="container">
        <SectionHeading
          number="05"
          title="EDUCATION"
        />

        <div className="education-v4-row">
          <div className="edu-v4-degree">
            Bachelor of Computer Applications (BCA)
          </div>
          <div className="edu-v4-inst">
            SRMCEM — Shri Ramswaroop Memorial College of Engineering and Management
          </div>
          <div className="edu-v4-year mono">
            Graduated 2025
          </div>
        </div>
      </div>
    </section>
  );
};
