import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { useRef, useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import HighlightText from './components/HighlightText';
import heroIllustration from './assets/illustrations/hero.png';

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
      color: { value: "#577399" },
      links: { color: "#BDD5EA", distance: 150, enable: true, opacity: 0.2, width: 1 },
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
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full flex items-center bg-transparent overflow-hidden pt-24 lg:pt-28 pb-12 snap-start">

      {/* Backgrounds */}
      <motion.div style={{ y: yBg }} className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-brand-red/5 to-transparent rounded-bl-[100px] -z-10 hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-red/5 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-10 left-10 w-52 h-52 bg-brand-gold/5 rounded-full blur-[60px] -z-10" />

      {init && (
         <Particles
           id="tsparticles"
           options={particlesOptions}
           className="absolute inset-0 z-0 pointer-events-auto"
         />
      )}

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full z-10 relative pointer-events-none mt-10 md:mt-16">
        <motion.div style={{ opacity: opacityText }} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* Left */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-w-xl pointer-events-auto"
          >

            {/* Official 5-Star Tally Partner Badge */}
            <motion.div variants={item} className="mb-6">
              <div className="bg-white p-1 rounded-lg border border-gray-100 shadow-sm inline-block">
                <img 
                  src="https://www.circuitworld.in/images/brandimages/tally-certified-partner-5-star-sales-and-solution.png" 
                  alt="Official Tally Certified 5-Star Partner"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[36px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] text-brand-black tracking-tight mb-5"
            >
              Your Trusted Partner for {' '}
              <HighlightText>Tally Solutions</HighlightText>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base text-gray-500 leading-relaxed mb-8 max-w-lg font-medium"
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

          {/* Right: Dashboard Image Cropped */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 pointer-events-auto"
          >
            <div className="relative w-full max-w-[420px] lg:max-w-[500px] aspect-square rounded-2xl overflow-hidden">
               <img
                 src={heroIllustration}
                 alt="Professional Tally Partner Illustration"
                 className="absolute inset-0 w-full h-full object-contain"
               />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
