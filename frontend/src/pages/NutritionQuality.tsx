import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import { ShieldCheck, Apple, Leaf, ChefHat, Package, ClipboardList } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Food Safety Standards", desc: "We follow strict food safety regulations and HACCP guidelines to ensure every meal is safe." },
  { icon: Apple, title: "Nutritional Balance", desc: "Each meal is designed to meet daily nutritional needs with the right mix of macros and micronutrients." },
  { icon: Leaf, title: "Quality Ingredients", desc: "We source fresh, high-quality ingredients from trusted local suppliers." },
  { icon: ChefHat, title: "Hygiene & Preparation", desc: "Our kitchens maintain hospital-grade cleanliness with regular audits and staff training." },
  { icon: Package, title: "Packaging & Delivery", desc: "Temperature-controlled packaging and timely delivery ensure freshness from kitchen to table." },
  { icon: ClipboardList, title: "Diet-Specific Planning", desc: "Custom meal plans for diabetic, cardiac, renal, and other specialized dietary needs." },
];

const NutritionQuality = () => (
  <Layout>
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Nutrition & Quality</h1>
          <p className="text-paragraph max-w-2xl mx-auto">Our commitment to excellence in every meal we prepare and deliver.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="p-6 rounded-lg bg-surface-light hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-paragraph text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default NutritionQuality;
