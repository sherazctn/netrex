import { motion } from "framer-motion";
import netrexLogo from "@/assets/netrex-logo.png";

// Client logos from the branding PDF
const clients = [
  { name: "Denefits", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop" },
  { name: "Hogar", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop" },
  { name: "CJC Markets", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop" },
  { name: "SOURCE", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop" },
  { name: "PropertyFinder", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop" },
  { name: "Bayut", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop" },
  { name: "Emirates NBD", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop" },
  { name: "Majid Al Futtaim", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=40&fit=crop" },
];

export function ClientLogos() {
  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 bg-secondary/30 overflow-hidden">
      <div className="container-wide mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm uppercase tracking-wider font-medium"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      {/* Infinite scroll logos */}
      <div className="relative">
        <motion.div
          className="flex items-center gap-16"
          animate={{ x: [0, -100 * clients.length] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/20 transition-all"
            >
              <div className="h-8 flex items-center justify-center">
                <span className="text-lg font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
