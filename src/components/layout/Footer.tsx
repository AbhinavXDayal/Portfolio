import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-transparent text-[var(--muted-foreground)] border-t border-[var(--border)]/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-center sm:text-left">
        <p>© 2026 Abhinav Dayal. Built with React &amp; Tailwind CSS.</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/AbhinavXDayal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abhinavxdayal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://abhinavxportfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

