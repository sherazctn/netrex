import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Leaf, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const commitments = [
  {
    icon: Users,
    title: "Diversity & Inclusion",
    description: "We are committed to building teams across our nine offices that reflect the diverse markets we serve, with equitable hiring and advancement practices as our stated policy.",
  },
  {
    icon: GraduationCap,
    title: "Community & Skills",
    description: "We commit to supporting digital skills development in the communities around our offices, including mentorship for early-career talent entering technology and design.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "Our operating policy favors remote-friendly and cloud-based delivery to reduce unnecessary travel and physical infrastructure footprint across our global offices.",
  },
  {
    icon: Heart,
    title: "Ethical Business Practice",
    description: "We commit to transparent client relationships, fair vendor treatment and compliance with the labor and data protection regulations of every jurisdiction we operate in.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Corporate Social Responsibility | NETREX INC",
  url: "https://www.netrexinc.com/csr",
};

const CSR = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Corporate Social Responsibility | NETREX INC"
        description="NETREX INC corporate social responsibility commitments: diversity and inclusion, community skills programs, environmental policy and ethical business practice."
        canonical="https://www.netrexinc.com/csr"
        schema={schema}
      />
      <Header />
      <main>
        <PageHero
          badge="CSR & Sustainability"
          title="Responsible Growth,"
          highlight="Global Impact"
          description="As a global digital agency operating across nine offices, we hold ourselves to stated commitments on diversity, community investment, environmental responsibility and ethical business practice."
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/careers">
              <Button variant="hero" size="lg" className="group">
                Join Our Team
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/company-profile">
              <Button variant="outline" size="lg">
                Company Profile
              </Button>
            </Link>
          </div>
        </PageHero>

        {/* Commitments */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Commitments
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Policies We <span className="text-primary">Hold Ourselves To</span>
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                These are stated organizational commitments and policies, not third-party audited measurements.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {commitments.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl border border-border bg-card p-8"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground">{c.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="rounded-3xl border border-border bg-secondary/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Questions about our practices?</h3>
                <p className="text-muted-foreground">Reach our team for detail on any of our stated CSR commitments.</p>
              </div>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Contact Us
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CSR;
