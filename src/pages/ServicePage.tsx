import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, ArrowUpRight, Zap, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechLogosCloud } from "@/components/ui/TechLogosCloud";
import { PortfolioScrollCard } from "@/components/portfolio/PortfolioScrollCard";

const servicesData: Record<string, {
  title: string;
  description: string;
  hero: string;
  longDescription: string;
  features: { title: string; description: string; icon?: string }[];
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  whyUs: { title: string; description: string; icon: typeof Zap }[];
  caseStudies: { title: string; description: string; result: string; image: string }[];
}> = {
  "web-development": {
    title: "Web Development",
    description: "We build stunning, high-performance websites that drive results.",
    hero: "Build Powerful Websites That Convert",
    longDescription: "From simple landing pages to complex enterprise applications, our expert team delivers cutting-edge web solutions using the latest technologies. We focus on performance, SEO, and user experience to ensure your website not only looks great but drives real business results.",
    features: [
      { title: "Custom WordPress Development", description: "Tailored WordPress solutions with custom themes and plugins" },
      { title: "React & Next.js Applications", description: "Modern, fast, and scalable single-page applications" },
      { title: "E-commerce Solutions", description: "Complete online stores with payment integration" },
      { title: "Progressive Web Apps (PWA)", description: "App-like experiences that work offline" },
      { title: "API Development & Integration", description: "RESTful and GraphQL API development" },
      { title: "Website Maintenance & Support", description: "24/7 support and regular updates" },
    ],
    benefits: [
      { title: "Lightning Fast", description: "Optimized for Core Web Vitals and performance" },
      { title: "SEO Optimized", description: "Built-in SEO best practices for better rankings" },
      { title: "Mobile Responsive", description: "Perfect experience across all devices" },
      { title: "Scalable Architecture", description: "Built to grow with your business" },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understanding your business goals and requirements" },
      { step: 2, title: "Planning", description: "Creating wireframes and technical architecture" },
      { step: 3, title: "Design", description: "Crafting beautiful and intuitive interfaces" },
      { step: 4, title: "Development", description: "Building with clean, maintainable code" },
      { step: 5, title: "Testing", description: "Rigorous QA across all devices and browsers" },
      { step: 6, title: "Launch", description: "Deployment and ongoing support" },
    ],
    whyUs: [
      { title: "8+ Years Experience", description: "Battle-tested solutions that work", icon: Clock },
      { title: "500+ Projects Delivered", description: "Proven track record of success", icon: Award },
      { title: "24/7 Support", description: "Always here when you need us", icon: Shield },
      { title: "Cutting-Edge Tech", description: "Latest technologies and best practices", icon: Zap },
    ],
    caseStudies: [
      { title: "E-commerce Fashion Platform", description: "Built a full-featured online store for luxury fashion brand", result: "300% increase in online sales", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop" },
      { title: "Corporate Website Redesign", description: "Redesigned company website for a financial services firm", result: "150% increase in lead generation", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop" },
    ],
  },
  "mobile-app": {
    title: "Mobile App Development",
    description: "We create native and cross-platform mobile applications that users love.",
    hero: "Create Mobile Apps Users Love",
    longDescription: "Our mobile development team builds apps that combine beautiful design with powerful functionality. Whether you need iOS, Android, or cross-platform solutions, we deliver apps that engage users and drive business growth.",
    features: [
      { title: "iOS App Development", description: "Native Swift apps for iPhone and iPad" },
      { title: "Android App Development", description: "Native Kotlin apps for Android devices" },
      { title: "Cross-Platform (Flutter)", description: "Single codebase for both platforms" },
      { title: "React Native Apps", description: "JavaScript-based cross-platform development" },
      { title: "App Store Optimization", description: "Increase visibility and downloads" },
      { title: "App Maintenance & Updates", description: "Ongoing support and feature updates" },
    ],
    benefits: [
      { title: "Native Performance", description: "Smooth, responsive apps that feel native" },
      { title: "Offline Capability", description: "Apps that work without internet" },
      { title: "Secure Data", description: "Enterprise-grade security measures" },
      { title: "Easy Updates", description: "Streamlined update and deployment" },
    ],
    process: [
      { step: 1, title: "Strategy", description: "Defining app goals and target audience" },
      { step: 2, title: "UX Design", description: "Creating intuitive user flows and wireframes" },
      { step: 3, title: "UI Design", description: "Designing beautiful, on-brand interfaces" },
      { step: 4, title: "Development", description: "Building robust, scalable app architecture" },
      { step: 5, title: "Testing", description: "Comprehensive testing on real devices" },
      { step: 6, title: "Launch", description: "App store submission and marketing support" },
    ],
    whyUs: [
      { title: "500K+ App Downloads", description: "Apps trusted by hundreds of thousands", icon: Award },
      { title: "Cross-Platform Experts", description: "Flutter and React Native specialists", icon: Zap },
      { title: "App Store Success", description: "Featured apps and 5-star ratings", icon: Shield },
      { title: "Ongoing Support", description: "We're with you post-launch", icon: Clock },
    ],
    caseStudies: [
      { title: "Fitness Tracking App", description: "Developed a health and fitness app with wearable integration", result: "500K+ downloads in first year", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop" },
      { title: "Food Delivery App", description: "Built a complete food ordering and delivery platform", result: "40% increase in order volume", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=800&fit=crop" },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "We design intuitive, beautiful digital experiences that delight users.",
    hero: "Design Experiences That Delight",
    longDescription: "Great design is more than aesthetics—it's about creating seamless experiences that solve problems and drive engagement. Our human-centered approach ensures every pixel serves a purpose.",
    features: [
      { title: "User Research", description: "Deep understanding of user needs and behaviors" },
      { title: "Wireframing & Prototyping", description: "Interactive prototypes for testing ideas" },
      { title: "Visual Design", description: "Stunning interfaces that reflect your brand" },
      { title: "Interaction Design", description: "Micro-interactions that delight users" },
      { title: "Usability Testing", description: "Data-driven design improvements" },
      { title: "Design Systems", description: "Scalable, consistent component libraries" },
    ],
    benefits: [
      { title: "User-Centered", description: "Designs based on real user needs" },
      { title: "Brand Consistent", description: "Cohesive visual identity everywhere" },
      { title: "Higher Conversion", description: "Optimized flows for better results" },
      { title: "Faster Development", description: "Clear specs reduce dev time" },
    ],
    process: [
      { step: 1, title: "Research", description: "Understanding users and market" },
      { step: 2, title: "Information Architecture", description: "Organizing content and features" },
      { step: 3, title: "Wireframes", description: "Low-fidelity layouts and flows" },
      { step: 4, title: "Visual Design", description: "High-fidelity branded designs" },
      { step: 5, title: "Prototyping", description: "Interactive clickable prototypes" },
      { step: 6, title: "Testing", description: "User testing and iteration" },
    ],
    whyUs: [
      { title: "Award-Winning Design", description: "Recognized for design excellence", icon: Award },
      { title: "Research-Driven", description: "Data informs every decision", icon: Zap },
      { title: "Full-Stack Thinking", description: "We understand development", icon: Shield },
      { title: "Rapid Iteration", description: "Fast feedback and improvements", icon: Clock },
    ],
    caseStudies: [
      { title: "Banking App Redesign", description: "Redesigned mobile banking for major bank", result: "60% improvement in task completion", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=800&fit=crop" },
      { title: "SaaS Dashboard", description: "Designed analytics platform dashboard", result: "45% reduction in support tickets", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop" },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "We help businesses grow through strategic digital marketing.",
    hero: "Grow Your Business Online",
    longDescription: "Our data-driven marketing strategies help you reach the right audience at the right time. From SEO to paid advertising, we create campaigns that deliver measurable ROI.",
    features: [
      { title: "Search Engine Optimization", description: "Organic traffic and rankings growth" },
      { title: "Pay-Per-Click Advertising", description: "Google Ads, Meta Ads, and more" },
      { title: "Social Media Marketing", description: "Engagement and brand building" },
      { title: "Content Marketing", description: "Valuable content that attracts customers" },
      { title: "Email Marketing", description: "Nurture leads and drive conversions" },
      { title: "Analytics & Reporting", description: "Data-driven insights and optimization" },
    ],
    benefits: [
      { title: "Increased Visibility", description: "Higher rankings, more traffic" },
      { title: "Qualified Leads", description: "Reach your ideal customers" },
      { title: "Brand Awareness", description: "Build recognition and trust" },
      { title: "Measurable ROI", description: "Track every dollar spent" },
    ],
    process: [
      { step: 1, title: "Audit", description: "Analyzing current performance" },
      { step: 2, title: "Strategy", description: "Creating a custom marketing plan" },
      { step: 3, title: "Setup", description: "Implementing tracking and tools" },
      { step: 4, title: "Execute", description: "Running campaigns and content" },
      { step: 5, title: "Optimize", description: "A/B testing and improvements" },
      { step: 6, title: "Report", description: "Regular performance reviews" },
    ],
    whyUs: [
      { title: "Proven Results", description: "Hundreds of successful campaigns", icon: Award },
      { title: "Data-Driven", description: "Decisions backed by analytics", icon: Zap },
      { title: "Full-Service", description: "All channels under one roof", icon: Shield },
      { title: "Transparent", description: "Clear reporting and communication", icon: Clock },
    ],
    caseStudies: [
      { title: "E-commerce SEO Campaign", description: "Complete SEO overhaul for online retailer", result: "200% increase in organic traffic", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop" },
      { title: "B2B Lead Generation", description: "Multi-channel campaign for software company", result: "150% increase in qualified leads", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop" },
    ],
  },
  "branding": {
    title: "Branding",
    description: "We build memorable brands that connect with audiences.",
    hero: "Build a Brand That Stands Out",
    longDescription: "Your brand is more than a logo—it's the entire experience customers have with your company. We create cohesive brand identities that resonate and build lasting connections.",
    features: [
      { title: "Brand Strategy", description: "Positioning and messaging that differentiates" },
      { title: "Logo Design", description: "Memorable marks that represent your brand" },
      { title: "Visual Identity", description: "Colors, typography, and design system" },
      { title: "Brand Guidelines", description: "Comprehensive usage documentation" },
      { title: "Marketing Collateral", description: "Business cards, brochures, and more" },
      { title: "Rebranding", description: "Refreshing existing brand identities" },
    ],
    benefits: [
      { title: "Differentiation", description: "Stand out from competitors" },
      { title: "Recognition", description: "Build instant brand recognition" },
      { title: "Trust & Credibility", description: "Professional image builds confidence" },
      { title: "Premium Pricing", description: "Strong brands command higher prices" },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understanding your vision and values" },
      { step: 2, title: "Research", description: "Analyzing competitors and market" },
      { step: 3, title: "Strategy", description: "Defining positioning and messaging" },
      { step: 4, title: "Design", description: "Creating visual identity concepts" },
      { step: 5, title: "Refine", description: "Iterating based on feedback" },
      { step: 6, title: "Deliver", description: "Complete brand package and guidelines" },
    ],
    whyUs: [
      { title: "Strategic Approach", description: "Brand strategy drives design", icon: Award },
      { title: "Award-Winning", description: "Recognized for creative excellence", icon: Zap },
      { title: "Full Package", description: "Strategy to implementation", icon: Shield },
      { title: "Lasting Impact", description: "Brands built to endure", icon: Clock },
    ],
    caseStudies: [
      { title: "Tech Startup Rebrand", description: "Complete brand overhaul for SaaS company", result: "40% increase in brand recall", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=800&fit=crop" },
      { title: "Restaurant Chain", description: "New brand identity for restaurant group", result: "25% increase in foot traffic", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=800&fit=crop" },
    ],
  },
  "ecommerce": {
    title: "E-Commerce Solutions",
    description: "We build online stores that sell. From Shopify to custom solutions.",
    hero: "Sell More Online",
    longDescription: "Whether you're launching your first online store or scaling to millions in revenue, we create e-commerce experiences that convert browsers into buyers and maximize your revenue potential.",
    features: [
      { title: "Shopify Development", description: "Custom themes and app development" },
      { title: "WooCommerce Solutions", description: "WordPress-powered online stores" },
      { title: "Custom Platforms", description: "Bespoke e-commerce solutions" },
      { title: "Payment Integration", description: "Stripe, PayPal, and more" },
      { title: "Inventory Management", description: "Stock tracking and automation" },
      { title: "Order Fulfillment", description: "Shipping and logistics integration" },
    ],
    benefits: [
      { title: "24/7 Sales", description: "Your store never closes" },
      { title: "Global Reach", description: "Sell to customers anywhere" },
      { title: "Lower Overhead", description: "Reduce costs vs. physical retail" },
      { title: "Data Insights", description: "Deep analytics on customer behavior" },
    ],
    process: [
      { step: 1, title: "Requirements", description: "Understanding your products and goals" },
      { step: 2, title: "Platform Selection", description: "Choosing the right technology" },
      { step: 3, title: "Design", description: "Creating a conversion-focused experience" },
      { step: 4, title: "Development", description: "Building and integrating systems" },
      { step: 5, title: "Launch", description: "Testing and going live" },
      { step: 6, title: "Optimize", description: "Continuous improvement and growth" },
    ],
    whyUs: [
      { title: "$10M+ Revenue", description: "Stores we've built generate millions", icon: Award },
      { title: "Conversion Experts", description: "Optimized for maximum sales", icon: Zap },
      { title: "Multi-Platform", description: "Shopify, WooCommerce, and custom", icon: Shield },
      { title: "Growth Partners", description: "We help you scale", icon: Clock },
    ],
    caseStudies: [
      { title: "Fashion Brand Store", description: "Custom Shopify store for luxury brand", result: "250% increase in online revenue", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop" },
      { title: "B2B Wholesale Platform", description: "Custom e-commerce for distributor", result: "80% of orders now online", image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&h=800&fit=crop" },
    ],
  },
  "ai-automation": {
    title: "AI Agent Integration & Automation",
    description: "Custom AI solutions that transform your business operations.",
    hero: "Intelligent Automation for Your Business",
    longDescription: "Leverage the power of artificial intelligence to automate workflows, enhance customer experiences, and unlock insights from your data. Our AI solutions are tailored to your specific business needs.",
    features: [
      { title: "AI Chatbots", description: "24/7 intelligent customer support" },
      { title: "Workflow Automation", description: "Automate repetitive tasks" },
      { title: "Custom AI Agents", description: "Specialized AI for your industry" },
      { title: "Data Analytics", description: "AI-powered business insights" },
      { title: "Document Processing", description: "Intelligent document extraction" },
      { title: "Integration Services", description: "Connect AI to your existing systems" },
    ],
    benefits: [
      { title: "Cost Reduction", description: "Automate expensive manual processes" },
      { title: "24/7 Availability", description: "AI never sleeps or takes breaks" },
      { title: "Faster Processing", description: "Complete tasks in seconds" },
      { title: "Scalability", description: "Handle unlimited volume" },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Identifying automation opportunities" },
      { step: 2, title: "Design", description: "Architecting the AI solution" },
      { step: 3, title: "Development", description: "Building and training models" },
      { step: 4, title: "Integration", description: "Connecting to your systems" },
      { step: 5, title: "Testing", description: "Validating accuracy and performance" },
      { step: 6, title: "Deploy", description: "Going live with monitoring" },
    ],
    whyUs: [
      { title: "AI Experts", description: "Specialized AI/ML engineering team", icon: Zap },
      { title: "Practical Focus", description: "Solutions that deliver real ROI", icon: Award },
      { title: "Enterprise Ready", description: "Secure, scalable implementations", icon: Shield },
      { title: "Ongoing Support", description: "We maintain and improve your AI", icon: Clock },
    ],
    caseStudies: [
      { title: "Customer Service AI", description: "Deployed AI chatbot for e-commerce company", result: "70% reduction in support tickets", image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=800&fit=crop" },
      { title: "Document Automation", description: "AI-powered invoice processing for finance firm", result: "95% accuracy, 10x faster processing", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop" },
    ],
  },
  "geo": {
    title: "Generative Engine Optimization (GEO)",
    description: "Future-proof your SEO for AI-powered search engines.",
    hero: "Optimize for the Future of Search",
    longDescription: "As search evolves with AI assistants like ChatGPT, Perplexity, and Google's AI Overviews, traditional SEO isn't enough. GEO ensures your content is optimized for generative AI platforms that are reshaping how people find information.",
    features: [
      { title: "AI Search Optimization", description: "Visibility in ChatGPT, Perplexity, Claude" },
      { title: "Content Strategy for AI", description: "Content that AI models cite and reference" },
      { title: "E-E-A-T Enhancement", description: "Building authority AI trusts" },
      { title: "Structured Data", description: "Schema markup for AI understanding" },
      { title: "Citation Building", description: "Getting mentioned by AI assistants" },
      { title: "Traditional SEO", description: "Still essential for complete coverage" },
    ],
    benefits: [
      { title: "Future-Proof", description: "Ready for the AI search revolution" },
      { title: "Early Mover Advantage", description: "Get ahead while competitors catch up" },
      { title: "Dual Coverage", description: "Visible in both AI and traditional search" },
      { title: "Brand Authority", description: "Become the source AI recommends" },
    ],
    process: [
      { step: 1, title: "AI Audit", description: "How AI currently sees your brand" },
      { step: 2, title: "Gap Analysis", description: "Identifying opportunities" },
      { step: 3, title: "Content Strategy", description: "Creating AI-optimized content" },
      { step: 4, title: "Technical Setup", description: "Implementing structured data" },
      { step: 5, title: "Authority Building", description: "Growing citations and mentions" },
      { step: 6, title: "Monitor", description: "Tracking AI visibility metrics" },
    ],
    whyUs: [
      { title: "Industry Pioneers", description: "Early adopters of GEO strategies", icon: Zap },
      { title: "Data-Driven", description: "We track what actually works", icon: Award },
      { title: "Holistic Approach", description: "GEO + traditional SEO combined", icon: Shield },
      { title: "Continuous Learning", description: "Always adapting to AI changes", icon: Clock },
    ],
    caseStudies: [
      { title: "SaaS Company GEO", description: "Optimized content for AI search visibility", result: "Featured in 40% of relevant AI responses", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=800&fit=crop" },
      { title: "E-commerce GEO", description: "Product content optimization for AI", result: "3x increase in AI-referred traffic", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop" },
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    description: "Enterprise cloud architecture, migration, and DevOps.",
    hero: "Scale with Confidence in the Cloud",
    longDescription: "Whether you're migrating to the cloud or optimizing existing infrastructure, our cloud experts design, build, and manage scalable, secure, and cost-effective solutions on AWS, Google Cloud, and Azure.",
    features: [
      { title: "Cloud Migration", description: "Seamless transition to the cloud" },
      { title: "Architecture Design", description: "Scalable, resilient infrastructure" },
      { title: "DevOps & CI/CD", description: "Automated deployment pipelines" },
      { title: "Kubernetes", description: "Container orchestration at scale" },
      { title: "Security & Compliance", description: "Enterprise-grade security" },
      { title: "Cost Optimization", description: "Reduce cloud spending" },
    ],
    benefits: [
      { title: "Scalability", description: "Scale up or down instantly" },
      { title: "Reliability", description: "99.99% uptime architecture" },
      { title: "Cost Efficiency", description: "Pay only for what you use" },
      { title: "Security", description: "Enterprise-grade protection" },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluating current infrastructure" },
      { step: 2, title: "Strategy", description: "Creating migration roadmap" },
      { step: 3, title: "Design", description: "Architecting cloud solution" },
      { step: 4, title: "Migration", description: "Moving workloads safely" },
      { step: 5, title: "Optimization", description: "Tuning for performance and cost" },
      { step: 6, title: "Management", description: "Ongoing monitoring and support" },
    ],
    whyUs: [
      { title: "Certified Experts", description: "AWS, GCP, Azure certified team", icon: Award },
      { title: "Security First", description: "Enterprise security standards", icon: Shield },
      { title: "24/7 Monitoring", description: "Always watching your systems", icon: Clock },
      { title: "Cost Savings", description: "Typically 30% reduction in cloud costs", icon: Zap },
    ],
    caseStudies: [
      { title: "SaaS Platform Migration", description: "Migrated legacy app to Kubernetes", result: "99.99% uptime, 40% cost reduction", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=800&fit=crop" },
      { title: "E-commerce Infrastructure", description: "Built auto-scaling infrastructure", result: "Handled 10x Black Friday traffic", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=800&fit=crop" },
    ],
  },
};

const portfolioItems = [
  { id: 1, title: "E-Commerce Fashion", category: "E-Commerce", technology: "Shopify", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop", result: "300% sales increase" },
  { id: 2, title: "Healthcare Portal", category: "Web", technology: "React", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=800&fit=crop", result: "50% faster processes" },
  { id: 3, title: "Food Delivery App", category: "Mobile", technology: "Flutter", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=800&fit=crop", result: "500K+ downloads" },
  { id: 4, title: "Real Estate Platform", category: "Web", technology: "Next.js", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=800&fit=crop", result: "200% more leads" },
  { id: 5, title: "Fitness App", category: "Mobile", technology: "Flutter", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop", result: "100K active users" },
  { id: 6, title: "Finance Dashboard", category: "Web", technology: "React", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop", result: "60% efficiency gain" },
  { id: 7, title: "Travel Booking", category: "Web", technology: "Laravel", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=800&fit=crop", result: "75% more bookings" },
  { id: 8, title: "SaaS Analytics", category: "Web", technology: "Next.js", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop", result: "400% ROI" },
];

const clientLogos = [
  { name: "TechCorp", logo: "T" },
  { name: "GlobalFin", logo: "G" },
  { name: "InnovateCo", logo: "I" },
  { name: "DigitalFirst", logo: "D" },
  { name: "FutureTech", logo: "F" },
  { name: "SmartSolutions", logo: "S" },
];

const ServicePage = () => {
  const { service } = useParams<{ service: string }>();
  const data = service ? servicesData[service] : null;
  const animationRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

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
        <section className="pt-32 pb-16 bg-secondary/30 overflow-hidden">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Our Services
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {data.hero}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  {data.description}
                </p>
                <p className="text-muted-foreground mb-8">
                  {data.longDescription}
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
              <motion.div
                ref={animationRef}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <motion.div style={{ y }} className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-3/4 h-3/4 rounded-3xl bg-gradient-to-br from-primary to-accent opacity-20"
                    />
                  </div>
                  <motion.img
                    src={data.caseStudies[0]?.image}
                    alt={data.title}
                    className="absolute inset-8 rounded-2xl object-cover shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Offer - With Animated Image */}
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
                  What We <span className="text-primary">Offer</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our comprehensive {data.title.toLowerCase()} services cover everything you need.
                </p>
                <div className="grid gap-4">
                  {data.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                    >
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Animated Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <motion.img
                    src={data.caseStudies[0]?.image}
                    alt={data.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="p-6 rounded-2xl bg-background/90 backdrop-blur-sm">
                      <div className="text-3xl font-display font-bold text-primary mb-2">
                        {data.caseStudies[0]?.result}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {data.caseStudies[0]?.title}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                Key <span className="text-primary">Benefits</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-card border border-border text-center hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-display font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
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
                Our <span className="text-primary">Process</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <h3 className="font-display font-bold text-lg mt-4 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <TechLogosCloud />

        {/* Why Choose Us */}
        <section className="section-padding bg-primary text-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Choose NETREX?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                We're not just another agency—we're your growth partner.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.whyUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-white/10 border border-white/20 text-center"
                >
                  <item.icon className="h-10 w-10 mx-auto mb-4 text-white" />
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-12 bg-secondary/30">
          <div className="container-wide">
            <p className="text-center text-muted-foreground text-sm uppercase tracking-wider font-medium mb-8">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center text-2xl font-bold text-muted-foreground"
                >
                  {client.logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Slider */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-end justify-between mb-12"
            >
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Related <span className="text-primary">Projects</span>
                </h2>
                <p className="text-muted-foreground">
                  See how we've helped businesses achieve their goals.
                </p>
              </div>
              <Link to="/portfolio">
                <Button variant="outline" className="hidden md:flex">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioItems.slice(0, 8).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PortfolioScrollCard {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-background/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Let's discuss your {data.title.toLowerCase()} needs and create something amazing together.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Get Free Consultation
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

export default ServicePage;
