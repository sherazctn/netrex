import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { 
  ArrowRight, CheckCircle2, ArrowUpRight, Zap, Shield, Clock, Award,
  Globe, Code, Smartphone, Database, Cloud, Palette, Megaphone, BarChart,
  Layout, Server, Layers, ShoppingCart, Bot, Search, Settings, Users,
  FileText, Video, Lightbulb, Target, TrendingUp, Cpu, Lock, Workflow,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Service-specific technology stacks
const serviceTechStacks: Record<string, { name: string; logo: string; size: string }[]> = {
  "web-development": [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", size: "lg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", size: "lg" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", size: "md" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", size: "md" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", size: "lg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", size: "md" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", size: "lg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", size: "md" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", size: "sm" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", size: "md" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", size: "lg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", size: "md" },
    { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", size: "md" },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", size: "sm" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", size: "lg" },
  ],
  "mobile-app": [
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", size: "lg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", size: "lg" },
    { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", size: "lg" },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", size: "lg" },
    { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", size: "md" },
    { name: "iOS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg", size: "lg" },
    { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", size: "lg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", size: "md" },
    { name: "Xcode", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg", size: "sm" },
    { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", size: "md" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", size: "md" },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", size: "sm" },
    { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", size: "sm" },
    { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", size: "sm" },
    { name: "Fastlane", logo: "https://cdn.simpleicons.org/fastlane/00F200", size: "sm" },
  ],
  "ui-ux-design": [
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", size: "lg" },
    { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg", size: "lg" },
    { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", size: "lg" },
    { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", size: "md" },
    { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", size: "md" },
    { name: "After Effects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", size: "sm" },
    { name: "InVision", logo: "https://cdn.simpleicons.org/invision/FF3366", size: "md" },
    { name: "Principle", logo: "https://cdn.simpleicons.org/principle/6C5FC7", size: "sm" },
    { name: "Framer", logo: "https://cdn.simpleicons.org/framer/0055FF", size: "md" },
    { name: "Zeplin", logo: "https://cdn.simpleicons.org/zeplin/FDBD39", size: "sm" },
    { name: "Marvel", logo: "https://cdn.simpleicons.org/marvel/D42026", size: "sm" },
    { name: "Balsamiq", logo: "https://cdn.simpleicons.org/balsamiq/CC0000", size: "sm" },
    { name: "Miro", logo: "https://cdn.simpleicons.org/miro/050038", size: "md" },
    { name: "Webflow", logo: "https://cdn.simpleicons.org/webflow/4353FF", size: "sm" },
    { name: "Lottie", logo: "https://cdn.simpleicons.org/lottiefiles/00DDB3", size: "sm" },
  ],
  "digital-marketing": [
    { name: "Google Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/E37400", size: "lg" },
    { name: "Google Ads", logo: "https://cdn.simpleicons.org/googleads/4285F4", size: "lg" },
    { name: "Meta Ads", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg", size: "lg" },
    { name: "SEMrush", logo: "https://cdn.simpleicons.org/semrush/FF642D", size: "md" },
    { name: "Ahrefs", logo: "https://cdn.simpleicons.org/ahrefs/FF7A00", size: "md" },
    { name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp/FFE01B", size: "md" },
    { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59", size: "lg" },
    { name: "Hootsuite", logo: "https://cdn.simpleicons.org/hootsuite/143059", size: "sm" },
    { name: "Buffer", logo: "https://cdn.simpleicons.org/buffer/231F20", size: "sm" },
    { name: "Moz", logo: "https://cdn.simpleicons.org/moz/3995E1", size: "md" },
    { name: "Hotjar", logo: "https://cdn.simpleicons.org/hotjar/FF3C00", size: "sm" },
    { name: "Crazy Egg", logo: "https://cdn.simpleicons.org/crazyegg/FA4D00", size: "sm" },
    { name: "Sprout Social", logo: "https://cdn.simpleicons.org/sproutsocial/41B649", size: "sm" },
    { name: "Klaviyo", logo: "https://cdn.simpleicons.org/klaviyo/000000", size: "sm" },
    { name: "LinkedIn Ads", logo: "https://cdn.simpleicons.org/linkedin/0A66C2", size: "md" },
  ],
  "branding": [
    { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", size: "lg" },
    { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", size: "lg" },
    { name: "InDesign", logo: "https://cdn.simpleicons.org/adobeindesign/FF3366", size: "lg" },
    { name: "After Effects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", size: "md" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", size: "md" },
    { name: "Canva", logo: "https://cdn.simpleicons.org/canva/00C4CC", size: "md" },
    { name: "Procreate", logo: "https://cdn.simpleicons.org/procreate/000000", size: "sm" },
    { name: "Premiere Pro", logo: "https://cdn.simpleicons.org/adobepremierepro/9999FF", size: "md" },
    { name: "Blender", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", size: "sm" },
    { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg", size: "md" },
    { name: "Lightroom", logo: "https://cdn.simpleicons.org/adobelightroom/31A8FF", size: "sm" },
    { name: "CorelDRAW", logo: "https://cdn.simpleicons.org/coreldraw/72B63A", size: "sm" },
    { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", size: "md" },
    { name: "Webflow", logo: "https://cdn.simpleicons.org/webflow/4353FF", size: "sm" },
    { name: "Lottie", logo: "https://cdn.simpleicons.org/lottiefiles/00DDB3", size: "sm" },
  ],
  "ecommerce": [
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/7AB55C", size: "lg" },
    { name: "WooCommerce", logo: "https://cdn.simpleicons.org/woocommerce/96588A", size: "lg" },
    { name: "Magento", logo: "https://cdn.simpleicons.org/magento/EE672F", size: "md" },
    { name: "BigCommerce", logo: "https://cdn.simpleicons.org/bigcommerce/121118", size: "md" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF", size: "lg" },
    { name: "PayPal", logo: "https://cdn.simpleicons.org/paypal/003087", size: "md" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", size: "md" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", size: "sm" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", size: "sm" },
    { name: "Square", logo: "https://cdn.simpleicons.org/square/006AFF", size: "sm" },
    { name: "Razorpay", logo: "https://cdn.simpleicons.org/razorpay/0C2451", size: "sm" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", size: "md" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", size: "md" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", size: "sm" },
    { name: "Algolia", logo: "https://cdn.simpleicons.org/algolia/003DFF", size: "sm" },
  ],
  "ai-automation": [
    { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/412991", size: "lg" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", size: "lg" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", size: "lg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", size: "lg" },
    { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain/1C3C3C", size: "md" },
    { name: "Hugging Face", logo: "https://cdn.simpleicons.org/huggingface/FFD21E", size: "md" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", size: "md" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", size: "md" },
    { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", size: "sm" },
    { name: "Scikit-learn", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E", size: "md" },
    { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", size: "sm" },
    { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", size: "sm" },
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", size: "sm" },
    { name: "Keras", logo: "https://cdn.simpleicons.org/keras/D00000", size: "sm" },
    { name: "MLflow", logo: "https://cdn.simpleicons.org/mlflow/0194E2", size: "sm" },
    { name: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic/191919", size: "md" },
  ],
  "geo": [
    { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/412991", size: "lg" },
    { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", size: "lg" },
    { name: "Ahrefs", logo: "https://cdn.simpleicons.org/ahrefs/FF7A00", size: "md" },
    { name: "SEMrush", logo: "https://cdn.simpleicons.org/semrush/FF642D", size: "md" },
    { name: "Perplexity", logo: "https://cdn.simpleicons.org/perplexity/1FB8CD", size: "lg" },
    { name: "Claude", logo: "https://cdn.simpleicons.org/anthropic/191919", size: "md" },
    { name: "Schema.org", logo: "https://cdn.simpleicons.org/schema/3C3C3C", size: "sm" },
    { name: "Moz", logo: "https://cdn.simpleicons.org/moz/3995E1", size: "md" },
    { name: "Screaming Frog", logo: "https://cdn.simpleicons.org/data/73DC8C", size: "sm" },
    { name: "Google Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/E37400", size: "md" },
    { name: "Google Search Console", logo: "https://cdn.simpleicons.org/googlesearchconsole/458CF5", size: "md" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", size: "sm" },
    { name: "Yoast", logo: "https://cdn.simpleicons.org/yoast/A4286A", size: "sm" },
    { name: "ChatGPT", logo: "https://cdn.simpleicons.org/openai/74AA9C", size: "lg" },
    { name: "Clearscope", logo: "https://cdn.simpleicons.org/clearbit/3576F2", size: "sm" },
  ],
  "cloud-solutions": [
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", size: "lg" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", size: "lg" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", size: "lg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", size: "lg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", size: "lg" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", size: "md" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", size: "md" },
    { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", size: "md" },
    { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", size: "sm" },
    { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", size: "sm" },
    { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", size: "md" },
    { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", size: "sm" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", size: "sm" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", size: "md" },
    { name: "CircleCI", logo: "https://cdn.simpleicons.org/circleci/343434", size: "sm" },
    { name: "ArgoCD", logo: "https://cdn.simpleicons.org/argo/EF7B4D", size: "sm" },
  ],
};

// Service-specific feature icons
const featureIcons: Record<string, typeof Globe> = {
  "Custom WordPress Development": Globe,
  "React & Next.js Applications": Code,
  "E-commerce Solutions": ShoppingCart,
  "Progressive Web Apps (PWA)": Smartphone,
  "API Development & Integration": Server,
  "Website Maintenance & Support": Settings,
  "iOS App Development": Smartphone,
  "Android App Development": Smartphone,
  "Cross-Platform (Flutter)": Layers,
  "React Native Apps": Code,
  "App Store Optimization": TrendingUp,
  "App Maintenance & Updates": Settings,
  "User Research": Users,
  "Wireframing & Prototyping": Layout,
  "Visual Design": Palette,
  "Interaction Design": Workflow,
  "Usability Testing": Target,
  "Design Systems": Database,
  "Search Engine Optimization": Search,
  "Pay-Per-Click Advertising": Target,
  "Social Media Marketing": Megaphone,
  "Content Marketing": FileText,
  "Email Marketing": Megaphone,
  "Analytics & Reporting": BarChart,
  "Brand Strategy": Lightbulb,
  "Logo Design": Palette,
  "Visual Identity": Palette,
  "Brand Guidelines": FileText,
  "Marketing Collateral": Layers,
  "Rebranding": Workflow,
  "Shopify Development": ShoppingCart,
  "WooCommerce Solutions": ShoppingCart,
  "Custom Platforms": Code,
  "Payment Integration": Lock,
  "Inventory Management": Database,
  "Order Fulfillment": Workflow,
  "AI Chatbots": Bot,
  "Workflow Automation": Workflow,
  "Custom AI Agents": Cpu,
  "Data Analytics": BarChart,
  "Document Processing": FileText,
  "Integration Services": Server,
  "AI Search Optimization": Search,
  "Content Strategy for AI": FileText,
  "E-E-A-T Enhancement": Award,
  "Structured Data": Database,
  "Citation Building": TrendingUp,
  "Traditional SEO": Search,
  "Cloud Migration": Cloud,
  "Architecture Design": Server,
  "DevOps & CI/CD": Workflow,
  "Kubernetes": Layers,
  "Security & Compliance": Shield,
  "Cost Optimization": TrendingUp,
};

const servicesData: Record<string, {
  title: string;
  description: string;
  hero: string;
  longDescription: string;
  features: { title: string; description: string }[];
  benefits: { title: string; description: string; icon: typeof Zap }[];
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
      { title: "Lightning Fast", description: "Optimized for Core Web Vitals and performance", icon: Zap },
      { title: "SEO Optimized", description: "Built-in SEO best practices for better rankings", icon: Search },
      { title: "Mobile Responsive", description: "Perfect experience across all devices", icon: Smartphone },
      { title: "Scalable Architecture", description: "Built to grow with your business", icon: TrendingUp },
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
      { title: "E-commerce Fashion Platform", description: "Built a full-featured online store for luxury fashion brand", result: "300% increase in online sales", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=800&fit=crop" },
      { title: "Corporate Website Redesign", description: "Redesigned company website for a financial services firm", result: "150% increase in lead generation", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop" },
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
      { title: "Native Performance", description: "Smooth, responsive apps that feel native", icon: Zap },
      { title: "Offline Capability", description: "Apps that work without internet", icon: Cloud },
      { title: "Secure Data", description: "Enterprise-grade security measures", icon: Shield },
      { title: "Easy Updates", description: "Streamlined update and deployment", icon: Settings },
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
      { title: "Fitness Tracking App", description: "Developed a health and fitness app with wearable integration", result: "500K+ downloads in first year", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=800&fit=crop" },
      { title: "Food Delivery App", description: "Built a complete food ordering and delivery platform", result: "40% increase in order volume", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop" },
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
      { title: "User-Centered", description: "Designs based on real user needs", icon: Users },
      { title: "Brand Consistent", description: "Cohesive visual identity everywhere", icon: Palette },
      { title: "Higher Conversion", description: "Optimized flows for better results", icon: TrendingUp },
      { title: "Faster Development", description: "Clear specs reduce dev time", icon: Zap },
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
      { title: "Banking App Redesign", description: "Redesigned mobile banking for major bank", result: "60% improvement in task completion", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=800&fit=crop" },
      { title: "SaaS Dashboard", description: "Designed analytics platform dashboard", result: "45% reduction in support tickets", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=800&fit=crop" },
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
      { title: "Increased Visibility", description: "Higher rankings, more traffic", icon: TrendingUp },
      { title: "Qualified Leads", description: "Reach your ideal customers", icon: Target },
      { title: "Brand Awareness", description: "Build recognition and trust", icon: Megaphone },
      { title: "Measurable ROI", description: "Track every dollar spent", icon: BarChart },
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
      { title: "E-commerce SEO Campaign", description: "Complete SEO overhaul for online retailer", result: "200% increase in organic traffic", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=800&fit=crop" },
      { title: "B2B Lead Generation", description: "Multi-channel campaign for software company", result: "150% increase in qualified leads", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=800&fit=crop" },
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
      { title: "Differentiation", description: "Stand out from competitors", icon: Lightbulb },
      { title: "Recognition", description: "Build instant brand recognition", icon: Target },
      { title: "Trust & Credibility", description: "Professional image builds confidence", icon: Shield },
      { title: "Premium Pricing", description: "Strong brands command higher prices", icon: TrendingUp },
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
      { title: "Tech Startup Rebrand", description: "Complete brand overhaul for SaaS company", result: "40% increase in brand recall", image: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=600&h=800&fit=crop" },
      { title: "Restaurant Chain", description: "New brand identity for restaurant group", result: "25% increase in foot traffic", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=800&fit=crop" },
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
      { title: "24/7 Sales", description: "Your store never closes", icon: Clock },
      { title: "Global Reach", description: "Sell to customers anywhere", icon: Globe },
      { title: "Lower Overhead", description: "Reduce costs vs. physical retail", icon: TrendingUp },
      { title: "Data Insights", description: "Deep analytics on customer behavior", icon: BarChart },
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
      { title: "Fashion Brand Store", description: "Custom Shopify store for luxury brand", result: "250% increase in online revenue", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop" },
      { title: "B2B Wholesale Platform", description: "Custom e-commerce for distributor", result: "80% of orders now online", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=800&fit=crop" },
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
      { title: "Cost Reduction", description: "Automate expensive manual processes", icon: TrendingUp },
      { title: "24/7 Availability", description: "AI never sleeps or takes breaks", icon: Clock },
      { title: "Faster Processing", description: "Complete tasks in seconds", icon: Zap },
      { title: "Scalability", description: "Handle unlimited volume", icon: Server },
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
      { title: "Customer Service AI", description: "Deployed AI chatbot for e-commerce company", result: "70% reduction in support tickets", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=800&fit=crop" },
      { title: "Document Automation", description: "AI-powered invoice processing for finance firm", result: "95% accuracy, 10x faster processing", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=800&fit=crop" },
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
      { title: "Future-Proof", description: "Ready for the AI search revolution", icon: Lightbulb },
      { title: "Early Mover Advantage", description: "Get ahead while competitors catch up", icon: TrendingUp },
      { title: "Dual Coverage", description: "Visible in both AI and traditional search", icon: Target },
      { title: "Brand Authority", description: "Become the source AI recommends", icon: Award },
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
      { title: "SaaS Company GEO", description: "Optimized content for AI search visibility", result: "Featured in 40% of relevant AI responses", image: "https://images.unsplash.com/photo-1676277791608-ac54525aa94d?w=600&h=800&fit=crop" },
      { title: "E-commerce GEO", description: "Product content optimization for AI", result: "3x increase in AI-referred traffic", image: "https://images.unsplash.com/photo-1675271591211-98b14e07786c?w=600&h=800&fit=crop" },
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
      { title: "Scalability", description: "Scale up or down instantly", icon: TrendingUp },
      { title: "Reliability", description: "99.99% uptime architecture", icon: Shield },
      { title: "Cost Efficiency", description: "Pay only for what you use", icon: Zap },
      { title: "Security", description: "Enterprise-grade protection", icon: Lock },
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
      { title: "SaaS Platform Migration", description: "Migrated legacy app to Kubernetes", result: "99.99% uptime, 40% cost reduction", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=800&fit=crop" },
      { title: "E-commerce Infrastructure", description: "Built auto-scaling infrastructure", result: "Handled 10x Black Friday traffic", image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=600&h=800&fit=crop" },
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
  { id: 9, title: "Crypto Exchange", category: "Web", technology: "React", image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&h=800&fit=crop", result: "$2M daily volume" },
  { id: 10, title: "Delivery Logistics", category: "Mobile", technology: "Kotlin", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=800&fit=crop", result: "30% faster deliveries" },
];

const sizeClasses: Record<string, string> = {
  sm: "w-10 h-10 md:w-12 md:h-12 p-2",
  md: "w-14 h-14 md:w-16 md:h-16 p-3",
  lg: "w-18 h-18 md:w-20 md:h-20 p-4",
};

const ServicePage = () => {
  const { service } = useParams<{ service: string }>();
  const data = service ? servicesData[service] : null;
  const techStack = service ? serviceTechStacks[service] || [] : [];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      const newIndex = direction === 'left' 
        ? Math.max(0, carouselIndex - 1) 
        : Math.min(portfolioItems.length - 4, carouselIndex + 1);
      setCarouselIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
        {/* Hero Section - No Image */}
        <section className="pt-32 pb-20 bg-secondary/30 overflow-hidden">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {data.title}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {data.hero}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                {data.description}
              </p>
              <p className="text-muted-foreground mb-10 max-w-3xl mx-auto">
                {data.longDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl">
                    Start Your Project
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="rounded-full">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Offer - With Icons and Image Animation */}
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
                  {data.features.map((feature, index) => {
                    const IconComponent = featureIcons[feature.title] || CheckCircle2;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
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

        {/* Key Benefits with Icons */}
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
                  className="p-6 rounded-3xl bg-card border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Improved Process Section */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                How We Work
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-background/60 max-w-2xl mx-auto">
                A proven methodology that delivers results every time
              </p>
            </motion.div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:-translate-x-px" />
              
              {data.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="p-6 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/30 hover:bg-background/10 transition-all duration-300">
                      <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Step {step.step}</div>
                      <h3 className="font-display font-bold text-xl mb-2 text-background">{step.title}</h3>
                      <p className="text-sm text-background/60">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center circle */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/30">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service-Specific Technologies */}
        {techStack.length > 0 && (
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
                  Technologies
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Tech Stack We <span className="text-primary">Use</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We leverage the best tools and technologies for {data.title.toLowerCase()}
                </p>
              </motion.div>

              {/* Cloud Layout */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    whileHover={{ scale: 1.15, y: -5 }}
                    className={`relative group ${sizeClasses[tech.size]} rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                      {tech.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us CTA */}
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
                Why Choose NETREX for {data.title}?
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
                  className="p-6 rounded-3xl bg-white/10 border border-white/20 text-center hover:bg-white/20 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Carousel */}
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
              <div className="hidden md:flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => scrollCarousel('left')}
                  disabled={carouselIndex === 0}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => scrollCarousel('right')}
                  disabled={carouselIndex >= portfolioItems.length - 4}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Link to="/portfolio">
                  <Button variant="outline" className="ml-4">
                    View All
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            {/* Carousel */}
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-72 snap-start"
                >
                  <Link to={`/portfolio/${item.id}`} className="group block">
                    <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-xs font-medium text-primary mb-1">{item.technology}</div>
                        <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.result}</p>
                      </div>
                    </div>
                  </Link>
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

        {/* Separator */}
        <Separator className="bg-border" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicePage;
