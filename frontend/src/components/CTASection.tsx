import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

interface Props {
  title?: string;
  subtitle?: string;
}

const CTASection = ({
  title = "Get in Touch for Meal Services",
  subtitle = "Let us design a meal plan that fits your needs and budget.",
}: Props) => (
  <section className="py-20 bg-footer text-footer-text mb-16">
    <div className="container mx-auto px-4 text-center">
      <AnimatedSection>
        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-primary-foreground">
          {title}
        </h2>
        
        <p className="text-footer-text max-w-xl mx-auto mb-6">{subtitle}</p>
        
        {/* Menu Pricing Announcement */}
        <div className="mb-8 flex items-baseline justify-center gap-1 max-w-2xl mx-auto px-4">
          <Star className="w-3 h-3 text-white fill-white flex-shrink-0" aria-hidden="true" />
          <p className="text-xs md:text-sm text-footer-text leading-relaxed">
            Our menu pricing is coming soon — stay tuned for something delicious
          </p>
        </div>
        
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-white text-footer font-semibold rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg"
        >
          Contact Us
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
