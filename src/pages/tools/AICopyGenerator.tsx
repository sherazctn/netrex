import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Loader2, Copy, Check, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const tones = ["Professional", "Bold & Punchy", "Friendly", "Luxury", "Technical"];
const outputLanguages = ["English", "Arabic", "French", "German", "Spanish", "Portuguese", "Russian", "Chinese", "Japanese"];

const AICopyGenerator = () => {
  const { t } = useLanguage();
  const [business, setBusiness] = useState("");
  const [service, setService] = useState("");
  const [audience, setAudience] = useState("");
  const [tone, setTone] = useState("Professional");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (business.trim().length < 10) {
      toast.error("Please describe your business in a little more detail.");
      return;
    }
    setLoading(true);
    setResult("");
    try {
      const { data, error } = await supabase.functions.invoke("ai-copy-generator", {
        body: { business, service, audience, tone, language },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      if (!data?.content) throw new Error("No copy was generated. Please try again.");
      setResult(data.content);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const renderLine = (line: string, i: number) => {
    if (line.startsWith("## ")) {
      return (
        <h3 key={i} className="font-display text-lg font-bold text-primary mt-6 first:mt-0">
          {line.replace("## ", "")}
        </h3>
      );
    }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      return (
        <p key={i} className="pl-4 text-foreground/90 leading-relaxed before:content-['•'] before:text-primary before:mr-2">
          {line.slice(2)}
        </p>
      );
    }
    if (!line.trim()) return <div key={i} className="h-2" />;
    return <p key={i} className="text-foreground/90 leading-relaxed">{line}</p>;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free AI Website Copy & SEO Generator - NETREX"
        description="Generate SEO titles, meta descriptions, hero headlines and keywords for your business in seconds with this free AI copy generator by NETREX."
        canonical="https://netrex.lovable.app/tools/ai-copy-generator"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "AI Website Copy & SEO Generator",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Any",
          url: "https://netrex.lovable.app/tools/ai-copy-generator",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          provider: { "@type": "Organization", name: "NETREX INC" },
        }}
      />
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"><div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" /></div>
          <div className="container-wide relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" />Powered by AI
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                AI Website Copy & <span className="text-primary">SEO Generator</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Describe your business and get SEO titles, meta descriptions, hero headlines, value propositions and keywords in seconds - in 9 languages.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-wide grid lg:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-3xl border border-border bg-card">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="business" className="mb-2 block">What does your business do?</Label>
                  <Textarea
                    id="business"
                    rows={4}
                    className="rounded-[20px]"
                    placeholder="e.g. We are a Dubai-based dental clinic offering implants, veneers and invisible braces."
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="service" className="mb-2 block">Main service or offer (optional)</Label>
                  <Input id="service" className="rounded-[20px]" placeholder="e.g. Same-day dental implants" value={service} onChange={(e) => setService(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="audience" className="mb-2 block">Target audience (optional)</Label>
                  <Input id="audience" className="rounded-[20px]" placeholder="e.g. Professionals aged 30-55 in the UAE" value={audience} onChange={(e) => setAudience(e.target.value)} />
                </div>
                <div>
                  <Label className="mb-2 block">Tone of voice</Label>
                  <div className="flex flex-wrap gap-2">
                    {tones.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTone(item)}
                        className={`px-3.5 py-2 rounded-full text-sm border transition-colors ${tone === item ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="mb-2 block">Output language</Label>
                  <div className="flex flex-wrap gap-2">
                    {outputLanguages.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setLanguage(item)}
                        className={`px-3.5 py-2 rounded-full text-sm border transition-colors ${language === item ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <Button variant="hero" size="lg" className="w-full group" onClick={generate} disabled={loading}>
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Wand2 className="h-5 w-5" />}
                  {loading ? "Generating..." : "Generate My Copy"}
                </Button>
              </div>
            </motion.div>

            <div className="p-8 rounded-3xl border border-border bg-card min-h-[420px]">
              {!result && !loading && (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <Sparkles className="h-10 w-10 text-primary mb-4" />
                  <p className="text-muted-foreground max-w-xs">Your AI-generated website copy and SEO assets will appear here.</p>
                </div>
              )}
              {loading && (
                <div className="space-y-3 animate-pulse">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-4 rounded-full bg-muted" style={{ width: `${60 + ((i * 13) % 40)}%` }} />
                  ))}
                </div>
              )}
              {result && !loading && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-xl font-bold">Your AI Copy</h2>
                    <Button variant="outline" size="sm" onClick={copy}>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? "Copied" : "Copy all"}
                    </Button>
                  </div>
                  <div className="space-y-1.5">{result.split("\n").map(renderLine)}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-wide">
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
              <h2 className="font-display text-2xl font-bold mb-3">{t("tools.ctaTitle")}</h2>
              <p className="text-muted-foreground mb-6">{t("tools.ctaText")}</p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  {t("tools.ctaButton")}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AICopyGenerator;
