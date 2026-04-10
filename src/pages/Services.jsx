import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data/services';
import HighlightText from '../components/HighlightText';

/* ---- FOCUS GRID ---- */
const FocusGrid = ({ children, cols = "lg:grid-cols-3" }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className={`grid md:grid-cols-2 ${cols} gap-5`}
      onMouseLeave={() => setHovered(null)}
    >
      {Array.isArray(children) ? children.map((child, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          style={{
            opacity: hovered !== null && hovered !== i ? 0.7 : 1,
            transform: hovered === i ? 'scale(1.04) translateY(-8px)' : hovered !== null && hovered !== i ? 'scale(0.97)' : 'scale(1)',
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

const Services = () => {
  return (
    <div className="min-h-screen bg-white font-system relative overflow-hidden">

      {/* ── HERO ── */}
      <section className="pt-32 pb-4 px-6 relative z-10 snap-start">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-brand-black leading-tight mb-3 tracking-tight">
              Complete <HighlightText>Tally Ecosystem</HighlightText> Under One Roof
            </h1>
            <p className="text-gray-500 font-medium text-sm max-w-xl mx-auto mb-6">
              As a certified 5-Star Tally Partner, we deliver implementation, customization, and support services to scale your operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-brand-red text-white hover:bg-brand-red-dark transition-colors text-sm"
            >
              Request a Demo <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>


      {/* ── SERVICES GRID (FOCUS EFFECT) ── */}
      <section className="py-6 relative z-10 snap-start">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-brand-black mb-2 tracking-tight">Our Core Services</h2>
            <p className="text-gray-400 text-sm">Hover any card to focus. Click to explore details.</p>
          </div>

          <FocusGrid>
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 flex flex-col p-6 h-full hover:shadow-lg hover:border-brand-red/20"
                >
                  <div className="w-12 h-12 bg-brand-red/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-red/10 transition-colors">
                    <Icon className="text-brand-red" size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-brand-black mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{service.desc}</p>

                  <ul className="space-y-2 mb-5 border-t border-gray-50 pt-4">
                    {service.details.slice(0, 3).map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                        <CheckCircle className="text-brand-gold flex-shrink-0" size={13} />
                        {detail}
                      </li>
                    ))}
                  </ul>

                </Link>
              );
            })}
          </FocusGrid>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-6 relative z-10 border-t border-gray-100 snap-start">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-brand-black mb-3 tracking-tight">Not sure which service fits?</h2>
          <p className="text-gray-500 text-sm mb-6">
            Talk to our certified Tally experts. We'll guide you to the right solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold bg-brand-gold text-brand-black hover:bg-brand-red hover:text-white transition-colors text-sm"
          >
            Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
