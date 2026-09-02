import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { personalInfo, socialLinks } from '../../data/social';
import { ArrowRight, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact">
      <div className="container">
        <SectionHeading
          number="06"
          title="CONTACT ME"
        />

        <div className="contact-v4-card">
          <div className="contact-v4-main">
            <h3 className="contact-v4-headline">
              LET'S BUILD SOMETHING.
            </h3>

            <p className="contact-v4-subtext">
              Have a project or engineering role in mind? My inbox is open for high-impact mobile and web opportunities.
            </p>

            {/* Quick Email & CTA Row */}
            <div className="contact-v4-action-bar">
              <div className="contact-v4-email-box">
                <span className="contact-v4-email-str mono">{personalInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="contact-v4-copy-btn mono"
                  title="Copy email address"
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

              <Button
                variant="primary"
                size="md"
                href={`mailto:${personalInfo.email}`}
                icon={<ArrowRight size={15} />}
              >
                Let's Talk
              </Button>
            </div>

            {/* Clean Horizontal Social Links Row */}
            <div className="contact-v4-social-row">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  className="contact-v4-social-link mono"
                >
                  <span>{link.label}</span>
                  <span className="social-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
