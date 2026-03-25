// Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { services } from "../data/services";

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
    { name: "Impact", path: "#" },
    { name: "Contact", path: "/contact" },
  ];

  // const servicesDropdown = [
  //   { name: "Tally Solutions", path: "/services/tally-solutions" },
  //   { name: "SAP", path: "/services/sap" },
  //   { name: "TDL", path: "/services/tdl" },
  //   { name: "AMC", path: "/services/amc" },
  //   { name: "Cloud Service", path: "/services/cloud-service" },
  //   { name: "Web/App", path: "/services/web-app-software" },
  // ];

  const servicesDropdown = services.map(service => ({
    name: service.title,
    path: `/services/${service.slug}`,
  }));

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-sm py-2.5"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              src="https://abstechnologies.co.in/images/logos/Logo.jpg"
              alt="ABS Infotech"
              className={`transition-all duration-500 ${scrolled ? "h-8" : "h-10"}`}
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
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
                      to={link.path}
                      className={`relative text-sm font-medium transition ${isActive ? "text-red-500" : "text-gray-700 hover:text-red-500"
                        }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-500 rounded-full"
                        />
                      )}
                    </Link>

                    {/* 2-COLUMN DROPDOWN */}
                    {/* 2-COLUMN DROPDOWN */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl py-4 px-4 z-50 grid grid-cols-2 gap-3"
                        >
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="block text-gray-800 font-medium text-sm rounded-lg p-2 hover:bg-red-50 hover:text-red-600 transition-all duration-200 text-center"
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
                  className={`relative text-sm font-medium transition ${isActive ? "text-red-500" : "text-gray-700 hover:text-red-500"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-red-300 transition"
            >
              Get Demo <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* MOBILE BUTTON */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4 text-center">
              {links.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <span className="text-lg font-medium py-3 rounded-xl block">Services</span>
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setMobileOpen(false)}
                          className="block text-gray-700 pl-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all"
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
                    className="text-lg font-medium py-3 rounded-xl hover:bg-gray-100"
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                className="mt-6 bg-red-500 text-white py-3 rounded-full"
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