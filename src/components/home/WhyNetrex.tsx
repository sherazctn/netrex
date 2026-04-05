import { motion } from "framer-motion";
import { 
  Zap, 
  Users, 
  Globe2, 
  Award, 
  HeartHandshake, 
  Lightbulb 
} from "lucide-react";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { useLanguage } from "@/contexts/LanguageContext";

const reasons = [
  { icon: Zap, titleKey: "why.innovation", descKey: "why.innovation.desc" },
  { icon: Users, titleKey: "why.client", descKey: "why.client.desc" },
  { icon: Globe2, titleKey: "why.global", descKey: "why.global.desc" },
  { icon: Award, titleKey: "why.excellence", descKey: "why.excellence.desc" },
  { icon: HeartHandshake, titleKey: "why.integrity", descKey: "why.integrity.desc" },
  { icon: Lightbulb, titleKey: "why.creative", descKey: "why.creative.desc" },
];

const stats = [
  { value: 500, suffix: "+", labelKey: "why.stat.projects" },
  { value: 200, suffix: "+", labelKey: "why.stat.clients" },
  { value: 50, suffix: "+", labelKey: "why.stat.industries" },
  { value: 9, suffix: "", labelKey: "why.stat.offices" },
];

export function WhyNetrex() {
  const { t } = useLanguage();
  
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t('why.badge')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('why.title')}{" "}
            <span className="text-primary">{t('why.title.highlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('why.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {t(reason.titleKey)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(reason.descKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-primary relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-30%2030v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/80">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
