import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, ArrowRight, MessageCircle, Globe, Smartphone, Palette, Megaphone, Bot, Cloud, Users, Briefcase, FolderOpen, MessageSquare, BookOpen, PhoneCall, Building2, Award, Shield, Sparkles, Brain, Package, ShoppingCart } from "lucide-react";
import netrexLogo from "@/assets/netrex-logo.png";
import { Button } from "@/components/ui/button";
import { FooterSkyline } from "@/components/layout/FooterSkyline";

// Pinterest & TikTok & X & YouTube icons as inline SVGs
const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.993 3.995-.282 1.193.599 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.174.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z"/></svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services/web-development", icon: Globe },
    { name: "Mobile Apps", href: "/services/mobile-app", icon: Smartphone },
    { name: "UI/UX Design", href: "/services/ui-ux-design", icon: Palette },
    { name: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone },
    { name: "Branding", href: "/services/branding", icon: Package },
    { name: "E-Commerce", href: "/services/ecommerce", icon: ShoppingCart },
    { name: "AI & Automation", href: "/services/ai-automation", icon: Bot },
    { name: "GEO", href: "/services/geo", icon: Sparkles },
    { name: "Cloud Solutions", href: "/services/cloud-solutions", icon: Cloud },
  ],
  company: [
    { name: "About Us", href: "/about", icon: Building2 },
    { name: "Portfolio", href: "/portfolio", icon: FolderOpen },
    { name: "Industries", href: "/industries", icon: Globe },
    { name: "Testimonials", href: "/testimonials", icon: MessageSquare },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: PhoneCall },
  ],
  locations: [
    { name: "Dubai, UAE (HQ)", href: "/contact?location=ae" },
    { name: "New York, USA", href: "/contact?location=us" },
    { name: "London, UK", href: "/contact?location=uk" },
    { name: "Berlin, Germany", href: "/contact?location=de" },
    { name: "Vancouver, Canada", href: "/contact?location=ca" },
    { name: "Melbourne, Australia", href: "/contact?location=au" },
    { name: "Singapore", href: "/contact?location=sg" },
    { name: "Riyadh, Saudi Arabia", href: "/contact?location=sa" },
    { name: "Lahore, Pakistan", href: "/contact?location=pk" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/netrex.official", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/netrex.official", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/netrex-official", label: "LinkedIn" },
  { icon: PinterestIcon, href: "https://www.pinterest.com/netrex_official", label: "Pinterest", isCustom: true },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@netrex.official", label: "TikTok", isCustom: true },
  { icon: XIcon, href: "https://x.com/netrex_official", label: "X", isCustom: true },
  { icon: YouTubeIcon, href: "https://www.youtube.com/@netrex.official", label: "YouTube", isCustom: true },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <FooterSkyline />

      {/* CTA Section */}
      <div className="relative z-10 border-b border-background/10">
        <div className="container-wide py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your <span className="text-primary">Project?</span>
              </h2>
              <p className="text-background/70">
                Let's discuss your ideas and create something amazing together.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 md:justify-end"
            >
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="https://wa.me/971502008313" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-background/20 text-background hover:bg-background/10">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="relative z-10 border-b border-background/10">
        <div className="container-wide py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="mailto:info@netrexinc.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-background/60 mb-1">Email Us</div>
                <div className="font-semibold text-background">info@netrexinc.com</div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+971502008313"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-background/60 mb-1">Call Us</div>
                <div className="font-semibold text-background">+971 50 200 8313</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-background/5 border border-background/10"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-background/60 mb-1">Headquarters</div>
                <div className="font-semibold text-background">Dubai, UAE</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src={netrexLogo} alt="NETREX" className="h-12 w-auto brightness-0 invert mb-6" />
            </Link>
            <p className="text-background/70 mb-4 max-w-sm">
              NETREX — Where Innovation Meets The Real World. Delivering state-of-the-art 
              digital solutions to clients globally since 2016.
            </p>
            <p className="text-background/50 text-sm mb-4 max-w-sm">
              We specialize in web development, mobile apps, UI/UX design, branding, and digital marketing 
              for businesses across 20+ industries worldwide. Our team of 50+ experts delivers 
              enterprise-grade solutions from 9 global offices.
            </p>
            <p className="text-background/50 text-sm mb-4 max-w-sm">
              Trusted by startups, SMEs, and enterprises across the Middle East, North America, Europe, 
              Asia Pacific, and beyond. ISO certified and top-rated on Upwork, Fiverr, and Clutch.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 border border-background/10">
                <Award className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs text-background/70">Top Rated Agency</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 border border-background/10">
                <Shield className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs text-background/70">ISO Certified</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  {'isCustom' in social && social.isCustom ? (
                    <social.icon />
                  ) : (
                    <social.icon className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors group text-xs">
                    <link.icon className="h-3.5 w-3.5 text-background/35 group-hover:text-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                    <link.icon className="h-4 w-4 text-background/40 group-hover:text-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Locations</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                    <MapPin className="h-4 w-4 text-background/40 group-hover:text-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} NETREX INC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link to="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
            <Link to="/legal" className="hover:text-background transition-colors">
              Legal
            </Link>
            <Link to="/faq" className="hover:text-background transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
