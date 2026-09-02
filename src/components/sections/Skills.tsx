import React from 'react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Mobile & App Development',
      description: 'Cross-platform mobile apps, native tooling & reusable architecture.',
      skills: ['React Native', 'React Native CLI', 'Expo', 'State Management', 'C++', 'Mobile UI'],
    },
    {
      title: 'Frontend & Web',
      description: 'Modern component-driven web interfaces & responsive design.',
      skills: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      title: 'Web & Architecture',
      description: 'RESTful API integrations, data handling & routing architectures.',
      skills: ['REST APIs', 'API Integration', 'Axios', 'React Router', 'Responsive Design', 'Data Flow'],
    },
    {
      title: 'Tools & Platforms',
      description: 'Cloud services, version control workflows & dev ecosystems.',
      skills: ['Git', 'GitHub', 'Google Cloud Platform (GCP)', 'VS Code', 'npm', 'Vercel'],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-8 md:py-12 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6">
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-1">
            Technical Proficiency
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-4 sm:p-5 shadow-xs hover:border-[var(--foreground)]/30 transition-all duration-200"
            >
              <h3 className="text-base sm:text-lg font-bold mb-1 text-[var(--foreground)]">
                {category.title}
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] mb-3.5 leading-relaxed">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)] shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
