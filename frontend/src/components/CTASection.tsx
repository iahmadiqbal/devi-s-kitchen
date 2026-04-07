import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import AnnouncementBanner from "./AnnouncementBanner";

interface Props {
  title?: string;
  subtitle?: string;
}

const CTASection = ({
  title = "Get in Touch for Meal Services",
  subtitle = "Let us design a meal plan that fits your needs and budget.",
}: Props) => (
  <>
    <section className="py-20 bg-footer text-footer-text">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-foreground">
            {title}
          </h2>
          <p className="text-footer-text max-w-xl mx-auto mb-8">{subtitle}</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary text-foreground font-medium rounded-md hover:bg-primary-dark transition-colors"
          >
            Contact Us
          </Link>
        </AnimatedSection>
      </div>
    </section>
    <AnnouncementBanner />
  </>
);

export default CTASection;
