
import React, { useEffect, useState } from 'react';
import BloomCard from './components/BloomCard';
import FAQPage from './components/FAQPage';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isFaqPage = pathname === '/faq';

  useEffect(() => {
    if (!menuOpen) return;

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [menuOpen]);

  const backgroundImageUrl = isFaqPage
    ? '/faq-background.jpeg'
    : '/Gentle%20Gardening%20Image%20Jan%2019%202026.jpeg';

  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Full-Bleed Background Overlaying the whole viewport */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ 
          backgroundImage: `url('${backgroundImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          width: '100vw',
          height: '100vh',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        {/* Darkening Organic Overlay */}
        <div className="absolute inset-0 bg-[#2d281f] opacity-[0.63] mix-blend-multiply"></div>
        
        {/* Organic Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.225] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23000000'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Strong radial vignette from all edges */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0, 0, 0, 0.36) 70%, rgba(0, 0, 0, 0.63) 100%),
              radial-gradient(ellipse at top, rgba(0, 0, 0, 0.45) 0%, transparent 50%),
              radial-gradient(ellipse at bottom, rgba(0, 0, 0, 0.54) 0%, transparent 50%),
              radial-gradient(ellipse at left, rgba(0, 0, 0, 0.36) 0%, transparent 50%),
              radial-gradient(ellipse at right, rgba(0, 0, 0, 0.36) 0%, transparent 50%)
            `
          }}
        ></div>
      </div>

      {!isFaqPage && (
        <>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
            className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-stone-200/50 bg-black/35 text-stone-100 backdrop-blur-sm transition hover:bg-black/55"
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-stone-100"></span>
              <span className="block h-0.5 w-6 bg-stone-100"></span>
              <span className="block h-0.5 w-6 bg-stone-100"></span>
            </div>
          </button>

          {menuOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              role="presentation"
            >
              <nav
                className="absolute top-0 right-0 h-full w-[88%] max-w-sm border-l border-stone-200/30 bg-[#1f1a13]/95 p-8 text-stone-100 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
                aria-label="Main navigation"
              >
                <div className="mb-10 flex items-center justify-between">
                  <p className="font-editorial text-3xl italic">Menu</p>
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full border border-stone-200/40 px-3 py-1 text-sm hover:bg-stone-100/10"
                  >
                    Close
                  </button>
                </div>
                <div className="space-y-6 text-2xl font-editorial">
                  <a href="/" className="block border-b border-stone-300/20 pb-2 hover:text-white">
                    Home
                  </a>
                  <a href="/faq" className="block border-b border-stone-300/20 pb-2 hover:text-white">
                    FAQ
                  </a>
                </div>
              </nav>
            </div>
          )}
        </>
      )}

      <main className="w-full relative z-10">
        {isFaqPage ? <FAQPage /> : <BloomCard />}
      </main>
    </div>
  );
};

export default App;
