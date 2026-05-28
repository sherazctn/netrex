import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { IndustriesCarousel } from "@/components/home/IndustriesCarousel";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyNetrex } from "@/components/home/WhyNetrex";
import { WorldMapContact } from "@/components/home/WorldMapContact";
import { SEO } from "@/components/SEO";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="NETREX Inc — Premier Digital Marketing & Web Development Agency"
        description="Global digital agency for web development, mobile apps, AI automation, branding, e-commerce, SEO & GEO. Serving UAE, US, UK, Canada, Australia, Germany, Saudi Arabia, Singapore & Pakistan since 2016."
        canonical="https://netrex.lovable.app/"
      />
      <Header />
      <main>
        <Hero />
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
