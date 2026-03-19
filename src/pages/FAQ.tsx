import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What services does NETREX offer?", a: "We offer web development, mobile app development, UI/UX design, digital marketing, branding, e-commerce solutions, AI & automation, and cloud solutions. Our team of 50+ experts works across all major technologies." },
  { q: "How much does a typical project cost?", a: "Project costs vary based on scope, complexity, and timeline. A simple website starts from $2,000 while complex web applications can range from $10,000-$50,000+. We provide free consultations and detailed quotes." },
  { q: "How long does a project take?", a: "A standard website takes 2-4 weeks, a complex web application 6-12 weeks, and a mobile app 8-16 weeks. We always provide realistic timelines during the proposal stage." },
  { q: "Do you offer ongoing support?", a: "Yes! We offer maintenance and support packages including bug fixes, security updates, performance monitoring, content updates, and feature enhancements." },
  { q: "Which technologies do you work with?", a: "We work with React, Next.js, Vue, Angular, Node.js, Laravel, WordPress, Wix, Shopify, Flutter, React Native, AWS, Google Cloud, and more." },
  { q: "Do you work with international clients?", a: "Absolutely! We have offices in Dubai, New York, London, Vancouver, Brisbane, and Lahore. We work with clients across 20+ countries in all time zones." },
  { q: "What is your development process?", a: "Our process follows: Discovery → Design → Development → Testing → Launch → Support. We use agile methodology with regular updates and client reviews at every stage." },
  { q: "Can I see examples of your work?", a: "Yes! Visit our Portfolio page to browse 30+ completed projects across various industries including real estate, fintech, healthcare, e-commerce, and more." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container-wide text-center max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">FAQ</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="text-lg text-muted-foreground">Everything you need to know about working with NETREX.</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display font-bold text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQ;
