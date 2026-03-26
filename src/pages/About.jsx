import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Target, Eye, Zap, Users, Shield,
  Smartphone, Building2, TrendingUp, Clock
} from 'lucide-react';
import { BrandSwoosh, IntegrationIllustration } from '../components/Illustrations';

const About = () => {

  const milestones = [
    { year: '2014', title: 'Founded', desc: 'ABS Technology started with a vision to simplify B2B sales operations for Indian businesses.' },
    { year: '2016', title: 'First SFA Launch', desc: 'Deployed our first Sales Force Automation module for a manufacturing company with 50+ field reps.' },
    { year: '2018', title: 'Tally Integration', desc: 'Built our real-time Tally integration engine — the first of its kind for field sales tools in India.' },
    { year: '2020', title: '100+ Clients', desc: 'Crossed 100 enterprise clients across manufacturing, FMCG, and pharma sectors.' },
    { year: '2023', title: 'DMS & SAP', desc: 'Expanded integration support to SAP, Zoho & launched Distributor Management System.' },
    { year: '2025', title: '150+ Enterprises', desc: 'Serving 150+ businesses with 10,000+ daily active users across India.' },
  ];

  const companyStats = [
    { num: '150+', label: 'Enterprise Clients', icon: Building2 },
    { num: '10K+', label: 'Daily Active Users', icon: Users },
    { num: '12+', label: 'Years in Business', icon: Clock },
    { num: '98%', label: 'Client Retention', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-20 font-geist">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-medium mb-4">
            ABOUT ABS TECHNOLOGY
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Building Modern Software that{' '}
            <span className="text-brand-red">Works with Your Existing Systems</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            We design powerful SFA, CRM, and Distribution Management systems
            and integrate them seamlessly with Tally, SAP, and Zoho —
            enabling businesses to modernize without disruption.
          </p>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
          className="rounded-3xl shadow-xl mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {companyStats.map(({ num, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 text-center"
            >
              <Icon className="w-6 h-6 text-brand-red mx-auto mb-3" />
              <p className="text-3xl font-bold">{num}</p>
              <p className="text-xs text-gray-500 uppercase mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* MISSION / VISION */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">

          <div className="p-8 rounded-3xl bg-white shadow-md border">
            <Target className="text-brand-red mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To create powerful yet simple business software that integrates
              seamlessly with legacy systems, helping companies scale faster
              without operational friction.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white shadow-md border">
            <Eye className="text-brand-orange mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become India’s most trusted sales and distribution technology partner,
              enabling real-time connected ecosystems across businesses.
            </p>
          </div>

        </div>

        {/* JOURNEY */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Journey</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <motion.div
                key={m.year}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-2xl border shadow-sm"
              >
                <span className="text-brand-red font-bold text-2xl">{m.year}</span>
                <h4 className="font-semibold mt-2">{m.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VALUES */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Simplicity', desc: 'Software should be easy enough for anyone to use instantly.' },
              { icon: Shield, title: 'Security', desc: 'We ensure enterprise-grade data protection.' },
              { icon: Smartphone, title: 'Mobile-first', desc: 'Built for field teams and real-world usage.' },
              { icon: Users, title: 'Support', desc: 'We stay with clients beyond deployment.' },
              { icon: Target, title: 'Integration-first', desc: 'We enhance your systems, not replace them.' },
              { icon: Eye, title: 'Transparency', desc: 'Clear data visibility across all levels.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white border shadow-sm">
                <Icon className="text-brand-orange mb-3" />
                <h4 className="font-semibold">{title}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ILLUSTRATION */}
        <div className="flex justify-center mb-20">
          <IntegrationIllustration className="w-[320px]" />
        </div>

        {/* INDUSTRIES */}
        <div className="bg-brand-black rounded-3xl p-10 mb-20 text-white">
          <h2 className="text-2xl font-semibold mb-4">Industries We Serve</h2>
          <p className="text-white/60 mb-6">
            Serving diverse industries with scalable solutions.
          </p>

          <div className="grid md:grid-cols-4 gap-3">
            {[
              'Manufacturing', 'FMCG', 'Pharma', 'Electronics',
              'Textiles', 'Auto Parts', 'Food', 'Agri'
            ].map((i) => (
              <div key={i} className="bg-white/10 px-4 py-3 rounded-xl text-sm">
                {i}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <BrandSwoosh className="mx-auto mb-6" />

          <h2 className="text-2xl font-semibold mb-3">
            Ready to Transform Your Business?
          </h2>

          <p className="text-gray-500 mb-6">
            Let’s build something powerful together.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-4 rounded-full hover:bg-black transition"
          >
            Contact Sales
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;