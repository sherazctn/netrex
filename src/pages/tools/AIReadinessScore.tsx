import { Brain, Database, Users, Workflow } from "lucide-react";
import { QuizTool, QuizQuestion } from "@/components/tools/QuizTool";

const questions: QuizQuestion[] = [
  {
    id: "data",
    question: "How organised is your business data today?",
    icon: Database,
    options: [
      { label: "Mostly paper, WhatsApp and email", value: "low", emoji: "📄" },
      { label: "Spreadsheets shared across the team", value: "sheets", emoji: "📊" },
      { label: "A CRM or ERP, but siloed", value: "siloed", emoji: "🗂️" },
      { label: "Central systems with clean data", value: "clean", emoji: "🧠" },
    ],
  },
  {
    id: "team",
    question: "How many people handle repetitive digital work?",
    icon: Users,
    options: [
      { label: "1 - 3 people", value: "small", emoji: "👤" },
      { label: "4 - 15 people", value: "mid", emoji: "👥" },
      { label: "16 - 50 people", value: "large", emoji: "🏢" },
      { label: "50+ people", value: "enterprise", emoji: "🌐" },
    ],
  },
  {
    id: "usage",
    question: "How is AI used in your business right now?",
    icon: Brain,
    options: [
      { label: "Not at all", value: "none", emoji: "🚫" },
      { label: "Individuals use ChatGPT informally", value: "informal", emoji: "💬" },
      { label: "One or two automated workflows", value: "some", emoji: "⚙️" },
      { label: "AI is part of our core process", value: "core", emoji: "🚀" },
    ],
  },
  {
    id: "goal",
    question: "What would move the needle most?",
    icon: Workflow,
    options: [
      { label: "Faster customer response", value: "support", emoji: "⚡" },
      { label: "More qualified leads", value: "leads", emoji: "🎯" },
      { label: "Lower operating cost", value: "cost", emoji: "💰" },
      { label: "Better reporting and forecasting", value: "insight", emoji: "📈" },
    ],
  },
];

const dataScore: Record<string, number> = { low: 8, sheets: 16, siloed: 24, clean: 32 };
const teamScore: Record<string, number> = { small: 12, mid: 18, large: 22, enterprise: 26 };
const usageScore: Record<string, number> = { none: 4, informal: 12, some: 22, core: 30 };

function compute(answers: Record<string, string>) {
  const score = Math.min(
    98,
    (dataScore[answers.data] ?? 16) + (teamScore[answers.team] ?? 18) + (usageScore[answers.usage] ?? 12),
  );
  const tier = score < 40 ? "Starter" : score < 65 ? "Emerging" : score < 82 ? "Advancing" : "AI-Led";
  const potential = Math.min(99, score + (answers.usage === "core" ? 8 : 28));

  return {
    negTitle: "Where You Are Today",
    posTitle: "Where You Could Be in 90 Days",
    rows: [
      { label: "AI Readiness Score", neg: `${score}/100`, pos: `${potential}/100` },
      { label: "Maturity Tier", neg: tier, pos: potential > 82 ? "AI-Led" : "Advancing" },
      { label: "Manual Hours / Week", neg: `${Math.round((100 - score) * 1.4)} hrs`, pos: `${Math.round((100 - potential) * 1.1)} hrs` },
      { label: "Decision Speed", neg: "Days", pos: "Minutes" },
    ],
    highlight: {
      label: "Efficiency Gain",
      neg: "0%",
      pos: `+${Math.max(15, potential - score)}%`,
    },
    examples: [
      { company: "Gulf Logistics Group", metric: "Manual data entry", before: "34 hrs/wk", after: "6 hrs/wk", growth: "-82%" },
      { company: "MedClinic Pro", metric: "Patient response time", before: "9 hrs", after: "45 sec", growth: "-99%" },
      { company: "RetailOne", metric: "Forecast accuracy", before: "61%", after: "92%", growth: "+51%" },
      { company: "LegalEdge", metric: "Document review time", before: "5 hrs", after: "22 min", growth: "-93%" },
    ],
  };
}

const AIReadinessScore = () => (
  <QuizTool
    seoTitle="AI Readiness Score | Free AI Assessment Tool - NETREX"
    seoDescription="Free AI readiness assessment: score your business on data, team and automation maturity and see the efficiency gain AI can unlock in 90 days."
    canonical="https://netrex.lovable.app/tools/ai-readiness"
    badge="Free AI Tool"
    icon={Brain}
    heading="AI Readiness"
    headingHighlight="Score"
    intro="Answer 4 quick questions and get a clear score on how ready your business is for AI, plus the gains you are leaving on the table."
    resultsHeading="Your AI Readiness"
    resultsHighlight="Report"
    examplesHeading="Real AI Transformation Results"
    questions={questions}
    compute={compute}
  />
);

export default AIReadinessScore;
