// src/pages/ServiceDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { useRef, useEffect } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'motion/react';

// Animated Counter Component
const Counter = ({ from = 0, to, duration = 2, suffix = '', prefix = '' }) => {
    const ref = useRef(null);
    const motionVal = useMotionValue(from);
    const rounded = useTransform(motionVal, v => `${prefix}${Math.round(v)}${suffix}`);

    useEffect(() => {
        const controls = animate(motionVal, to, { duration, ease: 'easeOut' });
        return controls.stop;
    }, [motionVal, to, duration]);

    useEffect(() => {
        const unsub = rounded.on('change', v => {
            if (ref.current) ref.current.textContent = v;
        });
        return unsub;
    }, [rounded]);

    return <span ref={ref}>{`${prefix}${from}${suffix}`}</span>;
};

// Radial/Circular Graph Component
const RadialGraphCard = ({ title, data }) => {
    const radius = 60;
    const strokeWidth = 12;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>

            {/* Updated: 2-column grid */}
            <div className="grid grid-cols-2 gap-6">
                {data.map((d, i) => {
                    const progress = d.value / 100;
                    return (
                        <div key={i} className="flex flex-col items-center">
                            <svg width={radius * 2 + strokeWidth * 2} height={radius * 2 + strokeWidth * 2}>
                                <circle
                                    cx={radius + strokeWidth}
                                    cy={radius + strokeWidth}
                                    r={radius}
                                    stroke="#e5e7eb"
                                    strokeWidth={strokeWidth}
                                    fill="transparent"
                                />
                                <motion.circle
                                    cx={radius + strokeWidth}
                                    cy={radius + strokeWidth}
                                    r={radius}
                                    stroke="#f43f5e"
                                    strokeWidth={strokeWidth}
                                    fill="transparent"
                                    strokeLinecap="round"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={circumference}
                                    initial={{ strokeDashoffset: circumference }}
                                    animate={{ strokeDashoffset: circumference * (1 - progress) }}
                                    transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeOut' }}
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fontSize="16"
                                    fontWeight="bold"
                                    fill="#f43f5e"
                                >
                                    {d.value}%
                                </text>
                            </svg>
                            <p className="mt-2 text-gray-700 text-sm">{d.label}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
// Line Graph Component
const LineGraphWithAxis = ({ data }) => {
    const width = 400;
    const height = 200;
    const padding = { top: 20, right: 20, bottom: 30, left: 40 };
    const maxValue = Math.max(...data.map(d => d.value));

    const points = data.map((d, i) => {
        const x = padding.left + i * ((width - padding.left - padding.right) / (data.length - 1));
        const y = padding.top + height - (d.value / maxValue) * height;
        return [x, y];
    });
    const pointsString = points.map(p => p.join(',')).join(' ');

    return (
        <svg width={width} height={height + padding.top + padding.bottom} className="mx-auto mt-10">
            {/* Y axis */}
            <line
                x1={padding.left}
                y1={padding.top}
                x2={padding.left}
                y2={height + padding.top}
                stroke="black"
                strokeWidth="2"
            />
            {/* X axis */}
            <line
                x1={padding.left}
                y1={height + padding.top}
                x2={width - padding.right}
                y2={height + padding.top}
                stroke="black"
                strokeWidth="2"
            />

            {/* Y-axis labels */}
            {[0, 20, 40, 60, 80, 100].map((val, i) => {
                const y = padding.top + height - (val / maxValue) * height;
                return (
                    <g key={i}>
                        <text x={padding.left - 10} y={y + 4} fontSize="10" textAnchor="end">{val}</text>
                        <line x1={padding.left - 5} y1={y} x2={padding.left} y2={y} stroke="black" />
                    </g>
                );
            })}

            {/* Polyline */}
            <motion.polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                points={pointsString}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            {/* Points */}
            {points.map(([x, y], i) => (
                <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#3b82f6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.2, type: 'spring', stiffness: 300 }}
                />
            ))}

            {/* X-axis labels */}
            {data.map((d, i) => (
                <text
                    key={i}
                    x={points[i][0]}
                    y={height + padding.top + 15}
                    fontSize="10"
                    textAnchor="middle"
                >
                    {d.label}
                </text>
            ))}
        </svg>
    );
};

// Performance data per service
const servicePerformance = {
    "tally-solutions": [
        { label: "Efficiency", value: 90 },
        { label: "Accuracy", value: 95 },
        { label: "Automation", value: 85 },
        { label: "Client Satisfaction", value: 92 },
    ],
    "sap-integration": [
        { label: "Integration", value: 88 },
        { label: "Speed", value: 80 },
        { label: "Error Reduction", value: 75 },
        { label: "ROI", value: 90 },
    ],
    "tdl-development": [
        { label: "Customization", value: 95 },
        { label: "Scalability", value: 90 },
        { label: "Reports", value: 85 },
        { label: "Client Feedback", value: 88 },
    ],
    "annual-maintenance": [
        { label: "Uptime", value: 98 },
        { label: "Response Time", value: 95 },
        { label: "Issue Resolution", value: 92 },
        { label: "System Stability", value: 90 },
    ],
    "cloud-services": [
        { label: "Security", value: 95 },
        { label: "Reliability", value: 92 },
        { label: "Scalability", value: 90 },
        { label: "Support", value: 88 },
    ],
    "web-app-development": [
        { label: "Performance", value: 90 },
        { label: "UI/UX", value: 95 },
        { label: "Security", value: 85 },
        { label: "Client Feedback", value: 92 },
    ],
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
                <Link to="/" className="text-brand-red underline font-medium hover:text-red-700">
                    ← Back to Home
                </Link>
            </div>
        );
    }

    const performanceData = servicePerformance[service.slug] || [];

    return (
        <div className="min-h-screen bg-gray-50 font-geist">

            {/* HERO SECTION */}
            <section className="bg-white py-20 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        {service.desc} At ABS Technologies, we provide end-to-end solutions that
                        integrate with your ERP, streamline operations, and enable real-time insights.
                    </p>
                </div>
            </section>

            {/* KEY FEATURES */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-stretch">

                    {/* Key Features - Left */}
                    <div className="flex-1 flex flex-col justify-between bg-white p-6 rounded-xl shadow">
                        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
                        <p className="text-gray-600 mb-6">
                            Our services are designed to streamline your business operations, enhance efficiency, and deliver measurable results. Here are some highlights:
                        </p>
                        <ul className="list-disc list-inside space-y-3 text-gray-700">
                            {service.details.map((d, i) => (
                                <li key={i} className="flex items-start gap-2 text-lg">
                                    <span className="text-brand-red font-bold">•</span>
                                    {d}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm text-gray-500 italic">
                            Each feature is tailored to meet your business needs and enhance your ROI.
                        </p>
                    </div>

                    {/* Key Performance Metrics - Right */}
                    {performanceData.length > 0 && (
                        <div className="flex-1">
                            <RadialGraphCard title="Key Performance Metrics" data={performanceData} />
                        </div>
                    )}

                </div>
            </section>

            {/* PERFORMANCE STATS */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-8">Performance & Results</h2>

                    {/* Counters */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white p-4 rounded-xl shadow">
                            <p className="text-3xl font-bold text-brand-red">
                                <Counter from={0} to={150} duration={2} suffix="+" />
                            </p>
                            <p className="text-gray-500 text-sm">Clients Served</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow">
                            <p className="text-3xl font-bold text-brand-red">
                                <Counter from={0} to={500} duration={2} suffix="+" />
                            </p>
                            <p className="text-gray-500 text-sm">Integrations Delivered</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow">
                            <p className="text-3xl font-bold text-brand-red">
                                <Counter from={0} to={12} duration={2} suffix="+" />
                            </p>
                            <p className="text-gray-500 text-sm">Years Experience</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow">
                            <p className="text-3xl font-bold text-brand-red">
                                <Counter from={0} to={98} duration={2} suffix="%" />
                            </p>
                            <p className="text-gray-500 text-sm">Client Retention</p>
                        </div>
                    </div>




                </div>
            </section>

            {/* Service Impact Highlights - Unique Cards with Wave Animation */}
            {performanceData.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <h3 className="text-2xl font-semibold mb-10 text-center">Service Impact Highlights</h3>
                        <div className="grid gap-8 sm:grid-cols-3">
                            {performanceData.map((d, i) => (
                                <motion.div
                                    key={i}
                                    className="relative overflow-hidden rounded-2xl p-6 shadow-lg hover:shadow-2xl transition bg-gradient-to-br from-brand-red to-brand-red/20"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2, duration: 0.8, ease: 'easeOut' }}
                                >
                                    {/* Animated Background Wave */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-full opacity-20"
                                        style={{
                                            background: 'radial-gradient(circle at 50% 50%, #f43f5e, transparent 70%)',
                                        }}
                                        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
                                        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                                    />

                                    {/* Icon / Number */}
                                    <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow mb-4">
                                        <span className="text-brand-red font-bold text-lg">{d.value}</span>
                                    </div>

                                    {/* Metric Label */}
                                    <h4 className="relative z-10 text-lg font-semibold text-gray-800 mb-2">{d.label}</h4>

                                    {/* Short Description */}
                                    <p className="relative z-10 text-gray-600 text-sm">
                                        This demonstrates how our solutions improved {d.label.toLowerCase()} significantly across clients.
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CALL TO ACTION */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-gray-600 mb-8">
                        Contact ABS Technologies today to implement {service.title} and take your operations to the next level.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;