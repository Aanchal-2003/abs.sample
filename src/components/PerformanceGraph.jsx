import { motion } from "motion/react";

/**
 * PerformanceGraph component
 * @param {Array} data - Array of objects { label: string, value: number }
 * @param {string} color - Theme color (teal, blue, yellow)
 * @param {string} type - 'bar', 'line', or 'radial'
 */
const PerformanceGraph = ({ data, color = "blue-primary", type = "bar" }) => {
  const colorMap = {
    "blue-primary": "#0078d4",
    "blue-deep": "#001833",
    "fluent-success": "#107c10",
    "tally-teal": "#0078d4",
    "tally-blue": "#001833",
    "tally-yellow": "#0078d4",
  };

  const themeColor = colorMap[color] || colorMap["blue-primary"];

  if (type === "radial") {
    return (
      <div className="w-full h-64 grid grid-cols-2 gap-4">
        {data.slice(0, 4).map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center relative">
            <svg className="w-24 h-24 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="36"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-100"
              />
              <motion.circle
                cx="48"
                cy="48"
                r="36"
                stroke={themeColor}
                strokeWidth="8"
                fill="transparent"
                strokeDasharray="226.2"
                initial={{ strokeDashoffset: 226.2 }}
                whileInView={{ strokeDashoffset: 226.2 - (226.2 * item.value) / 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-[-10px]">
              <span className="text-sm font-black text-blue-deep">{item.value}%</span>
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mt-2 text-center">{item.label}</p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "bar") {
    return (
      <div className="w-full h-64 flex items-end gap-3 px-2 pb-8 border-b border-gray-100">
        {data.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${item.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="w-full rounded-t-lg relative group overflow-hidden"
              style={{ backgroundColor: themeColor }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              {/* Tooltip */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[8px] py-1 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                {item.value}%
              </div>
            </motion.div>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter truncate w-full text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Improved Line Chart
  return (
    <div className="w-full h-64 relative">
      <svg viewBox="0 0 400 150" className="w-full h-full preserve-3d" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`grad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColor, stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: themeColor, stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <motion.path
          d={`M 0,150 ${data.map((d, i) => `L ${(i / (data.length - 1)) * 400},${150 - (d.value * 1.2)}`).join(' ')} L 400,150 Z`}
          fill={`url(#grad-${color})`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d={`M 0,150 ${data.map((d, i) => `L ${(i / (data.length - 1)) * 400},${150 - (d.value * 1.2)}`).join(' ')}`}
          fill="none"
          stroke={themeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {data.map((d, i) => (
          <motion.circle
            key={i}
            cx={(i / (data.length - 1)) * 400}
            cy={150 - (d.value * 1.2)}
            r="4"
            fill={themeColor}
            stroke="white"
            strokeWidth="2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + (i * 0.1) }}
          />
        ))}
      </svg>
    </div>
  );
};

export default PerformanceGraph;
