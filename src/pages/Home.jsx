import Hero from '../Hero';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BadgeCheck, Clock4, Cpu, Zap, Quote, Star, Cloud } from 'lucide-react';
import { services } from '../data/services';
import HighlightText from '../components/HighlightText';
import ProofOfExistence from '../components/ProofOfExistence';

/* ---- COUNTER ---- */
const Counter = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const ref = useRef(null);
  const motionVal = useMotionValue(from);
  const rounded = useTransform(motionVal, v => `${Math.round(v)}${suffix}`);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, to, { duration, ease: 'easeOut' });
      return controls.stop;
    }
  }, [motionVal, to, duration, inView]);

  useEffect(() => {
    const unsub = rounded.on('change', v => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsub;
  }, [rounded]);

  return <span ref={ref}>{`${from}${suffix}`}</span>;
};

/* ---- FOCUS GRID ---- */
const FocusGrid = ({ children }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      onMouseLeave={() => setHovered(null)}
    >
      {Array.isArray(children) ? children.map((child, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          className="transition-all duration-400"
          style={{
            opacity: hovered !== null && hovered !== i ? 0.7 : 1,
            transform: hovered === i ? 'scale(1.03) translateY(-6px)' : hovered !== null && hovered !== i ? 'scale(0.97)' : 'scale(1)',
            filter: 'none',
            zIndex: hovered === i ? 20 : 1,
            transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {child}
        </div>
      )) : children}
    </div>
  );
};

const Home = () => {
  const previewServices = services.slice(0, 3);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Director of Operations",
      company: "Sunrise Garments",
      quote: "TallyPrime implementation by ABS simplified our multi-branch accounting. We saved 20+ hours weekly.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
      impact: "70% Faster Audits"
    },
    {
      name: "Anshul Gupta",
      role: "CFO",
      company: "LogiTech Solutions",
      quote: "Custom TDL development for our inventory was flawless. Highly recommended for GST compliance.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anshul",
      impact: "Zero Errors"
    },
    {
      name: "Meera Das",
      role: "Founder",
      company: "Organics India",
      quote: "Tally on Cloud gave our remote team full access. 100% uptime since day one.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
      impact: "100% Access"
    }
  ];

  const targetRef = useRef(null);
  const { scrollYProgress: trustScroll } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scaleTrust = useTransform(trustScroll, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacityTrust = useTransform(trustScroll, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div className="font-system bg-white flex flex-col">
      <Hero />

      {/* ── SERVICES ── */}
      <section className="py-20 relative overflow-hidden bg-transparent snap-start">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">

          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black tracking-tight mb-4">
              Our <HighlightText>Core Expertise</HighlightText>
            </h2>
            <p className="text-gray-500 text-base font-medium">
              We provide end-to-end Tally solutions, from licensing and customization to cloud hosting and integration.
            </p>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {services
              .filter(s => ['tally-solutions', 'tdl-development', 'cloud-services', 'tally-mobile'].includes(s.slug))
              .map((service, i) => {
                const Icon = service.icon;
                const isEven = i % 2 === 0;

                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full"
                  >
                    <div className={`bg-[#ffffff] rounded-[2.5rem] shadow-sm border border-gray-100/80 hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
                      
                      {/* Content Block */}
                      <div className="flex-1 p-8 md:p-10 lg:p-14 flex flex-col relative z-20">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-14 h-14 ${service.iconBg || 'bg-brand-red/5'} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                            <Icon className={service.iconColor || 'text-brand-red'} size={28} />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest bg-brand-red/5 px-2.5 py-1 rounded-full mb-1 inline-block">
                              {service.badge || "Tally Expert"}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-extrabold text-brand-black tracking-tight group-hover:text-brand-red transition-colors">
                              {service.title === "Tally Mobile Solutions" ? "Web & Mobile" : 
                               service.title === "Tally Solutions" ? "Tally Prime" : 
                               service.slug === "tdl-development" ? "Customization" : 
                               service.title === "Cloud Services" ? "Tally Cloud" : service.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
                          {service.desc}
                        </p>

                        {/* Sub-services list */}
                        <div className="mb-8 p-6 bg-white/50 rounded-2xl border border-gray-100/50">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Zap size={12} className="text-brand-gold" /> Key Sub-Services
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                            {(service.subServices || []).slice(0, 4).map((sub, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 font-semibold group/sub hover:text-brand-red transition-colors">
                                <BadgeCheck size={14} className="text-brand-red/40 group-hover/sub:text-brand-red transition-colors shrink-0" />
                                <span className="line-clamp-1">{sub.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2.5 text-brand-red font-bold text-base group-hover:gap-4 transition-all mt-auto"
                        >
                          Explore Detailed Features
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Image Block */}
                      <div className="flex-1 flex items-center justify-center bg-transparent relative overflow-hidden">
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.5 }}
                          className="relative w-full h-full flex items-center justify-center p-6 md:p-10"
                        >
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-auto max-h-[420px] object-contain group-hover:scale-105 transition-transform duration-700 brightness-[1.08] contrast-[1.1]"
                          />
                        </motion.div>
                      </div>
                    </div>

                  </motion.div>

                );
              })}
          </div>

          <div className="text-center mt-24">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base bg-brand-black text-white hover:bg-brand-red hover:shadow-xl hover:shadow-brand-red/20 transition-all transform hover:-translate-y-1"
            >
              View All Services <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROOF OF EXISTENCE (ROTATING STATS) ── */}
      <ProofOfExistence />

      {/* ── TESTIMONIALS ── */}
      <section className="py-8 bg-transparent overflow-hidden relative snap-start">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-brand-black tracking-tight mb-2">
              Trusted by <HighlightText color="#f5b400">150+</HighlightText> Businesses
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Hear from leaders who streamlined operations with us.
            </p>
          </div>

          <FocusGrid>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-brand-gold fill-brand-gold" size={13} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic flex-grow">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-brand-black font-bold text-sm">{t.name}</h4>
                    <p className="text-[11px] text-gray-400">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </FocusGrid>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 bg-transparent text-center relative overflow-hidden snap-start">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight mb-4">
            Keep your Tally updated & compliant
          </h2>
          <p className="text-gray-600 text-sm mb-8 max-w-xl mx-auto font-medium leading-relaxed">
            Our AMC & TSS coverage ensures uninterrupted operations, priority support, and regular version upgrades.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-brand-red hover:bg-brand-red-dark shadow-lg shadow-brand-red/20 transition-all transform hover:-translate-y-1 text-sm"
          >
            Renew TSS / Book AMC <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
