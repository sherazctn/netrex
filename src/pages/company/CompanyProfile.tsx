import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, MapPin, Users, Briefcase, Layers, Award, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUpNumber } from "@/components/ui/CountUpNumber";

const offices = [
  { city: "Dubai, UAE", note: "Global Headquarters", flag: "🇦🇪" },
  { city: "New York, USA", note: "Americas Delivery Hub", flag: "🇺🇸" },
  { city: "London, UK", note: "European Client Services", flag: "🇬🇧" },
  { city: "Berlin, Germany", note: "European Engineering", flag: "🇩🇪" },
  { city: "Vancouver, Canada", note: "North America Support", flag: "🇨🇦" },
  { city: "Melbourne, Australia", note: "APAC Delivery", flag: "🇦🇺" },
  { city: "Singapore", note: "APAC Client Services", flag: "🇸🇬" },
  { city: "Riyadh, Saudi Arabia", note: "GCC Regional Office", flag: "🇸🇦" },
  { city: "Lahore, Pakistan", note: "Engineering Center", flag: "🇵🇰" },
];

const serviceLines = [
  "Web Design & Development", "Mobile App Development", "UI/UX Design", "Digital Marketing",
  "Branding", "E-Commerce", "AI Agents & Automation", "Generative Engine Optimization (GEO)",
  "Cloud Solutions", "DevOps & Infrastructure", "Blockchain & Web3", "Data Analytics & BI",
];

const industries = [
  "Healthcare", "Education", "Real Estate", "E-Commerce & Retail", "Hospitality", "Logistics",
  "Finance & Fintech", "Legal", "Manufacturing", "Government", "Non-Profit", "Energy", "Technology & SaaS",
];

const factSheet = [
  { label: "Legal Name", value: "NETREX INC" },
  { label: "Founded", value: "2016" },
  { label: "Headquarters", value: "Office 523, Block-C, Building 9W, Dubai Airport Free Zone, Dubai, UAE" },
  { label: "Entity Type", value: "Global Digital Agency, Free Zone Establishment" },
  { label: "Employee Band", value: "50-200 employees" },
  { label: "Global Offices", value: "9 offices across 9 countries" },
  { label: "Clients Served", value: "500+ clients worldwide" },
  { label: "Email", value: "info@netrexinc.com" },
  { label: "Phone", value: "+971 50 200 8313" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "NETREX INC",
  url: "https://www.netrexinc.com",
  foundingDate: "2016",
  numberOfEmployees: "50-200",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 523, Block-C, Building 9W, Dubai Airport Free Zone",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  email: "info@netrexinc.com",
  telephone: "+971502008313",
};

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Company Profile | NETREX INC Fact Sheet"
        description="NETREX INC company profile: legal name, founding year, headquarters, entity structure, global offices, service lines and key metrics for procurement and due diligence review."
        canonical="https://www.netrexinc.com/company-profile"
        schema={schema}
      />
      <Header />
      <main>
        <PageHero
          badge="Company Profile"
          title="NETREX INC"
          highlight="Fact Sheet"
          description="A concise, verifiable summary of NETREX INC for procurement teams, partners and regulatory review: legal identity, structure, global footprint and service scope."
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Request Full Profile
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/trust-center">
              <Button variant="outline" size="lg">
                Trust &amp; Security
              </Button>
            </Link>
          </div>
        </PageHero>

        {/* Key metrics */}
        <section className="py-12">
          <div className="container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { end: 2016, suffix: "", label: "Founded" },
                { end: 9, suffix: "", label: "Global Offices" },
                { end: 500, suffix: "+", label: "Clients Served" },
                { end: 200, suffix: "", label: "Team Members (max)" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-3xl bg-card border border-border text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-2">
                    <CountUpNumber end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fact sheet card */}
        <section className="section-padding pt-0">
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
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Summary Fact Sheet</h2>
                  <p className="text-sm text-muted-foreground">Suitable for procurement files, RFP annexes and visa/immigration documentation.</p>
                </div>
              </div>
              <dl className="grid sm:grid-cols-2 gap-6">
                {factSheet.map((f) => (
                  <div key={f.label} className="border-b border-border pb-3">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{f.label}</dt>
                    <dd className="font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </section>

        {/* Global offices table */}
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
                Global Footprint
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                9 Offices, <span className="text-primary">One Standard</span>
              </h2>
            </motion.div>

            <div className="overflow-x-auto rounded-3xl border border-border bg-card">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-secondary/40">
                    <th className="p-4 text-sm font-semibold uppercase tracking-wider">Location</th>
                    <th className="p-4 text-sm font-semibold uppercase tracking-wider">Function</th>
                  </tr>
                </thead>
                <tbody>
                  {offices.map((o, i) => (
                    <tr key={o.city} className={i % 2 === 0 ? "" : "bg-secondary/20"}>
                      <td className="p-4 flex items-center gap-2 font-medium">
                        <span className="text-lg">{o.flag}</span> {o.city}
                      </td>
                      <td className="p-4 text-muted-foreground">{o.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Service lines & industries */}
        <section className="section-padding pt-0">
          <div className="container-wide grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <Layers className="h-6 w-6 text-primary" />
                <h3 className="font-display text-xl font-bold">Service Lines</h3>
              </div>
              <ul className="grid grid-cols-1 gap-2">
                {serviceLines.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {s}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="font-display text-xl font-bold">Industries Served</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {industries.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related links */}
        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="rounded-3xl border border-border bg-secondary/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Need more detail for review?</h3>
                <p className="text-muted-foreground">See our leadership, governance and trust &amp; security posture.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/leadership"><Button variant="outline">Leadership</Button></Link>
                <Link to="/trust-center"><Button variant="outline">Trust Center</Button></Link>
                <Link to="/contact"><Button variant="hero">Contact Us</Button></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyProfile;
