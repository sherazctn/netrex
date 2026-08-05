import { MessageSquare, Users, Globe, TrendingUp } from "lucide-react";
import { QuizTool, QuizQuestion } from "@/components/tools/QuizTool";

const questions: QuizQuestion[] = [
  {
    id: "traffic",
    question: "How many visitors does your site get monthly?",
    icon: Globe,
    options: [
      { label: "Under 2,000", value: "1500", emoji: "🌱" },
      { label: "2,000 - 10,000", value: "6000", emoji: "📈" },
      { label: "10,000 - 50,000", value: "28000", emoji: "🚀" },
      { label: "50,000+", value: "80000", emoji: "🌍" },
    ],
  },
  {
    id: "inquiries",
    question: "How many customer inquiries do you handle monthly?",
    icon: MessageSquare,
    options: [
      { label: "Under 100", value: "70", emoji: "💬" },
      { label: "100 - 500", value: "300", emoji: "📨" },
      { label: "500 - 2,000", value: "1200", emoji: "📮" },
      { label: "2,000+", value: "3500", emoji: "📢" },
    ],
  },
  {
    id: "value",
    question: "Average value of one customer?",
    icon: TrendingUp,
    options: [
      { label: "Under $200", value: "150", emoji: "💵" },
      { label: "$200 - $1,000", value: "600", emoji: "💰" },
      { label: "$1,000 - $5,000", value: "2800", emoji: "🏦" },
      { label: "$5,000+", value: "9000", emoji: "💎" },
    ],
  },
  {
    id: "coverage",
    question: "When is your team available to reply?",
    icon: Users,
    options: [
      { label: "Business hours only", value: "hours", emoji: "🕘" },
      { label: "Extended hours, one shift", value: "extended", emoji: "🌆" },
      { label: "Almost 24/7 with delays", value: "near", emoji: "🌙" },
      { label: "True 24/7 team", value: "always", emoji: "⭐" },
    ],
  },
];

const missRate: Record<string, number> = { hours: 0.55, extended: 0.38, near: 0.22, always: 0.1 };
const money = (n: number) => `$${Math.round(n).toLocaleString()}`;

function compute(answers: Record<string, string>) {
  const traffic = Number(answers.traffic) || 6000;
  const inquiries = Number(answers.inquiries) || 300;
  const value = Number(answers.value) || 600;
  const missed = missRate[answers.coverage] ?? 0.38;

  const capturedNow = inquiries * (1 - missed);
  const capturedAI = inquiries * 0.94 + traffic * 0.012;
  const closeRate = 0.22;
  const revenueNow = capturedNow * closeRate * value;
  const revenueAI = capturedAI * closeRate * value;

  return {
    negTitle: "Without an AI Chatbot",
    posTitle: "With a NETREX AI Chatbot",
    rows: [
      { label: "Inquiries Answered / Month", neg: `${Math.round(capturedNow)}`, pos: `${Math.round(capturedAI)}` },
      { label: "Average Response Time", neg: answers.coverage === "always" ? "25 min" : "6 hrs", pos: "Under 10 sec" },
      { label: "Leads Captured / Month", neg: `${Math.round(capturedNow * closeRate)}`, pos: `${Math.round(capturedAI * closeRate)}` },
      { label: "Monthly Revenue", neg: money(revenueNow), pos: money(revenueAI) },
    ],
    highlight: {
      label: "Extra Revenue / Year",
      neg: money(0),
      pos: `+${money(Math.max(0, revenueAI - revenueNow) * 12)}`,
    },
    examples: [
      { company: "Dubai Property Hub", metric: "Qualified leads / month", before: "58", after: "173", growth: "+198%" },
      { company: "ClinicCare", metric: "Bookings after hours", before: "0", after: "94/mo", growth: "New channel" },
      { company: "ShopLane", metric: "Cart recovery", before: "8%", after: "27%", growth: "+237%" },
      { company: "EduPath", metric: "Support cost", before: "$7,400/mo", after: "$2,100/mo", growth: "-72%" },
    ],
  };
}

const ChatbotROICalculator = () => (
  <QuizTool
    seoTitle="AI Chatbot ROI Calculator | Free Tool - NETREX"
    seoDescription="Free AI chatbot ROI calculator: estimate extra leads, faster response times and yearly revenue gain from adding an AI chatbot to your website."
    canonical="https://www.netrexinc.com/tools/ai-chatbot-roi"
    badge="Free AI Tool"
    icon={MessageSquare}
    heading="AI Chatbot"
    headingHighlight="ROI Calculator"
    intro="Find out how much revenue you lose to slow replies, and what a 24/7 AI chatbot would add to your pipeline."
    resultsHeading="Your AI Chatbot"
    resultsHighlight="ROI"
    examplesHeading="Real AI Chatbot Results"
    questions={questions}
    compute={compute}
  />
);

export default ChatbotROICalculator;
