import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";

const sections = [
  {
    id: "hospitals",
    title: "Hospitals & Healthcare Facilities",
    desc: "We supply nutritious, balanced meals to hospitals and healthcare centres, supporting patient recovery with food that meets strict dietary and safety standards.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
  },
  {
    id: "senior-living",
    title: "Senior Living & Old Age Homes",
    desc: "Our meals are designed with seniors in mind — soft textures, balanced nutrients, and comforting flavours that promote health and happiness in every bite.",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80",
  },
  {
    id: "ngos",
    title: "NGOs & Community Organizations",
    desc: "We partner with NGOs and community groups to provide affordable, high-quality meal services for those who need it most — from shelters to community kitchens.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
  },
  {
    id: "individual",
    title: "Individual Meal Services",
    desc: "Busy schedule? Our daily and monthly tiffin plans deliver wholesome, home-style meals right to your doorstep — fresh, affordable, and always on time.",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80",
  },
];

const WhoWeServe = () => (
  <Layout>
    {/* Hero */}
    <section 
      className="py-32 md:py-40 bg-surface-light relative bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80')"
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">Who We Serve</h1>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto">From hospitals to homes, we deliver meals that nourish and care.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Alternating sections */}
    {sections.map((s, i) => (
      <section key={s.title} id={s.id} className={`py-16 ${i % 2 === 1 ? "bg-surface-light" : ""}`}>
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
