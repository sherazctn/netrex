import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, ArrowRight, MessageCircle } from "lucide-react";
import netrexLogo from "@/assets/netrex-logo.png";
import { Button } from "@/components/ui/button";
import { FooterSkyline } from "@/components/layout/FooterSkyline";

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-app" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Industries", href: "/industries" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  locations: [
    { name: "Dubai, UAE (HQ)", href: "/contact?location=ae" },
    { name: "Albany, USA", href: "/contact?location=us" },
    { name: "London, UK", href: "/contact?location=uk" },
    { name: "Vancouver, Canada", href: "/contact?location=ca" },
    { name: "Brisbane, Australia", href: "/contact?location=au" },
    { name: "Lahore, Pakistan", href: "/contact?location=pk" },
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
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Skyline */}
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
              href="mailto:contact@netrex.ae"
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
                <div className="font-semibold text-background">contact@netrex.ae</div>
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
            <p className="text-background/70 mb-6 max-w-sm">
              NETREX — Where Innovation Meets The Real World. Delivering state-of-the-art 
              digital solutions to clients globally since 2016.
            </p>
            <div className="flex gap-3">
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
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
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
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations with Cities */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Locations</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
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
