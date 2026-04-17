import { useState, FormEvent } from "react";
import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    // Required fields: name, email, phone
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Valid email is required.";
    }
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    // Message is optional - no validation needed
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, "contact_messages"), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      // Clear form inputs
      setForm({ name: "", email: "", phone: "", message: "" });

      // Show success message
      setShowSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section
        className="pt-48 pb-40 md:pt-64 md:pb-56 bg-surface-light relative bg-cover bg-center flex items-center min-h-[550px] md:min-h-[650px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1600&q=80')",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for inquiries, quotes, or
              partnerships.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection direction="left">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Success Message */}
                {showSuccess && (
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-green-900 mb-1">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-sm text-green-700">
                        Your message has been sent successfully. Our team will
                        contact you soon.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {errors.submit && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-700">{errors.submit}</p>
                  </div>
                )}

                {/* Name Field - Required */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className="w-full border border-input rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field - Required */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className="w-full border border-input rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field - Required */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    className="w-full border border-input rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message Field - Optional */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full border border-input rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                    placeholder="Enter your message (optional)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-footer text-white font-semibold rounded-md hover:bg-footer/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Get in Touch
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <p className="text-paragraph text-sm">
                    13G-2115 27 Ave NE, Calgary, Alberta, T2E7E4
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a
                    href="tel:+14034617619"
                    className="text-paragraph text-sm hover:text-primary transition-colors"
                  >
                    +1 403-461-7619
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-paragraph text-sm">
                    info@deviskitchen.ca
                  </span>
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
