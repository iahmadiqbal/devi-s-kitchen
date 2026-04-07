import { Link } from "react-router-dom";
import { Construction, ArrowLeft, Phone, Mail } from "lucide-react";

const AppUnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <Construction className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          App Under Construction
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          We're working hard to bring you our mobile app. Stay tuned for updates!
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Want to know when our app launches? Contact us and we'll keep you updated.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a 
              href="tel:+14034617619" 
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+1 403-461-7619</span>
            </a>
            
            <span className="hidden sm:inline text-gray-300">|</span>
            
            <Link 
              to="/contact" 
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Contact Us</span>
            </Link>
          </div>
          
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-footer text-footer-text font-medium rounded-md hover:bg-footer/80 transition-all duration-300"
          >
            Contact Us Now
          </Link>
        </div>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AppUnderConstruction;
