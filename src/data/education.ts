export interface EducationItem {
  degree: string;
  institution: string;
  institutionFull?: string;
  period: string;
  details?: string;
}

export const educationList: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'SRMCEM',
    institutionFull: 'Shri Ramswaroop Memorial College of Engineering and Management',
    period: 'Completed Jul 2025',
    details: 'Rigorous foundation in computer science principles, data structures, algorithms, database management, and modern software engineering.',
  },
];

