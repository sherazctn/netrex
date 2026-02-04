import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const locations = [
  {
    id: "ae",
    country: "UAE",
    city: "Dubai",
    flag: "🇦🇪",
    address: "Office 523, Block-C, 9W Dubai Airport Free Zone",
    phone: "+971 50 200 8313",
    email: "dubai@netrex.ae",
    timezone: "GMT+4",
    coords: { x: 58, y: 42 },
    isHQ: true,
  },
  {
    id: "us",
    country: "USA",
    city: "New York",
    flag: "🇺🇸",
    address: "418 Broadway STE N, Albany, New York 12207",
    phone: "+1 518 555 0123",
    email: "usa@netrex.ae",
    timezone: "GMT-5",
    coords: { x: 22, y: 35 },
    isHQ: false,
  },
  {
    id: "uk",
    country: "UK",
    city: "London",
    flag: "🇬🇧",
    address: "71-75 Shelton Street, Covent Garden, London",
    phone: "+44 20 7946 0958",
    email: "uk@netrex.ae",
    timezone: "GMT",
    coords: { x: 45, y: 30 },
    isHQ: false,
  },
  {
    id: "ca",
    country: "Canada",
    city: "Vancouver",
    flag: "🇨🇦",
    address: "1575 West Georgia Street, Vancouver, BC",
    phone: "+1 604 555 0189",
    email: "canada@netrex.ae",
    timezone: "GMT-8",
    coords: { x: 15, y: 28 },
    isHQ: false,
  },
  {
    id: "au",
    country: "Australia",
    city: "Brisbane",
    flag: "🇦🇺",
    address: "240 Queen St, Brisbane City QLD 4000",
    phone: "+61 7 3000 0000",
    email: "australia@netrex.ae",
    timezone: "GMT+10",
    coords: { x: 85, y: 70 },
    isHQ: false,
  },
  {
    id: "pk",
    country: "Pakistan",
    city: "Lahore",
    flag: "🇵🇰",
    address: "21, J3 Johar Town, Lahore, Punjab",
    phone: "+92 42 3000 0000",
    email: "pakistan@netrex.ae",
    timezone: "GMT+5",
    coords: { x: 62, y: 40 },
    isHQ: false,
  },
];

export function WorldMapContact() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  return (
    <section className="section-padding bg-foreground text-background overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Connect With Our{" "}
            <span className="text-primary">Global Team</span>
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto">
            With offices across 6 countries, we're always nearby. Select your region to get local contact information.
          </p>
        </motion.div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {locations.map((location) => (
            <motion.button
              key={location.id}
              onClick={() => setActiveLocation(location)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                activeLocation.id === location.id
                  ? "bg-primary text-white"
                  : "bg-background/10 text-background hover:bg-background/20"
              }`}
            >
              <span className="mr-2">{location.flag}</span>
              {location.city}
              {location.isHQ && (
                <span className="ml-2 px-2 py-0.5 text-[10px] bg-white/20 rounded-full">
                  HQ
                </span>
              )}
            </motion.button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* World Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/10] bg-background/5 rounded-3xl overflow-hidden"
          >
            {/* Simplified World Map SVG */}
            <svg
              viewBox="0 0 100 60"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified continent shapes */}
              <path
                d="M10 25 Q15 20 25 22 L30 28 Q28 35 22 38 L12 35 Q8 30 10 25Z"
                fill="hsl(var(--background) / 0.15)"
                stroke="hsl(var(--background) / 0.3)"
                strokeWidth="0.3"
              />
              <path
                d="M18 38 Q22 36 28 40 L32 50 Q25 55 20 52 L15 45 Q16 40 18 38Z"
                fill="hsl(var(--background) / 0.15)"
                stroke="hsl(var(--background) / 0.3)"
                strokeWidth="0.3"
              />
              <path
                d="M40 20 Q50 15 60 20 L65 30 Q60 35 50 38 L42 35 Q38 28 40 20Z"
                fill="hsl(var(--background) / 0.15)"
                stroke="hsl(var(--background) / 0.3)"
                strokeWidth="0.3"
              />
              <path
                d="M45 38 Q50 35 58 40 L55 55 Q48 58 42 52 L45 38Z"
                fill="hsl(var(--background) / 0.15)"
                stroke="hsl(var(--background) / 0.3)"
                strokeWidth="0.3"
              />
              <path
                d="M60 25 Q70 20 78 28 L80 42 Q72 48 65 45 L60 35 Q58 28 60 25Z"
                fill="hsl(var(--background) / 0.15)"
                stroke="hsl(var(--background) / 0.3)"
                strokeWidth="0.3"
              />
              <path
                d="M78 55 Q85 50 92 55 L90 65 Q82 68 78 62 L78 55Z"
                fill="hsl(var(--background) / 0.15)"
                stroke="hsl(var(--background) / 0.3)"
                strokeWidth="0.3"
              />

              {/* Location markers */}
              {locations.map((location, index) => (
                <g key={location.id}>
                  {/* Connection lines */}
                  {activeLocation.id === location.id && (
                    <motion.line
                      x1={activeLocation.coords.x}
                      y1={activeLocation.coords.y}
                      x2={50}
                      y2={30}
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.3"
                      strokeDasharray="2 1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  
                  {/* Pulse animation for active */}
                  {activeLocation.id === location.id && (
                    <motion.circle
                      cx={location.coords.x}
                      cy={location.coords.y}
                      r="3"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.5"
                      animate={{ 
                        r: [3, 6, 3],
                        opacity: [1, 0, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  
                  {/* Marker dot */}
                  <motion.circle
                    cx={location.coords.x}
                    cy={location.coords.y}
                    r={activeLocation.id === location.id ? 2.5 : 1.5}
                    fill={activeLocation.id === location.id ? "hsl(var(--primary))" : "hsl(var(--background) / 0.6)"}
                    className="cursor-pointer"
                    onClick={() => setActiveLocation(location)}
                    whileHover={{ scale: 1.5 }}
                    animate={activeLocation.id === location.id ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1, repeat: activeLocation.id === location.id ? Infinity : 0 }}
                  />
                </g>
              ))}
            </svg>

            {/* Active location label */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute bottom-4 left-4 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activeLocation.flag}</span>
                  <div>
                    <div className="font-bold text-background">{activeLocation.city}</div>
                    <div className="text-sm text-background/60">{activeLocation.country}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Contact Form & Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Contact Details */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-background/5 border border-background/10">
                    <Phone className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-background/60">Phone</div>
                    <a href={`tel:${activeLocation.phone}`} className="font-medium text-background hover:text-primary transition-colors">
                      {activeLocation.phone}
                    </a>
                  </div>
                  <div className="p-4 rounded-2xl bg-background/5 border border-background/10">
                    <Mail className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-background/60">Email</div>
                    <a href={`mailto:${activeLocation.email}`} className="font-medium text-background hover:text-primary transition-colors">
                      {activeLocation.email}
                    </a>
                  </div>
                  <div className="p-4 rounded-2xl bg-background/5 border border-background/10">
                    <MapPin className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-background/60">Address</div>
                    <div className="font-medium text-background text-sm">
                      {activeLocation.address}
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-background/5 border border-background/10">
                    <Clock className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-background/60">Timezone</div>
                    <div className="font-medium text-background">
                      {activeLocation.timezone}
                    </div>
                  </div>
                </div>

                {/* Quick Contact Form */}
                <div className="p-6 rounded-3xl bg-background/5 border border-background/10">
                  <h3 className="font-display font-bold text-xl mb-4">Send a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/10 border-background/20 text-background placeholder:text-background/40"
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background/10 border-background/20 text-background placeholder:text-background/40"
                      />
                    </div>
                    <Input
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40"
                    />
                    <Textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 min-h-[100px]"
                    />
                    <Button variant="hero" size="lg" className="w-full group">
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
