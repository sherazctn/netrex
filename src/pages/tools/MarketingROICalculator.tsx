import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: "type",
    question: "What type of marketing are you considering?",
    options: [
      { label: "SEO & Content Marketing", value: "seo" },
      { label: "Paid Ads (Google/Meta)", value: "ppc" },
      { label: "Social Media Marketing", value: "social" },
      { label: "Full Digital Marketing Package", value: "full" },
    ],
  },
  {
    id: "budget",
    question: "What's your monthly marketing budget?",
    options: [
      { label: "$500 - $2,000", value: "starter" },
      { label: "$2,000 - $5,000", value: "growth" },
      { label: "$5,000 - $15,000", value: "scale" },
      { label: "$15,000+", value: "enterprise" },
    ],
  },
  {
    id: "current",
    question: "Are you currently doing any digital marketing?",
    options: [
      { label: "No marketing at all", value: "none" },
      { label: "Basic social media posts", value: "basic" },
      { label: "Some paid ads but no strategy", value: "unstructured" },
    ],
  },
];

const realExamples = [
  { company: "LuxStay Hotels (Hospitality)", metric: "Direct Bookings", before: "12%", after: "48%", growth: "+300%", channel: "SEO + PPC" },
  { company: "GreenLeaf Organics (E-Commerce)", metric: "Monthly Revenue", before: "$8K", after: "$34K", growth: "+325%", channel: "Full Package" },
  { company: "ProFit Gym (Fitness)", metric: "New Members/Month", before: "25", after: "110", growth: "+340%", channel: "Social + PPC" },
  { company: "CloudServ (SaaS)", metric: "Qualified Leads", before: "18/mo", after: "95/mo", growth: "+428%", channel: "SEO + Content" },
];

function calculateResults(answers: Record<string, string>) {
  const budgetMap: Record<string, number> = { starter: 1200, growth: 3500, scale: 10000, enterprise: 25000 };
  const budget = budgetMap[answers.budget] || 3500;

  const roiMultiplier: Record<string, number> = { seo: 5.5, ppc: 3.2, social: 2.8, full: 4.5 };
  const mult = roiMultiplier[answers.type] || 4.5;

  const currentMult: Record<string, number> = { none: 1.0, basic: 0.7, unstructured: 0.5 };
  const improvementFactor = currentMult[answers.current] || 0.7;

  const without = {
    monthlyLeads: Math.round(budget * 0.02 * (1 - improvementFactor + 0.3)),
    costPerLead: Math.round(budget / Math.max(1, budget * 0.02 * 0.3)),
    conversionRate: 1.5,
    yearlyROI: 0,
    wastedSpend: answers.current === "unstructured" ? Math.round(budget * 0.6 * 12) : 0,
  };

  const withMarketing = {
    monthlyLeads: Math.round(budget * 0.08 * mult * 0.1),
    costPerLead: Math.round(budget / Math.max(1, budget * 0.08 * mult * 0.1)),
    conversionRate: 4.2,
    yearlyROI: Math.round(budget * mult * 12),
    monthlyRevenue: Math.round(budget * mult),
  };

  return { without, withMarketing, budget };
}

const MarketingROICalculator = () => {
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
                Marketing ROI <span className="text-primary">Calculator</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Should you invest in digital marketing? See exactly how much revenue structured marketing can generate compared to doing nothing — backed by real client data.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-wide max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div key={`q-${step}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
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
                      <button key={opt.value} onClick={() => handleAnswer(questions[step].id, opt.value)}
                        className={`p-5 rounded-2xl border text-left transition-all hover:border-primary hover:shadow-md ${
                          answers[questions[step].id] === opt.value ? 'border-primary bg-primary/5' : 'border-border bg-card'
                        }`}>
                        <span className="font-medium">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : results && (
                <motion.div key="results" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="font-display text-3xl font-bold text-center mb-12">Your Marketing <span className="text-primary">Impact Report</span></h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-3xl border-2 border-destructive/30 bg-destructive/5">
                      <div className="flex items-center gap-3 mb-6">
                        <XCircle className="h-8 w-8 text-destructive" />
                        <h3 className="font-display text-xl font-bold">Without Marketing</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Monthly Leads</span>
                          <span className="font-bold text-destructive">{results.without.monthlyLeads}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Conversion Rate</span>
                          <span className="font-bold text-destructive">{results.without.conversionRate}%</span>
                        </div>
                        {results.without.wastedSpend > 0 && (
                          <div className="flex justify-between items-center p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                            <span className="font-semibold">Wasted Ad Spend/yr</span>
                            <span className="font-bold text-destructive">${results.without.wastedSpend.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-8 rounded-3xl border-2 border-primary/30 bg-primary/5">
                      <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                        <h3 className="font-display text-xl font-bold">With Strategic Marketing</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Monthly Leads</span>
                          <span className="font-bold text-primary">{results.withMarketing.monthlyLeads}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Conversion Rate</span>
                          <span className="font-bold text-primary">{results.withMarketing.conversionRate}%</span>
                        </div>
                        <div className="flex justify-between items-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                          <span className="font-semibold">Projected Revenue/yr</span>
                          <span className="font-bold text-primary text-lg">${results.withMarketing.yearlyROI.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="font-display text-2xl font-bold text-center mb-8">Real Client <span className="text-primary">Case Studies</span></h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {realExamples.map((ex, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="p-5 rounded-2xl bg-card border border-border">
                          <div className="font-semibold mb-1">{ex.company}</div>
                          <div className="text-xs text-primary mb-2">{ex.channel}</div>
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
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link to="/contact"><Button variant="hero" size="lg" className="group">Get Your Free Marketing Strategy <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Button></Link>
                      <button onClick={() => { setStep(0); setAnswers({}); setShowResults(false); }}><Button variant="outline" size="lg">Recalculate</Button></button>
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

export default MarketingROICalculator;
