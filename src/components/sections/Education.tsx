import React from 'react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Education
          </h2>
        </div>

        <div className="max-w-3xl">
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 shadow-sm hover:border-[var(--foreground)]/30 transition-all duration-200">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-3 mb-5 pb-4 border-b border-[var(--border)]/60">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-lg bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)]">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[var(--foreground)] tracking-tight">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="text-sm font-medium text-[var(--muted-foreground)] mt-0.5">
                      SRMCEM — Shri Ramswaroop Memorial College of Engineering and Management
                    </p>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] text-xs font-bold self-center sm:self-auto shadow-2xs">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-xs text-[var(--muted-foreground)]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Jul 2025</span>
              </div>
            </div>

            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6 text-left">
              Focused on software development, data structures &amp; algorithms, object-oriented programming, database management systems, and modern web &amp; mobile application engineering.
            </p>

            {/* Coursework & Focus Tags */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2 border-t border-[var(--border)]/60">
              <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">
                Computer Science
              </span>
              <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">
                Data Structures &amp; Algorithms
              </span>
              <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">
                Database Management (DBMS)
              </span>
              <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">
                Software Engineering
              </span>
              <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">
                Object-Oriented Programming (OOP)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
