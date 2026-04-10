import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { subServiceDetails, slugify } from '../data/subServiceDetails';
import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, ChevronRight, CheckCircle } from 'lucide-react';
import HighlightText from '../components/HighlightText';

const SubServiceDetail = () => {
  const { slug, subSlug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center font-system">
      <div className="text-center">
        <p className="text-4xl mb-3">🔍</p>
        <p className="text-xl font-bold text-brand-black mb-3">Service not found.</p>
        <Link to="/services" className="text-brand-red hover:underline font-bold text-sm">← Back to Services</Link>
      </div>
    </div>
  );

  const subService = service.subServices?.find(s => slugify(s.name) === subSlug);

  if (!subService) return (
    <div className="min-h-screen flex items-center justify-center font-system">
      <div className="text-center">
        <p className="text-4xl mb-3">🔍</p>
        <p className="text-xl font-bold text-brand-black mb-3">Sub-service not found.</p>
        <Link to={`/services/${slug}`} className="text-brand-red hover:underline font-bold text-sm">← Back to {service.title}</Link>
      </div>
    </div>
  );

  const details = subServiceDetails[slug]?.[subSlug] || {};
  const features = details.features || [];
  const highlights = details.highlights || [];

  return (
    <div className="min-h-screen bg-white font-system relative overflow-hidden">

      {/* ── HERO ── */}
      <section className="pt-32 pb-12 px-6 relative z-10 snap-start">
        <div className="max-w-[1240px] mx-auto">
          {/* Content sits directly on page background */}
          
          {/* Breadcrumb Section */}
          <nav className="flex items-center gap-1.5 text-gray-400 text-[11px] mb-8 font-bold tracking-wider uppercase flex-wrap">
            <Link to="/" className="hover:text-brand-black transition">Home</Link>
            <ChevronRight size={10} />
            <Link to="/services" className="hover:text-brand-black transition">Services</Link>
            <ChevronRight size={10} />
            <Link to={`/services/${slug}`} className="hover:text-brand-black transition">{service.title}</Link>
            <ChevronRight size={10} />
            <span className="text-brand-red">{subService.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 bg-brand-red/5 text-brand-red text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                {service.title} Sub-Service
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black leading-tight mb-6 tracking-tight">
                <HighlightText>{subService.name}</HighlightText>
              </h1>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8 max-w-xl font-medium">
                {subService.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-brand-red text-white hover:bg-brand-red-dark transition-all shadow-lg shadow-brand-red/20 text-sm">
                  Request Demo <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-white text-brand-black border border-gray-200 hover:border-brand-gold hover:shadow-md transition-all text-sm">
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
                src={service.subServiceImage || service.heroImage}
                alt={subService.name}
                className="w-full h-auto max-h-[480px] object-contain brightness-[1.08] contrast-[1.1]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      {highlights.length > 0 && (
        <section className="py-8 bg-transparent border-b border-gray-100/50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-3 gap-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl font-bold text-brand-red mb-1">{h.stat}</p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{h.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── KEY FEATURES ── */}
      {features.length > 0 && (
        <section className="py-12 bg-transparent relative z-10">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-black mb-2">Key Features</h2>
              <p className="text-gray-400 text-sm">What this module delivers for your business</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-[#fafafa] px-5 py-4 rounded-xl border border-gray-100 hover:border-brand-red/20 hover:bg-white transition-all"
                >
                  <CheckCircle size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-brand-black font-semibold text-sm">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BACK TO PARENT + CTA ── */}
      <section className="py-10 bg-transparent border-t border-gray-100/50 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>

              <Link
                to={`/services/${slug}`}
                className="text-brand-black font-bold hover:text-brand-red transition text-sm flex items-center gap-2"
              >
                ← {service.title}
                <span className="text-gray-400 font-normal">— View all sub-services</span>
              </Link>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold bg-brand-red text-white hover:bg-brand-red-dark transition-colors text-sm"
            >
              Get Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SubServiceDetail;
