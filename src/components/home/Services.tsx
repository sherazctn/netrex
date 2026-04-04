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
  { icon: Globe, titleKey: "services.web", descKey: "services.web.desc", href: "/services/web-development" },
  { icon: Smartphone, titleKey: "services.mobile", descKey: "services.mobile.desc", href: "/services/mobile-app" },
  { icon: Palette, titleKey: "services.uiux", descKey: "services.uiux.desc", href: "/services/ui-ux-design" },
  { icon: Megaphone, titleKey: "services.marketing", descKey: "services.marketing.desc", href: "/services/digital-marketing" },
  { icon: Layers, titleKey: "services.branding", descKey: "services.branding.desc", href: "/services/branding" },
  { icon: ShoppingCart, titleKey: "services.ecommerce", descKey: "services.ecommerce.desc", href: "/services/ecommerce" },
  { icon: Bot, titleKey: "services.ai", descKey: "services.ai.desc", href: "/services/ai-automation" },
  { icon: Search, titleKey: "services.geo", descKey: "services.geo.desc", href: "/services/geo" },
  { icon: Cloud, titleKey: "services.cloud", descKey: "services.cloud.desc", href: "/services/cloud-solutions" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  const { t } = useLanguage();
  
  return (
    <section className="section-padding">
      <div className="container-wide">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.titleKey} variants={itemVariants}>
              <Link
                to={service.href}
                className="group block h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t(service.descKey)}
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
