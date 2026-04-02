import React from 'react';

const ProofOfExistence = () => {
  const stats = [
    { label: 'Models', value: '500+', angle: -90 },
    { label: 'Customers', value: '5000+', angle: 0 },
    { label: 'Service time', value: '24/7', angle: 90 },
    { label: 'Experience', value: '12+', angle: 180 },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#fafafa] overflow-hidden flex flex-col items-center justify-center relative min-h-[450px] md:min-h-[600px] snap-start">
      
      {/* 
        PURE CSS ANIMATIONS
        This is used to bypass any Framer Motion hook issues and guarantee 
        silky smooth infinite rotation while keeping cards perfectly upright!
      */}
      <style>
        {`
          @keyframes orb-spin-forward {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes orb-spin-backward {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          .animate-orb-spin {
            animation: orb-spin-forward 40s linear infinite;
          }
          .animate-orb-counter-spin {
            animation: orb-spin-backward 40s linear infinite;
          }
        `}
      </style>

      {/* Decorative center accent background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative w-full max-w-[1000px] h-[400px] md:h-[500px] flex items-center justify-center">
        
        {/*
           ── ROTATING ORBITAL STRUCTURE ──
           The container is a 0x0 point exactly in the middle.
        */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none animate-orb-spin">
          
          {stats.map((stat, i) => {
            return (
              <div
                key={i}
                className="absolute left-0 origin-left flex items-center"
                style={{ 
                   // Vertically centers the spoke exactly
                   top: '-1px', 
                   // Rotates the spoke outward from center
                   transform: `rotate(${stat.angle}deg)`,
                }}
              >
                {/* ── CONNECTION LINE ── */}
                <div className="h-[2px] bg-brand-red w-[110px] sm:w-[150px] md:w-[200px] lg:w-[240px] shadow-[0_0_6px_rgba(227,28,37,0.3)] relative">
                  
                  {/* ── THE CARD/BOX ── */}
                  <div 
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 pointer-events-auto"
                  >
                    {/* Counter spin to cancel container spin entirely */}
                    <div className="animate-orb-counter-spin">
                      {/* Counter the static angle so it always stays horizontal */}
                      <div style={{ transform: `rotate(${-stat.angle}deg)` }}>
                        
                        {/* The visible box matching the sketch */}
                        <div className="bg-white border md:border-2 border-gray-100 p-3 md:p-5 rounded-xl md:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] min-w-[120px] md:min-w-[150px] text-center flex flex-col items-center hover:border-brand-red/30 transition-colors">
                          <span className="text-2xl md:text-4xl font-black text-brand-black mb-1.5 leading-none">
                            {stat.value}
                          </span>
                          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                            {stat.label}
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

          {/* Rotating dashed ring for a technical/dashboard aesthetic */}
          <div 
            className="absolute top-0 left-0 border border-dashed border-brand-black/10 rounded-full pointer-events-none" 
            style={{ 
              width: '220px', height: '220px', 
              transform: 'translate(-50%, -50%)' 
            }} 
          />
          <div 
            className="hidden lg:block absolute top-0 left-0 border border-dashed border-brand-black/5 rounded-full pointer-events-none"
            style={{ 
              width: '480px', height: '480px', 
              transform: 'translate(-50%, -50%)' 
            }} 
          />
        </div>

        {/* 
           ── CENTRAL HUB ── 
           Positioned OUTSIDE the rotation so it stays completely static and above the lines.
        */}
        <div className="relative z-40 w-36 h-36 md:w-44 md:h-44 rounded-full bg-white border-4 border-gray-50 shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex items-center justify-center text-center p-4">
          <div className="flex flex-col items-center">
             <span className="text-brand-black font-black text-lg md:text-xl leading-tight uppercase tracking-widest">
               Proof of<br />Existence
             </span>
             <div className="mt-3 md:mt-4 w-8 md:w-10 h-1 bg-brand-red rounded-full shadow-[0_0_8px_rgba(227,28,37,0.4)]" />
             <p className="mt-3 md:mt-4 text-[8px] md:text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em]">ABS Technologies</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ProofOfExistence;
