import React from 'react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Swastrix Healthcare',
      category: 'Cross-Platform Mobile Application',
      description:
        'Developed a cross-platform healthcare application using React Native & Expo, building reusable components, responsive mobile interfaces for healthcare workflows, and Axios REST API integrations.',
      image: '/projects/swastrix.jpg',
      github: 'https://github.com/AbhinavXDayal',
      live: 'https://github.com/AbhinavXDayal',
      liveLabel: 'View Project',
      tags: ['React Native', 'Expo', 'JavaScript', 'TypeScript', 'Axios', 'REST APIs'],
    },
    {
      title: 'Movie Watchlist',
      category: 'Single Page Web Application',
      description:
        'Developed a responsive single page movie app using React.js, integrating the OMDb REST API with dynamic Watchlist & Watched state management via localStorage.',
      image: '/projects/watchlist.jpg',
      github: 'https://github.com/AbhinavXDayal/movie-watchlist',
      live: 'https://abhinav-moviewatchlist.vercel.app',
      liveLabel: 'Live Demo',
      tags: ['React.js', 'OMDb API', 'Axios', 'React Router', 'localStorage', 'CSS3'],
    },
    {
      title: 'Chef Claude',
      category: 'AI-Powered Web Application',
      description:
        "Developed an AI powered recipe generator using React.js & Hugging Face's Mixtral 8x7B model, dynamic user input handling, Markdown rendering, and responsive Tailwind CSS.",
      image: '/projects/chefclaude.jpg',
      github: 'https://github.com/AbhinavXDayal/chef-claude',
      live: 'https://abhinav-chefclaude.vercel.app',
      liveLabel: 'Live Demo',
      tags: ['React.js', 'Generative AI', 'Hugging Face', 'Mixtral 8x7B', 'Tailwind CSS', 'Markdown'],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 flex flex-col justify-between hover:border-[var(--foreground)]/40 transition-all duration-300 shadow-sm group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)]">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                      aria-label="Live Demo Link"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Project Image with Interactive Hover Overlay */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full h-44 sm:h-48 rounded-lg overflow-hidden mb-4 border border-[var(--border)] group/image cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                  />
                  {/* Subtle live indicator badge */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-xs border border-white/10 text-[11px] font-semibold text-white flex items-center gap-1.5 z-10 transition-opacity duration-200 group-hover/image:opacity-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live
                  </div>
                  {/* Hover Overlay with Live Button */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white text-zinc-950 text-xs font-bold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover/image:translate-y-0 transition-transform duration-300">
                      Live Demo{' '}
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-xs"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </span>
                  </div>
                </a>

                {/* Category & Title */}
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-1.5 text-center sm:text-left">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2.5 text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors text-center sm:text-left">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed text-center sm:text-left">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags (no live demo button below) */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-4 border-t border-[var(--border)]/60">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
