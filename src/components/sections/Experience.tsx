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
          /* Dynamic Botanical Timeline with Flush Left Width */
          <div className="relative pl-7 sm:pl-8 space-y-3 sm:space-y-3.5 w-full transition-all duration-300">
            {/* Continuous Botanical Spine Connecting All Jobs */}
            <div className="absolute left-[11px] sm:left-[13px] top-3.5 bottom-3.5 w-[2px] bg-gradient-to-b from-[#7EA984] via-[#5B8B67]/70 to-[#253930]/40 rounded-full">
              {/* Animated Energy Droplet flowing down the stem */}
              <div className="w-[2px] h-10 bg-gradient-to-b from-transparent via-[#A3CEB3] to-transparent animate-pulse"></div>
            </div>

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
                  className="relative group cursor-pointer"
                >
                  {/* Interactive Timeline Node on the Spine */}
                  <div className="absolute -left-[23px] sm:-left-[25px] top-3.5 z-20 flex items-center justify-center">
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

                  {/* Experience Card taking the rest of full width */}
                  <div
                    className={`w-full bg-[var(--card)] text-[var(--card-foreground)] border rounded-[var(--radius)] p-3.5 sm:p-4 shadow-xs transition-all duration-300 ${
                      isSelected
                        ? "border-[#7EA984]/70 shadow-sm -translate-y-0.5"
                        : "border-[var(--border)] hover:border-[var(--foreground)]/30"
                    }`}
                  >
                    {/* Card Header */}
                    <div
                      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 transition-all duration-200 ${
                        isCardOpen
                          ? "mb-2.5 pb-2 border-b border-[var(--border)]/60"
                          : ""
                      }`}
                    >
                      <div>
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
                          aria-label={
                            isCardOpen ? "Collapse card" : "Expand card"
                          }
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
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed text-left pt-0.5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="pl-0.5">
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
