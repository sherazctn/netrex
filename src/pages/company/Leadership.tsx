import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Users, ShieldCheck, Scale, Compass, MapPin, Briefcase, CalendarDays } from "lucide-react";
import { TEAM, DEPARTMENTS, type TeamMember } from "@/data/team";
import { flagEmoji } from "@/lib/reviews";
import { Button } from "@/components/ui/button";
import ceoPortrait from "@/assets/sheraz-khan-ceo.jpg";
import gurpreetPortrait from "@/assets/gurpreet-singh.jpg";
import sajjadPortrait from "@/assets/sajjad-khan.jpg";

const executiveTeam = [
  { name: "Sheraz Khan", role: "Founder & CEO", image: ceoPortrait, bio: "Founded the company in 2016 as Crickle Studio and led its relaunch as NETREX in 2019", office: "Dubai, UAE", countryCode: "AE", experienceSince: 2016 },
  { name: "Gurpreet Singh", role: "Co-Founder & CMO", image: gurpreetPortrait, bio: "Digital marketing specialist in programmatic, media buying, PPC and content", office: "Dubai, UAE", countryCode: "AE", experienceSince: 2012 },
  { name: "Sajjad Khan", role: "COO", image: sajjadPortrait, bio: "Runs day-to-day operations and project delivery across NETREX offices", office: "Lahore, Pakistan", countryCode: "PK" },
];

const governancePillars = [
  { icon: Scale, title: "Board Oversight", description: "The founders provide strategic oversight and review major operational decisions with executive management." },
  { icon: ShieldCheck, title: "Risk & Compliance", description: "A governance advisor tracks regulatory obligations across every country where NETREX is registered." },
  { icon: Compass, title: "Advisory Approach", description: "Domain advisors in finance, product and technology inform roadmap and investment decisions alongside the executive team." },
  { icon: Users, title: "Accountable Leadership", description: "Executive leadership is directly reachable through our contact channels for enterprise and partner inquiries." },
];

type Person = { name: string; role: string; image?: string; bio?: string; office?: string; countryCode?: string; experienceSince?: number; joined?: string; status?: "Active" | "Former" };

const yearsSince = (y?: number) => (y ? new Date().getFullYear() - y : 0);
const monthYear = (ym?: string) =>
  ym ? new Date(`${ym}-01T00:00:00`).toLocaleDateString("en-GB", { month: "short", year: "numeric" }) : "";

const PersonCard = ({ person, index }: { person: Person; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
    className="group overflow-hidden rounded-3xl border border-border bg-card"
  >
    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/15 via-secondary to-primary/5">
      {person.image ? (
        <img src={person.image} alt={`${person.name}, ${person.role} at NETREX`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-display text-6xl font-bold text-primary/70" aria-hidden="true">
          {person.name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}
        </div>
      )}
      {person.status && (
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
            person.status === "Active" ? "bg-emerald-500 text-white" : "bg-foreground/80 text-background"
          }`}
        >
          {person.status}
        </span>
      )}
    </div>
    <div className="space-y-2 p-5">
      <div>
        <div className="font-display text-lg font-bold">{person.name}</div>
        <div className="text-sm font-semibold text-primary">{person.role}</div>
      </div>
      {person.bio && <p className="text-sm text-muted-foreground">{person.bio}</p>}
      <ul className="space-y-1 text-sm text-muted-foreground">
        {person.office && (
          <li className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span aria-hidden="true">{flagEmoji(person.countryCode)}</span> {person.office}
          </li>
        )}
        {person.experienceSince && (
          <li className="flex items-center gap-2">
            <Briefcase className="h-3.5 w-3.5 shrink-0 text-primary" /> {yearsSince(person.experienceSince)}+ years of experience
          </li>
        )}
        {person.joined && (
          <li className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-primary" /> Joined NETREX {monthYear(person.joined)}
          </li>
        )}
      </ul>
    </div>
  </motion.div>
);

const TABS = ["Leadership", ...DEPARTMENTS.filter((d) => TEAM.some((m) => m.department === d))] as const;

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NETREX INC",
  url: "https://www.netrexinc.com",
  employee: [...executiveTeam, ...TEAM.filter((m) => m.status !== "Former")].map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role })),
};

const Leadership = () => {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Leadership");
  const people: Person[] = tab === "Leadership" ? executiveTeam : (TEAM.filter((m) => m.department === tab).sort((a, b) => (a.status === "Former" ? 1 : 0) - (b.status === "Former" ? 1 : 0)) as TeamMember[]);
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Leadership & Team | NETREX Inc"
        description="Meet the NETREX leadership team and the people behind our operations, development, marketing and sales, from our Dubai HQ to our offices worldwide."
        canonical="https://www.netrexinc.com/leadership"
        schema={schema}
      />
      <Header />
      <main>
        <PageHero
          badge="Leadership & Team"
          title="The People Behind"
          highlight="NETREX"
          description="Meet the leaders and team members behind NETREX, department by department."
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
                Our Team
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                The people behind <span className="text-primary">NETREX</span>
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Headquartered in Dubai, with sales and operations teams in Pakistan, the UK, the USA, Canada and Germany, and partners in Australia, Saudi Arabia and Singapore.
              </p>
            </motion.div>
            <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Departments">
              {TABS.map((t) => {
                const count = t === "Leadership" ? executiveTeam.length : TEAM.filter((m) => m.department === t).length;
                return (
                  <button
                    key={t}
                    type="button"
                    role="tab"
                    aria-selected={tab === t}
                    onClick={() => setTab(t)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      tab === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary hover:text-primary"
                    }`}
                  >
                    {t} <span className="tabular-nums opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {people.map((p, i) => (
                <PersonCard key={`${tab}-${p.name}`} person={p} index={i} />
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
