import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { FiverrReviews, fiverrData } from "@/components/reviews/FiverrReviews";

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

// Verifiable figures only: projects from NETREX, rating data from the Fiverr gig.
const stats = [
  { value: 3000, suffix: "+", label: "Projects Delivered" },
  { value: fiverrData.rating, suffix: "", label: "Average Fiverr Rating" },
  { value: fiverrData.reviewCount, suffix: "", label: "Verified Fiverr Reviews" },
  {
    value: Math.round(((fiverrData.breakdown["5"] ?? 0) / fiverrData.reviewCount) * 100),
    suffix: "%",
    label: "Five-Star Reviews",
  },
];

// Real rating breakdown from the NETREX Fiverr gig (src/data/fiverrReviews.json).
const ratingBreakdown = [5, 4, 3, 2, 1].map((stars) => ({
  stars,
  count: fiverrData.breakdown[String(stars)] ?? 0,
  pct: Math.round(((fiverrData.breakdown[String(stars)] ?? 0) / fiverrData.reviewCount) * 100),
}));

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const Testimonials = () => {
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
                <div className="font-display text-5xl font-bold text-primary">{fiverrData.rating}</div>
                <div className="mb-1 mt-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  Based on{" "}
                  <a href={fiverrData.gigUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary">
                    {fiverrData.reviewCount} verified Fiverr reviews
                  </a>
                </div>
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
                    <span className="w-12 text-right text-sm text-muted-foreground tabular-nums">{row.count}</span>
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
                The latest 5-star reviews from verified NETREX clients on Fiverr, updated every month.
              </p>
            </motion.div>

            <FiverrReviews />

            <div className="mt-10 text-center">
              <a
                href={fiverrData.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                Read all {fiverrData.reviewCount} reviews on Fiverr
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
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
