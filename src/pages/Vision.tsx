import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Rocket, Cpu, Globe2, Leaf, Sparkles, Users, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const visionGoals = [
  {
    year: "2025",
    title: "AI-First Agency",
    description: "Integrate AI capabilities into 100% of our service offerings, from AI-powered design systems to intelligent marketing automation, making every client solution smarter and more adaptive.",
    icon: Cpu,
  },
  {
    year: "2026",
    title: "15 Global Offices",
    description: "Expand our physical presence to 15 countries including Japan, South Korea, Brazil, and Nigeria — bringing world-class digital solutions closer to emerging markets and high-growth economies.",
    icon: Globe2,
  },
  {
    year: "2027",
    title: "1000+ Enterprise Clients",
    description: "Scale our enterprise portfolio to serve over 1,000 organizations, with dedicated teams for Fortune 500 companies while maintaining the agility and personalized service our clients love.",
    icon: Users,
  },
  {
    year: "2028",
    title: "Carbon-Neutral Operations",
    description: "Achieve full carbon neutrality across all operations through green hosting, remote-first policies, and renewable energy-powered offices — proving that growth and sustainability coexist.",
    icon: Leaf,
  },
  {
    year: "2029",
    title: "NETREX Academy Launch",
    description: "Launch a full-scale tech education platform offering free and subsidized courses in web development, AI, and digital marketing — training 100,000+ professionals worldwide.",
    icon: Sparkles,
  },
  {
    year: "2030",
    title: "Industry Standard Setter",
    description: "Become the benchmark for digital agency excellence — publishing open standards for web performance, accessibility, and ethical AI that the entire industry adopts.",
    icon: Rocket,
  },
];

const futureTech = [
  { name: "Artificial Intelligence", desc: "Deep learning, NLP, computer vision, and generative AI for business automation" },
  { name: "Web 3.0 & Blockchain", desc: "Decentralized applications, smart contracts, and tokenized digital experiences" },
  { name: "Extended Reality (XR)", desc: "AR/VR solutions for immersive e-commerce, training, and real estate visualization" },
  { name: "Edge Computing", desc: "Ultra-low latency applications with edge-native architectures for IoT and real-time data" },
  { name: "Quantum-Ready Solutions", desc: "Future-proofing cryptography and optimization for the quantum computing era" },
  { name: "Sustainable Tech", desc: "Green coding practices, carbon-aware computing, and energy-efficient architectures" },
];

const Vision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Vision
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Shaping the Future of{" "}
                <span className="text-primary">Digital Innovation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We envision a world where every business — regardless of size, location, or industry — has access to transformative digital technology that levels the playing field. By 2030, NETREX aims to be the most trusted and impactful digital agency on the planet.
              </p>
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
            </motion.div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="p-12 rounded-3xl bg-card border border-border relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary" />
                <Eye className="h-12 w-12 text-primary mx-auto mb-6" />
                <blockquote className="font-display text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                  "To become the world's most impactful digital agency — where technology meets humanity, innovation meets integrity, and every project creates lasting value for businesses and communities alike."
                </blockquote>
                <p className="text-muted-foreground text-lg">
                  — Sheraz Khan, Founder & CEO, NETREX INC.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-20 bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Roadmap
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Strategic Goals <span className="text-primary">2025 — 2030</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A clear, ambitious roadmap that charts our course from where we are today to where we're determined to be.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visionGoals.map((goal, i) => (
                <motion.div
                  key={goal.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-6xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {goal.year}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <goal.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">{goal.year}</div>
                  <h3 className="font-display text-xl font-bold mb-3">{goal.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Technologies */}
        <section className="py-20">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Future Technologies
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Technologies We're <span className="text-primary">Investing In</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We continuously invest in emerging technologies to ensure our clients stay ahead of the curve.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureTech.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all group"
                >
                  <Zap className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-bold mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
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
                Be Part of Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-background/70 text-lg mb-8">
                The future of digital is being built today. Whether you want to transform your business or shape the industry alongside us, let's connect.
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
