import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, CheckCircle } from 'lucide-react';
import HighlightText from '../components/HighlightText';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-[72px] pb-6 font-system relative overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="blob w-96 h-96 bg-brand-red/5 top-[-10%] right-[-5%]" />
      <div className="blob w-80 h-80 bg-brand-gold/5 bottom-[5%] left-[-10%]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 snap-start">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-brand-black tracking-tight">
            Let's <HighlightText>get started</HighlightText> together
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed font-medium">
            Tell us about your requirements and we'll outline the right solution for your business.
          </p>
        </div>

        {/* Main Content Grid: Map/Info Left, Form Right */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch snap-start">
          
          {/* LEFT COLUMN: Map & Contact Info */}
          <div className="space-y-6 flex flex-col h-full order-2 lg:order-1">
            
            {/* Google Map Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white p-2"
            >
              <div className="aspect-[16/11] w-full rounded-xl overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3580.537096593979!2d91.744072!3d26.1792011!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDEwJzQ1LjEiTiA5McKwNDQnMzguNyJF!5e0!3m2!1sen!2sin!4v1775128450870!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Quick Contact Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl text-brand-black shadow-sm border border-gray-100 flex-1 flex flex-col justify-center relative overflow-hidden"
            >
              {/* Subtle branded accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-lg font-black mb-6 flex items-center gap-2 text-brand-black tracking-tight">
                Get in Touch
              </h3>
              
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                <div className="flex gap-4 items-center group">
                  <div className="w-11 h-11 rounded-xl bg-brand-red/5 flex items-center justify-center shrink-0 border border-brand-red/10 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                    <Mail className="text-brand-red group-hover:text-white w-5 h-5 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-0.5">Email Official</p>
                    <a href="mailto:support@abstechnologies.co.in" className="text-sm font-bold text-brand-black hover:text-brand-red transition-colors">
                      support@abstechnologies.co.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                    <Phone className="text-brand-gold group-hover:text-white w-5 h-5 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-0.5">Phone Line</p>
                    <p className="text-sm font-bold text-brand-black">+91 7578000559</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="w-11 h-11 rounded-xl bg-brand-red/5 flex items-center justify-center shrink-0 border border-brand-red/10 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                    <MapPin className="text-brand-red group-hover:text-white w-5 h-5 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-0.5">Office — Guwahati</p>
                    <p className="text-sm font-bold text-gray-600">Guwahati, Assam 781008</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="w-11 h-11 rounded-xl bg-brand-red/5 flex items-center justify-center shrink-0 border border-brand-red/10 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                    <MapPin className="text-brand-red group-hover:text-white w-5 h-5 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-0.5">Office — Jaipur</p>
                    <p className="text-sm font-bold text-gray-600 leading-relaxed">
                      Shop No. 210, Gopalpura Bypass,<br />
                      New Atish Market, Mansarovar,<br />
                      Jaipur, Rajasthan – 302020
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50 text-center">
                <p className="text-[10px] text-gray-300 uppercase tracking-[0.25em] font-black">
                  Certified Tally 5-Star Partner
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full order-1 lg:order-2"
          >
            <h3 className="text-2xl font-bold text-brand-black mb-6 tracking-tight">Request a Demo</h3>
            
            <form className="space-y-5 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Company Name *</label>
                  <input type="text" placeholder="Your company" className="w-full bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Your Name *</label>
                  <input type="text" placeholder="Full name" className="w-full bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Email *</label>
                  <input type="email" placeholder="you@company.com" className="w-full bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Phone *</label>
                  <input type="text" placeholder="+91 XXXXX XXXXX" className="w-full bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Service Required *</label>
                <select className="w-full bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium appearance-none">
                  <option>Select a service</option>
                  <option>TallyPrime Solutions</option>
                  <option>Tally Customization (TDL)</option>
                  <option>AMC / TSS Support</option>
                  <option>Tally on Cloud</option>
                  <option>Web & App Development</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Team Size</label>
                <div className="grid grid-cols-4 gap-2">
                  {['1-8', '9-24', '25-100', '100+'].map(size => (
                    <button key={size} type="button" className="py-2.5 rounded-lg border border-gray-100 bg-[#fafafa] text-[11px] font-bold text-gray-500 hover:border-brand-red hover:text-brand-red transition-all">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 flex-1 flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Requirements</label>
                <textarea rows="4" placeholder="How can we help?" className="w-full bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium resize-none flex-1"></textarea>
              </div>

              <button className="w-full bg-brand-red text-white font-bold py-4 rounded-xl shadow-lg hover:bg-brand-red-dark transition-all flex items-center justify-center gap-2 group text-sm mt-4">
                Submit Request <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <p className="text-[10px] text-gray-400 text-center font-medium mt-4">
                By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
