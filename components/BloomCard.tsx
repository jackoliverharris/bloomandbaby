
import React, { useState } from 'react';
import SignupForm from './SignupForm';

const BloomCard: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="flex flex-col w-full text-[#fcfbf7]">
      
      {/* Section 1: Hero - Full Screen Typography */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 lg:px-48 py-24">
        <div className="max-w-6xl w-full animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="space-y-24">
            <div className="space-y-8">
              <h1 className="font-editorial text-7xl md:text-9xl lg:text-[12rem] font-light tracking-tighter leading-[0.85] text-[#FCFBF7]">
                Bloom <br />
                <span className="italic ml-[0.1em] md:ml-[0.2em]">& Baby</span>
              </h1>
              <div className="max-w-xl">
                <p className="font-editorial italic text-2xl md:text-3xl text-stone-300 font-light leading-snug">
                  A restorative place for mums and babies to grow together in the heart of nature.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-16">
              <div className="space-y-8 max-w-lg text-stone-200 text-xl md:text-2xl leading-relaxed font-light">
                <p>Bloom & Baby is a nurturing community for mums and their babies.</p>
                <p>
                  Designed for early motherhood, when babies are small enough to rest, be carried, or explore close by.
                </p>
                <p>
                  Launching spring 2026 just outside of Bath, it’s a calm weekly pause to reset and support wellbeing.
                </p>
              </div>
              
              <div className="w-full max-w-md border-t border-stone-300/40 pt-8">
                <p className="text-[#fcfbf7] mb-8 font-editorial italic text-xl">Join the interest list for Spring 2026</p>
                <SignupForm onComplete={() => setIsSubscribed(true)} />
                {isSubscribed && (
                  <p className="mt-6 text-sm font-editorial italic text-stone-400 animate-in fade-in duration-700">
                    Thanks! We'll be in touch with the details soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Experience - Asymmetrical Grid */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-24 lg:px-48 py-32 bg-black/13">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="font-editorial text-5xl md:text-7xl text-[#FCFBF7] font-light tracking-tight leading-none">
              The weekly <br /><span className="italic">ritual</span>
            </h2>
            <p className="text-stone-300 text-xl md:text-2xl font-light italic leading-relaxed max-w-md">
              A sanctuary created for you, so your baby is comfortably included and you are truly nurtured.
            </p>
          </div>
          
          <div className="grid gap-12 border-l border-stone-500/20 pl-12">
            {[
              { title: "Nature's Rhythm", desc: "Simple gardening and nature-based activities tailored for the seasons." },
              { title: "Mindful Moments", desc: "Gentle mindfulness and wellbeing practices designed for new motherhood." },
              { title: "Sensory Play", desc: "Quiet, natural sensory exploration for babies in a calm environment." },
              { title: "Connection", desc: "A warming cuppa, nourishing treats, and time for honest conversation." }
            ].map((item, i) => (
              <div key={i} className="space-y-2 group">
                <span className="text-stone-500 font-editorial italic text-lg tracking-widest block mb-1">0{i+1}</span>
                <h3 className="text-2xl md:text-3xl font-editorial text-[#FCFBF7] group-hover:text-stone-200 transition-colors">{item.title}</h3>
                <p className="text-stone-400 text-lg font-light max-w-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Large Format Quote */}
      <section className="min-h-[80vh] flex items-center justify-center px-8 py-32">
        <div className="max-w-5xl w-full text-center space-y-12">
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-stone-500/50 mx-auto"></div>
          <h2 className="font-editorial text-4xl md:text-6xl lg:text-7xl text-stone-200 font-light tracking-tight italic leading-tight">
            "A space to be creative, connect with other local mums, and take part in something that nurtures you, not just your baby."
          </h2>
          <div className="w-px h-24 bg-gradient-to-t from-transparent to-stone-500/50 mx-auto"></div>
        </div>
      </section>

      {/* Section 4: Practicalities - Horizontal Spread */}
      <section className="min-h-screen flex flex-col justify-between px-8 md:px-24 lg:px-48 py-24">
        <div className="max-w-7xl w-full mx-auto space-y-32">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 border-b border-stone-500/20 pb-24">
            <div className="space-y-4">
              <p className="text-stone-500 uppercase tracking-widest text-xs">When</p>
              <h3 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#FCFBF7] italic">Spring 2026</h3>
              <p className="text-stone-400 text-lg">Weekday mornings</p>
            </div>
            <div className="space-y-4">
              <p className="text-stone-500 uppercase tracking-widest text-xs">Where</p>
              <h3 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#FCFBF7]">Bath</h3>
              <p className="text-stone-400 text-lg">Just outside the city</p>
            </div>
            <div className="space-y-4 max-w-xs">
              <p className="text-stone-500 uppercase tracking-widest text-xs">Availability</p>
              <h3 className="font-editorial text-3xl text-[#FCFBF7] italic">Intimate Groups</h3>
              <p className="text-stone-400 text-lg">Places are strictly limited to keep conversation easy.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
            <div className="max-w-xl space-y-8">
              <p className="font-editorial text-3xl md:text-4xl text-stone-200 leading-snug">
                Register your interest to be the first to know when booking goes live.
              </p>
              {!isSubscribed && (
                <div className="w-full pt-4">
                  <SignupForm onComplete={() => setIsSubscribed(true)} />
                </div>
              )}
            </div>
            
            <div className="hidden lg:block">
               <p className="font-editorial text-[14rem] text-stone-400/20 pointer-events-none select-none italic">Bloom</p>
            </div>
          </div>
        </div>

        <footer className="w-full max-w-7xl mx-auto pt-48 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="space-y-8">
              <h2 className="font-editorial text-6xl text-[#FCFBF7] font-light italic opacity-90">Bloom & Baby</h2>
              <div className="text-stone-500 text-[10px] md:text-xs uppercase tracking-[0.4em] flex items-center space-x-8">
                <span>Come as you are</span>
                <span className="h-1 w-1 bg-stone-700 rounded-full"></span>
                <span>Grow together</span>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="flex items-center justify-end gap-3">
                <p className="text-stone-500 text-[10px] uppercase tracking-widest">
                  &copy; {new Date().getFullYear()} Bloom & Baby
                </p>
                <a 
                  href="https://www.instagram.com/bloomandbabybath" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-stone-300 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              <p className="text-stone-500 text-[10px] tracking-widest">
                Made with{' '}
                <svg className="inline w-3 h-3 mx-[0.0625rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {' '}in Somerset
              </p>
            </div>
          </div>
        </footer>
      </section>

    </div>
  );
};

export default BloomCard;
