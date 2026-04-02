// Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { services } from "../data/services";
import absLogo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const servicesDropdown = services.map(service => ({
    name: service.title,
    path: `/services/${service.slug}`,
  }));

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass-panel py-2"
          : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={absLogo}
              alt="ABS Technologies"
              className={`transition-all duration-500 ${scrolled ? "h-12" : "h-14"}`}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.name === "Services") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to="/services"
                      className={`relative text-sm font-semibold transition ${isActive ? "text-brand-red font-bold" : "text-gray-700 hover:text-brand-red"
                        }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-red rounded-full"
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[calc(100%+8px)] left-[-80px] w-[420px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 p-4 grid grid-cols-2 gap-2 z-50"
                        >
                          {servicesDropdown.map((service) => (
                            <Link key={service.name}
                              to={service.path}
                              className="block text-sm font-semibold text-gray-700 rounded-xl px-4 py-3 hover:bg-brand-red/5 hover:text-brand-red transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-semibold transition ${isActive ? "text-brand-red font-bold" : "text-gray-700 hover:text-brand-red"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-red rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-brand-red text-white px-5 py-2.5 rounded-full shadow-md hover:bg-brand-red-dark transition font-bold text-sm"
            >
              Get Demo <ArrowRight size={15} />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
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
            className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <span className="text-base font-semibold py-3 block text-gray-400 uppercase text-xs tracking-wider">Services</span>
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setMobileOpen(false)}
                          className="block text-gray-700 font-medium pl-4 py-2 rounded-lg hover:bg-brand-red/5 hover:text-brand-red transition-all text-sm"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-semibold py-3 rounded-xl hover:bg-gray-50"
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-brand-red text-white py-3 rounded-full font-bold text-center shadow-md text-sm"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
