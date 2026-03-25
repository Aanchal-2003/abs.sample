import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { ArrowRight, Monitor, RefreshCw, Database, TrendingUp } from 'lucide-react';
import { BrandSwoosh } from './components/Illustrations';
import { useEffect, useRef } from 'react';

// Animated counter component
const Counter = ({ from = 0, to, duration = 2, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const motionVal = useMotionValue(from);
  const rounded = useTransform(motionVal, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    const controls = animate(motionVal, to, { duration, ease: 'easeOut' });
    return controls.stop;
  }, [motionVal, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsubscribe;
  }, [rounded]);

  return <span ref={ref}>{`${prefix}${from}${suffix}`}</span>;
};

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
  };
  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 60, damping: 15 } },
  };

  const stats = [
    { value: 150, suffix: '+', label: 'Enterprise Clients', icon: Monitor, color: '#E5322E' },
    { value: 500, suffix: '+', label: 'Integrations Delivered', icon: RefreshCw, color: '#F58220' },
    { value: 12, suffix: '+', label: 'Years in Business', icon: Database, color: '#FFC20E' },
    { value: 98, suffix: '%', label: 'Client Retention', icon: TrendingUp, color: '#E5322E' },
  ];

  const integrations = [
    { name: 'Tally', desc: 'ERP', color: '#E5322E' },
    { name: 'SAP', desc: 'Enterprise', color: '#F58220' },
    { name: 'Zoho', desc: 'CRM Suite', color: '#FFC20E' },
    { name: 'IndiaMart', desc: 'Marketplace', color: '#1A1A1A' },
  ];

  return (
    <section className="relative min-h-screen w-full flex justify-center items-start overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover [transform:scaleY(-1)] [filter:hue-rotate(-60deg)_saturate(1.4)_brightness(1.05)]">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5322E]/15 via-[#F58220]/10 to-[#FFC20E]/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0)] from-[26.416%] to-white to-[66.943%]" />
      </div>

      {/* Content */}
      <motion.div variants={container} initial="hidden" animate="visible"
        className="relative z-10 w-full max-w-[1200px] flex flex-col items-center text-center gap-5 pt-[100px] md:pt-[150px] px-6 pb-16">

        {/* Logo Mark */}
        <motion.div variants={fadeScale} className="mb-1">
          <img src="/logo.jpeg" alt="ABS Infotech" className="h-14 md:h-18 w-auto" />
        </motion.div>

        {/* Tag */}
        <motion.div variants={item}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red text-sm font-geist font-medium">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-brand-red"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          Digital Transformation for Distribution Businesses
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={item}
          className="font-geist font-semibold text-[32px] md:text-[52px] lg:text-[66px] leading-[1.1] tracking-[-0.03em] text-brand-black max-w-[900px]">
          Smarter Sales & Distribution{' '}
          <motion.span
            className="font-serif italic text-[40px] md:text-[64px] lg:text-[80px] text-brand-red inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >Platforms</motion.span>
          {' '}for Growth-Ready{' '}
          <motion.span
            className="font-serif italic text-[40px] md:text-[64px] lg:text-[80px] text-brand-orange inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >Operations</motion.span>
        </motion.h1>

        {/* Brand Swoosh */}
        <motion.div variants={item} className="w-full max-w-[380px] -mt-1 mb-0">
          <BrandSwoosh />
        </motion.div>

        {/* Subtext */}
        <motion.p variants={item}
          className="font-geist text-[15px] md:text-[17px] text-[#373a46]/70 max-w-[640px] leading-relaxed">
          ABS Infotech delivers enterprise-grade SFA, CRM, and Distributor Management solutions
          integrated with Tally, SAP, and Zoho, helping you improve execution, visibility, and
          decision-making without disrupting existing workflows.
        </motion.p>

        {/* Stats Bar */}
        <motion.div variants={item}
          className="w-full max-w-[820px] grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 80 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl px-4 py-5 flex flex-col items-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.04)] group cursor-default overflow-hidden"
            >
              {/* Colored top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: stat.color }} />

              <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: `${stat.color}10` }}>
                <stat.icon className="w-4.5 h-4.5" style={{ color: stat.color }} />
              </div>

              <span className="font-geist font-bold text-[28px] md:text-[32px] tracking-tight text-brand-black leading-none">
                <Counter from={0} to={stat.value} duration={2.2} suffix={stat.suffix} />
              </span>

              <span className="font-geist text-[11px] md:text-[12px] text-gray-400 font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Row */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mt-5">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 bg-brand-black text-white font-geist font-medium px-8 py-4 rounded-full shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] transition-colors group">
            Schedule a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="/services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-brand-black font-geist font-medium px-8 py-4 rounded-full shadow-sm transition-colors hover:border-gray-300">
            View Services
          </motion.a>
        </motion.div>

        {/* Integration Strip */}
        <motion.div variants={item} className="w-full max-w-[600px] mt-8">
          <p className="text-[10px] font-geist text-gray-400 uppercase tracking-[0.2em] mb-4">We integrate with your existing systems</p>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {integrations.map(({ name, desc, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="flex flex-col items-center gap-1 cursor-default"
              >
                <span className="font-geist font-bold text-[14px] md:text-[16px] tracking-wide" style={{ color }}>
                  {name}
                </span>
                <span className="font-geist text-[9px] text-gray-400 uppercase tracking-widest">{desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
