import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe2, Users, Lightbulb, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    name: "Sarah Ahmed",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    bio: "Award-winning designer passionate about user experiences"
  },
  {
    name: "Ahmed Hassan",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "Tech expert specializing in scalable architectures"
  },
  {
    name: "Fatima Ali",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    bio: "Growth specialist with global marketing expertise"
  }
];

const milestones = [
  { year: "2016", event: "Founded in Dubai, UAE" },
  { year: "2017", event: "Expanded to Pakistan office" },
  { year: "2018", event: "100th project milestone" },
  { year: "2019", event: "Opened USA & UK offices" },
  { year: "2020", event: "Google Developers recognition" },
  { year: "2021", event: "Canada & Australia expansion" },
  { year: "2023", event: "500+ projects completed" },
  { year: "2024", event: "Top-rated on Clutch & Upwork" }
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
                  <span className="text-gradient">Meets Reality</span>
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
                  <div className="text-4xl font-display font-bold mb-2">500+</div>
                  <div className="text-white/80">Projects</div>
                </div>
                <div className="p-6 rounded-3xl bg-card border border-border text-center">
                  <div className="text-4xl font-display font-bold text-gradient mb-2">8+</div>
                  <div className="text-muted-foreground">Years</div>
                </div>
                <div className="p-6 rounded-3xl bg-card border border-border text-center">
                  <div className="text-4xl font-display font-bold text-gradient mb-2">6</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div className="p-6 rounded-3xl bg-accent text-white text-center">
                  <div className="text-4xl font-display font-bold mb-2">200+</div>
                  <div className="text-white/80">Clients</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="text-gradient">Story</span>
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
                    and to be part of the Google Developers Agency Program. But our greatest achievement is the 
                    lasting relationships we've built with our clients and the success stories we've helped create.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={milestone.year}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <span className="font-display font-bold text-primary text-xl w-16">
                        {milestone.year}
                      </span>
                      <span className="text-foreground">{milestone.event}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
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
                Our <span className="text-gradient">Values</span>
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
                  className="p-6 rounded-3xl bg-card border border-border text-center hover:shadow-lg transition-shadow"
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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="text-gradient">Leadership</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The talented people behind NETREX's success.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="relative mb-4 rounded-3xl overflow-hidden aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display font-bold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Recognized & <span className="text-gradient">Trusted</span>
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center gap-3">
                  <Award className="h-10 w-10 text-primary" />
                  <div className="text-left">
                    <div className="font-bold">Top Rated</div>
                    <div className="text-background/60 text-sm">Upwork</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-10 w-10 text-primary" />
                  <div className="text-left">
                    <div className="font-bold">Top Developer</div>
                    <div className="text-background/60 text-sm">Clutch</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="h-10 w-10 text-primary" />
                  <div className="text-left">
                    <div className="font-bold">Agency Partner</div>
                    <div className="text-background/60 text-sm">Google Developers</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Let's create something amazing. Get in touch with our team today.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
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
