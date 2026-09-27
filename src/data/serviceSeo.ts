// Keyword-led copy for each service page: the H1, an intro that answers "who does this and for whom",
// and FAQs (rendered as visible text and as FAQPage schema). Facts here must stay verifiable:
// founded 2016, 3,000+ projects, 294 five-star of 307 Fiverr reviews (the average is not shown), Wix Legend Partner, Top Rated on Upwork.

import { FIVE_STAR_REVIEWS } from "@/data/reviewStats";
import { SERVICE_EXTRA, type ServiceExtra } from "@/data/serviceSeoExtra";
export interface ServiceSeo {
  h1: string;
  heading: string;
  intro: string[];
  /** Short, quotable facts (rendered as a list; easy for search engines and AI assistants to cite). */
  facts?: [string, string][];
  faqs: { q: string; a: string }[];
  extra?: ServiceExtra;
}

export interface TargetMarket {
  code: string;
  name: string;
  text: string;
}

/** Main markets, in priority order. Country codes are also used for schema areaServed. */
export const TARGET_MARKETS: TargetMarket[] = [
  {
    code: "US",
    name: "United States",
    text: "Conversion-focused builds with WCAG / ADA accessibility, US-English copy and integrations such as Stripe, HubSpot and Salesforce.",
  },
  {
    code: "AE",
    name: "UAE & Middle East",
    text: "Bilingual English and Arabic builds with right-to-left layouts and WhatsApp lead capture for Dubai, Abu Dhabi, Saudi Arabia, Qatar and Kuwait.",
  },
  {
    code: "GB",
    name: "United Kingdom",
    text: "UK GDPR-aware builds with cookie consent, accessibility and fast hosting for audiences in London and across the UK.",
  },
  {
    code: "CA",
    name: "Canada",
    text: "English and French versions, privacy-aware forms and CAD pricing for businesses in Toronto, Vancouver and beyond.",
  },
  {
    code: "AU",
    name: "Australia",
    text: "AUD pricing, GST-ready checkouts and hosting close to your customers in Sydney, Melbourne and Brisbane.",
  },
  {
    code: "CH",
    name: "Germany, Switzerland & Europe",
    text: "GDPR-aware builds with German, French or Italian versions, cookie consent, Impressum and privacy pages for DACH and EU clients.",
  },
];

/** ISO codes for schema.org areaServed. */
export const AREA_SERVED = ["US", "AE", "SA", "QA", "KW", "BH", "OM", "GB", "CA", "AU", "DE", "CH", "AT", "NL", "IE"];

export const SERVICE_SEO: Record<string, ServiceSeo> = {
  "web-development": {
    h1: "Web Design & Development Company",
    heading: "Custom website design and development for growing businesses",
    intro: [
      "NETREX Inc is a web design and development company that has built websites for businesses since 2016. We design and develop custom websites in React and Next.js, WordPress, Wix, Webflow and Shopify, from a five-page company site to a full web application with logins, dashboards and integrations.",
      "Every build starts with your goals: more enquiries, more bookings or more sales. We plan the pages and content, design the interface, develop it with clean code, and launch with fast load times, on-page SEO, analytics and accessibility in place. Website redesign projects follow the same process and keep your existing search rankings through proper redirects.",
      `With 3,000+ projects delivered and ${FIVE_STAR_REVIEWS} five-star reviews from verified clients, we work with startups, professional firms and established brands in the USA, UAE, UK, Canada, Australia and Europe.`,
    ],
    facts: [
      ["Typical timeline", "3 to 5 weeks for a business website"],
      ["Platforms", "React, Next.js, WordPress, Wix, Webflow, Shopify"],
      ["Included", "Design, development, on-page SEO, analytics, accessibility, launch"],
      ["Clients in", "USA, UAE, UK, Canada, Australia, Europe"],
    ],
    faqs: [
      { q: "How long does it take to build a website?", a: "A typical business website takes 3 to 5 weeks from kickoff to launch. Larger web applications and multilingual sites take longer; we give you a fixed timeline in the proposal before work starts." },
      { q: "How much does a custom website cost?", a: "Cost depends on the number of pages, features, integrations and languages. We scope each project and send a fixed quote. Our free Website ROI Calculator gives you an estimate before you contact us." },
      { q: "Which platform should I build my website on?", a: "We build on React / Next.js, WordPress, Wix, Webflow and Shopify. We recommend the platform based on who will update the site, the features you need and your budget, not on what is easiest for us." },
      { q: "Do you redesign existing websites without losing SEO?", a: "Yes. Before launch we map every old URL to its new page with 301 redirects, keep your titles and content that already rank, and check Google Search Console after launch." },
      { q: "Do you work with clients outside the UAE?", a: "Yes. Most of our clients are in the United States, United Kingdom, Canada, Australia and Europe as well as the UAE and wider Middle East. We work remotely with clear milestones and regular calls in your time zone." },
    ],
  },
  "wix-website-design": {
    h1: "Wix Website Design & Development",
    heading: "Wix and Wix Studio websites designed by a Wix Legend Partner",
    intro: [
      "NETREX Inc designs and builds professional Wix and Wix Studio websites for businesses that want a site they can update themselves. We are a Wix Legend Partner, one of Wix's highest partner tiers, and have delivered Wix projects for clients in the USA, UK, Canada, Australia, Europe and the Middle East.",
      "We handle everything: custom design (no generic templates), responsive layouts for mobile and desktop, Wix Stores, Wix Bookings, member areas, multilingual sites, Velo custom code and third-party integrations. Every site launches with on-page SEO, fast loading and a short training session so your team can edit pages with confidence.",
      "Already on Wix? We redesign and speed up existing Wix sites, migrate from Wix Editor to Wix Studio, and move sites from WordPress or Squarespace to Wix.",
    ],
    facts: [
      ["Partner status", "Wix Legend Partner"],
      ["Typical timeline", "2 to 4 weeks; stores and bookings 4 to 6 weeks"],
      ["Builds", "Wix, Wix Studio, Wix Stores, Wix Bookings, Velo"],
      ["Clients in", "USA, UK, Canada, Australia, Europe, Middle East"],
    ],
    faqs: [
      { q: "What is a Wix Legend Partner?", a: "Legend is one of the highest tiers in the Wix Partner Program, awarded to agencies based on the volume and quality of the Wix sites they deliver. NETREX is a Wix Legend Partner, and our founder has been Top Rated on Upwork since 2016." },
      { q: "How long does a Wix website take?", a: "Most Wix business websites take 2 to 4 weeks. Online stores, booking systems and multilingual Wix sites usually take 4 to 6 weeks." },
      { q: "Can I edit my Wix website after launch?", a: "Yes. We build every Wix site so you can change text, images, products and blog posts yourself, and we include a handover session and written notes." },
      { q: "Is Wix good for SEO?", a: "Yes, when it is set up properly. We configure page titles, descriptions, headings, structured data, image alt text, redirects and Google Search Console so your Wix site is ready to rank." },
      { q: "Do you build Wix e-commerce stores?", a: "Yes. We set up Wix Stores with products, variants, payments, shipping, taxes and automated emails, and connect them to Google and Meta for marketing." },
    ],
  },
  ecommerce: {
    h1: "Ecommerce Website Development",
    heading: "Shopify, Wix and custom online stores built to sell",
    intro: [
      "NETREX Inc builds ecommerce websites that turn visitors into customers. We design and develop Shopify stores, Wix Stores, WooCommerce shops and custom headless storefronts for brands selling in the USA, UAE, UK, Canada, Australia and Europe.",
      "Our ecommerce development covers store design, product and collection setup, payment gateways, shipping and tax rules for each country, multi-currency and multi-language selling, app integrations, and conversion work on product pages and checkout. We also migrate stores to Shopify from WooCommerce, Magento, Wix and other platforms without losing products, customers or order history.",
    ],
    facts: [
      ["Typical timeline", "6 to 10 weeks for a new store"],
      ["Platforms", "Shopify, Wix Stores, WooCommerce, headless"],
      ["Included", "Payments, shipping, taxes, multi-currency, SEO, migration"],
      ["Sells in", "USA, UK, EU, UAE and GCC, Canada, Australia"],
    ],
    faqs: [
      { q: "How long does it take to build an online store?", a: "A new ecommerce website typically takes 6 to 10 weeks, depending on the number of products, custom features and integrations." },
      { q: "Shopify or WooCommerce: which is better for my store?", a: "Shopify suits most brands that want reliable hosting, easy management and a large app ecosystem. WooCommerce suits businesses already on WordPress that need full control. We recommend one after reviewing your products, markets and team." },
      { q: "Can you set up selling in several countries?", a: "Yes. We configure multi-currency pricing, local payment methods, shipping zones and tax rules for markets such as the USA, UK, EU, Canada, Australia and the GCC." },
      { q: "Do you migrate existing stores to Shopify?", a: "Yes. We move products, customers, orders, images and SEO URLs, and set up 301 redirects so your search rankings carry over." },
    ],
  },
  "mobile-app": {
    h1: "Mobile App Development Company",
    heading: "iOS and Android app development from idea to App Store launch",
    intro: [
      "NETREX Inc is a mobile app development company building iOS and Android apps for startups and established businesses. We develop cross-platform apps in Flutter and React Native, and native apps in Swift and Kotlin when performance or device features call for it.",
      "We take your app from idea to launch: product workshops, UX and UI design, app development, backend and API, testing on real devices, and App Store and Google Play submission. After launch we provide maintenance, updates and new features. Clients in the USA, UAE, UK, Canada, Australia and Europe use our apps for bookings, delivery, fitness, learning, property and internal operations.",
    ],
    facts: [
      ["Typical timeline", "10 to 16 weeks for a first release"],
      ["Technologies", "Flutter, React Native, Swift, Kotlin"],
      ["Included", "UX/UI, development, backend, testing, store submission"],
      ["Ownership", "You own the source code and store accounts"],
    ],
    faqs: [
      { q: "How long does it take to develop a mobile app?", a: "A first release (MVP) usually takes 10 to 16 weeks, including design, development, testing and store submission. Complex apps with many integrations take longer." },
      { q: "Flutter, React Native or native: which should I choose?", a: "Flutter and React Native let one codebase run on iOS and Android, which lowers cost and speeds up delivery. Native Swift and Kotlin is best for apps that rely heavily on device hardware or need maximum performance." },
      { q: "Do you publish the app to the App Store and Google Play?", a: "Yes. We prepare store listings, screenshots and privacy details, handle submission and review, and publish the app under your own developer accounts." },
      { q: "Will I own the app source code?", a: "Yes. You own the source code, designs and accounts once the project is paid for." },
    ],
  },
  "ui-ux-design": {
    h1: "UI/UX Design Agency",
    heading: "Website and app UI/UX design that is easy to use and built to convert",
    intro: [
      "NETREX Inc is a UI/UX design agency designing websites, web apps and mobile apps. We combine user research, information architecture, wireframes and high-fidelity UI design in Figma to create interfaces people understand at first glance.",
      "Our designers work alongside our developers, so every screen is designed to be built. Deliverables include user flows, clickable prototypes, design systems and developer-ready handoff. We also run UX audits on existing products to find the friction that costs you sign-ups and sales.",
    ],
    facts: [
      ["Typical timeline", "2 to 4 weeks for a website; 4 to 8 weeks for apps"],
      ["Design tool", "Figma, with developer-ready handoff"],
      ["Deliverables", "User flows, wireframes, UI, prototype, design system"],
      ["Works with", "Our own developers or your in-house team"],
    ],
    faqs: [
      { q: "What is included in a UI/UX design project?", a: "Research and goals, user flows, wireframes, visual UI design, a clickable prototype, a component library or design system, and developer handoff in Figma." },
      { q: "How long does UI/UX design take?", a: "A website design usually takes 2 to 4 weeks. App and SaaS product design takes 4 to 8 weeks depending on the number of screens and user roles." },
      { q: "Can you redesign our existing app or website?", a: "Yes. We start with a UX audit and analytics review, then redesign the screens that have the biggest impact on conversions and usability." },
    ],
  },
  branding: {
    h1: "Branding Agency: Logo & Brand Identity Design",
    heading: "Brand identity design for startups and growing companies",
    intro: [
      "NETREX Inc is a branding agency creating logos and complete brand identities. We help new and established businesses define how they look and sound, then turn that into a logo, colour palette, typography, brand guidelines and ready-to-use templates.",
      "Brand work connects directly to your website, social media and marketing, which we can deliver too, so your identity stays consistent everywhere your customers see it.",
    ],
    facts: [
      ["Typical timeline", "3 to 6 weeks"],
      ["Deliverables", "Logo suite, colours, typography, guidelines, templates"],
      ["Best for", "New businesses and brands ready for a refresh"],
    ],
    faqs: [
      { q: "What is included in a brand identity package?", a: "Brand discovery, logo design with variations, colour palette, typography, brand guidelines and templates for social media, stationery and presentations." },
      { q: "How long does branding take?", a: "A brand identity project usually takes 3 to 6 weeks, depending on the number of concepts and deliverables." },
      { q: "Can you refresh an existing brand instead of starting over?", a: "Yes. We can modernise your logo and visual identity while keeping the recognition you have already built." },
    ],
  },
  "digital-marketing": {
    h1: "Digital Marketing Agency",
    heading: "Digital marketing that brings leads and sales, not just traffic",
    intro: [
      "NETREX Inc runs digital marketing for businesses that want measurable growth. Our team plans and manages search engine optimization, Google Ads, Meta and LinkedIn advertising, social media, email marketing and content, with one monthly report that ties activity to leads and revenue.",
      "Because we also build websites, we fix the landing pages, tracking and site speed issues that hold campaigns back, instead of only sending more traffic to a page that does not convert.",
    ],
    facts: [
      ["Channels", "SEO, Google Ads, Meta, LinkedIn, email, content"],
      ["Reporting", "Monthly, tied to leads and revenue"],
      ["Markets", "USA, UAE and GCC, UK, Canada, Australia, Europe"],
    ],
    faqs: [
      { q: "Which digital marketing services do you offer?", a: "SEO, Google Ads, Meta and LinkedIn ads, social media management, email marketing, content marketing, conversion rate optimisation and analytics setup." },
      { q: "How soon will I see results?", a: "Paid campaigns can bring leads within the first weeks. SEO usually shows meaningful movement after 3 to 6 months, depending on competition and your site's starting point." },
      { q: "Do you run campaigns in different countries?", a: "Yes. We run campaigns targeting the USA, UAE and GCC, UK, Canada, Australia and Europe, with local keywords, languages and ad schedules." },
    ],
  },
  "ai-automation": {
    h1: "AI Automation Agency: AI Agents & Chatbots",
    heading: "Custom AI agents, chatbots and workflow automation for your business",
    intro: [
      "NETREX Inc builds AI agents and business automation that save your team hours every week. We develop customer support chatbots, sales and lead qualification agents, internal knowledge assistants trained on your documents, and automated workflows that connect your CRM, email, spreadsheets and other tools.",
      "We work with models from OpenAI, Anthropic and Google as well as open-source models, and connect them to WhatsApp, your website, Slack and business systems. Projects start with a short pilot on one process so you see results before scaling.",
    ],
    facts: [
      ["Pilot timeline", "2 to 4 weeks on one process"],
      ["Models", "OpenAI, Anthropic, Google, open-source"],
      ["Connects to", "Website, WhatsApp, Slack, CRM, email, spreadsheets"],
    ],
    faqs: [
      { q: "What can an AI agent do for my business?", a: "Answer customer questions around the clock, qualify leads, book appointments, draft replies and documents, search your internal knowledge, and move data between your systems." },
      { q: "How long does an AI automation project take?", a: "A focused pilot usually takes 2 to 4 weeks. Larger rollouts across several teams or systems are planned in phases after the pilot." },
      { q: "Is our company data safe?", a: "We use business API plans that do not train on your data, keep access limited to what the agent needs, and can deploy within your own cloud account when required." },
    ],
  },
  geo: {
    h1: "Generative Engine Optimization (GEO) Services",
    heading: "Get your brand recommended in ChatGPT, Gemini and AI search",
    intro: [
      "Generative Engine Optimization (GEO) helps AI assistants such as ChatGPT, Google AI Mode, Gemini, Claude and Perplexity understand and recommend your brand. NETREX Inc structures your site's content, schema and entity data, and builds the third-party mentions AI tools rely on.",
    ],
    faqs: [
      { q: "What is the difference between SEO and GEO?", a: "SEO helps your pages rank in search results. GEO helps AI assistants describe and cite your brand correctly in their answers. The two work best together." },
      { q: "How do you measure GEO results?", a: "We track how often your brand is mentioned and cited for a set of buyer questions across AI assistants, alongside organic search traffic and leads." },
    ],
  },
  "cloud-solutions": {
    h1: "Cloud Solutions on AWS, Azure & Google Cloud",
    heading: "Cloud architecture, migration and optimisation",
    intro: [
      "NETREX Inc designs, migrates and manages cloud infrastructure on AWS, Microsoft Azure and Google Cloud, so your websites and applications stay fast, secure and cost-efficient as you grow.",
    ],
    faqs: [
      { q: "Can you migrate our application to the cloud?", a: "Yes. We assess your current setup, plan the migration, move applications and data with minimal downtime, and document the new environment." },
      { q: "Which cloud provider do you recommend?", a: "It depends on your existing tools, compliance needs and team skills. We work across AWS, Azure and Google Cloud and recommend the best fit." },
    ],
  },
  devops: {
    h1: "DevOps & Infrastructure Services",
    heading: "CI/CD, Kubernetes and infrastructure as code",
    intro: [
      "NETREX Inc sets up CI/CD pipelines, containers, Kubernetes, Terraform and monitoring so your team can release faster with fewer outages.",
    ],
    faqs: [
      { q: "What does a DevOps engagement include?", a: "Automated build and deployment pipelines, infrastructure as code, container setup, monitoring and alerting, and documentation your team can maintain." },
      { q: "Do you offer ongoing DevOps support?", a: "Yes. We can manage and improve your infrastructure month to month after the initial setup." },
    ],
  },
  blockchain: {
    h1: "Blockchain & Web3 Development",
    heading: "Smart contracts, tokens and decentralised apps",
    intro: [
      "NETREX Inc develops smart contracts, tokenization platforms and decentralised applications, with testing and independent security review before launch.",
    ],
    faqs: [
      { q: "Which blockchains do you build on?", a: "Ethereum and other EVM chains, plus Solana, depending on your use case, fees and audience." },
      { q: "Do you audit smart contracts?", a: "We test every contract thoroughly and recommend an independent third-party audit before any mainnet launch that handles funds." },
    ],
  },
  "data-analytics": {
    h1: "Data Analytics & Business Intelligence",
    heading: "Dashboards and data pipelines that support decisions",
    intro: [
      "NETREX Inc builds data warehouses, pipelines and business intelligence dashboards that bring your sales, marketing and operations data into one reliable view.",
    ],
    faqs: [
      { q: "Which BI tools do you work with?", a: "Looker Studio, Power BI, Looker, Tableau and Metabase, on top of warehouses such as BigQuery, Snowflake and PostgreSQL." },
      { q: "Can you connect our existing tools?", a: "Yes. We connect CRMs, ad platforms, ecommerce stores, spreadsheets and databases into one dashboard." },
    ],
  },
};

// Merge the deeper content (summary, inclusions, comparisons, extra FAQs, links) into each page.
for (const [slug, extra] of Object.entries(SERVICE_EXTRA)) {
  const page = SERVICE_SEO[slug];
  if (!page) continue;
  page.extra = extra;
  page.faqs = [...page.faqs, ...(extra.extraFaqs ?? [])];
}
