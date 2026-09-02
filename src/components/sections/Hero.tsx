import React from 'react';
import { ArrowDownRight, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { StatusIndicator } from '../ui/StatusIndicator';
import { personalInfo } from '../../data/social';
import { scrollToSection } from '../../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero" aria-label="Hero Section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Status & Tech Pill */}
          <div className="hero-meta-strip animate-fade-in">
            <StatusIndicator statusText={personalInfo.status} />
            <span className="hero-tech-mono mono">
              React Native <span className="text-accent">•</span> React.js <span className="text-accent">•</span> TypeScript
            </span>
          </div>

          {/* Large Clean Typography */}
          <div className="hero-headline-block animate-fade-in-up">
            <h1 className="hero-name">
              <span>ABHINAV DAYAL</span>
            </h1>
            <div className="hero-subline-row">
              <span className="hero-role-tag mono">APP DEVELOPER</span>
              <span className="hero-location-text mono">Delhi / Lucknow, India</span>
            </div>
          </div>

          {/* Supporting Intro Line */}
          <p className="hero-intro-text animate-fade-in-up">
            {personalInfo.tagline}
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons-row animate-fade-in-up">
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollToSection('projects')}
              icon={<ArrowDownRight size={15} />}
            >
              View Work
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={() => scrollToSection('contact')}
              icon={<Mail size={15} />}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
