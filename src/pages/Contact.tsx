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
  "url": "https://www.netrexinc.com",
  "logo": "https://www.netrexinc.com/favicon.ico",
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
      "telephone": "+971-50-200-8313",
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
      "telephone": "+44-7898-128743",
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
      "telephone": "+971-50-200-8313",
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
      "telephone": "+971-50-200-8313",
      "email": "ca@netrexinc.com",
      "openingHours": "Mo-Fr 09:00-17:00",
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
      "telephone": "+92-335-6769000",
      "email": "pk@netrexinc.com",
      "openingHours": "Mo-Fr 09:00-18:00",
    },
  ],
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact NETREX Inc | Get a Free Project Quote"
        description="Talk to NETREX Inc about web development, mobile apps, AI automation, branding and digital marketing. Dubai HQ with offices in New York, London, Berlin, Vancouver and Lahore, and partners in Australia, Singapore and Saudi Arabia."
        canonical="https://www.netrexinc.com/contact"
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
