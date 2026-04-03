import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Download, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { 
    label: "Who We Serve", 
    path: "/who-we-serve",
    dropdown: [
      { label: "Hospitals & Healthcare Facilities", path: "/who-we-serve#hospitals" },
      { label: "Senior Living & Old Age Homes", path: "/who-we-serve#senior-living" },
      { label: "NGOs & Community Organizations", path: "/who-we-serve#ngos" },
      { label: "Individual Meal Services (Tiffin for Seniors)", path: "/who-we-serve#individual" },
    ]
  },
  { 
    label: "Meal Programs", 
    path: "/meal-programs",
    dropdown: [
      { label: "Bulk Meal Supply (Hospitals & Facilities)", path: "/meal-programs#bulk-meal" },
      { label: "Daily Meal Delivery", path: "/meal-programs#daily-delivery" },
      { label: "Monthly Tiffin Plans", path: "/meal-programs#monthly-tiffin" },
      { label: "Custom Meal Plans", path: "/meal-programs#custom-plans" },
      { label: "Special Dietary Meals (Low Sodium, Diabetic, etc.)", path: "/meal-programs#special-dietary" },
    ]
  },
  { label: "Nutrition & Quality", path: "/nutrition-quality" },
  { label: "About Us", path: "/about" },
  { label: "Careers", path: "/careers" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-header/95 backdrop-blur-sm shadow-lg" : "bg-header"
      }`}
    >
      <div className="w-full px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 md:h-24 gap-3">
          {/* Logo */}
          <Link to="/" className="text-primary-foreground font-heading text-xl md:text-2xl font-bold tracking-wide flex-shrink-0">
            Devi's <span className="text-primary">Kitchen</span>
          </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-shrink-0">
          {navLinks.map((link) => (
            <div 
              key={link.path} 
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <>
                  <button
                    className={`flex items-center gap-0.5 text-sm font-medium px-2.5 py-2 rounded-md transition-colors hover:text-primary hover:bg-primary/5 whitespace-nowrap ${
                      location.pathname === link.path ? "text-primary" : "text-primary-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white shadow-2xl rounded-lg overflow-hidden z-50 border border-gray-200"
                      >
                        <div className="py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-all duration-150"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`text-sm font-medium px-2.5 py-2 rounded-md transition-colors hover:text-primary hover:bg-primary/5 whitespace-nowrap ${
                    location.pathname === link.path ? "text-primary" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <a 
            href="tel:+14034617619" 
            className="flex items-center gap-1 text-primary-foreground text-xs hover:text-primary transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+1 403-461-7619</span>
          </a>
          <Link
            to="/contact"
            className="px-3 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Contact Us
          </Link>
          <Link
            to="/app-under-construction"
            className="flex items-center gap-1 px-3 py-2 border border-primary text-primary text-xs font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download App</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-primary-foreground p-2 flex-shrink-0">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-header border-t border-primary/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className={`flex items-center justify-between w-full text-sm font-medium py-2 transition-colors hover:text-primary ${
                          location.pathname === link.path ? "text-primary" : "text-primary-foreground"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-2 mt-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="text-sm text-primary-foreground/80 hover:text-primary py-1"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                        location.pathname === link.path ? "text-primary" : "text-primary-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <hr className="border-primary/20" />
              <a href="tel:+14034617619" className="flex items-center gap-1.5 text-primary-foreground text-sm py-2">
                <Phone className="w-4 h-4" /> +1 403-461-7619
              </a>
              <Link to="/contact" className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md text-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
