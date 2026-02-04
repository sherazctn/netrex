import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PortfolioScrollCardProps {
  title: string;
  category: string;
  technology: string;
  image: string;
  result: string;
}

export function PortfolioScrollCard({ title, category, technology, image, result }: PortfolioScrollCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Image container with scroll effect */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full object-cover object-top"
          style={{ minHeight: "400px" }}
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -150 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent flex items-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-2 text-white"
          >
            <span className="font-medium">View Project</span>
            <ArrowUpRight className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {category}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
            {technology}
          </span>
        </div>
        <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <ArrowUpRight className="h-4 w-4" />
          {result}
        </div>
      </div>
    </motion.div>
  );
}
