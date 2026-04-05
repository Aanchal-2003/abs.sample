import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';

const SketchIcon = ({ iconName, className = "" }) => {
  const IconComponent = LucideIcons[iconName];

  if (!IconComponent) {
    console.warn(`Icon ${iconName} not found in lucide-react`);
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative flex items-center justify-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm ${className}`}
    >
      {/* SVG Filter for Sketchy Effect */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="sketchy-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
      </svg>

      {/* Selective Blue Shadow/Glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />

      {/* Main Icon with Sketchy Filter */}
      <div className="relative z-10" style={{ filter: 'url(#sketchy-filter)' }}>
        <IconComponent 
          size={120} 
          strokeWidth={1.5} 
          className="text-blue-600/80 drop-shadow-[0_0_15px_rgba(37,99,235,0.2)]"
        />
      </div>

      {/* Hand-drawn decorative lines (subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <motion.path
            d="M 20 20 Q 100 0 180 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-400"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          <motion.path
            d="M 180 20 Q 200 100 180 180"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-400"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default SketchIcon;
