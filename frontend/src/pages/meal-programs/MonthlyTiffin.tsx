import Layout from "../../components/Layout";
import AnimatedSection from "../../components/AnimatedSection";
import CTASection from "../../components/CTASection";

const MonthlyTiffin = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1600&q=80"
          alt="Monthly Tiffin Plans"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl leading-tight">
              Monthly Tiffin Plans
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl">
              Affordable subscription plans for consistent, home-style meals
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Subscription-Based Plans */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80"
                  alt="Subscription Plans"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Subscription-Based Plans
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our monthly tiffin plans offer the best value for individuals and families who want consistent, quality meals without daily ordering. Subscribe once and enjoy hassle-free meal delivery throughout the month.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Choose from various subscription tiers based on your needs—lunch only, dinner only, or both. Each plan includes a set number of meals per week, with the flexibility to customize your preferences and dietary requirements.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Pricing & Flexibility */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Pricing & Flexibility
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our pricing is transparent and competitive. Monthly subscriptions offer significant savings compared to daily ordering, making healthy eating more affordable. We believe good nutrition shouldn't break the bank.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Life is unpredictable, and we get that. Our flexible plans allow you to pause, skip days, or adjust your subscription as needed. No long-term commitments or cancellation fees—just honest, straightforward service.
                </p>
                <ul className="space-y-2 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Save up to 20% with monthly subscriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>No hidden fees or long-term contracts</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
                  alt="Pricing and Flexibility"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Meal Customization Options */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80"
                  alt="Meal Customization"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Meal Customization Options
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Your tiffin, your way. We offer extensive customization options to match your taste preferences, dietary restrictions, and nutritional goals. Whether you prefer vegetarian, vegan, low-carb, or traditional meals, we've got you covered.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Adjust spice levels, exclude ingredients you don't like, or request specific dishes. Our system remembers your preferences, making each order easier than the last. You can also provide feedback on meals to help us refine your future deliveries.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Ideal for Seniors & Individuals */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Ideal for Seniors & Individuals
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our monthly tiffin plans are especially popular with seniors who want nutritious, easy-to-eat meals without the burden of cooking. We also serve busy professionals, students, and anyone who values convenience and health.
                </p>
                <ul className="space-y-3 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Age-appropriate portions and textures for seniors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Balanced nutrition for active individuals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Consistent delivery schedule you can rely on</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Family-friendly options for multiple household members</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80"
                  alt="Ideal for Seniors"
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

export default MonthlyTiffin;
