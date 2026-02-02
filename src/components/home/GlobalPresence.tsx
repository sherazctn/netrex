import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    country: "UAE",
    city: "Dubai",
    flag: "🇦🇪",
    address: "Business Bay, Dubai",
    timezone: "GMT+4",
    isHQ: true,
  },
  {
    country: "USA",
    city: "New York",
    flag: "🇺🇸",
    address: "Manhattan, NY",
    timezone: "GMT-5",
    isHQ: false,
  },
  {
    country: "UK",
    city: "London",
    flag: "🇬🇧",
    address: "Central London",
    timezone: "GMT",
    isHQ: false,
  },
  {
    country: "Canada",
    city: "Toronto",
    flag: "🇨🇦",
    address: "Downtown Toronto",
    timezone: "GMT-5",
    isHQ: false,
  },
  {
    country: "Australia",
    city: "Sydney",
    flag: "🇦🇺",
    address: "Sydney CBD",
    timezone: "GMT+11",
    isHQ: false,
  },
  {
    country: "India",
    city: "Mumbai",
    flag: "🇮🇳",
    address: "Bandra Kurla Complex",
    timezone: "GMT+5:30",
    isHQ: false,
  },
];

export function GlobalPresence() {
  return (
    <section className="section-padding bg-foreground text-background">
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
              Global Offices
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Serving Clients{" "}
              <span className="text-gradient">Worldwide</span>
            </h2>
            <p className="text-lg text-background/70 mb-8">
              With offices across 6 countries and growing, we're always close to you. 
              Our global presence enables us to serve clients 24/7 and understand local markets.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Find Your Nearest Office
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Right - Location Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative p-5 rounded-xl border transition-all duration-300 hover:border-primary/50 cursor-pointer ${
                  location.isHQ
                    ? "bg-gradient-brand border-transparent"
                    : "bg-background/5 border-background/10"
                }`}
              >
                {location.isHQ && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-bold bg-background text-foreground rounded-full">
                    HQ
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{location.flag}</span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-background">
                      {location.city}, {location.country}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-background/70 mt-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {location.address}
                    </div>
                    <div className="text-xs text-background/50 mt-1">
                      {location.timezone}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
