import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe2, Users, Lightbulb, Target, Heart, Trophy, Star, GraduationCap, Briefcase, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUpNumber } from "@/components/ui/CountUpNumber";

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
  }
];

const team = [
  {
    name: "Sheraz Khan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    bio: "Visionary leader with 15+ years in digital transformation"
  },
  {
    name: "Gurpreet Singh",
    role: "CMO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "Growth strategist with expertise in global marketing campaigns"
  },
  {
    name: "Sajjad Khan",
    role: "COO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    bio: "Operations expert ensuring seamless project delivery worldwide"
  },
  {
    name: "Ahmed Hassan",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
    bio: "Tech expert specializing in scalable cloud architectures"
  },
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    bio: "Award-winning designer passionate about user experiences"
  },
  {
    name: "Fatima Ali",
    role: "HR Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    bio: "People-first leader building high-performing global teams"
  },
  {
    name: "David Park",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
    bio: "Full-stack engineer with 10+ years building enterprise solutions"
  },
  {
    name: "Ayesha Malik",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    bio: "PMP-certified PM ensuring on-time, on-budget delivery"
  },
];

const milestones = [
  { year: "2016", event: "Founded in Dubai, UAE", icon: Star },
  { year: "2017", event: "Expanded to Pakistan office", icon: Globe2 },
  { year: "2018", event: "100th project milestone", icon: Trophy },
  { year: "2019", event: "Opened USA & UK offices", icon: Globe2 },
  { year: "2020", event: "Google Developers recognition", icon: Award },
  { year: "2021", event: "Canada & Australia expansion", icon: Globe2 },
  { year: "2023", event: "500+ projects completed", icon: Briefcase },
  { year: "2024", event: "Top-rated on Clutch & Upwork", icon: Star },
];

const awards = [
  { title: "Top Rated Plus", platform: "Upwork", year: "2024", logo: "https://cdn.simpleicons.org/upwork/6FDA44" },
  { title: "Top Developer", platform: "Clutch", year: "2024", logo: "https://cdn.simpleicons.org/clutch/FF3D2E" },
  { title: "Agency Partner", platform: "Google Developers", year: "2023", logo: "https://cdn.simpleicons.org/google/4285F4" },
  { title: "Level 2 Seller", platform: "Fiverr", year: "2024", logo: "https://cdn.simpleicons.org/fiverr/1DBF73" },
  { title: "Rising Star", platform: "DesignRush", year: "2023", logo: "https://cdn.simpleicons.org/designernews/2D72D9" },
  { title: "Best Web Agency", platform: "GoodFirms", year: "2024", logo: "https://cdn.simpleicons.org/goodreads/372213" },
];

const certifications = [
  "Google Cloud Partner",
  "AWS Solutions Architect", 
  "ISO 27001 Compliant",
  "Microsoft Gold Partner",
  "Meta Business Partner",
  "Shopify Partner",
];

const processSteps = [
  { step: 1, title: "Proposal", description: "We analyze your requirements and present a tailored proposal", icon: Lightbulb },
  { step: 2, title: "Agreement", description: "We finalize terms, timeline, and project milestones", icon: Shield },
  { step: 3, title: "Development", description: "Our team builds your solution with regular updates", icon: Zap },
  { step: 4, title: "Complete", description: "Thorough QA testing and client review rounds", icon: Target },
  { step: 5, title: "Deployment", description: "Launch to production with zero downtime", icon: Globe2 },
  { step: 6, title: "Support", description: "Ongoing maintenance and dedicated support", icon: Heart },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
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
                    <Button variant="hero" size="lg" className="group">
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
                className="grid grid-cols-2 gap-4"
              >
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

        {/* Awards & Certifications */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Recognition
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Awards & <span className="text-primary">Certifications</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <img src={award.logo} alt={award.platform} className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">{award.platform} · {award.year}</p>
                  </div>
                  <Trophy className="h-5 w-5 text-amber-500 ml-auto flex-shrink-0" />
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20"
                >
                  <GraduationCap className="h-4 w-4 inline mr-2" />
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story with Improved Timeline */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Our Journey
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="text-primary">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    NETREX was founded in 2016 with a simple mission: to help businesses thrive in the digital age. 
                    What started as a small team in Dubai has grown into a global digital agency with offices 
                    across six countries.
                  </p>
                  <p>
                    Our journey has been marked by continuous innovation, unwavering commitment to quality, 
                    and a passion for creating digital experiences that make a difference. We've had the 
                    privilege of working with startups, SMEs, and Fortune 500 companies alike.
                  </p>
                  <p>
                    Today, we're proud to be recognized as a top-rated agency on platforms like Clutch and Upwork, 
                    and to be part of the Google Developers Agency Program.
                  </p>
                </div>
              </motion.div>
              
              {/* Improved Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
                
                <div className="space-y-6">
                  {milestones.map((milestone, index) => {
                    const IconComp = milestone.icon;
                    return (
                      <motion.div 
                        key={milestone.year}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="flex items-start gap-4 pl-0 relative"
                      >
                        {/* Timeline dot */}
                        <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                          <IconComp className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all">
                          <span className="text-primary font-display font-bold text-lg">{milestone.year}</span>
                          <p className="text-foreground mt-1">{milestone.event}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                How We <span className="text-primary">Work</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven 6-step process that ensures quality delivery every time.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2" />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="p-6 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="text-xs font-bold text-primary mb-1">Step {step.step}</div>
                      <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    {/* Arrow between steps */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ArrowRight className="h-5 w-5 text-primary" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
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
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at NETREX.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-card border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
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
              className="text-center mb-12"
            >
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
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group text-center"
                >
                  <div className="relative mb-4 rounded-3xl overflow-hidden aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
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
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Our Proud Achievements
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: 500, suffix: "+", label: "Projects Completed" },
                { value: 200, suffix: "+", label: "Happy Clients" },
                { value: 50, suffix: "+", label: "Industries Served" },
                { value: 8, suffix: "+", label: "Years of Excellence" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-background/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Let's create something amazing. Get in touch with our team today.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Contact Us
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
