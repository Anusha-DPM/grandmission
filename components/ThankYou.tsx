import React from 'react';
import { Navbar } from './Navbar.tsx';
import { Footer } from './Footer.tsx';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Thank You Hero Section */}
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
            {/* Thank You Message */}
            <div className="mb-8">
              <h1 className="font-extrabold leading-[1.1] tracking-tighter text-3xl md:text-5xl lg:text-6xl mb-6" style={{ fontSize: 'clamp(28px, 5vw, 60px)' }}>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-fade-in-up" 
                  style={{ 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent', 
                    backgroundClip: 'text',
                    animationDelay: '0.1s'
                  }}>
                  You’re All Set
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Thank you for sharing your details. One of our team members will be in touch shortly.
              If you have any questions, feel free to call us at <strong>(281) 789-8836.</strong>
              </p>
            </div>

            {/* Optional: Success Icon */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50">
                <svg 
                  className="w-12 h-12 md:w-16 md:h-16 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
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
