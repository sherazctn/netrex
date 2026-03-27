import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto prose prose-lg">
          {[
            { title: "Acceptance of Terms", text: "By accessing and using netrexinc.com and the services provided by NETREX and its global entities (collectively \"NETREX\"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services." },
            { title: "About NETREX", text: "NETREX is a global technology company operating through registered entities in the UAE (NETREX FZCO), UK (NETREX LTD), USA (NETREX LLC), Australia (NETREX PTY LTD), Germany (Netrex UG), Singapore (Netrex Pte. Ltd.), Saudi Arabia (Netrex Est.), Canada, and Pakistan. Services are provided by the relevant local entity based on your jurisdiction." },
            { title: "Services", text: "NETREX provides web development, mobile app development, UI/UX design, digital marketing, branding, e-commerce solutions, AI & automation, and cloud solutions. Specific deliverables, timelines, and pricing are outlined in individual project proposals and service agreements." },
            { title: "Intellectual Property", text: "Upon full payment, clients receive ownership of custom work created specifically for their project, excluding any pre-existing NETREX frameworks, libraries, or tools used in development. NETREX retains the right to showcase completed work in our portfolio unless otherwise agreed in writing." },
            { title: "Payment Terms", text: "Payment terms are specified in individual project proposals. Standard terms require a 30-50% deposit before work begins, with remaining payments due upon milestone completion. All invoices are payable within 14 days of issuance unless otherwise agreed. Late payments may incur interest at the applicable legal rate." },
            { title: "Confidentiality", text: "Both parties agree to treat all confidential information, including project details, business strategies, proprietary data, and trade secrets, with strict confidentiality. Neither party shall disclose such information to third parties without prior written consent, except as required by law." },
            { title: "Warranties & Liability", text: "NETREX warrants that all work will be performed professionally and in accordance with agreed specifications. Our total liability for any claim arising from services is limited to the total fees paid for the specific service. NETREX is not liable for indirect, incidental, consequential, or punitive damages." },
            { title: "Termination", text: "Either party may terminate a project with 30 days written notice. The client shall pay for all work completed up to the date of termination. Any pre-paid amounts for undelivered work will be refunded proportionally, minus reasonable administrative costs." },
            { title: "Governing Law", text: "These terms are governed by the laws of the jurisdiction of the contracting NETREX entity. For UAE-based contracts, the laws of the Dubai International Financial Centre (DIFC) apply. Disputes shall first be attempted to be resolved through mediation before proceeding to arbitration or litigation." },
            { title: "Contact", text: "For questions about these terms, please contact info@netrexinc.com or reach out to your nearest NETREX office. Visit netrexinc.com/legal for full details of our legal entities and registration numbers." },
          ].map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <h2 className="font-display text-2xl font-bold mt-10 mb-4 text-foreground">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default TermsOfService;
