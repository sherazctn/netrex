import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Shield, Building2, Globe, Scale, FileText, Users, Lock, Briefcase, CheckCircle, AlertTriangle } from "lucide-react";

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
    status: "Active — Principal Entity",
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

// Mask license number: show first 2 and last 1 digits, replace rest with asterisks
function maskRegNumber(num: string): string {
  const clean = num.replace(/[\s\-()]/g, '');
  if (clean.length <= 3) return num;
  // Keep first 2 chars and last 1 char, mask the rest
  const parts = num.split('');
  let visibleStart = 0;
  let visibleEnd = 0;
  let startCount = 0;
  let endCount = 0;
  const masked = parts.map((char, i) => {
    if (/[\s\-()/]/.test(char)) return char; // keep separators
    startCount++;
    return char;
  });
  // Simpler approach: work with the raw string
  let alphanumCount = 0;
  const totalAlphaNum = num.replace(/[\s\-()/.]/g, '').length;
  return num.split('').map((char) => {
    if (/[\s\-()/.]/g.test(char)) return char;
    alphanumCount++;
    if (alphanumCount <= 2 || alphanumCount >= totalAlphaNum) return char;
    return '*';
  }).join('');
}

const Legal = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Legal Information
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Legal <span className="text-primary">Standing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              NETREX is a globally registered technology company with legal entities across 9 countries, 
              ensuring compliance, transparency, and trust in every market we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="section-padding">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {legalHighlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Registration Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-center">
              Company <span className="text-primary">Registrations</span>
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Each entity below is independently registered and operates under the legal framework of its respective jurisdiction.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {registrations.map((reg, i) => (
              <motion.div
                key={reg.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 md:w-52 flex-shrink-0">
                    <span className="text-3xl">{reg.flag}</span>
                    <div>
                      <div className="font-bold text-foreground">{reg.country}</div>
                      <div className="text-xs text-muted-foreground">{reg.email}</div>
                    </div>
                  </div>
                  <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Legal Entity</div>
                      <div className="font-semibold text-sm text-foreground">{reg.companyName}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">{reg.regType}</div>
                      <div className="font-mono text-sm font-semibold text-primary">{maskRegNumber(reg.regNumber)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Jurisdiction</div>
                      <div className="text-sm text-foreground">{reg.jurisdiction}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Status</div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                        <span className="text-sm font-medium text-green-600">{reg.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border/50 text-sm text-muted-foreground">
                  📍 {reg.address} · Est. {reg.incorporationDate}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20"
          >
            <Briefcase className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-bold text-xl mb-4">Intellectual Property & Trademarks</h3>
            <div className="text-muted-foreground text-sm space-y-3">
              <p>
                NETREX®, the NETREX logo, and associated brand elements are registered trademarks of 
                <strong className="text-foreground"> NETREX FZCO</strong>, registered in the United Arab Emirates 
                under Dubai Airport Free Zone Authority (DAFZA). All intellectual property rights are reserved.
              </p>
              <p>
                The domain <strong className="text-foreground">netrexinc.com</strong> is the official global domain 
                of the NETREX group of companies. Any unauthorized use of our trademarks, logos, or brand assets 
                without prior written consent is strictly prohibited and may result in legal action.
              </p>
              <p>
                All software, designs, code, documentation, and creative works produced by NETREX for clients 
                are subject to the terms of the applicable service agreement. Ownership transfer of deliverables 
                occurs upon full payment unless otherwise specified in the contract.
              </p>
            </div>
          </motion.div>

          {/* Data Protection & Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-8 rounded-2xl bg-secondary/50 border border-border"
          >
            <Lock className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-bold text-xl mb-4">Data Protection & Privacy Compliance</h3>
            <div className="text-muted-foreground text-sm space-y-3">
              <p>
                NETREX is committed to protecting personal data in compliance with applicable international data 
                protection laws, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-foreground">GDPR</strong> — General Data Protection Regulation (EU/UK)</li>
                <li><strong className="text-foreground">CCPA</strong> — California Consumer Privacy Act (USA)</li>
                <li><strong className="text-foreground">PDPA</strong> — Personal Data Protection Act (Singapore)</li>
                <li><strong className="text-foreground">APPs</strong> — Australian Privacy Principles (Australia)</li>
                <li><strong className="text-foreground">PDPL</strong> — Personal Data Protection Law (Saudi Arabia)</li>
                <li><strong className="text-foreground">PECA</strong> — Prevention of Electronic Crimes Act (Pakistan)</li>
                <li><strong className="text-foreground">BDSG</strong> — Bundesdatenschutzgesetz (Germany)</li>
                <li><strong className="text-foreground">PIPEDA</strong> — Personal Information Protection Act (Canada)</li>
              </ul>
              <p>
                We implement industry-standard security measures including encryption at rest and in transit, 
                regular security audits, access controls, and employee confidentiality agreements to protect 
                client and user data across all jurisdictions.
              </p>
            </div>
          </motion.div>

          {/* Service Agreements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-8 rounded-2xl bg-secondary/50 border border-border"
          >
            <FileText className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-bold text-xl mb-4">Service Agreements & Contracts</h3>
            <div className="text-muted-foreground text-sm space-y-3">
              <p>
                All NETREX engagements are governed by formal service agreements that include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Master Service Agreement (MSA)",
                  "Non-Disclosure Agreement (NDA)",
                  "Statement of Work (SOW)",
                  "Service Level Agreement (SLA)",
                  "Data Processing Agreement (DPA)",
                  "Intellectual Property Assignment",
                  "Change Request Procedures",
                  "Payment Terms & Milestones",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                Contracts are executed by the relevant local entity based on the client's jurisdiction. 
                The governing law depends on the entity involved. Clients always receive clear, transparent 
                documentation before any engagement begins.
              </p>
            </div>
          </motion.div>

          {/* Dispute Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-8 rounded-2xl bg-secondary/50 border border-border"
          >
            <AlertTriangle className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-bold text-xl mb-4">Dispute Resolution</h3>
            <div className="text-muted-foreground text-sm space-y-3">
              <p>
                In the event of a dispute, NETREX follows a structured resolution process:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li><strong className="text-foreground">Direct Negotiation</strong> — Parties attempt to resolve the matter through direct communication within 15 business days.</li>
                <li><strong className="text-foreground">Mediation</strong> — If unresolved, the dispute is referred to a neutral mediator agreed upon by both parties.</li>
                <li><strong className="text-foreground">Arbitration</strong> — Final resolution through binding arbitration under the rules of the applicable jurisdiction.</li>
              </ol>
              <p>
                The governing law and arbitration venue depend on the contracting entity and the client's location 
                as specified in the service agreement.
              </p>
            </div>
          </motion.div>

          {/* Legal Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-8 rounded-2xl bg-secondary/50 border border-border"
          >
            <Building2 className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-bold text-xl mb-4">Legal Disclaimer</h3>
            <div className="text-muted-foreground text-sm space-y-3">
              <p>
                Each NETREX entity operates independently under its respective country's legal framework and is 
                subject to local laws and regulations. The information on this page is provided for transparency 
                and informational purposes only and does not constitute legal advice.
              </p>
              <p>
                NETREX reserves the right to update its legal structure, registration details, and policies 
                as necessary to comply with evolving regulations. All changes will be reflected on this page.
              </p>
              <p>
                For legal inquiries, subpoenas, or regulatory matters, please contact{" "}
                <a href="mailto:legal@netrexinc.com" className="text-primary hover:underline">legal@netrexinc.com</a> or 
                reach out to the respective country office listed above.
              </p>
              <p>
                For general business inquiries:{" "}
                <a href="mailto:info@netrexinc.com" className="text-primary hover:underline">info@netrexinc.com</a>
              </p>
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
