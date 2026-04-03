import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";

const sections = [
  {
    title: "Hospitals & Healthcare Facilities",
    desc: "We supply nutritious, balanced meals to hospitals and healthcare centres, supporting patient recovery with food that meets strict dietary and safety standards.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    title: "Senior Living & Old Age Homes",
    desc: "Our meals are designed with seniors in mind — soft textures, balanced nutrients, and comforting flavours that promote health and happiness in every bite.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80",
  },
  {
    title: "NGOs & Community Organizations",
    desc: "We partner with NGOs and community groups to provide affordable, high-quality meal services for those who need it most — from shelters to community kitchens.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  },
  {
    title: "Individual Meal Services",
    desc: "Busy schedule? Our daily and monthly tiffin plans deliver wholesome, home-style meals right to your doorstep — fresh, affordable, and always on time.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
  },
];

const WhoWeServe = () => (
  <Layout>
    {/* Hero */}
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Who We Serve</h1>
          <p className="text-paragraph max-w-2xl mx-auto">From hospitals to homes, we deliver meals that nourish and care.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Alternating sections */}
    {sections.map((s, i) => (
      <section key={s.title} className={`py-16 ${i % 2 === 1 ? "bg-surface-light" : ""}`}>
        <div className="container mx-auto px-4">
          <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10`}>
            <AnimatedSection direction={i % 2 === 0 ? "left" : "right"} className="lg:w-1/2">
              <img src={s.image} alt={s.title} className="rounded-lg shadow-md w-full h-72 md:h-96 object-cover" />
            </AnimatedSection>
            <AnimatedSection direction={i % 2 === 0 ? "right" : "left"} className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{s.title}</h2>
              <p className="text-paragraph leading-relaxed mb-6">{s.desc}</p>
              <a href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary-dark transition-colors">
                Contact Us
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    ))}

    <CTASection />
  </Layout>
);

export default WhoWeServe;
