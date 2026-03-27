import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Shield, Building2, Globe, Scale } from "lucide-react";

const registrations = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    companyName: "NETREX LTD",
    regNumber: "15028357",
    regType: "Companies House Registration",
    address: "25 The Shard, 32 London Bridge St, London",
    email: "uk@netrexinc.com",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    companyName: "NETREX LLC",
    regNumber: "7305133",
    regType: "State Registration Number",
    address: "418 Broadway STE N, Albany, New York 12207",
    email: "usa@netrexinc.com",
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    companyName: "NETREX FZCO",
    regNumber: "05647",
    regType: "DAFZA License Number",
    address: "Office 523, Block-C, Building 9W, Dubai Airport Free Zone",
    email: "info@netrexinc.com",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    companyName: "NETREX PTY LTD",
    regNumber: "464 213 186",
    regType: "ABN (Australian Business Number)",
    address: "19 Bank Pl, Melbourne VIC 3000",
    email: "australia@netrexinc.com",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    companyName: "NETREX (Trade Name)",
    regNumber: "TN26206706",
    regType: "Trade Name Registration",
    address: "70 Burrard St, Vancouver, BC",
    email: "canada@netrexinc.com",
  },
  {
    country: "Pakistan",
    flag: "🇵🇰",
    companyName: "NETREX",
    regNumber: "Z-25-17178/25 (PSEB)",
    regType: "PSEB Registration",
    address: "21, J3 Block, Phase 2, Johar Town, Lahore",
    email: "pakistan@netrexinc.com",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    companyName: "Netrex UG",
    regNumber: "HRB 248731 B",
    regType: "Handelsregister (Commercial Register)",
    address: "Kurfürstendamm 14, 10719 Berlin",
    email: "germany@netrexinc.com",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    companyName: "Netrex Pte. Ltd.",
    regNumber: "202418765K",
    regType: "ACRA Registration",
    address: "Level 39, Marina Bay Financial Centre, Tower 2",
    email: "singapore@netrexinc.com",
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    companyName: "Netrex Est.",
    regNumber: "4030512847",
    regType: "Commercial Registration (CR)",
    address: "22 King Abdullah Rd, Riyadh 12211",
    email: "ksa@netrexinc.com",
  },
];

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
              ensuring compliance and trust in every market we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Shield, title: "Fully Licensed", desc: "Registered and licensed to operate in all 9 countries with full legal compliance." },
              { icon: Globe, title: "Global Presence", desc: "Legal entities structured to serve clients locally with international backing." },
              { icon: Scale, title: "Regulatory Compliance", desc: "Adhering to local business laws, data protection regulations, and trade standards." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-secondary/50 border border-border"
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
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
              Company <span className="text-primary">Registrations</span>
            </h2>
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
                  <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                    <span className="text-3xl">{reg.flag}</span>
                    <div>
                      <div className="font-bold text-foreground">{reg.country}</div>
                      <div className="text-xs text-muted-foreground">{reg.email}</div>
                    </div>
                  </div>
                  <div className="flex-1 grid sm:grid-cols-3 gap-3">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Legal Entity</div>
                      <div className="font-semibold text-sm text-foreground">{reg.companyName}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">{reg.regType}</div>
                      <div className="font-mono text-sm font-semibold text-primary">{reg.regNumber}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Address</div>
                      <div className="text-sm text-foreground">{reg.address}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legal Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-secondary/50 border border-border"
          >
            <Building2 className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display font-bold text-xl mb-4">Legal Disclaimer</h3>
            <div className="text-muted-foreground text-sm space-y-3">
              <p>
                Each NETREX entity operates independently under its respective country's legal framework and is 
                subject to local laws and regulations. Contracts and service agreements are executed by the 
                relevant local entity based on the client's jurisdiction.
              </p>
              <p>
                NETREX and the NETREX logo are trademarks of NETREX FZCO, registered in the United Arab Emirates. 
                All intellectual property rights are reserved. The domain <strong>netrexinc.com</strong> is the 
                official global domain of the NETREX group of companies.
              </p>
              <p>
                For legal inquiries, please contact <a href="mailto:info@netrexinc.com" className="text-primary hover:underline">info@netrexinc.com</a> or 
                reach out to the respective country office.
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
