import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    country: "UAE",
    city: "Dubai",
    flag: "🇦🇪",
    address: "Office 523, Block-C, Building 9W, Dubai Airport Free Zone",
    timezone: "GMT+4",
    isHQ: true,
  },
  {
    country: "USA",
    city: "Albany",
    flag: "🇺🇸",
    address: "418 Broadway STE N, Albany, New York 12207",
    timezone: "GMT-5",
    isHQ: false,
  },
  {
    country: "UK",
    city: "London",
    flag: "🇬🇧",
    address: "25 The Shard, 32 London Bridge St, London",
    timezone: "GMT",
    isHQ: false,
  },
  {
    country: "Germany",
    city: "Berlin",
    flag: "🇩🇪",
    address: "Kurfürstendamm 14, 10719 Berlin",
    timezone: "GMT+1",
    isHQ: false,
  },
  {
    country: "Canada",
    city: "Vancouver",
    flag: "🇨🇦",
    address: "70 Burrard St, Vancouver, BC",
    timezone: "GMT-8",
    isHQ: false,
  },
  {
    country: "Australia",
    city: "Melbourne",
    flag: "🇦🇺",
    address: "19 Bank Pl, Melbourne VIC 3000",
    timezone: "GMT+10",
    isHQ: false,
  },
  {
    country: "Singapore",
    city: "Singapore",
    flag: "🇸🇬",
    address: "Level 39, Marina Bay Financial Centre, Tower 2",
    timezone: "GMT+8",
    isHQ: false,
  },
  {
    country: "Saudi Arabia",
    city: "Riyadh",
    flag: "🇸🇦",
    address: "22 King Abdullah Rd, Riyadh 12211",
    timezone: "GMT+3",
    isHQ: false,
  },
  {
    country: "Pakistan",
    city: "Lahore",
    flag: "🇵🇰",
    address: "21, J3 Block, Phase 2, Johar Town, Lahore",
    timezone: "GMT+5",
    isHQ: false,
  },
];

export function GlobalPresence() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              With offices across 9 countries and growing, we're always close to you. 
              Our global presence enables us to serve clients 24/7 and understand local markets.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Find Your Nearest Office
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-3">
            {locations.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className={`relative p-4 rounded-2xl border transition-all duration-300 hover:border-primary/50 cursor-pointer ${
                  location.isHQ
                    ? "bg-primary border-transparent"
                    : "bg-background/5 border-background/10"
                }`}
              >
                {location.isHQ && (
                  <span className="absolute -top-2 -right-2 px-3 py-1 text-xs font-bold bg-background text-foreground rounded-full">
                    HQ
                  </span>
                )}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{location.flag}</span>
                  <div>
                    <h3 className="font-display font-bold text-sm text-background">
                      {location.city}
                    </h3>
                    <div className="flex items-start gap-1 text-xs text-background/70 mt-1">
                      <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{location.address}</span>
                    </div>
                    <div className="text-[10px] text-background/50 mt-1">
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
