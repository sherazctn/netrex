import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import netrexLogo from "@/assets/netrex-logo.png";
import { Button } from "@/components/ui/button";
const footerLinks = {
  services: [{
    name: "Web Development",
    href: "/services/web-development"
  }, {
    name: "Mobile Apps",
    href: "/services/mobile-app"
  }, {
    name: "UI/UX Design",
    href: "/services/ui-ux-design"
  }, {
    name: "Digital Marketing",
    href: "/services/digital-marketing"
  }, {
    name: "Branding",
    href: "/services/branding"
  }, {
    name: "E-Commerce",
    href: "/services/ecommerce"
  }],
  company: [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Portfolio",
    href: "/portfolio"
  }, {
    name: "Industries",
    href: "/industries"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Careers",
    href: "/careers"
  }, {
    name: "Contact",
    href: "/contact"
  }],
  locations: [{
    name: "UAE (Dubai)",
    href: "/contact?location=ae"
  }, {
    name: "USA",
    href: "/contact?location=us"
  }, {
    name: "UK",
    href: "/contact?location=uk"
  }, {
    name: "Canada",
    href: "/contact?location=ca"
  }, {
    name: "Australia",
    href: "/contact?location=au"
  }, {
    name: "Pakistan",
    href: "/contact?location=pk"
  }]
};
const socialLinks = [{
  icon: Linkedin,
  href: "https://linkedin.com/company/netrex",
  label: "LinkedIn"
}, {
  icon: Twitter,
  href: "https://twitter.com/netrex",
  label: "Twitter"
}, {
  icon: Instagram,
  href: "https://instagram.com/netrex",
  label: "Instagram"
}, {
  icon: Facebook,
  href: "https://facebook.com/netrex",
  label: "Facebook"
}];
export function Footer() {
  return <footer className="bg-foreground text-background">
      {/* CTA Section */}
      

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src={netrexLogo} alt="NETREX" className="h-12 w-auto brightness-0 invert mb-6" />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Where Innovation Meets The Real World. Delivering state-of-the-art 
              digital solutions to clients globally since 2016.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>)}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Locations</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <a href="mailto:contact@netrex.ae" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                contact@netrex.ae
              </a>
              <a href="tel:+971502008313" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                +971 50 200 8313
              </a>
              <span className="flex items-center gap-2 text-background/70">
                <MapPin className="h-5 w-5" />
                Office 523, Block-C, Dubai Airport Free Zone
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} NETREX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link to="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}