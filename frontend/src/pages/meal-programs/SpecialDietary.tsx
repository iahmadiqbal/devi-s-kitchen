import Layout from "../../components/Layout";
import AnimatedSection from "../../components/AnimatedSection";
import CTASection from "../../components/CTASection";

const SpecialDietary = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&q=80"
          alt="Special Dietary Meals"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl leading-tight">
              Special Dietary Meals (Low Sodium, Diabetic, etc.)
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl">
              Medically-tailored meals for specific health conditions and dietary needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Health-Focused Meal Options */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
                  alt="Health-Focused Meals"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Health-Focused Meal Options
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our special dietary meal service is designed for individuals managing chronic health conditions through nutrition. We understand that food is medicine, and the right diet can significantly improve health outcomes and quality of life.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Each meal is carefully crafted to meet specific medical dietary guidelines while still being delicious and satisfying. We work with healthcare providers to ensure our meals support your treatment plan and health goals.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Low Sodium & Diabetic Meals */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Low Sodium & Diabetic Meals
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our low sodium meals are designed for individuals with hypertension, heart disease, or kidney conditions. We use herbs, spices, and natural flavors to create tasty meals without relying on salt, keeping sodium levels well below recommended limits.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  For diabetic meals, we focus on balanced carbohydrates, high fiber, and controlled portions to help manage blood sugar levels. Each meal includes detailed nutritional information including carb counts and glycemic load.
                </p>
                <ul className="space-y-2 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Low sodium meals under 500mg per serving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Diabetic-friendly with controlled carbohydrates</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80"
                  alt="Low Sodium Diabetic Meals"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Nutritionist-Approved Plans */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80"
                  alt="Nutritionist Approved"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Nutritionist-Approved Plans
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Every special dietary meal plan is reviewed and approved by our team of registered dietitians and nutritionists. We stay current with the latest medical nutrition therapy guidelines and evidence-based dietary recommendations.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Our nutrition team collaborates with your healthcare providers when needed, ensuring your meals align with your overall treatment plan. We provide detailed nutritional analysis and can adjust plans based on lab results or changing health needs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Safety & Ingredient Control */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Safety & Ingredient Control
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  When it comes to special dietary needs, precision and safety are paramount. We maintain strict ingredient control protocols, with dedicated preparation areas for allergen-free and special diet meals to prevent cross-contamination.
                </p>
                <ul className="space-y-3 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Rigorous ingredient verification and documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Separate preparation areas for allergen-free meals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Complete nutritional labeling on every meal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Regular quality audits and safety inspections</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
                  alt="Safety and Control"
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

export default SpecialDietary;
