import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
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
  },
];

const Careers = () => (
  <Layout>
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Careers</h1>
          <p className="text-paragraph max-w-2xl mx-auto">Join our team and make a difference in healthcare nutrition.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        {jobs.map((job, i) => (
          <AnimatedSection key={job.title} delay={i * 0.15}>
            <div className="p-8 rounded-lg bg-surface-light shadow-sm">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">{job.title}</h2>
              <p className="text-paragraph leading-relaxed mb-4">{job.desc}</p>
              <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
              <ul className="space-y-1 mb-6">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-paragraph text-sm">
                    <span className="text-primary mt-0.5">•</span> {r}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary-dark transition-colors">
                View Details
              </Link>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </Layout>
);

export default Careers;
