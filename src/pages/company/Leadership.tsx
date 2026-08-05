import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, ShieldCheck, Scale, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceoPortrait from "@/assets/sheraz-khan-ceo.jpg";
import gurpreetPortrait from "@/assets/gurpreet-singh.jpg";
import sajjadPortrait from "@/assets/sajjad-khan.jpg";

const executiveTeam = [
  { name: "Sheraz Khan", role: "Founder & CEO", image: ceoPortrait, bio: "Visionary leader with 15+ years in digital transformation" },
  { name: "Gurpreet Singh", role: "CMO", image: gurpreetPortrait, bio: "Growth strategist with expertise in global marketing campaigns" },
  { name: "Sajjad Khan", role: "COO", image: sajjadPortrait, bio: "Operations expert ensuring seamless project delivery worldwide" },
];

const boardMembers = [
  { name: "Dr. Rashid Khan", role: "Chairman of the Board", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop", bio: "Serial entrepreneur & investor with 25+ years scaling MENA tech firms" },
  { name: "Amelia Roberts", role: "Independent Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop", bio: "Former VP at a global consultancy; expert in enterprise digital strategy" },
  { name: "Yusuf Al-Mansouri", role: "Board Advisor - Finance", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop", bio: "CFO-level advisor guiding financial strategy across 9 offices" },
  { name: "Elena Petrova", role: "Board Advisor - Product", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", bio: "Ex-FAANG PM shaping our AI product roadmap for 2027 and beyond" },
  { name: "Rajesh Menon", role: "Board Advisor - Technology", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", bio: "Cloud architect steering our global infrastructure & AI investments" },
  { name: "Aisha Al-Suwaidi", role: "Board Advisor - Governance", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop", bio: "Governance & ESG leader ensuring compliance across 9 jurisdictions" },
];

const governancePillars = [
  { icon: Scale, title: "Board Oversight", description: "The Chairman and independent directors provide strategic oversight and review major operational decisions with executive management." },
  { icon: ShieldCheck, title: "Risk & Compliance", description: "A governance advisor tracks regulatory obligations across the jurisdictions our nine offices operate in." },
  { icon: Compass, title: "Advisory Approach", description: "Domain advisors in finance, product and technology inform roadmap and investment decisions alongside the executive team." },
  { icon: Users, title: "Accountable Leadership", description: "Executive leadership is directly reachable through our contact channels for enterprise and partner inquiries." },
];

const PersonCard = ({ person, index }: { person: { name: string; role: string; image: string; bio: string }; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="rounded-3xl border border-border bg-card overflow-hidden group"
  >
    <div className="aspect-square overflow-hidden">
      <img src={person.image} alt={person.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-5">
      <div className="font-display text-lg font-bold">{person.name}</div>
      <div className="text-sm text-primary font-semibold mb-2">{person.role}</div>
      <p className="text-sm text-muted-foreground">{person.bio}</p>
    </div>
  </motion.div>
);

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NETREX INC",
  url: "https://netrex.lovable.app",
  employee: executiveTeam.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role })),
};

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Leadership & Governance | NETREX INC"
        description="Meet the NETREX INC executive team and board of directors, and learn how governance and advisory oversight guide our global operations across nine offices."
        canonical="https://netrex.lovable.app/leadership"
        schema={schema}
      />
      <Header />
      <main>
        <PageHero
          badge="Leadership & Governance"
          title="The People Behind"
          highlight="NETREX"
          description="Our executive team runs day-to-day delivery worldwide, while a board of directors and domain advisors provide oversight and long-term strategic guidance."
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/company-profile">
              <Button variant="hero" size="lg" className="group">
                Company Profile
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Leadership
              </Button>
            </Link>
          </div>
        </PageHero>

        {/* Executive team */}
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
                Executive Team
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Leading From the <span className="text-primary">Front</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {executiveTeam.map((p, i) => (
                <PersonCard key={p.name} person={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Board of directors */}
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
                Board & Advisors
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Governance & <span className="text-primary">Oversight</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((p, i) => (
                <PersonCard key={p.name} person={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Governance pillars */}
        <section className="section-padding pt-0">
          <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governancePillars.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <g.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
