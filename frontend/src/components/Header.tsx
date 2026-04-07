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
      { label: "Hospitals & Healthcare Facilities", path: "/services/hospitals" },
      { label: "Senior Living & Old Age Homes", path: "/services/senior-living" },
      { label: "NGOs & Community Organizations", path: "/services/ngos" },
      { label: "Individual Meal Services (Tiffin for Seniors)", path: "/services/individual" },
    ]
  },
  { 
    label: "Meal Programs", 
    path: "/meal-programs",
    dropdown: [
      { label: "Bulk Meal Supply (Hospitals & Facilities)", path: "/meal-programs/bulk-supply" },
      { label: "Daily Meal Delivery", path: "/meal-programs/daily-delivery" },
      { label: "Monthly Tiffin Plans", path: "/meal-programs/monthly-tiffin" },
      { label: "Custom Meal Plans", path: "/meal-programs/custom-plans" },
      { label: "Special Dietary Meals (Low Sodium, Diabetic, etc.)", path: "/meal-programs/special-dietary" },
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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
      {/* Main Header Bar */}
      <div className="w-full px-3 sm:px-4 lg:px-20 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between h-20 lg:h-22 gap-2 sm:gap-4">
          {/* Logo - Left with more padding */}
          <Link to="/" className="flex items-center flex-shrink-0 ml-0 lg:ml-32">
            <img src="/logo.png" alt="Devi's Kitchen" className="h-[45px] w-[75px] sm:h-[60px] sm:w-[100px]" />
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 mr-0 lg:mr-32">
            <a 
              href="tel:+14034617619" 
              className="flex items-center gap-1.5 text-foreground text-sm lg:text-[15px] font-medium hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline whitespace-nowrap">+1 403-461-7619</span>
            </a>
            <Link
              to="/contact"
              className="px-3 sm:px-3 md:px-5 py-2 sm:py-2 bg-footer text-footer-text text-sm sm:text-sm lg:text-[15px] font-semibold hover:bg-footer/80 transition-all duration-300 whitespace-nowrap rounded-md"
            >
              Contact Us
            </Link>
            <Link
              to="/app-under-construction"
              className="hidden lg:flex items-center gap-2 px-5 py-2 border-2 border-gray-300 text-foreground text-[15px] font-medium hover:border-primary hover:text-primary transition-colors whitespace-nowrap rounded-md"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="lg:hidden text-foreground p-1.5 sm:p-2 z-50 relative hover:bg-gray-100 rounded-md transition-colors flex-shrink-0 ml-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />}
            </button>
          </div>
        </div>
        <div className="border-b border-foreground/20 ml-0 lg:ml-32 mr-0 lg:mr-32"></div>
      </div>

      {/* Navigation Bar */}
      <div className="hidden lg:block bg-white">
        <div className="w-full px-6 lg:px-20 max-w-[1400px] mx-auto">
          <div className="ml-0 lg:ml-32 mr-0 lg:mr-32">
            <nav className="flex items-center justify-center gap-1">
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
                      className={`flex items-center gap-1 text-[15px] font-semibold px-5 py-2 transition-colors whitespace-nowrap ${
                        location.pathname.startsWith(link.path) && link.path !== "/" 
                          ? "text-primary" 
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-0 w-80 bg-white shadow-xl z-50 border-t-[3px] border-primary"
                        >
                          <div className="py-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block px-5 py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-150"
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
                    className={`block text-[15px] font-semibold px-5 py-2 transition-colors whitespace-nowrap ${
                      location.pathname === link.path 
                        ? "text-primary" 
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className={`flex items-center justify-between w-full text-sm font-semibold py-2.5 transition-colors ${
                          location.pathname.startsWith(link.path) && link.path !== "/" ? "text-primary" : "text-foreground hover:text-primary"
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
                            className="pl-4 flex flex-col gap-1 mt-1 mb-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="text-sm text-foreground/70 hover:text-primary py-1.5"
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
                      className={`block text-sm font-semibold py-2.5 transition-colors ${
                        location.pathname === link.path ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <hr className="border-gray-200 my-2" />
              <Link 
                to="/app-under-construction"
                className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 text-foreground text-sm font-semibold hover:border-primary hover:text-primary transition-colors rounded-md"
              >
                <Download className="w-4 h-4" />
                <span>Download App</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
