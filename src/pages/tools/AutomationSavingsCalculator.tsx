import { Bot, Clock, DollarSign, Repeat } from "lucide-react";
import { QuizTool, QuizQuestion } from "@/components/tools/QuizTool";

const questions: QuizQuestion[] = [
  {
    id: "tasks",
    question: "Which repetitive process eats the most time?",
    icon: Repeat,
    options: [
      { label: "Data entry and reporting", value: "data", emoji: "⌨️" },
      { label: "Customer support replies", value: "support", emoji: "💬" },
      { label: "Invoicing and approvals", value: "finance", emoji: "🧾" },
      { label: "Lead follow-up and CRM updates", value: "sales", emoji: "📇" },
    ],
  },
  {
    id: "people",
    question: "How many people do this work?",
    icon: Bot,
    options: [
      { label: "1 - 2", value: "2", emoji: "👤" },
      { label: "3 - 5", value: "4", emoji: "👥" },
      { label: "6 - 12", value: "9", emoji: "🏢" },
      { label: "13+", value: "18", emoji: "🌐" },
    ],
  },
  {
    id: "hours",
    question: "Hours per person, per week, on that task?",
    icon: Clock,
    options: [
      { label: "Up to 5 hours", value: "5", emoji: "🕐" },
      { label: "6 - 12 hours", value: "9", emoji: "🕓" },
      { label: "13 - 20 hours", value: "16", emoji: "🕗" },
      { label: "More than 20 hours", value: "25", emoji: "🕛" },
    ],
  },
  {
    id: "rate",
    question: "Average fully-loaded hourly cost per person?",
    icon: DollarSign,
    options: [
      { label: "$10 - $20", value: "15", emoji: "💵" },
      { label: "$21 - $40", value: "30", emoji: "💰" },
      { label: "$41 - $70", value: "55", emoji: "🏦" },
      { label: "$70+", value: "85", emoji: "💎" },
    ],
  },
];

const automationRate: Record<string, number> = { data: 0.8, support: 0.65, finance: 0.7, sales: 0.6 };

const money = (n: number) => `$${Math.round(n).toLocaleString()}`;

function compute(answers: Record<string, string>) {
  const people = Number(answers.people) || 4;
  const hours = Number(answers.hours) || 9;
  const rate = Number(answers.rate) || 30;
  const auto = automationRate[answers.tasks] ?? 0.65;

  const weeklyHours = people * hours;
  const yearlyCost = weeklyHours * rate * 48;
  const savedHours = weeklyHours * auto;
  const savedCost = savedHours * rate * 48;

  return {
    negTitle: "Manual Process Today",
    posTitle: "With AI Automation",
    rows: [
      { label: "Team Hours / Week", neg: `${Math.round(weeklyHours)} hrs`, pos: `${Math.round(weeklyHours - savedHours)} hrs` },
      { label: "Hours Freed / Year", neg: "0 hrs", pos: `${Math.round(savedHours * 48).toLocaleString()} hrs` },
      { label: "Yearly Process Cost", neg: money(yearlyCost), pos: money(yearlyCost - savedCost) },
      { label: "Error Rate", neg: "3 - 8%", pos: "Under 1%" },
    ],
    highlight: {
      label: "Yearly Savings",
      neg: money(0),
      pos: `+${money(savedCost)}`,
    },
    examples: [
      { company: "Emirates Trade Co.", metric: "Invoice processing", before: "21 hrs/wk", after: "3 hrs/wk", growth: "-86%" },
      { company: "SupportDesk 24", metric: "First-reply time", before: "4 hrs", after: "12 sec", growth: "-99%" },
      { company: "BuildRight", metric: "Report preparation", before: "18 hrs/wk", after: "2 hrs/wk", growth: "-89%" },
      { company: "SalesForcePro", metric: "CRM data accuracy", before: "72%", after: "98%", growth: "+36%" },
    ],
  };
}

const AutomationSavingsCalculator = () => (
  <QuizTool
    seoTitle="AI Automation Savings Calculator | Free Tool - NETREX"
    seoDescription="Free AI automation savings calculator: estimate the hours and yearly cost your business can save by automating repetitive work with AI."
    canonical="https://www.netrexinc.com/tools/ai-automation-savings"
    badge="Free AI Tool"
    icon={Bot}
    heading="AI Automation"
    headingHighlight="Savings Calculator"
    intro="See exactly how many hours and dollars AI automation can give back to your team every year."
    resultsHeading="Your Automation"
    resultsHighlight="Savings"
    examplesHeading="Real Automation Results"
    questions={questions}
    compute={compute}
  />
);

export default AutomationSavingsCalculator;
