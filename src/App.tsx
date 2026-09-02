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
import { SideTrees } from './components/ui/SideTrees';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#DFD5C4] selection:text-[#221D18] overflow-x-hidden">
      {/* 1. Dynamic Botanical Nature Canvas: Moving Plants, Leaves & Dew Matrix */}
      <DotMatrix />

      {/* 2. Small Trees on Sides */}
      <SideTrees />

      {/* 3. Soft Warm Beige Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#EFE8DA] blur-[150px] animate-float-slow"></div>
        <div className="absolute top-[35%] -right-40 w-[580px] h-[580px] rounded-full bg-[#DFD5C4] blur-[160px] animate-float-reverse"></div>
        <div className="absolute top-[65%] -left-32 w-[500px] h-[500px] rounded-full bg-[#E8DFD0] blur-[150px] animate-float-slow"></div>
      </div>

      {/* 4. Main Site Content */}
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
