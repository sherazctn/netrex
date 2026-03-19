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
            <p className="text-lg text-muted-foreground">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto prose prose-lg">
          {[
            { title: "Information We Collect", text: "We collect information you provide directly, such as your name, email, phone number, and company name when you fill out our contact form. We also automatically collect usage data including IP address, browser type, and pages visited." },
            { title: "How We Use Your Information", text: "We use your information to respond to inquiries, provide our services, send project updates, improve our website, and comply with legal obligations. We never sell your personal data to third parties." },
            { title: "Data Security", text: "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information." },
            { title: "Cookies", text: "Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings." },
            { title: "Third-Party Services", text: "We use trusted third-party services like Google Analytics and Google Maps. These services may collect data according to their own privacy policies." },
            { title: "Your Rights", text: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time by contacting us." },
            { title: "Contact Us", text: "If you have questions about this privacy policy, please contact us at netrexdubai@gmail.com or call +971 50 200 8313." },
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
