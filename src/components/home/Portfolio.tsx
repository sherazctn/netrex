import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountUpNumber } from "@/components/ui/CountUpNumber";

const categories = ["All", "Web", "Mobile", "E-Commerce", "Marketing"];

const projects = [
  {
    id: 1,
    title: "Hogar Properties",
    category: "Web",
    description: "Dubai real estate platform with property listings and lead generation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1200&fit=crop",
    tags: ["WordPress", "SEO", "Lead Gen"],
    link: "/portfolio/hogar-properties",
    result: { value: 250, suffix: "%", label: "Lead Increase" }
  },
  {
    id: 2,
    title: "Denefits",
    category: "Web",
    description: "USA patient financing platform with payment solutions for healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=1200&fit=crop",
    tags: ["React", "FinTech", "SaaS"],
    link: "/portfolio/denefits",
    result: { value: 5, suffix: "M+", label: "Transactions" }
  },
  {
    id: 3,
    title: "SOURCE Hydropanels",
    category: "Marketing",
    description: "Sustainable water technology with solar-powered hydropanels",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1200&fit=crop",
    tags: ["Social Media", "Influencer", "Brand"],
    link: "/portfolio/source",
    result: { value: 180, suffix: "%", label: "Engagement" }
  },
  {
    id: 4,
    title: "CJC Markets Global",
    category: "Web",
    description: "Forex and commodities trading platform with global reach",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=1200&fit=crop",
    tags: ["FinTech", "Security", "Trading"],
    link: "/portfolio/cjc-markets",
    result: { value: 50, suffix: "K+", label: "Active Users" }
  },
  {
    id: 5,
    title: "Fashion E-Store",
    category: "E-Commerce",
    description: "Complete e-commerce solution for fashion retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1200&fit=crop",
    tags: ["Shopify", "Fashion", "Retail"],
    link: "/portfolio/fashion-store",
    result: { value: 300, suffix: "%", label: "Sales Growth" }
  },
  {
    id: 6,
    title: "Health & Fitness App",
    category: "Mobile",
    description: "Cross-platform fitness tracking and coaching application",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=1200&fit=crop",
    tags: ["Flutter", "iOS", "Android"],
    link: "/portfolio/fitness-app",
    result: { value: 500, suffix: "K+", label: "Downloads" }
  },
];

export function Portfolio() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const handleMouseEnter = (index: number) => {
    const scrollContainer = scrollRefs.current[index];
    if (scrollContainer) {
      scrollContainer.style.transform = 'translateY(-66.67%)';
    }
  };

  const handleMouseLeave = (index: number) => {
    const scrollContainer = scrollRefs.current[index];
    if (scrollContainer) {
      scrollContainer.style.transform = 'translateY(0)';
    }
  };

  return (
    <section className="pt-12 pb-20 bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t('portfolio.badge')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('portfolio.title')}{" "}
            <span className="text-primary">{t('portfolio.title.highlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('portfolio.description')}
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-brand text-white shadow-md"
                  : "bg-card border border-border text-foreground/70 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Improved Design with Scroll on Hover */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={project.link}
                  className="group block rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {/* Image Container with Scroll Effect */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      ref={(el) => { scrollRefs.current[index] = el; }}
                      className="absolute inset-0 transition-transform duration-[2000ms] ease-out"
                      style={{ height: '300%' }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Overlay with Result */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="p-4 rounded-2xl bg-background/95 backdrop-blur-sm">
                          <div className="text-2xl font-display font-bold text-primary">
                            <CountUpNumber 
                              end={project.result.value} 
                              suffix={project.result.suffix}
                              duration={1500}
                            />
                          </div>
                          <div className="text-sm text-muted-foreground">{project.result.label}</div>
                        </div>
                      </div>
                    </div>

                    {/* View Project Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/portfolio">
            <Button variant="outline" size="lg" className="group">
              {t('portfolio.viewAll')}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
