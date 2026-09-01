import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToSection } from '../../lib/utils';
import { personalInfo } from '../../data/social';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(['about', 'skills', 'experience', 'projects', 'education', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-root ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="navbar-brand"
            aria-label="Abhinav Dayal - Home"
          >
            <span className="brand-text">Abhinav Dayal</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-navigation" aria-label="Main Navigation">
            <ul className="desktop-nav-list">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="desktop-nav-item">
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`desktop-nav-link ${isActive ? 'is-active' : ''}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href={personalInfo.resumeUrl}
              onClick={(e) => {
                if (personalInfo.resumeUrl.startsWith('#')) {
                  handleNavClick(e, personalInfo.resumeUrl.replace('#', ''));
                }
              }}
              className="navbar-resume-link"
              aria-label="Resume"
            >
              <span>Resume</span>
              <ArrowUpRight size={13} className="link-arrow" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Subtle Top Scroll Progress Line */}
        <div
          className="navbar-scroll-indicator"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-backdrop ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      <aside
        className={`mobile-drawer-panel ${isMobileMenuOpen ? 'is-open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-drawer-top">
          <span className="drawer-title mono">Navigation</span>
          <button
            className="drawer-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mobile-drawer-links">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`mobile-link-row ${isActive ? 'is-active' : ''}`}
              >
                <span className="link-number mono">0{idx + 1}</span>
                <span className="link-label">{item.label}</span>
                <ArrowUpRight size={15} className="link-icon" />
              </a>
            );
          })}
        </nav>

        <div className="mobile-drawer-bottom">
          <a
            href={personalInfo.resumeUrl}
            onClick={(e) => {
              if (personalInfo.resumeUrl.startsWith('#')) {
                handleNavClick(e, personalInfo.resumeUrl.replace('#', ''));
              }
            }}
            className="mobile-resume-action"
          >
            <span>View Resume</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </aside>
    </>
  );
};
