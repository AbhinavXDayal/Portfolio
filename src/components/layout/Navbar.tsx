import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/social';
import { scrollToSection } from '../../lib/utils';
import { useActiveSection } from '../../hooks/useActiveSection';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(['about', 'skills', 'experience', 'projects', 'education', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className={`editorial-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="nav-brand"
        >
          Abhinav Dayal
        </a>

        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href={personalInfo.resumeUrl}
            onClick={(e) => {
              if (personalInfo.resumeUrl.startsWith('#')) {
                handleNavClick(e, personalInfo.resumeUrl.replace('#', ''));
              }
            }}
            className="nav-item resume-link"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
};
