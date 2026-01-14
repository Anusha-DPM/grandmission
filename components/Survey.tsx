import React, { useEffect } from 'react';
import { Navbar } from './Navbar.tsx';
import { Footer } from './Footer.tsx';

export const Survey: React.FC = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.digitalpresencematters.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.digitalpresencematters.com/js/form_embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Combined Section with Content and Survey Form */}
      <section className="relative pt-4 pb-4 flex items-center justify-center overflow-hidden min-h-screen" style={{ backgroundColor: '#0a0e1a' }}>
        {/* Enhanced Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: i % 2 === 0 ? 'rgba(59,130,246,0.4)' : 'rgba(255,154,0,0.4)',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] transition-all duration-1000 ease-out"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF9A00]/20 rounded-full blur-[100px] transition-all duration-1000 ease-out"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] animate-pulse"></div>

        {/* Main Content - Centered Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-center text-center py-2">
            {/* Enhanced Main Heading with Staggered Animation */}
            <div className="mb-2">
              <h1 className="font-extrabold leading-[0.9] tracking-tighter text-2xl md:text-5xl lg:text-6xl" style={{ fontSize: 'clamp(24px, 5vw, 60px)' }}>
                <span className="block text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  Your New Smile
                </span>
                <span 
                  className="block animate-fade-in-up relative"
                  style={{ animationDelay: '0.2s' }}
                >
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Revealed Before
                  </span>
                  <span className="inline-block" style={{ width: '0.4em' }}> </span>
                  <span className="inline-block text-white">
                    Treatment Begins
                  </span>
                </span>
              </h1>
            </div>

            {/* Survey Form - Centered */}
            <div className="w-full max-w-2xl">
              <div className="w-full min-h-[600px]">
                <iframe 
                  src="https://link.digitalpresencematters.com/widget/survey/KyFStOzMBB91lggpojSW" 
                  style={{ border: 'none', width: '100%', minHeight: '600px' }} 
                  scrolling="no" 
                  id="KyFStOzMBB91lggpojSW" 
                  title="survey"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          }
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(60px, 60px); }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </section>
      <Footer />
    </div>
  );
};
