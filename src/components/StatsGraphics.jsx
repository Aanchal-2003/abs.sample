import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Network, Search, Globe, ArrowRight, TrendingUp, Clock, DollarSign, Users, BarChart3, ShoppingCart, Smartphone, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandSwoosh } from './Illustrations';

const AnimatedCounter = ({ value, label, prefix = '', suffix = '', icon: Icon, desc }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const end = value;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-5 sm:p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
      {Icon && <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-brand-orange mb-3 sm:mb-4" />}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="text-3xl sm:text-4xl md:text-5xl font-geist font-bold text-brand-black mb-1 sm:mb-2 flex items-baseline gap-0.5"
      >
        <span className="text-xl sm:text-2xl text-brand-orange">{prefix}</span>
        {count.toLocaleString()}
        <span className="text-xl sm:text-2xl text-brand-red">{suffix}</span>
      </motion.div>
      <div className="font-geist text-xs sm:text-sm font-medium text-brand-black text-center">{label}</div>
      {desc && <p className="font-geist text-[10px] sm:text-xs text-gray-400 text-center mt-1">{desc}</p>}
    </div>
  );
};

const StatsGraphics = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const stats = [
    { value: 40, label: 'Cost Reduction', suffix: '%', icon: DollarSign, desc: 'Average operational cost savings' },
    { value: 500, label: 'B2B Companies', suffix: '+', icon: Users, desc: 'Enterprise clients served' },
    { value: 3, label: 'Productivity Increase', suffix: 'x', icon: TrendingUp, desc: 'Average field team output' },
    { value: 24, label: 'Sync Speed', prefix: '<', suffix: 'ms', icon: Clock, desc: 'Real-time ERP data sync' },
  ];

  const detailedMetrics = [
    { icon: ShoppingCart, label: 'Orders Processed', value: '2M+', change: '+34% YoY', desc: 'Monthly across all client platforms' },
    { icon: Smartphone, label: 'Mobile App Users', value: '10K+', change: '+52% YoY', desc: 'Daily active field reps and managers' },
    { icon: BarChart3, label: 'Reports Generated', value: '50K+', change: '+28% YoY', desc: 'Automated analytics reports monthly' },
    { icon: Shield, label: 'Data Uptime', value: '99.9%', change: 'SLA Guaranteed', desc: 'Enterprise-grade cloud infrastructure' },
    { icon: Globe, label: 'Integrations Active', value: '500+', change: '+40% YoY', desc: 'Tally, SAP, Zoho connections live' },
    { icon: Users, label: 'Distributors Connected', value: '5K+', change: '+45% YoY', desc: 'Dealer network across India' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 sm:pt-28 pb-16 sm:pb-20 font-geist" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red text-xs font-medium mb-4">IMPACT METRICS</span>
          <motion.img
            src="/logo.jpeg" alt="" className="h-10 sm:h-12 w-auto mx-auto mb-4 sm:mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 0.6, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          />
          <h1 className="font-geist font-semibold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight mb-3 sm:mb-4">
            Measurable results for your business
          </h1>
          <p className="font-geist text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Our solutions deliver quantifiable improvements across sales productivity,
            operational efficiency, and distribution management.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-20">
          {stats.map((stat, i) => (
            <AnimatedCounter key={i} {...stat} />
          ))}
        </div>

        {/* Detailed Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/5 border border-brand-orange/10 text-brand-orange text-xs font-medium mb-3">PLATFORM DATA</span>
            <h2 className="font-geist font-semibold text-xl sm:text-2xl text-brand-black">Numbers that speak</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {detailedMetrics.map(({ icon: Icon, label, value, change, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-red/5 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-brand-red" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">{change}</span>
                </div>
                <span className="font-geist font-bold text-2xl sm:text-3xl text-brand-black">{value}</span>
                <p className="font-geist text-xs sm:text-sm font-medium text-brand-black mt-1">{label}</p>
                <p className="font-geist text-[10px] sm:text-xs text-gray-400 mt-0.5">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-14 border border-gray-100 shadow-sm"
        >
          <h2 className="font-geist font-semibold text-xl sm:text-2xl text-brand-black mb-2 sm:mb-3 text-center">
            How ABS Technologies Transforms Your Workflow
          </h2>
          <p className="font-geist text-xs sm:text-sm text-gray-500 text-center mb-8 sm:mb-12 max-w-xl mx-auto">
            From legacy data extraction to modern mobile delivery — see how our integration engine
            connects every part of your business.
          </p>

          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 sm:gap-6 relative">
            {/* Connecting Line */}
            <div className="absolute left-[16.66%] right-[16.66%] top-1/2 h-[2px] bg-gradient-to-r from-gray-200 via-brand-orange to-brand-red hidden md:block -translate-y-1/2 z-0" />

            {/* Step 1 */}
            <motion.div whileHover={{ scale: 1.02 }}
              className="w-full md:w-1/3 p-5 sm:p-6 bg-[#fafafa] rounded-2xl border border-gray-200 flex flex-col items-center text-center z-10">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3 sm:mb-4">
                <Search className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-geist font-semibold uppercase tracking-wider text-gray-400 mb-2">Step 1</span>
              <h4 className="font-geist font-bold text-sm sm:text-base mb-1.5">Legacy ERP / Tally</h4>
              <p className="text-[10px] sm:text-xs text-gray-500 font-geist">Extract inventory, pricing, customer and order data from your existing systems</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div whileHover={{ scale: 1.02 }}
              className="w-full md:w-1/3 p-5 sm:p-6 bg-brand-black rounded-2xl flex flex-col items-center text-center z-10 relative">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3 sm:mb-4">
                <Network className="w-5 sm:w-6 h-5 sm:h-6 text-brand-yellow" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white/40 mb-2">Step 2</span>
              <h4 className="font-geist font-bold text-sm sm:text-base mb-1.5 text-white">ABS Integration Engine</h4>
              <p className="text-[10px] sm:text-xs text-white/60 font-geist">Real-time sync, data formatting, and bi-directional API processing</p>
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1.5 -right-1.5 w-3 sm:w-4 h-3 sm:h-4 bg-brand-red rounded-full blur-sm"
              />
            </motion.div>

            {/* Step 3 */}
            <motion.div whileHover={{ scale: 1.02 }}
              className="w-full md:w-1/3 p-5 sm:p-6 bg-[#fafafa] rounded-2xl border border-gray-200 flex flex-col items-center text-center z-10">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-3 sm:mb-4">
                <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-brand-red" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-geist font-semibold uppercase tracking-wider text-gray-400 mb-2">Step 3</span>
              <h4 className="font-geist font-bold text-sm sm:text-base mb-1.5">SFA / CRM / DMS Apps</h4>
              <p className="text-[10px] sm:text-xs text-gray-500 font-geist">Mobile & web delivery for your field team, managers, and distributor network</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12"
        >
          <div className="max-w-[200px] sm:max-w-[250px] mx-auto mb-4 sm:mb-6">
            <BrandSwoosh />
          </div>
          <Link to="/contact"
            className="inline-flex items-center gap-2 font-geist font-medium text-sm text-brand-red hover:text-brand-orange transition-colors group">
            See how it works for your business
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsGraphics;
