import Layout from "../../components/Layout";
import AnimatedSection from "../../components/AnimatedSection";
import CTASection from "../../components/CTASection";

const SeniorLiving = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&q=80"
          alt="Senior Living & Old Age Homes"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-screen-xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl leading-tight">
              Senior Living & Old Age Homes
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl">
              Compassionate nutrition care designed for the comfort and health of seniors
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Overview of Senior Nutrition Services */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80"
                  alt="Senior Nutrition Services"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Overview of Senior Nutrition Services
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our senior nutrition services are thoughtfully crafted to address the unique dietary needs of elderly residents. We understand that aging brings changes in appetite, digestion, and nutritional requirements.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Each meal is designed to be easy to chew and digest while providing essential nutrients that support bone health, cognitive function, and overall vitality. We create meals that bring comfort and joy to every dining experience.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Specialized Meal Planning for Elderly */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Specialized Meal Planning for Elderly
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our nutritionists work closely with healthcare providers to create meal plans that accommodate common senior health conditions such as diabetes, hypertension, and heart disease. We offer texture-modified meals for those with swallowing difficulties.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Every menu is carefully balanced to provide adequate protein, fiber, vitamins, and minerals while being low in sodium and unhealthy fats. We also consider cultural preferences and personal tastes to ensure meal satisfaction.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80"
                  alt="Specialized Meal Planning"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Comfort, Care & Routine-Based Meals */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80"
                  alt="Comfort Care Meals"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Comfort, Care & Routine-Based Meals
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  We believe that mealtimes should be moments of comfort and connection. Our service maintains consistent meal schedules that seniors can rely on, creating a sense of routine and stability that is so important in senior care.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  From familiar home-style recipes to seasonal favorites, we prepare meals that evoke warmth and nostalgia. Our presentation is appetizing and our portions are appropriate, encouraging healthy eating habits.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits for Old Age Homes */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Benefits for Old Age Homes
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Partnering with Devi's Kitchen allows your facility to focus on care while we handle nutrition. Our service reduces kitchen overhead, ensures consistent meal quality, and provides peace of mind to families and administrators.
                </p>
                <ul className="space-y-3 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Age-appropriate nutrition designed by experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Flexible menu options for diverse dietary needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Reliable daily delivery with consistent quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Cost-effective solution with transparent pricing</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&q=80"
                  alt="Benefits for Old Age Homes"
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

export default SeniorLiving;
