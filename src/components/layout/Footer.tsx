import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook,
  ArrowUpRight
} from "lucide-react";
import netrexLogo from "@/assets/netrex-logo.png";

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-app" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Branding", href: "/services/branding" },
    { name: "E-Commerce", href: "/services/ecommerce" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Industries", href: "/industries" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  locations: [
    { name: "UAE (Dubai)", href: "/contact?location=uae" },
    { name: "USA", href: "/contact?location=usa" },
    { name: "UK", href: "/contact?location=uk" },
    { name: "Canada", href: "/contact?location=canada" },
    { name: "Australia", href: "/contact?location=australia" },
    { name: "India", href: "/contact?location=india" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/netrex", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/netrex", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/netrex", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/netrex", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative -mt-24 mb-16 rounded-2xl bg-gradient-brand p-8 md:p-12 lg:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-30%2030v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors group"
            >
              Start Your Project
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src={netrexLogo}
                alt="NETREX"
                className="h-12 w-auto brightness-0 invert mb-6"
              />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Where Innovation Meets The Real World. Delivering state-of-the-art 
              digital solutions to clients globally since 2016.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
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
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
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
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="mailto:sherazctn@gmail.com"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                sherazctn@gmail.com
              </a>
              <a
                href="tel:+971000000000"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                +971 XXX XXX XXX
              </a>
              <span className="flex items-center gap-2 text-background/70">
                <MapPin className="h-5 w-5" />
                Dubai, UAE
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
    </footer>
  );
}
