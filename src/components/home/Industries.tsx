import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  { name: "Real Estate", icon: "🏢" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Finance & Banking", icon: "💰" },
  { name: "E-Commerce", icon: "🛒" },
  { name: "Education", icon: "📚" },
  { name: "Travel & Tourism", icon: "✈️" },
  { name: "Food & Restaurant", icon: "🍽️" },
  { name: "Logistics", icon: "📦" },
  { name: "Entertainment", icon: "🎬" },
  { name: "Automotive", icon: "🚗" },
  { name: "Fitness & Wellness", icon: "💪" },
  { name: "Legal Services", icon: "⚖️" },
];

export function Industries() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Industries We Serve
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Solutions Tailored for{" "}
              <span className="text-gradient">Every Industry</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From startups to enterprises, we deliver industry-specific digital 
              solutions that drive growth and innovation across 50+ sectors worldwide.
            </p>
            <Link to="/industries">
              <Button variant="hero" size="lg" className="group">
                Explore All Industries
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Right - Industry Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-4 gap-3"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 text-center cursor-pointer"
              >
                <div className="text-3xl mb-2">{industry.icon}</div>
                <div className="text-xs md:text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                  {industry.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
