import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

const API_ENDPOINT = 'https://cloud.abstechnologies.co.in/api/online-service-create/';

const SERVICE_TYPES = [
  'TallyPrime Solutions',
  'Tally Customization (TDL)',
  'AMC / TSS Support',
  'Tally on Cloud',
  'Tally Integration',
  'Web & App Development',
];

const initialForm = {
  service_type: '',
  contact_number: '',
  remark: '',
};

const ServicePopup = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.service_type || !form.contact_number) {
      setStatus({ state: 'error', message: 'Please select a service and enter your contact number.' });
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

      setStatus({ state: 'success', message: "Thanks! Our team will contact you shortly." });
      setForm(initialForm);

      // Auto-close after 2 seconds on success
      setTimeout(() => {
        onClose();
        setStatus({ state: 'idle', message: '' });
      }, 2000);
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      });
    }
  };

  const handleClose = () => {
    if (status.state === 'loading') return;
    setForm(initialForm);
    setStatus({ state: 'idle', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto relative overflow-hidden font-system">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              {/* Header */}
              <div className="relative flex items-start justify-between p-6 pb-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-brand-red mb-1">Request a Service</p>
                  <h3 className="text-xl font-bold text-brand-black tracking-tight">How can we help?</h3>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close"
                  className="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-black transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="relative px-6 pb-6 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Type of Service *
                  </label>
                  <select
                    value={form.service_type}
                    onChange={updateField('service_type')}
                    required
                    className="w-full bg-[#fafafa] border border-gray-100 rounded-lg px-3 py-2.5 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium appearance-none"
                  >
                    <option value="">Select a service</option>
                    {SERVICE_TYPES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    value={form.contact_number}
                    onChange={updateField('contact_number')}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full bg-[#fafafa] border border-gray-100 rounded-lg px-3 py-2.5 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Remark
                  </label>
                  <textarea
                    rows="3"
                    value={form.remark}
                    onChange={updateField('remark')}
                    placeholder="Tell us briefly what you need..."
                    className="w-full bg-[#fafafa] border border-gray-100 rounded-lg px-3 py-2.5 text-sm focus:border-brand-red/30 focus:bg-white outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="w-full bg-brand-red text-white font-bold py-3 rounded-lg shadow-md hover:bg-brand-red-dark transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.state === 'loading' ? (
                    <>
                      Submitting... <Loader2 size={15} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit Request <Send size={15} />
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
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServicePopup;
