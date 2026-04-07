import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Kitchen Assistant",
    desc: "Join our kitchen team and help prepare nutritious meals for healthcare facilities and communities.",
    requirements: [
      "Experience in commercial kitchen environments",
      "Knowledge of food safety and hygiene practices",
      "Ability to work in a fast-paced environment",
      "Strong teamwork and communication skills",
    ],
    image: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&q=80",
  },
  {
    title: "Delivery Coordinator",
    desc: "Coordinate daily meal deliveries across Calgary, ensuring on-time and accurate service for our clients.",
    requirements: [
      "Valid driver's license and clean driving record",
      "Strong organizational and time-management skills",
      "Customer service experience preferred",
      "Familiarity with Calgary routes and neighborhoods",
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
];

const Careers = () => (
  <Layout>
    <section 
      className="py-32 md:py-40 bg-surface-light relative bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80')"
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">Careers</h1>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto">Join our team and make a difference in healthcare nutrition.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {jobs.map((job, i) => (
            <AnimatedSection key={job.title} delay={i * 0.15}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={job.image} 
                    alt={job.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">{job.title}</h2>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8">
                  <p className="text-paragraph text-base leading-relaxed mb-6">{job.desc}</p>
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Requirements:</h4>
                  <ul className="space-y-3 mb-8">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-paragraph text-sm">
                        <span className="text-primary mt-0.5 text-lg">✓</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 group-hover:gap-3"
                  >
                    View Details
                    <span className="text-xl transition-all">→</span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
  </Layout>
);

export default Careers;
