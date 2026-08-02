import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WorldMapContact } from "@/components/home/WorldMapContact";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NETREX INC",
  "url": "https://netrex.lovable.app",
  "logo": "https://netrex.lovable.app/favicon.ico",
  "email": "info@netrexinc.com",
  "telephone": "+971-50-200-8313",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office 523, Block-C, Building 9W, Dubai Airport Free Zone",
    "addressLocality": "Dubai",
    "addressCountry": "AE",
  },
  "department": [
    {
      "@type": "LocalBusiness",
      "name": "NETREX INC - Dubai HQ",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 523, Block-C, Building 9W, Dubai Airport Free Zone",
        "addressLocality": "Dubai",
        "addressCountry": "AE",
      },
      "telephone": "+971-50-200-8313",
      "email": "info@netrexinc.com",
      "openingHours": "Su-Th 09:00-18:00",
    },
    {
      "@type": "LocalBusiness",
      "name": "NETREX INC - New York",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "418 Broadway STE N",
        "addressLocality": "Albany",
        "addressRegion": "NY",
        "addressCountry": "US",
      },
      "telephone": "+1-518-555-0123",
      "email": "usa@netrexinc.com",
      "openingHours": "Mo-Fr 09:00-17:00",
    },
    {
      "@type": "LocalBusiness",
      "name": "NETREX INC - London",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "25 The Shard, 32 London Bridge St",
        "addressLocality": "London",
        "addressCountry": "GB",
      },
      "telephone": "+44-20-7946-0958",
      "email": "uk@netrexinc.com",
      "openingHours": "Mo-Fr 09:00-17:00",
    },
    {
      "@type": "LocalBusiness",
      "name": "NETREX INC - Berlin",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kurfürstendamm 14, 10719 Berlin",
        "addressLocality": "Berlin",
        "addressCountry": "DE",
      },
      "telephone": "+49-30-1234-5678",
      "email": "de@netrexinc.com",
      "openingHours": "Mo-Fr 09:00-17:00",
    },
    {
      "@type": "LocalBusiness",
      "name": "NETREX INC - Vancouver",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "70 Burrard St",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "CA",
      },
      "telephone": "+1-604-555-0189",
      "email": "ca@netrexinc.com",
      "openingHours": "Mo-Fr 09:00-17:00",
    },
    {
      "@type": "LocalBusiness",
      "name": "NETREX INC - Melbourne",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "19 Bank Pl, Melbourne VIC 3000",
        "addressLocality": "Melbourne",
        "addressCountry": "AU",
      },
      "telephone": "+61-3-9000-0000",
      "email": "au@netrexinc.com",
      "openingHours": "Mo-Fr 09:00-17:00",
    },
    {
      "@type": "LocalBusiness",
      "name": "NETREX INC - Singapore",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Level 39, Marina Bay Financial Centre, Tower 2",
        "addressLocality": "Singapore",
        "addressCountry": "SG",
      },
      "telephone": "+65-6123-4567",
      "email": "sg@netrexinc.com",
      "openingHours": "Mo-Fr 09:00-18:00",
    },
    {
      "@type": "LocalBusiness",
      "name": "NETREX INC - Riyadh",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22 King Abdullah Rd, Riyadh 12211",
        "addressLocality": "Riyadh",
        "addressCountry": "SA",
      },
      "telephone": "+966-11-234-5678",
      "email": "sa@netrexinc.com",
      "openingHours": "Su-Th 09:00-18:00",
    },
    {
      "@type": "LocalBusiness",
      "name": "NETREX INC - Lahore",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "21, J3 Block, Phase 2, Johar Town",
        "addressLocality": "Lahore",
        "addressCountry": "PK",
      },
      "telephone": "+92-42-3000-0000",
      "email": "pk@netrexinc.com",
      "openingHours": "Mo-Fr 09:00-18:00",
    },
  ],
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact NETREX Inc | Free Quote in 9 Countries"
        description="Talk to NETREX Inc about web development, mobile apps, AI automation, branding and digital marketing. Offices in Dubai, New York, London, Berlin, Vancouver, Melbourne, Singapore, Riyadh and Lahore."
        canonical="https://netrex.lovable.app/contact"
        schema={contactSchema}
      />

      <Header />
      <main>
        {/* Hero Section */}
        <PageHero
          badge="Contact Us"
          title="Let's Start Your"
          highlight="Project"
          description="Ready to transform your digital presence? Get in touch with our team and let's discuss how we can help you achieve your goals."
        />


        <WorldMapContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
