export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'aronix-web-tech',
    role: 'App Developer',
    company: 'Aronix Web Technology',
    location: 'Delhi, India',
    period: 'Jul 2026 – Present',
    isCurrent: true,
    highlights: [
      'Developing cross-platform mobile applications using React Native, JavaScript and TypeScript, following component-based architecture, reusable code practices and modern software development principles.',
      'Building responsive and reusable UI components, screens and navigation flows while integrating RESTful APIs for a hospital management application.',
      'Collaborating in the software development lifecycle to implement features, debug issues, optimize application performance and maintain code quality using Git and version control workflows.',
    ],
  },
  {
    id: 'pcs-consultancy',
    role: 'Web Developer Trainee',
    company: 'PCS Management Consultancy',
    location: 'Lucknow, India',
    period: 'Dec 2024 – Feb 2025',
    isCurrent: false,
    highlights: [
      'Built and styled responsive web interfaces and internal dashboards using React.js, HTML5 and CSS3 with a focus on usability and cross-device compatibility.',
      'Identified, debugged and resolved UI/UX issues across multiple pages, improving visual consistency, responsiveness and user experience.',
    ],
  },
  {
    id: 'eict-iitk',
    role: 'Summer Training Intern',
    company: 'EICT Academy, IIT Kanpur',
    location: 'Lucknow, India',
    period: 'Jul 2024 – Aug 2024',
    isCurrent: false,
    highlights: [
      'Developed responsive web applications using JavaScript and React.js with reusable components and component-based architecture.',
      'Practiced database design, data management and application development concepts through guided exercises and hands-on mock projects.',
    ],
  },
];


