import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import {
  ArrowRight, Boxes, Braces, CheckCircle2, Code2, Facebook, GitBranch,
  Instagram, Linkedin, Mail, MessageCircle, Package, Play, Server,
  ShoppingBag, Workflow, Youtube, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ceoPortrait from "@/assets/sheraz-khan-ceo.jpg";

const stack = [
  { name: "React JS", icon: Braces }, { name: "Node.js", icon: Server },
  { name: "PHP", icon: Code2 }, { name: "C++", icon: Code2 },
  { name: "Java", icon: Package }, { name: "Docker", icon: Boxes },
  { name: "CI/CD Pipelines", icon: GitBranch }, { name: "Wix Studio", icon: Zap },
  { name: "Webflow", icon: Workflow }, { name: "Shopify", icon: ShoppingBag },
  { name: "Lovable.dev", icon: Braces },
];

const ventures = [
  { name: "HS Nexus", role: "Managing Director", copy: "Driving digital growth marketing and strategic brand scaling." },
  { name: "Drafinity LLC", role: "Managing Director", copy: "Innovating precision architectural drafting and 3D design services." },
  { name: "SK Agri Ventures", role: "Managing Director", copy: "Modernizing agricultural operations and infrastructure." },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sherazcs", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/sherazcs", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/sherazcs", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@SherysEscapes", icon: Youtube },
];

const schema = {
  "@context": "https://schema.org", "@type": "Person", name: "Sheraz Khan",
  alternateName: "Muhammad Sheraz", jobTitle: "Founder & CEO",
  url: "https://www.netrexinc.com/ceo", image: "https://www.netrexinc.com/assets/sheraz-khan-ceo.jpg",
  description: "Sheraz Khan is Founder and CEO of NETREX Inc, leading digital engineering and business transformation across nine countries.",
  worksFor: { "@type": "Organization", name: "NETREX INC", url: "https://www.netrexinc.com" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of South Asia" },
  homeLocation: [{ "@type": "Place", name: "Dubai, UAE" }, { "@type": "Place", name: "Lahore, Pakistan" }],
  knowsAbout: stack.map((item) => item.name), sameAs: socials.map((item) => item.href),
};

const CEO = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Sheraz Khan | Founder & CEO of NETREX Inc"
      description="Meet Sheraz Khan, Founder and CEO of NETREX Inc. Explore his engineering expertise, leadership philosophy, ventures and global digital transformation work."
      canonical="https://www.netrexinc.com/ceo"
      schema={schema}
    />
    <Header />
    <main>
      <section className="relative overflow-hidden bg-secondary/30 pb-16 pt-36 md:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <svg className="h-full w-full"><defs><pattern id="ceo-grid" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0H0V44" fill="none" stroke="currentColor" /></pattern></defs><rect width="100%" height="100%" fill="url(#ceo-grid)" /></svg>
        </div>
        <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65 }}>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-primary">Founder &amp; CEO, NETREX INC.</div>
            <h1 className="font-display text-5xl font-bold leading-none md:text-7xl">Sheraz Khan</h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">Driving global digital transformation through engineering excellence and strategic innovation. Based in Dubai, UAE &amp; Lahore, PK.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact"><Button variant="hero" size="lg">Partner with NETREX <ArrowRight className="h-4 w-4" /></Button></a>
              <a href="#stack"><Button variant="outline" size="lg">View Tech Stack</Button></a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
              {["Member PSEB", "Business Member LCCI", "Wix Legend Partner"].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" />{item}</span>)}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }} className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] border border-primary/20" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-card shadow-2xl">
              <img src={ceoPortrait} alt="Sheraz Khan, Founder and CEO of NETREX Inc" className="h-full w-full object-cover" fetchPriority="high" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 to-transparent p-7 pt-24">
                <div className="font-display text-xl font-bold text-background">Engineering-led leadership</div>
                <div className="mt-1 text-sm text-background/75">Dubai, UAE · Lahore, Pakistan</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="container-tight text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Executive Summary</div>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Bridging Engineering with Global Business</h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">As the Founder and CEO of NETREX INC., Sheraz Khan leads a global digital agency dedicated to bridging the gap between complex software engineering and scalable business growth. With a foundation in Computer Science from the University of South Asia and a hands-on approach to technology, Sheraz has grown NETREX into an international powerhouse operating across 9 countries.</p>
        </motion.div>
      </section>

      <section id="stack" className="section-padding scroll-mt-28">
        <div className="container-wide">
          <div className="mx-auto mb-12 max-w-3xl text-center"><div className="text-sm font-semibold uppercase tracking-wider text-primary">Technical Arsenal</div><h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Core Engineering Stack</h2><p className="mt-4 text-muted-foreground">Leadership grounded in profound technical expertise, driving robust, future-proof digital products.</p></div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {stack.map((item, i) => <motion.div key={item.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }} whileHover={{ y: -5 }} className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center shadow-sm"><item.icon className="mb-3 h-6 w-6 text-primary" /><span className="text-sm font-semibold">{item.name}</span></motion.div>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-2xl border-l-4 border-primary bg-foreground p-8 text-background md:p-12">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Operational Philosophy</div>
            <h2 className="mt-3 font-display text-3xl font-bold">Engagement Standard</h2>
            <p className="mt-5 text-lg leading-8 text-background/75">To maintain the highest quality of enterprise delivery, all client partnerships and custom project offers are governed by strict, scope-bound deliverables and clear non-cancellation terms. This ensures focused execution and mutual success for every digital deployment.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-wide"><div className="mb-12 text-center"><div className="text-sm font-semibold uppercase tracking-wider text-primary">The Entrepreneurial Ecosystem</div><h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Beyond Software: A Diverse Portfolio</h2></div>
          <div className="grid gap-6 md:grid-cols-3">{ventures.map((v, i) => <motion.article key={v.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={{ y: -7 }} className="rounded-xl border border-border bg-card p-7 shadow-sm"><div className="mb-8 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10"><Zap className="h-5 w-5 text-primary" /></div><h3 className="font-display text-2xl font-bold">{v.name}</h3><div className="mt-1 text-sm font-semibold text-primary">{v.role}</div><p className="mt-4 text-muted-foreground">{v.copy}</p></motion.article>)}</div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <a href="https://www.youtube.com/@SherysEscapes" target="_blank" rel="noopener noreferrer" className="group relative aspect-video overflow-hidden rounded-2xl bg-foreground">
            <img src={ceoPortrait} alt="Sheraz Khan, creator of Shery's Escapes" className="h-full w-full object-cover object-top opacity-70 transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 flex items-center justify-center"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform group-hover:scale-110"><Play className="ml-1 h-7 w-7" fill="currentColor" /></span></span>
          </a>
          <div><div className="text-sm font-semibold uppercase tracking-wider text-primary">The Human Element</div><h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Perspective Beyond the Screen</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">When not architecting global tech deployments, Sheraz documents his automotive adventures and mountain road trips—often taking his Haval H6 through regions like Swat Valley. Explore the real-world journeys on his digital media channel, Shery's Escapes.</p><a href="https://www.youtube.com/@SherysEscapes" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block"><Button variant="hero" size="lg"><Youtube className="h-5 w-5" /> Watch Shery's Escapes on YouTube</Button></a></div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 bg-foreground py-20 text-background md:py-24">
        <div className="container-tight text-center"><div className="text-sm font-semibold uppercase tracking-wider text-primary">Connect Hub</div><h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Ready to Innovate?</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-background/70">Let's discuss how NETREX can drive your digital transformation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm"><a href="mailto:info@netrexinc.com" className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> info@netrexinc.com</a><a href="https://wa.me/971502008313" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4" /> Business WhatsApp: +971 50 200 8313</a></div>
          <div className="mt-8 flex justify-center gap-3">{socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background transition-colors hover:border-primary hover:bg-primary"><s.icon className="h-4 w-4" /></a>)}</div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CEO;
