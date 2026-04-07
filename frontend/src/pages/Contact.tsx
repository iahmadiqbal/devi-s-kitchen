import { useState, FormEvent } from "react";
import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email is required.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <Layout>
      <section 
        className="pt-48 pb-40 md:pt-64 md:pb-56 bg-surface-light relative bg-cover bg-center flex items-center min-h-[550px] md:min-h-[650px]"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1600&q=80')"
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">Contact Us</h1>
            <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto">We'd love to hear from you. Reach out for inquiries, quotes, or partnerships.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection direction="left">
              {submitted ? (
                <div className="p-8 rounded-lg bg-primary/5 text-center">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-paragraph">We've received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {(["name", "email", "phone", "message"] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-foreground mb-1 capitalize">{field}</label>
                      {field === "message" ? (
                        <textarea
                          rows={4}
                          value={form[field]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          className="w-full border border-input rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                        />
                      ) : (
                        <input
                          type={field === "email" ? "email" : "text"}
                          value={form[field]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          className="w-full border border-input rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                        />
                      )}
                      {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-footer text-white font-semibold rounded-md hover:bg-footer/80 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground">Get in Touch</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <p className="text-paragraph text-sm">13G-2115 27 Ave NE, Calgary, Alberta, T2E7E4</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+14034617619" className="text-paragraph text-sm hover:text-primary transition-colors">+1 403-461-7619</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-paragraph text-sm">info@deviskitchen.com</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
