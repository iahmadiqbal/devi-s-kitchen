import Layout from "../../components/Layout";
import AnimatedSection from "../../components/AnimatedSection";
import CTASection from "../../components/CTASection";

const BulkSupply = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80"
          alt="Bulk Meal Supply"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-screen-xl mx-auto">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl leading-tight mx-auto">
              Bulk Meal Supply (Hospitals & Facilities)
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              Large-scale meal solutions for healthcare and institutional needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: Overview of Bulk Meal Services */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                  alt="Bulk Meal Services Overview"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Overview of Bulk Meal Services
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our bulk meal supply service is designed for hospitals, healthcare facilities, and large institutions that require consistent, high-volume meal production. We specialize in preparing hundreds to thousands of meals daily while maintaining exceptional quality standards.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  Whether you need breakfast, lunch, dinner, or all three, our commercial kitchen facilities are equipped to handle your requirements. We work closely with facility managers to create customized meal programs that meet specific dietary guidelines and budget constraints.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 2: Capacity & Scalability */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Capacity & Scalability
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our state-of-the-art kitchen facilities can scale production to meet your growing needs. From 100 meals per day to over 5,000, we have the infrastructure, equipment, and trained staff to deliver consistently.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  We utilize efficient batch cooking methods, advanced food preparation technology, and streamlined workflows to ensure timely production without compromising quality. Our capacity planning ensures we can handle seasonal fluctuations and emergency situations.
                </p>
                <ul className="space-y-2 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Flexible production capacity from 100 to 5,000+ meals daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Rapid scaling for emergency or special events</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                  alt="Capacity and Scalability"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Hygiene & Safety Standards */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
                  alt="Hygiene and Safety"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Hygiene & Safety Standards
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Food safety is our top priority. Our facilities are certified and regularly inspected to meet the highest health and safety standards. We follow strict HACCP (Hazard Analysis Critical Control Point) protocols throughout the entire food preparation process.
                </p>
                <p className="text-base md:text-lg text-paragraph leading-relaxed">
                  From ingredient receiving to final packaging, every step is monitored and documented. Our staff undergoes regular food safety training, and we maintain rigorous cleaning and sanitization schedules. Temperature controls, allergen management, and cross-contamination prevention are built into our daily operations.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Delivery Logistics */}
      <section className="py-20 bg-surface-light overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Delivery Logistics
                </h2>
                <p className="text-base md:text-lg text-paragraph leading-relaxed mb-4">
                  Our delivery system is designed for reliability and efficiency. We use temperature-controlled vehicles to ensure meals arrive at the correct serving temperature. Our logistics team coordinates with your facility to establish delivery schedules that work seamlessly with your operations.
                </p>
                <ul className="space-y-3 text-base md:text-lg text-paragraph leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Temperature-controlled transportation fleet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Flexible delivery windows to match your schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Real-time tracking and delivery confirmation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span>Dedicated delivery personnel trained in food handling</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80"
                  alt="Delivery Logistics"
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

export default BulkSupply;
