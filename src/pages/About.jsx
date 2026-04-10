import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Target, Eye, Zap, Users, Shield,
  Smartphone, Building2, TrendingUp, Clock
} from 'lucide-react';
import HighlightText from '../components/HighlightText';

/* ──────────────────────────────────────────────
   JOURNEY TIMELINE — S-Curve with scroll-draw
   ────────────────────────────────────────────── */
const JourneyCard = ({ milestone, index, isLeft, scrollYProgress, total }) => {
  // Sync each card with its part of the scroll progress
  const startAt = index / total;
  const endAt = (index + 1) / total;
  
  // Use scroll progress for opacity and scale
  const opacity = useTransform(scrollYProgress, [startAt - 0.1, startAt + 0.05, endAt + 0.1, endAt + 0.25], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [startAt - 0.1, startAt + 0.05, endAt + 0.1, endAt + 0.25], [0.8, 1, 1, 0.8]);
  const xOffset = useTransform(scrollYProgress, [startAt - 0.1, startAt + 0.05, endAt + 0.1, endAt + 0.25], [isLeft ? -40 : 40, 0, 0, isLeft ? -40 : 40]);

  return (
    <motion.div
      style={{ 
        opacity, 
        scale, 
        x: xOffset,
        top: `${index * 160 + 30}px` 
      }}
      className={`absolute w-[42%] ${isLeft ? 'left-0' : 'right-0'}`}
    >
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all group">
        <span className="inline-block bg-brand-gold text-brand-black text-xs font-black px-3 py-1 rounded-full mb-3 shadow-sm group-hover:scale-110 transition-transform">
          {milestone.year}
        </span>
        <h4 className="font-bold text-base text-brand-black mb-1 group-hover:text-brand-gold transition-colors">{milestone.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{milestone.desc}</p>
      </div>
    </motion.div>
  );
};

const JourneyTimeline = ({ milestones }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const totalHeight = milestones.length * 160 + 80;

  // Build S-curve path
  const buildSPath = () => {
    const midX = 250; // center of viewBox (500 wide)
    const amplitude = 140; // how far left/right the S swings
    let d = `M ${midX},0`;

    milestones.forEach((_, i) => {
      const yStart = i * 160;
      const yEnd = (i + 1) * 160;
      const yMid = (yStart + yEnd) / 2;
      const isLeft = i % 2 === 0;
      const xTarget = isLeft ? midX - amplitude : midX + amplitude;

      d += ` C ${midX},${yStart + 40} ${xTarget},${yMid - 40} ${xTarget},${yMid}`;
      d += ` C ${xTarget},${yMid + 40} ${midX},${yEnd - 40} ${midX},${yEnd}`;
    });

    return d;
  };

  return (
    <section className="mb-6 snap-start">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-brand-black tracking-tight">
          Our <HighlightText color="#f5b400">Journey</HighlightText>
        </h2>
        <p className="text-gray-400 text-sm mt-2">Scroll down to follow our story</p>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto max-w-[700px]"
        style={{ height: `${totalHeight}px` }}
      >
        {/* S-Curve SVG */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-0 w-full pointer-events-none z-0"
          viewBox={`0 0 500 ${totalHeight}`}
          preserveAspectRatio="none"
          style={{ height: `${totalHeight}px` }}
          fill="none"
        >
          {/* Background track */}
          <path
            d={buildSPath()}
            stroke="#e5e7eb"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Animated fill */}
          <motion.path
            d={buildSPath()}
            stroke="#f5b400"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength }}
          />

          {/* Year dots on the curve */}
          {milestones.map((m, i) => {
            const midY = i * 160 + 80;
            const isLeft = i % 2 === 0;
            const amplitude = 140;
            const midX = 250;
            const cx = isLeft ? midX - amplitude : midX + amplitude;

            return (
              <motion.circle
                key={m.year}
                cx={cx}
                cy={midY}
                r="8"
                fill="#f5b400"
                stroke="white"
                strokeWidth="3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />
            );
          })}
        </svg>

        {/* Cards */}
        {milestones.map((m, i) => (
          <JourneyCard
            key={m.year}
            milestone={m}
            index={i}
            isLeft={i % 2 !== 0}
            scrollYProgress={scrollYProgress}
            total={milestones.length}
          />
        ))}
      </div>
    </section>
  );
};

const About = () => {
  const milestones = [
    { year: '2014', title: 'Founded', desc: 'Started with a vision to simplify B2B operations for Indian businesses.' },
    { year: '2016', title: 'First SFA Module', desc: 'Deployed our first Sales Force Automation for a manufacturing company.' },
    { year: '2018', title: 'Tally Integration', desc: 'Built real-time Tally integration — the first for field sales tools in India.' },
    { year: '2020', title: '100+ Clients', desc: 'Crossed 100 enterprise clients across manufacturing & FMCG sectors.' },
    { year: '2023', title: 'Tally Cloud', desc: 'Expanded to Tally Cloud infrastructure & custom TDL deployments.' },
    { year: '2025', title: '150+ Enterprises', desc: 'Serving 150+ businesses with 10,000+ daily active users.' },
    { year: '2026', title: 'Web & App Services', desc: 'Launched full-scale web and mobile application development for enterprise digital transformation.' },
  ];

  const companyStats = [
    { num: '150+', label: 'Clients', icon: Building2 },
    { num: '10K+', label: 'Daily Users', icon: Users },
    { num: '12+', label: 'Years', icon: Clock },
    { num: '98%', label: 'Retention', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-white pt-[72px] pb-6 font-system relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* ── HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 snap-start"
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-brand-black tracking-tight">
            Building Smarter Businesses with{' '}
            <HighlightText>Tally Solutions</HighlightText>
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-2xl mx-auto">
            We specialize in Tally implementation, custom TDL development, and seamless integrations — helping businesses modernize their accounting efficiently.
          </p>
        </motion.div>

        {/* ── STATS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 snap-start">
          {companyStats.map(({ num, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-brand-red/5 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-brand-red" />
              </div>
              <p className="text-2xl font-black text-brand-black mb-0.5">{num}</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* ── MISSION / VISION ── */}
        <div className="grid md:grid-cols-2 gap-5 mb-6 snap-start">
          <div className="p-7 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="w-11 h-11 rounded-xl bg-brand-black flex items-center justify-center mb-4">
              <Target className="text-brand-gold w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-brand-black">Our Mission</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To create simple, powerful business software that integrates seamlessly with your existing systems — helping you scale without friction.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="w-11 h-11 rounded-xl bg-brand-red flex items-center justify-center mb-4">
              <Eye className="text-white w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-brand-black">Our Vision</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To become India's most trusted Tally solutions partner, enabling connected accounting for businesses of all sizes.
            </p>
          </div>
        </div>

        {/* ── JOURNEY (S-Curve Timeline) ── */}
        <JourneyTimeline milestones={milestones} />

        {/* ── VALUES ── */}
        <div className="mb-6 snap-start">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-black tracking-tight">Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Zap, title: 'Simplicity', desc: 'Easy enough for anyone to use instantly.' },
              { icon: Shield, title: 'Security', desc: 'Enterprise-grade protection for your data.' },
              { icon: Smartphone, title: 'Mobile-first', desc: 'Built for field teams and real-world use.' },
              { icon: Users, title: 'Support', desc: 'We stay with you beyond deployment.' },
              { icon: Target, title: 'Integration', desc: 'We enhance your systems, not replace them.' },
              { icon: Eye, title: 'Transparency', desc: 'Clear visibility across all levels.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-red/5 flex items-center justify-center mb-3">
                  <Icon className="text-brand-red w-4 h-4" />
                </div>
                <h4 className="font-bold text-base text-brand-black mb-1">{title}</h4>
                <p className="text-gray-500 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── INDUSTRIES (Dark Strip) ── */}
        <div className="bg-brand-black rounded-2xl p-6 md:p-8 text-center text-white mb-6 snap-start">
          <h2 className="text-2xl font-bold mb-3 tracking-tight">Industries We Serve</h2>
          <p className="text-white/60 text-sm mb-6 max-w-xl mx-auto">
            From manufacturing to FMCG — we build the technology bridges that keep enterprises moving.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Manufacturing', 'FMCG', 'Pharma', 'Electronics',
              'Textiles', 'Auto Parts', 'Food & Beverage', 'Agriculture'
            ].map((ind) => (
              <span key={ind} className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold border border-white/5 hover:bg-brand-red hover:border-brand-red transition-colors cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center snap-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-brand-black tracking-tight">
            Ready to <HighlightText>get started</HighlightText>?
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Speak to our experts and get a tailored roadmap for your business.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-brand-red-dark transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
