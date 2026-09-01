import React from 'react';
import { projects } from '../../data/projects';
import { ProjectMockup } from '../ui/ProjectMockup';

export const Projects: React.FC = () => {
  return (
    <section className="editorial-section" id="projects" aria-label="Selected Projects">
      <h2 className="section-title mono">Projects</h2>

      <div className="projects-showcase">
        {projects.map((project) => (
          <article key={project.id} className="project-entry">
            {/* Visual Frame */}
            <div className="project-visual-frame">
              <ProjectMockup
                type={project.mockupType}
                projectKey={project.mockupKey}
                title={project.title}
              />
            </div>

            {/* Project Information */}
            <div className="project-info">
              <div className="project-header-row">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-type mono">
                  {project.mockupType === 'mobile' ? 'Mobile App' : 'Web Application'}
                </span>
              </div>

              <p className="project-subtitle mono">{project.subtitle}</p>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech-row mono">
                <span className="tech-label">Tech:</span>
                <span className="tech-values">{project.technologies.join(' • ')}</span>
              </div>

              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-action-link"
                  >
                    Live Application ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-action-link"
                  >
                    Source Code ↗
                  </a>
                )}
                {!project.liveUrl && !project.githubUrl && (
                  <span className="project-case-label mono">
                    Hospital Management Client Workflow
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
