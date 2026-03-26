import { motion } from "motion/react";

const AnimatedGraph = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <svg viewBox="0 0 800 300" className="w-full h-auto">

                {/* GRID LINES */}
                {[...Array(6)].map((_, i) => (
                    <line
                        key={i}
                        x1="0"
                        y1={i * 50}
                        x2="800"
                        y2={i * 50}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                    />
                ))}

                {/* GRAPH LINE */}
                <motion.path
                    d="M0 250 
             C100 200, 150 100, 250 120 
             S400 250, 500 180 
             S650 80, 800 120"
                    fill="transparent"
                    stroke="#f43f5e"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* GLOW LINE */}
                <motion.path
                    d="M0 250 
             C100 200, 150 100, 250 120 
             S400 250, 500 180 
             S650 80, 800 120"
                    fill="transparent"
                    stroke="#f43f5e"
                    strokeWidth="8"
                    opacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* DATA POINTS */}
                {[
                    { x: 0, y: 250 },
                    { x: 250, y: 120 },
                    { x: 500, y: 180 },
                    { x: 800, y: 120 },
                ].map((point, i) => (
                    <motion.circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        fill="#f43f5e"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.3 }}
                    />
                ))}

            </svg>
        </div>
    );
};

export default AnimatedGraph;