import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { IndustriesCarousel } from "@/components/home/IndustriesCarousel";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyNetrex } from "@/components/home/WhyNetrex";
import { WorldMapContact } from "@/components/home/WorldMapContact";
import { ClientLogos } from "@/components/home/ClientLogos";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <IndustriesCarousel />
        <Portfolio />
        <WhyNetrex />
        <WorldMapContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
