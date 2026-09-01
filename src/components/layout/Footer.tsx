import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/social';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-v4" role="contentinfo">
      <div className="container footer-v4-container">
        <div className="footer-v4-left">
          <span className="footer-v4-name">{personalInfo.name}</span>
          <span className="footer-v4-sep mono">/</span>
          <span className="footer-v4-role mono">{personalInfo.role}</span>
          <span className="footer-v4-sep mono">/</span>
          <span className="footer-v4-copy mono">© {currentYear}</span>
        </div>

        <div className="footer-v4-right">
          <div className="footer-v4-socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="footer-v4-link mono"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="footer-v4-top-btn mono"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
};
