import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, LogIn, UserPlus, Eye, EyeOff, Shield, Zap, Users } from 'lucide-react';
import absLogo from '../assets/abs-logo-clean.png';

const AuthPopup = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirm_password: '' });

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape' && isOpen) onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setTab('login');
    setShowPassword(false);
    setShowConfirmPassword(false);
    setLoginForm({ email: '', password: '' });
    setSignupForm({ name: '', email: '', password: '', confirm_password: '' });
    onClose();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    window.open('https://cloud.abstechnologies.co.in/login', '_blank');
    handleClose();
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirm_password) {
      alert('Passwords do not match');
      return;
    }
    window.open('https://cloud.abstechnologies.co.in/register', '_blank');
    handleClose();
  };

  const inputClass = "w-full bg-white/80 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/10 focus:bg-white outline-none transition-all font-medium placeholder:text-gray-300";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[820px] pointer-events-auto relative overflow-hidden font-system flex">

              {/* LEFT — Branded Panel */}
              <div className="hidden md:flex flex-col justify-between w-[320px] shrink-0 bg-gradient-to-br from-[#0f2b6b] to-[#1a3d8f] text-white p-8 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -bottom-14 -right-14 w-52 h-52 bg-brand-gold/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/[0.02] rounded-full" />

                <div className="relative z-10">
                  <img src={absLogo} alt="ABS" className="h-10 mb-2" />
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">Cloud Portal</p>
                </div>

                <div className="relative z-10 space-y-5 my-8">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                      <Shield size={16} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Secure Access</p>
                      <p className="text-[11px] text-white/40">256-bit encrypted connection</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                      <Zap size={16} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Real-time Sync</p>
                      <p className="text-[11px] text-white/40">Instant Tally data access</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                      <Users size={16} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">6000+ Businesses</p>
                      <p className="text-[11px] text-white/40">Trust ABS Technologies</p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                    Certified 5-Star Tally Partner
                  </p>
                </div>
              </div>

              {/* RIGHT — Form Panel */}
              <div className="flex-1 relative">
                {/* Close button */}
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-black transition-all z-10"
                >
                  <X size={16} />
                </button>

                {/* Tabs */}
                <div className="px-8 pt-8 pb-0">
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">
                    {tab === 'login' ? 'Welcome back' : 'Get started'}
                  </p>
                  <h3 className="text-2xl font-black text-brand-black tracking-tight mb-5">
                    {tab === 'login' ? 'Sign in to your account' : 'Create your account'}
                  </h3>

                  <div className="flex gap-1 bg-gray-50 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => { setTab('login'); setShowPassword(false); }}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                        tab === 'login'
                          ? 'bg-brand-red text-white shadow-md'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <LogIn size={13} /> Sign In
                    </button>
                    <button
                      type="button"
                      onClick={() => { setTab('signup'); setShowPassword(false); setShowConfirmPassword(false); }}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                        tab === 'signup'
                          ? 'bg-brand-red text-white shadow-md'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <UserPlus size={13} /> Sign Up
                    </button>
                  </div>
                </div>

                {/* SIGN IN form */}
                <AnimatePresence mode="wait" initial={false}>
                  {tab === 'login' && (
                    <motion.form
                      key="login"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleLogin}
                      className="px-8 pt-6 pb-8 space-y-4"
                    >
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-500">Email address</label>
                        <input
                          type="email"
                          value={loginForm.email}
                          onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                          placeholder="you@company.com"
                          required
                          className={inputClass}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-500">Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={loginForm.password}
                            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                            placeholder="Enter your password"
                            required
                            className={`${inputClass} pr-11`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-black transition-colors"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 rounded-md border-gray-300 text-brand-red focus:ring-brand-red/20 accent-brand-red"
                          />
                          <span className="text-xs text-gray-500 font-medium">Remember me</span>
                        </label>
                        <a
                          href="https://cloud.abstechnologies.co.in/forgot-password"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-brand-gold font-bold hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#0f2b6b] to-[#1a3d8f] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all flex items-center justify-center gap-2 text-sm"
                      >
                        <LogIn size={15} /> Sign In
                      </button>

                      <p className="text-xs text-gray-400 text-center font-medium pt-1">
                        Don't have an account?{' '}
                        <button type="button" onClick={() => setTab('signup')} className="text-brand-red font-bold hover:underline">
                          Sign Up free
                        </button>
                      </p>
                    </motion.form>
                  )}

                  {/* SIGN UP form */}
                  {tab === 'signup' && (
                    <motion.form
                      key="signup"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleSignup}
                      className="px-8 pt-6 pb-8 space-y-3.5"
                    >
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-500">Full Name</label>
                        <input
                          type="text"
                          value={signupForm.name}
                          onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                          placeholder="Your full name"
                          required
                          className={inputClass}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-500">Email address</label>
                        <input
                          type="email"
                          value={signupForm.email}
                          onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                          placeholder="you@company.com"
                          required
                          className={inputClass}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-gray-500">Password</label>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              value={signupForm.password}
                              onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                              placeholder="Create password"
                              required
                              className={`${inputClass} pr-10`}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-black transition-colors"
                            >
                              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                            </button>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-gray-500">Confirm Password</label>
                          <div className="relative">
                            <input
                              type={showConfirmPassword ? 'text' : 'password'}
                              value={signupForm.confirm_password}
                              onChange={(e) => setSignupForm({ ...signupForm, confirm_password: e.target.value })}
                              placeholder="Confirm password"
                              required
                              className={`${inputClass} pr-10`}
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-black transition-colors"
                            >
                              {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#0f2b6b] to-[#1a3d8f] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all flex items-center justify-center gap-2 text-sm"
                      >
                        <UserPlus size={15} /> Create Account
                      </button>

                      <p className="text-xs text-gray-400 text-center font-medium pt-1">
                        Already have an account?{' '}
                        <button type="button" onClick={() => setTab('login')} className="text-brand-red font-bold hover:underline">
                          Sign In
                        </button>
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthPopup;
