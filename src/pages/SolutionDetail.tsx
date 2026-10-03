import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { SolutionGallery } from "@/components/solutions/SolutionGallery";
import { getSolution } from "@/data/solutions";
import NotFound from "@/pages/NotFound";

const SolutionDetail = () => {
  const { slug } = useParams();
  const solution = getSolution(slug);
  if (!solution) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`${solution.name} | NETREX Solutions`} description={solution.shortDescription} canonical={`https://www.netrexinc.com/solutions/${solution.slug}`} />
      <Header />
      <main>
        <PageHero badge={solution.category} title={solution.name} highlight="Solution" description={solution.shortDescription}>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild><Link to={`/contact?solution=${solution.slug}`}>Get the Solution <ArrowRight /></Link></Button>
            <Button asChild variant="outline"><Link to={`/contact?demo=${solution.slug}`}>Request a Demo</Link></Button>
          </div>
        </PageHero>
        <section className="section-padding">
          <div className="container-wide grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <SolutionGallery solution={solution} />
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Product overview</span>
              <h2 className="mt-3 font-display text-3xl font-bold">A practical platform for connected work</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{solution.description}</p>
              <div className="mt-7 space-y-3">{solution.capabilities.map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /><span className="font-medium">{item}</span></div>)}</div>
            </div>
          </div>
        </section>
        <section className="border-y border-border bg-secondary/40 py-16">
          <div className="container-wide grid gap-8 md:grid-cols-2">
            <div><h2 className="font-display text-2xl font-bold">Designed for</h2><ul className="mt-5 space-y-3">{solution.idealFor.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}</li>)}</ul></div>
            <div className="rounded-2xl border border-border bg-card p-7"><h2 className="font-display text-2xl font-bold">Full product documentation is coming</h2><p className="mt-3 text-muted-foreground">Detailed workflows, integrations, implementation options and additional product screenshots will be added as the solution documentation is finalized.</p><Button asChild className="mt-6"><Link to={`/contact?demo=${solution.slug}`}>Discuss Your Requirements <ArrowRight /></Link></Button></div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SolutionDetail;
