import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { serviceSections } from '../data/serviceSections';
import { useRef, useEffect } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'motion/react';

/* -------------------- COUNTER -------------------- */
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

/* -------------------- SHOWCASE CONFIG -------------------- */
const serviceShowcase = {
  "tally-solutions": {
    title: "Tally Business Solutions",
    logo: "https://fahosur.com/wp-content/uploads/2024/06/Tally.png",
    bg: "bg-[#f5f3ef]",
    cards: [
      { title: "Tally ERP", desc: "Complete accounting & GST solution", image: "https://5.imimg.com/data5/SELLER/Default/2022/8/MP/HJ/WM/14825342/tally-erp-9-software-product.png" },
      { title: "Integration", desc: "Connect Tally with CRM & tools", image: "https://www.batchmaster.co.in/wp-content/uploads/2024/08/BatchMaster-Tally-ERP-1024x782.webp" },
      { title: "Customization", desc: "Custom workflows & reports", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNm5T8MqyLf59OacVigQCn8O_N-waAZM1aQ&s" }
    ]
  },

  "sap-integration": {
    title: "SAP Enterprise Solutions",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    bg: "bg-[#eef4ff]",
    cards: [
      { title: "SAP ERP", desc: "Enterprise ERP system", image: "https://cdn-icons-png.flaticon.com/512/906/906175.png" },
      { title: "API Sync", desc: "Real-time integrations", image: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png" },
      { title: "Automation", desc: "Workflow automation", image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png" }
    ]
  },

  "cloud-services": {
    title: "Cloud Infrastructure",
    logo: "https://cdn-icons-png.flaticon.com/512/4144/4144484.png",
    bg: "bg-[#eefaf6]",
    cards: [
      { title: "Hosting", desc: "Scalable cloud hosting", image: "https://cdn-icons-png.flaticon.com/512/4144/4144484.png" },
      { title: "Backup", desc: "Data protection", image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" },
      { title: "Security", desc: "Advanced protection", image: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png" }
    ]
  },

  "tdl-development": {
    title: "TDL Development",
    logo: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    bg: "bg-[#fff7ed]",
    cards: [
      { title: "Custom Reports", desc: "Advanced TDL reports & invoices", image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },
      { title: "Automation Scripts", desc: "Automate workflows", image: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png" },
      { title: "Plugin Development", desc: "Extend Tally functionality", image: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png" }
    ]
  },

  "annual-maintenance": {
    title: "Annual Maintenance",
    logo: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    bg: "bg-[#f0fdf4]",
    cards: [
      { title: "System Health", desc: "Regular monitoring", image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" },
      { title: "Bug Fixing", desc: "Quick issue resolution", image: "https://cdn-icons-png.flaticon.com/512/1828/1828843.png" },
      { title: "Performance", desc: "Optimize performance", image: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png" }
    ]
  },

  "web-app-development": {
    title: "Web & App Development",
    logo: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
    bg: "bg-[#eef2ff]",
    cards: [
      { title: "Web Apps", desc: "Modern websites", image: "https://cdn-icons-png.flaticon.com/512/888/888859.png" },
      { title: "Mobile Apps", desc: "Android & iOS", image: "https://cdn-icons-png.flaticon.com/512/888/888857.png" },
      { title: "E-Commerce", desc: "Online store solutions", image: "https://cdn-icons-png.flaticon.com/512/263/263142.png" }
    ]
  }
};

/* -------------------- RADIAL GRAPH -------------------- */
const RadialGraphCard = ({ title, data }) => {
  const radius = 60;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <div className="grid grid-cols-2 gap-6">
        {data.map((d, i) => {
          const progress = d.value / 100;
          return (
            <div key={i} className="flex flex-col items-center">
              <svg width={160} height={160}>
                <circle cx="80" cy="80" r={radius} stroke="#eee" strokeWidth={strokeWidth} fill="transparent" />
                <motion.circle
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke="#f43f5e"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: circumference * (1 - progress) }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="font-bold fill-red-500">
                  {d.value}%
                </text>
              </svg>
              <p className="mt-2 text-sm">{d.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* -------------------- MAIN -------------------- */
const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const showcase = serviceShowcase?.[slug];

  if (!service) return <div>Not Found</div>;

  const performanceData = [
    { label: "Efficiency", value: 90 },
    { label: "Accuracy", value: 95 },
    { label: "Automation", value: 85 },
    { label: "Satisfaction", value: 92 }
  ];

  const keyFeatures = [
    "Streamlined Operations",
    "Real-time Insights",
    "Automation & Efficiency",
    "Customizable Modules",
    "Cloud Integration",
    "Advanced Reporting"
  ];

  const sections = serviceSections[slug] || [];

  return (
    <div className="min-h-screen bg-gray-50 mt-10">

      {/* HERO */}
      <section className="bg-white py-10 text-center">
        <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-gray-600">{service.desc}</p>
      </section>

      {/* FEATURES + GRAPH */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">

          <div className="flex-1 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {keyFeatures.map((f, i) => (
                <li key={i} className="bg-gray-50 p-3 rounded-lg">{f}</li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <RadialGraphCard title="Performance Metrics" data={performanceData} />
          </div>

        </div>
      </section>

      {/* SHOWCASE */}
      {showcase && (
        <section className={`py-10 ${showcase.bg}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center gap-4 mb-10">
              <img src={showcase.logo} className="h-12" />
              <h2 className="text-2xl font-semibold">{showcase.title}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {showcase.cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
                >
                  <img src={card.image} className="h-12 mb-4" />
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COUNTERS */}
      <section className="py-10 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow"><Counter to={150} suffix="+" /><p>Clients</p></div>
          <div className="bg-white p-6 rounded-xl shadow"><Counter to={500} suffix="+" /><p>Integrations</p></div>
          <div className="bg-white p-6 rounded-xl shadow"><Counter to={12} suffix="+" /><p>Years</p></div>
          <div className="bg-white p-6 rounded-xl shadow"><Counter to={98} suffix="%" /><p>Retention</p></div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {sections.map((sec, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <img src={sec.image} className="h-40 w-full object-cover mb-4 rounded-lg" />
              <h3 className="font-bold mb-2">{sec.section}</h3>
              <ul className="text-sm text-gray-600 list-disc ml-4">
                {sec.items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform?</h2>
        <Link to="/" className="bg-red-500 text-white px-6 py-3 rounded-full">
          Back to Home
        </Link>
      </section>

    </div>
  );
};

export default ServiceDetail;