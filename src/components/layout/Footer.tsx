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
    <footer className="footer-root" role="contentinfo">
      <div className="container footer-container-inner">
        <div className="footer-identity-meta">
          <span className="footer-author-name">{personalInfo.name}</span>
          <span className="footer-meta-dot mono">/</span>
          <span className="footer-role-label mono">{personalInfo.role}</span>
          <span className="footer-meta-dot mono">/</span>
          <span className="footer-copyright mono">© {currentYear}</span>
        </div>

        <div className="footer-actions-meta">
          <div className="footer-social-inline">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="footer-social-anchor mono"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top mono"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
