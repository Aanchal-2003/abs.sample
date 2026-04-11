import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import HighlightText from '../components/HighlightText';

const API_ENDPOINT = 'https://cloud.abstechnologies.co.in/api/online-lead-create';

const initialForm = {
  company_name: '',
  name: '',
  email: '',
  phone: '',
  service: '',
  team_size: '',
  requirements: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const setTeamSize = (size) => setForm((prev) => ({ ...prev, team_size: size }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.company_name || !form.name || !form.email || !form.phone || !form.service) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ state: 'loading', message: '' });

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      setStatus({ state: 'success', message: "Thanks! We'll reach out to you shortly." });
      setForm(initialForm);
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-[90px] lg:pt-[72px] pb-6 font-system relative overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="blob w-96 h-96 bg-brand-red/5 top-[-10%] right-[-5%]" />
      <div className="blob w-80 h-80 bg-brand-gold/5 bottom-[5%] left-[-10%]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
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
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-stretch snap-start">
          
          {/* LEFT COLUMN: Offices & Contact Info */}
          <div className="flex flex-col gap-4 h-full order-2 lg:order-1">

            {/* HEAD OFFICE — GUWAHATI */}
            <motion.a
              href="https://www.google.com/maps/place/ABS+Technologies-Tally/@26.1790531,91.7440813,17z/data=!4m7!3m6!1s0x375a5bf8393653e1:0x1372e3dcd05facdf!8m2!3d26.1790531!4d91.7440813!15sChBhYnMgdGVjaG5vbG9naWVz!16s%2Fg%2F11ptydcsym"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Guwahati head office on Google Maps"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 flex items-center hover:shadow-md hover:border-brand-red/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 rounded-xl bg-brand-red/5 flex items-center justify-center shrink-0 border border-brand-red/10 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                  <MapPin className="text-brand-red group-hover:text-white w-5 h-5 transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-widest font-black text-brand-red mb-1">Head Office — Guwahati</p>
                  <p className="text-base font-bold text-brand-black leading-relaxed">
                    101, Ram Kumar Plaza,<br />
                    Chatribari, A.T. Road,<br />
                    Guwahati – 781001
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1 group-hover:text-brand-red transition-colors">Click to open in Google Maps →</p>
                </div>
              </div>
            </motion.a>

            {/* BRANCH OFFICE — JAIPUR */}
            <motion.a
              href="https://www.google.com/maps/place/210,+Gopalpura+Bypass+Rd,+Nakshtra+Villa+Rail+Nagar,+Shiv+Shakti+Nagar,+Mansarovar,+Jaipur,+Rajasthan+302019/@26.8802676,75.7550906,17z/data=!3m1!4b1!4m5!3m4!1s0x396db4f9d506e59b:0x1a4be663c47b4397!8m2!3d26.8802628!4d75.7576655"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Jaipur branch office on Google Maps"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 flex items-center hover:shadow-md hover:border-brand-gold/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                  <MapPin className="text-brand-gold group-hover:text-white w-5 h-5 transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-widest font-black text-brand-gold mb-1">Branch Office — Jaipur</p>
                  <p className="text-base font-bold text-brand-black leading-relaxed">
                    210, Gopalpura Bypass Rd,<br />
                    Nakshtra Villa, Rail Nagar,<br />
                    Shiv Shakti Nagar, Mansarovar,<br />
                    Jaipur, Rajasthan – 302019
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1 group-hover:text-brand-gold transition-colors">Click to open in Google Maps →</p>
                </div>
              </div>
            </motion.a>

            {/* Email + Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl text-brand-black shadow-sm border border-gray-100 relative overflow-hidden flex-1 flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
                <div className="flex gap-3 items-center group flex-1">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/5 flex items-center justify-center shrink-0 border border-brand-red/10 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                    <Mail className="text-brand-red group-hover:text-white w-5 h-5 transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-0.5">Email</p>
                    <a href="mailto:support@abstechnologies.co.in" className="text-sm font-bold text-brand-black hover:text-brand-red transition-colors truncate block">
                      support@abstechnologies.co.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-center group flex-1">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                    <Phone className="text-brand-gold group-hover:text-white w-5 h-5 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-0.5">Phone</p>
                    <a href="tel:+917578000559" className="text-sm font-bold text-brand-black hover:text-brand-gold transition-colors">+91 7578000559</a>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-50 text-center relative">
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
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col order-1 lg:order-2"
          >
            <h3 className="text-xl font-bold text-brand-black mb-4 tracking-tight">Request a Demo</h3>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Company Name *</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    value={form.company_name}
                    onChange={updateField('company_name')}
                    required
                    className="w-full bg-[#fafafa] border border-gray-100 rounded-lg px-3 py-2 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Your Name *</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={updateField('name')}
                    required
                    className="w-full bg-[#fafafa] border border-gray-100 rounded-lg px-3 py-2 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Email *</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={updateField('email')}
                    required
                    className="w-full bg-[#fafafa] border border-gray-100 rounded-lg px-3 py-2 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Phone *</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={updateField('phone')}
                    required
                    className="w-full bg-[#fafafa] border border-gray-100 rounded-lg px-3 py-2 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Service Required *</label>
                <select
                  value={form.service}
                  onChange={updateField('service')}
                  required
                  className="w-full bg-[#fafafa] border border-gray-100 rounded-lg px-3 py-2 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="TallyPrime Solutions">TallyPrime Solutions</option>
                  <option value="Tally Customization (TDL)">Tally Customization (TDL)</option>
                  <option value="AMC / TSS Support">AMC / TSS Support</option>
                  <option value="Tally on Cloud">Tally on Cloud</option>
                  <option value="Web & App Development">Web & App Development</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Team Size</label>
                <div className="grid grid-cols-4 gap-2">
                  {['1-8', '9-24', '25-100', '100+'].map(size => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setTeamSize(size)}
                      className={`py-2 rounded-lg border text-[11px] font-bold transition-all ${
                        form.team_size === size
                          ? 'border-brand-red bg-brand-red/5 text-brand-red'
                          : 'border-gray-100 bg-[#fafafa] text-gray-500 hover:border-brand-red hover:text-brand-red'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Requirements</label>
                <textarea
                  rows="3"
                  placeholder="How can we help?"
                  value={form.requirements}
                  onChange={updateField('requirements')}
                  className="w-full bg-[#fafafa] border border-gray-100 rounded-lg px-3 py-2 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.state === 'loading'}
                className="w-full bg-brand-red text-white font-bold py-3 rounded-lg shadow-md hover:bg-brand-red-dark transition-all flex items-center justify-center gap-2 group text-sm mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.state === 'loading' ? (
                  <>
                    Submitting... <Loader2 size={15} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Submit Request <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {status.state === 'success' && (
                <p className="text-xs text-green-600 text-center font-semibold flex items-center justify-center gap-1.5">
                  <CheckCircle size={14} /> {status.message}
                </p>
              )}
              {status.state === 'error' && (
                <p className="text-xs text-brand-red text-center font-semibold">
                  {status.message}
                </p>
              )}

              <p className="text-[10px] text-gray-400 text-center font-medium">
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
