import React from 'react';

interface SkillCatalogItem {
  category: string;
  skills: string[];
}

const skillCatalog: SkillCatalogItem[] = [
  {
    category: 'Programming & Web',
    skills: ['JavaScript', 'TypeScript', 'C++', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Mobile',
    skills: ['React Native', 'React.js', 'React Native CLI', 'Expo'],
  },
  {
    category: 'Application Architecture',
    skills: ['REST APIs', 'API Integration', 'State Management', 'Responsive Design'],
  },
  {
    category: 'Tooling & Platforms',
    skills: ['Git', 'GitHub', 'Google Cloud Platform', 'VS Code'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="editorial-section" id="skills" aria-label="Technical Skills">
      <h2 className="section-title mono">Skills</h2>

      <div className="skills-grid">
        {skillCatalog.map((group) => (
          <div key={group.category} className="skill-row">
            <span className="skill-category-label mono">{group.category}</span>
            <p className="skill-list-text">
              {group.skills.join(' • ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
