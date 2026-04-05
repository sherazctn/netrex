import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useMemo } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioLightbox } from "@/components/portfolio/PortfolioLightbox";
import { portfolioItems, portfolioCategories, portfolioTechnologies } from "@/data/portfolioData";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [lightbox, setLightbox] = useState<{ image: string; title: string; description: string } | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  // Shuffle items on mount for randomness
  const shuffledItems = useMemo(() => {
    const shuffled = [...portfolioItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const filteredItems = shuffledItems.filter(item => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const techMatch = selectedTech === "All" || item.technology === selectedTech;
    return categoryMatch && techMatch;
  });

  const handleMouseEnter = (index: number, category: string) => {
    if (category === "Mobile App" || category === "Branding") return;
    const img = imageRefs.current[index];
    if (!img) return;
    const containerH = img.parentElement?.clientHeight || 0;
    const imgH = img.naturalHeight * (img.clientWidth / img.naturalWidth);
    const scrollDist = Math.max(0, imgH - containerH);
    if (scrollDist < 10) return;
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
                Our Work
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Projects That{" "}
                <span className="text-gradient">Deliver Results</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our portfolio of {portfolioItems.length} successful projects across various industries and technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {portfolioCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTech === tech
                        ? "bg-accent text-white"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${selectedTech}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index, item.category)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => setLightbox({ image: item.image, title: item.title, description: item.description })}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted" style={(item.category === "Mobile App" || item.category === "Branding") ? { backgroundColor: item.category === "Branding" ? '#ffffff' : 'hsl(var(--primary) / 0.08)' } : undefined}>
                      <img
                        ref={(el) => { imageRefs.current[index] = el; }}
                        src={item.image}
                        alt={item.title}
                        loading="eager"
                        decoding="async"
                        className={(item.category === "Mobile App" || item.category === "Branding") ? "absolute top-0 left-0 w-full h-full object-contain p-4" : "absolute top-0 left-0 w-full h-auto"}
                        style={(item.category !== "Mobile App" && item.category !== "Branding") ? { transform: "translateY(0)" } : undefined}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <Button variant="glass" size="sm" className="text-white border-white/20">
                          View Project
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          {item.industry}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                          {item.technology}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <ArrowUpRight className="h-4 w-4" />
                        {item.result}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No projects found matching your filters.</p>
              </div>
            )}
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
                Ready to Start Your Project?
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Let's create something amazing together. Get in touch today.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
                  Start Your Project
                  <ArrowUpRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <PortfolioLightbox
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        image={lightbox?.image || ""}
        title={lightbox?.title || ""}
        description={lightbox?.description || ""}
      />
    </div>
  );
};

export default Portfolio;
