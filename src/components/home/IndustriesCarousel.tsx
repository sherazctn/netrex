import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const industries = [
  { nameKey: "industries.realEstate", icon: "🏢" },
  { nameKey: "industries.healthcare", icon: "🏥" },
  { nameKey: "industries.finance", icon: "💰" },
  { nameKey: "industries.ecommerce", icon: "🛒" },
  { nameKey: "industries.education", icon: "📚" },
  { nameKey: "industries.travel", icon: "✈️" },
  { nameKey: "industries.food", icon: "🍽️" },
  { nameKey: "industries.logistics", icon: "📦" },
  { nameKey: "industries.entertainment", icon: "🎬" },
  { nameKey: "industries.automotive", icon: "🚗" },
  { nameKey: "industries.fitness", icon: "💪" },
  { nameKey: "industries.legal", icon: "⚖️" },
  { nameKey: "industries.insurance", icon: "🛡️" },
  { nameKey: "industries.manufacturing", icon: "🏭" },
  { nameKey: "industries.retail", icon: "🏪" },
  { nameKey: "industries.agriculture", icon: "🌾" },
  { nameKey: "industries.technology", icon: "💻" },
  { nameKey: "industries.media", icon: "📺" },
  { nameKey: "industries.construction", icon: "🏗️" },
  { nameKey: "industries.fashion", icon: "👗" },
  { nameKey: "industries.sports", icon: "⚽" },
  { nameKey: "industries.gaming", icon: "🎮" },
  { nameKey: "industries.energy", icon: "⚡" },
  { nameKey: "industries.telecom", icon: "📱" },
];

export function IndustriesCarousel() {
  const { t } = useLanguage();
  
  // Split industries into 3 rows
  const row1 = industries.slice(0, 8);
  const row2 = industries.slice(8, 16);
  const row3 = industries.slice(16, 24);
  
  // Duplicate for seamless loop
  const allRow1 = [...row1, ...row1, ...row1];
  const allRow2 = [...row2, ...row2, ...row2];
  const allRow3 = [...row3, ...row3, ...row3];

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container-wide mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {t('industries.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              {t('industries.title')}{" "}
              <span className="text-primary">{t('industries.title.highlight')}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/industries">
              <Button variant="default" size="lg" className="group">
                {t('industries.explore')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="relative mb-4">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -50 * row1.length] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allRow1.map((industry, index) => (
            <motion.div
              key={`row1-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[180px]"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{industry.icon}</span>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors whitespace-nowrap">
                  {t(industry.nameKey)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative mb-4">
        <motion.div
          className="flex gap-4"
          animate={{ x: [-50 * row2.length, 0] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allRow2.map((industry, index) => (
            <motion.div
              key={`row2-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[180px]"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{industry.icon}</span>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors whitespace-nowrap">
                  {t(industry.nameKey)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Row 3 - Left to Right (slower) */}
      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -50 * row3.length] }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allRow3.map((industry, index) => (
            <motion.div
              key={`row3-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex-shrink-0 group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[180px]"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{industry.icon}</span>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors whitespace-nowrap">
                  {t(industry.nameKey)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
