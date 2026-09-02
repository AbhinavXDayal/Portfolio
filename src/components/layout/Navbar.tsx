import React, { useState } from 'react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md text-[var(--foreground)] border-b border-[var(--border)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="font-extrabold text-xl tracking-tight text-[var(--foreground)] hover:text-[var(--brand-accent)] transition-colors flex items-center gap-1"
        >
          Pratham
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors text-xs font-semibold"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors text-xs font-semibold"
          >
            About
          </a>
          <a
            href="#stack"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('stack');
            }}
            className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors text-xs font-semibold"
          >
            Tech Stack
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors text-xs font-semibold"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}
            className="px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors text-xs font-semibold"
          >
            Experience
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] border border-[var(--border)] transition-colors cursor-pointer text-sm"
            aria-label="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="ml-2 px-4 py-2 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-all shadow-xs cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-3.5 py-1.5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-all shadow-xs cursor-pointer"
          >
            Hire Me
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] border border-[var(--border)] transition-colors cursor-pointer text-sm"
            aria-label="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition-colors cursor-pointer text-base"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 py-4 space-y-2">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="block px-3 py-2 rounded-[var(--radius)] text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="block px-3 py-2 rounded-[var(--radius)] text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
          >
            About
          </a>
          <a
            href="#stack"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('stack');
            }}
            className="block px-3 py-2 rounded-[var(--radius)] text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
          >
            Tech Stack
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="block px-3 py-2 rounded-[var(--radius)] text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}
            className="block px-3 py-2 rounded-[var(--radius)] text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
          >
            Experience
          </a>
        </div>
      )}
    </nav>
  );
};
