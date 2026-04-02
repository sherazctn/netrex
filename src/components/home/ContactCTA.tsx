import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+971 50 200 8313",
    href: "tel:+971502008313",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@netrex.ae",
    href: "mailto:contact@netrex.ae",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/971502008313",
  },
];

const countries = [
  { code: "ae", name: "UAE (Dubai)", flag: "🇦🇪", address: "Office 523, Block-C, 9W Dubai Airport Free Zone - Dubai, UAE" },
  { code: "us", name: "USA", flag: "🇺🇸", address: "418 Broadway STE N, New York 12207, USA" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧", address: "71-75 Shelton Street, Covent Garden, London, UK" },
  { code: "ca", name: "Canada", flag: "🇨🇦", address: "1575 West Georgia Street, Vancouver, BC, Canada" },
  { code: "au", name: "Australia", flag: "🇦🇺", address: "240 Queen St, Brisbane City QLD 4000, Australia" },
  { code: "pk", name: "Pakistan", flag: "🇵🇰", address: "21, J3 Johar Town, Lahore, Punjab, Pakistan" },
];

export function ContactCTA() {
  const [selectedCountry, setSelectedCountry] = useState("ae");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedLocation = countries.find(c => c.code === selectedCountry);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Thank you! We'll get back to you shortly.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Something{" "}
              <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? We'd love to hear about it. 
              Choose your location and reach out to us.
            </p>

            {/* Country Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">
                Select Your Location
              </label>
              <div className="flex flex-wrap gap-2">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => setSelectedCountry(country.code)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCountry === country.code
                        ? "bg-gradient-to-r from-[hsl(195,100%,42%)] via-[hsl(340,82%,52%)] to-[hsl(18,100%,60%)] text-white shadow-md"
                        : "bg-secondary border border-border text-foreground/70 hover:border-primary/50"
                    }`}
                  >
                    <span>{country.flag}</span>
                    <span className="hidden sm:inline">{country.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Location Address */}
            {selectedLocation && (
              <motion.div
                key={selectedCountry}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">{selectedLocation.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{selectedLocation.address}</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "WhatsApp" ? "_blank" : undefined}
                  rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(195,100%,42%)] via-[hsl(340,82%,52%)] to-[hsl(18,100%,60%)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <method.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {method.label}
                    </div>
                    <div className="font-semibold text-foreground">
                      {method.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
              <h3 className="font-display text-2xl font-bold mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 234 567 890"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Needed
                    </label>
                    <select className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="branding">Branding</option>
                      <option value="ecommerce">E-Commerce</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    required
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
