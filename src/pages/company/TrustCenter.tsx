import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Server, Users, AlertTriangle, Cloud, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import isoBadge from "/badges/iso-27001.webp";
import iso27701Badge from "/badges/iso-27701.webp";
import awsBadge from "/badges/aws-partner.webp";
import databricksBadge from "/badges/databricks-partner.webp";

const pillars = [
  {
    icon: ShieldCheck,
    title: "ISO 27001 Posture",
    description: "Our information security program is aligned with ISO/IEC 27001 controls, covering asset management, access control, cryptography and supplier security.",
  },
  {
    icon: FileCheck,
    title: "ISO 27701 Privacy",
    description: "Privacy information management follows ISO/IEC 27701 practices, extending our security controls to personal data handling processes.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "We apply GDPR and CCPA-aligned practices for data minimization, lawful processing, subject access requests and cross-border transfer safeguards.",
  },
  {
    icon: Server,
    title: "Secure SDLC",
    description: "Code review, dependency scanning and staged environments are built into our development lifecycle before any release reaches production.",
  },
  {
    icon: Users,
    title: "Access Control",
    description: "Role-based access, least-privilege provisioning and periodic access reviews govern who can reach client systems and data.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "A documented incident response process covers detection, containment, client notification and post-incident review.",
  },
];

const cloudPartners = [
  { name: "Amazon Web Services (AWS)", note: "Primary cloud infrastructure and AWS Partner Network member" },
  { name: "Microsoft Azure", note: "Enterprise workloads and hybrid deployments" },
  { name: "Google Cloud Platform (GCP)", note: "Data and AI workloads" },
  { name: "Databricks", note: "Data engineering and analytics via Databricks Consulting Partner status" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Trust, Security & Compliance | NETREX INC",
  url: "https://netrex.lovable.app/trust-center",
  publisher: { "@type": "Organization", name: "NETREX INC" },
};

const TrustCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Trust Center | Security & Compliance | NETREX INC"
        description="NETREX INC Trust Center: ISO 27001 and ISO 27701 posture, data protection practices, secure development lifecycle, access control and incident response overview."
        canonical="https://netrex.lovable.app/trust-center"
        schema={schema}
      />
      <Header />
      <main>
        <PageHero
          badge="Trust Center"
          title="Security You Can"
          highlight="Verify"
          description="This page is maintained by NETREX INC to describe our own security, privacy and compliance practices. It is not a third-party certification of any claim beyond what is stated here."
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@netrexinc.com?subject=Security%20Inquiry">
              <Button variant="hero" size="lg" className="group">
                Contact Security Team
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Link to="/company-profile">
              <Button variant="outline" size="lg">
                Company Profile
              </Button>
            </Link>
          </div>
        </PageHero>

        {/* Certification badges */}
        <section className="py-12">
          <div className="container-wide">
            <div className="flex flex-wrap justify-center items-center gap-8 p-8 rounded-3xl bg-card border border-border">
              <img src={isoBadge} alt="ISO 27001 Certified" className="h-16 w-auto object-contain" />
              <img src={iso27701Badge} alt="ISO 27701:2019 Certified" className="h-16 w-auto object-contain" />
              <img src={awsBadge} alt="AWS Partner" className="h-16 w-auto object-contain" />
              <img src={databricksBadge} alt="Databricks Consulting Partner" className="h-16 w-auto object-contain" />
            </div>
          </div>
        </section>

        {/* Pillars */}
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
                Our Commitments
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Security, Privacy & <span className="text-primary">Compliance</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-3xl border border-border bg-card p-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <p.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hosting / shared responsibility */}
        <section className="section-padding pt-0">
          <div className="container-wide grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <Cloud className="h-6 w-6 text-primary" />
                <h3 className="font-display text-xl font-bold">Hosting & Subprocessors</h3>
              </div>
              <ul className="space-y-4">
                {cloudPartners.map((c) => (
                  <li key={c.name} className="border-b border-border pb-3 last:border-0">
                    <div className="font-medium">{c.name}</div>
                    <div className="text-sm text-muted-foreground">{c.note}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-border bg-secondary/30 p-8"
            >
              <h3 className="font-display text-xl font-bold mb-4">Shared Responsibility</h3>
              <p className="text-muted-foreground mb-4">
                NETREX operates on a shared-responsibility model with our cloud providers. Infrastructure
                providers secure the underlying cloud, network and physical layers, while NETREX is
                responsible for application-level security, configuration, access management and the
                secure delivery of client solutions built on top of that infrastructure.
              </p>
              <p className="text-muted-foreground">
                For security disclosures or questions, reach our team directly at{" "}
                <a href="mailto:info@netrexinc.com" className="text-primary font-medium">info@netrexinc.com</a>{" "}
                or call <a href="tel:+971502008313" className="text-primary font-medium">+971 50 200 8313</a>.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TrustCenter;
