import React from "react";

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming & Web",
      skills: ["JavaScript", "C++", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "React Native", "React Native CLI", "Expo"],
    },
    {
      title: "Web & Application",
      skills: [
        "REST APIs",
        "API Integration",
        "Responsive Design",
        "State Management",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Google Cloud Platform", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-4 md:py-6 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 transition-all duration-300">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-3.5 sm:p-4 shadow-xs hover:border-[var(--foreground)]/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
                <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] tracking-tight">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-semibold rounded-[var(--radius)] bg-[var(--background)]/80 text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--brand-accent)]/50 transition-colors shadow-2xs"
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
