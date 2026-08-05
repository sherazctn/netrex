import { useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUpNumber } from "@/components/ui/CountUpNumber";

const categories = ["All", "Web Development", "Mobile Apps", "AI & Automation", "Branding & Marketing"] as const;

// Sample testimonials - these would be managed from admin dashboard
const textTestimonials = [
  {
    id: 1,
    clientName: "Ahmed Al Rashid",
    companyName: "Gulf Properties",
    companyLogo: "GP",
    country: "🇦🇪",
    countryName: "UAE",
    category: "Web Development",
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
    category: "Web Development",
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
    category: "Mobile Apps",
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
    category: "Web Development",
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
    category: "AI & Automation",
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
    category: "AI & Automation",
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
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 4.9, suffix: "", label: "Average Rating" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Countries Served" },
];

const ratingBreakdown = [
  { stars: 5, pct: 92 },
  { stars: 4, pct: 6 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredTestimonials = useMemo(() => {
    if (activeCategory === "All") return textTestimonials;
    return textTestimonials.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Client Testimonials & Reviews - NETREX Inc"
        description="Read verified NETREX Inc client reviews from businesses across the UAE, USA, UK and 6 other countries on web, mobile, AI and marketing projects."
        canonical="https://www.netrexinc.com/testimonials"
      />
      <Header />
      <main>
        <PageHero
          badge="Client Testimonials"
          title="What Our Clients"
          highlight="Say About Us"
          description="Don't just take our word for it. Here's what businesses around the world have to say about working with NETREX."
        />

        {/* Rating summary */}
        <section className="py-14 md:py-16">
          <div className="container-wide">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="grid gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-[auto_1fr] md:p-10"
            >
              <div className="flex flex-col items-center justify-center border-b border-border pb-6 text-center md:border-b-0 md:border-r md:pb-0 md:pr-10">
                <div className="font-display text-5xl font-bold text-primary">4.9</div>
                <div className="mb-1 mt-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Based on 500+ client reviews</div>
              </div>
              <div className="flex flex-col justify-center gap-2">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <span className="w-10 text-sm text-muted-foreground">{row.stars} star</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <span className="w-10 text-right text-sm text-muted-foreground">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="pb-4">
          <div className="container-wide">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6 md:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="mb-2 font-display text-3xl font-bold text-primary md:text-4xl">
                    {Number.isInteger(stat.value) ? (
                      <CountUpNumber end={stat.value} suffix={stat.suffix} />
                    ) : (
                      <span>{stat.value}{stat.suffix}</span>
                    )}
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
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Client <span className="text-primary">Reviews</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Real feedback from real clients around the world.
              </p>
            </motion.div>

            {/* Category filters */}
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.clientName}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold">{testimonial.clientName}</div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs">
                              {testimonial.companyLogo}
                            </span>
                            {testimonial.companyName}
                          </div>
                        </div>
                      </div>
                      <span className="text-2xl">{testimonial.country}</span>
                    </div>

                    <div className="mb-4 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary/10" />
                      <p className="relative z-10 text-muted-foreground">"{testimonial.text}"</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs text-muted-foreground">
                        Project from {testimonial.countryName}
                      </span>
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/70">
                        {testimonial.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Video <span className="text-primary">Testimonials</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Hear directly from our clients about their experience.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={video.id}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.clientName}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 transition-colors group-hover:bg-foreground/50">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg transition-transform group-hover:scale-110">
                        <Play className="ml-1 h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-full bg-foreground/80 px-2 py-1 text-xs text-background">
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
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h2 className="mb-6 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                Ready to Join Our Success Stories?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
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
