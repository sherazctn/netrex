import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto prose prose-lg">
          {[
            { title: "Introduction", text: "NETREX INC (\"we\", \"us\", \"our\") operates through its global entities including NETREX FZCO (UAE), NETREX LTD (UK), NETREX LLC (USA), NETREX PTY LTD (Australia), Netrex UG (Germany), Netrex Pte. Ltd. (Singapore), and Netrex Est. (Saudi Arabia). This Privacy Policy explains how we collect, use, and protect your personal information when you visit netrexinc.com or use our services." },
            { title: "Information We Collect", text: "We collect information you provide directly, such as your name, email address, phone number, company name, and project details when you fill out our contact form or request a consultation. We also automatically collect usage data including IP address, browser type, device information, pages visited, and referral source through analytics tools." },
            { title: "How We Use Your Information", text: "We use your information to: respond to inquiries and provide our services; send project updates and communications; improve our website and user experience; analyze traffic and optimize marketing efforts; comply with legal obligations across all jurisdictions we operate in. We never sell your personal data to third parties." },
            { title: "Data Security", text: "We implement industry-standard security measures including SSL/TLS encryption, secure cloud infrastructure, access controls, and regular security audits to protect your personal information. Our data handling practices comply with GDPR (EU/UK), CCPA (USA), APP (Australia), and PDPA (Singapore) requirements." },
            { title: "Cookies & Tracking", text: "Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand visitor behavior. We use Google Analytics for traffic analysis. You can control cookie preferences through your browser settings. Essential cookies required for site functionality cannot be disabled." },
            { title: "Third-Party Services", text: "We use trusted third-party services including Google Analytics, Google Maps, and cloud hosting providers. These services may collect data according to their own privacy policies. We ensure all third-party processors maintain adequate data protection standards." },
            { title: "International Data Transfers", text: "As a global company operating in 9 countries, your data may be transferred between our offices. We ensure all transfers comply with applicable data protection laws and implement appropriate safeguards including standard contractual clauses where required." },
            { title: "Your Rights", text: "Depending on your jurisdiction, you have the right to: access, correct, or delete your personal data; object to or restrict processing; data portability; withdraw consent at any time; lodge a complaint with your local data protection authority. To exercise any of these rights, contact us at info@netrexinc.com." },
            { title: "Data Retention", text: "We retain personal data only as long as necessary for the purposes outlined in this policy, or as required by law. Contact form submissions are retained for up to 24 months. Client project data is retained for the duration of the business relationship plus any legally required retention period." },
            { title: "Contact Us", text: "If you have questions about this privacy policy or our data practices, please contact our Data Protection team at info@netrexinc.com or write to: NETREX FZCO, Office 523, Block-C, Building 9W, Dubai Airport Free Zone, UAE." },
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

export default PrivacyPolicy;
