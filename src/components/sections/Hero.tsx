import React from "react";

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="w-full flex items-center justify-center relative bg-transparent text-[var(--foreground)] overflow-hidden pt-1 pb-2 sm:pt-2 sm:pb-3"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-8">
        {/* Left Column Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-xs sm:text-sm font-medium text-[var(--brand-accent)] mb-0.5 inline-flex items-center gap-1.5">
            <span>🌿</span> Hi, I'm
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 text-[var(--foreground)]">
            Abhinav Dayal
          </h1>

          {/* Action Buttons & Social Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] font-medium">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className="bg-[var(--primary)] text-[var(--primary-foreground)] font-bold px-3.5 py-1.5 rounded-full text-xs hover:opacity-90 transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
            >
              Contact Me{" "}
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
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>

            <a
              href="https://github.com/AbhinavXDayal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-2xs"
            >
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
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhinavxdayal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-2xs"
            >
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://abhinavxportfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-2xs"
            >
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
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Portfolio
            </a>
            <a
              href="mailto:abhinavxdayal@gmail.com"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--background)]/60 hover:bg-[var(--accent)] hover:border-[var(--foreground)]/40 text-[var(--foreground)] transition-all shadow-2xs"
            >
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Right Column Profile Avatar - Compact Dimensions */}
        <div className="relative w-auto flex justify-center shrink-0">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-[var(--border)] shadow-md transition-all duration-700 ease-out hover:scale-[1.02] hover:ring-[var(--foreground)]/30 group">
            <img
              src="/portfolio pic.jpeg"
              alt="Abhinav Dayal"
              className="w-full h-full object-cover object-[center_22%] scale-110 transition-transform duration-700 ease-out group-hover:scale-115"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[var(--foreground)]/10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_65%,var(--background)/0.25_100%)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
