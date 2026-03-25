import { motion } from 'motion/react';

// Animated dashboard mockup SVG for SFA/CRM sections
export const DashboardIllustration = ({ className = '' }) => (
  <motion.svg
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    viewBox="0 0 400 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Browser frame */}
    <rect x="0" y="0" width="400" height="280" rx="16" fill="#fafafa" stroke="#e5e7eb" strokeWidth="1"/>
    <rect x="0" y="0" width="400" height="36" rx="16" fill="#f5f5f5"/>
    <rect x="0" y="20" width="400" height="16" fill="#f5f5f5"/>
    <circle cx="20" cy="18" r="5" fill="#E5322E" opacity="0.6"/>
    <circle cx="36" cy="18" r="5" fill="#F58220" opacity="0.6"/>
    <circle cx="52" cy="18" r="5" fill="#FFC20E" opacity="0.6"/>

    {/* Sidebar */}
    <rect x="0" y="36" width="80" height="244" fill="#1A1A1A"/>
    <rect x="16" y="52" width="48" height="6" rx="3" fill="white" opacity="0.3"/>
    <rect x="16" y="72" width="36" height="4" rx="2" fill="white" opacity="0.15"/>
    <rect x="16" y="86" width="42" height="4" rx="2" fill="white" opacity="0.15"/>
    <rect x="16" y="100" width="38" height="4" rx="2" fill="#E5322E" opacity="0.8"/>
    <rect x="16" y="114" width="44" height="4" rx="2" fill="white" opacity="0.15"/>
    <rect x="16" y="128" width="32" height="4" rx="2" fill="white" opacity="0.15"/>

    {/* Stats cards */}
    <motion.rect
      initial={{ width: 0 }} whileInView={{ width: 90 }} viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
      x="96" y="52" height="56" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.5"
    />
    <rect x="106" y="62" width="32" height="4" rx="2" fill="#E5322E" opacity="0.2"/>
    <rect x="106" y="74" width="50" height="8" rx="2" fill="#E5322E" opacity="0.7"/>
    <rect x="106" y="90" width="24" height="3" rx="1.5" fill="#9ca3af" opacity="0.4"/>

    <motion.rect
      initial={{ width: 0 }} whileInView={{ width: 90 }} viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.5 }}
      x="198" y="52" height="56" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.5"
    />
    <rect x="208" y="62" width="32" height="4" rx="2" fill="#F58220" opacity="0.2"/>
    <rect x="208" y="74" width="42" height="8" rx="2" fill="#F58220" opacity="0.7"/>
    <rect x="208" y="90" width="28" height="3" rx="1.5" fill="#9ca3af" opacity="0.4"/>

    <motion.rect
      initial={{ width: 0 }} whileInView={{ width: 90 }} viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
      x="300" y="52" height="56" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.5"
    />
    <rect x="310" y="62" width="32" height="4" rx="2" fill="#FFC20E" opacity="0.2"/>
    <rect x="310" y="74" width="56" height="8" rx="2" fill="#FFC20E" opacity="0.7"/>
    <rect x="310" y="90" width="20" height="3" rx="1.5" fill="#9ca3af" opacity="0.4"/>

    {/* Chart area */}
    <rect x="96" y="120" width="192" height="140" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.5"/>
    <rect x="110" y="132" width="60" height="5" rx="2" fill="#1A1A1A" opacity="0.6"/>
    <motion.path
      d="M110 230 L140 200 L170 210 L200 180 L230 190 L260 160"
      stroke="#E5322E" strokeWidth="2" fill="none" strokeLinecap="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 1.2 }}
    />
    <motion.path
      d="M110 240 L140 225 L170 230 L200 215 L230 220 L260 200"
      stroke="#F58220" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 1.2 }}
    />

    {/* Right panel - list items */}
    <rect x="300" y="120" width="90" height="140" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="0.5"/>
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <circle cx="316" cy={140 + i * 24} r="4" fill={i === 0 ? '#E5322E' : i === 1 ? '#F58220' : '#e5e7eb'} opacity="0.6"/>
        <rect x="326" y={137 + i * 24} width={40 - i * 4} height="3" rx="1.5" fill="#d1d5db"/>
        <rect x="326" y={143 + i * 24} width="30" height="2" rx="1" fill="#e5e7eb"/>
      </g>
    ))}
  </motion.svg>
);

// Mobile app mockup for field team sections
export const MobileAppIllustration = ({ className = '' }) => (
  <motion.svg
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    viewBox="0 0 200 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Phone frame */}
    <rect x="0" y="0" width="200" height="380" rx="24" fill="#1A1A1A"/>
    <rect x="4" y="4" width="192" height="372" rx="20" fill="white"/>
    {/* Notch */}
    <rect x="65" y="4" width="70" height="20" rx="10" fill="#1A1A1A"/>

    {/* Status bar */}
    <rect x="16" y="34" width="24" height="3" rx="1.5" fill="#1A1A1A" opacity="0.3"/>
    <rect x="160" y="34" width="24" height="3" rx="1.5" fill="#1A1A1A" opacity="0.3"/>

    {/* Header */}
    <rect x="16" y="50" width="80" height="8" rx="3" fill="#1A1A1A" opacity="0.8"/>
    <circle cx="176" cy="54" r="14" fill="#E5322E" opacity="0.1"/>
    <rect x="170" y="50" width="12" height="8" rx="2" fill="#E5322E" opacity="0.5"/>

    {/* Stats row */}
    <rect x="16" y="74" width="52" height="44" rx="10" fill="#E5322E" opacity="0.08"/>
    <rect x="24" y="82" width="20" height="4" rx="2" fill="#E5322E" opacity="0.3"/>
    <rect x="24" y="92" width="32" height="8" rx="2" fill="#E5322E" opacity="0.8"/>
    <rect x="24" y="106" width="16" height="3" rx="1.5" fill="#9ca3af" opacity="0.4"/>

    <rect x="76" y="74" width="52" height="44" rx="10" fill="#F58220" opacity="0.08"/>
    <rect x="84" y="82" width="20" height="4" rx="2" fill="#F58220" opacity="0.3"/>
    <rect x="84" y="92" width="28" height="8" rx="2" fill="#F58220" opacity="0.8"/>
    <rect x="84" y="106" width="16" height="3" rx="1.5" fill="#9ca3af" opacity="0.4"/>

    <rect x="136" y="74" width="52" height="44" rx="10" fill="#FFC20E" opacity="0.08"/>
    <rect x="144" y="82" width="20" height="4" rx="2" fill="#FFC20E" opacity="0.3"/>
    <rect x="144" y="92" width="24" height="8" rx="2" fill="#FFC20E" opacity="0.8"/>
    <rect x="144" y="106" width="16" height="3" rx="1.5" fill="#9ca3af" opacity="0.4"/>

    {/* List items */}
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect x="16" y={134 + i * 56} width="168" height="48" rx="10" fill="#fafafa" stroke="#f0f0f0" strokeWidth="0.5"/>
        <circle cx="38" cy={158 + i * 56} r="12" fill={['#E5322E', '#F58220', '#FFC20E', '#1A1A1A'][i]} opacity="0.15"/>
        <rect x="56" y={150 + i * 56} width="60" height="5" rx="2" fill="#1A1A1A" opacity="0.6"/>
        <rect x="56" y={160 + i * 56} width="80" height="3" rx="1.5" fill="#9ca3af" opacity="0.4"/>
        <rect x="150" y={153 + i * 56} width="24" height="10" rx="5" fill={['#E5322E', '#F58220', '#FFC20E', '#1A1A1A'][i]} opacity="0.2"/>
      </g>
    ))}

    {/* Bottom nav */}
    <rect x="4" y="340" width="192" height="36" rx="0" fill="#fafafa"/>
    <rect x="4" y="356" width="192" height="20" rx="20" fill="#fafafa"/>
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x={30 + i * 44} y="350" width="16" height="3" rx="1.5" fill={i === 0 ? '#E5322E' : '#d1d5db'}/>
    ))}
  </motion.svg>
);

// Network/integration illustration
export const IntegrationIllustration = ({ className = '' }) => (
  <motion.svg
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    viewBox="0 0 300 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Center node - ABS */}
    <motion.circle
      cx="150" cy="100" r="30"
      fill="#1A1A1A"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
      transition={{ delay: 0.2, type: 'spring' }}
    />
    <text x="150" y="96" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">ABS</text>
    <text x="150" y="108" textAnchor="middle" fill="white" fontSize="6" opacity="0.5" fontFamily="sans-serif">ENGINE</text>

    {/* Orbiting nodes */}
    {[
      { x: 50, y: 50, label: 'Tally', color: '#E5322E' },
      { x: 250, y: 50, label: 'SAP', color: '#F58220' },
      { x: 50, y: 150, label: 'Zoho', color: '#FFC20E' },
      { x: 250, y: 150, label: 'SFA', color: '#E5322E' },
      { x: 150, y: 30, label: 'CRM', color: '#F58220' },
      { x: 150, y: 175, label: 'DMS', color: '#FFC20E' },
    ].map(({ x, y, label, color }, i) => (
      <g key={label}>
        <motion.line
          x1="150" y1="100" x2={x} y2={y}
          stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.3"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
        />
        <motion.circle
          cx={x} cy={y} r="18"
          fill={color} opacity="0.1" stroke={color} strokeWidth="1" strokeOpacity="0.3"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.1, type: 'spring' }}
        />
        <text x={x} y={y + 3} textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" fontFamily="sans-serif">{label}</text>
      </g>
    ))}

    {/* Animated data pulses */}
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        cx="150" cy="100" r="35"
        fill="none" stroke="#E5322E" strokeWidth="0.5"
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{ scale: 2.5, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 3, delay: i * 1, ease: 'easeOut' }}
      />
    ))}
  </motion.svg>
);

// Floating logo watermark component
export const LogoWatermark = ({ className = '' }) => (
  <div className={`absolute pointer-events-none select-none ${className}`}>
    <img src="/logo.jpeg" alt="" className="w-32 opacity-[0.03]" />
  </div>
);

// Animated gradient swoosh (brand element from logo)
export const BrandSwoosh = ({ className = '' }) => (
  <svg viewBox="0 0 400 30" fill="none" className={className}>
    <defs>
      <linearGradient id="swoosh-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E5322E"/>
        <stop offset="50%" stopColor="#F58220"/>
        <stop offset="100%" stopColor="#FFC20E"/>
      </linearGradient>
    </defs>
    <motion.path
      d="M0 20 Q100 5 200 15 Q300 25 400 10"
      stroke="url(#swoosh-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    />
    <motion.path
      d="M0 25 Q100 12 200 20 Q300 28 400 16"
      stroke="url(#swoosh-grad)" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
    />
  </svg>
);
