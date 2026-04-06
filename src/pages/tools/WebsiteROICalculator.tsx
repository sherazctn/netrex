import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, TrendingDown, Globe, BarChart3, DollarSign, Users, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUpNumber } from "@/components/ui/CountUpNumber";

const questions = [
  {
    id: "industry",
    question: "What industry is your business in?",
    options: [
      { label: "E-Commerce / Retail", value: "ecommerce" },
      { label: "Real Estate", value: "realestate" },
      { label: "Healthcare", value: "healthcare" },
      { label: "Professional Services", value: "services" },
      { label: "Restaurant / Food", value: "food" },
      { label: "Other", value: "other" },
    ],
  },
  {
    id: "situation",
    question: "What best describes your current website?",
    options: [
      { label: "No website at all", value: "none" },
      { label: "Outdated website (3+ years old)", value: "outdated" },
      { label: "Basic template website", value: "basic" },
    ],
  },
  {
    id: "revenue",
    question: "What's your approximate monthly revenue?",
    options: [
      { label: "$5,000 - $20,000", value: "small" },
      { label: "$20,000 - $100,000", value: "medium" },
      { label: "$100,000 - $500,000", value: "large" },
      { label: "$500,000+", value: "enterprise" },
    ],
  },
];

const realExamples = [
  { company: "Gulf Properties (Real Estate)", before: "120 leads/mo", after: "480 leads/mo", growth: "+300%", metric: "Lead Generation" },
  { company: "FreshBite (Restaurant Chain)", before: "$18K/mo online", after: "$52K/mo online", growth: "+189%", metric: "Online Orders" },
  { company: "MedCare Clinic (Healthcare)", before: "45 bookings/mo", after: "180 bookings/mo", growth: "+300%", metric: "Appointments" },
  { company: "TechVault (E-Commerce)", before: "2.1% conv. rate", after: "5.8% conv. rate", growth: "+176%", metric: "Conversion Rate" },
];

function calculateResults(answers: Record<string, string>) {
  const revenueMap: Record<string, number> = { small: 12000, medium: 60000, large: 300000, enterprise: 750000 };
  const monthlyRevenue = revenueMap[answers.revenue] || 60000;

  const situationMultiplier: Record<string, number> = { none: 0.35, outdated: 0.2, basic: 0.15 };
  const mult = situationMultiplier[answers.situation] || 0.2;

  const withoutWebsite = {
    monthlyTraffic: answers.situation === "none" ? 0 : Math.round(monthlyRevenue * 0.02),
    monthlyLeads: answers.situation === "none" ? Math.round(monthlyRevenue * 0.005) : Math.round(monthlyRevenue * 0.015),
    conversionRate: answers.situation === "none" ? 0 : 1.5,
    yearlyRevenue: monthlyRevenue * 12,
    missedRevenue: Math.round(monthlyRevenue * mult * 12),
  };

  const withWebsite = {
    monthlyTraffic: Math.round(monthlyRevenue * 0.15),
    monthlyLeads: Math.round(monthlyRevenue * 0.06),
    conversionRate: 4.5,
    yearlyRevenue: Math.round(monthlyRevenue * (1 + mult) * 12),
    additionalRevenue: Math.round(monthlyRevenue * mult * 12),
  };

  return { withoutWebsite, withWebsite, monthlyRevenue };
}

const WebsiteROICalculator = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const results = showResults ? calculateResults(answers) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-secondary/30">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Free Tool</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Website ROI <span className="text-primary">Calculator</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover how much revenue you're leaving on the table without a modern, professional website. Answer 3 quick questions to see your personalized results.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-wide max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div key={`q-${step}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                  <div className="mb-8">
                    <div className="flex gap-2 mb-6">
                      {questions.map((_, i) => (
                        <div key={i} className={`h-2 flex-1 rounded-full transition-colors ${i <= step ? 'bg-primary' : 'bg-border'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Question {step + 1} of {questions.length}</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold">{questions[step].question}</h2>
                  </div>
                  <div className="grid gap-3">
                    {questions[step].options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(questions[step].id, opt.value)}
                        className={`p-5 rounded-2xl border text-left transition-all hover:border-primary hover:shadow-md ${
                          answers[questions[step].id] === opt.value ? 'border-primary bg-primary/5' : 'border-border bg-card'
                        }`}
                      >
                        <span className="font-medium">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : results && (
                <motion.div key="results" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <h2 className="font-display text-3xl font-bold text-center mb-12">Your Personalized <span className="text-primary">ROI Report</span></h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Without */}
                    <div className="p-8 rounded-3xl border-2 border-destructive/30 bg-destructive/5">
                      <div className="flex items-center gap-3 mb-6">
                        <XCircle className="h-8 w-8 text-destructive" />
                        <h3 className="font-display text-xl font-bold">Without Modern Website</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Monthly Traffic</span>
                          <span className="font-bold text-destructive">{results.withoutWebsite.monthlyTraffic.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Monthly Leads</span>
                          <span className="font-bold text-destructive">{results.withoutWebsite.monthlyLeads.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Conversion Rate</span>
                          <span className="font-bold text-destructive">{results.withoutWebsite.conversionRate}%</span>
                        </div>
                        <div className="flex justify-between items-center p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                          <span className="font-semibold">Revenue You're Missing</span>
                          <span className="font-bold text-destructive text-xl">${results.withoutWebsite.missedRevenue.toLocaleString()}/yr</span>
                        </div>
                      </div>
                    </div>

                    {/* With */}
                    <div className="p-8 rounded-3xl border-2 border-primary/30 bg-primary/5">
                      <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                        <h3 className="font-display text-xl font-bold">With Modern Website</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Monthly Traffic</span>
                          <span className="font-bold text-primary">{results.withWebsite.monthlyTraffic.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Monthly Leads</span>
                          <span className="font-bold text-primary">{results.withWebsite.monthlyLeads.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Conversion Rate</span>
                          <span className="font-bold text-primary">{results.withWebsite.conversionRate}%</span>
                        </div>
                        <div className="flex justify-between items-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                          <span className="font-semibold">Additional Revenue</span>
                          <span className="font-bold text-primary text-xl">+${results.withWebsite.additionalRevenue.toLocaleString()}/yr</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Real Examples */}
                  <div className="mb-12">
                    <h3 className="font-display text-2xl font-bold text-center mb-8">Real Client <span className="text-primary">Success Stories</span></h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {realExamples.map((ex, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="p-5 rounded-2xl bg-card border border-border">
                          <div className="font-semibold mb-2">{ex.company}</div>
                          <div className="text-sm text-muted-foreground mb-1">{ex.metric}</div>
                          <div className="flex items-center gap-3">
                            <span className="text-destructive line-through">{ex.before}</span>
                            <ArrowRight className="h-4 w-4 text-primary" />
                            <span className="text-primary font-bold">{ex.after}</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">{ex.growth}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-muted-foreground mb-6">Ready to stop leaving money on the table?</p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link to="/contact">
                        <Button variant="hero" size="lg" className="group">
                          Get Your Free Website Proposal
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      <button onClick={() => { setStep(0); setAnswers({}); setShowResults(false); }}>
                        <Button variant="outline" size="lg">Recalculate</Button>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WebsiteROICalculator;
