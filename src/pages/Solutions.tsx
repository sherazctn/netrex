import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MonitorPlay, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { SolutionGallery } from "@/components/solutions/SolutionGallery";
import { solutions } from "@/data/solutions";

const Solutions = () => (
  <div className="min-h-screen bg-background">
    <SEO title="Business Software Solutions | NETREX Inc" description="Explore NETREX ERP, NETREX KHATA accounting software and NETREX WhatsApp customer engagement solutions for growing businesses." canonical="https://www.netrexinc.com/solutions" />
    <Header />
    <main>
      <PageHero badge="NETREX Products" title="Solutions Built for" highlight="Real Operations" description="Purpose-built software concepts for connected operations, clearer accounting and more responsive customer engagement." />
      <section className="section-padding">
        <div className="container-wide space-y-12">
          {solutions.map((solution, index) => (
            <motion.article key={solution.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid items-center gap-8 border-b border-border pb-12 last:border-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className={index % 2 ? "lg:order-2" : ""}><SolutionGallery solution={solution} compact /></div>
              <div className={index % 2 ? "lg:order-1" : ""}>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{solution.category}</span>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{solution.name}</h2>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{solution.shortDescription} {solution.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{solution.badges.map((badge) => <span key={badge} className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-semibold">{badge}</span>)}</div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild><Link to={`/contact?solution=${solution.slug}`}>Get the Solution <ArrowRight /></Link></Button>
                  <Button asChild variant="outline"><Link to={`/contact?demo=${solution.slug}`}><MonitorPlay /> Request Demo</Link></Button>
                  <Button asChild variant="ghost"><Link to={`/solutions/${solution.slug}`}>Read More <Sparkles /></Link></Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Solutions;
