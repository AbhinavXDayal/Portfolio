import React, { useState } from "react";

export const Experience: React.FC = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  const [activeExp, setActiveExp] = useState<number>(0);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    "Aronix Web Technology": true,
    "PCS Management Consultancy": false,
    "EICT Academy, IIT Kanpur": false,
  });

  const toggleCard = (company: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [company]: !prev[company],
    }));
  };

  const toggleAll = () => {
    const allExpanded = Object.values(expandedCards).every(Boolean);
    const nextState = !allExpanded;
    const updated: Record<string, boolean> = {};
    experiences.forEach((exp) => {
      updated[exp.company] = nextState;
    });
    setExpandedCards(updated);
  };

  const experiences = [
    {
      role: "App Developer",
      company: "Aronix Web Technology",
      location: "Delhi, India",
      period: "Jul 2026 – Present",
      status: "Present • Ongoing",
      isCurrent: true,
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
      status: "3 Months",
      isCurrent: false,
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
      status: "2 Months",
      isCurrent: false,
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
        {/* Section Header with Section Toggle */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Work Experience
          </h2>
          <div className="flex items-center gap-2">
            {isSectionOpen && (
              <button
                onClick={toggleAll}
                className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] bg-[var(--card)] hover:bg-[var(--accent)] border border-[var(--border)] transition-all cursor-pointer shadow-2xs"
              >
                {Object.values(expandedCards).every(Boolean)
                  ? "Collapse Cards"
                  : "Expand Cards"}
              </button>
            )}
            <button
              onClick={() => setIsSectionOpen(!isSectionOpen)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] bg-[var(--card)] hover:bg-[var(--accent)] border border-[var(--border)] transition-all cursor-pointer shadow-2xs group"
              aria-label="Toggle Work Experience section"
            >
              <span className="text-[11px] font-semibold">
                {isSectionOpen ? "Collapse" : "Expand"}
              </span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isSectionOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {isSectionOpen && (
          /* Flush Full-Width Experience Cards (Aligned with Skills and Projects) */
          <div className="space-y-3 sm:space-y-3.5 w-full transition-all duration-300">
            {experiences.map((exp, idx) => {
              const isSelected = activeExp === idx;
              const isCardOpen = !!expandedCards[exp.company];

              return (
                <div
                  key={exp.company}
                  onClick={() => {
                    setActiveExp(idx);
                    toggleCard(exp.company);
                  }}
                  onMouseEnter={() => setActiveExp(idx)}
                  className={`w-full bg-[var(--card)] text-[var(--card-foreground)] border rounded-[var(--radius)] p-3.5 sm:p-4 shadow-xs transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? "border-[#7EA984]/70 shadow-sm -translate-y-0.5"
                      : "border-[var(--border)] hover:border-[var(--foreground)]/30"
                  }`}
                >
                  {/* Card Header */}
                  <div
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 transition-all duration-200 ${
                      isCardOpen ? "mb-2.5 pb-2 border-b border-[var(--border)]/60" : ""
                    }`}
                  >
                    {/* Left Info with Botanical Node Indicator */}
                    <div className="flex items-center gap-3">
                      {/* Timeline Node Badge */}
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm border transition-all duration-300 shrink-0 ${
                          exp.isCurrent
                            ? "bg-[var(--accent)] border-[#7EA984]/60 text-[#A3CEB3]"
                            : "bg-[var(--accent)] border-[var(--border)] text-[var(--muted-foreground)] group-hover:border-[#7EA984]/40"
                        }`}
                      >
                        {exp.isCurrent ? (
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7EA984] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7EA984]"></span>
                          </span>
                        ) : (
                          <span className="text-xs">💼</span>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3
                            className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                              isSelected
                                ? "text-[#A3CEB3]"
                                : "text-[var(--foreground)]"
                            }`}
                          >
                            {exp.role}
                          </h3>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
                          {exp.company} • {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Right Info: Period Badge & Toggle Chevron */}
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold transition-colors ${
                          isSelected
                            ? "bg-[var(--accent)] border-[#7EA984]/50 text-[#A3CEB3]"
                            : "bg-[var(--accent)] text-[var(--foreground)] border-[var(--border)]"
                        }`}
                      >
                        {exp.isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        )}
                        {exp.period}
                      </div>

                      {/* Card Toggle Chevron */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(exp.company);
                        }}
                        className="p-1 rounded-md text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors cursor-pointer"
                        aria-label={isCardOpen ? "Collapse card" : "Expand card"}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isCardOpen ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Collapsible Bullets */}
                  {isCardOpen && (
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed text-left pt-0.5 sm:pl-11">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="pl-0.5">
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
