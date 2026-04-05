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
    <div className="font-system bg-brand-white flex flex-col">
      <Hero />

      {/* ── SERVICES ── */}
      <section className="py-16 relative overflow-hidden bg-transparent snap-start">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">

          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black tracking-tight mb-3">
              Complete <HighlightText>Tally Services</HighlightText>
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Implementation, customization, support & cloud — everything under one roof.
            </p>
          </div>

          <FocusGrid>
            {previewServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-red/20 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-brand-red/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-brand-red" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-black mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">{service.desc}</p>
                </Link>
              );
            })}
          </FocusGrid>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-brand-black text-white hover:bg-brand-red transition-colors"
            >
              View All Services <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROOF OF EXISTENCE (ROTATING STATS) ── */}
      <ProofOfExistence />

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-transparent overflow-hidden relative snap-start">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-black tracking-tight mb-2">
              Trusted by <HighlightText color="#BDD5EA">150+</HighlightText> Businesses
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
      <section className="py-20 bg-transparent text-center relative overflow-hidden snap-start">
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
