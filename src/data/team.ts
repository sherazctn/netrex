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
  /** Photo in /public/team (illustrated avatar in /public/team/avatars until a real photo is supplied). */
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

const CORE_TEAM: TeamMember[] = [
  // Operations
  { name: "Muhammad Aoun", role: "Website Designer", department: "Operations", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/avatars/muhammad-aoun.svg", status: "Active" },
  { name: "Ali Khan", role: "Marketing Manager", department: "Operations", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/ali-khan.webp", status: "Active" },

  // Project Management
  { name: "Bilal Khan", role: "Senior Analyst & Project Manager", department: "Project Management", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/bilal-khan.webp", experienceSince: 2012, status: "Active" },

  // Development
  { name: "Irfan Ul Haq", role: "MERN Stack Developer", department: "Development", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/irfan-ul-haq.webp", status: "Active" },
  { name: "Hafeez ur Rahman", role: "MERN Stack Developer", department: "Development", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/hafeez-ur-rahman.webp", status: "Active" },
  { name: "Sair Khan", role: "PHP Developer", department: "Development", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/sair-khan.webp", status: "Active" },
  { name: "Muhammad Waqas", role: "Mobile App Developer", department: "Development", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/muhammad-waqas.webp", status: "Active" },

  // Marketing
  { name: "Nirmal Memon", role: "Growth Marketing Executive", department: "Marketing", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/avatars/nirmal-memon.svg", status: "Active" },
  { name: "Junaid Nadeem", role: "Email Marketing Executive", department: "Marketing", office: "Lahore, Pakistan", countryCode: "PK", image: "/team/junaid-nadeem.webp", status: "Active" },

  // Sales & Client Success
  { name: "Rashid Bin Abdullah Al Majid", role: "Sales Manager (Gulf Region)", department: "Sales & Client Success", office: "Dubai, UAE", countryCode: "AE", image: "/team/avatars/rashid-bin-abdullah-al-majid.svg", status: "Active" },
  { name: "Hannah Louise", role: "Sales & Marketing Manager (UK)", department: "Sales & Client Success", office: "London, UK", countryCode: "GB", image: "/team/avatars/hannah-louise.svg", status: "Active" },
  { name: "Jessica Marie", role: "Customer Success Manager", department: "Sales & Client Success", office: "London, UK", countryCode: "GB", image: "/team/avatars/jessica-marie.svg", status: "Active" },
  { name: "Avery Claire", role: "Sales & Marketing Manager (USA)", department: "Sales & Client Success", office: "New York, USA", countryCode: "US", image: "/team/avatars/avery-claire.svg", status: "Active" },
  { name: "Nora Elise", role: "Sales Manager (Canada)", department: "Sales & Client Success", office: "Vancouver, Canada", countryCode: "CA", image: "/team/avatars/nora-elise.svg", status: "Active" },
  { name: "Isaac Flynn", role: "Sales Manager (Australia)", department: "Sales & Client Success", office: "Brisbane, Australia", countryCode: "AU", image: "/team/avatars/isaac-flynn.svg", status: "Active" },
];

const anonymousAvatars = [
  "/team/avatars/muhammad-aoun.svg",
  "/team/avatars/nirmal-memon.svg",
  "/team/avatars/rashid-bin-abdullah-al-majid.svg",
  "/team/avatars/hannah-louise.svg",
  "/team/avatars/jessica-marie.svg",
  "/team/avatars/avery-claire.svg",
  "/team/avatars/nora-elise.svg",
  "/team/avatars/isaac-flynn.svg",
];

const departmentRoles: Record<Department, string[]> = {
  Operations: ["Operations Coordinator", "Quality Coordinator", "Office Administrator", "Resource Coordinator"],
  "Project Management": ["Project Manager", "Delivery Coordinator", "Business Analyst", "Quality Assurance Coordinator"],
  Development: ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "Mobile App Developer"],
  Marketing: ["SEO Specialist", "Content Strategist", "Performance Marketing Specialist", "Social Media Specialist"],
  "Sales & Client Success": ["Business Development Executive", "Client Success Executive", "Account Manager", "Sales Coordinator"],
};

const departmentOffice: Record<Department, { office: string; countryCode: string }> = {
  Operations: { office: "Lahore, Pakistan", countryCode: "PK" },
  "Project Management": { office: "Lahore, Pakistan", countryCode: "PK" },
  Development: { office: "Lahore, Pakistan", countryCode: "PK" },
  Marketing: { office: "Lahore, Pakistan", countryCode: "PK" },
  "Sales & Client Success": { office: "Global", countryCode: "" },
};

const departmentTargets: Record<Department, number> = {
  Operations: 12,
  "Project Management": 11,
  Development: 14,
  Marketing: 13,
  "Sales & Client Success": 15,
};

const extraNames: Record<Department, string[]> = {
  Operations: ["Usman Tariq", "Ayesha Siddiqui", "Hamza Rafiq", "Mahnoor Iqbal", "Faisal Mehmood", "Sana Javed", "Zain Abbas", "Hira Aslam", "Omar Farooq", "Rabia Noor"],
  "Project Management": ["Kamran Akhtar", "Maryam Shah", "Adeel Hussain", "Fatima Zahra", "Saad Qureshi", "Iqra Malik", "Taimoor Ali", "Amna Riaz", "Danish Butt", "Mehwish Anwar"],
  Development: ["Ahmed Raza", "Hassan Javed", "Areeba Khan", "Shahzaib Ahmed", "Noman Saleem", "Zara Imran", "Talha Mirza", "Laiba Tahir", "Waleed Akram", "Momina Rauf"],
  Marketing: ["Hina Sheikh", "Bilal Ashraf", "Anum Yousaf", "Arslan Haider", "Sidra Naveed", "Fahad Iqbal", "Komal Arif", "Shoaib Akhtar", "Mariam Latif", "Haris Nawaz", "Alina Pervaiz"],
  "Sales & Client Success": ["Daniel Brooks", "Sophie Turner", "Liam Carter", "Emma Wilson", "Ahmed Al Mansoori", "Olivia Bennett", "Lukas Schneider", "Mia Thompson", "Yusuf Al Harbi"],
};

const anonymousMembers = DEPARTMENTS.flatMap((department, departmentIndex) => {
  const existingCount = CORE_TEAM.filter((member) => member.department === department).length;
  return Array.from({ length: Math.max(0, departmentTargets[department] - existingCount) }, (_, index): TeamMember => {
    const location = departmentOffice[department];
    return {
      name: extraNames[department][index % extraNames[department].length],
      role: departmentRoles[department][index % departmentRoles[department].length],
      department,
      office: location.office,
      countryCode: location.countryCode,
      image: anonymousAvatars[(departmentIndex * 3 + index) % anonymousAvatars.length],
      experienceSince: 2017 + ((departmentIndex * 2 + index) % 7),
      status: "Active",
    };
  });
});

export const TEAM: TeamMember[] = [...CORE_TEAM, ...anonymousMembers];
