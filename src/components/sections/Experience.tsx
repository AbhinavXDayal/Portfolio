import React from "react";

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: "App Developer",
      company: "Aronix Web Technology",
      location: "Delhi, India",
      period: "Jul 2026 – Present",
      branch: "feat/mobile-app-developer",
      branchColor: "#F4D06F", // Warm Golden Yellow
      commitHash: "c2b4e19",
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
      branch: "feat/web-developer-trainee",
      branchColor: "#E07A5F", // Coral Pink / Terra Cotta
      commitHash: "7a1d94f",
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
      branch: "feat/summer-training-intern",
      branchColor: "#81B29A", // Botanical Sage / Emerald
      commitHash: "4e9b27a",
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

        {/* GitHub Commit Graph Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="relative flex items-stretch gap-3 sm:gap-5 group"
            >
              {/* Git Branch & Commit Graph Column */}
              <div className="relative shrink-0 w-8 sm:w-10 flex justify-center">
                <svg
                  className="w-8 sm:w-10 h-full overflow-visible"
                  viewBox="0 0 36 120"
                  preserveAspectRatio="none"
                >
                  {/* Continuous Main Branch Line (Blue) */}
                  <line
                    x1="12"
                    y1="0"
                    x2="12"
                    y2={idx === experiences.length - 1 ? "84" : "100%"}
                    stroke="#58A6FF"
                    strokeWidth="2.5"
                  />

                  {/* Feature Branch Curve: Branch Out & Merge Back */}
                  <path
                    d="M 12 18 C 26 18, 28 34, 28 50 C 28 66, 26 82, 12 82"
                    fill="none"
                    stroke={exp.branchColor}
                    strokeWidth="2.2"
                  />

                  {/* Main Branch Commit Node (Double Ring) */}
                  <circle
                    cx="12"
                    cy="18"
                    r="5.5"
                    fill="#0E1613"
                    stroke="#58A6FF"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="18" r="2.2" fill="#58A6FF" />

                  {/* Feature Branch Commit Node (Solid Colored Circle) */}
                  <circle
                    cx="28"
                    cy="50"
                    r="4.5"
                    fill={exp.branchColor}
                    stroke="#0E1613"
                    strokeWidth="1.5"
                  />

                  {/* Merge Commit Node on Main Branch */}
                  <circle
                    cx="12"
                    cy="82"
                    r="5.5"
                    fill="#0E1613"
                    stroke="#58A6FF"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="82" r="2.2" fill="#58A6FF" />
                </svg>
              </div>

              {/* Commit Details Card */}
              <div className="flex-1 bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-3.5 sm:p-4.5 shadow-xs hover:border-[var(--brand-accent)]/40 transition-all duration-200">
                {/* Header: Role, Git Hash, Branch & Period */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2.5 pb-2.5 border-b border-[var(--border)]/60">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] tracking-tight">
                        {exp.role}
                      </h3>
                      {/* Git Commit Hash */}
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[var(--background)] text-[#58A6FF] border border-[var(--border)]">
                        {exp.commitHash}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                        {exp.company} • {exp.location}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--muted-foreground)]/80">
                        {exp.branch}
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] text-[11px] font-semibold shrink-0">
                    {exp.period}
                  </div>
                </div>

                {/* Commit Bullet Messages */}
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
