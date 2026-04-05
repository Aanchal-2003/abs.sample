import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';

const AuthenticIllustration = ({ iconName, className = "" }) => {
  const IconComponent = LucideIcons[iconName];

  // SVG Filter for "Charcoal Pencil" effect
  const filterId = `charcoal-filter-${Math.random().toString(36).substr(2, 9)}`;

  // Scene Variation based on icon name (hash)
  const sceneType = (iconName?.length || 0) % 3;

  if (!IconComponent) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative flex items-center justify-center min-h-[280px] w-full bg-white select-none pointer-events-none ${className}`}
    >
      {/* SVG Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            {/* Grainy Texture */}
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
            
            {/* Soft Edge Bleed */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Selective Blue Background Glow (Floating) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
        <div className="w-48 h-48 bg-blue-500/5 blur-[80px] rounded-full" />
      </div>

      {/* Layout Container: Human + Icon */}
      <div className="relative flex items-end gap-0" style={{ filter: `url(#${filterId})` }}>
        
        {/* THE HUMAN ELEMENT (Hand-drawn SVG Path) */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className="w-40 h-40 -mr-16 mb-2 text-gray-800 drop-shadow-sm"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
        >
          {/* Selective Blue Fill on Human Shirt/Body */}
          <path 
            d={sceneType === 0 
                ? "M30 80 Q35 50 45 35 Q55 20 65 35 Q75 50 80 80" // Standing Focused
                : sceneType === 1
                ? "M20 80 Q25 60 40 50 Q60 40 80 50" // Reaching Out
                : "M40 80 Q35 70 30 50 Q40 30 60 40 Q80 55 70 80" // Sitting/Engaged
            }
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            strokeLinecap="round" 
            className="text-gray-900"
          />
          <motion.path 
            d={sceneType === 0 
                ? "M42 45 Q50 35 58 45 L55 65 L45 65 Z" // Shirt
                : sceneType === 1
                ? "M30 55 Q45 45 60 55 L55 75 L35 75 Z" // Top
                : "M35 45 Q50 35 65 45 L60 65 L40 65 Z" // Vest
            }
            fill="rgba(37, 99, 235, 0.15)" // Selective Blue Fill
            stroke="none"
          />
          {/* Arms/Details */}
          <path d="M40 50 Q30 45 25 55 M60 50 Q70 45 75 55" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
        </motion.svg>

        {/* THE ICON COMPONENT (The Technology) */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10"
        >
          <IconComponent 
            size={100} 
            strokeWidth={1.2} 
            className="text-blue-600/90 drop-shadow-[0_0_10px_rgba(37,99,235,0.1)]"
          />
        </motion.div>

        {/* Hand-drawn scribble background (subtle) */}
        <div className="absolute -inset-10 -z-10 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-40 h-40 absolute top-0 left-0">
            <path d="M 20 50 Q 50 20 80 50 T 140 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthenticIllustration;
