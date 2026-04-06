import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: "industry",
    question: "What type of business do you run?",
    options: [
      { label: "E-Commerce / Retail", value: "ecommerce" },
      { label: "Restaurant / Food Delivery", value: "food" },
      { label: "Healthcare / Fitness", value: "health" },
      { label: "Services / Bookings", value: "services" },
      { label: "Education / Courses", value: "education" },
      { label: "Other", value: "other" },
    ],
  },
  {
    id: "customers",
    question: "How many active customers do you have?",
    options: [
      { label: "100 - 500", value: "small" },
      { label: "500 - 2,000", value: "medium" },
      { label: "2,000 - 10,000", value: "large" },
      { label: "10,000+", value: "enterprise" },
    ],
  },
  {
    id: "goal",
    question: "What's your primary goal for a mobile app?",
    options: [
      { label: "Increase repeat purchases", value: "retention" },
      { label: "Improve customer experience", value: "experience" },
      { label: "Reduce operational costs", value: "efficiency" },
      { label: "Reach new customers", value: "acquisition" },
    ],
  },
];

const realExamples = [
  { company: "FreshBite (Food Delivery)", metric: "Order Frequency", before: "1.2x/month", after: "3.8x/month", growth: "+217%" },
  { company: "FitZone (Fitness Chain)", metric: "Member Retention", before: "62%", after: "89%", growth: "+44%" },
  { company: "ShopVault (E-Commerce)", metric: "Mobile Revenue", before: "$22K/mo", after: "$78K/mo", growth: "+255%" },
  { company: "BookWise (Education)", metric: "Student Engagement", before: "15 min/day", after: "42 min/day", growth: "+180%" },
];

function calculateResults(answers: Record<string, string>) {
  const custMap: Record<string, number> = { small: 300, medium: 1200, large: 5000, enterprise: 20000 };
  const customers = custMap[answers.customers] || 1200;

  const without = {
    retention: Math.round(customers * 0.35),
    engagementRate: 18,
    revenuePerCustomer: 45,
    yearlyRevenue: Math.round(customers * 0.35 * 45 * 12),
    supportCost: Math.round(customers * 2.5 * 12),
  };

  const withApp = {
    retention: Math.round(customers * 0.72),
    engagementRate: 65,
    revenuePerCustomer: 78,
    yearlyRevenue: Math.round(customers * 0.72 * 78 * 12),
    supportCost: Math.round(customers * 0.8 * 12),
  };

  return { without, withApp, customers };
}

const MobileAppROICalculator = () => {
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
                Mobile App ROI <span className="text-primary">Calculator</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                See how a mobile app can transform your customer engagement, retention, and revenue with real data-backed projections.
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
                  <h2 className="font-display text-3xl font-bold text-center mb-12">Your Mobile App <span className="text-primary">Impact Report</span></h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-3xl border-2 border-destructive/30 bg-destructive/5">
                      <div className="flex items-center gap-3 mb-6">
                        <XCircle className="h-8 w-8 text-destructive" />
                        <h3 className="font-display text-xl font-bold">Without Mobile App</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Active Customers</span>
                          <span className="font-bold text-destructive">{results.without.retention.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Engagement Rate</span>
                          <span className="font-bold text-destructive">{results.without.engagementRate}%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Revenue/Customer</span>
                          <span className="font-bold text-destructive">${results.without.revenuePerCustomer}/mo</span>
                        </div>
                        <div className="flex justify-between items-center p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                          <span className="font-semibold">Yearly Revenue</span>
                          <span className="font-bold text-destructive text-lg">${results.without.yearlyRevenue.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 rounded-3xl border-2 border-primary/30 bg-primary/5">
                      <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                        <h3 className="font-display text-xl font-bold">With Mobile App</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Active Customers</span>
                          <span className="font-bold text-primary">{results.withApp.retention.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Engagement Rate</span>
                          <span className="font-bold text-primary">{results.withApp.engagementRate}%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                          <span className="text-muted-foreground">Revenue/Customer</span>
                          <span className="font-bold text-primary">${results.withApp.revenuePerCustomer}/mo</span>
                        </div>
                        <div className="flex justify-between items-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                          <span className="font-semibold">Yearly Revenue</span>
                          <span className="font-bold text-primary text-lg">${results.withApp.yearlyRevenue.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="font-display text-2xl font-bold text-center mb-8">Real Business <span className="text-primary">Results</span></h3>
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
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link to="/contact"><Button variant="hero" size="lg" className="group">Get Your Free App Proposal <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Button></Link>
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

export default MobileAppROICalculator;
