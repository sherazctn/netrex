import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData: Record<string, {
  title: string;
  description: string;
  hero: string;
  features: string[];
  benefits: { title: string; description: string }[];
  technologies: string[];
  caseStudies: { title: string; description: string; result: string }[];
}> = {
  "web-development": {
    title: "Web Development",
    description: "We build stunning, high-performance websites that drive results. From simple landing pages to complex web applications, our team delivers solutions that exceed expectations.",
    hero: "Build Powerful Websites That Convert",
    features: [
      "Custom WordPress Development",
      "React & Next.js Applications",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "Website Maintenance & Support"
    ],
    benefits: [
      { title: "Fast Loading Speed", description: "Optimized code and assets for lightning-fast performance" },
      { title: "SEO Optimized", description: "Built-in SEO best practices for better search rankings" },
      { title: "Mobile Responsive", description: "Perfect experience across all devices and screen sizes" },
      { title: "Scalable Architecture", description: "Built to grow with your business needs" }
    ],
    technologies: ["React", "Next.js", "WordPress", "Laravel", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    caseStudies: [
      { title: "E-commerce Platform", description: "Built a full-featured online store for a retail brand", result: "300% increase in online sales" },
      { title: "Corporate Website", description: "Redesigned company website for a financial services firm", result: "150% increase in lead generation" }
    ]
  },
  "mobile-app": {
    title: "Mobile App Development",
    description: "We create native and cross-platform mobile applications that users love. Our apps are designed for performance, usability, and engagement.",
    hero: "Create Mobile Apps Users Love",
    features: [
      "iOS App Development (Swift)",
      "Android App Development (Kotlin)",
      "Cross-Platform (Flutter, React Native)",
      "App Store Optimization",
      "Push Notifications & Analytics",
      "App Maintenance & Updates"
    ],
    benefits: [
      { title: "Native Performance", description: "Smooth, responsive apps that feel native to each platform" },
      { title: "Offline Capability", description: "Apps that work even without internet connection" },
      { title: "Secure Data", description: "Enterprise-grade security for sensitive data" },
      { title: "Easy Updates", description: "Streamlined update process for continuous improvement" }
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "AWS", "GraphQL", "REST APIs"],
    caseStudies: [
      { title: "Fitness Tracking App", description: "Developed a health and fitness app with wearable integration", result: "500K+ downloads in first year" },
      { title: "Food Delivery App", description: "Built a complete food ordering and delivery platform", result: "40% increase in order volume" }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "We design intuitive, beautiful digital experiences that delight users and drive business results. Our human-centered approach puts users first.",
    hero: "Design Experiences That Delight",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Interaction Design",
      "Usability Testing",
      "Design System Creation"
    ],
    benefits: [
      { title: "User-Centered", description: "Designs based on real user needs and behaviors" },
      { title: "Consistent Branding", description: "Cohesive visual identity across all touchpoints" },
      { title: "Increased Conversion", description: "Optimized user flows for better conversion rates" },
      { title: "Reduced Development", description: "Clear specifications reduce development time and costs" }
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer", "Zeplin", "Miro"],
    caseStudies: [
      { title: "Banking App Redesign", description: "Redesigned mobile banking experience for a major bank", result: "60% improvement in task completion" },
      { title: "SaaS Dashboard", description: "Designed intuitive dashboard for analytics platform", result: "45% reduction in support tickets" }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "We help businesses grow through strategic digital marketing. From SEO to social media, we create campaigns that deliver measurable results.",
    hero: "Grow Your Business Online",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting"
    ],
    benefits: [
      { title: "Increased Visibility", description: "Higher rankings and more organic traffic" },
      { title: "Qualified Leads", description: "Targeted campaigns that reach your ideal customers" },
      { title: "Brand Awareness", description: "Build recognition and trust with your audience" },
      { title: "Measurable ROI", description: "Track every dollar spent and optimize for results" }
    ],
    technologies: ["Google Ads", "Meta Ads", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Google Analytics", "Hootsuite"],
    caseStudies: [
      { title: "E-commerce SEO", description: "Complete SEO overhaul for online retailer", result: "200% increase in organic traffic" },
      { title: "B2B Lead Generation", description: "Multi-channel campaign for software company", result: "150% increase in qualified leads" }
    ]
  },
  "branding": {
    title: "Branding",
    description: "We build memorable brands that connect with audiences. From strategy to visual identity, we create brands that stand out and resonate.",
    hero: "Build a Brand That Stands Out",
    features: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Marketing Collateral",
      "Brand Messaging",
      "Rebranding Services"
    ],
    benefits: [
      { title: "Differentiation", description: "Stand out from competitors with unique positioning" },
      { title: "Recognition", description: "Build instant recognition with consistent branding" },
      { title: "Trust & Credibility", description: "Professional branding builds customer confidence" },
      { title: "Premium Pricing", description: "Strong brands command higher prices" }
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva", "Brand Asset Management"],
    caseStudies: [
      { title: "Tech Startup Rebrand", description: "Complete brand overhaul for growing SaaS company", result: "40% increase in brand recall" },
      { title: "Restaurant Chain", description: "New brand identity for expanding restaurant group", result: "25% increase in foot traffic" }
    ]
  },
  "ecommerce": {
    title: "E-Commerce Solutions",
    description: "We build online stores that sell. From Shopify to custom solutions, we create e-commerce experiences that convert visitors into customers.",
    hero: "Sell More Online",
    features: [
      "Shopify Development",
      "WooCommerce Solutions",
      "Custom E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Fulfillment Integration"
    ],
    benefits: [
      { title: "24/7 Sales", description: "Your store is always open, always selling" },
      { title: "Global Reach", description: "Sell to customers anywhere in the world" },
      { title: "Lower Overhead", description: "Reduce costs compared to physical retail" },
      { title: "Data Insights", description: "Deep analytics on customer behavior and sales" }
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "BigCommerce", "Klaviyo", "ShipStation"],
    caseStudies: [
      { title: "Fashion Brand Store", description: "Custom Shopify store for luxury fashion brand", result: "250% increase in online revenue" },
      { title: "B2B Wholesale Platform", description: "Custom e-commerce for wholesale distributor", result: "80% of orders now online" }
    ]
  }
};

const ServicePage = () => {
  const { service } = useParams<{ service: string }>();
  const data = service ? servicesData[service] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {data.hero}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Start Your Project
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
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  What We <span className="text-gradient">Offer</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our comprehensive {data.title.toLowerCase()} services cover everything you need to succeed in the digital world.
                </p>
                <div className="space-y-4">
                  {data.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {data.benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <h3 className="font-display font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
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
                Technologies We <span className="text-gradient">Use</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We leverage the latest and most reliable technologies to build robust solutions.
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4">
              {data.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-6 py-3 rounded-full bg-card border border-border font-medium hover:border-primary/30 transition-colors"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
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
                Success <span className="text-gradient">Stories</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how we've helped businesses achieve their goals with our {data.title.toLowerCase()} services.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-display text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                    <ArrowUpRight className="h-4 w-4" />
                    {study.result}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Let's discuss your {data.title.toLowerCase()} needs and create something amazing together.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
                  Get Free Consultation
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

export default ServicePage;
