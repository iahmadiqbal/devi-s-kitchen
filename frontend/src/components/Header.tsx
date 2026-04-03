import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Who We Serve", path: "/who-we-serve" },
  { label: "Meal Programs", path: "/meal-programs" },
  { label: "Nutrition & Quality", path: "/nutrition-quality" },
  { label: "About Us", path: "/about" },
  { label: "Careers", path: "/careers" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-header/95 backdrop-blur-sm shadow-lg" : "bg-header"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="text-primary-foreground font-heading text-xl md:text-2xl font-bold tracking-wide">
          Devi's <span className="text-primary">Kitchen</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+14034617619" className="flex items-center gap-1.5 text-primary-foreground text-sm hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +1 403-461-7619
          </a>
          <Link
            to="/contact"
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary-dark transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-1.5 px-4 py-2 border border-primary text-primary text-sm font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Download className="w-4 h-4" />
            Download App
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-primary-foreground p-2">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                    location.pathname === link.path ? "text-primary" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
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
