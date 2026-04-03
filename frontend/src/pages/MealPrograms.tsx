import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "bulk-meal-supply",
    title: "Bulk Meal Supply",
    desc: "High-volume meal solutions designed for hospitals, healthcare centres, and large organizations. We ensure consistency, quality, and timely delivery.",
    benefits: ["Scalable to any volume", "Consistent quality and taste", "Customizable menus", "On-time delivery guarantee"],
  },
  {
    id: "daily-meal-delivery",
    title: "Daily Meal Delivery",
    desc: "Fresh, wholesome meals delivered daily to your facility or doorstep. Perfect for individuals and small organizations.",
    benefits: ["Freshly prepared every day", "Multiple cuisine options", "Flexible delivery schedules", "No long-term commitment required"],
  },
  {
    id: "monthly-tiffin-plans",
    title: "Monthly Tiffin Plans",
    desc: "Affordable subscription-based meal plans for individuals and families who want nutritious home-style food without the hassle.",
    benefits: ["Budget-friendly pricing", "Weekly rotating menus", "Vegetarian & non-vegetarian options", "Easy cancellation & modification"],
  },
  {
    id: "custom-meal-plans",
    title: "Custom Meal Plans",
    desc: "Tailored meal solutions designed around your specific dietary requirements, preferences, and nutritional goals.",
    benefits: ["Personalized nutrition planning", "Allergen-free options", "Cultural & religious dietary compliance", "Consultation with nutrition experts"],
  },
  {
    id: "special-dietary-meals",
    title: "Special Dietary Meals",
    desc: "Specialized meals for diabetic, heart-healthy, low-sodium, and other medically-prescribed diets.",
    benefits: ["Medically-guided meal planning", "Certified nutritionist oversight", "Taste-focused recipes", "Compliance with healthcare standards"],
  },
];

const MealPrograms = () => (
  <Layout>
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Meal Programs</h1>
          <p className="text-paragraph max-w-2xl mx-auto">Explore our comprehensive range of meal services designed for every need.</p>
        </AnimatedSection>
        {/* Quick nav */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {programs.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="px-4 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
              {p.title}
            </a>
          ))}
        </div>
      </div>
    </section>

    {programs.map((p, i) => (
      <section key={p.id} id={p.id} className={`py-16 ${i % 2 === 1 ? "bg-surface-light" : ""}`}>
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{p.title}</h2>
            <p className="text-paragraph leading-relaxed mb-6">{p.desc}</p>
            <ul className="space-y-2 mb-8">
              {p.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-paragraph">
                  <span className="text-primary mt-1">✓</span> {b}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary-dark transition-colors">
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    ))}

    <CTASection />
  </Layout>
);

export default MealPrograms;
