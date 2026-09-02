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
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-4 md:py-6 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-5">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Work Experience
          </h2>
        </div>

        {/* Continuous GitHub Timeline Container */}
        <div className="relative ml-2 sm:ml-4 md:ml-36 space-y-4">
          {/* One Continuous Connected Line (Zero SVG, Pure CSS) */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-[#58A6FF]"></div>

          {experiences.map((exp) => (
            <div key={exp.company} className="relative pl-6 md:pl-8 group">
              {/* GitHub Double-Ring Commit Node sitting on the continuous line */}
              <div className="absolute left-[1px] top-4 w-[14px] h-[14px] rounded-full border-2 border-[#58A6FF] bg-[var(--background)] flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-200">
                <div className="w-[4px] h-[4px] rounded-full bg-[#58A6FF]"></div>
              </div>

              {/* Date on the Left (Desktop: positioned left of timeline) */}
              <div className="hidden md:block absolute -left-36 top-3.5 text-xs font-semibold text-[var(--muted-foreground)] tracking-wide text-right w-30 pr-3 select-none">
                {exp.period}
              </div>

              {/* Date on Mobile (above card) */}
              <div className="md:hidden text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 tracking-wide">
                {exp.period}
              </div>

              {/* Clean Experience Card (No hashes, no branch names) */}
              <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-3.5 sm:p-4.5 shadow-xs hover:border-[var(--brand-accent)]/40 transition-all duration-200">
                <div className="mb-2.5 pb-2 border-b border-[var(--border)]/60">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--muted-foreground)]">
                    {exp.company} • {exp.location}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed text-left">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="pl-0.5">
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
