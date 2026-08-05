import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Cloud, Boxes, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const strategicPartners = [
  { name: "Amazon Web Services (AWS)", note: "AWS Partner delivering cloud architecture, migration and managed workloads.", badge: "/badges/aws-partner.webp" },
  { name: "Databricks", note: "Databricks Consulting Partner for data engineering, analytics and AI pipelines.", badge: "/badges/databricks-partner.webp" },
];

const techAlliances = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "WordPress", "Shopify", "Webflow",
  "Wix", "Elementor", "Flutter", "React Native", "Swift", "Kotlin", "PostgreSQL", "Supabase",
  "AWS", "Azure", "GCP", "Databricks", "Kubernetes", "Terraform", "OpenAI", "Anthropic", "Google Gemini",
];

const tiers = [
  { icon: Star, title: "Referral Partner", description: "Refer clients to NETREX and receive commission on delivered engagements." },
  { icon: Handshake, title: "Delivery Partner", description: "Co-deliver projects with our teams across development, design or marketing disciplines." },
  { icon: Boxes, title: "Technology Alliance", description: "Platform and tooling vendors integrated into our standard delivery stack." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Partners & Alliances | NETREX INC",
  url: "https://netrex.lovable.app/partners",
};

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Partners & Alliances | NETREX INC"
        description="NETREX INC partner ecosystem: AWS Partner and Databricks Consulting Partner status, technology stack alliances, partnership tiers and how to become a partner."
        canonical="https://netrex.lovable.app/partners"
        schema={schema}
      />
      <Header />
      <main>
        <PageHero
          badge="Partners & Alliances"
          title="Built With"
          highlight="Trusted Partners"
          description="NETREX combines strategic cloud and data partnerships with a broad technology stack to deliver reliable, scalable solutions for enterprise clients."
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Become a Partner
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/trust-center">
              <Button variant="outline" size="lg">
                Trust Center
              </Button>
            </Link>
          </div>
        </PageHero>

        {/* Strategic partners */}
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
                Strategic Partnerships
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Cloud & Data <span className="text-primary">Alliances</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {strategicPartners.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl border border-border bg-card p-6 text-center"
                >
                  <img src={p.badge} alt={p.name} className="h-14 w-auto object-contain mx-auto mb-4" />
                  <div className="font-display font-bold mb-2">{p.name}</div>
                  <p className="text-sm text-muted-foreground">{p.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack alliances */}
        <section className="section-padding pt-0">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border bg-card p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="h-6 w-6 text-primary" />
                <h3 className="font-display text-xl font-bold">Technology Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techAlliances.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership tiers */}
        <section className="section-padding pt-0">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                How We Partner
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Partnership <span className="text-primary">Tiers</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6">
              {tiers.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl border border-border bg-card p-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <t.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.description}</p>
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
                <h3 className="font-display text-xl font-bold mb-2">Interested in partnering with NETREX?</h3>
                <p className="text-muted-foreground">Tell us about your organization and how you would like to collaborate.</p>
              </div>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Start a Conversation
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

export default Partners;
