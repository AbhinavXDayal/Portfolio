import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Technical Proficiency
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mobile & App Development */}
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-[var(--brand-accent)]/40 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)] text-center md:text-left">
                Mobile &amp; App Development
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed text-center md:text-left">
                Cross-platform mobile applications, component architecture, and native tooling.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* React Native */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="2.5" fill="currentColor"></circle>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5"></ellipse>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"></ellipse>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"></ellipse>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">React Native</span>
                </div>

                {/* Expo */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-10-5v10l10 5 10-5V6l-10 5z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">Expo</span>
                </div>

                {/* React Native CLI */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">RN CLI</span>
                </div>

                {/* State Management */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2A10 10 0 1022 12 10 10 0 0012 2zm0 3a7 7 0 110 14 7 7 0 010-14zm0 3a4 4 0 100 8 4 4 0 000-8z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">State Mgmt</span>
                </div>

                {/* C++ */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7 3.5v7.4l-7 3.5-7-3.5V8.3l7-3.5z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">C++</span>
                </div>

                {/* Mobile UI */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="3"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">Mobile UI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend & Web */}
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-[var(--brand-accent)]/40 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)] text-center md:text-left">
                Frontend &amp; Web
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed text-center md:text-left">
                Modern user interfaces and responsive web applications built with React.js.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* React.js */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="2.5" fill="currentColor"></circle>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5"></ellipse>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"></ellipse>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"></ellipse>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">React.js</span>
                </div>

                {/* JavaScript */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm11.5 13.2a2.4 2.4 0 001.9-.9l1.4 1a4 4 0 01-3.3 1.6c-2.4 0-3.8-1.4-3.8-3.6v-3.7h1.9v3.7c0 .9.5 1.4 1.4 1.4zm-4.7-.9a1.9 1.9 0 00-1.6.8l-1.4-1a3.5 3.5 0 013-1.5c1.8 0 3.2 1.1 3.2 3v3.7h-1.9v-3.7c0-.8-.5-1.3-1.3-1.3z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">JavaScript</span>
                </div>

                {/* TypeScript */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm10.5 7.5h-2.25v6h-1.5v-6H7.5V9h6v1.5zm5.25 1.5a2.25 2.25 0 00-2.25-2.25h-2.25V18h1.5v-2.25h.75l1.5 2.25h1.8l-1.8-2.55a2.25 2.25 0 001.35-1.95z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">TypeScript</span>
                </div>

                {/* Tailwind CSS */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 6c-3.3 0-5.3 1.6-6 4.9 1.3-1.6 2.8-2.2 4.5-1.7 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.8 6.5 2.8 3.3 0 5.3-1.6 6-4.9-1.3 1.6-2.8 2.2-4.5 1.7-1-.3-1.7-1-2.5-1.8C17.2 7.6 15.7 6 12 6zM6 13.9c-3.3 0-5.3 1.6-6 4.9 1.3-1.6 2.8-2.2 4.5-1.7 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.8 6.5 2.8 3.3 0 5.3-1.6 6-4.9-1.3 1.6-2.8 2.2-4.5 1.7-1-.3-1.7-1-2.5-1.8-1.3-1.3-2.8-2.9-6.5-2.9z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">Tailwind CSS</span>
                </div>

                {/* HTML5 */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3zm14.4 5.3H8.3l.3 3.2h8.5l-.7 7.7-4.5 1.2-4.5-1.2-.3-3.3h2.6l.2 1.6 2 .5 2-.5.2-2.4H6.9L6 4.3h11.7l-.3 3z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">HTML5</span>
                </div>

                {/* CSS3 */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3zm14.3 8.5H8.6l.3 3.2h8.1l-.7 7.7-4.3 1.2-4.3-1.2-.3-3.3h2.6l.2 1.6 1.8.5 1.8-.5.2-2.4H6.7L6 4.3h11.6l-.3 3.2z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">CSS3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Web & Architecture */}
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-[var(--brand-accent)]/40 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)] text-center md:text-left">
                Web &amp; Architecture
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed text-center md:text-left">
                API integration, asynchronous data flow, and modern web architecture.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* REST APIs */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">REST APIs</span>
                </div>

                {/* API Integration */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm7.5 13.6L12 19.8l-7.5-4.2V8.4L12 4.2l7.5 4.2v7.2z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">API Integration</span>
                </div>

                {/* Axios */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5l-4-5h3V6.5l4 5h-3v5z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">Axios</span>
                </div>

                {/* React Router */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zm10-5h-3v10h3a5 5 0 000-10zm-1.5 2.5h1.5a2.5 2.5 0 010 5h-1.5v-5z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">React Router</span>
                </div>

                {/* Responsive Design */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">Responsive UI</span>
                </div>

                {/* Component Architecture */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7 3.5v7.4l-7 3.5-7-3.5V8.3l7-3.5z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-[var(--brand-accent)]/40 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)] text-center md:text-left">
                Tools &amp; Platforms
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed text-center md:text-left">
                Version control workflows, cloud infrastructure, and developer tooling.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* Git */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.6 10.9L13.1 2.4a1.7 1.7 0 00-2.4 0L8.4 4.7l3 3a2 2 0 012.3 2.3l3 3a2 2 0 11-1.2 1.2l-2.7-2.7v4.6a2 2 0 11-1.7 0V11a2 2 0 011-1.7L9.5 6.7 2.4 13.8a1.7 1.7 0 000 2.4l8.5 8.5a1.7 1.7 0 002.4 0l8.3-8.3a1.7 1.7 0 000-2.4z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">Git</span>
                </div>

                {/* GitHub */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">GitHub</span>
                </div>

                {/* Google Cloud Platform */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">GCP</span>
                </div>

                {/* VS Code */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5 2.5l-9.3 8.7L3.5 7.5 1 9v6l2.5 1.5 4.7-3.7 9.3 8.7L23 19.5v-15l-5.5-2z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">VS Code</span>
                </div>

                {/* Vercel */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L24 22H0L12 2z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">Vercel</span>
                </div>

                {/* npm */}
                <div className="group relative p-3 rounded-[var(--radius)] bg-[var(--accent)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 hover:bg-[var(--background)] transition-all duration-200 flex items-center gap-2.5">
                  <span className="text-[var(--foreground)] group-hover:scale-110 group-hover:text-[var(--brand-accent)] transition-all duration-200 flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1 7v10h22V7H1zm18 8h-3V9h3v6zm-5 0h-3V9h3v6zm-5 0H6V9h3v6z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[var(--foreground)] truncate">npm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
