
import React from 'react';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById('evaluation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

=======

export const Philosophy: React.FC = () => {
>>>>>>> 01d561a7df342e8f83d8e6b88b09fc334b62d102
  return (
    <section className="py-32 bg-[#F7F9F7] relative overflow-hidden border-y border-slate-100">
      {/* Structural Watermark */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none">
<<<<<<< HEAD
        <span className="text-[20rem] font-black tracking-tighter leading-none text-[#3B86F2]">SAGE</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
=======
        <span className="text-[20rem] font-black tracking-tighter leading-none text-[#71866B]">SAGE</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
>>>>>>> 01d561a7df342e8f83d8e6b88b09fc334b62d102
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="sticky top-40">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-1 bg-[#2F74B5]"></span>
<<<<<<< HEAD
              </div>
              <p className="text-[#3B86F2] font-bold uppercase tracking-widest leading-relaxed mb-8" style={{ fontSize: '20px' }}>
                MOST PEOPLE DON'T AVOID TREATMENT. THEY AVOID UNCERTAINITY.
              </p>
              <button
                onClick={scrollToForm}
                className="group relative w-full flex items-center justify-center gap-4 px-6 py-6 bg-[#FF9A00] hover:bg-[#0A0E1A] text-white font-black text-sm uppercase tracking-[0.3em] transition-all rounded-none"
              >
                <span className="whitespace-nowrap">Generate Preview</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform shrink-0" />
              </button>
=======
                <span className="text-xs font-black tracking-[0.4em] text-[#2F74B5] uppercase">Foundations</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0A0E1A] tracking-tighter leading-[0.9] uppercase mb-10">
                THE <br />
                <span className="text-[#71866B]">ARCHITECTS</span> <br />
                OF JOY.
              </h2>
              <p className="text-[#71866B] font-bold text-sm uppercase tracking-widest leading-relaxed">
                Richmond’s premier destination for AI-driven smile transformations.
              </p>
>>>>>>> 01d561a7df342e8f83d8e6b88b09fc334b62d102
            </div>
          </div>

          <div className="lg:w-2/3 space-y-12">
            <div className="bg-white p-12 lg:p-16 border-l-4 border-[#2F74B5] shadow-2xl shadow-slate-200/50">
<<<<<<< HEAD
              <div className="space-y-6 text-slate-600 leading-snug" style={{ fontSize: '16px' }}>
                <p className="font-medium">
                  Choosing dental treatment can feel overwhelming when you can't see the outcome.
                </p>
                <div className="space-y-3">
                  <p className="font-bold text-[#0A0E1A] uppercase tracking-wide">Questions like:</p>
                  <ul className="space-y-2 pl-6 leading-snug">
                    <li className="font-medium">Will it suit my face?</li>
                    <li className="font-medium">Will my smile look natural?</li>
                    <li className="font-medium">Is it really worth it?</li>
                  </ul>
                </div>
                <div className="font-bold text-slate-600 border-t border-slate-100 pt-6 space-y-2">
                  <p>That uncertainty stops many people from moving forward.</p>
                  <p className="text-[#2F74B5]">We changed that.</p>
                </div>
              </div>
            </div>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
=======
              <h3 className="text-3xl font-black text-[#0A0E1A] mb-8 tracking-tight leading-tight uppercase">
                See Your Final Result, <span className="text-[#2F74B5]">First</span>
              </h3>
              <div className="space-y-8 text-slate-600 leading-relaxed text-xl">
                <p className="font-medium">
                  Do you hold back when you laugh? Do you hide your smile in photos? Feeling confident in your smile makes all the difference in your emotional well-being and social life. Imagine enjoying your deepest belly laughs with friends without worrying about how your teeth look.
                </p>
                <p className="font-bold text-slate-400 italic border-t border-slate-100 pt-8 uppercase text-sm tracking-widest">
                  "Confidence isn't just a look—it's a biological state of performance."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
>>>>>>> 01d561a7df342e8f83d8e6b88b09fc334b62d102
              <div className="p-10 bg-[#2F74B5] text-white">
                <h4 className="font-black text-xs tracking-[0.3em] uppercase mb-6 opacity-70">The Problem</h4>
                <p className="text-base font-bold leading-relaxed uppercase tracking-tight">
                  Chipped, broken, or missing teeth often make it impossible to imagine a flawless future.
                </p>
              </div>
              <div className="p-10 bg-[#FF9A00] text-white">
                <h4 className="font-black text-xs tracking-[0.3em] uppercase mb-6 opacity-70">The Protocol</h4>
                <p className="text-base font-bold leading-relaxed uppercase tracking-tight">
                  Our cutting-edge smile design technology provides a true-to-life preview before treatment.
                </p>
              </div>
<<<<<<< HEAD
            </div> */}
=======
            </div>

            <p className="text-slate-400 font-bold text-base leading-relaxed uppercase tracking-wider text-right pr-4">
              Revitalizing teeth in <span className="text-[#2F74B5]">Richmond, TX</span> since 2012.
            </p>
>>>>>>> 01d561a7df342e8f83d8e6b88b09fc334b62d102
          </div>
        </div>
      </div>
    </section>
  );
};
