import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { serviceSections } from '../data/serviceSections';
import { subServiceDetails, slugify } from '../data/subServiceDetails';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { CheckCircle, ArrowRight, PhoneCall, ChevronRight } from 'lucide-react';
import HighlightText from '../components/HighlightText';

/* ---- FOCUS GRID ---- */
const FocusGrid = ({ children, cols = "lg:grid-cols-3" }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className={`grid md:grid-cols-2 ${cols} gap-4`} onMouseLeave={() => setHovered(null)}>
      {Array.isArray(children) ? children.map((child, i) => (
        <div key={i} onMouseEnter={() => setHovered(i)}
          style={{
            opacity: hovered !== null && hovered !== i ? 0.7 : 1,
            transform: hovered === i ? 'scale(1.04) translateY(-6px)' : hovered !== null && hovered !== i ? 'scale(0.97)' : 'scale(1)',
            filter: 'none',
            zIndex: hovered === i ? 20 : 1,
            transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
          }}
        >{child}</div>
      )) : children}
    </div>
  );
};


const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const sections = serviceSections[slug] || [];

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center font-system">
      <div className="text-center">
        <p className="text-4xl mb-3">🔍</p>
        <p className="text-xl font-bold text-brand-black mb-3">Service not found.</p>
        <Link to="/services" className="text-brand-red hover:underline font-bold text-sm">← Back to Services</Link>
      </div>
    </div>
  );

  const keyFeatures = service.keyFeatures || [];

  return (
    <div className="min-h-screen bg-white font-system relative overflow-hidden">

      {/* ── HERO ── */}
      <section className="pt-[72px] pb-2 px-6 relative z-10 snap-start">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb Section */}
          <nav className="flex items-center gap-1.5 text-gray-400 text-[11px] mb-2 font-bold tracking-wider uppercase">
            <Link to="/" className="hover:text-brand-black transition">Home</Link>
            <ChevronRight size={10} />
            <Link to="/services" className="hover:text-brand-black transition">Services</Link>
            <ChevronRight size={10} />
            <span className="text-brand-red">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-6 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 bg-brand-red/5 text-brand-red text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                {service.badge || "Service Detail"}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-brand-black leading-tight mb-3 tracking-tight">
                <HighlightText>{service.title}</HighlightText>
              </h1>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 font-medium">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-brand-red text-white hover:bg-brand-red-dark transition-all shadow-lg shadow-brand-red/20 text-sm">
                  Request Demo <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-white text-brand-black border border-gray-200 hover:border-brand-gold hover:shadow-md transition-all text-sm">
                  <PhoneCall size={15} className="text-brand-gold" /> Talk to Expert
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-auto max-h-[260px] object-contain brightness-[1.08] contrast-[1.1]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES (FOCUS GRID) ── */}
      <section className="py-5 bg-transparent relative z-10 snap-start">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-brand-black mb-1">What's Included</h2>
            <p className="text-gray-400 text-sm">Core capabilities in our {service.title} module</p>
          </div>

          <FocusGrid>
            {keyFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 bg-[#fafafa] px-5 py-4 rounded-xl border border-gray-100 hover:border-brand-red/20 hover:bg-white transition-all"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                <span className="text-brand-black font-semibold text-sm">{f}</span>
              </motion.div>
            ))}
          </FocusGrid>
        </div>
      </section>

      {/* ── SUB-SERVICES ── */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="py-5 relative z-10 bg-transparent snap-start">
          <div className="max-w-[1200px] mx-auto px-6">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
              <div>

                <h2 className="text-2xl md:text-3xl font-bold text-brand-black leading-tight">Explore Sub-Services</h2>
              </div>
              <p className="text-gray-400 text-xs max-w-[260px] leading-relaxed">
                Click any card to view full details, features &amp; capabilities.
              </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.subServices.map((sub, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/services/${slug}/${slugify(sub.name)}`}
                    className="group flex flex-col h-full rounded-xl border border-gray-100 bg-[#fafafa] hover:bg-white hover:shadow-md transition-all duration-300 p-5 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-red origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-r-sm" />

                    {/* Title + arrow */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-bold text-brand-black group-hover:text-brand-red transition-colors leading-snug">
                        {sub.name}
                      </h3>
                      <div className="w-6 h-6 rounded-full bg-brand-red/8 group-hover:bg-brand-red flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-0.5">
                        <ArrowRight size={10} className="text-brand-red group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-400 leading-relaxed font-medium flex-grow">
                      {sub.desc}
                    </p>

                    {/* Bottom reveal */}
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── DETAILED SECTIONS (FOCUS GRID) ── */}
      {sections.length > 0 && (
        <section className="py-5 bg-transparent relative z-10 border-t border-gray-100/30 snap-start">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-brand-black mb-1">Detailed Scope</h2>
              <p className="text-gray-400 text-sm">Full breakdown of deliverables</p>
            </div>

            <FocusGrid>
              {sections.map((sec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                >
                  <div className="p-5 pb-3">
                    <h3 className="text-base font-bold text-brand-black">{sec.section}</h3>
                  </div>
                  <div className="p-5 pt-0 border-t border-gray-50 mt-1 flex-grow">
                    <ul className="space-y-2 mt-3">
                      {sec.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-500 font-medium">
                          <span className="text-brand-red text-[10px] mt-0.5">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </FocusGrid>
          </div>
        </section>
      )}


      {/* ── CTA ── */}
      <section className="py-5 bg-transparent relative z-10 snap-start">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-brand-black mb-2 tracking-tight">
            Ready to deploy {service.title}?
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Our experts will audit your workflow and customize the right solution.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold bg-brand-red text-white hover:bg-brand-red-dark transition-colors text-sm mb-2">
            Get Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
