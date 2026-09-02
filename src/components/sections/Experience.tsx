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
              May 2026 – Present
            </div>

            {/* Card Content */}
            <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 shadow-sm hover:border-[var(--foreground)]/30 transition-all duration-200">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-3 mb-5 pb-4 border-b border-[var(--border)]/60">
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <h3 className="text-xl font-extrabold text-[var(--foreground)] tracking-tight">
                    Full-Stack Developer (MERN Stack + FastAPI)
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--foreground)] text-[var(--background)] font-bold text-xs shadow-xs tracking-wide">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      Aronix Web Technology
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
                  <span>May 2026 – Present</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed mb-6 text-left">
                <li className="pl-1">
                  <span>Developed and maintained web applications using Next.js, React, TypeScript, Python, and FastAPI.</span>
                </li>
                <li className="pl-1">
                  <span>Built frontend features and integrated them with scalable backend REST APIs.</span>
                </li>
                <li className="pl-1">
                  <span>Delivered and deployed production-ready web applications, resolving issues and optimizing functionality in live environments.</span>
                </li>
              </ul>

              {/* Live Deployed Work */}
              <div className="mb-6 pt-4 border-t border-[var(--border)]/60 text-center sm:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-2.5">
                  Live Deployed Work
                </span>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <a
                    href="https://aarumobility.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius)] text-xs font-medium bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)]/40 transition-colors"
                  >
                    Aaru Mobility{' '}
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a
                    href="https://aaru-care-foundation-fe.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius)] text-xs font-medium bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)]/40 transition-colors"
                  >
                    Aaru Care Foundation{' '}
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Next.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">TypeScript</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">FastAPI</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Python</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">React</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Node.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Production Deployment</span>
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative pl-6 md:pl-10 group">
            {/* Timeline dot */}
            <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--foreground)] border-2 border-[var(--background)] group-hover:scale-125 transition-transform duration-200"></div>
            
            {/* Left Date Label for MD+ */}
            <div className="md:absolute md:-left-36 md:top-1 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 md:mb-0 text-left md:text-right">
              Feb 2026 – Apr 2026
            </div>

            {/* Card Content */}
            <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 shadow-sm hover:border-[var(--foreground)]/30 transition-all duration-200">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-3 mb-5 pb-4 border-b border-[var(--border)]/60">
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <h3 className="text-xl font-extrabold text-[var(--foreground)] tracking-tight">
                    Full-Stack Developer (MERN Stack)
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--foreground)] text-[var(--background)] font-bold text-xs shadow-xs tracking-wide">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      Concept Power
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
                  <span>Feb 2026 – Apr 2026</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed mb-6 text-left">
                <li className="pl-1">
                  <span>Built responsive multi-page web applications using the MERN stack.</span>
                </li>
                <li className="pl-1">
                  <span>Developed scalable e-commerce systems with a strong focus on backend architecture, API development, and data handling.</span>
                </li>
                <li className="pl-1">
                  <span>Built and integrated RESTful APIs with Node.js, Express.js, and MongoDB, utilizing Git/GitHub for version control and live deployments.</span>
                </li>
              </ul>

              {/* Live Deployed Work */}
              <div className="mb-6 pt-4 border-t border-[var(--border)]/60 text-center sm:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-2.5">
                  Live Deployed Work
                </span>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <a
                    href="https://www.conceptpowergroup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius)] text-xs font-medium bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)]/40 transition-colors"
                  >
                    Concept Power Group{' '}
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a
                    href="https://www.conceptpowercrm.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius)] text-xs font-medium bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)]/40 transition-colors"
                  >
                    Concept Power CRM{' '}
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a
                    href="https://conceptpowercrm.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius)] text-xs font-medium bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)]/40 transition-colors"
                  >
                    Concept Power CRM (IN){' '}
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">MERN Stack</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Node.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Express.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">MongoDB</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">REST APIs</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">E-Commerce</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Git</span>
              </div>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="relative pl-6 md:pl-10 group">
            {/* Timeline dot */}
            <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--foreground)] border-2 border-[var(--background)] group-hover:scale-125 transition-transform duration-200"></div>
            
            {/* Left Date Label for MD+ */}
            <div className="md:absolute md:-left-36 md:top-1 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2 md:mb-0 text-left md:text-right">
              Oct 2025 – Jan 2026
            </div>

            {/* Card Content */}
            <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 shadow-sm hover:border-[var(--foreground)]/30 transition-all duration-200">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-3 mb-5 pb-4 border-b border-[var(--border)]/60">
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <h3 className="text-xl font-extrabold text-[var(--foreground)] tracking-tight">
                    Full-Stack Developer Intern (MERN Stack)
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--foreground)] text-[var(--background)] font-bold text-xs shadow-xs tracking-wide">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      VSIT Coding Institute
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
                  <span>Oct 2025 – Jan 2026</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed mb-6 text-left">
                <li className="pl-1">
                  <span>Built responsive web interfaces using React.js, Node.js/Express, and MongoDB.</span>
                </li>
                <li className="pl-1">
                  <span>Customized website layouts and content using React and WordPress to build client-focused applications.</span>
                </li>
                <li className="pl-1">
                  <span>Developed and deployed multiple landing pages ensuring clean UI and smooth user experience.</span>
                </li>
              </ul>

              {/* Live Deployed Work */}
              <div className="mb-6 pt-4 border-t border-[var(--border)]/60 text-center sm:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block mb-2.5">
                  Live Deployed Work
                </span>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <a
                    href="https://pushkardental.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius)] text-xs font-medium bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)]/40 transition-colors"
                  >
                    Pushkar Dental{' '}
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">React.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Node.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Express.js</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">MongoDB</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">WordPress</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">UI/UX Design</span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-[var(--radius)] bg-[var(--background)] text-[var(--muted-foreground)] border border-[var(--border)]">Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
