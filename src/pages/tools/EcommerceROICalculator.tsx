import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle, ShoppingCart, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: "type",
    question: "What type of products do you sell?",
    icon: ShoppingCart,
    options: [
      { label: "Physical Products", value: "physical", emoji: "📦" },
      { label: "Digital Products", value: "digital", emoji: "💾" },
      { label: "Services", value: "services", emoji: "🔧" },
      { label: "Mix of Products & Services", value: "mix", emoji: "🎯" },
    ],
  },
  {
    id: "sales",
    question: "What's your current monthly sales volume?",
    icon: BarChart3,
    options: [
      { label: "$2,000 - $10,000", value: "starter", emoji: "🌱" },
      { label: "$10,000 - $50,000", value: "growing", emoji: "📈" },
      { label: "$50,000 - $200,000", value: "scaling", emoji: "🚀" },
      { label: "$200,000+", value: "enterprise", emoji: "🏆" },
    ],
  },
  {
    id: "current",
    question: "How are you currently selling online?",
    icon: TrendingUp,
    options: [
      { label: "No online store", value: "none", emoji: "🚫" },
      { label: "Social media only", value: "social", emoji: "📱" },
      { label: "Basic website with no cart", value: "basic", emoji: "🌐" },
      { label: "Marketplace (Amazon, etc.)", value: "marketplace", emoji: "🏪" },
    ],
  },
];

const realExamples = [
  { company: "SpiceRoute (Food)", metric: "Online Revenue", before: "$4K/mo", after: "$28K/mo", growth: "+600%" },
  { company: "LuxeWatch (Luxury)", metric: "Avg. Order Value", before: "$120", after: "$380", growth: "+217%" },
  { company: "FitGear Pro (Sports)", metric: "Repeat Purchases", before: "8%", after: "34%", growth: "+325%" },
  { company: "ArtisanCraft (Handmade)", metric: "Global Orders", before: "15/mo", after: "180/mo", growth: "+1100%" },
];

function calculateResults(answers: Record<string, string>) {
  const salesMap: Record<string, number> = { starter: 6000, growing: 30000, scaling: 125000, enterprise: 400000 };
  const monthly = salesMap[answers.sales] || 30000;
  const currentMult: Record<string, number> = { none: 0.45, social: 0.3, basic: 0.25, marketplace: 0.2 };
  const mult = currentMult[answers.current] || 0.3;

  return {
    without: {
      monthlyOrders: Math.round(monthly / 80),
      conversionRate: 1.2,
      cartAbandonment: 78,
      yearlyRevenue: monthly * 12,
    },
    withStore: {
      monthlyOrders: Math.round((monthly * (1 + mult)) / 65),
      conversionRate: 4.8,
      cartAbandonment: 35,
      yearlyRevenue: Math.round(monthly * (1 + mult) * 12),
      additionalRevenue: Math.round(monthly * mult * 12),
    },
  };
}

const EcommerceROICalculator = () => {
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
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          </div>
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <ShoppingCart className="h-4 w-4" />
                Free Tool
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                E-Commerce ROI <span className="text-primary">Calculator</span>
              </h1>
              <p className="text-lg text-muted-foreground">See how a professional e-commerce store can multiply your sales, reduce cart abandonment, and open global markets.</p>
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
                  <h2 className="font-display text-3xl font-bold text-center mb-12">Your E-Commerce <span className="text-primary">Impact Report</span></h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-3xl border-2 border-destructive/30 bg-destructive/5">
                      <div className="flex items-center gap-3 mb-6"><XCircle className="h-8 w-8 text-destructive" /><h3 className="font-display text-xl font-bold">Without E-Commerce Store</h3></div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50"><span className="text-muted-foreground">Monthly Orders</span><span className="font-bold text-destructive">{results.without.monthlyOrders}</span></div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50"><span className="text-muted-foreground">Conversion Rate</span><span className="font-bold text-destructive">{results.without.conversionRate}%</span></div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50"><span className="text-muted-foreground">Cart Abandonment</span><span className="font-bold text-destructive">{results.without.cartAbandonment}%</span></div>
                        <div className="flex justify-between items-center p-4 rounded-xl bg-destructive/10 border border-destructive/20"><span className="font-semibold">Yearly Revenue</span><span className="font-bold text-destructive text-lg">${results.without.yearlyRevenue.toLocaleString()}</span></div>
                      </div>
                    </div>
                    <div className="p-8 rounded-3xl border-2 border-primary/30 bg-primary/5">
                      <div className="flex items-center gap-3 mb-6"><CheckCircle2 className="h-8 w-8 text-primary" /><h3 className="font-display text-xl font-bold">With E-Commerce Store</h3></div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50"><span className="text-muted-foreground">Monthly Orders</span><span className="font-bold text-primary">{results.withStore.monthlyOrders}</span></div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50"><span className="text-muted-foreground">Conversion Rate</span><span className="font-bold text-primary">{results.withStore.conversionRate}%</span></div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-background/50"><span className="text-muted-foreground">Cart Abandonment</span><span className="font-bold text-primary">{results.withStore.cartAbandonment}%</span></div>
                        <div className="flex justify-between items-center p-4 rounded-xl bg-primary/10 border border-primary/20"><span className="font-semibold">Additional Revenue</span><span className="font-bold text-primary text-lg">+${results.withStore.additionalRevenue.toLocaleString()}/yr</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12">
                    <h3 className="font-display text-2xl font-bold text-center mb-8">Real E-Commerce <span className="text-primary">Success Stories</span></h3>
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
                    <h3 className="font-display text-2xl font-bold mb-3">Ready to Launch Your Store?</h3>
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

export default EcommerceROICalculator;
