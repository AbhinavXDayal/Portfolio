import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--muted-foreground)] mb-2">
            Career &amp; Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l border-[var(--border)] ml-3 md:ml-32 space-y-12">
          {/* Experience 1 */}
          <div className="relative pl-6 md:pl-10 group">
            {/* Timeline dot */}
            <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--foreground)] border-2 border-[var(--background)] group-hover:scale-125 transition-transform duration-200"></div>
            
            {/* Left Date Label for MD+ */}
            <div className="md:absolute md:-left-36 md:top-1 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 md:mb-0 text-left md:text-right">
              Jul 2026 – Present
            </div>

            {/* Card Content */}
            <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 shadow-sm hover:border-[var(--foreground)]/30 transition-all duration-200">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-3 mb-5 pb-4 border-b border-[var(--border)]/60">
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <h3 className="text-xl font-extrabold text-[var(--foreground)] tracking-tight">
                    App Developer
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--foreground)] text-[var(--background)] font-bold text-xs shadow-xs tracking-wide">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      Aronix Web Technology • Delhi, India
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] text-xs font-bold self-center sm:self-auto shadow-2xs">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs text-[var(--muted-foreground)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Jul 2026 – Present</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed mb-6 text-left">
                <li className="pl-1">
                  <span>Developing cross platform mobile applications using React Native, JavaScript &amp; TypeScript with reusable components &amp; component based architecture.</span>
                </li>
                <li className="pl-1">
                  <span>Building responsive and reusable UI components, screens &amp; navigation flows while integrating RESTful APIs for a hospital management application.</span>
                </li>
                <li className="pl-1">
                  <span>Collaborating in the software development lifecycle to implement features, debug issues, optimize application performance &amp; maintain code quality using Git &amp; version control workflows.</span>
                </li>
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">React Native</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">JavaScript</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">TypeScript</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">RESTful APIs</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Hospital Management</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Git</span>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative pl-6 md:pl-10 group">
            {/* Timeline dot */}
            <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--foreground)] border-2 border-[var(--background)] group-hover:scale-125 transition-transform duration-200"></div>
            
            {/* Left Date Label for MD+ */}
            <div className="md:absolute md:-left-36 md:top-1 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 md:mb-0 text-left md:text-right">
              Dec 2024 – Feb 2025
            </div>

            {/* Card Content */}
            <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 shadow-sm hover:border-[var(--foreground)]/30 transition-all duration-200">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-3 mb-5 pb-4 border-b border-[var(--border)]/60">
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <h3 className="text-xl font-extrabold text-[var(--foreground)] tracking-tight">
                    Web Developer Trainee
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--foreground)] text-[var(--background)] font-bold text-xs shadow-xs tracking-wide">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      PCS Management Consultancy • Lucknow, India
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] text-xs font-bold self-center sm:self-auto shadow-2xs">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs text-[var(--muted-foreground)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Dec 2024 – Feb 2025</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed mb-6 text-left">
                <li className="pl-1">
                  <span>Built &amp; styled responsive web interfaces &amp; internal dashboards using React.js, HTML5 &amp; CSS3 with a focus on usability &amp; cross device compatibility.</span>
                </li>
                <li className="pl-1">
                  <span>Identified, debugged &amp; resolved UI/UX issues across multiple pages, improving visual consistency, responsiveness &amp; user experience.</span>
                </li>
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">React.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">HTML5</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">CSS3</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">UI/UX Design</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Web Dashboards</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Cross Device Compatibility</span>
              </div>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="relative pl-6 md:pl-10 group">
            {/* Timeline dot */}
            <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--foreground)] border-2 border-[var(--background)] group-hover:scale-125 transition-transform duration-200"></div>
            
            {/* Left Date Label for MD+ */}
            <div className="md:absolute md:-left-36 md:top-1 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 md:mb-0 text-left md:text-right">
              Jul 2024 – Aug 2024
            </div>

            {/* Card Content */}
            <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 shadow-sm hover:border-[var(--foreground)]/30 transition-all duration-200">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-3 mb-5 pb-4 border-b border-[var(--border)]/60">
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <h3 className="text-xl font-extrabold text-[var(--foreground)] tracking-tight">
                    Summer Training Intern
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--foreground)] text-[var(--background)] font-bold text-xs shadow-xs tracking-wide">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      EICT Academy, IIT Kanpur • Lucknow, India
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] text-xs font-bold self-center sm:self-auto shadow-2xs">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs text-[var(--muted-foreground)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Jul 2024 – Aug 2024</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed mb-6 text-left">
                <li className="pl-1">
                  <span>Developed responsive web applications using JavaScript &amp; React.js with reusable components &amp; component based architecture.</span>
                </li>
                <li className="pl-1">
                  <span>Practiced database design, data management &amp; application development concepts through guided exercises &amp; hands on mock projects.</span>
                </li>
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">JavaScript</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">React.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Database Design</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Component Architecture</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Web Applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
