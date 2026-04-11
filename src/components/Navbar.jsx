// Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Home, Layers, Info, Mail, Code, Server, Smartphone, Wrench } from "lucide-react";
import { services } from "../data/services";
import absLogo from "../assets/logo.png";
import ServicePopup from "./ServicePopup";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicePopupOpen, setServicePopupOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "Tally", path: "/services/tally-solutions", icon: Layers },
    { name: "Customization", path: "/services/tdl-development", icon: Code },
    { name: "Cloud", path: "/services/cloud-services", icon: Server },
    { name: "Web", path: "/services/tally-mobile", icon: Smartphone },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-brand-gold/20 shadow-sm"
          : "bg-white"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={absLogo}
              alt="ABS Technologies"
              className="h-12"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative flex items-center gap-2 text-[14px] lg:text-[15px] font-semibold transition-all duration-200 px-1 py-1 ${
                    isActive
                      ? "text-brand-red"
                      : "text-gray-600 hover:text-brand-red"
                  }`}
                >
                  <span className={`flex items-center justify-center w-6 h-6 rounded-md transition-all duration-200 ${
                    isActive ? "bg-brand-red text-white" : "text-gray-400 group-hover:text-brand-red"
                  }`}>
                    <Icon size={13} />
                  </span>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-brand-red rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => setServicePopupOpen(true)}
              className="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded-full shadow-md hover:bg-brand-red-dark transition font-bold text-xs lg:text-sm"
            >
              <Wrench size={14} /> Service
            </button>
            <a
              href="https://cloud.abstechnologies.co.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-brand-red border-2 border-brand-red px-4 py-[7px] rounded-full shadow-sm hover:bg-brand-red hover:text-white transition font-bold text-xs lg:text-sm"
            >
              Login <ArrowRight size={14} />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#eaeff8] pt-20 px-6 md:hidden backdrop-blur-md"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 text-base font-semibold py-3 px-2 rounded-xl text-gray-700 hover:text-brand-red hover:bg-brand-gold/10"
                  >
                    <Icon size={18} className="text-brand-red" />
                    {link.name}
                  </Link>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setServicePopupOpen(true);
                }}
                className="mt-4 bg-brand-red text-white py-3 rounded-full font-bold text-center shadow-md text-sm flex items-center justify-center gap-2"
              >
                <Wrench size={15} /> Request a Service
              </button>

              <a
                href="https://cloud.abstechnologies.co.in/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-white text-brand-red border-2 border-brand-red py-3 rounded-full font-bold text-center shadow-sm text-sm flex items-center justify-center gap-2"
              >
                Login <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Popup Form */}
      <ServicePopup
        isOpen={servicePopupOpen}
        onClose={() => setServicePopupOpen(false)}
      />
    </>
  );
};

export default Navbar;
