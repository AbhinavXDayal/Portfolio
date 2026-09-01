import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectMockup } from '../ui/ProjectMockup';
import { projects } from '../../data/projects';
import { ArrowUpRight, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section className="projects-section-root" id="projects" aria-label="Selected Work">
      <div className="container">
        <SectionHeader number="04" title="SELECTED WORK" />

        <div className="projects-editorial-showcase">
          {projects.map((project, index) => {
            const isReverse = index % 2 === 1;

            return (
              <article
                key={project.id}
                className={`project-showcase-row ${isReverse ? 'is-reversed' : ''}`}
              >
                {/* Visual Mockup Side */}
                <div className="project-mockup-side">
                  <div className="project-mockup-frame">
                    <ProjectMockup
                      type={project.mockupType}
                      projectKey={project.mockupKey}
                      title={project.title}
                    />
                  </div>
                </div>

                {/* Details Side */}
                <div className="project-info-side">
                  <div className="project-index-line mono">
                    <span>PROJECT {project.number}</span>
                    <span className="dot-sep">•</span>
                    <span>{project.mockupType === 'mobile' ? 'MOBILE APP' : 'WEB PLATFORM'}</span>
                  </div>

                  <h3 className="project-headline-title">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-title-link"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight size={20} className="title-arrow" aria-hidden="true" />
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </h3>

                  <p className="project-subtitle-text mono">{project.subtitle}</p>

                  <p className="project-summary-copy">{project.description}</p>

                  {/* Clean Inline Tech Stack */}
                  <div className="project-stack-tags mono">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag-item">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions (Verified Links Only) */}
                  <div className="project-links-group">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn primary"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn secondary"
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>
                    )}

                    {!project.liveUrl && !project.githubUrl && (
                      <span className="project-production-tag mono">
                        Production Architecture & Mobile Integration
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
