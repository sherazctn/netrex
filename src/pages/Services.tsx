import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Palette, Megaphone, Package, Sparkles, Brain, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "Custom websites and web applications that drive results and deliver exceptional user experiences.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "mobile-app",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that users love, built with Flutter, React Native, Swift & Kotlin.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design that delights customers and drives business growth through intuitive experiences.",
    icon: Palette,
    color: "from-orange-500 to-red-500",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies including SEO, PPC, and social media to grow your online presence.",
    icon: Megaphone,
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "branding",
    title: "Branding",
    description: "Strategic brand identity development that makes your business memorable and builds customer trust.",
    icon: Package,
    color: "from-yellow-500 to-orange-500",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    description: "Scalable online stores built on Shopify, WooCommerce, and custom platforms that convert visitors to customers.",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
  },
  {
    slug: "ai-automation",
    title: "AI Agent Integration",
    description: "Custom AI solutions including chatbots, automation workflows, and intelligent agents that transform operations.",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
  },
  {
    slug: "geo",
    title: "Generative Engine Optimization",
    description: "Future-proof SEO strategies optimized for AI-powered search engines and generative AI platforms.",
    icon: Sparkles,
    color: "from-teal-500 to-cyan-500",
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Enterprise cloud architecture, migration, and DevOps solutions on AWS, Google Cloud, and Azure.",
    icon: Cloud,
    color: "from-sky-500 to-blue-500",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                End-to-End Digital{" "}
                <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From concept to launch, we provide comprehensive digital services that help 
                businesses innovate, grow, and succeed in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/services/${service.slug}`}>
                    <div className="group h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Let's discuss your project requirements and find the perfect solution for your business.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
