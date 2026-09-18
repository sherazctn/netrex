import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Braces,
  Building2,
  Camera,
  Car,
  CheckCircle2,
  Code2,
  ExternalLink,
  Facebook,
  GraduationCap,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Mountain,
  Server,
  ShieldCheck,
  ShoppingBag,
  Workflow,
  Youtube,
} from "lucide-react";
import ceoPortrait from "@/assets/sheraz-khan-ceo.jpg";

const socialProfiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sherazcs", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/sherazcs", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/sherazcs", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@SherysEscapes", icon: Youtube },
];

const professionalFocus = [
  { title: "Digital engineering", copy: "Translating business requirements into maintainable websites, applications and digital platforms.", icon: Code2 },
  { title: "Technology leadership", copy: "Guiding platform selection, delivery standards and technical decision-making across NETREX engagements.", icon: Server },
  { title: "Business transformation", copy: "Connecting product strategy, customer experience and digital operations to measurable business goals.", icon: BriefcaseBusiness },
  { title: "Client partnerships", copy: "Building long-term working relationships through clear communication, documented scope and accountable delivery.", icon: Building2 },
];

const capabilities = [
  { name: "React JS", icon: Braces },
  { name: "Node.js", icon: Server },
  { name: "PHP", icon: Code2 },
  { name: "Java & C++", icon: Code2 },
  { name: "WordPress", icon: Layers3 },
  { name: "Shopify", icon: ShoppingBag },
  { name: "Wix Studio", icon: Workflow },
  { name: "Webflow", icon: Workflow },
];

const journey = [
  { period: "2015-2018", title: "Technical foundation", copy: "Built an early foundation in front-end development, WordPress, search, analytics and digital marketing through hands-on practice and professional courses." },
  { period: "2016", title: "NETREX established", copy: "Began developing NETREX around a practical engineering approach: understand the business problem, select the right platform and deliver with clear ownership." },
  { period: "2019-2023", title: "Computer science education", copy: "Studied Computer Science at the University of South Asia in Lahore while continuing to develop practical technology and business leadership experience." },
  { period: "Present", title: "Founder and CEO, NETREX", copy: "Leads NETREX strategy, technology direction and client delivery from Dubai, with professional ties to Lahore and an international service outlook." },
];

const credentials = [
  "Front End Developer - freeCodeCamp, 2016",
  "WordPress Development - Empower Pakistan, 2016",
  "Microsoft Office Specialist - 2017",
  "Google Ads, Analytics and Mobile Sites training - 2017",
  "Social Media Marketing Expert training - 2018",
];

const principles = [
  "Start with the business objective, not the technology trend.",
  "Define scope, ownership and acceptance criteria before delivery begins.",
  "Communicate progress clearly and raise risks early.",
  "Build maintainable systems that clients can operate with confidence.",
];

const interests = [
  { title: "Automotive travel", copy: "Road journeys and automotive experiences provide time to observe, reset and find new perspectives.", icon: Car },
  { title: "Mountain exploration", copy: "Exploring northern Pakistan, including the Swat Valley, reflects a lasting interest in nature and travel.", icon: Mountain },
  { title: "Content creation", copy: "Documents selected journeys and experiences through the personal Shery's Escapes channel.", icon: Camera },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sheraz Khan",
  alternateName: "Muhammad Sheraz",
  jobTitle: "Founder and Chief Executive Officer",
  url: "https://www.netrexinc.com/ceo",
  image: "https://www.netrexinc.com/assets/sheraz-khan-ceo.jpg",
  description: "Sheraz Khan is the Founder and CEO of NETREX, leading digital engineering, technology strategy and client delivery.",
  worksFor: {
    "@type": "Organization",
    name: "NETREX INC",
    url: "https://www.netrexinc.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of South Asia",
  },
  knowsAbout: capabilities.map((item) => item.name),
  sameAs: socialProfiles.map((profile) => profile.href),
};

const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CEO = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sheraz Khan | Founder & CEO of NETREX Inc"
        description="Professional profile of Sheraz Khan, Founder and CEO of NETREX. Explore his technology leadership, education, professional journey, capabilities and public profiles."
        canonical="https://www.netrexinc.com/ceo"
        schema={schema}
      />
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-border bg-background pb-14 pt-36 md:pb-20 md:pt-44">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-secondary/50" />
            <div className="absolute left-0 top-28 h-px w-full bg-border/70" />
          </div>

          <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-primary">
                <span className="h-px w-9 bg-primary" />
                Founder &amp; Chief Executive Officer
              </div>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Sheraz Khan
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-foreground md:text-xl">
                Technology entrepreneur leading NETREX through engineering discipline, responsible delivery and long-term client partnerships.
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                Based in Dubai, UAE, with professional and educational roots in Lahore, Pakistan. Sheraz oversees NETREX strategy, technical direction and client outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-foreground hover:text-background">
                  <a href="#contact">Contact Sheraz <ArrowRight /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border bg-background text-foreground hover:border-primary hover:bg-secondary hover:text-foreground">
                  <a href="#profile">View professional profile <ArrowDown /></a>
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap gap-2" aria-label="Personal social profiles">
                {socialProfiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <profile.icon className="h-4 w-4" />
                    {profile.label}
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.65 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={ceoPortrait}
                    alt="Sheraz Khan, Founder and CEO of NETREX"
                    className="h-full w-full object-cover object-top"
                    fetchPriority="high"
                  />
                </div>
                <div className="border-t border-border bg-card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-display text-xl font-bold">Sheraz Khan</div>
                      <div className="mt-1 text-sm text-muted-foreground">Founder &amp; CEO, NETREX INC.</div>
                    </div>
                    <BadgeCheck className="h-7 w-7 shrink-0 text-primary" aria-label="Official NETREX leadership profile" />
                  </div>
                  <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" /> Dubai, United Arab Emirates
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/40 py-8">
          <div className="container-wide grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {[
              { label: "Current role", value: "Founder & CEO, NETREX", icon: Building2 },
              { label: "Education", value: "Computer Science", icon: GraduationCap },
              { label: "Professional base", value: "Dubai, UAE", icon: MapPin },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 bg-card p-5">
                <item.icon className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="text-xs font-semibold uppercase text-muted-foreground">{item.label}</div>
                  <div className="mt-1 font-semibold text-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="profile" className="scroll-mt-28 py-20 md:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal>
              <div className="text-sm font-bold uppercase text-primary">Executive profile</div>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Engineering perspective. Business accountability.</h2>
            </Reveal>
            <Reveal className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                Sheraz Khan is the Founder and Chief Executive Officer of NETREX, a digital engineering company established in 2016. He leads company strategy, technology direction and the standards used to plan and deliver client work.
              </p>
              <p>
                His background combines formal Computer Science study with practical experience across web development, commerce platforms, user experience, digital marketing and business operations. This combination shapes a leadership style focused on useful technology rather than technology for its own sake.
              </p>
              <p>
                At NETREX, his responsibilities include executive oversight, solution direction, project governance, client communication and continuous improvement of the company's delivery practices.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-foreground py-20 text-background md:py-28">
          <div className="container-wide">
            <Reveal className="max-w-3xl">
              <div className="text-sm font-bold uppercase text-primary">Leadership at NETREX</div>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Professional focus</h2>
              <p className="mt-5 text-lg leading-8 text-background/70">The CEO role is centered on the quality, clarity and commercial relevance of every NETREX engagement.</p>
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-background/15 bg-background/15 md:grid-cols-2">
              {professionalFocus.map((item) => (
                <Reveal key={item.title} className="bg-foreground p-7 md:p-9">
                  <item.icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-6 text-xl font-bold text-background">{item.title}</h3>
                  <p className="mt-3 leading-7 text-background/70">{item.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-wide grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="text-sm font-bold uppercase text-primary">Professional journey</div>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">From hands-on development to executive leadership</h2>
              <p className="mt-5 leading-7 text-muted-foreground">A career path shaped by continuous learning, practical delivery and growing responsibility at NETREX.</p>
            </Reveal>
            <div className="border-l border-border">
              {journey.map((item) => (
                <Reveal key={`${item.period}-${item.title}`} className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-2 top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary" />
                  <div className="text-sm font-bold text-primary">{item.period}</div>
                  <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
          <div className="container-wide">
            <Reveal className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-bold uppercase text-primary">Technical and platform capabilities</div>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">A leadership foundation grounded in delivery</h2>
              <p className="mt-5 leading-7 text-muted-foreground">Technologies and platforms represented in Sheraz's public professional background and NETREX service delivery.</p>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {capabilities.map((item) => (
                <Reveal key={item.name} className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-border bg-card p-4 text-center">
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="mt-3 text-sm font-semibold">{item.name}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="rounded-lg border border-border bg-card p-7 md:p-10">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <div className="mt-7 text-sm font-bold uppercase text-primary">Leadership principles</div>
              <h2 className="mt-2 font-display text-3xl font-bold">How Sheraz leads NETREX</h2>
              <ul className="mt-7 space-y-4">
                {principles.map((principle) => (
                  <li key={principle} className="flex gap-3 leading-7 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    {principle}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="rounded-lg border border-border bg-card p-7 md:p-10">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div className="mt-7 text-sm font-bold uppercase text-primary">Education and learning</div>
              <h2 className="mt-2 font-display text-3xl font-bold">Publicly listed credentials</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Sheraz's public professional profile lists Computer Science study at the University of South Asia and the following training. These entries are presented as profile-listed credentials, not independent endorsements by NETREX.
              </p>
              <ul className="mt-6 space-y-3">
                {credentials.map((credential) => (
                  <li key={credential} className="flex gap-3 text-sm leading-6 text-foreground">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {credential}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
          <div className="container-wide">
            <Reveal className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-bold uppercase text-primary">Beyond the office</div>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Interests that shape perspective</h2>
              <p className="mt-5 leading-7 text-muted-foreground">Personal interests shared here to provide a balanced view of the person behind NETREX leadership.</p>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {interests.map((interest) => (
                <Reveal key={interest.title} className="rounded-lg border border-border bg-card p-7">
                  <interest.icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-5 text-xl font-bold">{interest.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{interest.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-20 md:py-28">
          <div className="container-tight">
            <Reveal className="rounded-lg border border-border bg-card p-7 md:p-12">
              <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                <div>
                  <div className="text-sm font-bold uppercase text-primary">Official contact</div>
                  <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-5xl">Connect with Sheraz through NETREX</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                    For business, banking, immigration or compliance correspondence related to Sheraz's role at NETREX, please use the official company email below.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
                    <a href="mailto:info@netrexinc.com" className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4 text-primary" /> info@netrexinc.com</a>
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Dubai, UAE</span>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-foreground hover:text-background">
                  <a href="mailto:info@netrexinc.com">Contact NETREX <ArrowRight /></a>
                </Button>
              </div>
              <div className="mt-10 border-t border-border pt-7">
                <div className="mb-4 text-xs font-bold uppercase text-muted-foreground">Personal public profiles</div>
                <div className="flex flex-wrap gap-3">
                  {socialProfiles.map((profile) => (
                    <a key={profile.label} href={profile.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold hover:border-primary hover:text-primary">
                      <profile.icon className="h-4 w-4" /> {profile.label} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CEO;