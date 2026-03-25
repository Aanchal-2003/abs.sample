import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Zap, Users, Shield, Smartphone, Building2, TrendingUp, Clock } from 'lucide-react';
import { BrandSwoosh, IntegrationIllustration } from '../components/Illustrations';

const About = () => {
  const milestones = [
    { year: '2014', title: 'Founded', desc: 'ABS Infotech started with a vision to simplify B2B sales operations for Indian businesses.' },
    { year: '2016', title: 'First SFA Launch', desc: 'Deployed our first Sales Force Automation module for a manufacturing company with 50+ field reps.' },
    { year: '2018', title: 'Tally Integration', desc: 'Built our real-time Tally integration engine — the first of its kind for field sales tools in India.' },
    { year: '2020', title: '100+ Clients', desc: 'Crossed 100 enterprise clients across manufacturing, FMCG, and pharma sectors.' },
    { year: '2023', title: 'DMS & SAP', desc: 'Launched Distributor Management System and expanded integration support to SAP and Zoho.' },
    { year: '2025', title: '150+ Enterprises', desc: 'Serving 150+ businesses with 10,000+ daily active users across India.' },
  ];

  const companyStats = [
    { num: '150+', label: 'Enterprise Clients', icon: Building2 },
    { num: '10K+', label: 'Daily Active Users', icon: Users },
    { num: '12+', label: 'Years in Business', icon: Clock },
    { num: '98%', label: 'Client Retention', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-28 pb-16 sm:pb-20 font-geist">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          {/* <motion.img
            src="/logo.jpeg" alt="ABS Infotech" className="h-10 sm:h-14 w-auto mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.15 }}
          /> */}
          <span className="inline-block px-3 py-1 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red text-xs font-medium mb-4">ABOUT US</span>
          <h1 className="font-geist font-semibold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight leading-[1.1] mb-4 sm:mb-6">
            We create new software and integrate it with{' '}
            <span className="text-gray-400">your legacy systems.</span>
          </h1>
          <p className="text-[#373a46]/70 text-sm sm:text-lg leading-relaxed">
            ABS Infotech builds modern SFA, CRM, and Distribution Management software
            for Indian B2B companies — then connects it seamlessly with Tally, SAP, and Zoho.
            Your business gets modern tools without losing what already works.
          </p>
        </motion.div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-20">
          {companyStats.map(({ num, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-5 sm:p-6 rounded-2xl bg-[#fafafa] border border-gray-100"
            >
              <Icon className="w-5 h-5 text-brand-red mx-auto mb-2 sm:mb-3" />
              <span className="font-geist font-bold text-2xl sm:text-3xl text-brand-black block">{num}</span>
              <p className="font-geist text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-gray-100"
          >
            <Target className="w-5 sm:w-6 h-5 sm:h-6 text-brand-red mb-3 sm:mb-4" />
            <h3 className="font-geist font-semibold text-lg sm:text-xl text-brand-black mb-2 sm:mb-3">Our Mission</h3>
            <p className="font-geist text-xs sm:text-sm text-gray-500 leading-relaxed">
              To build modern, easy-to-use sales software that connects seamlessly with legacy ERP systems —
              so B2B companies can modernize without disruption. We believe great software should be
              as simple as WhatsApp but powerful enough to manage thousands of users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-gray-100"
          >
            <Eye className="w-5 sm:w-6 h-5 sm:h-6 text-brand-orange mb-3 sm:mb-4" />
            <h3 className="font-geist font-semibold text-lg sm:text-xl text-brand-black mb-2 sm:mb-3">Our Vision</h3>
            <p className="font-geist text-xs sm:text-sm text-gray-500 leading-relaxed">
              To become the default sales infrastructure for every B2B company in India —
              where field teams, distributors, and management operate from one connected
              platform with real-time data flowing from legacy ERP to mobile devices.
            </p>
          </motion.div>
        </div>

        {/* Our Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20"
        >
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/5 border border-brand-orange/10 text-brand-orange text-xs font-medium mb-3">OUR JOURNEY</span>
            <h2 className="font-geist font-semibold text-2xl sm:text-3xl text-brand-black">12+ years of building & integrating</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="p-5 sm:p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-red to-brand-orange rounded-l-2xl" />
                <span className="font-geist font-bold text-2xl sm:text-3xl text-brand-red/20">{year}</span>
                <h4 className="font-geist font-semibold text-sm sm:text-base text-brand-black mt-1 mb-1.5">{title}</h4>
                <p className="font-geist text-xs sm:text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Believe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20"
        >
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-black/5 border border-brand-black/10 text-brand-black text-xs font-medium mb-3">OUR VALUES</span>
            <h2 className="font-geist font-semibold text-2xl sm:text-3xl text-brand-black">What we believe in</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: Zap,
                title: 'Simplicity over complexity',
                desc: 'Great software gets adopted when it requires zero training. If your field team can use WhatsApp, they can use our tools.',
              },
              {
                icon: Shield,
                title: 'Data security is non-negotiable',
                desc: 'End-to-end encryption, secured cloud infrastructure, and strict access controls. Your business data is our prime concern.',
              },
              {
                icon: Smartphone,
                title: 'Mobile-first, always',
                desc: 'Your sales team is in the field, not at a desk. Every feature we build starts with the mobile experience.',
              },
              {
                icon: Users,
                title: 'Support that doesn\'t disappear',
                desc: 'From deployment to daily operations, our team is with you. We measure success by your adoption rate, not just the sale.',
              },
              {
                icon: Target,
                title: 'Integration, not replacement',
                desc: 'Your Tally or SAP works. We don\'t ask you to replace it — we build new software that connects to it and extends its capabilities.',
              },
              {
                icon: Eye,
                title: 'Transparency drives trust',
                desc: 'Real-time tracking, automated reports, and complete visibility across every level of your sales and distribution network.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="p-5 sm:p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition-all"
              >
                <Icon className="w-5 h-5 text-brand-orange mb-2 sm:mb-3" />
                <h4 className="font-geist font-semibold text-sm text-brand-black mb-1.5">{title}</h4>
                <p className="font-geist text-xs text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 sm:mb-16"
        >
          <IntegrationIllustration className="w-full max-w-[280px] sm:max-w-[350px] h-auto" />
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-black rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 mb-14 sm:mb-20 relative overflow-hidden"
        >
          <h2 className="font-geist font-semibold text-xl sm:text-2xl text-white mb-2 sm:mb-3">Industries we serve</h2>
          <p className="text-white/50 text-xs sm:text-sm mb-6 sm:mb-8 max-w-lg">
            Our solutions are deployed across 150+ businesses in diverse manufacturing and distribution verticals.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {[
              { name: 'Manufacturing', clients: '45+' },
              { name: 'FMCG', clients: '30+' },
              { name: 'Pharmaceuticals', clients: '25+' },
              { name: 'Surgical Equipment', clients: '12+' },
              { name: 'Stationery', clients: '15+' },
              { name: 'Pipes & Fittings', clients: '10+' },
              { name: 'Food & Snacks', clients: '18+' },
              { name: 'Electronics', clients: '20+' },
              { name: 'Auto Components', clients: '8+' },
              { name: 'Textiles', clients: '6+' },
              { name: 'Building Materials', clients: '7+' },
              { name: 'Agri Products', clients: '5+' },
            ].map(({ name, clients }) => (
              <div key={name} className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-xs sm:text-sm text-white/60">{name}</span>
                <span className="text-[9px] sm:text-[10px] text-brand-orange font-bold">{clients}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-[200px] mx-auto mb-4 sm:mb-6">
            <BrandSwoosh />
          </div>
          <h2 className="font-geist font-semibold text-xl sm:text-2xl text-brand-black mb-2 sm:mb-3">
            Want to work with us?
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 max-w-md mx-auto">
            Whether you're a manufacturer with 10 salespeople or a distributor with 500 —
            we'll build and integrate the right solution for you.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-brand-black text-white font-geist font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] hover:bg-black active:scale-95 transition-all group text-sm sm:text-base">
            Contact Sales
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
