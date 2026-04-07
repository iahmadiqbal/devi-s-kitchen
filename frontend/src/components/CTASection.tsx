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
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-foreground">
          {title}
        </h2>
        <p className="text-footer-text max-w-xl mx-auto mb-8">{subtitle}</p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary-dark transition-all duration-300"
        >
          Contact Us
        </Link>
        
        {/* Menu Pricing Announcement */}
        <div className="mt-6 flex items-baseline justify-center gap-1 max-w-2xl mx-auto px-4">
          <Star className="w-3 h-3 text-white fill-white flex-shrink-0" />
          <p className="text-xs md:text-sm text-footer-text leading-relaxed">
            Our menu pricing is coming soon — stay tuned for something delicious
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
