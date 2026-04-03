import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import { Heart, Eye, Target, Award, Clock, Users } from "lucide-react";

const whyUs = [
  { icon: Heart, text: "Made with care and passion" },
  { icon: Award, text: "Certified kitchen & trained staff" },
  { icon: Clock, text: "On-time delivery, every time" },
  { icon: Users, text: "Trusted by healthcare facilities" },
  { icon: Target, text: "Customizable for any dietary need" },
];

const About = () => (
  <Layout>
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">About Us</h1>
          <p className="text-paragraph max-w-2xl mx-auto">Learn about our journey, mission, and commitment to healthy living.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Who We Are */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Who We Are</h2>
          <p className="text-paragraph leading-relaxed">
            Devi's Kitchen is a Calgary-based food service company specializing in nutritious, affordable meals for healthcare facilities, senior living homes, NGOs, and individuals. We believe that good food is the foundation of good health.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* What We Do */}
    <section className="py-16 bg-surface-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">What We Do</h2>
          <p className="text-paragraph leading-relaxed">
            We provide comprehensive meal services including bulk supply, daily delivery, monthly tiffin plans, and custom dietary meals. From hospital kitchens to individual doorsteps, we ensure every meal is prepared with the highest standards of hygiene, nutrition, and taste.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <AnimatedSection direction="left">
            <div className="p-8 rounded-lg bg-surface-light">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-paragraph text-sm leading-relaxed">
                To make nutritious, high-quality food accessible and affordable for healthcare institutions, senior care facilities, and every individual who deserves a wholesome meal.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="p-8 rounded-lg bg-surface-light">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-paragraph text-sm leading-relaxed">
                To become Western Canada's most trusted healthcare food service provider, known for nutrition excellence, reliability, and compassionate service.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 bg-surface-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">Why Choose Us</h2>
          <div className="space-y-4">
            {whyUs.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default About;
