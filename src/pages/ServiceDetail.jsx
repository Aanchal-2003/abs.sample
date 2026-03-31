import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { serviceSections } from '../data/serviceSections';
import { useRef, useEffect } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'motion/react';
import { CheckCircle, ArrowRight, PhoneCall, ArrowLeft, ChevronRight } from 'lucide-react';

/* -------------------- COUNTER -------------------- */
const Counter = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const ref = useRef(null);
  const motionVal = useMotionValue(from);
  const rounded = useTransform(motionVal, v => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    const controls = animate(motionVal, to, { duration, ease: 'easeOut' });
    return controls.stop;
  }, [motionVal, to, duration]);

  useEffect(() => {
    const unsub = rounded.on('change', v => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsub;
  }, [rounded]);

  return <span ref={ref}>{`${from}${suffix}`}</span>;
};

/* -------------------- PER-SERVICE CONFIG -------------------- */
const serviceConfig = {
  "tally-solutions": {
    heroImg: "https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/login-popup-prime.jpg",
    badge: "Core Tally Services",
    accentColor: "tally-teal",
    emoji: "🏦",
    keyFeatures: [
      "Authorized TallyPrime Licensing",
      "GST Setup & Compliance Filing",
      "Multi-user Tally Installation",
      "Data Migration & Validation",
      "Invoice & Voucher Customization",
      "Remote Access Configuration"
    ]
  },
  "tally-integration": {
    heroImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    badge: "API & Data Integration",
    accentColor: "tally-teal",
    emoji: "🔗",
    keyFeatures: [
      "Bi-directional Tally API Sync",
      "eCommerce Platform Integration",
      "Real-Time Data Extraction",
      "Legacy ERP to Tally Migration",
      "Custom Webhook Development",
      "Payment Gateway Connectivity"
    ]
  },
  "tdl-development": {
    heroImg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    badge: "TDL Customization",
    accentColor: "tally-blue",
    emoji: "⚙️",
    keyFeatures: [
      "Custom Report & Dashboard Design",
      "Invoice & Voucher Format Control",
      "Godown & User-Level Security",
      "Automated Workflow Scripts",
      "E-Way Bill & Transport Modules",
      "Advanced Business Logic"
    ]
  },
  "annual-maintenance": {
    heroImg: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=900&q=80",
    badge: "AMC & TSS Support",
    accentColor: "tally-teal",
    emoji: "🛠️",
    keyFeatures: [
      "TSS (Tally Software Services) Renewal",
      "Data Corruption Repair & Splitting",
      "24/7 Remote Desktop Support",
      "Tally Version Upgrades",
      "Multi-user Access Audits",
      "Performance Optimization"
    ]
  },
  "cloud-services": {
    heroImg: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    badge: "Tally on Cloud",
    accentColor: "tally-blue",
    emoji: "☁️",
    keyFeatures: [
      "Tally Virtual User (TVU) Setup",
      "AWS / Azure Private Hosting",
      "Automated Daily Remote Backup",
      "Mac & Windows Cross Platform",
      "TallyServer 9 Deployment",
      "99.9% Uptime SLA Guarantee"
    ]
  },
  "tally-mobile": {
    heroImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    badge: "Mobile & Web Apps",
    accentColor: "tally-teal",
    emoji: "📱",
    keyFeatures: [
      "Sales Force Automation (SFA)",
      "Offline + Online Tally Sync",
      "Live Stock & Outstanding Reports",
      "B2B Order Management Portal",
      "Director MIS Dashboard App",
      "Beat Routing & GPS Tracking"
    ]
  }
};

/* -------------------- MAIN -------------------- */
const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const sections = serviceSections[slug] || [];
  const config = serviceConfig[slug] || serviceConfig["tally-solutions"];
  const serviceIndex = services.findIndex(s => s.slug === slug);
  const nextService = services[(serviceIndex + 1) % services.length];

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center font-system">
      <div className="text-center">
        <p className="text-6xl mb-4">🔍</p>
        <p className="text-2xl font-bold text-tally-blue mb-4">Service not found.</p>
        <Link to="/services" className="text-tally-teal hover:underline font-medium">← Back to Services</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-system">

      {/* ─── HERO BANNER ─── */}
      <section className="bg-tally-blue pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tally-teal/15 to-transparent" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-tally-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-tally-teal/10 rounded-full blur-3xl" />

        <div className="max-w-[1240px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-8 font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <ChevronRight size={12} />
            <span className="text-tally-yellow">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl">{config.emoji}</span>
                <span className="inline-block py-1.5 px-4 rounded-full text-xs font-bold tracking-wider text-tally-blue bg-tally-yellow uppercase">
                  {config.badge}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                {service.title}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold bg-tally-blue text-white hover:bg-[#1a4a75] transition shadow-md">
                  Request a Demo <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold bg-tally-yellow text-tally-blue hover:bg-[#e5a000] transition">
                  <PhoneCall size={18} /> Talk to Expert
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <img
                  src={config.heroImg}
                  alt={service.title}
                  className="w-full h-auto object-contain max-h-72"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-tally-teal/10 flex items-center justify-center text-xl">
                  {config.emoji}
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">ABS Technologies</p>
                  <p className="text-sm font-bold text-tally-blue">5-Star Tally Partner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── KEY FEATURES ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-wider text-tally-teal bg-tally-teal/10 uppercase mb-4">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-tally-blue mb-3">Key Features</h2>
            <p className="text-gray-500 text-lg">Everything covered in our {service.title} service</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.keyFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4 bg-white px-5 py-4 rounded-xl shadow-sm border border-gray-100 hover:border-tally-teal/40 hover:shadow-md transition group"
              >
                <div className="w-9 h-9 rounded-lg bg-tally-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-tally-teal transition-colors">
                  <CheckCircle className="text-tally-teal group-hover:text-white" size={18} />
                </div>
                <span className="text-tally-blue font-semibold text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE SECTIONS (from data) ─── */}
      {sections.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-wider text-tally-blue bg-tally-blue/10 uppercase mb-4">
                Detailed Breakdown
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-tally-blue mb-3">What We Offer</h2>
              <p className="text-gray-500 text-lg">Full scope of our {service.title} offerings</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((sec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-tally-teal/20 transition-all duration-300 flex flex-col"
                >
                  {/* Card Section Header removed image, replaced with icon container */}
                  <div className="p-6 pb-0">
                    <div className="w-12 h-12 rounded-xl bg-tally-blue/5 flex items-center justify-center text-3xl mb-4 group-hover:bg-tally-teal transition-colors">
                      <span className="group-hover:scale-110 transition-transform">{sec.icon}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-tally-blue mb-4">{sec.section}</h3>
                    <ul className="space-y-2.5 flex-grow">
                      {sec.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <span className="text-tally-teal mt-0.5 flex-shrink-0 font-bold">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── STATS STRIP ─── */}
      <section className="py-14 bg-tally-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tally-teal/10 to-transparent" />
        <div className="max-w-[1100px] mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {[
            { metric: 150, suffix: '+', label: 'Happy Clients' },
            { metric: 12, suffix: '+', label: 'Years Experience' },
            { metric: 500, suffix: '+', label: 'TDLs Delivered' },
            { metric: 98, suffix: '%', label: 'Client Retention' }
          ].map((item, i) => (
            <div key={i} className="text-white">
              <h3 className="text-4xl font-bold text-tally-yellow mb-1">
                <Counter to={item.metric} suffix={item.suffix} duration={2} />
              </h3>
              <p className="text-xs uppercase tracking-widest opacity-70 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-wider text-tally-teal bg-tally-teal/10 uppercase mb-5">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-tally-blue mb-4">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Our certified Tally experts are ready to help you implement, customize, and scale. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-tally-blue text-white hover:bg-[#1a4a75] shadow-md transition">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-tally-yellow text-tally-blue hover:bg-[#e5a000] transition">
              <ArrowLeft size={18} /> All Services
            </Link>
          </div>

          {/* Next service suggestion */}
          {nextService && (
            <div className="border-t border-gray-200 pt-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">Also explore</p>
              <Link
                to={`/services/${nextService.slug}`}
                className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-tally-teal/30 transition group"
              >
                <span className="text-2xl">
                  {serviceConfig[nextService.slug]?.emoji || '🔧'}
                </span>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-medium">Next Service</p>
                  <p className="text-tally-blue font-bold group-hover:text-tally-teal transition">{nextService.title}</p>
                </div>
                <ChevronRight className="text-gray-300 group-hover:text-tally-teal ml-auto transition" size={20} />
              </Link>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;