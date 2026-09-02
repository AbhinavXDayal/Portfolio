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
import { NatureForestSides } from './components/ui/NatureForestSides';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#2D6A4F] selection:text-[#F4FBF6] overflow-x-hidden">
      {/* 1. Dynamic Botanical Nature Canvas: Moving Plants, Leaves & Dew Matrix */}
      <DotMatrix />

      {/* 2. Small Forest Trees on Sides */}
      <NatureForestSides />

      {/* 3. Rich All-Green Forest Canopy Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <div className="absolute -top-24 -left-24 w-[560px] h-[560px] rounded-full bg-[#2D6A4F]/30 blur-[130px] animate-float-slow"></div>
        <div className="absolute top-[25%] -right-36 w-[620px] h-[620px] rounded-full bg-[#40916C]/24 blur-[140px] animate-float-reverse"></div>
        <div className="absolute top-[55%] -left-36 w-[540px] h-[540px] rounded-full bg-[#1B4332]/35 blur-[130px] animate-float-slow"></div>
        <div className="absolute -bottom-24 right-10 w-[580px] h-[580px] rounded-full bg-[#52B788]/20 blur-[150px] animate-float-reverse"></div>
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
