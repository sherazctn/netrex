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
  { name: "Insurance", icon: "🛡️" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Retail", icon: "🏪" },
  { name: "Agriculture", icon: "🌾" },
];

export function IndustriesCarousel() {
  // Duplicate for seamless loop
  const allIndustries = [...industries, ...industries];

  return (
    <section className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container-wide mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Industries We Serve
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              Solutions Tailored for{" "}
              <span className="text-primary">Every Industry</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/industries">
              <Button variant="hero" size="lg" className="group">
                Explore All Industries
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-4">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -50 * industries.length] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allIndustries.map((industry, index) => (
            <motion.div
              key={`row1-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[180px]"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{industry.icon}</span>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors whitespace-nowrap">
                  {industry.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: [-50 * industries.length, 0] }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allIndustries.reverse().map((industry, index) => (
            <motion.div
              key={`row2-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[180px]"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{industry.icon}</span>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors whitespace-nowrap">
                  {industry.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
