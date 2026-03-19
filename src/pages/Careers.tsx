import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const openPositions = [
  { title: "Senior React Developer", location: "Dubai / Remote", type: "Full-time", department: "Engineering" },
  { title: "UI/UX Designer", location: "Dubai", type: "Full-time", department: "Design" },
  { title: "Digital Marketing Specialist", location: "Remote", type: "Full-time", department: "Marketing" },
  { title: "Full Stack Developer", location: "Lahore", type: "Full-time", department: "Engineering" },
  { title: "Project Manager", location: "Dubai", type: "Full-time", department: "Operations" },
  { title: "Content Writer", location: "Remote", type: "Part-time", department: "Marketing" },
];

const Careers = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Careers</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our <span className="text-primary">Global Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Be part of an innovative team shaping the future of digital experiences across 6 countries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.department}</span>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="group/btn">
                      Apply <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Careers;
