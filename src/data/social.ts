export interface SocialLink {
  label: string;
  url: string;
  username?: string;
  isExternal?: boolean;
}

export const personalInfo = {
  name: 'Abhinav Dayal',
  role: 'App Developer',
  tagline: 'Building thoughtful web & mobile experiences with React, React Native & modern JavaScript.',
  email: 'abhinavxdayal@gmail.com',
  phone: '+91 8318215585',
  location: 'Delhi / Lucknow, India',
  status: 'Available for full-time & high-impact contract roles',
  shortBio:
    'App Developer specializing in building high-performance, cross-platform mobile applications and responsive web interfaces. Focused on clean component architectures, robust API integrations, and fluid user experiences with React Native, React.js, and TypeScript.',
  resumeUrl: '#contact', // Configurable resume link or mailto
};

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    url: `mailto:${personalInfo.email}`,
    username: personalInfo.email,
    isExternal: false,
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/abhinavxdayal',
    username: 'abhinavxdayal',
    isExternal: true,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/abhinavxdayal',
    username: 'abhinavxdayal',
    isExternal: true,
  },
  {
    label: 'Portfolio',
    url: 'https://abhinavxportfolio.vercel.app',
    username: 'abhinavxportfolio.vercel.app',
    isExternal: true,
  },
];

