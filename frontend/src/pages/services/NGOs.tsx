import Layout from "../../components/Layout";
import AnimatedSection from "../../components/AnimatedSection";
import CTASection from "../../components/CTASection";

const NGOs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80"
          alt="NGOs & Community Organizations"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-screen-xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl leading-tight">
              NGOs & Community Organizations
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl">
              Empowering communities through accessible, nutritious meal programs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Supporting NGOs with Meal Programs */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                  alt="Supporting NGOs"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Supporting NGOs with Meal Programs
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Devi's Kitchen is proud to partner with NGOs and community organizations that serve vulnerable populations. We understand the challenges of feeding large groups with limited budgets, and we're here to help.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Our meal programs are designed to provide nutritious, dignified food service to shelters, community centers, food banks, and outreach programs. We believe everyone deserves access to healthy, satisfying meals.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Large-Scale Food Distribution */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Large-Scale Food Distribution
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our commercial kitchen facilities can handle high-volume meal production for community events, emergency relief efforts, and daily feeding programs. We have the capacity to serve hundreds or even thousands of meals per day.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  With efficient logistics and reliable transportation, we ensure timely delivery to multiple distribution points. Our packaging is practical for both on-site serving and take-away distribution.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80"
                  alt="Large-Scale Distribution"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Affordable & Flexible Meal Plans */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Affordable Meal Plans"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Affordable & Flexible Meal Plans
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  We offer competitive pricing structures tailored to nonprofit budgets. Our flexible meal plans can be customized based on your organization's needs, whether you require daily meals, weekly deliveries, or event-based catering.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  We work with grant-funded programs and can provide detailed invoicing and reporting to support your funding requirements. No hidden costs, just transparent, affordable nutrition solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Community Impact & Outreach */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Community Impact & Outreach
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  When you partner with Devi's Kitchen, you're not just getting a meal service—you're gaining a committed ally in your mission to serve the community. We share your values of compassion, dignity, and social responsibility.
                </p>
                <ul className="space-y-3 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Nutritious meals that respect diverse dietary needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Scalable solutions for growing programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Responsive service with dedicated support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Commitment to reducing food insecurity</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80"
                  alt="Community Impact"
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

export default NGOs;
