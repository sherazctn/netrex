import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BrandsWeWork } from "@/components/home/BrandsWeWork";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe2, Users, Lightbulb, Target, Heart, Trophy, Star, GraduationCap, Briefcase, Shield, Zap, Quote, Rocket, CheckCircle2, Sparkles, TrendingUp, Layers, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import ceoPortrait from "@/assets/sheraz-khan-ceo.png.asset.json";
import gurpreetPortrait from "@/assets/gurpreet-singh.png.asset.json";
import sajjadPortrait from "@/assets/sajjad-khan.jpg.asset.json";

const values = [
{
  icon: Lightbulb,
  title: "Innovation",
  description: "We embrace new ideas and cutting-edge technologies to deliver solutions that set you apart."
},
{
  icon: Target,
  title: "Excellence",
  description: "We strive for the highest quality in everything we do, exceeding expectations consistently."
},
{
  icon: Heart,
  title: "Integrity",
  description: "We maintain honesty and transparency in all our interactions and business dealings."
},
{
  icon: Users,
  title: "Collaboration",
  description: "We work closely with our clients as partners, not just service providers."
}];


const team = [
{
  name: "Sheraz Khan",
  role: "Founder & CEO",
  image: ceoPortrait.url,
  bio: "Visionary leader with 15+ years in digital transformation"
},
{
  name: "Gurpreet Singh",
  role: "CMO",
  image: gurpreetPortrait.url,
  bio: "Growth strategist with expertise in global marketing campaigns"
},
{
  name: "Sajjad Khan",
  role: "COO",
  image: sajjadPortrait.url,
  bio: "Operations expert ensuring seamless project delivery worldwide"
},
{
  name: "Ahmed Hassan",
  role: "CTO",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  bio: "Tech expert specializing in scalable cloud architectures"
},
{
  name: "Sarah Mitchell",
  role: "Creative Director",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  bio: "Award-winning designer passionate about user experiences"
},
{
  name: "Fatima Ali",
  role: "HR Director",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  bio: "People-first leader building high-performing global teams"
},
{
  name: "David Park",
  role: "Lead Developer",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  bio: "Full-stack engineer with 10+ years building enterprise solutions"
},
{
  name: "Ayesha Malik",
  role: "Project Manager",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  bio: "PMP-certified PM ensuring on-time, on-budget delivery"
}];


const boardMembers = [
{
  name: "Dr. Rashid Khan",
  role: "Chairman of the Board",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  bio: "Serial entrepreneur & investor with 25+ years scaling MENA tech firms"
},
{
  name: "Amelia Roberts",
  role: "Independent Director",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  bio: "Former VP at a global consultancy; expert in enterprise digital strategy"
},
{
  name: "Yusuf Al-Mansouri",
  role: "Board Advisor - Finance",
  image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop",
  bio: "CFO-level advisor guiding financial strategy across 9 offices"
},
{
  name: "Elena Petrova",
  role: "Board Advisor - Product",
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  bio: "Ex-FAANG PM shaping our AI product roadmap for 2027 and beyond"
},
{
  name: "Rajesh Menon",
  role: "Board Advisor - Technology",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  bio: "Cloud architect steering our global infrastructure & AI investments"
},
{
  name: "Aisha Al-Suwaidi",
  role: "Board Advisor - Governance",
  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
  bio: "Governance & ESG leader ensuring compliance across 9 jurisdictions"
}];


const milestones = [
{ year: "2016", event: "Founded in Dubai, UAE", icon: Star },
{ year: "2017", event: "Expanded to Pakistan office", icon: Globe2 },
{ year: "2018", event: "100th project milestone", icon: Trophy },
{ year: "2019", event: "Opened USA & UK offices", icon: Globe2 },
{ year: "2020", event: "Google Developers recognition", icon: Award },
{ year: "2021", event: "Canada & Australia expansion", icon: Globe2 },
{ year: "2023", event: "500+ projects completed", icon: Briefcase },
{ year: "2024", event: "Top-rated on Clutch & Upwork", icon: Star }];


const awards = [
{ title: "Top Rated Plus", platform: "Upwork", year: "2024", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/upwork.svg" },
{ title: "Top Developer", platform: "Clutch", year: "2024", logo: "/lovable-uploads/23f9b75e-d0f6-430d-820a-f59173969efa.png" },
{ title: "Agency Partner", platform: "Google Developers", year: "2023", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg" },
{ title: "Top Rated Seller", platform: "Fiverr", year: "2024", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fiverr.svg" },
{ title: "Rising Star", platform: "DesignRush", year: "2023", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dribbble.svg" },
{ title: "Best Web Agency", platform: "GoodFirms", year: "2024", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/g2.svg" },
{ title: "Meta Business Partner", platform: "Meta", year: "2025", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meta.svg" },
{ title: "AWS Select Partner", platform: "Amazon Web Services", year: "2025", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg" },
{ title: "Featured Studio", platform: "Awwwards", year: "2025", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/awwwards.svg" }];


const certifications = [
"Google Cloud Partner",
"AWS Solutions Architect",
"ISO 27001 Compliant",
"Microsoft Gold Partner",
"Meta Business Partner",
"Shopify Partner"];


const processSteps = [
{ step: 1, title: "Proposal", description: "We analyze your requirements and present a tailored proposal", icon: Lightbulb },
{ step: 2, title: "Agreement", description: "We finalize terms, timeline, and project milestones", icon: Shield },
{ step: 3, title: "Development", description: "Our team builds your solution with regular updates", icon: Zap },
{ step: 4, title: "Complete", description: "Thorough QA testing and client review rounds", icon: Target },
{ step: 5, title: "Deployment", description: "Launch to production with zero downtime", icon: Globe2 },
{ step: 6, title: "Support", description: "Ongoing maintenance and dedicated support", icon: Heart }];


const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About NETREX Inc | Global Digital Agency Since 2016"
        description="Meet NETREX Inc: our story, mission, leadership and global team delivering web, mobile, AI and marketing solutions across 9 countries since 2016."
        canonical="https://netrex.lovable.app/about"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}>
                
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  About NETREX
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Where Innovation{" "}
                  <span className="text-primary">Meets Reality</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Since 2016, NETREX has been at the forefront of digital innovation, 
                  helping businesses worldwide transform their ideas into powerful digital solutions. 
                  With offices across 6 countries, we bring global expertise to every project.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                      Work With Us
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button variant="outline" size="lg">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4">
                
                <div className="p-6 rounded-3xl bg-primary text-white text-center">
                  <div className="text-4xl font-display font-bold mb-2">
                    <CountUpNumber end={500} suffix="+" />
                  </div>
                  <div className="text-white/80">Projects</div>
                </div>
                <div className="p-6 rounded-3xl bg-card border border-border text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-2">
                    <CountUpNumber end={8} suffix="+" />
                  </div>
                  <div className="text-muted-foreground">Years</div>
                </div>
                <div className="p-6 rounded-3xl bg-card border border-border text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-2">
                    <CountUpNumber end={6} />
                  </div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div className="p-6 rounded-3xl bg-accent text-white text-center">
                  <div className="text-4xl font-display font-bold mb-2">
                    <CountUpNumber end={200} suffix="+" />
                  </div>
                  <div className="text-white/80">Clients</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
          {/* Decorative background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ceo-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ceo-grid)" />
            </svg>
          </div>

          <div className="container-wide relative z-10">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                  Leadership
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
                A Word From Our{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  CEO
                </span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Rooted in one promise - client satisfaction, always.
              </p>
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-6xl mx-auto relative"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 rounded-[2rem] blur-2xl opacity-60" />

              <div className="relative grid lg:grid-cols-12 gap-0 bg-card/95 backdrop-blur-sm border border-border/50 rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Portrait */}
                <div className="lg:col-span-5 relative bg-gradient-to-br from-primary/5 via-background to-primary/10 p-6 lg:p-8 flex items-center justify-center">
                  <div className="relative w-full">
                    <div className="absolute -inset-3 bg-gradient-to-tr from-primary/50 to-primary/20 rounded-[1.75rem] blur-xl opacity-70" />
                    <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden ring-1 ring-border/60 shadow-2xl">
                      <img
                        src={ceoPortrait.url}
                        alt="Sheraz Khan, Founder & CEO of NETREX Inc"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Signature plate */}
                      <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-md rounded-2xl p-4 border border-border/60 shadow-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shrink-0">
                            <span className="text-white font-display font-bold text-sm">SK</span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-display font-bold text-foreground text-base leading-tight truncate">
                              Sheraz Khan
                            </div>
                            <div className="text-muted-foreground text-xs truncate">
                              Founder &amp; CEO, NETREX Inc
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Floating quote badge */}
                    <div className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-xl rotate-6">
                      <Quote className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="lg:col-span-7 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />

                  <blockquote className="space-y-5">
                    <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground font-medium">
                      My vision for NETREX is simple - deliver{" "}
                      <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-bold">
                        world-class digital services
                      </span>{" "}
                      to every corner of the globe, guided by one principle:{" "}
                      <span className="text-primary font-bold">client satisfaction</span>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      We don't just build websites, apps, or campaigns - we craft{" "}
                      <span className="font-semibold text-foreground">experiences</span> our clients
                      remember for a lifetime. Every project is a partnership, every deadline a
                      promise, and every launch a moment we celebrate together.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      That commitment is why{" "}
                      <span className="font-semibold text-foreground">
                        92% of our clients return
                      </span>{" "}
                      - and why teams in Dubai, New York, London, and beyond choose NETREX as their
                      long-term digital partner.
                    </p>
                  </blockquote>

                  {/* Divider */}
                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {[
                      { end: 92, suffix: "%", label: "Recurring Clients" },
                      { end: 9, suffix: "", label: "Global Offices" },
                      { end: 15, suffix: "+", label: "Years Leading" },
                    ].map((stat, i) => (
                      <div key={stat.label} className="group">
                        <div className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent mb-1">
                          <CountUpNumber end={stat.end} suffix={stat.suffix} />
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground font-medium leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Signature */}
                  <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="flex-1">
                      <div className="font-display italic text-xl text-foreground">
                        Sheraz Khan
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">
                        Founder &amp; CEO - NETREX Inc
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button variant="hero" size="sm" className="group">
                        Connect
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Trusted by Industry Leaders (real logos) */}
        <BrandsWeWork />

        {/* Awards & Certifications */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Recognition
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Awards & <span className="text-primary">Certifications</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {awards.map((award, index) =>
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <img src={award.logo} alt={award.platform} className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">{award.platform} · {award.year}</p>
                  </div>
                  <Trophy className="h-5 w-5 text-amber-500 ml-auto flex-shrink-0" />
                </motion.div>
              )}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) =>
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                
                  <GraduationCap className="h-4 w-4 inline mr-2" />
                  {cert}
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Our Journey - Redesigned professional alternating timeline */}
        <section className="relative section-padding bg-secondary/30 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                  Our Journey
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
                A Decade of{" "}
                <span className="text-gradient">Building</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                From a single Dubai studio in 2016 to 9 offices worldwide - here are the milestones that shaped us.
              </p>
            </motion.div>

            {/* Journey Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
              {[
                { end: 2016, label: "Founded", suffix: "" },
                { end: 9, label: "Global Offices", suffix: "" },
                { end: 500, label: "Projects Shipped", suffix: "+" },
                { end: 92, label: "Recurring Clients", suffix: "%" },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-2xl bg-card border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                    <CountUpNumber end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Alternating Timeline */}
            <div className="relative max-w-5xl mx-auto">
              {/* Center line (desktop) / left line (mobile) */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20 md:-translate-x-1/2" />

              <div className="space-y-10 md:space-y-14">
                {milestones.map((milestone, index) => {
                  const IconComp = milestone.icon;
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                    >
                      {/* Dot on the line */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-xl ring-4 ring-background">
                        <IconComp className="h-5 w-5 text-white" />
                      </div>

                      {/* Card */}
                      <div className={`ml-20 md:ml-0 ${isLeft ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                        <div className="inline-block group">
                          <div className="p-5 md:p-6 rounded-3xl bg-card border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                            <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="font-display text-primary font-bold text-sm">{milestone.year}</span>
                              </span>
                            </div>
                            <p className="text-foreground font-medium text-base md:text-lg leading-snug">
                              {milestone.event}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Our Process - Redesigned "How We Work" */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                  Our Process
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
                How We{" "}
                <span className="text-gradient">Work</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A battle-tested 6-step framework - the same process behind{" "}
                <span className="text-primary font-semibold">
                  <CountUpNumber end={500} suffix="+" />
                </span>{" "}
                successful launches.
              </p>
            </motion.div>

            {/* Zigzag process cards */}
            <div className="relative max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative group"
                  >
                    {/* Big step number in background */}
                    <div className="absolute -top-4 right-4 font-display text-7xl font-black text-primary/5 group-hover:text-primary/10 transition-colors leading-none select-none">
                      0{step.step}
                    </div>

                    <div className="relative h-full p-7 rounded-3xl bg-card border border-border hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-[11px] font-bold text-primary uppercase tracking-widest">
                          Step {step.step}
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Quality checkpoint</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-14"
            >
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>


        {/* Values */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at NETREX.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) =>
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-card border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all">
                
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our People
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="text-primary">Leadership</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The talented people driving NETREX's global success.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) =>
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group text-center">
                
                  <div className="relative mb-4 rounded-3xl overflow-hidden aspect-square">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Board Members */}
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
                Governance
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-primary">Board Members</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A globally experienced board steering NETREX's strategy, governance, and long-term vision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex items-center gap-4 p-5 rounded-3xl bg-card border border-border hover:border-primary/40 hover:shadow-xl transition-all"
                >
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 ring-1 ring-border">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-base leading-tight">{member.name}</h3>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mt-2 leading-snug">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proud Stats */}
        <section className="section-padding bg-primary">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Our Proud Achievements
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {[
              { value: 500, suffix: "+", label: "Projects Completed" },
              { value: 200, suffix: "+", label: "Happy Clients" },
              { value: 50, suffix: "+", label: "Industries Served" },
              { value: 8, suffix: "+", label: "Years of Excellence" }].
              map((stat, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                
                  <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        





















        
      </main>
      <Footer />
      <WhatsAppButton />
    </div>);

};

export default About;