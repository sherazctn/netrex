import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Megaphone, 
  Layers,
  ShoppingCart,
  Bot,
  Search,
  Cloud,
  ArrowUpRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Stunning websites using the latest technologies including WordPress, React, Next.js, and custom solutions.",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps using Flutter, React Native, Swift, and Kotlin.",
    href: "/services/mobile-app",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging digital experiences.",
    href: "/services/ui-ux-design",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive SEO, SEM, and social media marketing strategies to grow your brand.",
    href: "/services/digital-marketing",
  },
  {
    icon: Layers,
    title: "Branding",
    description: "Build a strong company identity that impacts your bottom line and marketing strategy.",
    href: "/services/branding",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online store solutions with smooth shopping experiences on Shopify, WooCommerce, and custom platforms.",
    href: "/services/ecommerce",
  },
  {
    icon: Bot,
    title: "AI Agent Integration",
    description: "Custom AI solutions, chatbots, and automation to transform your business operations.",
    href: "/services/ai-automation",
  },
  {
    icon: Search,
    title: "Generative Engine Optimization",
    description: "Future-proof your SEO for AI-powered search engines like ChatGPT and Perplexity.",
    href: "/services/geo",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Enterprise cloud architecture, migration, and DevOps on AWS, Google Cloud, and Azure.",
    href: "/services/cloud-solutions",
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
  const { t } = useLanguage();
  
  return (
    <section className="section-padding">
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
            {t('services.badge')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('services.title')}{" "}
            <span className="text-primary">{t('services.title.highlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid - All 9 services */}
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
                className="group block h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  {t('services.learn')}
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
