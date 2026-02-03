import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const allIndustries = [
  { name: "Real Estate", icon: "🏢", description: "Property management, listings, and virtual tours" },
  { name: "Healthcare", icon: "🏥", description: "Patient portals, telemedicine, and health tracking" },
  { name: "Finance & Banking", icon: "💰", description: "Digital banking, fintech, and payment solutions" },
  { name: "E-Commerce", icon: "🛒", description: "Online stores, marketplaces, and retail tech" },
  { name: "Education", icon: "📚", description: "E-learning platforms and student management" },
  { name: "Travel & Tourism", icon: "✈️", description: "Booking systems and travel experiences" },
  { name: "Food & Restaurant", icon: "🍽️", description: "Ordering apps and restaurant management" },
  { name: "Logistics", icon: "📦", description: "Fleet management and delivery tracking" },
  { name: "Entertainment", icon: "🎬", description: "Streaming, gaming, and media platforms" },
  { name: "Automotive", icon: "🚗", description: "Dealership software and connected vehicles" },
  { name: "Fitness & Wellness", icon: "💪", description: "Workout apps and wellness tracking" },
  { name: "Legal Services", icon: "⚖️", description: "Case management and legal tech" },
  { name: "Manufacturing", icon: "🏭", description: "Production management and IoT solutions" },
  { name: "Agriculture", icon: "🌾", description: "Farm management and AgTech solutions" },
  { name: "Energy & Utilities", icon: "⚡", description: "Smart grid and energy management" },
  { name: "Construction", icon: "🏗️", description: "Project management and site solutions" },
  { name: "Insurance", icon: "🛡️", description: "Claims processing and InsurTech" },
  { name: "Retail", icon: "🏪", description: "POS systems and inventory management" },
  { name: "Sports", icon: "⚽", description: "Team management and fan engagement" },
  { name: "Media & Publishing", icon: "📰", description: "Content management and publishing" },
  { name: "Telecommunications", icon: "📡", description: "Network management and telecom apps" },
  { name: "Non-Profit", icon: "❤️", description: "Donation platforms and volunteer management" },
  { name: "Government", icon: "🏛️", description: "Citizen services and e-governance" },
  { name: "Fashion", icon: "👗", description: "Fashion tech and virtual try-on" },
  { name: "Beauty & Cosmetics", icon: "💄", description: "Beauty apps and salon management" },
  { name: "Events", icon: "🎉", description: "Event management and ticketing" },
  { name: "Music", icon: "🎵", description: "Music streaming and artist platforms" },
  { name: "Gaming", icon: "🎮", description: "Game development and esports" },
  { name: "HR & Recruitment", icon: "👥", description: "HR software and hiring platforms" },
  { name: "Supply Chain", icon: "🔗", description: "Supply chain visibility and management" },
  { name: "Pharmaceuticals", icon: "💊", description: "Drug tracking and pharma solutions" },
  { name: "Aviation", icon: "🛩️", description: "Aviation management and booking" },
  { name: "Marine & Shipping", icon: "🚢", description: "Maritime logistics and tracking" },
  { name: "Mining", icon: "⛏️", description: "Mining operations and safety" },
  { name: "Security", icon: "🔒", description: "Security systems and monitoring" },
  { name: "Waste Management", icon: "♻️", description: "Waste tracking and recycling" },
  { name: "Water & Sanitation", icon: "💧", description: "Water management systems" },
  { name: "Social Media", icon: "📱", description: "Social platforms and community apps" },
  { name: "Dating", icon: "💕", description: "Dating apps and matchmaking" },
  { name: "Pet Care", icon: "🐕", description: "Pet services and vet management" },
  { name: "Home Services", icon: "🏠", description: "Home service booking and management" },
  { name: "Cleaning Services", icon: "🧹", description: "Cleaning service platforms" },
  { name: "Photography", icon: "📷", description: "Photography platforms and editing" },
  { name: "Interior Design", icon: "🛋️", description: "Design tools and visualization" },
  { name: "Architecture", icon: "📐", description: "Architectural software and BIM" },
  { name: "Jewelry", icon: "💎", description: "Jewelry e-commerce and customization" },
  { name: "Art & Collectibles", icon: "🎨", description: "Art marketplaces and NFT platforms" },
  { name: "Childcare", icon: "👶", description: "Childcare management and parenting apps" },
  { name: "Senior Care", icon: "👴", description: "Elder care and health monitoring" },
  { name: "Cannabis", icon: "🌿", description: "Dispensary management and compliance" },
];

const Industries = () => {
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
                Industries We Serve
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                50+ Industries{" "}
                <span className="text-gradient">Worldwide</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From startups to Fortune 500 companies, we deliver tailored digital 
                solutions that address unique industry challenges and opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {allIndustries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ scale: 1.03 }}
                  className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="font-display font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {industry.description}
                  </p>
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
                Don't See Your Industry?
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                We work with businesses across all sectors. Contact us to discuss your specific needs.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
                  Get in Touch
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

export default Industries;
