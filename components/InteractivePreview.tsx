
import React, { useState, useEffect, useMemo } from 'react';

export const InteractivePreview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [viewMode, setViewMode] = useState<'photo' | 'video'>('photo');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slider effect for mobile (only in photo mode)
  useEffect(() => {
    if (!isMobile || viewMode !== 'photo') return;
    
    // Reset to before when carousel changes
    setShowBefore(true);
    
    const interval = setInterval(() => {
      setShowBefore((prev) => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile, currentIndex, viewMode]);

  // Using direct paths from public folder
  const carouselImages = useMemo(() => [
    {
      id: 1,
      iframe: 'https://smile4d.ai/preview/eaedb500-d22f-4014-bbbf-1f6cbc90c348',
      before: '/images/before-mobile view.jpg',
      after: '/images/after-mobile view.png',
      video: '/videos/40e9e18b-71e3-436c-8b02-b9850aeb4e3a.mp4',
      title: 'VENEER ARCHITECTURE',
      description: 'Full arch reconstruction using E-max porcelain.'
    },
    {
      id: 2,
      iframe: 'https://smile4d.ai/preview/b7d8a96c-ea5c-4a27-8009-a90648d284c2',
      before: '/images/before2-mobile view.jpg',
      after: '/images/after2-mobile view.png',
      video: '/videos/9532e014-414c-4879-8103-4a722445c4cf.mp4',
      title: 'ALIGNER PROTOCOL',
      description: 'Phase 1 orthodontic correction.'
    },
    {
      id: 3,
      iframe: 'https://smile4d.ai/preview/6d230df1-812c-49f0-a378-a7ffb92b26fe',
      before: '/images/before3-mobile view.jpg',
      after: '/images/after3-mobile view.png',
      video: '/videos/04d9fcd5-8aca-413a-977c-e7dcc84f282f.mp4',
      title: 'ESTHETIC BONDING',
      description: 'Composite rejuvenation for enamel attrition.'
    }
  ], []);

  return (
    <section className="w-full bg-[#F2F2F2] py-6 md:py-20 lg:py-32 overflow-hidden md:overflow-visible">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-4 md:mb-12 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-2 md:gap-6 text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold text-[#0A0E1A] tracking-tighter uppercase leading-[0.9]">
              Real <span className="text-[#3B86F2]">Faces.</span> Real <span className="text-[#3B86F2]">Smile Previews.</span> Real <span className="text-[#3B86F2]">Confidence.</span>
            </h2>
          </div>
        </div>

        <div className="relative group">
          {/* Architectural Framing */}
          <div className="hidden md:block absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#2F74B5]"></div>
          <div className="hidden md:block absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#FF9A00]"></div>
          
          {/* Image Carousel */}
          <div className="relative w-full overflow-hidden bg-black shadow-[0_50px_100px_-20px_rgba(47,116,181,0.2)]">
            {/* Mobile: Photo/Video Preview with Before/After */}
            <div className="md:hidden relative w-[calc(100%+0.5rem)] -mx-0.5 md:mx-0 overflow-hidden bg-black rounded-lg md:rounded-2xl">
              <div className="relative w-full h-[60vh] overflow-hidden bg-black">
                {/* Photo Preview Mode */}
                {viewMode === 'photo' && (
                  <div className="relative w-full h-full">
                    {/* Before Image */}
                    <div 
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        showBefore ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img 
                        src={carouselImages[currentIndex].before} 
                        className="w-full h-full object-cover" 
                        alt="Before" 
                      />
                    </div>

                    {/* After Image */}
                    <div 
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        !showBefore ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img 
                        src={carouselImages[currentIndex].after} 
                        className="w-full h-full object-cover" 
                        alt="After"
                        loading="lazy"
                      />
                    </div>

                    {/* Before/After Toggle Buttons */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2 bg-black/70 backdrop-blur-md px-3 py-2.5 rounded-full">
                      <button
                        onClick={() => setShowBefore(true)}
                        className={`px-5 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all ${
                          showBefore 
                            ? 'bg-[#FF9A00] text-white' 
                            : 'bg-white/20 text-white/70'
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => setShowBefore(false)}
                        className={`px-5 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all ${
                          !showBefore 
                            ? 'bg-[#FF9A00] text-white' 
                            : 'bg-white/20 text-white/70'
                        }`}
                      >
                        After
                      </button>
                    </div>
                  </div>
                )}

                {/* Video Preview Mode */}
                {viewMode === 'video' && (
                  <div className="relative w-full h-full">
                    {/* Before Image */}
                    <div className="absolute inset-0 w-full h-full z-10">
                      <img 
                        src={carouselImages[currentIndex].before} 
                        className="w-full h-full object-cover" 
                        alt="Before" 
                      />
                    </div>

                    {/* Video */}
                    <div className="absolute inset-0 w-full h-full z-20">
                      <video
                        src={carouselImages[currentIndex].video}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Tabs - Below Image */}
              <div className="flex justify-center gap-2 bg-black/70 backdrop-blur-md px-2 py-1.5 rounded-full mt-4 mb-2">
                <button
                  onClick={() => {
                    setViewMode('photo');
                    setShowBefore(true);
                  }}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all ${
                    viewMode === 'photo'
                      ? 'bg-[#FF9A00] text-white'
                      : 'bg-white/20 text-white/70'
                  }`}
                >
                  Photo Preview
                </button>
                <button
                  onClick={() => setViewMode('video')}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all ${
                    viewMode === 'video'
                      ? 'bg-[#FF9A00] text-white'
                      : 'bg-white/20 text-white/70'
                  }`}
                >
                  Video Preview
                </button>
              </div>
            </div>

            {/* Desktop: Side-by-Side Before/After Carousel */}
            <div className="hidden md:block relative w-full max-w-4xl mx-auto overflow-hidden bg-black rounded-2xl shadow-[0_50px_100px_-20px_rgba(47,116,181,0.2)] py-12 md:py-16">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {carouselImages.map((item, index) => (
                  <div key={item.id} className="min-w-full relative">
                    {/* Labels Above Images */}
                    <div className="flex mb-4">
                      <div className="w-1/2 flex justify-center">
                        <span className="text-white font-black text-sm tracking-[0.2em] uppercase">BEFORE</span>
                      </div>
                      <div className="w-1/2 flex justify-center">
                        <span className="text-white font-black text-sm tracking-[0.2em] uppercase">AFTER</span>
                      </div>
                    </div>

                    <div className="relative w-full aspect-[16/10] lg:h-[500px] bg-black overflow-visible">
                      {/* Photo Preview Mode - Side by Side */}
                      {viewMode === 'photo' && (
                        <div className="relative w-full h-full flex gap-4">
                          {/* BEFORE Section - Left Side */}
                          <div className="relative w-1/2 h-full overflow-hidden rounded-lg">
                            <img 
                              src={item.before} 
                              className="w-full h-full object-cover rounded-lg" 
                              alt="Before" 
                            />
                          </div>

                          {/* AFTER Section - Right Side */}
                          <div className="relative w-1/2 h-full overflow-hidden rounded-lg">
                            <img 
                              src={item.after} 
                              className="w-full h-full object-cover rounded-lg" 
                              alt="After" 
                            />
                          </div>
                        </div>
                      )}

                      {/* Video Preview Mode - Before on Left, Video on Right */}
                      {viewMode === 'video' && (
                        <div className="relative w-full h-full flex gap-4">
                          {/* BEFORE Section - Left Side */}
                          <div className="relative w-1/2 h-full overflow-hidden rounded-lg">
                            <img 
                              src={item.before} 
                              className="w-full h-full object-cover rounded-lg" 
                              alt="Before" 
                            />
                          </div>

                          {/* AFTER/VIDEO Section - Right Side */}
                          <div className="relative w-1/2 h-full overflow-hidden rounded-lg">
                            <video
                              src={item.video}
                              className="w-full h-full object-cover rounded-lg"
                              autoPlay
                              loop
                              muted
                              playsInline
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tabs - Below Image */}
              <div className="flex justify-center gap-3 bg-black/70 backdrop-blur-md px-3 py-2 rounded-full mt-4 mb-4">
                <button
                  onClick={() => {
                    setViewMode('photo');
                    setShowBefore(true);
                  }}
                  className={`px-6 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all ${
                    viewMode === 'photo'
                      ? 'bg-[#FF9A00] text-white'
                      : 'bg-white/20 text-white/70'
                  }`}
                >
                  Photo Preview
                </button>
                <button
                  onClick={() => setViewMode('video')}
                  className={`px-6 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all ${
                    viewMode === 'video'
                      ? 'bg-[#FF9A00] text-white'
                      : 'bg-white/20 text-white/70'
                  }`}
                >
                  Video Preview
                </button>
              </div>
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
