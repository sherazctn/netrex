// English search titles and descriptions for every public page, keyed by path.
// Titles stay under 60 characters and descriptions under 155 so search results do not truncate them.
// Used by <SEO /> for English; other languages keep their titleByLang / descriptionByLang overrides.
import { FIVE_STAR_REVIEWS } from "@/data/reviewStats";
export interface PageMeta {
  title: string;
  description: string;
}

export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    "title": "NETREX Inc | Web Design, App Development & AI Solutions",
    "description": "Web design and development, mobile apps, online stores and AI automation for businesses in the USA, UAE, UK, Canada, Australia and Europe. 7,000+ projects."
  },
  "/about": {
    "title": "About NETREX Inc | Digital Agency Since 2016",
    "description": "NETREX is a digital agency founded in 2016 by Sheraz Khan. Meet the team, see how we work, and learn why clients come back to us project after project."
  },
  "/mission": {
    "title": "Our Mission | NETREX Inc",
    "description": "Our mission is to help businesses grow with websites, apps and AI that deliver measurable results. Read the principles behind how NETREX works."
  },
  "/vision": {
    "title": "Our Vision for 2026 to 2030 | NETREX Inc",
    "description": "Where NETREX is heading from 2026 to 2030: AI native websites, generative engine optimization and the technology we are investing in for our clients."
  },
  "/ceo": {
    "title": "Sheraz Khan, Founder & CEO | NETREX Inc",
    "description": "Sheraz Khan founded NETREX in 2016. Computer science graduate, Top Rated seller on Upwork and Wix Legend Partner on Fiverr. Read his full profile."
  },
  "/leadership": {
    "title": "Leadership Team | NETREX Inc",
    "description": "Meet the people who lead NETREX, from the founder and CEO to the heads of delivery, finance and engineering behind every client project."
  },
  "/company-profile": {
    "title": "Company Fact Sheet | NETREX Inc",
    "description": "NETREX company facts in one place: legal entities, founding year, locations, service lines and industries served. Built for procurement and RFP teams."
  },
  "/testimonials": {
    "title": "Client Reviews & Testimonials | NETREX Inc",
    "description": "Read what clients say about working with NETREX on websites, apps, branding and AI projects, with links to verified reviews on Clutch, Upwork and Fiverr."
  },
  "/partners": {
    "title": "Technology Partners & Platforms | NETREX Inc",
    "description": "The cloud, data and technology platforms NETREX builds with, and how our partnerships help us deliver secure, scalable projects for clients."
  },
  "/careers": {
    "title": "Careers at NETREX | Open Jobs in Tech & Design",
    "description": "Join NETREX. See our open roles, how we hire and what it is like to build websites, apps and AI products with our team."
  },
  "/newsroom": {
    "title": "Newsroom & Press Kit | NETREX Inc",
    "description": "NETREX news, company announcements and a press kit with logos, founder bio and key facts for journalists and partners."
  },
  "/csr": {
    "title": "Corporate Social Responsibility | NETREX Inc",
    "description": "How NETREX runs responsibly: ethics, data protection, environmental policy and the commitments we hold ourselves to with clients and staff."
  },
  "/trust-center": {
    "title": "Trust Center: Security & Privacy | NETREX Inc",
    "description": "How NETREX protects client data: secure development, access control, incident response, GDPR aligned practices and our hosting providers."
  },
  "/contact": {
    "title": "Contact NETREX | Get a Free Project Quote",
    "description": "Tell us about your website, app, SEO or AI project and get a quote. Email info@netrexinc.com or call +971 50 200 8313."
  },
  "/faq": {
    "title": "FAQ: Pricing, Timelines & Process | NETREX Inc",
    "description": "Answers to common questions about NETREX: what projects cost, how long they take, how we work, payments, support and which platforms we build on."
  },
  "/services": {
    "title": "Web Design, App Development & AI Services | NETREX",
    "description": "Web design and development, Wix and Shopify stores, mobile apps, UI/UX, branding, digital marketing and AI automation for businesses worldwide."
  },
  "/services/web-development": {
    "title": "Web Design & Development Company | NETREX Inc",
    "description": "Custom website design and development in React, WordPress, Wix and Webflow for businesses in the USA, UAE, UK, Canada, Australia and Europe."
  },
  "/services/mobile-app": {
    "title": "Mobile App Development Company | iOS & Android | NETREX",
    "description": "iOS and Android app development in Flutter, React Native, Swift and Kotlin, from MVP to App Store launch, for startups and businesses worldwide."
  },
  "/services/ui-ux-design": {
    "title": "UI/UX Design Agency | Website & App Design | NETREX",
    "description": "UI/UX design for websites, SaaS and mobile apps: research, wireframes, Figma prototypes and design systems that make products easy to use."
  },
  "/services/digital-marketing": {
    "title": "Digital Marketing Agency | Google Ads, SEO & Social | NETREX",
    "description": "Google Ads, SEO, social media and email marketing managed by one team, with monthly reporting tied to leads and sales. Campaigns in any market."
  },
  "/services/branding": {
    "title": "Branding Agency | Logo & Brand Identity Design | NETREX",
    "description": "Logo design, brand identity and brand guidelines for startups and growing companies in the USA, UAE, UK, Canada, Australia and Europe."
  },
  "/services/wix-website-design": {
    "title": "Wix Website Design Agency | Wix Legend Partner | NETREX",
    "description": `Custom Wix and Wix Studio websites, stores and booking sites by a Wix Legend Partner. ${FIVE_STAR_REVIEWS} five-star client reviews. Get a free Wix quote.`
  },
  "/services/ecommerce": {
    "title": "Ecommerce Website Development | Shopify & Wix | NETREX",
    "description": "Shopify, Wix and WooCommerce stores with multi-currency checkout, shipping and tax set up for the USA, UK, EU, UAE, Canada and Australia."
  },
  "/services/ai-automation": {
    "title": "AI Automation Agency | AI Agents & Chatbots | NETREX",
    "description": "Custom AI agents, chatbots and workflow automation on OpenAI, Anthropic and Google models. Start with a 2 to 4 week pilot on one process."
  },
  "/services/geo": {
    "title": "GEO Agency: Generative Engine Optimization | NETREX",
    "description": "Get your brand read and cited correctly by ChatGPT, Gemini, Claude, Perplexity and Google AI Overviews with technical fixes, schema and content."
  },
  "/services/cloud-solutions": {
    "title": "Cloud Solutions: AWS, Azure & GCP | NETREX",
    "description": "Cloud migration, architecture and cost optimization on AWS, Microsoft Azure and Google Cloud. Secure, scalable infrastructure for your applications."
  },
  "/services/devops": {
    "title": "DevOps Services: CI/CD & Kubernetes | NETREX",
    "description": "CI/CD pipelines, Kubernetes, Terraform and monitoring so your team ships faster with fewer outages. DevOps setup and managed support from NETREX."
  },
  "/services/blockchain": {
    "title": "Blockchain & Web3 Development Services | NETREX",
    "description": "Smart contracts, tokenization and decentralized apps with security reviews before launch. Blockchain and Web3 development from NETREX."
  },
  "/services/data-analytics": {
    "title": "Data Analytics & BI Services | NETREX",
    "description": "Data warehouses, dashboards and predictive models that turn your business data into decisions. Data analytics and BI consulting from NETREX."
  },
  "/industries": {
    "title": "Industries We Serve | NETREX Digital Agency",
    "description": "Websites, apps and AI solutions for healthcare, education, real estate, retail, hospitality, logistics, finance, legal, manufacturing and more."
  },
  "/portfolio": {
    "title": "Portfolio: Web, App & Branding Projects | NETREX",
    "description": "See websites, mobile apps, e-commerce stores and brand identities NETREX has delivered for clients, with the results each project achieved."
  },
  "/blog": {
    "title": "Blog: AI, SEO, GEO & Web Design Insights | NETREX",
    "description": "Practical guides on AI agents, SEO, generative engine optimization, web design and e-commerce from the NETREX team."
  },
  "/blog/website-that-sells-2026-conversion-playbook": {
    "title": "The 2026 Website That Sells: 12 Conversion Moves | NETREX",
    "description": "12 conversion changes that lift sales faster than a full redesign, from page speed and trust signals to forms and calls to action."
  },
  "/blog/branding-mistakes-killing-startup-credibility": {
    "title": "6 Branding Mistakes Killing Startup Credibility | NETREX",
    "description": "Six branding mistakes that make startups look less trustworthy, and the simple fix for each one, from inconsistent logos to vague messaging."
  },
  "/blog/core-web-vitals-2026-speed-kills-conversions": {
    "title": "Core Web Vitals 2026: Speed and Conversions | NETREX",
    "description": "Why a fast enough website still loses sales in 2026, what LCP, INP and CLS really measure, and the fixes that improve both speed and revenue."
  },
  "/blog/ai-search-visibility-audit-august-2026": {
    "title": "7-Day AI Visibility Audit for ChatGPT & Gemini | NETREX",
    "description": "A seven day audit to check whether ChatGPT, Gemini and Perplexity can find, read and cite your brand, with the fixes to make on each day."
  },
  "/blog/ai-agents-small-business-automation-2026": {
    "title": "AI Agents for Small Business: 7 Automations | NETREX",
    "description": "Seven AI agent automations small businesses can set up now, what each one costs and how quickly it can pay for itself."
  },
  "/blog/agentic-commerce-ai-agents-buying-july-2026": {
    "title": "Agentic Commerce: How AI Agents Choose Who Sells | NETREX",
    "description": "AI shopping agents now compare and buy on behalf of customers. Here is how agentic commerce works and what stores must change to get chosen."
  },
  "/blog/gpt-5-turbo-enterprise-playbook-july-2026": {
    "title": "GPT-5 Enterprise Playbook for CEOs | NETREX",
    "description": "A 90 day plan for rolling out GPT-5 across an enterprise: use cases to start with, governance, costs and how to measure the return."
  },
  "/blog/google-ai-mode-search-july-2026-seo-death": {
    "title": "Google AI Mode Is Now Default: SEO Impact | NETREX",
    "description": "What Google AI Mode becoming the default search experience means for organic traffic, and what still works for SEO in 2026."
  },
  "/blog/vibe-coding-vs-traditional-dev-2026": {
    "title": "Vibe Coding vs Traditional Development in 2026 | NETREX",
    "description": "When AI assisted vibe coding is the right choice and when traditional development still wins, based on real production projects."
  },
  "/blog/whatsapp-business-ai-2026-mena-conversion": {
    "title": "WhatsApp Business AI: Top Sales Channel in MENA | NETREX",
    "description": "Why WhatsApp Business with AI now converts better than web forms in the Gulf and MENA, and how to set it up for sales and support."
  },
  "/blog/ai-native-websites-2026-rebuild-rule": {
    "title": "AI Native Websites: Why Brands Will Rebuild | NETREX",
    "description": "What makes a website AI native, why most brands will need to rebuild before 2027, and how to plan the move without losing traffic."
  },
  "/blog/lovable-cloud-vs-vercel-vs-supabase-2026": {
    "title": "Lovable Cloud vs Vercel vs Supabase in 2026 | NETREX",
    "description": "A founder friendly comparison of Lovable Cloud, Vercel and Supabase in 2026: pricing, speed, limits and which stack fits which project."
  },
  "/blog/stripe-agent-commerce-checkout-2026": {
    "title": "Stripe Agent Commerce and the End of Checkout | NETREX",
    "description": "How Stripe payments for AI agents change online checkout, and the steps stores should take now to accept orders placed by AI assistants."
  },
  "/blog/apple-vision-pro-web-experiences-2026": {
    "title": "Apple Vision Pro Web: 12 Spatial Site Examples | NETREX",
    "description": "Twelve brands building spatial web experiences for Apple Vision Pro, what they do well and the ideas you can use on your own site."
  },
  "/blog/google-sge-ai-overviews-seo-2026": {
    "title": "Google AI Overviews 2026: How to Get Cited | NETREX",
    "description": "How Google AI Overviews choose their sources in 2026 and the content, schema and technical changes that help your pages get cited."
  },
  "/blog/gpt5-customer-support-automation-2026": {
    "title": "GPT-5 Customer Support Automation Case Study | NETREX",
    "description": "How we used GPT-5 to automate customer support for a Dubai SaaS company, what we built, and how response times changed."
  },
  "/blog/whatsapp-business-ai-agents-mena-2026": {
    "title": "WhatsApp Business + AI Agents for MENA Sales | NETREX",
    "description": "How to combine WhatsApp Business with AI agents to qualify leads, answer questions and close sales across the Gulf and MENA."
  },
  "/blog/wix-vs-wordpress-vs-custom-react-2026": {
    "title": "Wix vs WordPress vs Custom React in 2026 | NETREX",
    "description": "Wix, WordPress or a custom React build? Compare cost, speed, SEO and upkeep, and find out which platform fits your business in 2026."
  },
  "/blog/industrial-automation-website-lead-generation": {
    "title": "Lead Generation Websites for Industrial Automation | NETREX",
    "description": "How industrial automation companies get more qualified leads from a modern website: structure, content, product pages and quote forms."
  },
  "/blog/generative-engine-optimization-geo-rank-in-chatgpt": {
    "title": "What Is GEO? How to Rank in ChatGPT & Gemini | NETREX",
    "description": "Generative engine optimization explained: how ChatGPT, Gemini and Perplexity pick sources, and the steps to get your brand cited."
  },
  "/blog/dark-mode-design-conversion-2026": {
    "title": "Dark Mode Websites and Conversion in 2026 | NETREX",
    "description": "Do dark mode websites convert better? What the 2026 data shows, where dark mode helps, where it hurts and how to test it on your site."
  },
  "/blog/ai-agents-for-business-automation-2026": {
    "title": "AI Agents for Business: 12 Time Saving Workflows | NETREX",
    "description": "Twelve AI agent workflows that save teams hours every week in sales, support, operations and finance, with the tools to build each one."
  },
  "/blog/website-redesign-roi-2026-guide": {
    "title": "Website Redesign ROI Guide 2026: Cost & Returns | NETREX",
    "description": "When to redesign your website, what a redesign costs in 2026 and how to estimate the return before you commit budget."
  },
  "/blog/future-of-ai-in-web-development": {
    "title": "The Future of AI in Web Development | NETREX",
    "description": "How AI is changing web development, from code generation and testing to personalization, and what it means for businesses and developers."
  },
  "/blog/mobile-first-design-why-it-matters": {
    "title": "Mobile First Design: Why It Matters | NETREX",
    "description": "What mobile first design means, why Google and users reward it, and the practical rules for designing a site that works on small screens first."
  },
  "/blog/seo-trends-to-watch-in-2025": {
    "title": "SEO Trends to Watch | NETREX Blog",
    "description": "The SEO trends that shaped search, from AI Overviews to E-E-A-T and page experience, and what they mean for your strategy now."
  },
  "/blog/building-scalable-ecommerce-platforms": {
    "title": "How to Build a Scalable E-commerce Platform | NETREX",
    "description": "The architecture, platform and performance choices that let an online store handle growth, traffic spikes and new markets without rebuilding."
  },
  "/blog/the-psychology-of-color-in-branding": {
    "title": "The Psychology of Color in Branding | NETREX",
    "description": "How colors shape the way customers feel about a brand, what common colors signal, and how to choose a palette that fits your business."
  },
  "/blog/case-study-300-percent-revenue-growth": {
    "title": "Case Study: 300% Revenue Growth | NETREX",
    "description": "How a NETREX client grew revenue by 300 percent: the starting point, what we changed and the results, step by step."
  },
  "/tools/website-roi": {
    "title": "Free Website ROI Calculator | NETREX",
    "description": "Answer 3 quick questions to see how much revenue your business could be missing without a modern website. Free and personalized."
  },
  "/tools/mobile-app-roi": {
    "title": "Free Mobile App ROI Calculator | NETREX",
    "description": "Answer 3 questions to see how a mobile app could lift customer engagement, retention and revenue for your business. Free projection."
  },
  "/tools/marketing-roi": {
    "title": "Free Marketing ROI Calculator | NETREX",
    "description": "Answer 3 questions to see how much revenue structured digital marketing could generate for your business compared with doing nothing."
  },
  "/tools/branding-roi": {
    "title": "Free Branding ROI Calculator | NETREX",
    "description": "See how professional branding could change how customers see your business, how much they trust it and how much revenue it earns."
  },
  "/tools/ecommerce-roi": {
    "title": "Free E-commerce ROI Calculator | NETREX",
    "description": "See how a professional online store could grow your sales, reduce cart abandonment and open new markets. Free 3 step calculator."
  },
  "/tools/seo-roi": {
    "title": "Free SEO ROI Calculator | NETREX",
    "description": "See how much organic traffic and revenue you could be missing without a proper SEO strategy. Free 3 step SEO ROI calculator."
  },
  "/tools/ai-readiness": {
    "title": "Free AI Readiness Assessment | NETREX",
    "description": "Answer 4 quick questions to get your AI readiness score and see the time and revenue gains your business could be leaving on the table."
  },
  "/tools/ai-automation-savings": {
    "title": "AI Automation Savings Calculator | NETREX",
    "description": "See how many hours and how much money AI automation could give back to your team every year. Free 4 step calculator."
  },
  "/tools/ai-chatbot-roi": {
    "title": "Free AI Chatbot ROI Calculator | NETREX",
    "description": "Find out how much revenue slow replies cost you and what a 24/7 AI chatbot could add to your sales pipeline. Free 4 step calculator."
  },
  "/tools/ai-copy-generator": {
    "title": "Free AI Website Copy & SEO Generator | NETREX",
    "description": "Describe your business and get SEO titles, meta descriptions, headlines, value propositions and keywords in seconds, in 9 languages. Free."
  },
  "/policies": {
    "title": "Company Policies | NETREX Inc",
    "description": "All NETREX company policies in one place: security, privacy, accessibility, refunds, service levels, conduct and compliance."
  },
  "/policies/information-security": {
    "title": "Information Security Policy | NETREX Inc",
    "description": "How NETREX protects client systems and data: access control, encryption, secure development, supplier security and incident handling."
  },
  "/policies/accessibility-statement": {
    "title": "Accessibility Statement | NETREX Inc",
    "description": "NETREX's commitment to accessible websites and apps, the standards we follow and how to report an accessibility problem."
  },
  "/policies/cookie-policy": {
    "title": "Cookie Policy | NETREX Inc",
    "description": "Which cookies the NETREX website uses, why we use them and how you can manage or turn them off."
  },
  "/policies/gdpr-data-processing": {
    "title": "GDPR & Data Processing | NETREX Inc",
    "description": "How NETREX processes personal data under GDPR: lawful basis, data subject rights, international transfers and our data processing terms."
  },
  "/policies/sub-processors": {
    "title": "Sub-processors List | NETREX Inc",
    "description": "The third party service providers NETREX uses to process data, what each one does and where the data is hosted."
  },
  "/policies/service-level-agreement": {
    "title": "Service Level Agreement | NETREX Inc",
    "description": "The service levels NETREX commits to for support, response times and maintenance on client projects."
  },
  "/policies/acceptable-use": {
    "title": "Acceptable Use Policy | NETREX Inc",
    "description": "The rules for using NETREX services, hosting and tools, and what we do when those rules are broken."
  },
  "/policies/anti-bribery": {
    "title": "Anti-Bribery & Corruption Policy | NETREX Inc",
    "description": "NETREX's zero tolerance approach to bribery and corruption, and the standards we expect from staff, partners and suppliers."
  },
  "/policies/modern-slavery": {
    "title": "Modern Slavery Statement | NETREX Inc",
    "description": "The steps NETREX takes to prevent modern slavery and human trafficking in our business and supply chain."
  },
  "/policies/code-of-conduct": {
    "title": "Code of Conduct | NETREX Inc",
    "description": "The standards of behavior NETREX expects from its team when working with clients, colleagues and partners."
  },
  "/policies/quality-policy": {
    "title": "Quality Policy | NETREX Inc",
    "description": "How NETREX plans, reviews and tests work so every website, app and campaign meets agreed standards before delivery."
  },
  "/policies/environmental-policy": {
    "title": "Environmental Policy | NETREX Inc",
    "description": "How NETREX works to reduce its environmental impact across its offices, hosting and day to day operations."
  },
  "/policies/whistleblower-policy": {
    "title": "Whistleblower Policy | NETREX Inc",
    "description": "How to report wrongdoing at NETREX confidentially, how reports are handled and how we protect the people who raise them."
  },
  "/policies/refund-policy": {
    "title": "Refund Policy | NETREX Inc",
    "description": "When NETREX offers refunds on projects and services, how to request one and how long refunds take to process."
  },
  "/legal": {
    "title": "Legal Information | NETREX Inc",
    "description": "Legal information about NETREX: company entities, registration details, intellectual property and links to our terms and policies."
  },
  "/privacy": {
    "title": "Privacy Policy | NETREX Inc",
    "description": "How NETREX collects, uses and protects personal data from website visitors and clients, and how to exercise your privacy rights."
  },
  "/terms": {
    "title": "Terms of Service | NETREX Inc",
    "description": "The terms that apply when you use the NETREX website or hire NETREX for design, development, marketing or AI services."
  }
};

export function getPageMeta(canonical: string): PageMeta | undefined {
  try {
    const path = new URL(canonical, "https://www.netrexinc.com").pathname.replace(/\/+$/, "") || "/";
    return PAGE_META[path];
  } catch {
    return undefined;
  }
}
