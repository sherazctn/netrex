import { motion } from "framer-motion";

const brands = [
  // NETREX Clients
  { name: "Denefits", logo: "https://logo.clearbit.com/denefits.com" },
  { name: "PropertyFinder", logo: "https://logo.clearbit.com/propertyfinder.ae" },
  { name: "Bayut", logo: "https://logo.clearbit.com/bayut.com" },
  { name: "Careem", logo: "https://logo.clearbit.com/careem.com" },
  { name: "Emirates NBD", logo: "https://logo.clearbit.com/emiratesnbd.com" },
  { name: "Etisalat", logo: "https://logo.clearbit.com/etisalat.ae" },
  // Pakistan Brands
  { name: "Jazz", logo: "https://logo.clearbit.com/jazz.com.pk" },
  { name: "Telenor PK", logo: "https://logo.clearbit.com/telenor.com" },
  { name: "HBL", logo: "https://logo.clearbit.com/hbl.com" },
  { name: "Foodpanda", logo: "https://logo.clearbit.com/foodpanda.com" },
  { name: "Daraz", logo: "https://logo.clearbit.com/daraz.pk" },
  { name: "Zameen", logo: "https://logo.clearbit.com/zameen.com" },
  // Dubai Brands
  { name: "DEWA", logo: "https://logo.clearbit.com/dewa.gov.ae" },
  { name: "Emaar", logo: "https://logo.clearbit.com/emaar.com" },
  { name: "Noon", logo: "https://logo.clearbit.com/noon.com" },
  { name: "Talabat", logo: "https://logo.clearbit.com/talabat.com" },
  { name: "Majid Al Futtaim", logo: "https://logo.clearbit.com/majidalfuttaim.com" },
  { name: "Dubai Holding", logo: "https://logo.clearbit.com/dubaiholding.com" },
  // London Brands
  { name: "Deliveroo", logo: "https://logo.clearbit.com/deliveroo.co.uk" },
  { name: "Revolut", logo: "https://logo.clearbit.com/revolut.com" },
  { name: "Wise", logo: "https://logo.clearbit.com/wise.com" },
  { name: "Monzo", logo: "https://logo.clearbit.com/monzo.com" },
  // Sydney Brands
  { name: "Canva", logo: "https://logo.clearbit.com/canva.com" },
  { name: "Atlassian", logo: "https://logo.clearbit.com/atlassian.com" },
  // Vancouver Brands
  { name: "Slack", logo: "https://logo.clearbit.com/slack.com" },
  { name: "Hootsuite", logo: "https://logo.clearbit.com/hootsuite.com" },
  // Other
  { name: "Shopify", logo: "https://logo.clearbit.com/shopify.com" },
  { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "HubSpot", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "Zendesk", logo: "https://logo.clearbit.com/zendesk.com" },
];

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
                  src={brand.logo}
                  alt={brand.name}
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
