
import React from 'react';
<<<<<<< HEAD
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
=======
import { Navbar } from './components/Navbar';
import { PreviewDreamHero } from './components/PreviewDreamHero';
import { Hero } from './components/Hero';
import { InteractivePreview } from './components/InteractivePreview';
import { Philosophy } from './components/Philosophy';
import { BeforeAfter } from './components/BeforeAfter';
import { SmileGoals } from './components/SmileGoals';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Disclaimer } from './components/Disclaimer';
import { Footer } from './components/Footer';
>>>>>>> 01d561a7df342e8f83d8e6b88b09fc334b62d102

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
