import React, { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { DotMatrix } from "./components/ui/DotMatrix";
import { ScrollToTop } from "./components/ui/ScrollToTop";

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis for luxurious, fluid inertia scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-style fluid deceleration curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#3E6349] selection:text-[#F2F7F4] overflow-x-hidden">
      {/* 1. Dynamic Moving Graph & Dot Matrix Canvas (Matte, Non-Glowing) */}
      <DotMatrix />

      {/* 2. Floating Scroll-To-Top Arrow Button */}
      <ScrollToTop />

      {/* 3. Main Site Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full pb-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;

