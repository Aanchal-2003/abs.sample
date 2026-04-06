import { motion } from 'motion/react';
import { Users, Code, Clock, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '150+', label: 'Businesses Served'   },
  { icon: Code,  value: '500+', label: 'Custom TDLs Built'   },
  { icon: Star,  value: '12+',  label: 'Years of Experience' },
  { icon: Clock, value: '24/7', label: 'Support Available'   },
];

const ProofOfExistence = () => (
  <section className="py-6 bg-brand-black snap-start">
    <div className="max-w-[1200px] mx-auto px-6">

      {/* Heading */}
      <div className="text-center mb-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-bold mb-2">
          Why businesses trust us
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          ABS Technologies — by the numbers
        </h2>
      </div>

      {/* Stats grid — all cards identical */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white/5 border border-white/8 rounded-2xl p-6 text-center hover:bg-white/8 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center mx-auto mb-4">
              <Icon size={18} className="text-white/60" />
            </div>

            <p className="text-3xl md:text-4xl font-black mb-1 leading-none text-white">
              {value}
            </p>

            <p className="text-[11px] uppercase tracking-widest font-bold text-white/40">
              {label}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default ProofOfExistence;
