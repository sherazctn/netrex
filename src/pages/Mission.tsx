import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lightbulb,
  Users,
  Globe2,
  Shield,
  Heart,
  TrendingUp,
  CheckCircle2,
  Compass,
  Workflow,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUpNumber } from "@/components/ui/CountUpNumber";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 300, suffix: "+", label: "Global Clients" },
  { value: 9, suffix: "", label: "Countries" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const operatingPrinciples = [
  {
    icon: Lightbulb,
    title: "Innovation-Driven Solutions",
    description:
      "We leverage cutting-edge technologies, from AI and machine learning to cloud-native architectures, to build solutions that anticipate tomorrow's challenges, not just solve today's problems.",
  },
  {
    icon: Users,
    title: "Client-Centric Partnership",
    description:
      "We build lasting partnerships, not one-off products. Our collaborative approach keeps every solution aligned with your business goals, culture, and growth trajectory.",
  },
  {
    icon: Globe2,
    title: "Global Impact, Local Expertise",
    description:
      "With offices across 9 countries and teams fluent in local markets, we combine global best practices with regional insight for every engagement.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description:
      "Trust is the foundation of everything we do. We maintain full transparency in our processes, pricing, and communication so clients always know where a project stands.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description:
      "We believe in data-driven delivery. Every solution is scoped with clear, measurable outcomes tied directly to your key business metrics.",
  },
  {
    icon: Heart,
    title: "Empowering Communities",
    description:
      "Beyond client work, we nurture the next generation of tech talent through mentorship, open-source contributions, and community workshops across our office locations.",
  },
];

const deliveryFramework = [
  {
    step: "01",
    title: "Discover",
    description: "We map your business goals, users, and constraints before writing a single line of strategy.",
  },
  {
    step: "02",
    title: "Design & Architect",
    description: "Solutions are architected for scale, security, and performance from day one, not retrofitted later.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description: "Agile delivery cycles with transparent reporting keep you informed and in control at every stage.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We stay accountable post-launch with dedicated support, monitoring, and continuous optimization.",
  },
];

const commitments = [
  "Deliver solutions that exceed expectations, not just meet them",
  "Maintain the highest standards of code quality and security",
  "Provide dedicated support channels for all enterprise clients",
  "Continuously invest in R&D and emerging technologies",
  "Foster diversity and inclusion across all our global teams",
  "Reduce environmental impact through sustainable tech practices",
  "Offer pro-bono services to select non-profit organizations",
  "Share knowledge through tech talks, blogs, and open-source projects",
];

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Mission | Digital Innovation Worldwide - NETREX"
        description="NETREX Inc's mission: empower businesses worldwide with innovative digital solutions, from web development and AI automation to branding and performance marketing."
        canonical="https://www.netrexinc.com/mission"
      />
      <Header />
      <main>
        <PageHero
          badge="Our Mission"
          title="Empowering Businesses Through"
          highlight="Digital Excellence"
          description="At NETREX, our mission is to democratize world-class digital solutions, making enterprise-grade technology accessible to businesses of every size across the globe. We exist to transform ambitious ideas into powerful digital realities that drive growth, efficiency, and lasting impact."
        >
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
        </PageHero>

        {/* Stat rail */}
        <section className="border-y border-border bg-foreground text-background">
          <div className="container-wide">
            <div className="grid grid-cols-2 divide-y divide-background/10 md:grid-cols-4 md:divide-x md:divide-y-0">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="px-6 py-10 text-center"
                >
                  <div className="mb-2 font-display text-4xl font-bold text-primary md:text-5xl">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} duration={2000} />
                  </div>
                  <div className="text-sm text-background/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission statement */}
        <section className="py-20 md:py-28">
          <div className="container-wide">
            <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary" />
                <Target className="mx-auto mb-6 h-12 w-12 text-primary" />
                <blockquote className="font-display text-2xl font-bold leading-relaxed md:text-3xl">
                  "To democratize enterprise-grade digital technology, so ambition, not budget, determines what a
                  business can build."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Operating principles */}
        <section className="py-20 md:py-24 bg-secondary/30">
          <div className="container-wide">
            <motion.div {...fadeUp} className="mx-auto mb-16 max-w-3xl text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Operating Principles
              </span>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                The Pillars of Our <span className="text-primary">Mission</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Six foundational principles that guide every decision we make and every solution we build.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {operatingPrinciples.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:scale-110 group-hover:bg-primary">
                    <pillar.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold">{pillar.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How we deliver */}
        <section className="py-20 md:py-24">
          <div className="container-wide">
            <motion.div {...fadeUp} className="mx-auto mb-16 max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                <Workflow className="h-4 w-4" /> How We Deliver
              </span>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                A Repeatable Path to <span className="text-primary">Consistent Results</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every engagement, regardless of size or industry, follows the same disciplined framework.
              </p>
            </motion.div>

            <div className="relative grid gap-8 md:grid-cols-4">
              <div className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block" aria-hidden="true" />
              {deliveryFramework.map((step, i) => (
                <motion.div
                  key={step.step}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-card font-display text-xl font-bold text-primary shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="py-20 md:py-24 bg-secondary/30">
          <div className="container-wide">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <Compass className="h-4 w-4" /> Measurable Commitments
                </span>
                <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
                  Promises We Keep, <span className="text-primary">Every Day</span>
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  These are the standards we hold ourselves accountable to in every project, every interaction,
                  and every line of code.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Partner With Us
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
              <div className="space-y-3">
                {commitments.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/20"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80 md:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="container-wide text-center">
            <motion.div {...fadeUp} className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
                Ready to Be Part of Our <span className="text-primary">Mission</span>?
              </h2>
              <p className="mb-8 text-lg text-background/70">
                Whether you're looking to transform your business or join our global team, we'd love to hear from
                you.
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
