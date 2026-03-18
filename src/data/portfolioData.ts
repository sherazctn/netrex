export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  technology: string;
  image: string;
  description: string;
  result: string;
  resultValue?: { value: number; suffix: string; label: string };
  industry: string;
}

export const portfolioCategories = ["All", "Web", "E-Commerce", "Branding", "Marketing"];
export const portfolioTechnologies = ["All", "React", "WordPress", "Wix", "Shopify", "Laravel", "Elementor"];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Emaar Serro 2",
    category: "Web",
    technology: "React",
    image: "/portfolio/emaar-serro2.png",
    description: "Premium real estate landing page for Emaar's Serro 2 villas in Dubai with interactive floor plans and payment calculator",
    result: "200% increase in leads",
    resultValue: { value: 200, suffix: "%", label: "Lead Increase" },
    industry: "Real Estate"
  },
  {
    id: 2,
    title: "UP Business Dubai",
    category: "Web",
    technology: "React",
    image: "/portfolio/up-business.png",
    description: "Global crypto payment infrastructure for businesses with multi-currency support and instant settlements",
    result: "1300+ merchants onboarded",
    resultValue: { value: 1300, suffix: "+", label: "Merchants" },
    industry: "FinTech"
  },
  {
    id: 3,
    title: "NEO Experts International",
    category: "Web",
    technology: "WordPress",
    image: "/portfolio/neo-experts.webp",
    description: "Recruitment platform connecting talent with businesses in Construction, Engineering, IT & Life Sciences across DACH region",
    result: "800+ placements",
    resultValue: { value: 800, suffix: "+", label: "Placements" },
    industry: "Recruitment"
  },
  {
    id: 4,
    title: "Surfside Concierge",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/surfside-concierge.png",
    description: "Cape Cod vacation concierge offering pre-arrival decorating, fridge stocking, and itinerary planning services",
    result: "10+ years of service",
    resultValue: { value: 10, suffix: "+", label: "Years Experience" },
    industry: "Hospitality"
  },
  {
    id: 5,
    title: "FurniAssemble",
    category: "E-Commerce",
    technology: "Wix",
    image: "/portfolio/furniassemble.png",
    description: "Professional furniture assembly and installation service with online booking, pricing, and customer reviews",
    result: "150% booking growth",
    resultValue: { value: 150, suffix: "%", label: "Booking Growth" },
    industry: "Home Services"
  },
  {
    id: 6,
    title: "Quality Process Automation",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/quality-process.png",
    description: "CMM & Vision System programming services for DFW manufacturers with on-site metrology support",
    result: "99% accuracy rate",
    resultValue: { value: 99, suffix: "%", label: "Accuracy Rate" },
    industry: "Manufacturing"
  },
  {
    id: 7,
    title: "Latvia Rent",
    category: "Web",
    technology: "React",
    image: "/portfolio/latvia-rent.png",
    description: "Car rental platform in Latvia with real-time pricing calculator, fleet showcase, and transparent pricing tiers",
    result: "300% online bookings",
    resultValue: { value: 300, suffix: "%", label: "Online Bookings" },
    industry: "Automotive"
  },
  {
    id: 8,
    title: "Trinity College Music Society",
    category: "Web",
    technology: "React",
    image: "/portfolio/trinity-music.png",
    description: "Community music society website with event listings, membership registration, and photo gallery",
    result: "500+ active members",
    resultValue: { value: 500, suffix: "+", label: "Active Members" },
    industry: "Education"
  },
  {
    id: 9,
    title: "Tojah's Extensions",
    category: "Branding",
    technology: "Wix",
    image: "/portfolio/tojah-extensions.png",
    description: "Hair salon website with service pricing, online booking, portfolio gallery, and loyalty program",
    result: "40% new client growth",
    resultValue: { value: 40, suffix: "%", label: "Client Growth" },
    industry: "Beauty"
  },
  {
    id: 10,
    title: "Ava Harwood",
    category: "E-Commerce",
    technology: "Wix",
    image: "/portfolio/ava-harwood.png",
    description: "Bridal gown collection e-commerce with elegant product showcases, seasonal highlights, and online shop",
    result: "120% sales increase",
    resultValue: { value: 120, suffix: "%", label: "Sales Increase" },
    industry: "Fashion"
  },
  {
    id: 11,
    title: "Wonder Kids Playland",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/wonder-kids.png",
    description: "Indoor play center website for children ages 1-7 with event booking, party packages, and admission pricing",
    result: "1000+ happy kids",
    resultValue: { value: 1000, suffix: "+", label: "Happy Kids" },
    industry: "Entertainment"
  },
  {
    id: 12,
    title: "Beyond the Binder",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/beyond-the-binder.png",
    description: "Early childhood education leadership platform with CDA courses, consulting services, and professional workshops",
    result: "500+ educators trained",
    resultValue: { value: 500, suffix: "+", label: "Educators Trained" },
    industry: "Education"
  },
  {
    id: 13,
    title: "FarmerMind AI",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/farmermind-ai.png",
    description: "AI-powered agriculture platform with crop diagnosis, precision recommendations, and offline-first farmer tools",
    result: "5000+ farmers reached",
    resultValue: { value: 5000, suffix: "+", label: "Farmers Reached" },
    industry: "AgriTech"
  },
  {
    id: 14,
    title: "West Lothian Keys",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/west-lothian-keys.png",
    description: "Professional auto locksmith service covering Edinburgh & Scotland with 24/7 emergency call-outs and online booking",
    result: "4.8 star rating",
    resultValue: { value: 48, suffix: "★", label: "Customer Rating" },
    industry: "Automotive Services"
  },
  {
    id: 15,
    title: "Janet McLoughlin",
    category: "Web",
    technology: "React",
    image: "/portfolio/janet-mcloughlin.png",
    description: "IMPACT Mindset Coach & NSCA Certified Strength Coach with personal branding, services, and client testimonials",
    result: "500+ lives transformed",
    resultValue: { value: 500, suffix: "+", label: "Lives Transformed" },
    industry: "Health & Fitness"
  },
  {
    id: 16,
    title: "Bee Defined Consulting",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/bee-defined.png",
    description: "Career and business consulting firm with coaching services, business advisory, and speaking workshops",
    result: "100+ clients served",
    resultValue: { value: 100, suffix: "+", label: "Clients Served" },
    industry: "Consulting"
  },
  {
    id: 17,
    title: "Iron Wolf Academy",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/iron-wolf.png",
    description: "Martial arts academy with Tang Soo Do, Brazilian Jiu Jitsu training programs, schedule, and membership",
    result: "200+ active students",
    resultValue: { value: 200, suffix: "+", label: "Active Students" },
    industry: "Sports & Fitness"
  },
  {
    id: 18,
    title: "WrenchAI",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/wrench-ai.png",
    description: "AI-powered property diagnostics platform with predictive maintenance, repair guidance, and automated issue detection",
    result: "60% cost reduction",
    resultValue: { value: 60, suffix: "%", label: "Cost Reduction" },
    industry: "PropTech"
  },
  {
    id: 19,
    title: "Wellbeing Hacks",
    category: "E-Commerce",
    technology: "Wix",
    image: "/portfolio/wellbeing-hacks.png",
    description: "Children's wellbeing book series and resources helping kids manage big feelings with practical emotional tools",
    result: "10K+ books sold",
    resultValue: { value: 10000, suffix: "+", label: "Books Sold" },
    industry: "Publishing"
  },
  {
    id: 20,
    title: "Elyos Wellness",
    category: "E-Commerce",
    technology: "Wix",
    image: "/portfolio/elyos-wellness.png",
    description: "Greek mythology-inspired wellness brand selling Liposomal NAD+ supplements with modern science-backed formulas",
    result: "250% revenue growth",
    resultValue: { value: 250, suffix: "%", label: "Revenue Growth" },
    industry: "Health & Wellness"
  },
  {
    id: 21,
    title: "Pet Glam Shops",
    category: "E-Commerce",
    technology: "Wix",
    image: "/portfolio/pet-glam-shops.png",
    description: "Trendy pet fashion e-commerce with clothing, accessories, and seasonal collections for dogs, cats, and birds",
    result: "15K+ orders shipped",
    resultValue: { value: 15000, suffix: "+", label: "Orders Shipped" },
    industry: "Pet & Fashion"
  },
  {
    id: 22,
    title: "INSIRAS GmbH",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/insiras-gmbh.png",
    description: "German accounting & payroll outsourcing firm with secretarial services, management consulting, and client portal",
    result: "300+ clients across Europe",
    resultValue: { value: 300, suffix: "+", label: "Clients" },
    industry: "Finance & Accounting"
  },
  {
    id: 23,
    title: "Top Canine Training",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/dog-training.png",
    description: "Professional dog training services with puppy programs, private sessions, virtual consults, and specialty courses",
    result: "500+ dogs trained",
    resultValue: { value: 500, suffix: "+", label: "Dogs Trained" },
    industry: "Pet Services"
  },
  {
    id: 24,
    title: "Sociable Marketing",
    category: "Marketing",
    technology: "Elementor",
    image: "/portfolio/sociable-marketing.png",
    description: "Social media marketing agency website with service packages, pricing plans, and client case studies",
    result: "32K+ campaigns launched",
    resultValue: { value: 32000, suffix: "+", label: "Campaigns" },
    industry: "Digital Marketing"
  },
  {
    id: 25,
    title: "Instive Insurance",
    category: "Web",
    technology: "WordPress",
    image: "/portfolio/instive-insurance.png",
    description: "Insurance company website with car, life, home, and health insurance plans, agent finder, and quote calculator",
    result: "400+ policies sold monthly",
    resultValue: { value: 400, suffix: "+", label: "Monthly Policies" },
    industry: "Insurance"
  },
  {
    id: 26,
    title: "Grantx Inc.",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/grantx-inc.png",
    description: "Non-profit grant writing and organizational development firm with consulting, training workshops, and success stories",
    result: "2K+ people helped",
    resultValue: { value: 2000, suffix: "+", label: "People Helped" },
    industry: "Non-Profit"
  }
];
