import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, ArrowRight, MessageCircle } from "lucide-react";
import netrexLogo from "@/assets/netrex-logo.png";
import { Button } from "@/components/ui/button";

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
    { name: "UAE (Dubai) HQ", href: "/contact?location=ae" },
    { name: "USA", href: "/contact?location=us" },
    { name: "UK", href: "/contact?location=uk" },
    { name: "Canada", href: "/contact?location=ca" },
    { name: "Australia", href: "/contact?location=au" },
    { name: "Pakistan", href: "/contact?location=pk" },
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
      {/* City Skyline SVG - Famous Buildings from Office Cities */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-25 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-full"
          preserveAspectRatio="xMidYMax slice"
          fill="#555555"
        >
          {/* Dubai - Burj Khalifa (HQ) */}
          <g>
            {/* Burj Khalifa - Iconic spire */}
            <path d="M80 200 L80 50 L85 30 L90 15 L92 5 L94 15 L99 30 L104 50 L104 200Z" />
            {/* Burj Al Arab */}
            <path d="M130 200 L130 80 L135 70 L170 70 L175 80 L175 200Z M135 70 L152 40 L170 70Z" />
            {/* Emirates Towers */}
            <path d="M50 200 L50 100 L55 95 L60 100 L60 200Z" />
            <path d="M35 200 L35 120 L40 115 L45 120 L45 200Z" />
          </g>
          
          {/* New York - Empire State & Chrysler */}
          <g>
            {/* Empire State Building */}
            <path d="M280 200 L280 60 L290 60 L290 40 L300 30 L305 20 L310 30 L320 40 L320 60 L330 60 L330 200Z" />
            {/* Chrysler Building with Art Deco crown */}
            <path d="M350 200 L350 80 L355 75 L355 60 L360 55 L360 45 L365 35 L368 25 L371 35 L376 45 L376 55 L381 60 L381 75 L386 80 L386 200Z" />
            {/* One World Trade */}
            <path d="M240 200 L240 55 L245 50 L250 45 L255 50 L260 55 L260 200Z" />
          </g>
          
          {/* London - Big Ben & The Shard */}
          <g>
            {/* Big Ben / Elizabeth Tower */}
            <path d="M500 200 L500 70 L505 65 L505 55 L510 45 L512 30 L514 45 L519 55 L519 65 L524 70 L524 200Z" />
            {/* Clock face detail */}
            <circle cx="512" cy="75" r="8" fill="none" stroke="#555555" strokeWidth="2" />
            {/* The Shard */}
            <path d="M550 200 L555 200 L570 50 L572 20 L574 50 L589 200 L594 200Z" />
            {/* Tower Bridge towers */}
            <path d="M460 200 L460 100 L465 95 L470 100 L470 200Z" />
            <path d="M480 200 L480 100 L485 95 L490 100 L490 200Z" />
          </g>
          
          {/* Vancouver - Modern Glass Towers */}
          <g>
            {/* Living Shangri-La style tower */}
            <path d="M700 200 L700 45 L705 40 L715 40 L720 45 L720 200Z" />
            {/* Harbour Centre with observation deck */}
            <path d="M740 200 L740 70 L745 70 L745 55 L755 55 L755 70 L760 70 L760 200Z" />
            <ellipse cx="750" cy="55" rx="12" ry="5" />
            {/* Vancouver House */}
            <path d="M770 200 L775 200 L780 120 L785 80 L790 120 L795 200 L800 200Z" />
          </g>
          
          {/* Sydney - Opera House & Tower */}
          <g>
            {/* Sydney Opera House - iconic shells */}
            <path d="M900 200 L900 140 L915 100 L920 140 L920 200Z" />
            <path d="M920 200 L920 130 L940 80 L950 130 L950 200Z" />
            <path d="M950 200 L950 135 L970 95 L980 135 L980 200Z" />
            <path d="M980 200 L980 145 L995 115 L1000 145 L1000 200Z" />
            {/* Sydney Tower */}
            <path d="M870 200 L870 90 L875 90 L875 60 L878 55 L882 55 L885 60 L885 90 L890 90 L890 200Z" />
            <ellipse cx="880" cy="55" rx="10" ry="4" />
          </g>
          
          {/* Lahore / Pakistan - Minar-e-Pakistan & Badshahi Mosque */}
          <g>
            {/* Minar-e-Pakistan */}
            <path d="M1100 200 L1100 70 L1105 65 L1105 50 L1110 40 L1112 25 L1114 40 L1119 50 L1119 65 L1124 70 L1124 200Z" />
            {/* Crescent on top */}
            <circle cx="1112" cy="22" r="5" fill="none" stroke="#555555" strokeWidth="1" />
            {/* Badshahi Mosque domes */}
            <path d="M1140 200 L1140 120 L1145 115 C1145 100 1155 90 1165 100 L1165 115 L1170 120 L1170 200Z" />
            <path d="M1175 200 L1175 110 L1180 105 C1180 85 1195 75 1210 85 L1210 105 L1215 110 L1215 200Z" />
            {/* Minarets */}
            <path d="M1135 200 L1135 100 L1138 95 L1141 100 L1141 200Z" />
            <path d="M1220 200 L1220 95 L1223 90 L1226 95 L1226 200Z" />
          </g>

          {/* Brisbane - Story Bridge & Skyline */}
          <g>
            {/* Brisbane skyscrapers */}
            <path d="M1280 200 L1280 80 L1290 80 L1290 200Z" />
            <path d="M1300 200 L1300 65 L1310 65 L1310 200Z" />
            <path d="M1320 200 L1320 90 L1330 90 L1330 200Z" />
            {/* Story Bridge arch hint */}
            <path d="M1340 200 L1350 160 L1380 140 L1410 160 L1420 200" fill="none" stroke="#555555" strokeWidth="3" />
          </g>
        </svg>
      </div>

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
              Where Innovation Meets The Real World. Delivering state-of-the-art 
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

          {/* Locations */}
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
