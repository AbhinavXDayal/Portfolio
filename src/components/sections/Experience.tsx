import React from "react";

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: "App Developer",
      company: "Aronix Web Technology",
      location: "Delhi, India",
      period: "Jul 2026 – Present",
      bullets: [
        "Developing cross platform mobile applications using React Native, JavaScript & TypeScript with reusable components & component based architecture.",
        "Building responsive and reusable UI components, screens & navigation flows while integrating RESTful APIs for a hospital management application.",
        "Collaborating in the software development lifecycle to implement features, debug issues, optimize application performance & maintain code quality using Git workflows.",
      ],
      tags: [
        "React Native",
        "JavaScript",
        "TypeScript",
        "RESTful APIs",
        "Hospital Management",
        "Git",
      ],
    },
    {
      role: "Web Developer Trainee",
      company: "PCS Management Consultancy",
      location: "Lucknow, India",
      period: "Dec 2024 – Feb 2025",
      bullets: [
        "Built & styled responsive web interfaces & internal dashboards using React.js, HTML5 & CSS3 with a focus on usability & cross device compatibility.",
        "Identified, debugged & resolved UI/UX issues across multiple pages, improving visual consistency, responsiveness & user experience.",
      ],
      tags: [
        "React.js",
        "HTML5",
        "CSS3",
        "UI/UX Design",
        "Web Dashboards",
        "Cross Device Compatibility",
      ],
    },
    {
      role: "Summer Training Intern",
      company: "EICT Academy, IIT Kanpur",
      location: "Lucknow, India",
      period: "Jul 2024 – Aug 2024",
      bullets: [
        "Developed responsive web applications using JavaScript & React.js with reusable components & component based architecture.",
        "Practiced database design, data management & application development concepts through guided exercises & hands on mock projects.",
      ],
      tags: [
        "JavaScript",
        "React.js",
        "Database Design",
        "Component Architecture",
        "Web Applications",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-8 md:py-12 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l border-[var(--border)] ml-3 md:ml-28 space-y-6">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative pl-5 md:pl-8 group">
              {/* Timeline dot */}
              <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-[var(--foreground)] border-2 border-[var(--background)] group-hover:scale-125 transition-transform duration-200"></div>

              {/* Left Date Label for MD+ */}
              <div className="md:absolute md:-left-32 md:top-1 text-[11px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-1.5 md:mb-0 text-left md:text-right">
                {exp.period}
              </div>

              {/* Card Content */}
              <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-4 sm:p-5 shadow-xs hover:border-[var(--foreground)]/30 transition-all duration-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[var(--border)]/60">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
                      {exp.company} • {exp.location}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] text-[11px] font-semibold shadow-2xs">
                    {exp.period}
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed mb-3.5 text-left">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="pl-0.5">
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
