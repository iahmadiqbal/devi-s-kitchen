import Layout from "../../components/Layout";
import AnimatedSection from "../../components/AnimatedSection";
import CTASection from "../../components/CTASection";

const DailyDelivery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&q=80"
          alt="Daily Meal Delivery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground max-w-4xl leading-tight">
              Daily Meal Delivery
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mt-4 max-w-2xl">
              Fresh, nutritious meals delivered to your door every single day
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Daily Fresh Meal System */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80"
                  alt="Daily Fresh Meal System"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Daily Fresh Meal System
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our daily meal delivery service brings restaurant-quality, home-cooked meals to your doorstep every day. Each meal is prepared fresh on the day of delivery using high-quality ingredients and traditional cooking methods.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  No more meal planning, grocery shopping, or cooking. We handle everything so you can enjoy delicious, nutritious meals without the hassle. Perfect for busy professionals, seniors, and anyone who values convenience without compromising on quality.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Menu Variety & Rotation */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Menu Variety & Rotation
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  We believe variety is the spice of life. Our rotating menu features diverse cuisines, seasonal ingredients, and balanced nutrition. You'll never get bored with our carefully curated meal selections that change throughout the week.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  From traditional comfort foods to international flavors, our chefs create menus that excite your taste buds while meeting nutritional guidelines. Each week brings new dishes to discover and enjoy.
                </p>
                <ul className="space-y-2 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Weekly rotating menu with 20+ meal options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Seasonal specials featuring fresh local ingredients</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                  alt="Menu Variety"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Delivery Schedule */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80"
                  alt="Delivery Schedule"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Delivery Schedule
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  We understand that timing matters. Our delivery schedule is designed to fit your lifestyle, with flexible time slots available for breakfast, lunch, and dinner deliveries. Choose the times that work best for you.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Our reliable delivery team ensures your meals arrive on time, every time. You'll receive notifications when your delivery is on the way, and our contactless delivery option provides added convenience and safety.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Customer Convenience */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Customer Convenience
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  We've designed our service with your convenience in mind. From easy online ordering to flexible subscription management, everything is streamlined to make your experience effortless.
                </p>
                <ul className="space-y-3 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Simple online ordering and meal selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Pause or skip deliveries anytime with no penalties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Contactless delivery for safety and convenience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>24/7 customer support via phone, email, or chat</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt="Customer Convenience"
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

export default DailyDelivery;
