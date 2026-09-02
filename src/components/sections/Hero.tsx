import React from 'react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="w-full flex items-center justify-center relative bg-transparent text-[var(--foreground)] overflow-hidden pt-4 pb-5 sm:pt-6 sm:pb-7"
    >
      {/* Top Center Emerald Forest Canopy Glow */}
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[radial-gradient(ellipse_at_center,#2D6A4F/0.32_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-5 lg:gap-8">
        {/* Left Column Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-sm sm:text-base font-semibold text-[#52B788] mb-1 inline-flex items-center gap-1.5">
            <span>🌿</span> Hi, I'm
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-1 text-[var(--foreground)]">
            Abhinav Dayal
          </h1>
          <h2 className="text-base sm:text-xl font-bold text-[#74C69D] mb-3 tracking-wide">
            App Developer
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--muted-foreground)] mb-4 leading-relaxed max-w-xl">
            I build{' '}
            <span className="text-[var(--foreground)] font-semibold underline decoration-[#52B788]/40 underline-offset-4">
              cross-platform mobile
            </span>{' '}
            and high-performance web applications using React Native, React.js, and TypeScript with reusable component architecture and RESTful API integrations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className="bg-[#2D6A4F] hover:bg-[#40916C] text-white font-bold px-5 py-2 rounded-[var(--radius)] text-sm transition-all shadow-[0_4px_18px_rgba(45,106,79,0.35)] hover:shadow-[0_6px_22px_rgba(64,145,108,0.45)] inline-flex items-center gap-2 cursor-pointer"
            >
              Contact Me{' '}
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-base"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          {/* Social Links Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-medium">
            <a
              href="https://github.com/AbhinavXDayal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)] hover:border-[#52B788]/50 text-[var(--foreground)] transition-all shadow-xs"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhinavdayal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)] hover:border-[#52B788]/50 text-[var(--foreground)] transition-all shadow-xs"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sm"
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
              href="https://abhinavportfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)] hover:border-[#52B788]/50 text-[var(--foreground)] transition-all shadow-xs"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sm"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)] hover:border-[#52B788]/50 text-[var(--foreground)] transition-all shadow-xs"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sm"
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

        {/* Right Column Profile Avatar */}
        <div className="relative w-full max-w-xs flex justify-center">
          <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-[radial-gradient(circle_at_center,#2D6A4F/0.45_0%,transparent_70%)] blur-2xl pointer-events-none"></div>
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden ring-3 ring-[#2D6A4F] shadow-[0_8px_30px_rgba(8,28,19,0.9)] transition-all duration-700 ease-out hover:scale-[1.02] hover:ring-[#52B788] group">
            <img
              src="/portfolio pic.jpeg"
              alt="Abhinav Dayal Profile"
              className="w-full h-full object-cover object-center filter grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#2D6A4F]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
