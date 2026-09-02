import React from "react";

export const GithubActivity: React.FC = () => {
  return (
    <section
      id="github"
      className="w-full py-4 md:py-5 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header: @AbhinavXDayal ↗ Button replacing "GitHub Activity" title */}
        <div className="flex items-center justify-between mb-3">
          <a
            href="https://github.com/AbhinavXDayal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--brand-accent)] text-xs sm:text-sm font-semibold shadow-2xs hover:scale-[1.03] transition-all"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-base"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            @AbhinavXDayal ↗
          </a>

          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Contribution Graph
          </span>
        </div>

        {/* GitHub Contribution Snake Activity Graph */}
        <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-3 sm:p-4 shadow-xs overflow-hidden">
          <a
            href="https://github.com/AbhinavXDayal"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full overflow-x-auto"
          >
            <img
              src="https://raw.githubusercontent.com/AbhinavXDayal/AbhinavXDayal/output/snake.svg"
              alt="Abhinav Dayal GitHub Snake Contribution Grid"
              className="w-full min-w-[600px] h-auto rounded"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

