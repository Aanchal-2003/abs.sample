import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Solutions: [
      { name: 'Sales Force Automation', path: '/services#sfa' },
      { name: 'CRM & Lead Management', path: '/services#crm' },
      { name: 'Distributor Management', path: '/services#dms' },
      { name: 'ERP Integration', path: '/services#erp' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Solutions', path: '/services' },
      { name: 'Impact & Stats', path: '/stats' },
      { name: 'Contact Sales', path: '/contact' }
      
    ],
    Integrations: [
      { name: 'Tally Integration', path: '/services#erp' },
      { name: 'SAP Integration', path: '/services#erp' },
      { name: 'Zoho Integration', path: '/services#erp' },
      { name: 'Custom APIs', path: '/services#erp' },
    ],
  };
  return (
    <footer className="bg-brand-black text-white/70 font-geist relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-red/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-8 pb-8 relative z-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-4">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <img
              src="/log.png"
              className="h-12 w-auto mix-blend-multiply"
            />

            <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-6">
              ABS Technologies delivers powerful ERP integrations, cloud solutions,
              and custom software to help businesses scale faster and smarter.
            </p>

            {/* CONTACT */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 hover:text-white transition">
                <Mail className="w-4 h-4 text-brand-red" />
                <span>support@abstechnologies.co.in</span>
              </div>

              <div className="flex items-center gap-2 hover:text-white transition">
                <Phone className="w-4 h-4 text-brand-red" />
                <span>+91 7578000559</span>
              </div>

              <div className="flex items-center gap-2 hover:text-white transition">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span>Guwahati, Assam 781008</span>
              </div>
            </div>

            {/* TECH TAGS */}
            <div className="flex gap-2 mt-6 flex-wrap">
              {['Tally', 'SAP', 'Zoho'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:bg-brand-red/20 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                {title}
              </h4>

              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/40 hover:text-brand-red transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-4"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">

          <p className="text-white/30">
            © {currentYear} ABS Technologies. All rights reserved.
          </p>

          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
