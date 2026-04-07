import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import { ShieldCheck, Apple, Leaf, ChefHat, Package, ClipboardList } from "lucide-react";

const items = [
  { 
    icon: ShieldCheck, 
    title: "Food Safety Standards", 
    desc: "We follow strict food safety regulations and HACCP guidelines to ensure every meal is safe. Our facility is regularly inspected and certified by health authorities, maintaining the highest standards of food safety and quality control.",
    color: "bg-blue-500"
  },
  { 
    icon: Apple, 
    title: "Nutritional Balance", 
    desc: "Each meal is designed to meet daily nutritional needs with the right mix of macros and micronutrients. Our nutrition experts carefully calculate portions to provide optimal energy, protein, vitamins, and minerals for different dietary requirements.",
    color: "bg-red-500"
  },
  { 
    icon: Leaf, 
    title: "Quality Ingredients", 
    desc: "We source fresh, high-quality ingredients from trusted local suppliers. Every ingredient is carefully selected and inspected to ensure freshness, taste, and nutritional value. We prioritize seasonal produce and sustainable sourcing practices.",
    color: "bg-green-500"
  },
  { 
    icon: ChefHat, 
    title: "Hygiene & Preparation", 
    desc: "Our kitchens maintain hospital-grade cleanliness with regular audits and staff training. All team members follow strict hygiene protocols, wear protective equipment, and undergo continuous training on food safety and preparation standards.",
    color: "bg-orange-500"
  },
  { 
    icon: Package, 
    title: "Packaging & Delivery", 
    desc: "Temperature-controlled packaging and timely delivery ensure freshness from kitchen to table. We use food-grade, eco-friendly packaging materials and maintain cold chain integrity throughout the delivery process to preserve meal quality.",
    color: "bg-purple-500"
  },
  { 
    icon: ClipboardList, 
    title: "Diet-Specific Planning", 
    desc: "Custom meal plans for diabetic, cardiac, renal, and other specialized dietary needs. Our dietitians work closely with healthcare providers to create personalized nutrition plans that support specific health conditions and treatment goals.",
    color: "bg-teal-500"
  },
];

const NutritionQuality = () => (
  <Layout>
    <section 
      className="py-32 md:py-40 bg-surface-light relative bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&q=80')"
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">Nutrition & Quality</h1>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-8">Our commitment to excellence in every meal we prepare and deliver.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group h-full border border-gray-100 hover:border-primary/30">
                <div className={`w-16 h-16 rounded-2xl ${item.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 text-${item.color.replace('bg-', '')}`} style={{ color: item.color.replace('bg-', '#') }} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-paragraph text-base leading-relaxed">{item.desc}</p>
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
