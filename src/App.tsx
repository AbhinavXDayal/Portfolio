import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { GithubActivity } from './components/sections/GithubActivity';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { DotMatrix } from './components/ui/DotMatrix';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#3E6349] selection:text-[#F2F7F4] overflow-x-hidden">
      {/* 1. Dynamic Botanical Nature Canvas: Moving Plants, Leaves & Dew Matrix */}
      <DotMatrix />

      {/* 2. Soft Forest Canopy Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#5B8B67]/15 blur-[150px] animate-float-slow"></div>
        <div className="absolute top-[35%] -right-40 w-[580px] h-[580px] rounded-full bg-[#7EA984]/12 blur-[160px] animate-float-reverse"></div>
        <div className="absolute top-[65%] -left-32 w-[500px] h-[500px] rounded-full bg-[#3E6349]/15 blur-[150px] animate-float-slow"></div>
      </div>

      {/* 3. Main Site Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full pb-10">
          <Hero />
          <GithubActivity />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
