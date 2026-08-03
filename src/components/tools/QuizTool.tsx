import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export type QuizQuestion = {
  id: string;
  question: string;
  icon: React.ComponentType<{ className?: string }>;
  options: { label: string; value: string; emoji: string }[];
};

export type QuizResults = {
  negTitle: string;
  posTitle: string;
  rows: { label: string; neg: string; pos: string }[];
  highlight: { label: string; neg: string; pos: string };
  examples: { company: string; metric: string; before: string; after: string; growth: string }[];
};

type Props = {
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  heading: string;
  headingHighlight: string;
  intro: string;
  resultsHeading: string;
  resultsHighlight: string;
  examplesHeading: string;
  questions: QuizQuestion[];
  compute: (answers: Record<string, string>) => QuizResults;
};

export function QuizTool({
  seoTitle,
  seoDescription,
  canonical,
  badge,
  icon: BadgeIcon,
  heading,
  headingHighlight,
  intro,
  resultsHeading,
  resultsHighlight,
  examplesHeading,
  questions,
  compute,
}: Props) {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 400);
    } else {
      setTimeout(() => setShowResults(true), 400);
    }
  };

  const results = showResults ? compute(answers) : null;
  const currentQ = questions[step];
  const CurrentIcon = currentQ?.icon;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: `${heading} ${headingHighlight}`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Any",
          url: canonical,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          provider: { "@type": "Organization", name: "NETREX INC" },
        }}
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"><div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" /></div>
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <BadgeIcon className="h-4 w-4" />{badge}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">{heading} <span className="text-primary">{headingHighlight}</span></h1>
              <p className="text-lg text-muted-foreground">{intro}</p>
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
                        <div key={i} className={`h-2 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`} />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center"><CurrentIcon className="h-6 w-6 text-primary" /></div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t("tools.step")} {step + 1} / {questions.length}</p>
                        <h2 className="font-display text-2xl md:text-3xl font-bold">{currentQ.question}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {currentQ.options.map((opt, i) => (
                      <motion.button
                        key={opt.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onClick={() => handleAnswer(currentQ.id, opt.value)}
                        className={`p-5 rounded-2xl border text-left transition-all hover:border-primary hover:shadow-lg group ${answers[currentQ.id] === opt.value ? "border-primary bg-primary/5" : "border-border bg-card"}`}
                      >
                        <div className="flex items-center gap-4"><span className="text-2xl">{opt.emoji}</span><span className="font-medium group-hover:text-primary transition-colors">{opt.label}</span></div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : results && (
                <motion.div key="results" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="font-display text-3xl font-bold text-center mb-12">{resultsHeading} <span className="text-primary">{resultsHighlight}</span></h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 rounded-3xl border-2 border-destructive/30 bg-destructive/5">
                      <div className="flex items-center gap-3 mb-6"><XCircle className="h-8 w-8 text-destructive" /><h3 className="font-display text-xl font-bold">{results.negTitle}</h3></div>
                      <div className="space-y-4">
                        {results.rows.map((row) => (
                          <div key={row.label} className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                            <span className="text-muted-foreground">{row.label}</span><span className="font-bold text-destructive">{row.neg}</span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                          <span className="font-semibold">{results.highlight.label}</span><span className="font-bold text-destructive text-lg">{results.highlight.neg}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 rounded-3xl border-2 border-primary/30 bg-primary/5">
                      <div className="flex items-center gap-3 mb-6"><CheckCircle2 className="h-8 w-8 text-primary" /><h3 className="font-display text-xl font-bold">{results.posTitle}</h3></div>
                      <div className="space-y-4">
                        {results.rows.map((row) => (
                          <div key={row.label} className="flex justify-between items-center p-3 rounded-xl bg-background/50">
                            <span className="text-muted-foreground">{row.label}</span><span className="font-bold text-primary">{row.pos}</span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center p-4 rounded-xl bg-primary/10 border border-primary/20">
                          <span className="font-semibold">{results.highlight.label}</span><span className="font-bold text-primary text-lg">{results.highlight.pos}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="font-display text-2xl font-bold text-center mb-8">{examplesHeading}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {results.examples.map((ex, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="p-5 rounded-2xl bg-card border border-border">
                          <div className="font-semibold mb-2">{ex.company}</div>
                          <div className="text-sm text-muted-foreground mb-1">{ex.metric}</div>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-destructive line-through">{ex.before}</span>
                            <ArrowRight className="h-4 w-4 text-primary" />
                            <span className="text-primary font-bold">{ex.after}</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">{ex.growth}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
                    <h3 className="font-display text-2xl font-bold mb-3">{t("tools.ctaTitle")}</h3>
                    <p className="text-muted-foreground mb-6">{t("tools.ctaText")}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link to="/contact"><Button variant="hero" size="lg" className="group">{t("tools.ctaButton")} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Button></Link>
                      <Button variant="outline" size="lg" onClick={() => { setStep(0); setAnswers({}); setShowResults(false); }}>{t("tools.restart")}</Button>
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
}
