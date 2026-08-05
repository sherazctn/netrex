import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Building2,
  Globe,
  Scale,
  FileText,
  Users,
  Lock,
  Briefcase,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ScrollText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const registrations = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    companyName: "NETREX LTD",
    regNumber: "15028357",
    regType: "Companies House Registration",
    address: "25 The Shard, 32 London Bridge St, London",
    email: "uk@netrexinc.com",
    jurisdiction: "England and Wales",
    incorporationDate: "2023",
    status: "Active",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    companyName: "NETREX LLC",
    regNumber: "7305133",
    regType: "State Registration Number",
    address: "418 Broadway STE N, Albany, New York 12207",
    email: "usa@netrexinc.com",
    jurisdiction: "State of New York",
    incorporationDate: "2023",
    status: "Active",
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    companyName: "NETREX FZCO",
    regNumber: "05647",
    regType: "DAFZA License Number",
    address: "Office 523, Block-C, Building 9W, Dubai Airport Free Zone",
    email: "info@netrexinc.com",
    jurisdiction: "Dubai Airport Free Zone Authority",
    incorporationDate: "2016",
    status: "Active - Principal Entity",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    companyName: "NETREX PTY LTD",
    regNumber: "464 213 186",
    regType: "ABN (Australian Business Number)",
    address: "19 Bank Pl, Melbourne VIC 3000",
    email: "australia@netrexinc.com",
    jurisdiction: "State of Victoria",
    incorporationDate: "2024",
    status: "Active",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    companyName: "NETREX (Trade Name)",
    regNumber: "TN26206706",
    regType: "Trade Name Registration",
    address: "70 Burrard St, Vancouver, BC",
    email: "canada@netrexinc.com",
    jurisdiction: "Province of British Columbia",
    incorporationDate: "2024",
    status: "Active",
  },
  {
    country: "Pakistan",
    flag: "🇵🇰",
    companyName: "NETREX",
    regNumber: "Z-25-17178/25 (PSEB)",
    regType: "PSEB Registration",
    address: "21, J3 Block, Phase 2, Johar Town, Lahore",
    email: "pakistan@netrexinc.com",
    jurisdiction: "Punjab, Pakistan",
    incorporationDate: "2016",
    status: "Active",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    companyName: "Netrex UG",
    regNumber: "HRB 248731 B",
    regType: "Handelsregister (Commercial Register)",
    address: "Kurfürstendamm 14, 10719 Berlin",
    email: "germany@netrexinc.com",
    jurisdiction: "Amtsgericht Charlottenburg, Berlin",
    incorporationDate: "2024",
    status: "Active",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    companyName: "Netrex Pte. Ltd.",
    regNumber: "202418765K",
    regType: "ACRA Registration",
    address: "Level 39, Marina Bay Financial Centre, Tower 2",
    email: "singapore@netrexinc.com",
    jurisdiction: "Republic of Singapore",
    incorporationDate: "2024",
    status: "Active",
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    companyName: "Netrex Est.",
    regNumber: "4030512847",
    regType: "Commercial Registration (CR)",
    address: "22 King Abdullah Rd, Riyadh 12211",
    email: "ksa@netrexinc.com",
    jurisdiction: "Ministry of Commerce, KSA",
    incorporationDate: "2024",
    status: "Active",
  },
];

const legalHighlights = [
  { icon: Shield, title: "Fully Licensed", desc: "Registered and licensed to operate in all 9 countries with full legal compliance and local regulatory adherence." },
  { icon: Globe, title: "Global Presence", desc: "Legal entities structured to serve clients locally with international backing and cross-border capability." },
  { icon: Scale, title: "Regulatory Compliance", desc: "Adhering to local business laws, data protection regulations (GDPR, CCPA, PDPL), and international trade standards." },
  { icon: Lock, title: "Data Protection", desc: "Compliant with GDPR (EU), CCPA (USA), PDPA (Singapore), APPs (Australia), and PDPL (KSA) data privacy frameworks." },
  { icon: FileText, title: "Contractual Transparency", desc: "Clear service agreements, NDAs, and SLAs executed by the relevant local entity based on client jurisdiction." },
  { icon: Users, title: "Client Protection", desc: "All client data, intellectual property, and proprietary information are protected under multi-jurisdictional legal frameworks." },
];

const policiesIndex = [
  { icon: ScrollText, title: "Privacy Policy", desc: "How we collect, use, and safeguard personal data across all jurisdictions.", to: "/privacy" },
  { icon: FileText, title: "Terms of Service", desc: "The terms that govern use of our website, products, and client engagements.", to: "/terms" },
];

const dataFrameworks = [
  { label: "GDPR", full: "General Data Protection Regulation (EU/UK)" },
  { label: "CCPA", full: "California Consumer Privacy Act (USA)" },
  { label: "PDPA", full: "Personal Data Protection Act (Singapore)" },
  { label: "APPs", full: "Australian Privacy Principles (Australia)" },
  { label: "PDPL", full: "Personal Data Protection Law (Saudi Arabia)" },
  { label: "PECA", full: "Prevention of Electronic Crimes Act (Pakistan)" },
  { label: "BDSG", full: "Bundesdatenschutzgesetz (Germany)" },
  { label: "PIPEDA", full: "Personal Information Protection Act (Canada)" },
];

const serviceAgreements = [
  "Master Service Agreement (MSA)",
  "Non-Disclosure Agreement (NDA)",
  "Statement of Work (SOW)",
  "Service Level Agreement (SLA)",
  "Data Processing Agreement (DPA)",
  "Intellectual Property Assignment",
  "Change Request Procedures",
  "Payment Terms & Milestones",
];

const disputeSteps = [
  { title: "Direct Negotiation", desc: "Parties attempt to resolve the matter through direct communication within 15 business days." },
  { title: "Mediation", desc: "If unresolved, the dispute is referred to a neutral mediator agreed upon by both parties." },
  { title: "Arbitration", desc: "Final resolution through binding arbitration under the rules of the applicable jurisdiction." },
];

// Mask license number: show first 2 and last 1 digits, replace rest with asterisks
function maskRegNumber(num: string): string {
  const totalAlphaNum = num.replace(/[\s\-()/.]/g, "").length;
  let alphanumCount = 0;
  return num
    .split("")
    .map((char) => {
      if (/[\s\-()/.]/g.test(char)) return char;
      alphanumCount++;
      if (alphanumCount <= 2 || alphanumCount >= totalAlphaNum) return char;
      return "*";
    })
    .join("");
}

const Legal = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Legal & Company Registrations - NETREX Inc"
      description="NETREX Inc legal entities and registration details across the UAE, UK, USA, Australia, Germany, Singapore and Saudi Arabia, plus GDPR and CCPA compliance."
      canonical="https://netrex.lovable.app/legal"
    />
    <Header />
    <main>
      <PageHero
        badge="Legal Information"
        title="Our Legal"
        highlight="Standing"
        description="NETREX is a globally registered technology company with legal entities across 9 countries, ensuring compliance, transparency, and trust in every market we serve."
      />

      {/* Overview Cards */}
      <section className="py-16 md:py-20">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            {legalHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-secondary/50 p-6 transition-colors hover:border-primary/30"
              >
                <item.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-display text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Policies index */}
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-8 text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Policies Index
              </span>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Key <span className="text-primary">Documents</span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {policiesIndex.map((policy) => (
                <Link
                  key={policy.title}
                  to={policy.to}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                    <policy.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="font-display font-bold">{policy.title}</h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{policy.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Registration Table */}
          <motion.div {...fadeUp} className="mb-8 text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Global Entities
            </span>
            <h2 className="mb-3 font-display text-2xl font-bold md:text-3xl">
              Company <span className="text-primary">Registrations</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Each entity below is independently registered and operates under the legal framework of its
              respective jurisdiction.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {registrations.map((reg, i) => (
              <motion.div
                key={reg.country}
                {...fadeUp}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex flex-shrink-0 items-center gap-3 md:w-52">
                    <span className="text-3xl">{reg.flag}</span>
                    <div>
                      <div className="font-bold text-foreground">{reg.country}</div>
                      <div className="text-xs text-muted-foreground">{reg.email}</div>
                    </div>
                  </div>
                  <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <div className="mb-1 text-xs text-muted-foreground">Legal Entity</div>
                      <div className="text-sm font-semibold text-foreground">{reg.companyName}</div>
                    </div>
                    <div>
                      <div className="mb-1 text-xs text-muted-foreground">{reg.regType}</div>
                      <div className="font-mono text-sm font-semibold text-primary">{maskRegNumber(reg.regNumber)}</div>
                    </div>
                    <div>
                      <div className="mb-1 text-xs text-muted-foreground">Jurisdiction</div>
                      <div className="text-sm text-foreground">{reg.jurisdiction}</div>
                    </div>
                    <div>
                      <div className="mb-1 text-xs text-muted-foreground">Status</div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-primary" />
                        <span className="text-sm font-medium text-foreground">{reg.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 border-t border-border/50 pt-3 text-sm text-muted-foreground">
                  {reg.address} · Est. {reg.incorporationDate}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Intellectual Property */}
          <motion.div
            {...fadeUp}
            className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8"
          >
            <Briefcase className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-4 font-display text-xl font-bold">Intellectual Property & Trademarks</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                NETREX®, the NETREX logo, and associated brand elements are registered trademarks of{" "}
                <strong className="text-foreground">NETREX FZCO</strong>, registered in the United Arab Emirates
                under Dubai Airport Free Zone Authority (DAFZA). All intellectual property rights are reserved.
              </p>
              <p>
                The domain <strong className="text-foreground">netrexinc.com</strong> is the official global domain
                of the NETREX group of companies. Any unauthorized use of our trademarks, logos, or brand assets
                without prior written consent is strictly prohibited and may result in legal action.
              </p>
              <p>
                All software, designs, code, documentation, and creative works produced by NETREX for clients are
                subject to the terms of the applicable service agreement. Ownership transfer of deliverables occurs
                upon full payment unless otherwise specified in the contract.
              </p>
            </div>
          </motion.div>

          {/* Data Protection & Compliance */}
          <motion.div {...fadeUp} className="mt-8 rounded-2xl border border-border bg-secondary/50 p-8">
            <Lock className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-4 font-display text-xl font-bold">Data Protection & Privacy Compliance</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              NETREX is committed to protecting personal data in compliance with applicable international data
              protection laws, including but not limited to:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {dataFrameworks.map((item) => (
                <div key={item.label} className="flex items-start gap-2 rounded-xl border border-border/60 bg-card p-3">
                  <span className="mt-0.5 flex-shrink-0 rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                    {item.label}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.full}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              We implement industry-standard security measures including encryption at rest and in transit, regular
              security audits, access controls, and employee confidentiality agreements to protect client and user
              data across all jurisdictions.
            </p>
          </motion.div>

          {/* Service Agreements */}
          <motion.div {...fadeUp} className="mt-8 rounded-2xl border border-border bg-secondary/50 p-8">
            <FileText className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-4 font-display text-xl font-bold">Service Agreements & Contracts</h3>
            <p className="text-sm text-muted-foreground">
              All NETREX engagements are governed by formal service agreements that include:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {serviceAgreements.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Contracts are executed by the relevant local entity based on the client's jurisdiction. The governing
              law depends on the entity involved. Clients always receive clear, transparent documentation before any
              engagement begins.
            </p>
          </motion.div>

          {/* Dispute Resolution */}
          <motion.div {...fadeUp} className="mt-8 rounded-2xl border border-border bg-secondary/50 p-8">
            <AlertTriangle className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-6 font-display text-xl font-bold">Dispute Resolution</h3>
            <div className="grid gap-6 sm:grid-cols-3">
              {disputeSteps.map((step, i) => (
                <div key={step.title} className="relative rounded-xl border border-border/60 bg-card p-5">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <h4 className="mb-1 font-semibold text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              The governing law and arbitration venue depend on the contracting entity and the client's location as
              specified in the service agreement.
            </p>
          </motion.div>

          {/* Legal Disclaimer */}
          <motion.div {...fadeUp} className="mt-8 rounded-2xl border border-border bg-secondary/50 p-8">
            <Building2 className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-4 font-display text-xl font-bold">Legal Disclaimer</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Each NETREX entity operates independently under its respective country's legal framework and is
                subject to local laws and regulations. The information on this page is provided for transparency
                and informational purposes only and does not constitute legal advice.
              </p>
              <p>
                NETREX reserves the right to update its legal structure, registration details, and policies as
                necessary to comply with evolving regulations. All changes will be reflected on this page.
              </p>
              <p>
                For legal inquiries, subpoenas, or regulatory matters, please contact{" "}
                <a href="mailto:legal@netrexinc.com" className="text-primary hover:underline">
                  legal@netrexinc.com
                </a>{" "}
                or reach out to the respective country office listed above.
              </p>
              <p>
                For general business inquiries:{" "}
                <a href="mailto:info@netrexinc.com" className="text-primary hover:underline">
                  info@netrexinc.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Quick links CTA */}
          <motion.div
            {...fadeUp}
            className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:justify-between sm:text-left"
          >
            <div>
              <h3 className="font-display text-lg font-bold">Need our full Privacy Policy or Terms of Service?</h3>
              <p className="text-sm text-muted-foreground">Both documents are available in full detail.</p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap justify-center gap-3">
              <Link to="/privacy">
                <Button variant="outline">Privacy Policy</Button>
              </Link>
              <Link to="/terms">
                <Button variant="hero">Terms of Service</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Legal;
