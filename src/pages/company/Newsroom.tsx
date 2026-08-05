import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Mail, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const awardsTimeline = [
  { year: "2020", title: "Top Software Developers", org: "Clutch", badge: "/badges/clutch-2020.webp" },
  { year: "2024", title: "Clutch Global Fall 2024", org: "Clutch", badge: "/badges/clutch-global.webp" },
  { year: "2024", title: "Clutch Champion", org: "Clutch", badge: "/badges/clutch-champion.webp" },
  { year: "2025", title: "Best of Clutch 2025", org: "Clutch", badge: "/badges/clutch-best-2025.webp" },
  { year: "Ongoing", title: "Top Android Developers", org: "TechReviewer", badge: "/badges/techreviewer-android.svg" },
];

const pressFacts = [
  { label: "Legal Name", value: "NETREX INC" },
  { label: "Founded", value: "2016" },
  { label: "Headquarters", value: "Dubai Airport Free Zone, Dubai, UAE" },
  { label: "Offices", value: "9 global offices" },
  { label: "Employees", value: "50-200" },
  { label: "Media Contact", value: "info@netrexinc.com" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Newsroom | NETREX INC",
  url: "https://netrex.lovable.app/newsroom",
};

const Newsroom = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Newsroom & Press | NETREX INC"
        description="NETREX INC newsroom: press kit facts, brand assets, media contact and our award timeline including Clutch Champion and Best of Clutch recognitions."
        canonical="https://netrex.lovable.app/newsroom"
        schema={schema}
      />
      <Header />
      <main>
        <PageHero
          badge="Newsroom"
          title="News & Press"
          highlight="Resources"
          description="Facts, figures and brand assets for journalists, analysts and partners covering NETREX INC. For interview requests or press inquiries, reach our media contact directly."
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@netrexinc.com?subject=Press%20Inquiry">
              <Button variant="hero" size="lg" className="group">
                <Mail className="h-5 w-5" />
                Media Contact
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Link to="/blog">
              <Button variant="outline" size="lg">
                Read Our Blog
              </Button>
            </Link>
          </div>
        </PageHero>

        {/* Press kit facts */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border bg-card p-8 md:p-10 max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Newspaper className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold">Press Kit Facts</h2>
              </div>
              <dl className="grid sm:grid-cols-2 gap-6">
                {pressFacts.map((f) => (
                  <div key={f.label} className="border-b border-border pb-3">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{f.label}</dt>
                    <dd className="font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-muted-foreground">
                Brand assets (logo files and boilerplate copy) are available on request from our media contact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Awards timeline */}
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
                Recognition
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Award <span className="text-primary">Timeline</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {awardsTimeline.map((a, i) => (
                <motion.div
                  key={a.title + a.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-3xl border border-border bg-card p-6 text-center flex flex-col items-center"
                >
                  <img src={a.badge} alt={a.title} className="h-16 w-auto object-contain mb-4" />
                  <div className="flex items-center gap-1 text-primary text-xs font-semibold uppercase tracking-wider mb-1">
                    <Trophy className="h-3.5 w-3.5" /> {a.year}
                  </div>
                  <div className="font-display font-bold text-sm">{a.title}</div>
                  <div className="text-xs text-muted-foreground">{a.org}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog CTA */}
        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="rounded-3xl border border-border bg-secondary/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Looking for the latest stories?</h3>
                <p className="text-muted-foreground">Read our latest insights, case studies and product updates on the blog.</p>
              </div>
              <Link to="/blog">
                <Button variant="hero" size="lg" className="group">
                  Visit the Blog
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

export default Newsroom;
