export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  mockupType: 'mobile' | 'web';
  mockupKey: 'swastrix' | 'moviewatchlist' | 'chefclaude';
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: 'swastrix-healthcare',
    number: '01',
    title: 'Swastrix Healthcare',
    subtitle: 'Cross-Platform Healthcare Application',
    description:
      'Developed a cross-platform healthcare application using React Native and Expo, building reusable components and responsive mobile interfaces for healthcare workflows. Implemented application screens, navigation flows, and interactive user interfaces using component-based architecture and React state management, integrating RESTful APIs via Axios for asynchronous data handling.',
    technologies: ['React Native', 'Expo', 'REST APIs', 'Axios', 'State Management'],
    mockupType: 'mobile',
    mockupKey: 'swastrix',
    featured: true,
  },
  {
    id: 'movie-watchlist',
    number: '02',
    title: 'Movie Watchlist',
    subtitle: 'Interactive Movie Discovery & Tracking Platform',
    description:
      'Developed a responsive single-page movie application using React.js and custom CSS, integrating the OMDb REST API to dynamically fetch and display movie data. Implemented dynamic Watchlist and Watched state management using localStorage to persist user preferences and improve the user experience with client-side routing.',
    technologies: ['React.js', 'Axios', 'React Router', 'OMDb API', 'localStorage', 'CSS3'],
    mockupType: 'web',
    mockupKey: 'moviewatchlist',
    liveUrl: 'https://abhinav-moviewatchlist.vercel.app',
    featured: true,
  },
  {
    id: 'chef-claude',
    number: '03',
    title: 'Chef Claude',
    subtitle: 'AI-Powered Recipe Generation Web App',
    description:
      "Developed an AI-powered recipe generator using React.js and Hugging Face's Mixtral-8x7B model, integrating generative AI capabilities into a web application. Implemented dynamic user input handling and Markdown rendering with responsive Tailwind CSS layouts to deliver an interactive and user-friendly experience.",
    technologies: ['React.js', 'Tailwind CSS', 'Hugging Face', 'Mixtral-8x7B', 'Generative AI'],
    mockupType: 'web',
    mockupKey: 'chefclaude',
    liveUrl: 'https://abhinav-chefclaude.vercel.app',
    featured: true,
  },
];

