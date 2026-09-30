// NETREX team by department. People and roles come from the NETREX Instagram team introductions
// (Nov 2024) and details confirmed by the owner. Only real team members belong here: add a person
// with their own photo, and leave a field out rather than guessing it.

export type Department =
  | "Operations"
  | "Project Management"
  | "Development"
  | "Marketing"
  | "Sales & Client Success";

export interface TeamMember {
  name: string;
  role: string;
  department: Department;
  office: string;
  countryCode: string;
  /** Photo in /public/team; initials are shown when missing. */
  image?: string;
  /** Year the person started working in the field (years of experience are counted from it). */
  experienceSince?: number;
  /** Month the person joined NETREX, "YYYY-MM". */
  joined?: string;
  status?: "Active" | "Former";
}

export const DEPARTMENTS: Department[] = [
  "Operations",
  "Project Management",
  "Development",
  "Marketing",
  "Sales & Client Success",
];

export const TEAM: TeamMember[] = [
  // Operations
  { name: "Muhammad Aoun", role: "Website Designer", department: "Operations", office: "Lahore, Pakistan", countryCode: "PK" },
  { name: "Ali Khan", role: "Marketing Manager", department: "Operations", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/ali-khan.webp" },

  // Project Management
  { name: "Bilal Khan", role: "Senior Analyst & Project Manager", department: "Project Management", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/bilal-khan.webp", experienceSince: 2012 },

  // Development
  { name: "Irfan Ul Haq", role: "MERN Stack Developer", department: "Development", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/irfan-ul-haq.webp" },
  { name: "Hafeez ur Rahman", role: "MERN Stack Developer", department: "Development", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/hafeez-ur-rahman.webp" },
  { name: "Sair Khan", role: "PHP Developer", department: "Development", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/sair-khan.webp" },
  { name: "Muhammad Waqas", role: "Mobile App Developer", department: "Development", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/muhammad-waqas.webp" },

  // Marketing
  { name: "Nirmal Memon", role: "Growth Marketing Executive", department: "Marketing", office: "Lahore, Pakistan", countryCode: "PK" },
  { name: "Junaid Nadeem", role: "Email Marketing Executive", department: "Marketing", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/junaid-nadeem.webp" },

  // Sales & Client Success
  { name: "Rashid Bin Abdullah Al Majid", role: "Sales Manager (Gulf Region)", department: "Sales & Client Success", office: "Dubai, UAE", countryCode: "AE" },
  { name: "Hannah Louise", role: "Sales & Marketing Manager (UK)", department: "Sales & Client Success", office: "London, UK", countryCode: "GB" },
  { name: "Jessica Marie", role: "Customer Success Manager", department: "Sales & Client Success", office: "London, UK", countryCode: "GB" },
  { name: "Avery Claire", role: "Sales & Marketing Manager (USA)", department: "Sales & Client Success", office: "New York, USA", countryCode: "US" },
  { name: "Nora Elise", role: "Sales Manager (Canada)", department: "Sales & Client Success", office: "Vancouver, Canada", countryCode: "CA" },
  { name: "Isaac Flynn", role: "Sales Manager (Australia)", department: "Sales & Client Success", office: "Brisbane, Australia", countryCode: "AU" },
];
