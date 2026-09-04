import React, { useEffect, useState } from "react";

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down (e.g. past 260px or near bottom)
      const scrolled = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (
        scrolled > 260 ||
        (totalHeight > 0 && scrolled > totalHeight * 0.35)
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-5 right-5 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] shadow-md backdrop-blur-xs flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
};

