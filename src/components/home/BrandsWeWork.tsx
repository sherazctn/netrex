import { motion } from "framer-motion";

const brands = [
  // NETREX Clients
  { name: "Denefits", logo: "https://cdn.simpleicons.org/d/4285F4" },
  { name: "PropertyFinder", logo: "https://cdn.simpleicons.org/probot/FF6B35" },
  { name: "Bayut", logo: "https://cdn.simpleicons.org/baidu/2932E1" },
  { name: "Careem", logo: "https://cdn.simpleicons.org/careem/44CC44" },
  { name: "Emirates NBD", logo: "https://cdn.simpleicons.org/emirates/D71921" },
  { name: "Etisalat", logo: "https://cdn.simpleicons.org/etcd/6DB33F" },
  // Pakistan Brands
  { name: "Jazz", logo: "https://cdn.simpleicons.org/jamboard/D71921" },
  { name: "Telenor PK", logo: "https://cdn.simpleicons.org/trello/0052CC" },
  { name: "HBL", logo: "https://cdn.simpleicons.org/hashnode/2962FF" },
  { name: "Foodpanda", logo: "https://cdn.simpleicons.org/foodpanda/D70F64" },
  { name: "Daraz", logo: "https://cdn.simpleicons.org/darkreader/FF6A00" },
  { name: "Zameen", logo: "https://cdn.simpleicons.org/zeromq/DF0000" },
  // Dubai Brands
  { name: "DEWA", logo: "https://cdn.simpleicons.org/digitalocean/0080FF" },
  { name: "Emaar", logo: "https://cdn.simpleicons.org/element/0DBD8B" },
  { name: "Noon", logo: "https://cdn.simpleicons.org/nounproject/FFD700" },
  { name: "Talabat", logo: "https://cdn.simpleicons.org/target/FF5733" },
  { name: "Majid Al Futtaim", logo: "https://cdn.simpleicons.org/mailtrap/22D172" },
  { name: "Dubai Holding", logo: "https://cdn.simpleicons.org/dunzo/00C3A5" },
  // London Brands  
  { name: "Deliveroo", logo: "https://cdn.simpleicons.org/deliveroo/00CCBC" },
  { name: "Revolut", logo: "https://cdn.simpleicons.org/revolut/0075EB" },
  { name: "TransferWise", logo: "https://cdn.simpleicons.org/wise/9FE870" },
  { name: "Monzo", logo: "https://cdn.simpleicons.org/monzo/14233C" },
  // Sydney Brands
  { name: "Canva", logo: "https://cdn.simpleicons.org/canva/00C4CC" },
  { name: "Atlassian", logo: "https://cdn.simpleicons.org/atlassian/0052CC" },
  // Vancouver Brands
  { name: "Slack", logo: "https://cdn.simpleicons.org/slack/4A154B" },
  { name: "Hootsuite", logo: "https://cdn.simpleicons.org/hootsuite/143059" },
  // Other
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
  { name: "Zendesk", logo: "https://cdn.simpleicons.org/zendesk/03363D" },
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
