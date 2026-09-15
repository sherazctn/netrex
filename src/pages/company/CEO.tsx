import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Code2,
  GraduationCap,
  Globe2,
  Linkedin,
  MapPin,
  Quote,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import ceoPortrait from "@/assets/sheraz-khan-ceo.jpg";

const stats = [
  { end: 500, suffix: "+", label: "Projects Delivered" },
  { end: 9, suffix: "", label: "Global Offices" },
  { end: 92, suffix: "%", label: "Recurring Clients" },
  { end: 15, suffix: "+", label: "Years in Digital" },
];

const timeline = [
  {
    year: "2015 - 2016",
    title: "Front-End Craft & Freelance Beginnings",
    body: "Started as a self-taught front-end developer and designer, building websites for clients through Upwork and Fiverr while completing certifications in front-end web development, WordPress and SEO.",
    icon: Code2,
  },
  {
    year: "2016",
    title: "Senior Web Developer, Digital Tribe (Dubai)",
    body: "Moved into agency work in Dubai as a Senior Web Developer, delivering corporate, e-commerce and real-estate campaigns for regional brands - and learning how enterprise clients really buy.",
    icon: Briefcase,
  },
  {
    year: "2016 - 2019",
    title: "Founding NETREX",
    body: "Launched NETREX as a small, delivery-obsessed studio focused on one promise: work that performs, not just work that looks good. The first clients came entirely from referrals.",
    icon: Rocket,
  },
  {
    year: "2019 - 2023",
    title: "Scaling Across Borders",
    body: "Grew NETREX from a Dubai studio into a multi-country operation, adding mobile development, branding, e-commerce and performance marketing while formalising process and quality standards.",
    icon: Globe2,
  },
  {
    year: "2024 - 2026",
    title: "AI, Automation & a Global Footprint",
    body: "Led the shift into AI automation, GEO (generative engine optimisation) and data services, taking NETREX to nine offices with delivery teams serving clients across the UAE, US, UK, Canada, Australia, Germany, Saudi Arabia, Singapore and Pakistan.",
    icon: Sparkles,
  },
];

const expertise = [
  { title: "Digital Strategy", body: "Translating business goals into digital roadmaps that produce measurable pipeline, not vanity metrics." },
  { title: "Web & Product Engineering", body: "Hands-on background in WordPress, Shopify, Wix and modern front-end frameworks - still reviews architecture decisions personally." },
  { title: "Performance Marketing", body: "Google Ads and analytics certified; built the paid and organic playbooks NETREX runs for clients in nine markets." },
  { title: "Brand & Design Direction", body: "Design-trained founder who sets the creative bar on identity, UI and campaign work across the group." },
  { title: "AI & Automation", body: "Drives the AI agent, automation and GEO practice that now underpins a growing share of client engagements." },
  { title: "Global Operations", body: "Built distributed delivery teams and governance that let one standard of quality travel across time zones." },
];

const certifications = [
  { name: "Google Ads (AdWords)", issuer: "Google", year: "2017" },
  { name: "Google Analytics Certification", issuer: "Google Analytics", year: "2017" },
  { name: "Mobile Sites Certification", issuer: "Google", year: "2017" },
  { name: "Social Media Marketing Expert", issuer: "Expert Training Program", year: "2018" },
  { name: "Front End Developer", issuer: "freeCodeCamp", year: "2016" },
  { name: "WordPress Development", issuer: "Empower Pakistan", year: "2016" },
  { name: "Search Engine Optimization", issuer: "Empower Pakistan", year: "2015" },
  { name: "Front-End Web Development", issuer: "Udemy", year: "2015" },
  { name: "Microsoft Office Specialist", issuer: "Microsoft", year: "2017" },
];

const principles = [
  { icon: Target, title: "Client Satisfaction Above All", body: "Every process, review and hire is judged by one question: does it make the client's outcome better?" },
  { icon: Users, title: "Teams Over Hierarchy", body: "Small accountable teams with direct client contact beat layers of management every time." },
  { icon: Award, title: "Craft Is Non-Negotiable", body: "Nothing ships that the team would not put in its own portfolio." },
  { icon: Building2, title: "Build for the Long Term", body: "Retainers and referrals - not one-off projects - are the real scoreboard of a services business." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sheraz Khan",
  alternateName: "Muhammad Sheraz",
  jobTitle: "Founder & Chief Executive Officer",
  description:
    "Sheraz Khan is the Founder and CEO of NETREX Inc, a global digital agency headquartered in Dubai delivering web development, mobile apps, AI automation, branding, e-commerce and SEO across nine countries.",
  image: "https://www.netrexinc.com/og-sheraz-khan.jpg",
  url: "https://www.netrexinc.com/ceo",
  worksFor: {
    "@type": "Organization",
    name: "NETREX INC",
    url: "https://www.netrexinc.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of South Asia, Lahore" },
  knowsAbout: [
    "Digital strategy",
    "Web development",
    "AI automation",
    "Generative engine optimization",
    "Brand identity",
    "Performance marketing",
  ],
  sameAs: [
    "https://ae.linkedin.com/in/sherazcs",
    "https://www.behance.net/mr-sheraz",
    "https://www.instagram.com/netrex.official",
  ],
};

const CEO = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sheraz Khan | Founder & CEO of NETREX Inc"
        description="Meet Sheraz Khan, Founder & CEO of NETREX Inc - his journey from front-end developer in Dubai to leading a global digital agency across 9 countries, plus his leadership philosophy, expertise and credentials."
        canonical="https://www.netrexinc.com/ceo"
        schema={schema}
      />
      <Header />

      <main>
        <PageHero
          badge="Leadership"
          title="Sheraz Khan,"
          highlight="Founder & CEO"
          description="From a self-taught front-end developer to the founder of a digital agency operating across nine countries - the story, the thinking, and the standards behind NETREX."
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="https://ae.linkedin.com/in/sherazcs" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="group">
                <Linkedin className="h-4 w-4" />
                View LinkedIn Profile
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="group">
                Connect With Sheraz
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </PageHero>

        {/* Profile + intro */}
        <section className="section-padding">
          <div className="container-wide grid items-start gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
                <img
                  src={ceoPortrait}
                  alt="Sheraz Khan, Founder and CEO of NETREX Inc, in Dubai"
                  className="relative w-full rounded-[1.75rem] border border-border object-cover shadow-xl"
                />
              </div>

              <div className="mt-6 space-y-3 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span>Founder, Director &amp; CEO - NETREX Inc</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Based in Dubai, United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span>Computer Science - University of South Asia, Lahore</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Globe2 className="h-4 w-4 text-primary" />
                  <span>Leads delivery teams across 9 countries</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                The Builder Behind <span className="text-primary">NETREX</span>
              </h2>

              <div className="mt-6 space-y-5 text-muted-foreground">
                <p>
                  Sheraz Khan started where most agency owners never do:{" "}
                  <strong className="text-foreground">writing the code himself</strong>. A certified
                  web and WordPress developer with a computer science background, he spent his early
                  career building business, corporate, portfolio and e-commerce websites for clients
                  on Upwork and Fiverr - then took that craft into the Dubai agency world as a Senior
                  Web Developer.
                </p>
                <p>
                  Working on real-estate and corporate campaigns for regional brands taught him
                  something that shaped everything after:{" "}
                  <em>clients do not buy design, they buy outcomes</em>. In 2016 he founded NETREX
                  around that idea - a studio where strategy, design, engineering and marketing sit
                  in the same room and answer for the same result.
                </p>
                <p>
                  A decade later, NETREX operates from{" "}
                  <strong className="text-foreground">nine offices</strong> and delivers web
                  development, mobile apps, branding, e-commerce, SEO, GEO and AI automation for
                  clients across the UAE, United States, United Kingdom, Canada, Australia, Germany,
                  Saudi Arabia, Singapore and Pakistan. Sheraz still reviews architecture and creative
                  direction personally on flagship engagements.
                </p>
                <p>
                  He is an active voice in the region's digital community, sharing hiring, design and
                  growth insight with an audience of nearly{" "}
                  <strong className="text-foreground">9,000 followers</strong> on LinkedIn, and
                  publishes design and campaign work publicly on Behance.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center">
                    <div className="font-display text-2xl font-bold text-primary md:text-3xl">
                      <CountUpNumber end={s.end} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quote band */}
        <section className="relative overflow-hidden bg-foreground py-20 md:py-24">
          <div className="absolute -top-24 left-1/4 h-[360px] w-[360px] rounded-full bg-primary/20 blur-[130px]" aria-hidden="true" />
          <div className="container-tight relative z-10 text-center">
            <Quote className="mx-auto mb-6 h-10 w-10 text-primary" />
            <blockquote className="font-display text-2xl font-medium leading-relaxed text-background md:text-3xl">
              "My vision for NETREX is simple - deliver{" "}
              <span className="text-primary">world-class digital services</span> to every corner of
              the globe, guided by one principle: client satisfaction. We don't just build websites,
              apps or campaigns - we craft experiences our clients remember for a lifetime."
            </blockquote>
            <div className="mt-8">
              <div className="font-display text-lg italic text-background">Sheraz Khan</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-background/60">
                Founder &amp; CEO - NETREX Inc
              </div>
            </div>
          </div>
        </section>

        {/* Career timeline */}
        <section className="section-padding">
          <div className="container-tight">
            <div className="mb-14 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Career Journey</span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                From First Line of Code to <span className="text-primary">Nine Countries</span>
              </h2>
            </div>

            <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border md:before:left-1/2">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative pl-14 md:grid md:grid-cols-2 md:gap-10 md:pl-0"
                >
                  <div className={i % 2 === 0 ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"}>
                    <div className="text-sm font-semibold text-primary">{item.year}</div>
                    <h3 className="mt-1 font-display text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.body}</p>
                  </div>
                  <div className={i % 2 === 0 ? "" : "md:order-1"} />
                  <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:left-1/2 md:-translate-x-1/2">
                    <item.icon className="h-4 w-4 text-primary" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="mb-14 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Areas of Expertise</span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                What He <span className="text-primary">Personally Leads</span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-display text-lg font-bold">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership principles */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="mb-14 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Leadership Philosophy</span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                Four Rules He <span className="text-primary">Runs the Company By</span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex gap-5 rounded-2xl border border-border bg-card p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <p.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & certifications */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Education</span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                Credentials &amp; <span className="text-primary">Certifications</span>
              </h2>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-display text-lg font-bold">University of South Asia</h3>
                <p className="text-sm text-primary">Computer Science - Lahore, Pakistan</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Active in programming and sports societies; combined formal computer science study
                  with a decade of live client delivery.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <Award className="h-5 w-5 text-primary" />
                    <div className="mt-3 font-semibold leading-snug">{c.name}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {c.issuer} - {c.year}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-tight rounded-[2rem] border border-border bg-card p-10 text-center md:p-14">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Want to Talk Strategy <span className="text-primary">Directly?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Sheraz personally reviews enterprise and partnership enquiries. Tell us about your
              project and we'll route it to the right team - or to him.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/leadership">
                <Button variant="outline" size="lg">
                  Meet the Full Leadership Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CEO;
