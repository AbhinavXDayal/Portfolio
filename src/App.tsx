import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { DotMatrix } from './components/ui/DotMatrix';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#E9CCB1] selection:text-[#141312] overflow-x-hidden">
      {/* 1. Dynamic Interactive Dot Matrix Canvas */}
      <DotMatrix />

      {/* 2. Dynamic Ambient Moving Elements in Darkish Dullish Quasi-Neutral Palette */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <div className="absolute -top-32 -left-32 w-[540px] h-[540px] rounded-full bg-[#E9CCB1]/20 blur-[130px] animate-float-slow"></div>
        <div className="absolute top-[30%] -right-40 w-[620px] h-[620px] rounded-full bg-[#E4DAC2]/16 blur-[140px] animate-float-reverse"></div>
        <div className="absolute top-[60%] -left-32 w-[520px] h-[520px] rounded-full bg-[#EBCFC4]/18 blur-[130px] animate-float-slow"></div>
        <div className="absolute -bottom-32 right-10 w-[580px] h-[580px] rounded-full bg-[#D3C4BE]/18 blur-[140px] animate-float-reverse"></div>
      </div>

      {/* 3. Main Site Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full pb-10">
          <Hero />
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
