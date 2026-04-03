import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import Layout from "../components/Layout";
import { Utensils, Truck, CalendarDays, Salad } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
    heading: "Affordable, Nutritious Meals for Healthcare & Senior Living",
    sub: "Serving hospitals, senior homes, and communities with care.",
  },
  {
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&q=80",
    heading: "Quality Nutrition for Better Living",
    sub: "Balanced meals crafted by nutrition experts.",
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
    heading: "Fresh, Hygienic & Delivered On Time",
    sub: "Trusted by healthcare facilities across Calgary.",
  },
];

const services = [
  { icon: Utensils, title: "Bulk Meal Supply", desc: "High-volume meal solutions for hospitals and large facilities." },
  { icon: Truck, title: "Daily Meal Delivery", desc: "Fresh meals delivered to your doorstep every day." },
  { icon: CalendarDays, title: "Monthly Tiffin Plans", desc: "Affordable subscription plans for individuals and families." },
  { icon: Salad, title: "Special Dietary Meals", desc: "Customized meals for diabetic, heart-healthy, and other dietary needs." },
];

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, i) => (
          <div key={i} className="flex-[0_0_100%] min-w-0 relative h-[70vh] md:h-[85vh]">
            <img src={slide.image} alt={slide.heading} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground max-w-4xl leading-tight mb-4">
                {slide.heading}
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl">{slide.sub}</p>
              <div className="flex gap-4 flex-wrap justify-center">
                <Link to="/contact" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary-dark transition-colors">
                  Contact Us
                </Link>
                <Link to="/meal-programs" className="px-6 py-3 border border-primary-foreground text-primary-foreground font-medium rounded-md hover:bg-primary-foreground/10 transition-colors">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === selectedIndex ? "bg-primary" : "bg-primary-foreground/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

const Index = () => (
  <Layout>
    <HeroSlider />

    {/* Services */}
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">Our Services</h2>
          <p className="text-paragraph text-center max-w-2xl mx-auto mb-12">Comprehensive meal solutions tailored for healthcare, senior living, and individual needs.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-paragraph text-sm mb-4">{s.desc}</p>
                <Link to="/meal-programs" className="text-primary text-sm font-medium hover:text-primary-dark transition-colors">
                  Learn More →
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* About snippet */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">About Devi's Kitchen</h2>
          <p className="text-paragraph leading-relaxed mb-4">
            At Devi's Kitchen, we are dedicated to providing nutritious, affordable meals for healthcare facilities, senior living homes, NGOs, and individuals. Our focus on quality ingredients, balanced nutrition, and hygienic preparation ensures every meal supports health and well-being.
          </p>
          <p className="text-paragraph leading-relaxed">
            From bulk supply for hospitals to personalized tiffin plans, we make healthy eating accessible for everyone.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Quotes */}
    <section className="py-16 bg-surface-soft">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        {[
          "Healthy food is the foundation of recovery.",
          "Quality nutrition for better living.",
        ].map((q, i) => (
          <AnimatedSection key={i} direction={i % 2 === 0 ? "left" : "right"}>
            <blockquote className="text-center text-2xl md:text-3xl font-heading italic text-foreground/80">
              "{q}"
            </blockquote>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Index;
