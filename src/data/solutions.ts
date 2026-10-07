// Temporary branded placeholder until the original solution screenshots are supplied.
import erpSheet from "@/assets/solutions/solution-placeholder.jpg";
import khataSheet from "@/assets/solutions/solution-placeholder.jpg";
import whatsappSheet from "@/assets/solutions/solution-placeholder.jpg";

export interface Solution {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  badges: string[];
  slides: { title: string; position: number }[];
  image: string;
  capabilities: string[];
  idealFor: string[];
  /** Search title and description (title under 60 characters, description under 160). */
  seoTitle: string;
  seoDescription: string;
  faqs: { q: string; a: string }[];
}

const commonFaqs = (name: string) => [
  {
    q: `Can ${name} be customised for my business?`,
    a: `Yes. NETREX Inc is a software development company, so ${name} is set up around your workflows, roles and reports during implementation rather than sold as a fixed package.`,
  },
  {
    q: `How do I get a demo of ${name}?`,
    a: "Use the Request a Demo button or contact NETREX through the contact page or WhatsApp on +971 50 200 8313. We walk through the product on a call and scope what your business needs.",
  },
];

const slideTitles = {
  erp: ["Executive Dashboard", "Inventory Management", "Human Resources", "Sales Pipeline", "Finance Reporting"],
  khata: ["Cashflow Overview", "Invoices & Receivables", "Expense Tracking", "Ledger Accounts", "Tax & Financial Reports"],
  whatsapp: ["Unified Inbox", "Campaign Builder", "Automation Workflow", "Contact Segmentation", "Performance Analytics"],
};

export const solutions: Solution[] = [
  {
    slug: "netrex-erp",
    name: "NETREX ERP",
    category: "Enterprise Operations",
    shortDescription: "One connected workspace for finance, inventory, people, sales and operational reporting.",
    description: "NETREX ERP is a modular business management platform designed to replace disconnected spreadsheets and tools with coordinated workflows, permissions and reporting.",
    badges: ["Operations", "Inventory", "HR", "Finance"],
    slides: slideTitles.erp.map((title, position) => ({ title, position })),
    image: erpSheet,
    capabilities: ["Role-based dashboards", "Inventory and purchasing workflows", "Employee and resource records", "Sales pipeline visibility", "Financial and management reporting", "Configurable approvals"],
    idealFor: ["Multi-department companies", "Growing distribution businesses", "Service organizations needing unified reporting"],
    seoTitle: "NETREX ERP | ERP Software for Growing Businesses",
    seoDescription: "NETREX ERP connects finance, inventory, HR, sales and reporting in one workspace with role-based dashboards and approvals. Request a demo.",
    faqs: [
      { q: "What is NETREX ERP?", a: "NETREX ERP is a modular business management platform from NETREX Inc that brings finance, inventory and purchasing, employee records, sales pipeline and management reporting into one workspace with role-based access and approvals." },
      { q: "Who is NETREX ERP for?", a: "Companies with several departments, distribution businesses managing stock and purchasing, and service organisations that want one source of truth for reporting instead of separate spreadsheets and tools." },
      ...commonFaqs("NETREX ERP"),
    ],
  },
  {
    slug: "netrex-khata",
    name: "NETREX KHATA",
    category: "Accounting",
    shortDescription: "Clear business accounting for invoices, expenses, ledgers, cashflow and decision-ready reports.",
    description: "NETREX KHATA brings everyday accounting tasks into a focused workspace that helps teams record transactions, follow receivables and understand financial performance.",
    badges: ["Accounting", "Invoicing", "Expenses", "Reports"],
    slides: slideTitles.khata.map((title, position) => ({ title, position })),
    image: khataSheet,
    capabilities: ["Cashflow overview", "Invoice and receivable tracking", "Expense categorization", "Chart of accounts", "Financial statements", "Export-ready reporting"],
    idealFor: ["Small and growing businesses", "Finance and bookkeeping teams", "Owners seeking a clearer financial picture"],
    seoTitle: "NETREX KHATA | Accounting & Invoicing Software",
    seoDescription: "NETREX KHATA is business accounting software for invoices, receivables, expenses, ledgers, cashflow and financial reports. Request a demo.",
    faqs: [
      { q: "What is NETREX KHATA?", a: "NETREX KHATA is accounting software from NETREX Inc for recording transactions, issuing invoices, following receivables, categorising expenses and producing financial statements and export-ready reports." },
      { q: "What does khata mean?", a: "Khata is the word for a ledger or account book in Urdu and Hindi. NETREX KHATA brings that everyday bookkeeping into a clear digital workspace." },
      ...commonFaqs("NETREX KHATA"),
    ],
  },
  {
    slug: "netrex-whatsapp",
    name: "NETREX WhatsApp",
    category: "Customer Engagement",
    shortDescription: "Manage conversations, campaigns and automated customer journeys from one team workspace.",
    description: "NETREX WhatsApp is a customer engagement solution concept for organizing inbound conversations, audience segments, approved campaigns and measurable automation workflows.",
    badges: ["Shared Inbox", "Campaigns", "Automation", "Analytics"],
    slides: slideTitles.whatsapp.map((title, position) => ({ title, position })),
    image: whatsappSheet,
    capabilities: ["Unified team inbox", "Campaign workflow", "Automation journeys", "Contact segmentation", "Assignment and status controls", "Performance reporting"],
    idealFor: ["Sales and support teams", "Appointment-led businesses", "Organizations managing high conversation volumes"],
    seoTitle: "NETREX WhatsApp | Team Inbox, Campaigns & Automation",
    seoDescription: "NETREX WhatsApp gives sales and support teams a shared WhatsApp inbox, segmented campaigns, automated journeys and performance reports.",
    faqs: [
      { q: "What is NETREX WhatsApp?", a: "NETREX WhatsApp is a customer engagement workspace from NETREX Inc for managing WhatsApp conversations as a team, sending approved campaigns to segmented audiences and automating customer journeys, with reporting on performance." },
      { q: "Can several team members answer the same WhatsApp number?", a: "Yes. The unified inbox lets a team share one number, assign conversations and track their status, which suits sales and support teams handling high message volumes." },
      ...commonFaqs("NETREX WhatsApp"),
    ],
  },
];

export const getSolution = (slug?: string) => solutions.find((solution) => solution.slug === slug);
