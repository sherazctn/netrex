import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample testimonials - these would be managed from admin dashboard
const textTestimonials = [
  {
    id: 1,
    clientName: "Ahmed Al Rashid",
    companyName: "Gulf Properties",
    companyLogo: "GP",
    country: "🇦🇪",
    countryName: "UAE",
    rating: 5,
    text: "NETREX transformed our real estate platform completely. The new website has increased our lead generation by 300%. Their team understood our vision perfectly and delivered beyond expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    clientName: "Sarah Mitchell",
    companyName: "TechStart Inc",
    companyLogo: "TS",
    country: "🇺🇸",
    countryName: "USA",
    rating: 5,
    text: "Working with NETREX was a game-changer for our startup. They built our MVP in record time and helped us secure our Series A funding. Highly recommended for any tech company.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    clientName: "James Chen",
    companyName: "Pacific Foods",
    companyLogo: "PF",
    country: "🇦🇺",
    countryName: "Australia",
    rating: 5,
    text: "The food delivery app NETREX built for us has been downloaded over 500K times. Their expertise in mobile development is unmatched. Great communication throughout the project.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    clientName: "Emma Thompson",
    companyName: "London Finance",
    companyLogo: "LF",
    country: "🇬🇧",
    countryName: "UK",
    rating: 5,
    text: "Security was our top priority, and NETREX delivered a banking portal that exceeded all compliance requirements. Their attention to detail is remarkable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    clientName: "Michael Schmidt",
    companyName: "Berlin Tech AG",
    companyLogo: "BT",
    country: "🇩🇪",
    countryName: "Germany",
    rating: 5,
    text: "NETREX's AI integration has automated 70% of our customer support. The chatbot they built handles thousands of queries daily with remarkable accuracy.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    id: 6,
    clientName: "Fatima Hassan",
    companyName: "Gulf Healthcare",
    companyLogo: "GH",
    country: "🇸🇦",
    countryName: "Saudi Arabia",
    rating: 5,
    text: "Our patient management system is now completely digital thanks to NETREX. They handled the complexity of healthcare data with expertise and care.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
];

const videoTestimonials = [
  {
    id: 1,
    clientName: "David Park",
    companyName: "Seoul Innovations",
    companyLogo: "SI",
    country: "🇰🇷",
    countryName: "South Korea",
    thumbnail: "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=600&h=400&fit=crop",
    duration: "2:34",
  },
  {
    id: 2,
    clientName: "Maria Garcia",
    companyName: "Madrid Consulting",
    companyLogo: "MC",
    country: "🇪🇸",
    countryName: "Spain",
    thumbnail: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop",
    duration: "1:58",
  },
  {
    id: 3,
    clientName: "Robert Chen",
    companyName: "Vancouver Tech",
    companyLogo: "VT",
    country: "🇨🇦",
    countryName: "Canada",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    duration: "3:12",
  },
];

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "4.9", label: "Average Rating" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Countries Served" },
];

const Testimonials = () => {
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
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Client Testimonials
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                What Our Clients{" "}
                <span className="text-primary">Say About Us</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it. Here's what businesses around the world 
                have to say about working with NETREX.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-border">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Text Testimonials */}
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
                Client <span className="text-primary">Reviews</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real feedback from real clients around the world.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {textTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.clientName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.clientName}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                            {testimonial.companyLogo}
                          </span>
                          {testimonial.companyName}
                        </div>
                      </div>
                    </div>
                    <span className="text-2xl">{testimonial.country}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10" />
                    <p className="text-muted-foreground relative z-10">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Country tag */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      Project from {testimonial.countryName}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
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
                Video <span className="text-primary">Testimonials</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear directly from our clients about their experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.clientName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full bg-foreground/80 text-white text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{video.clientName}</div>
                        <div className="text-sm text-muted-foreground">{video.companyName}</div>
                      </div>
                      <span className="text-2xl">{video.country}</span>
                    </div>
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
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Let's discuss your project and create something amazing together.
              </p>
              <Link to="/contact">
                <Button variant="ctaWhite" size="lg">
                  Start Your Project
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

export default Testimonials;
