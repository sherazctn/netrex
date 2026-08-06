import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";
import NotFound from "@/pages/NotFound";
import { getPolicyPage, policyPages } from "@/data/policyPages";

/** Index of every governance, compliance and legal document. */
export function PoliciesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Policies & Compliance Documents | NETREX Inc"
        description="Browse the NETREX Inc governance library: information security, GDPR, accessibility, SLA, anti-bribery, modern slavery, quality, environmental and whistleblower policies."
        canonical="https://www.netrexinc.com/policies"
      />
      <Header />
      <main>
        <PageHero
          badge="Compliance"
          title="Policies &"
          highlight="Compliance Library"
          description="Every governance document that underpins how NETREX INC contracts, delivers and protects data across nine countries."
        />
        <section className="section-padding">
          <div className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policyPages.map((policy, i) => (
              <motion.div
                key={policy.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.05 }}
              >
                <Link
                  to={`/policies/${policy.slug}`}
                  className="group flex h-full flex-col p-6 rounded-3xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <ShieldCheck className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{policy.badge}</span>
                  <h2 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {policy.title} {policy.highlight}
                  </h2>
                  <p className="text-sm text-muted-foreground flex-1">{policy.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read document
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/** Renders a single policy document from the compliance library. */
export default function PolicyPage() {
  const { slug } = useParams();
  const policy = getPolicyPage(slug);

  if (!policy) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={policy.seoTitle}
        description={policy.seoDescription}
        canonical={`https://www.netrexinc.com/policies/${policy.slug}`}
      />
      <Header />
      <main>
        <PageHero
          badge={policy.badge}
          title={policy.title}
          highlight={policy.highlight}
          description={policy.summary}
        />
        <section className="section-padding">
          <div className="container-wide max-w-3xl mx-auto">
            <p className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
              <FileText className="h-4 w-4 text-primary" />
              Last updated {policy.updated} - NETREX INC
            </p>

            <div className="space-y-10">
              {policy.sections.map((section) => (
                <motion.div
                  key={section.heading}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="font-display text-xl md:text-2xl font-bold mb-4">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2.5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-14 p-6 rounded-3xl bg-card border border-border">
              <h2 className="font-display text-lg font-bold mb-3">Other documents</h2>
              <div className="flex flex-wrap gap-2">
                {policyPages
                  .filter((p) => p.slug !== policy.slug)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      to={`/policies/${p.slug}`}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-border text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {p.title} {p.highlight}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
