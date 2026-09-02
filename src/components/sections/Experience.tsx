import React, { useState } from "react";

export const Experience: React.FC = () => {
  const [activeExp, setActiveExp] = useState<number>(0);

  const experiences = [
    {
      role: "App Developer",
      company: "Aronix Web Technology",
      location: "Delhi, India",
      period: "Jul 2026 – Present",
      status: "Present • Ongoing",
      isCurrent: true,
      summary:
        "Developing production-ready cross-platform mobile apps with React Native and TypeScript, architecting responsive UI workflows and integrating RESTful APIs for healthcare platforms.",
    },
    {
      role: "Web Developer Trainee",
      company: "PCS Management Consultancy",
      location: "Lucknow, India",
      period: "Dec 2024 – Feb 2025",
      status: "3 Months",
      isCurrent: false,
      summary:
        "Engineered responsive web interfaces and internal dashboards using React.js, optimizing usability and resolving UI/UX issues for cross-device compatibility.",
    },
    {
      role: "Summer Training Intern",
      company: "EICT Academy, IIT Kanpur",
      location: "Lucknow, India",
      period: "Jul 2024 – Aug 2024",
      status: "2 Months",
      isCurrent: false,
      summary:
        "Developed component-driven web applications using JavaScript and React.js while practicing relational database design and modern state architecture.",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-4 md:py-6 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Work Experience
          </h2>
        </div>

        {/* Dynamic Botanical Timeline with Dates Left-Aligned Directly Under Headline */}
        <div className="relative space-y-3.5 sm:space-y-4 w-full">
          {/* Continuous Botanical Spine Line */}
          <div className="absolute left-[131px] sm:left-[171px] md:left-[191px] top-3.5 bottom-3.5 w-[2px] bg-gradient-to-b from-[#7EA984] via-[#5B8B67]/70 to-[#253930]/40 rounded-full pointer-events-none">
            {/* Animated Energy Droplet flowing down the stem */}
            <div className="w-[2px] h-10 bg-gradient-to-b from-transparent via-[#A3CEB3] to-transparent animate-pulse"></div>
          </div>

          {experiences.map((exp, idx) => {
            const isSelected = activeExp === idx;

            return (
              <div
                key={exp.company}
                onClick={() => setActiveExp(idx)}
                onMouseEnter={() => setActiveExp(idx)}
                className="flex items-start group cursor-pointer"
              >
                {/* 1. Date Label Left-Aligned Directly Under 'Work Experience' Headline */}
                <div className="w-[120px] sm:w-[160px] md:w-[180px] shrink-0 pt-3 text-left select-none pr-3">
                  <span
                    className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider block transition-colors leading-tight ${
                      isSelected
                        ? "text-[#7EA984]"
                        : "text-[var(--foreground)]"
                    }`}
                  >
                    {exp.period}
                  </span>
                  <span className="text-[10px] text-[var(--muted-foreground)] block mt-0.5">
                    {exp.status}
                  </span>
                </div>

                {/* 2. Interactive Timeline Node */}
                <div className="relative z-10 w-6 flex items-center justify-center shrink-0 pt-3.5">
                  {exp.isCurrent ? (
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-5 h-5 rounded-full bg-[#7EA984]/40 animate-ping"></span>
                      <span
                        className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                          isSelected
                            ? "bg-[#A3CEB3] border-[#7EA984] scale-125 ring-4 ring-[#7EA984]/30"
                            : "bg-[#7EA984] border-[var(--background)]"
                        }`}
                      ></span>
                    </div>
                  ) : (
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                          isSelected
                            ? "bg-[#7EA984] border-[var(--background)] scale-125 ring-4 ring-[#7EA984]/30"
                            : "bg-[var(--card)] border-[var(--border)] group-hover:border-[#7EA984]"
                        }`}
                      ></span>
                    </div>
                  )}
                </div>

                {/* 3. Experience Card */}
                <div className="flex-1 min-w-0 pl-3 sm:pl-4">
                  <div
                    className={`w-full bg-[var(--card)] text-[var(--card-foreground)] border rounded-[var(--radius)] p-3 sm:p-4 shadow-xs transition-all duration-300 ${
                      isSelected
                        ? "border-[#7EA984]/70 shadow-sm -translate-y-0.5"
                        : "border-[var(--border)] hover:border-[var(--foreground)]/30"
                    }`}
                  >
                    {/* Card Header */}
                    <div className="mb-2 pb-1.5 border-b border-[var(--border)]/60">
                      <h3
                        className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                          isSelected
                            ? "text-[#A3CEB3]"
                            : "text-[var(--foreground)]"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
                        {exp.company} • {exp.location}
                      </span>
                    </div>

                    {/* 1-2 Line Concise Summary */}
                    <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed text-left">
                      {exp.summary}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

