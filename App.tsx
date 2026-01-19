
import React from 'react';
import BloomCard from './components/BloomCard';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Full-Bleed Background Overlaying the whole viewport */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ 
          backgroundImage: `url('./Gentle Gardening Image Jan 19 2026.jpeg')`,
          zIndex: -1 
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

      {/* Main Content Sections - Now scrolling vertically */}
      <main className="w-full relative z-10">
        <BloomCard />
      </main>
    </div>
  );
};

export default App;