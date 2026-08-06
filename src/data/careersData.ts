export type JobStatus = "open" | "hired" | "expired";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  status: JobStatus;
  postedAt: string; // ISO date
  experience: string;
}

export const departments = [
  "Engineering",
  "AI & Automation",
  "Design",
  "Marketing",
  "Sales & Business Development",
  "Operations",
  "Customer Success",
  "Finance & Legal",
  "People & Talent",
];

export const jobLocations = [
  "Dubai, UAE",
  "New York, USA",
  "London, UK",
  "Berlin, Germany",
  "Vancouver, Canada",
  "Melbourne, Australia",
  "Singapore",
  "Riyadh, Saudi Arabia",
  "Lahore, Pakistan",
  "Remote - Global",
];

export const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];

/** Currently accepting applications. */
const openJobs: Job[] = [
  {
    id: "open-full-stack-developer",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Dubai, UAE / Remote",
    type: "Full-time",
    status: "open",
    postedAt: "2026-07-28",
    experience: "3-6 years",
  },
  {
    id: "open-ai-automation-engineer",
    title: "AI Automation Engineer",
    department: "AI & Automation",
    location: "Remote - Global",
    type: "Full-time",
    status: "open",
    postedAt: "2026-07-21",
    experience: "2-5 years",
  },
  {
    id: "open-project-manager",
    title: "Project Manager",
    department: "Operations",
    location: "Dubai, UAE",
    type: "Full-time",
    status: "open",
    postedAt: "2026-07-14",
    experience: "4-8 years",
  },
  {
    id: "open-business-developer",
    title: "Business Developer",
    department: "Sales & Business Development",
    location: "London, UK / Remote",
    type: "Full-time",
    status: "open",
    postedAt: "2026-07-06",
    experience: "3-7 years",
  },
  {
    id: "open-customer-service-representative",
    title: "Customer Service Representative",
    department: "Customer Success",
    location: "Lahore, Pakistan",
    type: "Full-time",
    status: "open",
    postedAt: "2026-06-30",
    experience: "1-3 years",
  },
];

/** Titles used to build the closed-role archive (2019 - 2026). */
const archiveTitles: { title: string; department: string; experience: string }[] = [
  { title: "Senior React Developer", department: "Engineering", experience: "5-8 years" },
  { title: "Frontend Engineer", department: "Engineering", experience: "2-4 years" },
  { title: "Backend Engineer (Node.js)", department: "Engineering", experience: "3-6 years" },
  { title: "Laravel Developer", department: "Engineering", experience: "2-5 years" },
  { title: "WordPress Developer", department: "Engineering", experience: "2-4 years" },
  { title: "Shopify Developer", department: "Engineering", experience: "2-4 years" },
  { title: "Flutter Developer", department: "Engineering", experience: "2-5 years" },
  { title: "iOS Engineer (Swift)", department: "Engineering", experience: "3-6 years" },
  { title: "Android Engineer (Kotlin)", department: "Engineering", experience: "3-6 years" },
  { title: "DevOps Engineer", department: "Engineering", experience: "3-7 years" },
  { title: "Site Reliability Engineer", department: "Engineering", experience: "4-8 years" },
  { title: "Cloud Architect (AWS)", department: "Engineering", experience: "6-10 years" },
  { title: "QA Automation Engineer", department: "Engineering", experience: "2-5 years" },
  { title: "Blockchain Developer", department: "Engineering", experience: "3-6 years" },
  { title: "Machine Learning Engineer", department: "AI & Automation", experience: "3-6 years" },
  { title: "Data Engineer", department: "AI & Automation", experience: "3-6 years" },
  { title: "Data Scientist", department: "AI & Automation", experience: "3-6 years" },
  { title: "Prompt Engineer", department: "AI & Automation", experience: "1-3 years" },
  { title: "Conversational AI Specialist", department: "AI & Automation", experience: "2-5 years" },
  { title: "BI Analyst", department: "AI & Automation", experience: "2-5 years" },
  { title: "Senior UI/UX Designer", department: "Design", experience: "4-7 years" },
  { title: "Product Designer", department: "Design", experience: "3-6 years" },
  { title: "Brand Identity Designer", department: "Design", experience: "2-5 years" },
  { title: "Motion Graphics Designer", department: "Design", experience: "2-4 years" },
  { title: "Graphic Designer", department: "Design", experience: "1-3 years" },
  { title: "Design Systems Lead", department: "Design", experience: "6-9 years" },
  { title: "SEO Specialist", department: "Marketing", experience: "2-5 years" },
  { title: "GEO / AI Search Strategist", department: "Marketing", experience: "2-4 years" },
  { title: "Performance Marketing Manager", department: "Marketing", experience: "4-7 years" },
  { title: "Social Media Manager", department: "Marketing", experience: "2-4 years" },
  { title: "Content Strategist", department: "Marketing", experience: "3-5 years" },
  { title: "Copywriter", department: "Marketing", experience: "1-4 years" },
  { title: "Marketing Automation Specialist", department: "Marketing", experience: "2-5 years" },
  { title: "Enterprise Account Executive", department: "Sales & Business Development", experience: "5-9 years" },
  { title: "Inside Sales Representative", department: "Sales & Business Development", experience: "1-3 years" },
  { title: "Partnerships Manager", department: "Sales & Business Development", experience: "4-7 years" },
  { title: "Bid & Proposal Specialist", department: "Sales & Business Development", experience: "3-6 years" },
  { title: "Delivery Manager", department: "Operations", experience: "5-9 years" },
  { title: "Scrum Master", department: "Operations", experience: "3-6 years" },
  { title: "Business Analyst", department: "Operations", experience: "3-6 years" },
  { title: "IT Support Engineer", department: "Operations", experience: "1-4 years" },
  { title: "Customer Success Manager", department: "Customer Success", experience: "3-6 years" },
  { title: "Technical Support Specialist", department: "Customer Success", experience: "1-4 years" },
  { title: "Onboarding Specialist", department: "Customer Success", experience: "2-4 years" },
  { title: "Financial Analyst", department: "Finance & Legal", experience: "3-6 years" },
  { title: "Accountant", department: "Finance & Legal", experience: "2-5 years" },
  { title: "Compliance Officer", department: "Finance & Legal", experience: "4-8 years" },
  { title: "Contracts Counsel", department: "Finance & Legal", experience: "5-9 years" },
  { title: "Technical Recruiter", department: "People & Talent", experience: "2-5 years" },
  { title: "HR Business Partner", department: "People & Talent", experience: "4-7 years" },
  { title: "Learning & Development Lead", department: "People & Talent", experience: "5-8 years" },
];

const ARCHIVE_COUNT = 82;

/** Deterministic archive so every render/SSR pass matches. */
const archiveJobs: Job[] = Array.from({ length: ARCHIVE_COUNT }, (_, i) => {
  const base = archiveTitles[i % archiveTitles.length];
  const year = 2019 + (i % 8); // 2019 - 2026
  const month = ((i * 5) % 12) + 1;
  const day = ((i * 7) % 27) + 1;
  const cycle = i % 10;
  // 9 in 10 archived roles were filled; the rest expired unfilled.
  const status: JobStatus = cycle === 4 ? "expired" : "hired";
  const seniority = i >= archiveTitles.length ? " II" : "";
  return {
    id: `arc-${i + 1}-${base.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: `${base.title}${seniority}`,
    department: base.department,
    location: jobLocations[(i * 3) % jobLocations.length],
    type: jobTypes[i % 7 === 0 ? (i % 4) : 0],
    status,
    postedAt: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    experience: base.experience,
  };
});

export const allJobs: Job[] = [...openJobs, ...archiveJobs].sort(
  (a, b) => +new Date(b.postedAt) - +new Date(a.postedAt)
);

export const openings = allJobs.filter((j) => j.status === "open");
export const archive = allJobs.filter((j) => j.status !== "open");

export const jobYears = Array.from(new Set(allJobs.map((j) => j.postedAt.slice(0, 4)))).sort(
  (a, b) => Number(b) - Number(a)
);

export const jobStats = {
  total: allJobs.length,
  open: openings.length,
  hired: allJobs.filter((j) => j.status === "hired").length,
  expired: allJobs.filter((j) => j.status === "expired").length,
};
