import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-footer text-footer-text pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl text-primary-foreground font-bold mb-4">
            Devi's <span className="text-primary">Kitchen</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Affordable, nutritious meals for healthcare facilities, senior living homes, and individuals across Calgary.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-primary-foreground font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/meal-programs" className="hover:text-primary transition-colors">Meal Programs</Link></li>
            <li><Link to="/who-we-serve" className="hover:text-primary transition-colors">Who We Serve</Link></li>
            <li><Link to="/nutrition-quality" className="hover:text-primary transition-colors">Nutrition & Quality</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-primary-foreground font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-primary-foreground font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <span>13G-2115 27 Ave NE, Calgary, Alberta, T2E7E4</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              <a href="tel:+14034617619" className="hover:text-primary transition-colors">+1 403-461-7619</a>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-footer-text hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-footer-text hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-footer-text hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/20 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Devi's Kitchen. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
