import React, { useState } from 'react';
import { personalInfo, socialLinks } from '../../data/social';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="editorial-section" id="contact" aria-label="Contact">
      <h2 className="section-title mono">Contact</h2>

      <div className="contact-block">
        <p className="contact-statement">
          Have a project in mind, an engineering role, or just want to connect? My inbox is always open.
        </p>

        <div className="contact-direct-row">
          <a
            href={`mailto:${personalInfo.email}`}
            className="contact-email-link"
          >
            {personalInfo.email}
          </a>
          <button
            onClick={handleCopyEmail}
            className="copy-btn mono"
            aria-label="Copy email address"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>

        <div className="contact-links-grid mono">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="social-row-link"
            >
              <span className="link-label">{link.label}</span>
              <span className="link-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
