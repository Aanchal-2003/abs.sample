import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'motion/react';
import { Users, Code, Clock, Star } from 'lucide-react';

const stats = [
  { icon: Users, to: 6000, suffix: '+', label: 'Businesses Served' },
  { icon: Code,  to: 500,  suffix: '+', label: 'Custom TDLs Built' },
  { icon: Star,  to: 16,   suffix: '+', label: 'Years of Experience' },
  { icon: Clock, to: null, display: '24/7', label: 'Support Available' },
];

const Counter = ({ to, suffix }) => {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, v => `${Math.round(v)}${suffix}`);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, to, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, motionVal, to]);

  useEffect(() => {
    const unsub = rounded.on('change', v => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsub;
  }, [rounded]);

  return <span ref={ref}>{`0${suffix}`}</span>;
};

const ProofOfExistence = () => (
  <section className="py-6 bg-brand-black snap-start">
    <div className="max-w-[1200px] mx-auto px-6">

      <div className="text-center mb-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-bold mb-2">
          Why businesses trust us
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          ABS Technologies — by the numbers
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ icon: Icon, to, suffix, display, label }, i) => (
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
              {display ? display : <Counter to={to} suffix={suffix} />}
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
