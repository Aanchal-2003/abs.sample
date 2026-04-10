import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import absLogo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'TallyPrime Solutions', path: '/services/tally-solutions' },
      { name: 'Tally Integration', path: '/services/tally-integration' },
      { name: 'TDL Development', path: '/services/tdl-development' },
      { name: 'AMC & TSS Support', path: '/services/annual-maintenance' },
      { name: 'Tally on Cloud', path: '/services/cloud-services' },
      { name: 'Mobile & Web Apps', path: '/services/tally-mobile' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'All Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  return (
    <footer className="bg-brand-red text-white/90 font-system">
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="bg-white p-1.5 rounded-lg inline-block mb-4">
              <img src={absLogo} className="h-10 w-auto" alt="ABS Technologies" />
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm mb-5">
              ABS Technologies — your certified 5-Star Tally Partner for implementation, customization, AMC, and cloud solutions.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-3.5 h-3.5 text-brand-gold" />
                support@abstechnologies.co.in
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                +91 7578000559
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                Guwahati, Assam 781008
              </div>
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-xs mb-3 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-xs text-white/70 hover:text-brand-gold transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p className="text-white/60">
            © {currentYear} ABS Technologies. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-white/60 hover:text-white transition">
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
