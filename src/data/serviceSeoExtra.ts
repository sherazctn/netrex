// Deeper, answer-first content for each service page. Written for buyers first, and structured so
// search engines and AI assistants can quote it: a one-sentence summary, what is included,
// a comparison table buyers actually search for, extra FAQs, and internal links.

export interface ServiceExtra {
  /** One-sentence answer: who NETREX is for this service and what you get. */
  summary: string;
  included: string[];
  comparison?: { title: string; intro?: string; columns: string[]; rows: string[][] };
  extraFaqs?: { q: string; a: string }[];
  related: string[];
  reading?: { slug: string; title: string }[];
}

export const SERVICE_EXTRA: Record<string, ServiceExtra> = {
  "web-development": {
    summary:
      "NETREX Inc is a web design and development company (founded 2016, 3,000+ projects) that designs and builds fast, SEO-ready business websites and web applications in React, Next.js, WordPress, Wix and Webflow for companies in the USA, UAE, UK, Canada, Australia and Europe.",
    included: [
      "Discovery workshop, sitemap and content plan",
      "Custom UI design in Figma for desktop and mobile",
      "Development on the platform that fits your team",
      "On-page SEO: titles, descriptions, headings, schema, redirects",
      "Core Web Vitals and image optimisation",
      "Accessibility checks (WCAG 2.2 AA targets)",
      "Analytics, Search Console and conversion tracking",
      "Contact forms, CRM and email integrations",
      "Launch, domain and hosting setup, training and handover",
    ],
    comparison: {
      title: "Wix vs WordPress vs custom React: which is right for your website?",
      intro: "We build on all three, so our recommendation is based on your goals, not on our preference.",
      columns: ["", "Wix / Wix Studio", "WordPress", "Custom React / Next.js"],
      rows: [
        ["Best for", "Service businesses that want to edit the site themselves", "Content-heavy sites, blogs and plugin-based features", "Web apps, portals and high-traffic brands"],
        ["Time to launch", "2 to 4 weeks", "3 to 6 weeks", "6 to 12+ weeks"],
        ["Hosting and security", "Managed by Wix", "You or your host maintain updates", "Deployed on your cloud; fully controlled"],
        ["Editing", "Visual editor", "WordPress admin", "Headless CMS or custom admin"],
        ["Custom features", "Wix apps and Velo code", "Plugins and custom themes", "Unlimited"],
      ],
    },
    extraFaqs: [
      { q: "What affects the cost of a website?", a: "The number of unique page designs, content writing, integrations (CRM, bookings, payments), languages, and whether you need custom functionality or a web application. We price each project from a written scope so the quote is fixed." },
      { q: "Do you provide hosting and maintenance after launch?", a: "Yes. We offer monthly maintenance that covers updates, backups, uptime monitoring, security fixes and small content changes, or we can hand the site over to your team." },
      { q: "Can you work in my time zone?", a: "Yes. We schedule calls in your working hours for clients in North America, the UK and Europe, the Gulf and Australia, and share progress in a shared project board between calls." },
    ],
    related: ["wix-website-design", "ecommerce", "ui-ux-design", "digital-marketing"],
    reading: [
      { slug: "wix-vs-wordpress-vs-custom-react-2026", title: "Wix vs WordPress vs custom React in 2026" },
      { slug: "website-redesign-roi-2026-guide", title: "Website redesign ROI: a 2026 guide" },
      { slug: "core-web-vitals-2026-speed-kills-conversions", title: "Core Web Vitals and conversions" },
    ],
  },
  "wix-website-design": {
    summary:
      "NETREX Inc is a Wix Legend Partner that designs custom Wix and Wix Studio websites, online stores and booking sites, usually live in 2 to 4 weeks, for small and mid-sized businesses in the USA, UK, Canada, Australia, Europe and the Middle East.",
    included: [
      "Custom design (no reused templates) for desktop, tablet and mobile",
      "Wix Studio or Wix Editor build, your choice",
      "Wix Stores, Bookings, Pricing Plans, Members and Blog setup",
      "Velo custom code, CMS collections and dynamic pages",
      "Wix SEO setup: metadata, structured data, redirects, sitemap",
      "Speed optimisation and image compression",
      "Forms, automations and email marketing connected",
      "Domain connection, launch and a recorded training session",
    ],
    comparison: {
      title: "Wix Editor vs Wix Studio",
      columns: ["", "Wix Editor", "Wix Studio"],
      rows: [
        ["Best for", "Simple business sites edited by one person", "Design-led sites, agencies and growing teams"],
        ["Responsive control", "Separate mobile editor", "Full breakpoint control"],
        ["Custom code", "Velo", "Velo plus a built-in code IDE"],
        ["Our recommendation", "Budget-friendly brochure sites", "Most new custom builds"],
      ],
    },
    extraFaqs: [
      { q: "Is the Wix subscription included in the price?", a: "No. You buy the Wix premium plan directly from Wix, monthly or yearly, so the site and billing stay in your own account. Our fee covers design and development." },
      { q: "Can you move my WordPress or Squarespace site to Wix?", a: "Yes. We rebuild the design on Wix, move your content, and set up 301 redirects from old URLs so you keep your search traffic." },
    ],
    related: ["web-development", "ecommerce", "branding", "digital-marketing"],
    reading: [
      { slug: "wix-vs-wordpress-vs-custom-react-2026", title: "Wix vs WordPress vs custom React in 2026" },
      { slug: "website-that-sells-2026-conversion-playbook", title: "How to build a website that sells" },
    ],
  },
  ecommerce: {
    summary:
      "NETREX Inc builds ecommerce websites on Shopify, Wix Stores, WooCommerce and headless stacks, with payments, shipping, taxes and multi-currency set up for selling in the USA, UK, EU, UAE and GCC, Canada and Australia.",
    included: [
      "Store design focused on product pages and checkout",
      "Product, variant and collection setup or import",
      "Payment gateways, including Stripe, PayPal, Apple Pay and regional options",
      "Shipping zones, tax rules and multi-currency pricing",
      "Apps for reviews, subscriptions, bundles and upsells",
      "Product SEO, structured data and Google Merchant Center feed",
      "Meta and Google tracking for ads",
      "Migration from WooCommerce, Magento, Wix or Squarespace",
    ],
    comparison: {
      title: "Shopify vs WooCommerce vs Wix Stores",
      columns: ["", "Shopify", "WooCommerce", "Wix Stores"],
      rows: [
        ["Best for", "Most growing product brands", "Stores already on WordPress", "Small catalogues with a service business"],
        ["Hosting", "Included and managed", "Your hosting", "Included and managed"],
        ["App ecosystem", "Largest", "Large (plugins)", "Moderate"],
        ["Selling in many countries", "Shopify Markets", "Extensions", "Multi-currency built in"],
      ],
    },
    extraFaqs: [
      { q: "Can you improve the conversion rate of my existing store?", a: "Yes. We audit analytics and the checkout, then improve product pages, speed, trust signals, navigation and cart flow in prioritised rounds." },
    ],
    related: ["web-development", "wix-website-design", "digital-marketing", "ui-ux-design"],
    reading: [
      { slug: "building-scalable-ecommerce-platforms", title: "Building scalable ecommerce platforms" },
      { slug: "agentic-commerce-ai-agents-buying-july-2026", title: "Agentic commerce: AI agents that buy" },
    ],
  },
  "mobile-app": {
    summary:
      "NETREX Inc is a mobile app development company that designs and builds iOS and Android apps in Flutter, React Native, Swift and Kotlin, from MVP to App Store and Google Play launch, with ongoing support after release.",
    included: [
      "Product workshop, feature list and release plan",
      "UX flows and UI design in Figma",
      "iOS and Android development",
      "Backend, APIs, admin panel and push notifications",
      "Payments, maps, chat and third-party integrations",
      "Testing on real devices",
      "App Store and Google Play submission",
      "Maintenance, OS updates and new features",
    ],
    comparison: {
      title: "Flutter vs React Native vs native apps",
      columns: ["", "Flutter", "React Native", "Native (Swift / Kotlin)"],
      rows: [
        ["Codebase", "One for iOS and Android", "One for iOS and Android", "Separate per platform"],
        ["Time and cost", "Lower", "Lower", "Higher"],
        ["Best for", "Custom, design-heavy apps", "Teams already using React", "Heavy device features and top performance"],
      ],
    },
    extraFaqs: [
      { q: "What does it cost to build an app?", a: "Cost depends on the number of screens, user roles, backend features and integrations. We scope an MVP first so you can launch sooner and add features based on real user feedback." },
    ],
    related: ["ui-ux-design", "ai-automation", "cloud-solutions", "web-development"],
    reading: [{ slug: "mobile-first-design-why-it-matters", title: "Why mobile-first design matters" }],
  },
  "ui-ux-design": {
    summary:
      "NETREX Inc is a UI/UX design agency that researches, wireframes and designs websites, SaaS products and mobile apps in Figma, delivering clickable prototypes and developer-ready design systems.",
    included: [
      "Stakeholder and user research",
      "Information architecture and user flows",
      "Wireframes and clickable prototypes",
      "Visual UI design and design system",
      "Usability testing and iteration",
      "Developer handoff with specs and assets",
    ],
    extraFaqs: [
      { q: "Do you also build what you design?", a: "Yes. Our designers and developers work in the same team, so designs are built as intended on web, Wix, Shopify or mobile." },
    ],
    related: ["web-development", "mobile-app", "branding", "ecommerce"],
    reading: [{ slug: "dark-mode-design-conversion-2026", title: "Dark mode design and conversion" }],
  },
  branding: {
    summary:
      "NETREX Inc is a branding agency that creates logos, visual identities and brand guidelines for startups and growing companies, and applies them across websites, social media and marketing.",
    included: [
      "Brand discovery and positioning",
      "Logo concepts, refinements and final files",
      "Colour palette and typography",
      "Brand guidelines document",
      "Social media, stationery and presentation templates",
    ],
    extraFaqs: [
      { q: "Which files do I receive?", a: "Vector and raster logo files (AI, SVG, PDF, PNG) in colour, black and white, plus the guidelines PDF and editable templates." },
    ],
    related: ["web-development", "ui-ux-design", "digital-marketing", "wix-website-design"],
    reading: [
      { slug: "branding-mistakes-killing-startup-credibility", title: "Branding mistakes that hurt startup credibility" },
      { slug: "the-psychology-of-color-in-branding", title: "The psychology of colour in branding" },
    ],
  },
  "digital-marketing": {
    summary:
      "NETREX Inc runs digital marketing for businesses that want more leads and sales: Google Ads, SEO, Meta and LinkedIn ads, social media and email, managed by one team with one monthly report.",
    included: [
      "Audit of your website, tracking and current campaigns",
      "Keyword and audience research for each target country",
      "Google Ads and Meta Ads setup and management",
      "SEO: technical fixes, content and local listings",
      "Landing pages and conversion tracking",
      "Monthly reporting on leads, cost per lead and revenue",
    ],
    extraFaqs: [
      { q: "Is there a minimum contract?", a: "We recommend at least three months for paid campaigns and six months for SEO so results can be measured properly, and we agree the term with you before starting." },
    ],
    related: ["geo", "web-development", "ecommerce", "branding"],
    reading: [
      { slug: "google-sge-ai-overviews-seo-2026", title: "Google AI Overviews and SEO" },
      { slug: "website-that-sells-2026-conversion-playbook", title: "How to build a website that sells" },
    ],
  },
  "ai-automation": {
    summary:
      "NETREX Inc builds custom AI agents, chatbots and workflow automations on OpenAI, Anthropic and Google models, connected to WhatsApp, websites, CRMs and business tools, starting with a 2 to 4 week pilot.",
    included: [
      "Process review to find the best automation opportunities",
      "AI chatbot or agent trained on your documents and data",
      "WhatsApp, website chat, email and Slack channels",
      "CRM, calendar, spreadsheet and API integrations",
      "Human handoff and approval steps",
      "Monitoring, testing and ongoing improvement",
    ],
    comparison: {
      title: "Chatbot vs AI agent vs workflow automation",
      columns: ["", "AI chatbot", "AI agent", "Workflow automation"],
      rows: [
        ["What it does", "Answers questions", "Answers and takes actions", "Moves data between tools on a trigger"],
        ["Example", "Website FAQ assistant", "Qualifies leads and books meetings", "New order to CRM, invoice and email"],
        ["Best first step", "Customer support", "Sales and operations", "Repetitive admin"],
      ],
    },
    extraFaqs: [
      { q: "Can the AI reply on WhatsApp?", a: "Yes. We connect agents to the WhatsApp Business Platform so they can answer customers, qualify leads and hand conversations to your team." },
    ],
    related: ["web-development", "mobile-app", "data-analytics", "cloud-solutions"],
    reading: [
      { slug: "ai-agents-small-business-automation-2026", title: "AI agents for small business automation" },
      { slug: "whatsapp-business-ai-agents-mena-2026", title: "WhatsApp Business AI agents in MENA" },
    ],
  },
  geo: {
    summary:
      "NETREX Inc offers Generative Engine Optimization: making your brand easy for ChatGPT, Google AI Mode, Gemini, Claude and Perplexity to understand, cite and recommend, alongside traditional SEO.",
    included: [
      "AI visibility audit for your key buyer questions",
      "Crawler access, llms.txt and server-rendered pages",
      "Organisation, service and FAQ structured data",
      "Answer-first content for your services",
      "Listings and third-party mentions AI tools rely on",
      "Monthly tracking of mentions and citations",
    ],
    related: ["digital-marketing", "web-development", "ai-automation"],
    reading: [
      { slug: "generative-engine-optimization-geo-rank-in-chatgpt", title: "GEO: how to get cited in ChatGPT" },
      { slug: "ai-search-visibility-audit-august-2026", title: "AI search visibility audit" },
    ],
  },
  "cloud-solutions": {
    summary: "NETREX Inc designs, migrates and runs cloud infrastructure on AWS, Microsoft Azure and Google Cloud for websites, apps and data platforms.",
    included: ["Architecture design", "Migration planning and execution", "Security and access control", "Backups and disaster recovery", "Cost reviews", "Monitoring and support"],
    related: ["devops", "data-analytics", "web-development"],
  },
  devops: {
    summary: "NETREX Inc sets up CI/CD pipelines, containers, Kubernetes, infrastructure as code and monitoring so teams release faster with fewer outages.",
    included: ["CI/CD pipelines", "Docker and Kubernetes", "Terraform infrastructure as code", "Monitoring and alerting", "Zero-downtime deployments", "Runbooks and documentation"],
    related: ["cloud-solutions", "web-development", "mobile-app"],
  },
  blockchain: {
    summary: "NETREX Inc develops smart contracts, tokens and decentralised applications on Ethereum, EVM chains and Solana, with testing and third-party audit preparation.",
    included: ["Smart contract development", "Token and NFT contracts", "dApp front ends and wallets", "Automated tests", "Audit preparation", "Deployment and monitoring"],
    related: ["web-development", "cloud-solutions", "data-analytics"],
  },
  "data-analytics": {
    summary: "NETREX Inc builds data pipelines, warehouses and BI dashboards that bring sales, marketing and operations data into one reliable view.",
    included: ["Data audit and KPI definition", "Pipelines from CRM, ads, store and ERP", "Warehouse setup", "Dashboards in Looker Studio, Power BI or Tableau", "Forecasting models", "Training for your team"],
    related: ["ai-automation", "cloud-solutions", "digital-marketing"],
  },
};
