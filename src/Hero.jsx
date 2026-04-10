import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap, Star } from 'lucide-react';
import { useRef, useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import HighlightText from './components/HighlightText';


const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false, zIndex: 0 },
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 80, duration: 0.4 } },
    },
    particles: {
      color: { value: "#0f2b6b" },
      links: { color: "#f5b400", distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 1 },
      number: { density: { enable: true }, value: 35 },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"]});
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[80vh] w-full flex items-center bg-[#FFFDE6] overflow-hidden pt-24 pb-4 snap-start">

      {init && (
         <Particles
           id="tsparticles"
           options={particlesOptions}
           className="absolute inset-0 z-0 pointer-events-auto"
         />
      )}

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full z-10 relative pointer-events-none mt-2">
        <motion.div style={{ opacity: opacityText }} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* Left */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-xl pointer-events-auto"
          >

            <motion.h1
              variants={item}
              className="text-[36px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] text-[#C4962A] tracking-tight mb-5"
            >
              Your Trusted Partner for {' '}
              <HighlightText>Tally Solutions</HighlightText>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base text-[#A07828] leading-relaxed mb-8 max-w-lg font-medium"
            >
              We help businesses implement TallyPrime, build custom modules, manage AMC renewals, and deploy cloud solutions — all under one roof.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-brand-red hover:bg-brand-red-dark transition-colors shadow-md text-sm"
              >
                Request a Demo <ArrowRight size={16} />
              </a>
              <a
                href="/services"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-brand-black bg-white border border-gray-200 hover:border-brand-red hover:text-brand-red transition-all text-sm"
              >
                Our Services
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                 <Star size={14} className="text-brand-gold fill-brand-gold" />
                 150+ Clients
              </div>
              <div className="flex items-center gap-2">
                 <Zap size={14} className="text-brand-red" />
                 500+ Custom TDLs
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Tally x RCB Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 pointer-events-auto"
          >
            <div className="relative w-full max-w-[420px] lg:max-w-[520px]">
              <img
                src="https://resources.tallysolutions.com/wp-content/uploads/2026/behind-bold-businesses/cricket-players.png"
                alt="TallyPrime — Official Partner of Royal Challengers Bengaluru"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
