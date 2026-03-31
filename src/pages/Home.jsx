import Hero from '../Hero';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BadgeCheck, Clock4, Cpu, Zap, Quote, Star } from 'lucide-react';
import { services } from '../data/services';

const Home = () => {
  const previewServices = services.slice(0, 2);

  const highlights = [
    { icon: BadgeCheck, label: 'Certified 5-Star Tally Partner' },
    { icon: Clock4,     label: '24/7 AMC & TSS Support' },
    { icon: Cpu,        label: '500+ Custom TDLs Delivered' },
    { icon: Zap,        label: 'Fast Cloud Deployment on AWS' },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Director of Operations",
      company: "Sunrise Garments",
      quote: "Implementing TallyPrime with ABS Technologies revolutionized our multi-location data sync. We saved 20+ hours weekly on auditing and data validation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      impact: "70% Faster Audits"
    },
    {
      name: "Anshul Gupta",
      role: "CFO",
      company: "LogiTech Solutions",
      quote: "The custom TDL development for our complex inventory management was flawless. Highly recommended for any business with unique GST compliance needs.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      impact: "Zero Compliance Errors"
    },
    {
      name: "Meera Das",
      role: "Founder",
      company: "Organics India",
      quote: "Migrating to Tally on Cloud gave us the accessibility we needed for our hybrid team. 100% uptime and zero data worries ever since.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      impact: "100% Remote Access"
    }
  ];

  return (
    <div className="font-system bg-white">
      {/* HERO */}
      <Hero />

      {/* ── SERVICES SPLIT SECTION ── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-wider text-tally-teal bg-tally-teal/10 uppercase mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-tally-blue tracking-tight mb-4">
              Everything Your Business Needs <br className="hidden sm:block" /> Around Tally
            </h2>
            <p className="text-gray-500 text-lg">
              As a certified 5-Star Tally Partner, we provide end-to-end services to fully digitize your accounting and operations.
            </p>
          </div>

          {/* Split */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── LEFT: Tally Prime Style Card ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row lg:flex-col"
            >
              {/* Illustration Side */}
              <div className="bg-[#f0f9ff] p-8 flex flex-col items-center justify-center relative md:w-1/2 lg:w-full min-h-[300px]">
                <div className="absolute top-8 left-8 text-left z-10">
                  <img src="https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/tally-logo-black.svg" className="h-6 mb-1 opacity-80" alt="Tally" />
                  <p className="text-3xl font-bold text-tally-blue flex items-center gap-1">Prime <span className="text-sm font-medium opacity-60">7.0</span></p>
                </div>
                
                <div className="relative z-10 text-center mt-12 mb-8">
                   <h3 className="text-[40px] font-bold text-tally-blue leading-tight mb-4 font-system">Thoughtfully <br/> <span className="text-tally-teal">built</span></h3>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tally-teal/5 rounded-full blur-2xl" />
                <div className="absolute top-1/2 right-0 w-24 h-24 bg-tally-yellow/5 rounded-full blur-2xl" />
              </div>

              {/* Content Side */}
              <div className="p-8 md:w-1/2 lg:w-full bg-white">
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  ABS Technologies brings you the next generation of business management. 
                  Experience a software that is as intuitive as it is powerful.
                </p>

                <ul className="grid grid-cols-1 gap-4 mb-8">
                  {[
                    { label: 'TallyDrive for Secure Cloud Backup', icon: Zap },
                    { label: 'Connected Payments with PrimeBanking', icon: BadgeCheck },
                    { label: 'Instant Discovery with SmartFind', icon: Cpu },
                    { label: 'Automated Invoice-to-Payment Flow', icon: Clock4 }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-md bg-tally-blue/5 flex items-center justify-center group-hover:bg-tally-blue transition-colors">
                        <item.icon className="text-tally-blue group-hover:text-white transition-colors" size={12} />
                      </div>
                      <span className="text-gray-700 text-xs font-semibold">{item.label}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-tally-blue bg-tally-yellow hover:bg-[#e5a000] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-tally-yellow/20"
                >
                  Learn how to Upgrade <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* ── RIGHT: 2 Cards + Explore More ── */}
            <div className="flex flex-col gap-5">
              {previewServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="group bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-tally-teal/25 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:bg-tally-teal transition-colors`}>
                      <Icon className={`${service.iconColor} group-hover:text-white transition-colors`} size={22} />
                    </div>

                    <h3 className="text-xl font-bold text-tally-blue mb-2">{service.title}</h3>
                    <p className="text-gray-500 mb-5 text-sm leading-relaxed">{service.desc}</p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.details.slice(0, 3).map((d, j) => (
                        <span key={j} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium border border-gray-200">
                          {d}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-tally-teal group-hover:gap-3 transition-all"
                    >
                      Learn more <ArrowRight size={15} />
                    </Link>
                  </motion.div>
                );
              })}

              {/* Explore More card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-tally-blue rounded-2xl p-7 text-white flex flex-col sm:flex-row items-center justify-between gap-5"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-tally-yellow mb-1">And more…</p>
                  <p className="text-lg font-bold">TDL Development, Cloud Services, Mobile Apps & more</p>
                  <p className="text-white/60 text-sm mt-1">6 specialized Tally services, all under one roof.</p>
                </div>
                <Link
                  to="/services"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-tally-yellow text-tally-blue font-bold hover:bg-[#e5a000] transition-colors duration-300 shadow-md whitespace-nowrap"
                >
                  Explore All <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-16 bg-tally-blue relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/tally-logo-white.svg')] bg-[length:400px_auto] bg-center bg-no-repeat" />
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
          {[
            { metric: '150+', label: 'Happy Clients' },
            { metric: '12+',  label: 'Years Experience' },
            { metric: '500+', label: 'TDLs Developed' },
            { metric: '24/7', label: 'TSS & AMC Support' },
          ].map((item, i) => (
            <div key={i} className="text-white">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-tally-yellow">{item.metric}</h3>
              <p className="text-sm uppercase tracking-wider font-semibold opacity-70">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-wider text-tally-teal bg-tally-teal/10 uppercase mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-tally-blue tracking-tight mb-4">
              Trusted by 150+ Enterprises Across India
            </h2>
            <p className="text-gray-500 text-lg">
              Hear from the leaders who transformed their business with ABS Technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-tally-teal/20 transition-all duration-300"
              >
                <Quote className="absolute top-6 right-8 text-tally-teal/10" size={48} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-tally-yellow fill-tally-yellow" size={14} />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-tally-blue/10">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-tally-blue font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-400 font-medium">{t.role}, {t.company}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                   <span className="text-[10px] uppercase tracking-widest font-bold text-tally-teal bg-tally-teal/5 px-2 py-1 rounded">
                     Verified Impact
                   </span>
                   <span className="text-xs font-bold text-tally-blue">{t.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMC SECTION ── */}
      <section className="py-24 bg-gray-50 text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-wider text-tally-teal bg-tally-teal/10 uppercase mb-6">
            Tally AMC
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-tally-blue tracking-tight mb-6">
            Ensure Uninterrupted Operations with <br /> Priority Tally AMC
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Keep your business software updated, secure, and fully compliant. Our comprehensive Annual Maintenance ensures your data is never at risk and tax filings are completely effortless.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-tally-blue hover:bg-[#1a4a75] transition-all duration-300 shadow-md"
          >
            Renew TSS or Book AMC <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
