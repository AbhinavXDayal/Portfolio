import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo, socialLinks } from '../../data/social';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="contact-section-root" id="contact" aria-label="Contact">
      <div className="container">
        <SectionHeader number="06" title="CONTACT" />

        <div className="contact-editorial-layout">
          <div className="contact-statement-wrap">
            <h3 className="contact-main-heading">
              Let's build something thoughtful together.
            </h3>

            <p className="contact-supporting-copy">
              Whether you are architecting a cross-platform mobile application, developing modern React interfaces, or looking to expand your engineering team, my inbox is open.
            </p>

            {/* Email Box & Direct Mailto */}
            <div className="contact-email-action-bar">
              <div className="email-address-wrapper">
                <span className="email-text mono">{personalInfo.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="email-copy-action mono"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-cta-button"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Clean Social Links Row */}
            <div className="contact-social-channels mono">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  className="social-channel-link"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={13} className="channel-arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
