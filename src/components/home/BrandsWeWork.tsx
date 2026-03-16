import { motion } from "framer-motion";
import type { SyntheticEvent } from "react";

type Brand = {
  name: string;
  domain: string;
};

const brands: Brand[] = [
  { name: "Denefits", domain: "denefits.com" },
  { name: "PropertyFinder", domain: "propertyfinder.ae" },
  { name: "Bayut", domain: "bayut.com" },
  { name: "Careem", domain: "careem.com" },
  { name: "Emirates NBD", domain: "emiratesnbd.com" },
  { name: "Etisalat", domain: "etisalat.ae" },
  { name: "Jazz", domain: "jazz.com.pk" },
  { name: "Telenor PK", domain: "telenor.com.pk" },
  { name: "HBL", domain: "hbl.com" },
  { name: "Foodpanda", domain: "foodpanda.com" },
  { name: "Daraz", domain: "daraz.pk" },
  { name: "Zameen", domain: "zameen.com" },
  { name: "DEWA", domain: "dewa.gov.ae" },
  { name: "Emaar", domain: "emaar.com" },
  { name: "Noon", domain: "noon.com" },
  { name: "Talabat", domain: "talabat.com" },
  { name: "Majid Al Futtaim", domain: "majidalfuttaim.com" },
  { name: "Dubai Holding", domain: "dubaiholding.com" },
  { name: "Deliveroo", domain: "deliveroo.co.uk" },
  { name: "Revolut", domain: "revolut.com" },
  { name: "Wise", domain: "wise.com" },
  { name: "Monzo", domain: "monzo.com" },
  { name: "Canva", domain: "canva.com" },
  { name: "Atlassian", domain: "atlassian.com" },
  { name: "Slack", domain: "slack.com" },
  { name: "Hootsuite", domain: "hootsuite.com" },
  { name: "Shopify", domain: "shopify.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Zendesk", domain: "zendesk.com" },
];

const getPrimaryLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;
const getFallbackLogo = (domain: string) => `https://www.google.com/s2/favicons?sz=256&domain=${domain}`;

const handleLogoError = (event: SyntheticEvent<HTMLImageElement>) => {
  const image = event.currentTarget;
  const fallbackLogo = image.dataset.fallback;

  if (fallbackLogo && image.src !== fallbackLogo) {
    image.src = fallbackLogo;
    return;
  }

  image.src = "/placeholder.svg";
};

export function BrandsWeWork() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Clients
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Brands We <span className="text-primary">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading brands across the globe — from startups to enterprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 aspect-square"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mb-2 flex items-center justify-center">
                <img
                  src={getPrimaryLogo(brand.domain)}
                  data-fallback={getFallbackLogo(brand.domain)}
                  onError={handleLogoError}
                  alt={brand.name}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] md:text-xs font-medium text-muted-foreground text-center leading-tight">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

