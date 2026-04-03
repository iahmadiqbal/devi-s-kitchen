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
  { 
    icon: Utensils, 
    title: "Bulk Meal Supply", 
    desc: "High-volume meal solutions for hospitals and large facilities.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
  },
  { 
    icon: Truck, 
    title: "Daily Meal Delivery", 
    desc: "Fresh meals delivered to your doorstep every day.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
  },
  { 
    icon: CalendarDays, 
    title: "Monthly Tiffin Plans", 
    desc: "Affordable subscription plans for individuals and families.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80"
  },
  { 
    icon: Salad, 
    title: "Special Dietary Meals", 
    desc: "Customized meals for diabetic, heart-healthy, and other dietary needs.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80"
  },
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
          <p className="text-paragraph text-center max-w-2xl mx-auto mb-16">Comprehensive meal solutions tailored for healthcare, senior living, and individual needs.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.15}>
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  <p className="text-paragraph text-base leading-relaxed mb-6">{s.desc}</p>
                  <Link 
                    to="/meal-programs" 
                    className="inline-flex items-center gap-2 text-primary text-base font-semibold hover:text-primary-dark transition-all duration-300 group-hover:gap-3"
                  >
                    Learn More 
                    <span className="text-xl transition-all duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* About snippet */}
    <section className="py-20 bg-gradient-to-b from-white to-surface-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80" 
                  alt="Devi's Kitchen Fresh Ingredients" 
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full -z-10" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">About Devi's Kitchen</h2>
                <p className="text-paragraph text-lg leading-relaxed mb-6">
                  At Devi's Kitchen, we are dedicated to providing nutritious, affordable meals for healthcare facilities, senior living homes, NGOs, and individuals. Our focus on quality ingredients, balanced nutrition, and hygienic preparation ensures every meal supports health and well-being.
                </p>
                <p className="text-paragraph text-lg leading-relaxed mb-8">
                  From bulk supply for hospitals to personalized tiffin plans, we make healthy eating accessible for everyone.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-foreground font-medium">Quality Ingredients</span>
                  </div>
                  <div className="flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-foreground font-medium">Balanced Nutrition</span>
                  </div>
                  <div className="flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-foreground font-medium">Hygienic Preparation</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* Quotes */}
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              quote: "Healthy food is the foundation of recovery.", 
              icon: "🏥",
              detail: "Our meals are specially designed to support patient recovery and promote healing through balanced nutrition and quality ingredients."
            },
            { 
              quote: "Quality nutrition for better living.", 
              icon: "🥗",
              detail: "We believe that everyone deserves access to nutritious, delicious meals that enhance overall health and well-being."
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">{item.icon}</div>
                <blockquote className="text-xl md:text-2xl font-heading italic text-foreground/90 leading-relaxed mb-4 text-center flex-grow">
                  "{item.quote}"
                </blockquote>
                <p className="text-paragraph text-sm leading-relaxed text-center border-t border-gray-200 pt-4">
                  {item.detail}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Index;
