import React, { useState } from "react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/85 backdrop-blur-md text-[var(--foreground)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 h-12 sm:h-13 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="font-extrabold text-xl tracking-tight text-[var(--foreground)] hover:text-[var(--brand-accent)] transition-colors flex items-center gap-1"
        >
          Abhinav
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="px-3 py-1.5 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors text-xs font-semibold"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="ml-2 px-4 py-1.5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-all shadow-xs cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-3.5 py-1.5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-all shadow-xs cursor-pointer"
          >
            Hire Me
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--ring)] transition-colors cursor-pointer text-base"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 py-3 space-y-1.5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="block px-3 py-1.5 rounded-[var(--radius)] text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
