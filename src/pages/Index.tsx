import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Industries } from "@/components/home/Industries";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyNetrex } from "@/components/home/WhyNetrex";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { ContactCTA } from "@/components/home/ContactCTA";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Portfolio />
        <WhyNetrex />
        <GlobalPresence />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
