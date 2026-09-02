import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Keep dark mode active permanently
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative z-10 flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--foreground)] selection:text-[var(--background)]">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
