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
            <p className="text-lg text-muted-foreground">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto prose prose-lg">
          {[
            { title: "Acceptance of Terms", text: "By accessing and using our website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services." },
            { title: "Services", text: "NETREX provides web development, mobile app development, UI/UX design, digital marketing, branding, and related technology services. Specific deliverables and timelines are outlined in individual project agreements." },
            { title: "Intellectual Property", text: "Upon full payment, clients receive ownership of custom work created specifically for their project. NETREX retains the right to showcase completed work in our portfolio unless otherwise agreed." },
            { title: "Payment Terms", text: "Payment terms are specified in individual project proposals. Standard terms require a deposit before work begins, with remaining payments due upon milestone completion." },
            { title: "Confidentiality", text: "We treat all client information as confidential. We will not disclose project details, business strategies, or proprietary information to third parties without written consent." },
            { title: "Limitation of Liability", text: "NETREX's liability is limited to the total amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages." },
            { title: "Termination", text: "Either party may terminate a project with 30 days written notice. Payment for completed work is due upon termination." },
            { title: "Contact", text: "For questions about these terms, please contact netrexdubai@gmail.com." },
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
