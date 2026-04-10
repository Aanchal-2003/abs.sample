import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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
    <section ref={ref} className="relative h-screen w-full flex items-start lg:items-center bg-[#FFFDE6] overflow-hidden pt-[90px] lg:pt-20 pb-4 snap-start font-system">

      {init && (
         <Particles
           id="tsparticles"
           options={particlesOptions}
           className="absolute inset-0 z-0 pointer-events-auto"
         />
      )}

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full z-10 relative pointer-events-none">
        <motion.div style={{ opacity: opacityText }} className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-14 items-center">

          {/* Left */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-xl pointer-events-auto justify-center"
          >

            {/* Tally Prime x RCB Logo — desktop only above heading */}
            <motion.div variants={item} className="hidden lg:block mb-6">
              <div className="bg-[#1a2b6b] rounded-xl px-4 py-2 inline-block">
                <img
                  src="https://resources.tallysolutions.com/wp-content/uploads/2026/behind-bold-businesses/tally-prime-rcb-logo.svg"
                  alt="TallyPrime x RCB — Official Business Management Platform"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Heading + Tally logo on right (mobile) */}
            <div className="flex items-center gap-4 mb-4 lg:mb-6 w-full">
              <motion.h1
                variants={item}
                className="text-[32px] md:text-[44px] lg:text-[52px] font-bold italic leading-[1.15] text-[#C4962A] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Behind Bold <br />
                <span className="text-brand-black">Businesses</span>
              </motion.h1>
              {/* Mobile-only: Tally logo on right of heading */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:hidden shrink-0"
              >
                <div className="bg-[#1a2b6b] rounded-xl px-3 py-2">
                  <img
                    src="https://resources.tallysolutions.com/wp-content/uploads/2026/behind-bold-businesses/tally-prime-rcb-logo.svg"
                    alt="TallyPrime x RCB"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div variants={item} className="space-y-1.5 mb-6 lg:mb-8 max-w-xl">
              <p className="text-sm text-[#A07828] leading-relaxed">
                From the pitch to business, every game is shaped by the decisions you make.
              </p>
              <p className="text-sm text-[#A07828] leading-relaxed">
                To get them right, you need clarity, control, and confidence.
              </p>
              <p className="text-sm text-[#8B6914] leading-relaxed font-semibold">
                That's where we come in, quietly keeping your business in control, so your decisions stay bold.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-brand-black bg-brand-gold hover:bg-[#e0a800] transition-colors shadow-md text-sm"
              >
                Know more <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* Mobile-only: RCB Banner below button */}
            <motion.div
              variants={item}
              className="lg:hidden mt-6 flex justify-center w-full"
            >
              <img
                src="https://resources.tallysolutions.com/wp-content/uploads/2026/behind-bold-businesses/cricket-players.png"
                alt="TallyPrime — Official Partner of Royal Challengers Bengaluru"
                className="h-52 w-auto object-contain drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Right: Tally x RCB Banner — desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex relative items-center justify-end mt-10 pointer-events-auto"
          >
            <div className="relative w-full max-w-[440px]">
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
