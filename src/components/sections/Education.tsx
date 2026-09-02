import React from "react";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="w-full py-4 md:py-6 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Education
          </h2>
        </div>

        <div className="max-w-2xl">
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-4 sm:p-5 shadow-xs hover:border-[var(--foreground)]/30 transition-all duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[var(--border)]/60">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-md bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-lg"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] tracking-tight">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-xs font-medium text-[var(--muted-foreground)]">
                    SRMCEM — Shri Ramswaroop Memorial College of Engg. &amp;
                    Mgmt.
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] text-[11px] font-semibold shadow-2xs">
                Jul 2025
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed mb-3 text-left">
              Focused on software development, data structures &amp; algorithms,
              object-oriented programming, database management systems, and
              modern web &amp; mobile application engineering.
            </p>

            {/* Coursework & Focus Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[var(--border)]/60">
              {[
                "Computer Science",
                "Data Structures & Algorithms",
                "DBMS",
                "Software Engineering",
                "OOP",
              ].map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 text-[11px] font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
