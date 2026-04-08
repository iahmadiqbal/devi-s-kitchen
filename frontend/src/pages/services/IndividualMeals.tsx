import Layout from "../../components/Layout";
import AnimatedSection from "../../components/AnimatedSection";
import CTASection from "../../components/CTASection";

const IndividualMeals = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80"
          alt="Individual Meal Services"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-screen-xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl leading-tight mx-auto">
              Individual Meal Services (Tiffin for Seniors)
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              Fresh, home-style meals delivered to your doorstep every day
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Personalized Meal Services */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
                  alt="Personalized Meal Services"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Personalized Meal Services
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our individual meal service brings the comfort of home-cooked food to seniors and busy individuals who value nutrition and convenience. Each meal is prepared with care, using fresh ingredients and traditional recipes.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  We understand that everyone has unique tastes and dietary requirements. That's why we offer personalized meal options that can be tailored to your preferences, health conditions, and cultural background.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Tiffin Service for Seniors */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Tiffin Service for Seniors
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our tiffin service is specially designed for seniors who want nutritious, easy-to-eat meals without the hassle of cooking. We deliver balanced meals that support healthy aging and provide the energy needed for daily activities.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Each tiffin includes properly portioned meals with soft textures when needed, appropriate seasoning, and ingredients that promote heart health, bone strength, and cognitive function. It's like having a caring family member prepare your meals.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80"
                  alt="Tiffin Service"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Fresh Daily Meal Preparation */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                  alt="Fresh Daily Preparation"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Fresh Daily Meal Preparation
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  We prepare every meal fresh each day—no frozen or pre-packaged foods. Our kitchen team starts early to ensure your meals are cooked, packed, and delivered at their peak freshness and flavor.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Quality ingredients are sourced locally when possible, and our recipes rotate regularly to provide variety while maintaining nutritional balance. You'll enjoy different flavors throughout the week without compromising on health.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Easy Subscription & Delivery */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Easy Subscription & Delivery
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Getting started is simple. Choose from our flexible subscription plans—daily, weekly, or monthly—and we'll handle the rest. No long-term commitments, and you can pause or modify your plan anytime.
                </p>
                <ul className="space-y-3 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Flexible delivery times that fit your schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Contactless delivery for safety and convenience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Easy online ordering and payment options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Responsive customer support for any questions</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Easy Subscription"
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

export default IndividualMeals;
