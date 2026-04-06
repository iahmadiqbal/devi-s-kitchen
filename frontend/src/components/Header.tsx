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
      <div className="w-full px-6 lg:px-20 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Logo - Left with more padding */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 ml-0 lg:ml-32">
            <img src="/logo.svg" alt="Devi's Kitchen" className="h-11 w-11 lg:h-14 lg:w-14" />
            <div className="flex flex-col">
              <span className="font-heading text-base lg:text-[19px] font-bold text-[#2D2D2D] leading-tight">
                Devi's Kitchen
              </span>
              <span className="text-[10px] lg:text-[11px] text-[#9B7E46] font-medium tracking-wide hidden sm:block">
                Nourishing Care, Every Meal
              </span>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-3 mr-0 lg:mr-32">
            <a 
              href="tel:+14034617619" 
              className="flex items-center gap-1.5 text-[#2D2D2D] text-sm lg:text-[15px] font-medium hover:text-[#C4A574] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline whitespace-nowrap">+1 403-461-7619</span>
            </a>
            <Link
              to="/contact"
              className="px-5 py-2 bg-[#C4A574] text-white text-sm lg:text-[15px] font-semibold hover:bg-[#9B7E46] transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
            <Link
              to="/app-under-construction"
              className="hidden lg:flex items-center gap-2 px-5 py-2 border-2 border-gray-300 text-[#2D2D2D] text-[15px] font-medium hover:border-[#C4A574] hover:text-[#C4A574] transition-colors whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="lg:hidden text-[#2D2D2D] p-1.5"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div className="border-b ml-0 lg:ml-32 mr-0 lg:mr-32" style={{ borderWidth: '1px', borderColor: '#000000' }}></div>
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
                      className={`flex items-center gap-1 text-[15px] font-semibold px-5 py-4 transition-colors whitespace-nowrap ${
                        location.pathname.startsWith(link.path) && link.path !== "/" 
                          ? "text-[#C4A574]" 
                          : "text-[#2D2D2D] hover:text-[#C4A574]"
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
                          className="absolute top-full left-0 mt-0 w-80 bg-white shadow-xl z-50 border-t-[3px] border-[#C4A574]"
                        >
                          <div className="py-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block px-5 py-3 text-sm text-[#2D2D2D] hover:bg-[#C4A574] hover:text-white transition-all duration-150"
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
                    className={`block text-[15px] font-semibold px-5 py-4 transition-colors whitespace-nowrap ${
                      location.pathname === link.path 
                        ? "text-[#C4A574]" 
                        : "text-[#2D2D2D] hover:text-[#C4A574]"
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
                          location.pathname.startsWith(link.path) && link.path !== "/" ? "text-[#C4A574]" : "text-[#2D2D2D] hover:text-[#C4A574]"
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
                                className="text-sm text-[#2D2D2D]/70 hover:text-[#C4A574] py-1.5"
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
                        location.pathname === link.path ? "text-[#C4A574]" : "text-[#2D2D2D] hover:text-[#C4A574]"
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
                className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 text-[#2D2D2D] text-sm font-semibold hover:border-[#C4A574] hover:text-[#C4A574] transition-colors"
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
