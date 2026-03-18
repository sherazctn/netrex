import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { PortfolioLightbox } from "@/components/portfolio/PortfolioLightbox";
import { portfolioItems } from "@/data/portfolioData";

const categories = ["All", "Web", "E-Commerce", "Branding", "Marketing"];

export function Portfolio() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ image: string; title: string; description: string } | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const homeItems = portfolioItems.slice(0, 6);

  const filteredProjects = activeCategory === "All"
    ? homeItems
    : homeItems.filter((p) => p.category === activeCategory);

  const handleMouseEnter = (index: number) => {
    const img = imageRefs.current[index];
    if (!img) return;
    const containerH = img.parentElement?.clientHeight || 0;
    const imgH = img.naturalHeight * (img.clientWidth / img.naturalWidth);
    const scrollDist = Math.max(0, imgH - containerH);
    const duration = Math.max(1.5, Math.min(3, scrollDist / 500));
    img.style.transition = `transform ${duration}s ease-in-out`;
    img.style.transform = `translateY(-${scrollDist}px)`;
  };

  const handleMouseLeave = (index: number) => {
    const img = imageRefs.current[index];
    if (!img) return;
    img.style.transition = "transform 0.5s ease-out";
    img.style.transform = "translateY(0)";
  };

  return (
    <>
      <section className="pt-12 pb-20 bg-secondary/30">
        <div className="container-wide">
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

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div
                    className="group block rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => setLightbox({ image: project.image, title: project.title, description: project.description })}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        ref={(el) => { imageRefs.current[index] = el; }}
                        src={project.image}
                        alt={project.title}
                        loading="eager"
                        className="absolute top-0 left-0 w-full h-auto"
                        style={{ transform: "translateY(0)", imageRendering: "crisp-edges" }}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="p-4 rounded-2xl bg-background/95 backdrop-blur-sm">
                            <div className="text-2xl font-display font-bold text-primary">
                              {project.resultValue && (
                                <CountUpNumber
                                  end={project.resultValue.value}
                                  suffix={project.resultValue.suffix}
                                  duration={1500}
                                />
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">{project.resultValue?.label}</div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                          <ExternalLink className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                          {project.industry}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-xs font-medium text-accent">
                          {project.technology}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

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

      <PortfolioLightbox
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        image={lightbox?.image || ""}
        title={lightbox?.title || ""}
        description={lightbox?.description || ""}
      />
    </>
  );
}
