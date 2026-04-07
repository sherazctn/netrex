import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle, Search, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: "traffic",
    question: "What's your current monthly website traffic?",
    icon: Globe,
    options: [
      { label: "Less than 500 visits", value: "low", emoji: "📉" },
      { label: "500 - 5,000 visits", value: "medium", emoji: "📊" },
      { label: "5,000 - 20,000 visits", value: "high", emoji: "📈" },
      { label: "20,000+ visits", value: "enterprise", emoji: "🚀" },
    ],
  },
  {
    id: "industry",
    question: "What industry are you in?",
    icon: Search,
    options: [
      { label: "E-Commerce / Retail", value: "ecommerce", emoji: "🛒" },
      { label: "Professional Services", value: "services", emoji: "💼" },
      { label: "Healthcare", value: "health", emoji: "🏥" },
      { label: "Real Estate", value: "realestate", emoji: "🏢" },
      { label: "SaaS / Tech", value: "tech", emoji: "💻" },
      { label: "Other", value: "other", emoji: "🌐" },
    ],
  },
  {
    id: "status",
    question: "What's your current SEO situation?",
    icon: TrendingUp,
    options: [
      { label: "Never done any SEO", value: "none", emoji: "🚫" },
      { label: "Basic SEO (meta tags only)", value: "basic", emoji: "📝" },
      { label: "Some SEO but inconsistent", value: "inconsistent", emoji: "⏳" },
    ],
  },
];

const realExamples = [
  { company: "MedClinic Pro (Healthcare)", metric: "Organic Traffic", before: "800/mo", after: "12,400/mo", growth: "+1450%" },
  { company: "LegalEdge (Law Firm)", metric: "Qualified Leads", before: "8/mo", after: "52/mo", growth: "+550%" },
  { company: "HomePro (Real Estate)", metric: "Property Inquiries", before: "25/mo", after: "210/mo", growth: "+740%" },
  { company: "CloudStack (SaaS)", metric: "Demo Requests", before: "12/mo", after: "85/mo", growth: "+608%" },
];

function calculateResults(answers: Record<string, string>) {
  const trafficMap: Record<string, number> = { low: 250, medium: 2500, high: 12000, enterprise: 40000 };
  const traffic = trafficMap[answers.traffic] || 2500;
  const statusMult: Record<string, number> = { none: 8, basic: 5, inconsistent: 3.5 };
  const growth = statusMult[answers.status] || 5;

  return {
    without: {
      monthlyTraffic: traffic,
      organicLeads: Math.round(traffic * 0.015),
      keywordRankings: answers.status === "none" ? 0 : Math.round(traffic * 0.01),
      yearlyValue: Math.round(traffic * 0.015 * 150 * 12),
    },
    withSEO: {
      monthlyTraffic: Math.round(traffic * growth),
      organicLeads: Math.round(traffic * growth * 0.035),
      keywordRankings: Math.round(traffic * growth * 0.02),
      yearlyValue: Math.round(traffic * growth * 0.035 * 150 * 12),
      additionalValue: Math.round((traffic * growth * 0.035 - traffic * 0.015) * 150 * 12),
    },
  };
}

const SEOROICalculator = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 400);
    } else {
      setTimeout(() => setShowResults(true), 400);
    }
  };

  const results = showResults ? calculateResults(answers) : null;
  const currentQ = questions[step];
  const CurrentIcon = currentQ?.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"><div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" /></div>
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"><Search className="h-4 w-4" />Free Tool</div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">SEO ROI <span className="text-primary">Calculator</span></h1>
              <p className="text-lg text-muted-foreground">Discover how much organic traffic and revenue you're leaving on the table without a proper SEO strategy.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-wide max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div key={`q-${step}`} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }}>
                  <div className="mb-8">
                    <div className="flex gap-2 mb-6">
                      {questions.map((_, i) => (
                        <motion.div key={i} className={`h-2 flex-1 rounded-full ${i <= step ? 'bg-primary' : 'bg-border'}`} initial={i === step ? { scaleX: 0 } : {}} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }} style={{ transformOrigin: 'left' }} />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center"><CurrentIcon className="h-6 w-6 text-primary" /></div>
                      <div>
                        <p className="text-sm text-muted-foreground">Step {step + 1} of {questions.length}</p>
                        <h2 className="font-display text-2xl md:text-3xl font-bold">{currentQ.question}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {currentQ.options.map((opt, i) => (
                      <motion.button key={opt.value} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} onClick={() => handleAnswer(currentQ.id, opt.value)}
                        className={`p-5 rounded-2xl border text-left transition-all hover:border-primary hover:shadow-lg group ${answers[currentQ.id] === opt.value ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
                        <div className="flex items-center gap-4"><span className="text-2xl">{opt.emoji}</span><span className="font-medium group-hover:text-primary transition-colors">{opt.label}</span></div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : results && (
                <motion.div key="results" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="font-display text-3xl font-bold text-center mb-12">Your SEO <span className="text-primary">Impact Report</span></h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-3xl border-2 border-destructive/30 bg-destructive/5">
                      <div className="flex items-center gap-3 mb-6"><XCircle className="h-8 w-8 text-destructive" /><h3 className="font-display text-xl font-bold">Without SEO</h3></div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50"><span className="text-muted-foreground">Monthly Traffic</span><span className="font-bold text-destructive">{results.without.monthlyTraffic.toLocaleString()}</span></div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50"><span className="text-muted-foreground">Organic Leads</span><span className="font-bold text-destructive">{results.without.organicLeads}</span></div>
                        <div className="flex justify-between items-center p-4 rounded-xl bg-destructive/10 border border-destructive/20"><span className="font-semibold">Yearly Value</span><span className="font-bold text-destructive text-lg">${results.without.yearlyValue.toLocaleString()}</span></div>
                      </div>
                    </div>
                    <div className="p-8 rounded-3xl border-2 border-primary/30 bg-primary/5">
                      <div className="flex items-center gap-3 mb-6"><CheckCircle2 className="h-8 w-8 text-primary" /><h3 className="font-display text-xl font-bold">With SEO Strategy</h3></div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50"><span className="text-muted-foreground">Monthly Traffic</span><span className="font-bold text-primary">{results.withSEO.monthlyTraffic.toLocaleString()}</span></div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50"><span className="text-muted-foreground">Organic Leads</span><span className="font-bold text-primary">{results.withSEO.organicLeads}</span></div>
                        <div className="flex justify-between items-center p-4 rounded-xl bg-primary/10 border border-primary/20"><span className="font-semibold">Additional Value</span><span className="font-bold text-primary text-lg">+${results.withSEO.additionalValue.toLocaleString()}/yr</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12">
                    <h3 className="font-display text-2xl font-bold text-center mb-8">Real SEO <span className="text-primary">Success Stories</span></h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {realExamples.map((ex, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="p-5 rounded-2xl bg-card border border-border">
                          <div className="font-semibold mb-2">{ex.company}</div>
                          <div className="text-sm text-muted-foreground mb-1">{ex.metric}</div>
                          <div className="flex items-center gap-3">
                            <span className="text-destructive line-through">{ex.before}</span><ArrowRight className="h-4 w-4 text-primary" /><span className="text-primary font-bold">{ex.after}</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">{ex.growth}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
                    <h3 className="font-display text-2xl font-bold mb-3">Ready to Dominate Search Results?</h3>
                    <p className="text-muted-foreground mb-6">Contact NETREX to make it happen for your business success.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link to="/contact"><Button variant="hero" size="lg" className="group">Contact NETREX <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Button></Link>
                      <Button variant="outline" size="lg" onClick={() => { setStep(0); setAnswers({}); setShowResults(false); }}>Recalculate</Button>
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

export default SEOROICalculator;
