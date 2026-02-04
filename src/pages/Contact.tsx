import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WorldMapContact } from "@/components/home/WorldMapContact";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Start Your{" "}
                <span className="text-primary">Project</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your digital presence? Get in touch with our 
                team and let's discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        <WorldMapContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
