import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#f8f9fa] overflow-hidden pt-[120px] lg:pt-[140px] pb-16">
      
      {/* Decorative Background Element to mimic Tally's clean corporate look */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#eef4ff] rounded-bl-[120px] -z-10 hidden lg:block" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-tally-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Area */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="visible"
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <motion.div variants={item} className="mb-6">
              <span className="inline-block py-1 px-3 rounded text-xs font-semibold tracking-wider text-tally-teal bg-tally-teal/10 uppercase">
                India's Leading Business Management Software
              </span>
            </motion.div>

            <motion.h1 
              variants={item}
              className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.15] text-tally-blue tracking-tight mb-6 font-system"
            >
              Powering the Growth of <br/>
              <span className="text-tally-yellow">SMBs Nationwide</span>
            </motion.h1>

            <motion.p 
              variants={item}
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl font-system"
            >
              ABS Technologies brings you the complete Tally ecosystem. From expert TallyPrime implementations and custom TDL development to AMC, Cloud hosting, and seamless Web App integrations.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-tally-blue hover:bg-[#1a4a75] transition-colors duration-300 shadow-md"
              >
                Request a Demo
                <ArrowRight size={18} />
              </a>
              <a 
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-tally-blue bg-white border border-tally-blue hover:bg-gray-50 transition-colors duration-300 shadow-sm"
              >
                <PlayCircle size={18} className="text-tally-teal" />
                Explore Services
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={item} className="mt-12 flex items-center gap-6 text-sm text-gray-500 font-medium font-system">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-tally-teal"></div>
                Custom TDLs
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-tally-teal"></div>
                Tally on Cloud
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-tally-teal"></div>
                AMC Support
              </span>
            </motion.div>

          </motion.div>

          {/* Right Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
            className="relative lg:h-[550px] flex items-center justify-center mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-[550px] max-h-[60vh] lg:max-h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
               {/* Tally UI inspired graphic */}
               <img 
                 src="https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/login-popup-prime.jpg" 
                 alt="Tally Dashboard"
                 className="w-auto h-auto max-h-[60vh] lg:max-h-[550px] object-contain"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-tally-blue/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Element */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-tally-teal/10 flex items-center justify-center">
                 <img src="https://resources.tallysolutions.com/wp-content/themes/tally/assets/images/tally-logo-black.svg" className="w-8 opacity-70" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Certified Partner</p>
                <p className="text-sm font-semibold text-tally-blue">5-Star Tally Partner</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
