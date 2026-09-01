import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToSection } from '../../lib/utils';
import { personalInfo } from '../../data/social';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
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
      <header
        className={`site-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
        role="banner"
      >
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
            <span className="brand-name">ABHINAV DAYAL</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id} className="nav-item">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="nav-actions">
              <a
                href={personalInfo.resumeUrl}
                onClick={(e) => {
                  if (personalInfo.resumeUrl.startsWith('#')) {
                    handleNavClick(e, personalInfo.resumeUrl.replace('#', ''));
                  }
                }}
                className="resume-btn"
                aria-label="Contact / Resume"
              >
                <span>Resume</span>
              </a>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <div
          className="navbar-progress-bar"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      <aside
        className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title mono">Menu</span>
          <button
            className="mobile-drawer-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mobile-nav-list">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="mobile-nav-num mono">0{idx + 1}</span>
                <span className="mobile-nav-text">{link.label}</span>
                <ArrowUpRight size={15} className="mobile-nav-arrow" />
              </a>
            );
          })}
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href={personalInfo.resumeUrl}
            onClick={(e) => {
              if (personalInfo.resumeUrl.startsWith('#')) {
                handleNavClick(e, personalInfo.resumeUrl.replace('#', ''));
              }
            }}
            className="mobile-resume-btn"
          >
            <FileText size={15} />
            <span>View Resume</span>
          </a>
        </div>
      </aside>
    </>
  );
};
