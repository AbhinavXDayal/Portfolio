import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 bg-transparent text-[var(--foreground)] border-t border-[var(--border)]/50"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-[var(--foreground)]">
            About Me
          </h2>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            I'm an <span className="text-[var(--foreground)] font-semibold">App Developer</span> specializing in cross-platform mobile and web application development using React Native, Expo, and React.js.
          </p>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            I build responsive, component-driven user interfaces and mobile screens integrated with <span className="text-[var(--foreground)] font-medium">RESTful APIs, Axios, and state management</span>, delivering hospital management workflows, healthcare platforms, and interactive web applications.
          </p>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Currently developing production-grade mobile applications at <span className="text-[var(--foreground)] font-semibold underline decoration-zinc-500/30 underline-offset-4">Aronix Web Technology</span>, focusing on reusable architecture, smooth navigation flows, and Google Cloud Platform integrations.
          </p>
        </div>

        {/* Right Column Terminal Window */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-lg rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] shadow-xl overflow-hidden font-mono text-sm group hover:border-[var(--foreground)]/30 transition-all duration-500 relative">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[var(--accent)]/50 border-b border-[var(--border)] text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] font-medium text-xs shadow-xs">
                <span className="text-sky-500 font-bold">TS</span> abhinav.ts
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)] font-sans">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                UTF-8
              </div>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-6 overflow-x-auto leading-relaxed text-xs sm:text-sm">
              <div className="flex gap-4">
                {/* Line Numbers */}
                <div className="select-none text-[var(--muted-foreground)]/40 text-right space-y-1 font-mono text-xs">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                </div>

                {/* Code Content */}
                <div className="space-y-1 font-mono">
                  <div>
                    <span className="text-indigo-500 dark:text-indigo-400 font-semibold">const</span>{' '}
                    <span className="text-[var(--foreground)] font-semibold">developer</span>{' '}
                    <span className="text-[var(--muted-foreground)]">=</span>{' '}
                    <span className="text-amber-500 dark:text-amber-400">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">name:</span>{' '}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">"Abhinav Dayal"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">role:</span>{' '}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">"App Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">mobile:</span>{' '}
                    <span className="text-amber-500 dark:text-amber-400">[</span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">"React Native"</span>,{' '}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">"Expo"</span>
                    <span className="text-amber-500 dark:text-amber-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">frontend:</span>{' '}
                    <span className="text-amber-500 dark:text-amber-400">[</span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">"React.js"</span>,{' '}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">"TypeScript"</span>
                    <span className="text-amber-500 dark:text-amber-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">tools:</span>{' '}
                    <span className="text-amber-500 dark:text-amber-400">[</span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">"GCP"</span>,{' '}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">"REST APIs"</span>
                    <span className="text-amber-500 dark:text-amber-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-500 dark:text-sky-400 font-medium">focus:</span>{' '}
                    <span className="text-emerald-500 dark:text-emerald-400 font-medium">"Cross-Platform Mobile Apps"</span>
                  </div>
                  <div>
                    <span className="text-amber-500 dark:text-amber-400">{'}'}</span>;
                    <span className="inline-block w-2 h-4 ml-1.5 bg-indigo-500 dark:bg-indigo-400 animate-pulse align-middle"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
