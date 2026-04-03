import Layout from "../../components/Layout";
import AnimatedSection from "../../components/AnimatedSection";
import CTASection from "../../components/CTASection";

const CustomPlans = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80"
          alt="Custom Meal Plans"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl leading-tight">
              Custom Meal Plans
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl">
              Personalized nutrition tailored to your unique needs and goals
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Tailored Nutrition Plans */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
                  alt="Tailored Nutrition"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Tailored Nutrition Plans
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Every person has unique nutritional needs based on their health status, lifestyle, and goals. Our custom meal plans are designed specifically for you, taking into account your medical conditions, activity level, food preferences, and dietary restrictions.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Whether you're managing diabetes, recovering from surgery, training for an athletic event, or simply want to eat healthier, we create meal plans that support your specific objectives. No two plans are exactly alike—yours is built just for you.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Diet Consultation Support */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Diet Consultation Support
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our custom meal plan service includes consultation with certified nutritionists and dietitians. During your initial consultation, we'll discuss your health history, current diet, goals, and any challenges you're facing with nutrition.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Based on this comprehensive assessment, our nutrition experts will design a meal plan that's both effective and enjoyable. We provide ongoing support with regular check-ins to monitor progress and make adjustments as needed.
                </p>
                <ul className="space-y-2 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>One-on-one consultation with certified nutritionists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Regular progress monitoring and plan adjustments</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80"
                  alt="Diet Consultation"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Flexible Meal Combinations */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80"
                  alt="Flexible Combinations"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Flexible Meal Combinations
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Custom doesn't mean rigid. Our meal plans offer flexibility in how you combine and schedule your meals. Choose from a variety of breakfast, lunch, dinner, and snack options that fit within your nutritional parameters.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Want to eat lighter on certain days? Need extra protein after workouts? Prefer smaller, more frequent meals? We can accommodate all of these preferences while ensuring you meet your nutritional targets. Your plan evolves with your needs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Client-Specific Requirements */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Client-Specific Requirements
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  We understand that some clients have very specific requirements due to medical conditions, religious practices, ethical beliefs, or personal preferences. Our custom meal service is designed to accommodate even the most detailed specifications.
                </p>
                <ul className="space-y-3 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Medical diet compliance (renal, cardiac, diabetic, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Allergen-free meal preparation with strict protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Cultural and religious dietary accommodations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Texture modifications for swallowing difficulties</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80"
                  alt="Client Requirements"
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

export default CustomPlans;
