import { motion, useInView } from "motion/react";
import { useRef } from "react";

const HighlightText = ({ children, color = "#E31C25", delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });

  return (
    <span ref={ref} className="relative inline-block">
      {/* Text on top */}
      <span className="relative z-10 text-brand-red font-bold">{children}</span>

      {/* Wavy underline — sits beneath the text */}
      <motion.svg
        className="absolute left-0 pointer-events-none z-0"
        style={{ bottom: '-4px', width: '100%', height: '12px' }}
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M 0,6 C 10,2 20,10 30,6 C 40,2 50,10 60,6 C 70,2 80,10 90,6 C 100,2 110,10 120,6 C 130,2 140,10 150,6 C 160,2 170,10 180,6 C 190,2 200,10 200,6"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="320"
          initial={{ strokeDashoffset: 320, opacity: 0 }}
          animate={inView ? { strokeDashoffset: 0, opacity: 0.7 } : { strokeDashoffset: 320, opacity: 0 }}
          transition={{ duration: 1.8, delay, ease: "easeInOut" }}
        />
      </motion.svg>
    </span>
  );
};

export default HighlightText;
