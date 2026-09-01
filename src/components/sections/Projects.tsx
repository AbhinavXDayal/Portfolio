import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';
import { ProjectMockup } from '../ui/ProjectMockup';
import { projects } from '../../data/projects';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects" aria-label="Selected Work">
      <div className="container">
        <SectionHeading
          number="04"
          title="SELECTED WORK"
        />

        <div className="projects-v4-showcase">
          {projects.map((project, index) => {
            const isReverse = index % 2 === 1;

            return (
              <article
                key={project.id}
                className={`project-v4-item ${isReverse ? 'layout-reverse' : ''}`}
              >
                {/* Visual Area */}
                <div className="project-v4-visual-col">
                  <div className="project-v4-frame">
                    <ProjectMockup
                      type={project.mockupType}
                      projectKey={project.mockupKey}
                      title={project.title}
                    />
                  </div>
                </div>

                {/* Details Area */}
                <div className="project-v4-details-col">
                  <div className="project-v4-meta-row">
                    <span className="project-v4-num mono">PROJECT {project.number}</span>
                    <span className="project-v4-type mono">
                      {project.mockupType === 'mobile' ? 'MOBILE APP' : 'WEB APPLICATION'}
                    </span>
                  </div>

                  <h3 className="project-v4-title">
                    <span>{project.title}</span>
                    {project.liveUrl && (
                      <ArrowUpRight size={18} className="project-v4-arrow" aria-hidden="true" />
                    )}
                  </h3>

                  <p className="project-v4-subtitle mono">{project.subtitle}</p>

                  <p className="project-v4-desc">{project.description}</p>

                  <div className="project-v4-tags">
                    {project.technologies.map((tech) => (
                      <Tag key={tech} label={tech} variant="subtle" size="sm" />
                    ))}
                  </div>

                  <div className="project-v4-actions">
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.liveUrl}
                        isExternal
                        icon={<ExternalLink size={13} />}
                      >
                        Live Demo
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        href={project.githubUrl}
                        isExternal
                        icon={<Github size={13} />}
                      >
                        Source Code
                      </Button>
                    )}

                    {!project.liveUrl && !project.githubUrl && (
                      <span className="project-v4-note mono">
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
