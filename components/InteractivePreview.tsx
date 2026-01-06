
<<<<<<< HEAD
import React, { useState } from 'react';

export const InteractivePreview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    {
      id: 1,
      iframe: 'https://smile4d.ai/preview/eaedb500-d22f-4014-bbbf-1f6cbc90c348',
      title: 'VENEER ARCHITECTURE',
      description: 'Full arch reconstruction using E-max porcelain.'
    },
    {
      id: 2,
      iframe: 'https://smile4d.ai/preview/b7d8a96c-ea5c-4a27-8009-a90648d284c2',
      title: 'ALIGNER PROTOCOL',
      description: 'Phase 1 orthodontic correction.'
    },
    {
      id: 3,
      iframe: 'https://smile4d.ai/preview/6ecb436e-e0ad-4529-808e-363b5191062d',
      title: 'ESTHETIC BONDING',
      description: 'Composite rejuvenation for enamel attrition.'
    }
  ];

  return (
    <section className="w-full bg-[#F2F2F2] py-12 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#0A0E1A] tracking-tighter uppercase leading-[0.9]">
              Real <span className="text-[#3B86F2]">Faces.</span> Real <span className="text-[#3B86F2]">Smile Previews.</span> Real <span className="text-[#3B86F2]">Confidence.</span>
            </h2>
          </div>
=======
import React from 'react';

export const InteractivePreview: React.FC = () => {
  return (
    <section className="w-full bg-[#F2F2F2] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
             <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#2F74B5]"></span>
              <span className="text-[10px] font-black tracking-[0.4em] text-[#2F74B5] uppercase">Live Engine</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A0E1A] tracking-tighter uppercase leading-[0.9]">
              DYNAMIC <br />
              <span className="text-[#FF9A00]">VISUALIZER.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 border border-slate-200">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Active Simulation Stream</span>
          </div>
>>>>>>> 01d561a7df342e8f83d8e6b88b09fc334b62d102
        </div>

        <div className="relative group">
          {/* Architectural Framing */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#2F74B5]"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#FF9A00]"></div>
          
<<<<<<< HEAD
          {/* Image Carousel */}
          <div className="relative w-full overflow-hidden bg-black shadow-[0_50px_100px_-20px_rgba(47,116,181,0.2)]">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselImages.map((item, index) => (
                <div key={item.id} className="min-w-full relative">
                  <div className="relative w-full aspect-[16/10] md:aspect-[21/9] lg:h-[700px] bg-black min-h-[400px] md:min-h-[500px]">
                    <iframe 
                      src={item.iframe}
                      className="w-full h-full border-none"
                      title={item.title}
                      allow="camera; microphone; clipboard-read; clipboard-write"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-2 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#FF9A00] w-6 md:w-8' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + 3) % 3)}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0A0E1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % 3)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0A0E1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
=======
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] lg:h-[700px] overflow-hidden bg-white shadow-[0_50px_100px_-20px_rgba(47,116,181,0.2)]">
            <iframe 
              src="https://smile4d.ai/preview/eaedb500-d22f-4014-bbbf-1f6cbc90c348" 
              className="absolute inset-0 w-full h-full border-none"
              title="Interactive Smile Preview Tool"
              allow="camera; microphone; clipboard-read; clipboard-write"
            />
>>>>>>> 01d561a7df342e8f83d8e6b88b09fc334b62d102
          </div>

          {/* Technical Overlay Markers */}
          <div className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 rotate-90">
             <span className="text-[10px] font-black text-slate-300 uppercase tracking-[1em]">ALIGNMENT_AXIS_01</span>
          </div>
        </div>
      </div>
    </section>
  );
};
