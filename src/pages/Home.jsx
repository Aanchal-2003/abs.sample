import Hero from '../Hero';

import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { ArrowRight, CheckCircle, Users, BarChart3, Zap, Shield, Smartphone, Globe, Building2, Factory, Package, PlayCircle, TrendingUp, ShieldCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DashboardIllustration, MobileAppIllustration, BrandSwoosh } from '../components/Illustrations';
import { useEffect, useRef, useState } from 'react';
import {
  Database,
  Cloud,
  Wrench,
  Code,
  Server,
  Layers
} from "lucide-react";
import { services } from '../data/services';

const Counter = ({ from = 0, to, duration = 2, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const motionVal = useMotionValue(from);
  const rounded = useTransform(motionVal, (v) => `${prefix}${Math.round(v)}${suffix}`);
  useEffect(() => {
    const controls = animate(motionVal, to, { duration, ease: 'easeOut' });
    return controls.stop;
  }, [motionVal, to, duration]);
  useEffect(() => {
    const unsub = rounded.on('change', (v) => { if (ref.current) ref.current.textContent = v; });
    return unsub;
  }, [rounded]);
  return <span ref={ref}>{`${prefix}${from}${suffix}`}</span>;
};

// const services = [
//   {
//     title: "Tally Solutions",
//     desc: "Complete Tally customization, integration, and support for accounting and business operations.",
//     icon: Database,
//     slug: "tally-solutions",
//     details: [
//       "Tally Customization",
//       "GST Setup & Filing",
//       "Data Migration",
//       "Remote Access",
//       "Tally Integration"
//     ]
//   },
//   {
//     title: "SAP Integration",
//     desc: "Seamless SAP integration with your business processes.",
//     icon: Server,
//     details: [
//       "SAP ERP Integration",
//       "Real-time Sync",
//       "API Integration",
//       "Reporting Dashboard"
//     ]
//   },
//   {
//     title: "TDL Development",
//     desc: "Custom TDL development to extend Tally functionality.",
//     icon: Code,
//     details: [
//       "Custom Reports",
//       "Invoice Design",
//       "Automation",
//       "Advanced Logic"
//     ]
//   },
//   {
//     title: "Annual Maintenance",
//     desc: "Reliable AMC services for smooth operations.",
//     icon: Wrench,
//     details: [
//       "System Maintenance",
//       "Bug Fixing",
//       "Performance Optimization",
//       "24/7 Support"
//     ]
//   },
//   {
//     title: "Cloud Services",
//     desc: "Secure cloud hosting and infrastructure management.",
//     icon: Cloud,
//     details: [
//       "Cloud Hosting",
//       "Data Backup",
//       "Security Monitoring",
//       "Scalable Servers"
//     ]
//   },
//   {
//     title: "Web / App Development",
//     desc: "Custom web & mobile solutions.",
//     icon: Layers,
//     details: [
//       "Website Development",
//       "Mobile Apps",
//       "Admin Panels",
//       "E-commerce Solutions"
//     ]
//   }
// ];



const Home = () => {
  // const [selectedService, setSelectedService] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const whyUs = [
    { icon: Shield, title: 'Enterprise Security', desc: 'End-to-end encryption with cloud-first architecture. SOC2-aligned practices protect your business data at every level.', stat: '99.9%', statLabel: 'Uptime' },
    { icon: Smartphone, title: 'Mobile First Design', desc: 'Native Android & iOS apps built for field teams. Works offline, syncs when connected — no training needed.', stat: '10K+', statLabel: 'Daily Users' },
    { icon: Zap, title: 'Quick Implementation', desc: 'Go live in days, not months. Pre-built connectors and zero-training UI means your team starts working from day one.', stat: '7', statLabel: 'Days Avg Setup' },
    { icon: Users, title: 'Dedicated Support', desc: 'From deployment to daily operations — our team handles everything. Measured by your adoption rate, not just the sale.', stat: '24/7', statLabel: 'Support' },
    { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Live dashboards with automated reports. Track field teams, orders, inventory, and performance — all in real-time.', stat: '50+', statLabel: 'Report Types' },
    { icon: Globe, title: 'Legacy Integration', desc: 'We connect your new software with Tally, SAP, Zoho — real-time bi-directional sync without replacing what already works.', stat: '<24ms', statLabel: 'Sync Speed' },
  ];

  const industries = [
    { name: 'Manufacturing', icon: Factory, clients: '45+' },
    { name: 'FMCG', icon: Package, clients: '30+' },
    { name: 'Pharmaceuticals', icon: Shield, clients: '25+' },
    { name: 'Stationery', icon: Building2, clients: '15+' },
    { name: 'Surgical Equipment', icon: Zap, clients: '12+' },
    { name: 'Pipes & Fittings', icon: Building2, clients: '10+' },
    { name: 'Food & Snacks', icon: Package, clients: '18+' },
    { name: 'Electronics', icon: Smartphone, clients: '20+' },
  ];

  const caseStudies = [
    {
      company: 'Khyati Stationery',
      industry: 'Stationery Manufacturing',
      result: 'Scaled from a single retail outlet to a nationwide distribution network using our SFA + DMS suite integrated with Tally.',
      metric: '3x',
      metricLabel: 'Distribution Growth',
      modules: ['SFA', 'DMS', 'Tally'],
    },
    {
      company: 'Nebula Surgical',
      industry: 'Surgical Products',
      result: 'Streamlined ordering across 200+ locations in India — reducing order processing time and eliminating manual entry errors.',
      metric: '60%',
      metricLabel: 'Faster Processing',
      modules: ['CRM', 'SFA', 'SAP'],
    },
    {
      company: 'Actionware India',
      industry: 'Consumer Products',
      result: 'Full distributor management system deployed across 500+ dealers with real-time Tally integration and automated reporting.',
      metric: '40%',
      metricLabel: 'Cost Reduction',
      modules: ['DMS', 'Tally', 'Analytics'],
    },
  ];

  const aboutHighlights = [
    { title: 'Consultative Approach', value: 'Discovery-led planning aligned to your goals and sales processes.' },
    { title: 'Implementation Excellence', value: 'Structured rollouts, role-based onboarding, and measurable adoption milestones.' },
    { title: 'Long-Term Partnership', value: 'Dedicated support, continuous optimization, and roadmap-led enhancements.' },
  ];

  return (
    <div className="min-h-screen bg-white font-geist">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-r from-white via-gray-50 to-gray-100 relative overflow-hidden">

        {/* BACKGROUND BLUR EFFECT */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* BADGE */}
            <span className="inline-block px-4 py-1 mb-4 text-xs font-medium text-brand-red bg-brand-red/10 rounded-full">
              Trusted by 150+ Businesses
            </span>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-black leading-tight">
              Build{" "}
              <span className="text-brand-red">Smart Digital Solutions</span>{" "}
              for Your Business
            </h1>

            {/* SUBTEXT */}
            <p className="mt-5 text-gray-500 text-lg max-w-xl">
              ABS Technologies helps you streamline operations with scalable web, mobile,
              and enterprise solutions integrated with Tally, SAP, and Zoho.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <button className="bg-brand-red text-white px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition">
                Get Free Demo <ArrowRight size={18} />
              </button>

              <button className="flex items-center gap-2 border px-6 py-3 rounded-full hover:bg-gray-100 transition">
                <PlayCircle size={18} /> Watch Demo
              </button>

            </div>

            {/* MINI STATS */}
            <div className="mt-8 flex gap-6 text-sm text-gray-500">
              <span><b className="text-black">150+</b> Clients</span>
              <span><b className="text-black">500+</b> Integrations</span>
              <span><b className="text-black">12+</b> Years</span>
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
              className="w-full rounded-2xl shadow-2xl"
            />

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border text-sm">
              <p className="text-gray-400 text-xs">Live Orders</p>
              <p className="font-bold text-lg text-brand-black">+247 Today</p>
            </div>

            {/* FLOATING CARD 2 */}
            <div className="absolute -top-6 -right-6 bg-brand-red text-white p-3 rounded-xl shadow-lg text-xs">
              98% Client Retention
            </div>

          </motion.div>

        </div>
      </section>

      {/* TRUST */}
      <section className="py-10 bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

            {[
              { value: "150+", label: "Clients Served" },
              { value: "500+", label: "Integrations Delivered" },
              { value: "12+", label: "Years Experience" },
              { value: "98%", label: "Client Retention" }
            ].map((item, i) => (
              <div key={i} className="group">

                <h3 className="text-2xl sm:text-3xl font-bold text-brand-black group-hover:text-brand-red transition">
                  {item.value}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-4">
            Our Core Services
          </h2>

          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            ABS Infotech provides end-to-end business solutions including ERP integration,
            cloud services, and custom software development to help you scale efficiently.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.04 }}
                  className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition"
                >
                  <Icon className="w-8 h-8 text-brand-red mb-4" />

                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>

                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>

                  <Link
                    to={`/services/${s.slug}`}
                    className="mt-4 text-sm text-white bg-brand-red px-4 py-2 rounded-lg hover:bg-red-700 transition inline-block text-center"
                  >
                    View Details
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SERVICE DETAIL MODAL */}
        {/* {selectedService && (
          <section className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-lg"
              >
                ✕
              </button>
              <h2 className="text-2xl font-semibold mb-4">{selectedService.title}</h2>
              <p className="text-gray-600 mb-4">{selectedService.desc}</p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                {selectedService.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          </section>
        )} */}
      </section>


      {/* SUCCESS STORIES */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 text-center">

          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Real Success Stories from Our Clients
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            See how ABS Infotech helps businesses improve efficiency, increase revenue,
            and streamline operations through smart digital solutions.
          </p>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                title: "FMCG Distributor",
                result: "200% Increase in Sales",
                desc: "Implemented Sales Force Automation and real-time tracking, helping the client double their sales within 6 months.",
                tag: "SFA + Tally Integration"
              },
              {
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
                title: "Manufacturing Company",
                result: "3x Team Productivity",
                desc: "Integrated SAP with mobile apps for field teams, improving coordination and reducing manual work.",
                tag: "SAP + Mobile App"
              },
              {
                img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
                title: "Retail Chain",
                result: "60% Faster Operations",
                desc: "Built a centralized system connecting distributors and inventory, reducing order processing time drastically.",
                tag: "ERP + Cloud"
              }
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition duration-300 text-left"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* OVERLAY TAG */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
                    {item.tag}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex items-center gap-2 mb-2 text-brand-red">
                    <TrendingUp size={18} />
                    <span className="font-bold text-lg">{item.result}</span>
                  </div>

                  <h3 className="font-semibold text-lg text-brand-black mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* BUTTON */}
                  <button className="flex items-center gap-2 text-sm font-medium text-brand-red hover:text-black transition">
                    Read Full Story <ArrowRight size={16} />
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl"
              >
                <img
                  src={`https://randomuser.me/api/portraits/${i === 1 ? "men/32" : "women/44"}.jpg`}
                  className="w-12 h-12 rounded-full mx-auto mb-3"
                />
                <p>"Amazing service and smooth integration process."</p>
                <h4 className="mt-4 font-semibold">Client Name</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              className="rounded-2xl shadow-2xl"
            />

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
              <p className="text-xs text-gray-400">Experience</p>
              <p className="font-bold text-lg text-brand-black">12+ Years</p>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            {/* TAG */}
            <span className="inline-block px-4 py-1 mb-4 text-xs font-medium text-brand-red bg-brand-red/10 rounded-full">
              About ABS Infotech
            </span>

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-brand-black">
              Your Trusted Technology Partner for Digital Transformation
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-500 mb-4 leading-relaxed">
              ABS Infotech specializes in delivering scalable and reliable digital solutions
              for manufacturing, distribution, and enterprise businesses. We help companies
              modernize their operations by integrating advanced software with existing systems
              like Tally, SAP, and Zoho.
            </p>

            <p className="text-gray-500 mb-6 leading-relaxed">
              From custom software development to ERP integration and cloud services, our
              solutions are designed to improve efficiency, visibility, and business growth.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

              <div className="flex items-start gap-3">
                <Users className="text-brand-red mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-sm">150+ Clients</h4>
                  <p className="text-gray-500 text-xs">Across India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="text-brand-red mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-sm">Fast Implementation</h4>
                  <p className="text-gray-500 text-xs">Quick deployment & onboarding</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="text-brand-red mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-sm">Secure Systems</h4>
                  <p className="text-gray-500 text-xs">Enterprise-grade security</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-brand-red mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-sm">Reliable Support</h4>
                  <p className="text-gray-500 text-xs">Dedicated AMC & support team</p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <button className="bg-brand-red text-white px-6 py-3 rounded-full hover:shadow-lg transition">
              Learn More About Us
            </button>

          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-white via-gray-50 to-gray-100 relative overflow-hidden">

        {/* SOFT BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">

          {/* CARD CONTAINER */}
          <div className="bg-white border border-gray-100 rounded-3xl px-6 sm:px-10 py-12 shadow-xl">

            {/* TAG */}
            <span className="inline-block px-4 py-1 mb-4 text-xs font-medium text-brand-red bg-brand-red/10 rounded-full">
              Let’s Work Together
            </span>

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight text-brand-black">
              Ready to Transform Your Business Digitally?
            </h2>

            {/* SUBTEXT */}
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Partner with ABS Infotech to build scalable solutions integrated with
              Tally, SAP, and cloud technologies — helping you streamline operations
              and accelerate growth.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button className="bg-brand-red text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:scale-105 transition">
                Request Free Demo <ArrowRight size={18} />
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                <PhoneCall size={18} /> Talk to Expert
              </button>

            </div>

            {/* TRUST LINE */}
            <p className="text-xs text-gray-400 mt-6">
              ✔ Free Consultation • ✔ No Commitment • ✔ Quick Response
            </p>

          </div>

        </div>
      </section>


    </div>
  );
};

export default Home;
