import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/* ── UNIFIED THEME (matches RCB slide) ── */
const THEME = {
  textPrimary: '#C4962A',    // gold for heading top line
  textSecondary: '#A07828',  // softer gold for body text
  textBold: '#8B6914',       // deep gold for emphasis
  headingFont: "'Playfair Display', serif",
};

/* ── SLIDE DATA ── */
const slides = [
  {
    id: 'rcb',
    bg: '#FFFDE6',
    badge: 'TallyPrime × RCB',
    headingTop: 'Behind Bold',
    headingBottom: 'Businesses',
    paragraphs: [
      { text: 'From the pitch to business, every game is shaped by the decisions you make.', bold: false },
      { text: 'To get them right, you need clarity, control, and confidence.', bold: false },
      { text: "That's where we come in — quietly keeping your business in control, so your decisions stay bold.", bold: true },
    ],
    ctaLabel: 'Know more',
    ctaLink: '/services',
    topLogo: {
      src: 'https://resources.tallysolutions.com/wp-content/uploads/2026/behind-bold-businesses/tally-prime-rcb-logo.svg',
      bg: '#1a2b6b',
    },
    mainImage: 'https://resources.tallysolutions.com/wp-content/uploads/2026/behind-bold-businesses/cricket-players.png',
    imageAlt: 'TallyPrime x Royal Challengers Bengaluru',
  },
  {
    id: 'tally-prime-7',
    bg: '#FFFDE6',
    badge: 'TallyPrime 7.0',
    headingTop: 'Thoughtfully',
    headingBottom: 'Built',
    paragraphs: [
      { text: 'A brand-new release packed with features that Indian businesses have been asking for.', bold: false },
      { text: 'Faster reports, smarter search, connected banking, and seamless cloud backup — all in one.', bold: false },
      { text: 'Upgrade today and experience Tally the way it was meant to be.', bold: true },
    ],
    ctaLabel: 'Learn how to Upgrade',
    ctaLink: '/contact',
    mainImage: 'https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/thoughtfully-built.svg',
    imageAlt: 'TallyPrime 7.0 — Thoughtfully Built',
  },
  {
    id: 'ideas-to-reality',
    bg: '#FFFDE6',
    badge: 'Ideas, Meet Execution',
    headingTop: 'From Big Ideas',
    headingBottom: 'To Bold Results',
    paragraphs: [
      { text: 'Your vision deserves more than just software — it deserves partners who turn ideas into reality.', bold: false },
      { text: 'Secure, creative, and always a step ahead — we bring the tools, you bring the imagination.', bold: false },
      { text: "Let's build something brilliant, together.", bold: true },
    ],
    ctaLabel: 'Start a Conversation',
    ctaLink: '/contact',
    mainImage: 'https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/run-your-business.webp',
    imageAlt: 'Ideas, creativity and execution',
  },
  {
    id: 'always-there',
    bg: '#FFFDE6',
    badge: 'Always There, Always On',
    headingTop: 'Support That',
    headingBottom: 'Never Sleeps',
    paragraphs: [
      { text: 'Dedicated experts, rapid response times, and hands-on training whenever you need us.', bold: false },
      { text: 'From setup-day questions to year-end closings, we stay with you every step of the way.', bold: false },
      { text: 'Your business never stops — and neither do we.', bold: true },
    ],
    ctaLabel: 'Get in Touch',
    ctaLink: '/contact',
    mainImage: 'https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/tally-edge.webp',
    imageAlt: 'Secure data exchange',
  },
];

const Hero = () => {
  const [init, setInit] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const slide = slides[current];

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-start lg:items-center overflow-hidden pt-[90px] lg:pt-20 pb-4 snap-start font-system transition-colors duration-700"
      style={{ backgroundColor: slide.bg }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0 pointer-events-auto"
        />
      )}

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full z-10 relative pointer-events-none">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ opacity: opacityText }}
            className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 items-center"
          >

            {/* Left */}
            <div className="flex flex-col items-start text-left pointer-events-auto justify-center">

              {/* Heading row (+ optional top logo on right) */}
              <div className="flex items-center gap-4 mb-4 lg:mb-6">
                <div>
                  {slide.badge && (
                    <span
                      className="inline-block px-4 py-1.5 bg-brand-gold/20 text-brand-red text-[11px] font-bold uppercase tracking-widest rounded-full mb-3"
                    >
                      {slide.badge}
                    </span>
                  )}
                  <h1
                    className="text-[32px] md:text-[44px] lg:text-[52px] font-bold italic leading-[1.15] tracking-tight"
                    style={{ fontFamily: THEME.headingFont, color: THEME.textPrimary }}
                  >
                    {slide.headingTop} <br />
                    <span className="text-brand-black">{slide.headingBottom}</span>
                  </h1>
                </div>
                {slide.topLogo && (
                  <div className="shrink-0 mt-8 lg:mt-10">
                    <div
                      className="rounded-xl px-3 py-2 lg:px-4 lg:py-2.5"
                      style={{ backgroundColor: slide.topLogo.bg }}
                    >
                      <img
                        src={slide.topLogo.src}
                        alt="Slide logo"
                        className="h-16 lg:h-20 w-auto object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2 mb-6 lg:mb-8 max-w-2xl">
                {slide.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`text-base lg:text-lg leading-relaxed ${p.bold ? 'font-semibold' : 'font-medium'}`}
                    style={{ color: p.bold ? THEME.textBold : THEME.textSecondary }}
                  >
                    {p.text}
                  </p>
                ))}
              </div>

              <div>
                <a
                  href={slide.ctaLink}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-brand-black bg-brand-gold hover:opacity-90 transition-opacity shadow-md text-sm"
                >
                  {slide.ctaLabel} <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Mobile-only: main image below button */}
              <div className="lg:hidden mt-6 flex justify-center w-full">
                <img
                  src={slide.mainImage}
                  alt={slide.imageAlt}
                  className="h-52 w-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Right: Main Banner — desktop only */}
            <div className="hidden lg:flex relative items-center justify-center pointer-events-auto">
              {slide.id === 'tally-prime-7' ? (
                <div className="relative w-full max-w-[520px] px-2">
                  {/* Top row: Tally logo + Thoughtfully built */}
                  <div className="flex items-start gap-4 mb-3">
                    <img
                      src="https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/tally-prime-7-0-logo.svg"
                      alt="TallyPrime 7.0"
                      className="h-12 w-auto shrink-0 mt-1"
                    />
                    <img
                      src="https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/thoughtfully-built.svg"
                      alt="Thoughtfully built"
                      className="flex-1 h-auto max-h-[120px] object-contain object-left"
                    />
                  </div>
                  {/* Rocket + bullets row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[90px] leading-none shrink-0" aria-hidden>
                      🚀
                    </div>
                    <ul className="space-y-1.5 text-sm flex-1" style={{ color: THEME.textSecondary }}>
                      <li>• TallyDrive for Secure Cloud Backup</li>
                      <li>• Connected Payments with PrimeBanking</li>
                      <li>• Instant Discovery with SmartFind</li>
                      <li>• Automate Invoice-to-Payment with Bharat Connect</li>
                    </ul>
                  </div>
                  {/* Upgrade button */}
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-brand-gold text-brand-black hover:opacity-90 transition-opacity shadow-md text-sm"
                  >
                    Learn how to Upgrade <ArrowUpRight size={14} />
                  </a>
                </div>
              ) : (
                <div className="relative w-full max-w-[520px]">
                  <img
                    src={slide.mainImage}
                    alt={slide.imageAlt}
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </div>
              )}
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Slide navigation dots */}
      </div>

      {/* Slide navigation dots — positioned relative to section */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20 pointer-events-auto">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-brand-red' : 'w-2 bg-brand-black/30 hover:bg-brand-black/50'}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
