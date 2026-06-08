import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WorldMapContact } from "@/components/home/WorldMapContact";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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
        "streetAddress": "32 London Bridge St",
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
        "streetAddress": "Kurfürstendamm 14",
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
        "streetAddress": "19 Bank Pl",
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
        "streetAddress": "22 King Abdullah Rd",
        "addressLocality": "Riyadh",
        "addressCountry": "SA",
      },
      "telephone": "+966-11-234-5678",
      "email": "sa@netrexinc.com",
      "openingHours": "Su-Th 09:00-18:00",
    },
  ],
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact - NETREX Inc | Get a Quote</title>
        <meta name="description" content="Contact NETREX Inc for web development, mobile apps, AI automation, branding, and digital marketing. Offices in Dubai, New York, London, Berlin, Vancouver, Melbourne, Singapore, Riyadh & Lahore." />
        <link rel="canonical" href="https://netrex.lovable.app/contact" />
        <meta property="og:title" content="Contact - NETREX Inc | Get a Quote" />
        <meta property="og:description" content="Get in touch with NETREX Inc. Offices in 9 countries. Free consultation for web, mobile, AI & digital marketing projects." />
        <meta property="og:url" content="https://netrex.lovable.app/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Helmet>
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
