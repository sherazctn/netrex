import { useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight, Search, CalendarDays, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  archive,
  departments,
  jobLocations,
  jobStats,
  jobTypes,
  jobYears,
  openings,
  type Job,
  type JobStatus,
} from "@/data/careersData";

const ALL = "All";

const statusLabels: Record<JobStatus, string> = {
  open: "Actively Hiring",
  hired: "Position Filled",
  expired: "Listing Expired",
};

function StatusBadge({ status }: { status: JobStatus }) {
  if (status === "hired") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
        <CheckCircle2 className="h-3.5 w-3.5" />
        {statusLabels.hired}
      </span>
    );
  }

  if (status === "expired") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-neutral-900 dark:bg-neutral-400 opacity-60 animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neutral-900 dark:bg-neutral-400" />
        </span>
        {statusLabels.expired}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
      </span>
      {statusLabels.open}
    </span>
  );
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

function FilterPills({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</div>
      <div className="flex flex-wrap gap-2">
        {[ALL, ...options].map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              value === option
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground/80 border-border hover:border-primary/40 hover:text-primary"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function JobRow({ job, index }: { job: Job; index: number }) {
  const isOpen = job.status === "open";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.04 }}
      className={`p-5 md:p-6 rounded-2xl bg-card border transition-all group ${
        isOpen ? "border-accent/40 hover:border-accent hover:shadow-lg" : "border-border hover:border-primary/30"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">{job.title}</h3>
            <StatusBadge status={job.status} />
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.type}</span>
            <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.department}</span>
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{job.experience}</span>
            <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />Posted {formatDate(job.postedAt)}</span>
          </div>
        </div>
        {isOpen ? (
          <Link to="/contact" className="flex-shrink-0">
            <Button variant="hero" size="sm" className="group/btn">
              Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        ) : (
          <Button variant="outline" size="sm" disabled className="flex-shrink-0">
            {job.status === "hired" ? "Closed - Hired" : "Closed - Expired"}
          </Button>
        )}
      </div>
    </motion.div>
  );
}

const Careers = () => {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState(ALL);
  const [location, setLocation] = useState(ALL);
  const [type, setType] = useState(ALL);
  const [year, setYear] = useState(ALL);
  const [archiveStatus, setArchiveStatus] = useState(ALL);

  const matches = (job: Job) =>
    (department === ALL || job.department === department) &&
    (location === ALL || job.location === location) &&
    (type === ALL || job.type === type) &&
    (query.trim() === "" || job.title.toLowerCase().includes(query.trim().toLowerCase()));

  const filteredOpen = useMemo(
    () => openings.filter(matches),
    [query, department, location, type]
  );

  const filteredArchive = useMemo(
    () =>
      archive.filter(
        (job) =>
          matches(job) &&
          (year === ALL || job.postedAt.startsWith(year)) &&
          (archiveStatus === ALL ||
            (archiveStatus === "Hired" && job.status === "hired") ||
            (archiveStatus === "Expired" && job.status === "expired"))
      ),
    [query, department, location, type, year, archiveStatus]
  );

  const careersSchema = {
    "@context": "https://schema.org",
    "@graph": openings.map((job) => ({
      "@type": "JobPosting",
      title: job.title,
      datePosted: job.postedAt,
      employmentType: job.type.toUpperCase().replace("-", "_"),
      hiringOrganization: {
        "@type": "Organization",
        name: "NETREX INC",
        sameAs: "https://www.netrexinc.com",
      },
      jobLocation: {
        "@type": "Place",
        address: { "@type": "PostalAddress", addressLocality: job.location },
      },
      description: `${job.title} role in ${job.department} at NETREX INC. Experience required: ${job.experience}.`,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Careers at NETREX Inc | Jobs in Tech, AI, Design & Marketing"
        description="Explore careers at NETREX Inc. See live openings for Full Stack Developers, AI Automation Engineers, Project Managers and more, plus our full hiring archive since 2019."
        canonical="https://www.netrexinc.com/careers"
        schema={careersSchema}
      />
      <Header />
      <main>
        <PageHero
          badge="Careers"
          title="Build Your Career With"
          highlight="NETREX"
          description="We have hired across 9 countries since 2019. Explore live openings and our full hiring history below."
        />

        {/* Hiring stats */}
        <section className="pt-12">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Roles Posted", value: jobStats.total },
                { label: "Open Now", value: jobStats.open },
                { label: "Positions Filled", value: jobStats.hired },
                { label: "Expired Listings", value: jobStats.expired },
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-2xl bg-card border border-border text-center">
                  <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="pt-10">
          <div className="container-wide">
            <div className="p-6 rounded-3xl bg-card border border-border space-y-5">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by job title, e.g. Developer, Designer, AI"
                  className="pl-11"
                  aria-label="Search jobs"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <FilterPills label="Department" options={departments} value={department} onChange={setDepartment} />
                <FilterPills label="Job Type" options={jobTypes} value={type} onChange={setType} />
              </div>
              <FilterPills label="Location" options={jobLocations} value={location} onChange={setLocation} />
            </div>
          </div>
        </section>

        {/* Section 1: Open positions */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold">Open Positions</h2>
                <p className="text-muted-foreground text-sm mt-1">Applications reviewed within 5 working days.</p>
              </div>
              <span className="text-sm text-muted-foreground">{filteredOpen.length} of {openings.length}</span>
            </div>
            {filteredOpen.length ? (
              <div className="space-y-4">
                {filteredOpen.map((job, i) => (
                  <JobRow key={job.id} job={job} index={i} />
                ))}
              </div>
            ) : (
              <p className="p-6 rounded-2xl bg-card border border-border text-muted-foreground">
                No open roles match these filters. Try clearing a filter or send us a speculative application.
              </p>
            )}
          </div>
        </section>

        {/* Section 2: Hiring archive */}
        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold">Hiring Archive (2019 - 2026)</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Every role we have run, with its final outcome. Green means filled, black means the listing expired.
                </p>
              </div>
              <span className="text-sm text-muted-foreground">{filteredArchive.length} of {archive.length}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <FilterPills label="Year Posted" options={jobYears} value={year} onChange={setYear} />
              <FilterPills label="Outcome" options={["Hired", "Expired"]} value={archiveStatus} onChange={setArchiveStatus} />
            </div>

            {filteredArchive.length ? (
              <div className="space-y-4">
                {filteredArchive.map((job, i) => (
                  <JobRow key={job.id} job={job} index={i} />
                ))}
              </div>
            ) : (
              <p className="p-6 rounded-2xl bg-card border border-border text-muted-foreground">
                No archived roles match these filters.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Do not see your role?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              We review speculative applications from senior engineers, designers and AI specialists all year round.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-background text-primary border-background">
                Send Your Application <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Careers;
