import React, { useState } from "react";

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"code" | "terminal">("code");
  const [cmdInput, setCmdInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<
    Array<{ type: "input" | "output"; text: string }>
  >([
    { type: "output", text: "Welcome to Abhinav's interactive terminal." },
    { type: "output", text: "Type 'help' or click quick chips below." },
  ]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const newLogs: Array<{ type: "input" | "output"; text: string }> = [
      ...terminalLogs,
      { type: "input", text: `$ ${cmdText}` },
    ];

    switch (trimmed) {
      case "help":
        newLogs.push({
          type: "output",
          text: "Commands: status, skills, contact, bio, clear",
        });
        break;
      case "status":
        newLogs.push({
          type: "output",
          text: "✓ Status: Open to App Development & Mobile Roles 🌿",
        });
        break;
      case "skills":
        newLogs.push({
          type: "output",
          text: "✓ Stack: React Native, React.js, Expo, TypeScript, REST APIs, C++",
        });
        break;
      case "contact":
        newLogs.push({
          type: "output",
          text: "✓ Email: abhinavxdayal@gmail.com | Phone: +91 8318215585",
        });
        break;
      case "bio":
        newLogs.push({
          type: "output",
          text: "✓ App Developer specializing in cross-platform mobile & modern web apps.",
        });
        break;
      case "clear":
        setTerminalLogs([]);
        setCmdInput("");
        return;
      default:
        newLogs.push({
          type: "output",
          text: `Command not found: '${trimmed}'. Type 'help' for options.`,
        });
        break;
    }

    setTerminalLogs(newLogs);
    setCmdInput("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(cmdInput);
  };

  const runCode = () => {
    setActiveTab("terminal");
    setTerminalLogs((prev) => [
      ...prev,
      { type: "input", text: "$ ts-node abhinav.ts" },
      { type: "output", text: "✓ Initialized: Abhinav Dayal (App Developer)" },
      { type: "output", text: "✓ Core: React Native, Expo, React.js" },
      { type: "output", text: "✓ Status: Ready to build & ship 🌿" },
    ]);
  };

  return (
    <section
      id="about"
      className="w-full py-3 md:py-5 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Left Column Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2.5">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            About Me
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
            I'm an{" "}
            <span className="text-[var(--foreground)] font-semibold">
              App Developer
            </span>{" "}
            specializing in cross-platform mobile and web application
            development using React Native, Expo, and React.js.
          </p>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
            I build responsive, component-driven user interfaces and mobile
            screens integrated with{" "}
            <span className="text-[var(--foreground)] font-medium">
              RESTful APIs, Axios, and state management
            </span>
            , delivering hospital management workflows, healthcare platforms,
            and interactive web applications.
          </p>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
            Currently developing production-grade mobile applications at{" "}
            <span className="text-[var(--foreground)] font-semibold underline decoration-zinc-500/30 underline-offset-4">
              Aronix Web Technology
            </span>
            , focusing on reusable architecture, smooth navigation flows, and
            Google Cloud Platform integrations.
          </p>
        </div>

        {/* Right Column: Compact & Dynamic Interactive Console */}
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-lg rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] shadow-xs overflow-hidden font-mono text-xs hover:border-[var(--brand-accent)]/40 transition-all duration-200">
            {/* Window Header with Tabs */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-[var(--accent)]/60 border-b border-[var(--border)]">
              {/* Window Dots & Tabs */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]/80"></span>
                </div>

                <div className="flex items-center gap-1 ml-1">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                      activeTab === "code"
                        ? "bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    <span className="text-[#8B5E3C] mr-1">TS</span> abhinav.ts
                  </button>

                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                      activeTab === "terminal"
                        ? "bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    <span className="text-[#7EA984]">&gt;_</span> terminal
                  </button>
                </div>
              </div>

              {/* Action Button */}
              {activeTab === "code" ? (
                <button
                  onClick={runCode}
                  className="px-2 py-0.5 text-[10px] font-semibold rounded bg-[var(--brand-accent)] text-[#0E1613] hover:bg-[#A3CEB3] transition-colors cursor-pointer flex items-center gap-1"
                  title="Run abhinav.ts in terminal"
                >
                  <span>▶</span> Run
                </button>
              ) : (
                <button
                  onClick={() => executeCommand("clear")}
                  className="text-[10px] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
                >
                  clear
                </button>
              )}
            </div>

            {/* Content Area - Compact Height */}
            <div className="p-3 bg-[#0B1310]/90 text-[11px] leading-tight min-h-[160px] max-h-[190px] overflow-y-auto">
              {activeTab === "code" ? (
                <div className="flex gap-2.5">
                  {/* Line Numbers */}
                  <div className="select-none text-[var(--muted-foreground)]/30 text-right space-y-0.5 font-mono text-[10.5px]">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                  </div>

                  {/* Clean Non-Duplicated Code */}
                  <div className="space-y-0.5 font-mono text-[10.5px]">
                    <div>
                      <span className="text-[#7EA984] font-semibold">const</span>{" "}
                      <span className="text-[var(--foreground)] font-semibold">
                        developer
                      </span>{" "}
                      <span className="text-[var(--muted-foreground)]">=</span>{" "}
                      <span className="text-[#91A89B]">{"{"}</span>
                    </div>
                    <div className="pl-3">
                      <span className="text-[#A3CEB3]">name:</span>{" "}
                      <span className="text-[#EAF1EC]">"Abhinav Dayal"</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-[#A3CEB3]">role:</span>{" "}
                      <span className="text-[#EAF1EC]">"App Developer"</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-[#A3CEB3]">mobile:</span>{" "}
                      <span className="text-[#91A89B]">[</span>
                      <span className="text-[#EAF1EC]">"React Native"</span>,{" "}
                      <span className="text-[#EAF1EC]">"Expo"</span>
                      <span className="text-[#91A89B]">]</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-[#A3CEB3]">web:</span>{" "}
                      <span className="text-[#91A89B]">[</span>
                      <span className="text-[#EAF1EC]">"React.js"</span>,{" "}
                      <span className="text-[#EAF1EC]">"TypeScript"</span>
                      <span className="text-[#91A89B]">]</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-[#A3CEB3]">status:</span>{" "}
                      <span className="text-[#7EA984]">"Ready to ship 🌿"</span>
                    </div>
                    <div>
                      <span className="text-[#91A89B]">{"}"}</span>;
                      <span className="inline-block w-1.5 h-3 ml-1 bg-[#7EA984] animate-pulse align-middle"></span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5 font-mono text-[11px]">
                  {terminalLogs.map((log, i) => (
                    <div
                      key={i}
                      className={
                        log.type === "input"
                          ? "text-[var(--foreground)] font-semibold"
                          : "text-[var(--muted-foreground)]"
                      }
                    >
                      {log.text}
                    </div>
                  ))}

                  {/* Interactive Input Form */}
                  <form onSubmit={handleFormSubmit} className="flex items-center gap-1 pt-1">
                    <span className="text-[#7EA984] font-semibold">$</span>
                    <input
                      type="text"
                      value={cmdInput}
                      onChange={(e) => setCmdInput(e.target.value)}
                      placeholder="try: status, skills, contact..."
                      className="flex-1 bg-transparent text-[var(--foreground)] text-[11px] focus:outline-none placeholder-[var(--muted-foreground)]/40"
                    />
                  </form>
                </div>
              )}
            </div>

            {/* Quick Interactive Chips in Terminal Tab */}
            {activeTab === "terminal" && (
              <div className="px-3 py-1.5 bg-[var(--card)]/90 border-t border-[var(--border)] flex items-center gap-1.5 overflow-x-auto text-[10px]">
                <span className="text-[var(--muted-foreground)]/70 text-[9px] uppercase">Quick:</span>
                {["status", "skills", "contact", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-1.5 py-0.5 rounded bg-[var(--accent)] text-[var(--foreground)] hover:border-[var(--brand-accent)] border border-[var(--border)] transition-colors cursor-pointer"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
