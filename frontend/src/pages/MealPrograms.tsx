import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "bulk-meal",
    title: "Bulk Meal Supply (Hospitals & Facilities)",
    desc: "High-volume meal solutions designed for hospitals, healthcare centres, and large organizations. We ensure consistency, quality, and timely delivery.",
    benefits: ["Scalable to any volume", "Consistent quality and taste", "Customizable menus", "On-time delivery guarantee"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    id: "daily-delivery",
    title: "Daily Meal Delivery",
    desc: "Fresh, wholesome meals delivered daily to your facility or doorstep. Perfect for individuals and small organizations.",
    benefits: ["Freshly prepared every day", "Multiple cuisine options", "Flexible delivery schedules", "No long-term commitment required"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    id: "monthly-tiffin",
    title: "Monthly Tiffin Plans",
    desc: "Affordable subscription-based meal plans for individuals and families who want nutritious home-style food without the hassle.",
    benefits: ["Budget-friendly pricing", "Weekly rotating menus", "Vegetarian & non-vegetarian options", "Easy cancellation & modification"],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
  },
  {
    id: "custom-plans",
    title: "Custom Meal Plans",
    desc: "Tailored meal solutions designed around your specific dietary requirements, preferences, and nutritional goals.",
    benefits: ["Personalized nutrition planning", "Allergen-free options", "Cultural & religious dietary compliance", "Consultation with nutrition experts"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
  {
    id: "special-dietary",
    title: "Special Dietary Meals (Low Sodium, Diabetic, etc.)",
    desc: "Specialized meals for diabetic, heart-healthy, low-sodium, and other medically-prescribed diets.",
    benefits: ["Medically-guided meal planning", "Certified nutritionist oversight", "Taste-focused recipes", "Compliance with healthcare standards"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  },
];

const MealPrograms = () => (
  <Layout>
    <section 
      className="py-32 md:py-40 bg-surface-light relative bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80')"
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">Meal Programs</h1>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto">Explore our comprehensive range of meal services designed for every need.</p>
        </AnimatedSection>
        {/* Quick nav */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {programs.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground rounded-full text-sm hover:bg-primary-foreground hover:text-gray-900 transition-colors">
              {p.title}
            </a>
          ))}
        </div>
      </div>
    </section>

    {programs.map((p, i) => (
      <section key={p.id} id={p.id} className={`py-16 ${i % 2 === 1 ? "bg-surface-light" : ""}`}>
        <div className="container mx-auto px-4">
          <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 max-w-5xl mx-auto`}>
            <AnimatedSection direction={i % 2 === 0 ? "left" : "right"} className="lg:w-1/2">
              <img src={p.image} alt={p.title} className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover" />
            </AnimatedSection>
            <AnimatedSection direction={i % 2 === 0 ? "right" : "left"} className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{p.title}</h2>
              <p className="text-paragraph leading-relaxed mb-6">{p.desc}</p>
              <ul className="space-y-2 mb-8">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-paragraph">
                    <span className="text-primary mt-1">✓</span> {b}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block px-6 py-3 bg-footer text-footer-text font-medium rounded-md hover:bg-footer/80 transition-all duration-300">
                Contact Us
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    ))}

    <CTASection />
  </Layout>
);

export default MealPrograms;
