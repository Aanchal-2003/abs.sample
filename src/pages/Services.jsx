import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="min-h-screen bg-white font-system">

      {/* ── HERO ── */}
      <section className="bg-tally-blue pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tally-teal/20 to-transparent" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-tally-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-tally-yellow/5 rounded-full blur-3xl" />

        <div className="max-w-[1240px] mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded text-xs font-bold tracking-wider bg-tally-yellow text-tally-blue uppercase mb-6">
              All Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Complete Tally Ecosystem <br />
              <span className="text-tally-yellow">Under One Roof</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              As a certified 5-Star Tally Partner, ABS Technologies delivers every service you need
              to implement, customize, and scale your Tally operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold bg-tally-yellow text-tally-blue hover:bg-[#e5a000] transition shadow-md"
              >
                Request a Demo <ArrowRight size={18} />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '150+', label: 'Clients Served' },
            { num: '500+', label: 'TDLs Delivered' },
            { num: '12+',  label: 'Years Experience' },
            { num: '98%',  label: 'Client Retention' },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-tally-blue">{s.num}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-tally-blue mb-3">Our Tally Services</h2>
            <p className="text-gray-500 text-lg">Click any service to explore full details</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-tally-teal/25 transition-all duration-300 flex flex-col p-7"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:bg-tally-teal transition-colors`}>
                    <Icon className={`${service.iconColor} group-hover:text-white transition-colors`} size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-tally-blue mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{service.desc}</p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {service.details.slice(0, 3).map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="text-tally-teal flex-shrink-0" size={13} />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-tally-teal group-hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight size={15} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-tally-blue mb-4">Not sure which service you need?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Talk to our certified Tally experts — we'll guide you to the right solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-tally-blue text-white hover:bg-[#1a4a75] transition shadow-md"
          >
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;