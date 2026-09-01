export interface SkillCategory {
  name: string;
  categoryNumber: string;
  description: string;
  skills: {
    name: string;
    isPrimary?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming & Web',
    categoryNumber: '01',
    description: 'Core languages and foundational web technologies for robust cross-platform development.',
    skills: [
      { name: 'JavaScript', isPrimary: true },
      { name: 'TypeScript', isPrimary: true },
      { name: 'C++', isPrimary: false },
      { name: 'HTML5', isPrimary: false },
      { name: 'CSS3', isPrimary: false },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    categoryNumber: '02',
    description: 'Specialized mobile & frontend frameworks for performant cross-platform software.',
    skills: [
      { name: 'React Native', isPrimary: true },
      { name: 'React.js', isPrimary: true },
      { name: 'React Native CLI', isPrimary: true },
      { name: 'Expo', isPrimary: true },
    ],
  },
  {
    name: 'Web & Application Architecture',
    categoryNumber: '03',
    description: 'Data communication, state management paradigms, and responsive design systems.',
    skills: [
      { name: 'REST APIs', isPrimary: true },
      { name: 'API Integration', isPrimary: true },
      { name: 'State Management', isPrimary: true },
      { name: 'Responsive Design', isPrimary: true },
    ],
  },
  {
    name: 'Tools & Platforms',
    categoryNumber: '04',
    description: 'Version control, cloud infrastructure, and modern developer tooling.',
    skills: [
      { name: 'Git', isPrimary: true },
      { name: 'GitHub', isPrimary: true },
      { name: 'Google Cloud Platform', isPrimary: false },
      { name: 'VS Code', isPrimary: false },
    ],
  },
];

