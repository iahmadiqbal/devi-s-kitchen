import Layout from "../../components/Layout";
import AnimatedSection from "../../components/AnimatedSection";
import CTASection from "../../components/CTASection";

const Hospitals = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80"
          alt="Hospital Food Service"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-screen-xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl leading-tight">
              Hospitals & Healthcare Facilities
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl">
              Nutritious meal solutions designed for patient recovery and healthcare excellence
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Introduction to Healthcare Meal Services */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                  alt="Healthcare Meal Services"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Introduction to Healthcare Meal Services
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  At Devi's Kitchen, we understand that nutrition plays a critical role in patient recovery and overall health outcomes. Our healthcare meal services are specifically designed to meet the unique dietary requirements of hospitals and medical facilities.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  We provide balanced, nutritious meals that support healing, boost immunity, and enhance patient satisfaction. From post-operative diets to therapeutic nutrition plans, we deliver meals that healthcare professionals trust.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Nutritional Standards & Hygiene Practices */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Nutritional Standards & Hygiene Practices
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  We adhere to the highest nutritional standards and food safety protocols. Our meals are prepared in certified kitchens that follow strict hygiene guidelines, ensuring every dish meets healthcare industry requirements.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Our team includes certified nutritionists who design meal plans based on therapeutic diets, caloric requirements, and specific patient needs. We maintain complete traceability from ingredient sourcing to meal delivery.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                  alt="Hygiene Standards"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Bulk Meal Preparation & Delivery System */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80"
                  alt="Bulk Meal Preparation"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Bulk Meal Preparation & Delivery System
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our state-of-the-art kitchen facilities are equipped to handle large-scale meal production without compromising quality. We can prepare and deliver hundreds of meals daily, ensuring timely service for your facility.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  With temperature-controlled transportation and efficient logistics, we guarantee that meals arrive fresh, hot, and ready to serve. Our flexible delivery schedules accommodate breakfast, lunch, dinner, and special dietary requirements.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Our Service for Hospitals */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Why Choose Our Service for Hospitals
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Partnering with Devi's Kitchen means choosing reliability, quality, and compassion. We understand the critical nature of healthcare nutrition and deliver consistent, high-quality meals that support patient recovery.
                </p>
                <ul className="space-y-3 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Certified nutritionists and experienced culinary team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Customizable meal plans for diverse patient needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Strict adherence to food safety and hygiene standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Reliable delivery and responsive customer service</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80"
                  alt="Why Choose Us"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Hospitals;
