import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Guide = {
  name: string;
  what: string;
  steps: string[];
  service: { label: string; href: string };
  faqs: { q: string; a: string }[];
};

const ESTIMATE_NOTE =
  "The result is an estimate built from the answers you give. Treat it as a starting point for planning, not a guarantee; real results depend on your market, offer and execution.";

const GUIDES: Record<string, Guide> = {
  "/tools/website-roi": {
    name: "Website ROI Calculator",
    what: "This free calculator estimates what a faster, better converting website could be worth to your business, using your current traffic, conversion rate and average order or deal value, and how long a redesign would take to pay for itself.",
    steps: ["Enter your monthly visitors and current conversion rate.", "Add your average order or deal value.", "Compare today's revenue with the improved scenario and the payback period."],
    service: { label: "Website design & development", href: "/services/web-development" },
    faqs: [
      { q: "How is website ROI calculated?", a: "Website ROI compares the extra revenue a redesign is expected to bring (more visitors converting, at your average order value) with what the redesign costs. " + ESTIMATE_NOTE },
      { q: "When does a website redesign pay off?", a: "A redesign usually pays off fastest when the current site is slow, hard to use on mobile or unclear about what you sell, because small gains in conversion rate apply to every visitor you already get." },
      { q: "Can NETREX redesign my website?", a: "Yes. NETREX Inc designs and builds business websites in React, WordPress, Wix and Webflow for clients in the USA, UAE, UK, Canada, Australia and Europe." },
    ],
  },
  "/tools/seo-roi": {
    name: "SEO ROI Calculator",
    what: "This free calculator estimates the organic traffic, leads and revenue you may be missing in Google and in AI answers such as ChatGPT and Google AI Overviews, based on a short set of questions about your site and market.",
    steps: ["Answer the questions about your current SEO situation.", "Add your typical customer value.", "Review the traffic and revenue gap and the actions that close it."],
    service: { label: "SEO & digital marketing", href: "/services/digital-marketing" },
    faqs: [
      { q: "How do you measure SEO ROI?", a: "SEO ROI compares the value of the extra organic visitors who become customers with what you spend on SEO over the same period. " + ESTIMATE_NOTE },
      { q: "How long does SEO take to show results?", a: "Most sites see early movement in rankings within a few months, while meaningful traffic and lead growth usually builds over six to twelve months, depending on competition and the state of the site." },
      { q: "What is the difference between SEO and GEO?", a: "SEO earns visibility in classic search results. GEO (generative engine optimization) makes your business easy for AI assistants to understand, cite and recommend, through clear facts, structured data and trusted mentions." },
    ],
  },
  "/tools/marketing-roi": {
    name: "Marketing ROI Calculator",
    what: "This free calculator estimates the return on your ad and marketing spend, how many leads and customers that budget should produce, and how long it takes to earn the money back.",
    steps: ["Enter your monthly budget and cost per click or lead.", "Add your close rate and average customer value.", "See leads, customers, return on ad spend and payback."],
    service: { label: "Digital marketing", href: "/services/digital-marketing" },
    faqs: [
      { q: "What is a good marketing ROI?", a: "It depends on your margins and customer lifetime value. A campaign that returns more gross profit than it costs is profitable; many businesses aim for several times their spend in revenue. " + ESTIMATE_NOTE },
      { q: "What is ROAS?", a: "Return on ad spend (ROAS) is the revenue generated for every unit of currency spent on ads. A ROAS of 4 means 4 dollars of revenue for every dollar spent." },
      { q: "Does NETREX run ad campaigns?", a: "Yes. NETREX Inc plans and runs Google Ads, Meta and LinkedIn campaigns alongside SEO for clients in the USA, UAE and GCC, UK, Canada, Australia and Europe." },
    ],
  },
  "/tools/branding-roi": {
    name: "Branding ROI Calculator",
    what: "This free calculator estimates what a stronger brand could add through higher prices, better conversion and more referrals, so you can weigh a rebrand against its cost.",
    steps: ["Enter your current revenue and pricing.", "Choose the improvements a stronger brand could bring.", "Compare the projected value with the cost of a rebrand."],
    service: { label: "Branding & identity", href: "/services/branding" },
    faqs: [
      { q: "Can you measure the ROI of branding?", a: "Partly. Branding shows up in measurable numbers such as the price customers accept, conversion rate and repeat or referral business. " + ESTIMATE_NOTE },
      { q: "When should a company rebrand?", a: "Common triggers are a brand that no longer matches the quality of the product, a move into new markets or price points, a merger, or a name and identity that are hard to remember or protect." },
      { q: "What does a NETREX branding project include?", a: "Brand strategy, logo design, colour and type systems, brand guidelines and the key assets you need to launch, delivered as editable files." },
    ],
  },
  "/tools/ecommerce-roi": {
    name: "E-commerce ROI Calculator",
    what: "This free calculator estimates the extra revenue an optimised online store could earn from better conversion, higher average order value and fewer abandoned carts.",
    steps: ["Enter your monthly sessions, conversion rate and average order value.", "Pick realistic improvement targets.", "See the monthly and yearly revenue difference."],
    service: { label: "E-commerce development", href: "/services/ecommerce" },
    faqs: [
      { q: "What is a good e-commerce conversion rate?", a: "Many online stores convert between 1% and 3% of visitors, with large differences by industry, price point and traffic source. " + ESTIMATE_NOTE },
      { q: "How can I increase average order value?", a: "Bundles, product recommendations, free-shipping thresholds and clear upsells at checkout are the most common ways to raise average order value." },
      { q: "Which platforms does NETREX build stores on?", a: "Shopify, Wix Stores, WooCommerce and custom headless storefronts, with payments, shipping, taxes and multi-currency set up for your markets." },
    ],
  },
  "/tools/mobile-app-roi": {
    name: "Mobile App ROI Calculator",
    what: "This free calculator estimates whether a mobile app is worth building for your business, from expected users, engagement and revenue per user against the cost of building and running it.",
    steps: ["Enter expected downloads and active users.", "Add revenue per user or cost savings.", "Compare the projected return with build and running costs."],
    service: { label: "Mobile app development", href: "/services/mobile-app" },
    faqs: [
      { q: "How do I calculate mobile app ROI?", a: "Compare the revenue or savings the app creates (active users multiplied by value per user) with the cost to design, build, launch and maintain it. " + ESTIMATE_NOTE },
      { q: "Should I build a native or cross-platform app?", a: "Cross-platform frameworks such as React Native and Flutter suit most business apps and reach iOS and Android from one codebase; native development fits apps that need deep device features or maximum performance." },
      { q: "Does NETREX publish apps to the App Store and Google Play?", a: "Yes. NETREX Inc handles design, development, testing and App Store and Google Play submission, and supports the app after launch." },
    ],
  },
  "/tools/ai-copy-generator": {
    name: "AI Website Copy Generator",
    what: "This free tool drafts website headlines, page copy and SEO titles and descriptions from a short brief about your business, so you have a starting point to edit rather than a blank page.",
    steps: ["Describe your business, audience and offer.", "Choose the type of copy you need.", "Edit the draft so it matches your voice and facts."],
    service: { label: "Content & digital marketing", href: "/services/digital-marketing" },
    faqs: [
      { q: "Can I use AI-written copy on my website?", a: "Yes, as a draft. Check every claim, add your own proof (results, reviews, credentials) and edit for your voice before publishing; search engines reward helpful, accurate content however it is written." },
      { q: "Is the generated copy SEO-friendly?", a: "The tool aims for clear titles and descriptions of a sensible length, but rankings also depend on your site's speed, structure, links and how well the page answers what people search for." },
      { q: "Can NETREX write the copy for me?", a: "Yes. NETREX Inc writes website and landing page copy as part of web design, SEO and marketing projects." },
    ],
  },
  "/tools/ai-readiness": {
    name: "AI Readiness Score",
    what: "This free assessment scores how ready your business is to use AI, across data, processes, people and tools, and points to the first steps that would make the biggest difference.",
    steps: ["Answer a few questions about your data, workflows and team.", "Get a readiness score with a breakdown by area.", "Use the recommendations to plan your first AI project."],
    service: { label: "AI automation", href: "/services/ai-automation" },
    faqs: [
      { q: "What does AI readiness mean?", a: "AI readiness is how prepared a business is to use AI well: clean and accessible data, documented processes, a team willing to adopt new tools, and systems that can connect to AI services. " + ESTIMATE_NOTE },
      { q: "Where should a small business start with AI?", a: "Start with one repetitive, high-volume task, such as answering common customer questions, qualifying leads or processing documents, and measure the time saved before expanding." },
      { q: "Does NETREX build AI agents and automations?", a: "Yes. NETREX Inc builds AI chatbots, AI agents and workflow automations connected to your website, CRM, WhatsApp and internal tools." },
    ],
  },
  "/tools/ai-automation-savings": {
    name: "AI Automation Savings Calculator",
    what: "This free calculator estimates the hours and money your team could save each month by automating repetitive work such as data entry, follow-ups, reporting and customer replies.",
    steps: ["Answer questions about repetitive tasks and team size.", "Add a typical hourly cost.", "See estimated hours and cost saved per month and year."],
    service: { label: "AI automation", href: "/services/ai-automation" },
    faqs: [
      { q: "How much can automation save a business?", a: "Savings depend on how much time repetitive tasks take today and how much of that work can be automated reliably. " + ESTIMATE_NOTE },
      { q: "Which tasks are easiest to automate?", a: "Tasks with clear rules and digital inputs: copying data between systems, sending reminders and follow-ups, generating routine reports and answering frequently asked questions." },
      { q: "Will automation replace my staff?", a: "In most businesses automation takes over repetitive steps so people can spend more time on customers, sales and decisions that need judgement." },
    ],
  },
  "/tools/ai-chatbot-roi": {
    name: "AI Chatbot ROI Calculator",
    what: "This free calculator estimates what an AI chatbot on your website or WhatsApp could save in support time and add in captured leads, based on your enquiry volume and response times.",
    steps: ["Answer questions about your enquiry volume and channels.", "Add your support cost and lead value.", "See estimated savings, extra leads and payback."],
    service: { label: "AI chatbots & automation", href: "/services/ai-automation" },
    faqs: [
      { q: "Is an AI chatbot worth it for a small business?", a: "It usually is when you receive many repeat questions or enquiries outside working hours, since a chatbot answers instantly and passes qualified leads to your team. " + ESTIMATE_NOTE },
      { q: "Can a chatbot work on WhatsApp?", a: "Yes. AI assistants can answer on WhatsApp Business as well as on your website, using your own product, pricing and policy information." },
      { q: "Does NETREX build AI chatbots?", a: "Yes. NETREX Inc builds AI chatbots for websites and WhatsApp, trained on your business information and connected to your CRM or booking tools." },
    ],
  },
};

/** Explains each free tool in plain text with FAQs, so the page has content search engines and AI assistants can read and cite. */
export function ToolGuide() {
  const { pathname } = useLocation();
  const guide = GUIDES[pathname.replace(/\/$/, "")];
  if (!guide) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="section-padding border-t border-border">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">About this tool</span>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">How the {guide.name} works</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{guide.what}</p>
          <ol className="mt-6 space-y-3">
            {guide.steps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-muted-foreground">{s}</span>
              </li>
            ))}
          </ol>
          <Link
            to={guide.service.href}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            Explore {guide.service.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
            {guide.faqs.map((f) => (
              <div key={f.q} className="p-5">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
