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

export const portfolioCategories = ["All", "Web", "E-Commerce", "Mobile App", "Branding", "Marketing"];
export const portfolioTechnologies = ["All", "React", "WordPress", "Wix", "Shopify", "Laravel", "Elementor", "Flutter", "React Native", "Swift", "Kotlin", "Adobe Photoshop", "Adobe Illustrator"];

// Map service slugs to relevant portfolio categories/industries
export const servicePortfolioMap: Record<string, { categories: string[]; industries: string[] }> = {
  "web-development": { categories: ["Web"], industries: [] },
  "mobile-app": { categories: ["Mobile App"], industries: [] },
  "ui-ux-design": { categories: ["Web", "Mobile App"], industries: [] },
  "digital-marketing": { categories: ["Marketing"], industries: ["Digital Marketing"] },
  "branding": { categories: ["Branding"], industries: ["Branding", "Logo Design"] },
  "ecommerce": { categories: ["E-Commerce"], industries: [] },
  "ai-automation": { categories: ["Web"], industries: ["AgriTech", "PropTech", "HR Tech", "IT Consulting"] },
  "geo": { categories: ["Web", "Marketing"], industries: ["Digital Marketing"] },
  "cloud-solutions": { categories: ["Web"], industries: ["FinTech", "IT Consulting", "HR Tech"] },
};

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
  },
  {
    id: 27,
    title: "CallZen BPO",
    category: "Web",
    technology: "Laravel",
    image: "/portfolio/callzen-bpo.png",
    description: "Call center and BPO services platform with pricing plans, client feedback, and 24/7 customer support solutions",
    result: "24K+ calls handled",
    resultValue: { value: 24000, suffix: "+", label: "Calls Handled" },
    industry: "Customer Service"
  },
  {
    id: 28,
    title: "Lakeview 3D Studios",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/lakeview-3d.png",
    description: "3D virtual tour and digital media solutions for real estate with Matterport scanning, 360° photos, and interactive tags",
    result: "18M+ virtual views",
    resultValue: { value: 18000000, suffix: "+", label: "Virtual Views" },
    industry: "Real Estate Tech"
  },
  {
    id: 29,
    title: "Shelton Landscaping",
    category: "Web",
    technology: "WordPress",
    image: "/portfolio/shelton-landscaping.png",
    description: "Award-winning landscaping company with lawn care, garden design, and maintenance services featuring 2860+ completed projects",
    result: "2860+ projects completed",
    resultValue: { value: 2860, suffix: "+", label: "Projects Done" },
    industry: "Landscaping"
  },
  {
    id: 30,
    title: "JV Baseball Academy",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/jv-baseball.png",
    description: "Baseball academy in Dominican Republic with professional training camps, player signing programs, and charity initiatives",
    result: "50+ players signed",
    resultValue: { value: 50, suffix: "+", label: "Players Signed" },
    industry: "Sports & Education"
  },
  {
    id: 31,
    title: "ButterFly Spa & Beauty",
    category: "Web",
    technology: "WordPress",
    image: "/portfolio/butterfly-spa.png",
    description: "Luxury spa and beauty center website with treatment bookings, special offers, herbal spa packages, and facial services",
    result: "300% booking increase",
    resultValue: { value: 300, suffix: "%", label: "Booking Increase" },
    industry: "Beauty & Wellness"
  },
  {
    id: 32,
    title: "Toro Cleaning Ltd",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/toro-cleaning.png",
    description: "London's trusted commercial and residential cleaning service with eco-friendly solutions and 3854+ happy customers",
    result: "3854+ happy customers",
    resultValue: { value: 3854, suffix: "+", label: "Happy Customers" },
    industry: "Cleaning Services"
  },
  {
    id: 33,
    title: "KAD Foundation",
    category: "Web",
    technology: "Wix",
    image: "/portfolio/kad-foundation.png",
    description: "Non-profit organization helping people's lives through donations, food & water aid, education, and medical support programs",
    result: "$1M+ raised",
    resultValue: { value: 1000000, suffix: "+", label: "Funds Raised" },
    industry: "Non-Profit"
  },
  {
    id: 34,
    title: "Interique Interior Design",
    category: "Web",
    technology: "WordPress",
    image: "/portfolio/interique-interior.png",
    description: "Premium interior design studio with tailored solutions, design process showcase, studio portfolio, and client testimonials",
    result: "200+ spaces designed",
    resultValue: { value: 200, suffix: "+", label: "Spaces Designed" },
    industry: "Interior Design"
  },
  {
    id: 35,
    title: "ITCO Digital Agency",
    category: "Web",
    technology: "WordPress",
    image: "/portfolio/itco-agency.png",
    description: "IT consulting and digital agency with software development, cloud services, team showcase, and client case studies",
    result: "25+ years experience",
    resultValue: { value: 25, suffix: "+", label: "Years Experience" },
    industry: "IT Consulting"
  },
  {
    id: 36,
    title: "Vizion Recruitment",
    category: "Web",
    technology: "React",
    image: "/portfolio/vizion-recruitment.png",
    description: "AI-powered recruitment platform with job matching, resume uploads, company profiles, and 1500+ startup job listings",
    result: "1500+ jobs listed",
    resultValue: { value: 1500, suffix: "+", label: "Jobs Listed" },
    industry: "HR Tech"
  },
  // Mobile App Portfolio
  {
    id: 37,
    title: "RideEasy Bus Booking",
    category: "Mobile App",
    technology: "Flutter",
    image: "/portfolio/bus-booking-app.jpg",
    description: "Bus booking app with route search, passenger selection, departure scheduling, and real-time ticket purchasing for urban transit",
    result: "50K+ downloads",
    resultValue: { value: 50000, suffix: "+", label: "Downloads" },
    industry: "Transportation"
  },
  {
    id: 38,
    title: "FlyDeal Travel Booking",
    category: "Mobile App",
    technology: "React Native",
    image: "/portfolio/travel-booking-app.jpg",
    description: "Flight and hotel booking app with one-way/round-trip search, passenger management, ticket selection, and checkout integration",
    result: "120K+ bookings",
    resultValue: { value: 120000, suffix: "+", label: "Bookings" },
    industry: "Travel & Tourism"
  },
  {
    id: 39,
    title: "FitPulse Activity Tracker",
    category: "Mobile App",
    technology: "Flutter",
    image: "/portfolio/fitness-tracker-app.jpg",
    description: "Fitness and activity tracking app with daily goals, workout logging, calorie counter, step tracking, and performance analytics",
    result: "200K+ active users",
    resultValue: { value: 200000, suffix: "+", label: "Active Users" },
    industry: "Health & Fitness"
  },
  {
    id: 40,
    title: "FireFit Workout",
    category: "Mobile App",
    technology: "Swift",
    image: "/portfolio/firefit-app.jpg",
    description: "Fitness app with live tracking, workout types (cardio, power, endurance), weekly progress charts, and health metrics monitoring",
    result: "4.8★ App Store rating",
    resultValue: { value: 48, suffix: "★", label: "App Store Rating" },
    industry: "Health & Fitness"
  },
  {
    id: 41,
    title: "LoveLink Dating",
    category: "Mobile App",
    technology: "Kotlin",
    image: "/portfolio/dating-app.jpg",
    description: "Social dating app with profile creation, chat messaging, location-based matching, and search functionality for meaningful connections",
    result: "300K+ matches made",
    resultValue: { value: 300000, suffix: "+", label: "Matches Made" },
    industry: "Social Networking"
  },
  {
    id: 42,
    title: "SmartLife IoT Control",
    category: "Mobile App",
    technology: "React Native",
    image: "/portfolio/smart-home-app.jpg",
    description: "Smart home IoT app with room-based controls, light dimming, oven timer, temperature monitoring, and device shortcuts",
    result: "85K+ smart homes",
    resultValue: { value: 85000, suffix: "+", label: "Smart Homes" },
    industry: "IoT & Smart Home"
  },
  {
    id: 43,
    title: "StyleCuts Barber",
    category: "Mobile App",
    technology: "Flutter",
    image: "/portfolio/barber-shop-app.jpg",
    description: "Barber shop booking app with service selection, stylist profiles, rating system, pricing, and instant appointment booking",
    result: "15K+ appointments",
    resultValue: { value: 15000, suffix: "+", label: "Appointments" },
    industry: "Beauty & Grooming"
  },
  {
    id: 44,
    title: "GiveHeart Donations",
    category: "Mobile App",
    technology: "React Native",
    image: "/portfolio/donate-app.jpg",
    description: "Charity donation app with cause categories (health, education, nature), payment methods, campaign tracking, and donor profiles",
    result: "$500K+ donated",
    resultValue: { value: 500000, suffix: "+", label: "Total Donated" },
    industry: "Non-Profit"
  },
  {
    id: 45,
    title: "HomeSmart Control",
    category: "Mobile App",
    technology: "Swift",
    image: "/portfolio/home-smart-app.jpg",
    description: "Smart home automation app with room management, device controls, speaker volume, temperature settings, and family member profiles",
    result: "60K+ connected devices",
    resultValue: { value: 60000, suffix: "+", label: "Connected Devices" },
    industry: "IoT & Smart Home"
  },
];
