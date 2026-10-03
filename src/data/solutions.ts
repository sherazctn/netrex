import erpSheet from "@/assets/solutions/erp-contact-sheet.jpg";
import khataSheet from "@/assets/solutions/khata-contact-sheet.jpg";
import whatsappSheet from "@/assets/solutions/whatsapp-contact-sheet.jpg";

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
}

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
  },
];

export const getSolution = (slug?: string) => solutions.find((solution) => solution.slug === slug);
