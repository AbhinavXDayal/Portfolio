import React from 'react';

export const Projects: React.FC = () => {
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
          {/* Project 1: Swastrix Healthcare */}
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 flex flex-col justify-between hover:border-[var(--foreground)]/40 transition-all duration-300 shadow-sm group relative">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-lg bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)]">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/AbhinavXDayal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/AbhinavXDayal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    aria-label="Live Demo Link"
                  >
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-2 text-center sm:text-left">
                Cross-Platform Mobile Application
              </span>
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors text-center sm:text-left">
                Swastrix Healthcare
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed text-center sm:text-left">
                Developed a cross-platform healthcare application using React Native &amp; Expo, building reusable components, responsive mobile interfaces for healthcare workflows, and Axios REST API integrations.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6 pt-4 border-t border-[var(--border)]/60">
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">React Native</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Expo</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">JavaScript</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">TypeScript</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Axios</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">REST APIs</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://github.com/AbhinavXDayal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-xs inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xs"
                >
                  View Project{' '}
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Movie Watchlist */}
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 flex flex-col justify-between hover:border-[var(--foreground)]/40 transition-all duration-300 shadow-sm group relative">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-lg bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)]">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/AbhinavXDayal/movie-watchlist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="https://abhinav-moviewatchlist.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    aria-label="Live Demo Link"
                  >
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-2 text-center sm:text-left">
                Single Page Web Application
              </span>
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors text-center sm:text-left">
                Movie Watchlist
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed text-center sm:text-left">
                Developed a responsive single page movie app using React.js, integrating the OMDb REST API with dynamic Watchlist &amp; Watched state management via localStorage.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6 pt-4 border-t border-[var(--border)]/60">
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">React.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">OMDb API</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Axios</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">React Router</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">localStorage</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">CSS3</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://abhinav-moviewatchlist.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-xs inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xs"
                >
                  Live Demo{' '}
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Chef Claude */}
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 flex flex-col justify-between hover:border-[var(--foreground)]/40 transition-all duration-300 shadow-sm group relative">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-lg bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)]">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/AbhinavXDayal/chef-claude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="https://abhinav-chefclaude.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    aria-label="Live Demo Link"
                  >
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-2 text-center sm:text-left">
                AI-Powered Web Application
              </span>
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors text-center sm:text-left">
                Chef Claude
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed text-center sm:text-left">
                Developed an AI powered recipe generator using React.js &amp; Hugging Face's Mixtral 8x7B model, dynamic user input handling, Markdown rendering, and responsive Tailwind CSS.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6 pt-4 border-t border-[var(--border)]/60">
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">React.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Generative AI</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Hugging Face</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Mixtral 8x7B</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Tailwind CSS</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Markdown</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://abhinav-chefclaude.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-xs inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xs"
                >
                  Live Demo{' '}
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
