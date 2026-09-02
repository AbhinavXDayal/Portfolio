import React from "react";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full py-4 md:py-6 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Left Column Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            About Me
          </h2>
          <p className="text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
            I'm an{" "}
            <span className="text-[var(--foreground)] font-semibold">
              App Developer
            </span>{" "}
            specializing in cross-platform mobile and web application development using React Native, Expo, and React.js.
          </p>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            I build responsive, component-driven user interfaces with modern styling frameworks like Tailwind CSS, Axios, and RESTful API integrations, delivering fast interaction and state consistency across Android, iOS, and desktop web applications.
          </p>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Currently contributed production mobile and web code as an app developer at{" "}
            <span className="text-[var(--foreground)] font-semibold">
              Aronix Web Technology
            </span>
            , focusing on scalable modules, reusable navigation structures, and hands-on Google Cloud Platform cloud run integrations.
          </p>
        </div>

        {/* Right Column Interactive Code Terminal */}
        <div className="w-full">
          <div className="relative rounded-[var(--radius)] overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-xs">
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-[var(--muted)]/50 border-b border-[var(--border)] text-xs">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90"></div>
              </div>
              <div className="px-2.5 py-0.5 rounded bg-[var(--accent)] text-[var(--foreground)] font-mono text-[11px] font-medium border border-[var(--border)]/50">
                <span className="text-[#8B5E3C] font-bold">TS</span> abhinav.ts
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] animate-pulse"></span>
                <span className="text-[10px] text-[var(--muted-foreground)] font-mono">
                  UTF-8
                </span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-3.5 sm:p-4 overflow-x-auto leading-relaxed text-xs">
              <div className="flex gap-3">
                {/* Line Numbers */}
                <div className="select-none text-[var(--muted-foreground)]/40 text-right space-y-0.5 font-mono text-xs">
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
                <div className="space-y-0.5 font-mono">
                  <div>
                    <span className="text-[#8B5E3C] font-semibold">const</span>{" "}
                    <span className="text-[var(--foreground)] font-semibold">
                      developer
                    </span>{" "}
                    <span className="text-[var(--muted-foreground)]">=</span>{" "}
                    <span className="text-[#8C7A6B]">{"{"}</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-[#5C5042] font-medium">name:</span>{" "}
                    <span className="text-[#2D6A4F] font-medium">
                      "Abhinav Dayal"
                    </span>
                    ,
                  </div>
                  <div className="pl-3">
                    <span className="text-[#5C5042] font-medium">role:</span>{" "}
                    <span className="text-[#2D6A4F] font-medium">
                      "App Developer"
                    </span>
                    ,
                  </div>
                  <div className="pl-3">
                    <span className="text-[#5C5042] font-medium">mobile:</span>{" "}
                    <span className="text-[#8C7A6B]">[</span>
                    <span className="text-[#2D6A4F] font-medium">
                      "React Native"
                    </span>
                    , <span className="text-[#2D6A4F] font-medium">"Expo"</span>
                    <span className="text-[#8C7A6B]">]</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-[#5C5042] font-medium">frontend:</span>{" "}
                    <span className="text-[#8C7A6B]">[</span>
                    <span className="text-[#2D6A4F] font-medium">
                      "React.js"
                    </span>
                    ,{" "}
                    <span className="text-[#2D6A4F] font-medium">
                      "TypeScript"
                    </span>
                    <span className="text-[#8C7A6B]">]</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-[#5C5042] font-medium">tools:</span>{" "}
                    <span className="text-[#8C7A6B]">[</span>
                    <span className="text-[#2D6A4F] font-medium">
                      "GCP"
                    </span>,{" "}
                    <span className="text-[#2D6A4F] font-medium">
                      "REST APIs"
                    </span>
                    <span className="text-[#8C7A6B]">]</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-[#5C5042] font-medium">focus:</span>{" "}
                    <span className="text-[#2D6A4F] font-medium">
                      "Cross-Platform Mobile Apps"
                    </span>
                  </div>
                  <div>
                    <span className="text-[#8C7A6B]">{"}"}</span>;
                    <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#8B5E3C] animate-pulse align-middle"></span>
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
