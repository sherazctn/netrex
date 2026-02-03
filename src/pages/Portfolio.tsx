import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web", "Mobile", "E-Commerce", "Branding", "Marketing"];

const technologies = ["All", "React", "WordPress", "Flutter", "Shopify", "Laravel", "Next.js"];

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Fashion Platform",
    category: "E-Commerce",
    technology: "Shopify",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    description: "Full-featured online store for luxury fashion brand",
    result: "300% increase in sales",
    industry: "Fashion"
  },
  {
    id: 2,
    title: "Healthcare Patient Portal",
    category: "Web",
    technology: "React",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    description: "Patient management system for healthcare provider",
    result: "50% reduction in wait times",
    industry: "Healthcare"
  },
  {
    id: 3,
    title: "Food Delivery App",
    category: "Mobile",
    technology: "Flutter",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    description: "On-demand food delivery platform",
    result: "500K+ downloads",
    industry: "Food & Restaurant"
  },
  {
    id: 4,
    title: "Real Estate Listings Platform",
    category: "Web",
    technology: "Next.js",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    description: "Property search and listing management",
    result: "200% increase in leads",
    industry: "Real Estate"
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    category: "Mobile",
    technology: "Flutter",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    description: "Workout and health tracking application",
    result: "100K active users",
    industry: "Fitness"
  },
  {
    id: 6,
    title: "Corporate Website Redesign",
    category: "Web",
    technology: "WordPress",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    description: "Modern corporate website for financial firm",
    result: "150% more inquiries",
    industry: "Finance"
  },
  {
    id: 7,
    title: "Fintech Brand Identity",
    category: "Branding",
    technology: "Shopify",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
    description: "Complete brand identity for fintech startup",
    result: "40% brand recognition",
    industry: "Finance"
  },
  {
    id: 8,
    title: "Travel Booking Platform",
    category: "Web",
    technology: "Laravel",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    description: "End-to-end travel booking solution",
    result: "75% booking increase",
    industry: "Travel"
  },
  {
    id: 9,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    technology: "React",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Multi-channel marketing for SaaS company",
    result: "400% ROI",
    industry: "Technology"
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredItems = portfolioItems.filter(item => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const techMatch = selectedTech === "All" || item.technology === selectedTech;
    return categoryMatch && techMatch;
  });

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
                Explore our portfolio of successful projects across various industries and technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
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
              
              {/* Technology Filter */}
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
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
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                          {item.category}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                          {item.technology}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
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
    </div>
  );
};

export default Portfolio;
