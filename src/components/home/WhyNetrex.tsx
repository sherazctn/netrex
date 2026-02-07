import { motion } from "framer-motion";
import { 
  Zap, 
  Users, 
  Globe2, 
  Award, 
  HeartHandshake, 
  Lightbulb 
} from "lucide-react";
import { CountUpNumber } from "@/components/ui/CountUpNumber";

const reasons = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "We embrace new ideas and cutting-edge technologies to deliver solutions that set you apart.",
  },
  {
    icon: Users,
    title: "Client-Centric Focus",
    description: "Your success is our priority. We work closely with you to understand and exceed your goals.",
  },
  {
    icon: Globe2,
    title: "Global Presence",
    description: "With offices in UAE, USA, UK, Canada, Australia, and Pakistan, we serve clients worldwide.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Top-rated on Upwork, Clutch, and recognized by Google Developers Agency Program.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity & Transparency",
    description: "We maintain honesty and openness in all our interactions and business dealings.",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Our team brings fresh perspectives and creative approaches to every challenge.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Industries Served" },
  { value: 6, suffix: "", label: "Global Offices" },
];

export function WhyNetrex() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Businesses Choose{" "}
            <span className="text-primary">NETREX</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Since 2016, we've been helping businesses worldwide achieve their 
            digital transformation goals with excellence and creativity.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner with Counter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-primary relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-30%2030v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
