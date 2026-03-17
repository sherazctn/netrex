import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web", "E-Commerce", "Branding", "Marketing"];

const technologies = ["All", "React", "WordPress", "Wix", "Shopify", "Laravel"];

const portfolioItems = [
  {
    id: 1,
    title: "Emaar Serro 2",
    category: "Web",
    technology: "React",
    image: "/portfolio/emaar-serro2.png",
    description: "Premium real estate landing page for Emaar's Serro 2 villas in Dubai with interactive floor plans and payment calculator",
    result: "200% increase in leads",
    industry: "Real Estate"
  },
  {
    id: 2,
    title: "UP Business Dubai",
    category: "Web",
    technology: "React",
    image: "/portfolio/up-business.png",
    description: "Global crypto payment infrastructure for businesses with multi-currency support and instant settlements",
    result: "1300+ merchants onboarded",
    industry: "FinTech"
  },
  {
    id: 3,
    title: "NEO Experts International",
    category: "Web",
    technology: "WordPress",
    image: "/portfolio/neo-experts.webp",
    description: "Recruitment platform connecting talent with businesses in Construction, Engineering, IT & Life Sciences across DACH region",
    result: "800+ placements",
    industry: "Recruitment"
  },
  {
    id: 4,
    title: "Surfside Concierge",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/surfside-concierge.png",
    description: "Cape Cod vacation concierge offering pre-arrival decorating, fridge stocking, and itinerary planning services",
    result: "10+ years of service",
    industry: "Hospitality"
  },
  {
    id: 5,
    title: "FurniAssemble",
    category: "E-Commerce",
    technology: "Wix",
    image: "/portfolio/furniassemble.png",
    description: "Professional furniture assembly and installation service with online booking, pricing, and customer reviews",
    result: "150% booking growth",
    industry: "Home Services"
  },
  {
    id: 6,
    title: "Quality Process Automation",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/quality-process.png",
    description: "CMM & Vision System programming services for DFW manufacturers with on-site metrology support",
    result: "99% accuracy rate",
    industry: "Manufacturing"
  },
  {
    id: 7,
    title: "Latvia Rent",
    category: "Web",
    technology: "React",
    image: "/portfolio/latvia-rent.png",
    description: "Car rental platform in Latvia with real-time pricing calculator, fleet showcase, and transparent pricing tiers",
    result: "300% online bookings",
    industry: "Automotive"
  },
  {
    id: 8,
    title: "Trinity College Music Society",
    category: "Web",
    technology: "React",
    image: "/portfolio/trinity-music.png",
    description: "Community music society website with event listings, membership registration, and photo gallery",
    result: "500+ active members",
    industry: "Education"
  },
  {
    id: 9,
    title: "Tojah's Extensions",
    category: "Branding",
    technology: "Wix",
    image: "/portfolio/tojah-extensions.png",
    description: "Hair salon website with service pricing, online booking, portfolio gallery, and loyalty program",
    result: "40% new client growth",
    industry: "Beauty"
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
