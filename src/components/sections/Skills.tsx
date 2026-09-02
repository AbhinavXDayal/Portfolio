import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'PROGRAMMING',
    items: ['JavaScript', 'TypeScript', 'C++', 'HTML', 'CSS'],
  },
  {
    category: 'FRAMEWORKS',
    items: ['React.js', 'React Native', 'React Native CLI', 'Expo'],
  },
  {
    category: 'APPLICATION',
    items: ['REST APIs', 'API Integration', 'Responsive Design', 'State Management'],
  },
  {
    category: 'TOOLS',
    items: ['Git', 'GitHub', 'Google Cloud Platform', 'VS Code'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="skills-section" id="skills" aria-label="Technical Skills">
      <div className="container">
        <SectionHeading
          number="02"
          title="SKILLS"
        />

        <div className="skills-v4-horizontal-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-v4-group">
              <h3 className="skill-v4-cat-heading mono">{group.category}</h3>
              <ul className="skill-v4-list">
                {group.items.map((item) => (
                  <li key={item} className="skill-v4-item">
                    <span className="skill-v4-dash" aria-hidden="true">—</span>
                    <span className="skill-v4-text">{item}</span>
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
