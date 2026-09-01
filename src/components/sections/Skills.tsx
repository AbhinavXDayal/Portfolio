import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

interface SkillTaxonomy {
  category: string;
  categoryNumber: string;
  skills: string[];
}

const skillTaxonomies: SkillTaxonomy[] = [
  {
    category: 'LANGUAGES',
    categoryNumber: '01',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'C++', 'HTML5', 'CSS3'],
  },
  {
    category: 'FRAMEWORKS',
    categoryNumber: '02',
    skills: ['React Native', 'React.js', 'React Native CLI', 'Expo'],
  },
  {
    category: 'APPLICATION',
    categoryNumber: '03',
    skills: ['REST APIs', 'API Integration', 'State Management', 'Responsive Design'],
  },
  {
    category: 'TOOLING',
    categoryNumber: '04',
    skills: ['Git', 'GitHub', 'Google Cloud Platform', 'VS Code'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="skills-section-root" id="skills" aria-label="Skills & Expertise">
      <div className="container">
        <SectionHeader number="02" title="SKILLS" />

        <div className="skills-taxonomy-grid">
          {skillTaxonomies.map((tax) => (
            <div key={tax.category} className="skills-taxonomy-col">
              <div className="taxonomy-header">
                <span className="taxonomy-num mono">{tax.categoryNumber}</span>
                <h3 className="taxonomy-title mono">{tax.category}</h3>
              </div>

              <ul className="taxonomy-list">
                {tax.skills.map((skill) => (
                  <li key={skill} className="taxonomy-item">
                    <span className="taxonomy-dash" aria-hidden="true">—</span>
                    <span className="taxonomy-skill-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
