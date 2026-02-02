import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Megaphone, 
  Layers,
  ShoppingCart,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Stunning websites using the latest technologies including WordPress, React, Next.js, and custom solutions.",
    href: "/services/web-development",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps using Flutter, React Native, Swift, and Kotlin.",
    href: "/services/mobile-app",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging digital experiences.",
    href: "/services/ui-ux-design",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive SEO, SEM, and social media marketing strategies to grow your brand.",
    href: "/services/digital-marketing",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Layers,
    title: "Branding",
    description: "Build a strong company identity that impacts your bottom line and marketing strategy.",
    href: "/services/branding",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online store solutions with smooth shopping experiences on Shopify, WooCommerce, and custom platforms.",
    href: "/services/ecommerce",
    color: "from-yellow-500 to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Dominate Digital</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team of designers, developers, and marketing professionals deliver 
            creative, results-driven solutions leveraging the latest trends and technologies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link
                to={service.href}
                className="group block h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
