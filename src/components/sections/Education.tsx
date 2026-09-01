import React from 'react';

export const Education: React.FC = () => {
  return (
    <section className="editorial-section" id="education" aria-label="Education">
      <h2 className="section-title mono">Education</h2>

      <div className="education-row">
        <div className="education-main">
          <h3 className="education-degree">Bachelor of Computer Applications (BCA)</h3>
          <p className="education-inst">
            SRMCEM — Shri Ramswaroop Memorial College of Engineering and Management
          </p>
        </div>
        <div className="education-year mono">
          Jul 2025
        </div>
      </div>
    </section>
  );
};
