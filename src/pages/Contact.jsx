import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const solutions = [
    'Sales Force Automation',
    'CRM & Lead Management',
    'Distributor Management System',
    'ERP / Tally Integration',
    'Custom Development',
    'Not sure — need consultation',
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 sm:pt-28 pb-16 sm:pb-24 font-geist">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/5 border border-brand-orange/10 text-brand-orange text-xs font-medium mb-4">CONTACT SALES</span>

          <h1 className="font-geist font-semibold text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight mb-3 sm:mb-4">
            Let's discuss your requirements
          </h1>
          <p className="text-gray-500 text-sm sm:text-lg max-w-xl mx-auto">
            Tell us about your business and we'll recommend the right solution.
            Free consultation — no commitment required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 flex flex-col gap-4 sm:gap-6"
          >
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: '150+', label: 'Clients Served' },
                { num: '<24hr', label: 'Response Time' },
                { num: '98%', label: 'Satisfaction' },
                { num: '12+', label: 'Years Experience' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-center p-3 sm:p-4 rounded-xl bg-white border border-gray-100"
                >
                  <span className="font-geist font-bold text-lg sm:text-xl text-brand-red">{s.num}</span>
                  <p className="font-geist text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
              <h3 className="font-geist font-semibold text-base sm:text-lg text-brand-black mb-4 sm:mb-6">Get in touch</h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'support@abstechnologies.co.in', color: 'bg-brand-red/10 text-brand-red' },
                  { icon: Phone, label: 'Sales', value: '+91 7578000559', color: 'bg-brand-orange/10 text-brand-orange' },
                  { icon: MapPin, label: 'Office', value: 'Guwahati, Assam 781008', color: 'bg-brand-yellow/10 text-brand-yellow' },
                  { icon: Clock, label: 'Hours', value: 'Mon–Sat, 9 AM – 7 PM IST', color: 'bg-gray-100 text-gray-500' },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-400 font-medium mb-0.5">{label}</p>
                      <p className="text-xs sm:text-sm font-medium text-brand-black">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-black rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="font-geist font-semibold text-base sm:text-lg mb-3">What happens next?</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { step: '1', text: 'We review your requirements within 24 hours' },
                  { step: '2', text: 'Our team schedules a discovery call' },
                  { step: '3', text: 'You get a tailored demo of relevant modules' },
                  { step: '4', text: 'We provide a detailed proposal with timelines' },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0">{step}</span>
                    <p className="text-xs sm:text-sm text-white/70">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-sm"
          >
            <h3 className="font-geist font-semibold text-base sm:text-lg text-brand-black mb-4 sm:mb-6">Request a Demo</h3>
            <form className="flex flex-col gap-4 sm:gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-gray-600 text-[10px] sm:text-xs">Company Name *</label>
                  <input type="text" className="w-full bg-[#fafafa] border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-brand-red focus:bg-white transition-all text-xs sm:text-sm text-brand-black" placeholder="Your company" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-gray-600 text-[10px] sm:text-xs">Your Name *</label>
                  <input type="text" className="w-full bg-[#fafafa] border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-brand-red focus:bg-white transition-all text-xs sm:text-sm text-brand-black" placeholder="Full name" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-gray-600 text-[10px] sm:text-xs">Work Email *</label>
                  <input type="email" className="w-full bg-[#fafafa] border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-brand-red focus:bg-white transition-all text-xs sm:text-sm text-brand-black" placeholder="you@company.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-gray-600 text-[10px] sm:text-xs">Phone Number *</label>
                  <input type="tel" className="w-full bg-[#fafafa] border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-brand-red focus:bg-white transition-all text-xs sm:text-sm text-brand-black" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-gray-600 text-[10px] sm:text-xs">What are you looking for? *</label>
                <select className="w-full bg-[#fafafa] border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-brand-red focus:bg-white transition-all text-xs sm:text-sm text-brand-black appearance-none">
                  <option value="">Select a solution</option>
                  {solutions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-gray-600 text-[10px] sm:text-xs">Team Size</label>
                <div className="grid grid-cols-4 gap-2">
                  {['1–10', '11–50', '51–200', '200+'].map((size) => (
                    <label key={size} className="cursor-pointer">
                      <input type="radio" name="teamSize" value={size} className="sr-only peer" />
                      <div className="text-center py-2 sm:py-2.5 rounded-xl border border-gray-200 text-[10px] sm:text-xs font-medium text-gray-500 peer-checked:border-brand-red peer-checked:text-brand-red peer-checked:bg-brand-red/5 transition-all hover:border-gray-300">
                        {size}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-gray-600 text-[10px] sm:text-xs">Current ERP System</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {['Tally', 'SAP', 'Zoho', 'Other'].map((erp) => (
                    <label key={erp} className="cursor-pointer">
                      <input type="radio" name="erp" value={erp} className="sr-only peer" />
                      <div className="text-center py-2 sm:py-2.5 rounded-xl border border-gray-200 text-[10px] sm:text-xs font-medium text-gray-500 peer-checked:border-brand-orange peer-checked:text-brand-orange peer-checked:bg-brand-orange/5 transition-all hover:border-gray-300">
                        {erp}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-gray-600 text-[10px] sm:text-xs">Tell us about your requirements</label>
                <textarea rows="3" className="w-full bg-[#fafafa] border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 outline-none focus:border-brand-red focus:bg-white transition-all text-xs sm:text-sm text-brand-black resize-none" placeholder="Describe your current sales workflow, pain points, or what you'd like to achieve..."></textarea>
              </div>

              <button className="mt-2 w-full bg-brand-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-xs sm:text-sm shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] hover:bg-black hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group">
                Submit Demo Request
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
                {['Free consultation', 'No credit card', '24hr response'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-gray-400">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    {t}
                  </span>
                ))}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
