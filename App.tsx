
import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { PreviewDreamHero } from './components/PreviewDreamHero.tsx';
import { Hero } from './components/Hero.tsx';
import { InteractivePreview } from './components/InteractivePreview.tsx';
import { Philosophy } from './components/Philosophy.tsx';
import { BeforeAfter } from './components/BeforeAfter.tsx';
import { SmileGoals } from './components/SmileGoals.tsx';
import { Features } from './components/Features.tsx';
import { Process } from './components/Process.tsx';
import { Disclaimer } from './components/Disclaimer.tsx';
import { Footer } from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* 1. Header - Navbar is above */}
        
        {/* Your New Smile Revealed Before Treatment Begins section */}
        <PreviewDreamHero />
        
        {/* 2. See Your Final Result, First section */}
        <Philosophy />
        
        {/* 3. SELECT YOUR OBJECTIVE. section */}
        <SmileGoals />
        
        {/* 4. Live Engine DYNAMIC VISUALIZER. section */}
        <InteractivePreview />
        
        {/* 5. PREVIEW THE DREAM NOW. Section */}
        <Hero />
        
        {/* Commented out for future use */}
        {/* <BeforeAfter /> */}
        {/* <Features /> */}
        {/* <Process /> */}
        {/* <Disclaimer /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
