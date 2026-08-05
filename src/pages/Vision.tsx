import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  Rocket,
  Cpu,
  Globe2,
  Leaf,
  Sparkles,
  Users,
  Zap,
  Cloud,
  Search,
  BrainCircuit,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const strategicPillars = [
  {
    icon: BrainCircuit,
    title: "AI-Native Delivery",
    period: "2026 - 2027",
    description:
      "Embed AI across the full delivery lifecycle, from generative design and code assistance to intelligent automation, so every client solution ships smarter and faster.",
  },
  {
    icon: Search,
    title: "Generative Engine Optimization",
    period: "2026 - 2028",
    description:
      "Pioneer GEO practices that position client brands inside AI-generated answers and assistants, not just traditional search results, as discovery shifts to conversational engines.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Everything",
    period: "2027 - 2029",
    description:
      "Standardize on cloud-native, serverless, and edge architectures by default, giving every client platform built-in scalability, resilience, and lower operating cost.",
  },
  {
    icon: Globe2,
    title: "Global Market Expansion",
    period: "2026 - 2030",
    description:
      "Extend our footprint into new high-growth regions, pairing global engineering standards with the local market expertise clients need to launch with confidence.",
  },
];

const roadmap = [
  {
    year: "2026",
    title: "AI-First Service Lines",
    description:
      "Integrate AI capabilities across our core service offerings, from AI-assisted design systems to intelligent marketing automation, making every solution smarter and more adaptive.",
    icon: Cpu,
  },
  {
    year: "2027",
    title: "Expanded Global Presence",
    description:
      "Grow our footprint into additional high-growth markets, bringing world-class digital solutions closer to emerging economies alongside our existing 9-country base.",
    icon: Globe2,
  },
  {
    year: "2028",
    title: "Deeper Enterprise Partnerships",
    description:
      "Scale our enterprise portfolio with dedicated teams for larger organizations while maintaining the agility and personalized service our clients value most.",
    icon: Users,
  },
  {
    year: "2029",
    title: "Sustainable Operations",
    description:
      "Advance toward greener operations through efficient hosting choices, remote-first policies, and energy-conscious infrastructure decisions across all offices.",
    icon: Leaf,
  },
  {
    year: "2030",
    title: "Knowledge & Talent Investment",
    description:
      "Expand mentorship, training, and knowledge-sharing programs in web development, AI, and digital marketing across our global teams and communities.",
    icon: Sparkles,
  },
  {
    year: "2030+",
    title: "Industry-Leading Standards",
    description:
      "Contribute to open standards for web performance, accessibility, and ethical AI, and champion practices that raise the bar for digital agency excellence.",
    icon: Rocket,
  },
];

const innovationFocus = [
  { icon: BrainCircuit, name: "Artificial Intelligence", desc: "Machine learning, NLP, computer vision, and generative AI applied to real business automation." },
  { icon: Search, name: "Generative Engine Optimization", desc: "Optimizing brand visibility for AI assistants and generative search alongside traditional SEO." },
  { icon: Cloud, name: "Cloud-Native Architecture", desc: "Serverless, containerized, and edge-ready infrastructure built for scale from day one." },
  { icon: Zap, name: "Automation & Integration", desc: "Workflow automation and API-first integrations that remove manual overhead from operations." },
  { icon: Leaf, name: "Sustainable Engineering", desc: "Efficient coding practices and infrastructure choices that reduce environmental footprint." },
  { icon: Sparkles, name: "Immersive Experiences", desc: "AR/VR and interactive interfaces for e-commerce, training, and product visualization." },
];

const Vision = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Vision | The AI-First Digital Agency - NETREX"
        description="NETREX Inc's vision for 2026-2030: an AI-first, cloud-native agency pioneering generative engine optimization and global expansion."
        canonical="https://netrex.lovable.app/vision"
      />
      <Header />
      <main>
        <PageHero
          badge="Our Vision"
          title="Shaping the Future of"
          highlight="Digital Innovation"
          description="We envision a world where every business, regardless of size, location, or industry, has access to transformative digital technology that levels the playing field. Between 2026 and 2030, NETREX is building toward being the most trusted AI-first digital partner for growing businesses worldwide."
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Build the Future With Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/mission">
              <Button variant="outline" size="lg">
                Read Our Mission
              </Button>
            </Link>
          </div>
        </PageHero>

        {/* Vision statement */}
        <section className="py-20 md:py-24">
          <div className="container-wide">
            <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary" />
                <Eye className="mx-auto mb-6 h-12 w-12 text-primary" />
                <blockquote className="font-display text-2xl font-bold leading-relaxed md:text-3xl">
                  "To become the world's most impactful digital agency, where technology meets humanity, innovation
                  meets integrity, and every project creates lasting value for businesses and communities alike."
                </blockquote>
                <p className="mt-6 text-lg text-muted-foreground">
                  Sheraz Khan, Founder & CEO, NETREX INC.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategic pillars 2026-2030 */}
        <section className="py-20 md:py-24 bg-secondary/30">
          <div className="container-wide">
            <motion.div {...fadeUp} className="mx-auto mb-16 max-w-3xl text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Strategic Pillars
              </span>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Our Focus for <span className="text-primary">2026 - 2030</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Four strategic pillars anchor how we invest, hire, and build over the next five years.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {strategicPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:scale-110 group-hover:bg-primary">
                      <pillar.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {pillar.period}
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold">{pillar.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap timeline */}
        <section className="py-20 md:py-24">
          <div className="container-wide">
            <motion.div {...fadeUp} className="mx-auto mb-16 max-w-3xl text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Our Roadmap
              </span>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                A Clear Path <span className="text-primary">Year by Year</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                An ambitious roadmap that charts our course from where we are today to where we're determined to be.
              </p>
            </motion.div>

            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-border md:left-1/2" aria-hidden="true" />
              <div className="space-y-10">
                {roadmap.map((goal, i) => (
                  <motion.div
                    key={goal.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`relative flex gap-6 md:w-1/2 ${
                      i % 2 === 0 ? "md:ml-auto md:pl-10" : "md:mr-auto md:flex-row-reverse md:pr-10 md:text-right"
                    } pl-16 md:pl-0`}
                  >
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-card text-primary shadow-sm md:static md:flex-shrink-0">
                      <goal.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-semibold text-primary">{goal.year}</div>
                      <h3 className="mb-2 font-display text-lg font-bold">{goal.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{goal.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Innovation focus */}
        <section className="py-20 md:py-24 bg-secondary/30">
          <div className="container-wide">
            <motion.div {...fadeUp} className="mx-auto mb-16 max-w-3xl text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Innovation Focus
              </span>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Where We're <span className="text-primary">Investing</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                AI, generative engine optimization, and cloud-native engineering sit at the center of our roadmap.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {innovationFocus.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  {...fadeUp}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg"
                >
                  <tech.icon className="mb-3 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 font-display font-bold">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="container-wide text-center">
            <motion.div {...fadeUp} className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
                Be Part of Our <span className="text-primary">Vision</span>
              </h2>
              <p className="mb-8 text-lg text-background/70">
                The future of digital is being built today. Whether you want to transform your business or shape
                the industry alongside us, let's connect.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Get Started Today
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button variant="outline" size="lg" className="border-background/20 text-background hover:bg-background/10">
                    Explore Careers
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

export default Vision;
