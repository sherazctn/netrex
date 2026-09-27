import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { TARGET_MARKETS, type ServiceSeo } from "@/data/serviceSeo";
import { flagEmoji } from "@/components/reviews/FiverrReviews";

/**
 * Crawlable service overview (ServiceOverview) and FAQs (ServiceFaq): keyword-led intro, the markets we serve, and FAQs.
 * FAQ answers use <details>, so the text is in the HTML even when collapsed.
 */
export function ServiceOverview({ seo }: { seo: ServiceSeo }) {
  return (
      <section className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Overview
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">{seo.heading}</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              {seo.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            {seo.facts && seo.facts.length > 0 && (
              <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                {seo.facts.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-border bg-card p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Get a free quote <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">
              Serving clients in the USA, UAE, UK, Canada, Australia &amp; Europe
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {TARGET_MARKETS.map((m) => (
                <li key={m.code} className="rounded-2xl border border-border bg-card p-4">
                  <div className="mb-1 flex items-center gap-2 font-semibold">
                    <span aria-hidden="true">{flagEmoji(m.code)}</span>
                    {m.name}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
  );
}

export function ServiceFaq({ seo }: { seo: ServiceSeo }) {
  if (!seo.faqs.length) return null;
  return (
        <section className="section-padding bg-secondary/30">
          <div className="container-wide max-w-4xl">
            <h2 className="mb-10 text-center font-display text-3xl font-bold md:text-4xl">
              {seo.h1}: <span className="text-primary">FAQs</span>
            </h2>
            <div className="space-y-3">
              {seo.faqs.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className="group rounded-2xl border border-border bg-card px-6 py-4 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    <h3 className="text-base md:text-lg">{f.q}</h3>
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
  );
}
