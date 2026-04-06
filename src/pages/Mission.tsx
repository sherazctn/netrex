import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Users, Globe2, Zap, Shield, Heart, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUpNumber } from "@/components/ui/CountUpNumber";

const missionPillars = [
  {
    icon: Lightbulb,
    title: "Innovation-Driven Solutions",
    description: "We leverage cutting-edge technologies — from AI and machine learning to cloud-native architectures — to build solutions that don't just solve today's problems but anticipate tomorrow's challenges. Every project we undertake pushes the boundaries of what's possible in digital transformation.",
  },
  {
    icon: Users,
    title: "Client-Centric Partnership",
    description: "We don't just build products; we build lasting partnerships. Our collaborative approach ensures that every solution is deeply aligned with our clients' unique business goals, culture, and growth trajectory. Your success metrics become our KPIs.",
  },
  {
    icon: Globe2,
    title: "Global Impact, Local Expertise",
    description: "With offices across 9 countries and teams fluent in local markets, we combine global best practices with regional insights. Whether you're a startup in Dubai or an enterprise in New York, you get world-class solutions tailored to your market.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "Trust is the foundation of everything we do. We maintain complete transparency in our processes, pricing, and communication. Our clients always know where their project stands, what challenges exist, and how we're solving them.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "We believe in data-driven excellence. Every solution we deliver is designed with clear, measurable outcomes — whether it's a 300% increase in lead generation, 50% reduction in operational costs, or 10x improvement in user engagement.",
  },
  {
    icon: Heart,
    title: "Empowering Communities",
    description: "Beyond business, we're committed to nurturing the next generation of tech talent through mentorship programs, open-source contributions, and community workshops across all our office locations worldwide.",
  },
];

const commitments = [
  "Deliver solutions that exceed expectations, not just meet them",
  "Maintain the highest standards of code quality and security",
  "Provide 24/7 dedicated support for all enterprise clients",
  "Continuously invest in R&D and emerging technologies",
  "Foster diversity and inclusion across all our global teams",
  "Reduce environmental impact through sustainable tech practices",
  "Offer pro-bono services to select non-profit organizations",
  "Share knowledge through tech talks, blogs, and open-source projects",
];

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Mission
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Empowering Businesses Through{" "}
                <span className="text-primary">Digital Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                At NETREX, our mission is to democratize world-class digital solutions, making enterprise-grade technology accessible to businesses of every size across the globe. We exist to transform ambitious ideas into powerful digital realities that drive growth, efficiency, and lasting impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Start Your Journey
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg">
                    See Our Impact
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-foreground text-background">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 500, suffix: "+", label: "Projects Delivered" },
                { value: 300, suffix: "+", label: "Global Clients" },
                { value: 9, suffix: "", label: "Countries" },
                { value: 98, suffix: "%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} duration={2000} />
                  </div>
                  <div className="text-background/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Pillars */}
        <section className="py-20">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                What Drives Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                The Pillars of Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Six foundational principles that guide every decision we make and every solution we build.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {missionPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <pillar.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="py-20 bg-secondary/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Our Commitments
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Promises We Keep, <span className="text-primary">Every Day</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  These aren't just words on a page — they're the standards we hold ourselves accountable to in every project, every interaction, and every line of code.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Partner With Us
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
              <div className="space-y-4">
                {commitments.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Be Part of Our <span className="text-primary">Mission</span>?
              </h2>
              <p className="text-background/70 text-lg mb-8">
                Whether you're looking to transform your business or join our global team, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Start a Project
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button variant="outline" size="lg" className="border-background/20 text-background hover:bg-background/10">
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Mission;
