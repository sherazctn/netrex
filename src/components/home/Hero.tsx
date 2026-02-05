import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  "hero.feature1",
  "hero.feature2",
  "hero.feature3"
];

export function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  
  // Parallax and animation values based on scroll
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 180]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-border mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-foreground">{t('hero.badge')}</span>
            </motion.div>

            {/* Headline - Smaller text with outlined Innovation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6"
            >
              {t('hero.title.where')}{" "}
              <span className="text-transparent bg-clip-text stroke-text-primary" style={{
                WebkitTextStroke: '2px hsl(359 85% 53%)',
                WebkitTextFillColor: 'transparent'
              }}>
                {t('hero.title.innovation')}
              </span>
              <br />
              {t('hero.title.meets')}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-8"
            >
              {t('hero.description').split('innovate, optimize, and scale')[0]}
              <strong className="text-foreground">innovate, optimize, and scale</strong>
              {t('hero.description').split('innovate, optimize, and scale')[1]}
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{t(feature)}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  {t('hero.cta.start')}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="xl" className="group">
                  <Play className="h-5 w-5" />
                  {t('hero.cta.work')}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Business Innovation Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
            style={{ scale }}
          >
            <div className="relative w-full max-w-[550px] aspect-square mx-auto">
              {/* Main SVG Animation - Digital Innovation Theme */}
              <svg
                viewBox="0 0 600 600"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer rotating ring with data flow */}
                <motion.g style={{ rotate, originX: "300px", originY: "300px" }}>
                  <circle
                    cx="300"
                    cy="300"
                    r="270"
                    stroke="url(#heroGradient1)"
                    strokeWidth="1.5"
                    strokeDasharray="10 15"
                    fill="none"
                  />
                  {/* Data nodes on outer ring */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const x = 300 + 270 * Math.cos((angle * Math.PI) / 180);
                    const y = 300 + 270 * Math.sin((angle * Math.PI) / 180);
                    return (
                      <motion.circle
                        key={`outer-${i}`}
                        cx={x}
                        cy={y}
                        r="6"
                        fill="hsl(var(--primary))"
                        animate={{ 
                          opacity: [0.4, 1, 0.4],
                          scale: [1, 1.5, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.25 
                        }}
                      />
                    );
                  })}
                </motion.g>

                {/* Middle pulsing hexagon */}
                <motion.g style={{ y: y2 }}>
                  <motion.polygon
                    points="300,100 460,200 460,400 300,500 140,400 140,200"
                    stroke="url(#heroGradient2)"
                    strokeWidth="2"
                    fill="none"
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.g>

                {/* Inner rotating data circuit */}
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "300px", originY: "300px" }}
                >
                  <circle
                    cx="300"
                    cy="300"
                    r="180"
                    stroke="url(#heroGradient1)"
                    strokeWidth="2"
                    strokeDasharray="20 10"
                    fill="none"
                  />
                  {/* Connection nodes */}
                  {[0, 72, 144, 216, 288].map((angle, i) => {
                    const x = 300 + 180 * Math.cos((angle * Math.PI) / 180);
                    const y = 300 + 180 * Math.sin((angle * Math.PI) / 180);
                    return (
                      <g key={`conn-${i}`}>
                        <circle cx={x} cy={y} r="15" fill="url(#heroGradient3)" />
                        <motion.circle
                          cx={x}
                          cy={y}
                          r="8"
                          fill="hsl(var(--background))"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                        />
                      </g>
                    );
                  })}
                </motion.g>

                {/* Center core - Globe/Network representation */}
                <motion.g
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {/* Core glow */}
                  <circle cx="300" cy="300" r="100" fill="url(#heroGradient3)" opacity="0.3" />
                  <circle cx="300" cy="300" r="80" fill="hsl(var(--background))" />
                  
                  {/* Network icon inside */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "300px", originY: "300px" }}
                  >
                    {/* Globe lines */}
                    <ellipse cx="300" cy="300" rx="50" ry="50" stroke="url(#heroGradient1)" strokeWidth="1.5" fill="none" />
                    <ellipse cx="300" cy="300" rx="50" ry="25" stroke="url(#heroGradient2)" strokeWidth="1" fill="none" />
                    <ellipse cx="300" cy="300" rx="25" ry="50" stroke="url(#heroGradient2)" strokeWidth="1" fill="none" />
                    <line x1="250" y1="300" x2="350" y2="300" stroke="url(#heroGradient1)" strokeWidth="1" />
                    <line x1="300" y1="250" x2="300" y2="350" stroke="url(#heroGradient1)" strokeWidth="1" />
                  </motion.g>
                </motion.g>

                {/* Floating data particles */}
                {[...Array(20)].map((_, i) => {
                  const angle = (i * 18 * Math.PI) / 180;
                  const radius = 120 + (i % 4) * 50;
                  return (
                    <motion.circle
                      key={`particle-${i}`}
                      cx={300 + radius * Math.cos(angle)}
                      cy={300 + radius * Math.sin(angle)}
                      r={2 + (i % 3)}
                      fill={i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                      animate={{
                        opacity: [0, 1, 0],
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 3 + (i % 2),
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  );
                })}

                {/* Connection beams */}
                {[30, 150, 270].map((angle, i) => {
                  const x1 = 300 + 90 * Math.cos((angle * Math.PI) / 180);
                  const y1 = 300 + 90 * Math.sin((angle * Math.PI) / 180);
                  const x2 = 300 + 230 * Math.cos((angle * Math.PI) / 180);
                  const y2 = 300 + 230 * Math.sin((angle * Math.PI) / 180);
                  return (
                    <motion.line
                      key={`beam-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#heroGradient2)"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      animate={{ 
                        opacity: [0.2, 0.8, 0.2],
                        strokeDashoffset: [0, 24]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.5 
                      }}
                    />
                  );
                })}

                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(359 85% 53%)" />
                    <stop offset="100%" stopColor="hsl(196 76% 44%)" />
                  </linearGradient>
                  <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(196 76% 44%)" />
                    <stop offset="100%" stopColor="hsl(217 95% 18%)" />
                  </linearGradient>
                  <radialGradient id="heroGradient3" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(359 85% 53% / 0.4)" />
                    <stop offset="100%" stopColor="hsl(196 76% 44% / 0.1)" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-card border border-border rounded-full p-4 shadow-lg flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-foreground">Top Rated</div>
                <div className="text-sm text-muted-foreground">Upwork & Clutch</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-primary rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
