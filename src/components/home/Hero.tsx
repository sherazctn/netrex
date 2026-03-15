import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Crown, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import netrexLogo from "@/assets/netrex-logo.png";
const features = ["hero.feature1", "hero.feature2", "hero.feature3"];

// Tech logos grouped by service type
const techLogos = {
  web: [{
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  }, {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  }, {
    name: "Vue",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
  }, {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
  }, {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  }, {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  }],
  mobile: [{
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
  }, {
    name: "Swift",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
  }, {
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
  }, {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  }, {
    name: "iOS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
  }, {
    name: "Android",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
  }],
  cloud: [{
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
  }, {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
  }, {
    name: "Azure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  }, {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  }, {
    name: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
  }],
  design: [{
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  }, {
    name: "Sketch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"
  }, {
    name: "Photoshop",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
  }, {
    name: "Illustrator",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
  }]
};
const bouncePaths = [{
  startAngle: 0,
  direction: 1
}, {
  startAngle: 90,
  direction: -1
}, {
  startAngle: 180,
  direction: 1
}, {
  startAngle: 270,
  direction: -1
}];
export function Hero() {
  const {
    t
  } = useLanguage();
  const {
    scrollY
  } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 180]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const categories = ['web', 'mobile', 'cloud', 'design'] as const;
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge with Crown + Platform Logos */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-border mb-8 shadow-sm">
              <motion.div animate={{
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}>
                <Globe className="h-5 w-5 fill-amber-500 text-white" />
              </motion.div>
              <span className="text-sm font-medium text-foreground">{t('hero.badge')}</span>
              
            </motion.div>

            {/* Creative Tagline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6">
              Where{" "}
              <span className="text-transparent" style={{
              WebkitTextStroke: '2px hsl(359 85% 53%)',
              WebkitTextFillColor: 'transparent'
            }}>
                {t('hero.title.innovation')}
              </span>
              <br />
              {t('hero.title.meets')}
            </motion.h1>

            {/* Description */}
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-base md:text-lg text-muted-foreground max-w-xl mb-8">
              {t('hero.description').split('innovate, optimize, and scale')[0]}
              <strong className="text-foreground">innovate, optimize, and scale</strong>
              {t('hero.description').split('innovate, optimize, and scale')[1]}
            </motion.p>

            {/* Features List */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="space-y-3 mb-10">
              {features.map((feature, index) => <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80">{t(feature)}</span>
                </div>)}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="flex flex-wrap gap-4">
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

          {/* Right Content - Tech Stack Animation with RED circle */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative hidden lg:block" style={{
          scale
        }}>
            <div className="relative w-full max-w-[550px] aspect-square mx-auto">
              <svg viewBox="0 0 600 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer rotating RED ring */}
                <motion.g style={{
                rotate,
                originX: "300px",
                originY: "300px"
              }}>
                  <circle cx="300" cy="300" r="270" stroke="hsl(359 85% 53%)" strokeWidth="2" strokeDasharray="10 15" fill="none" opacity="0.6" />
                  {/* Data nodes on outer ring */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const x = 300 + 270 * Math.cos(angle * Math.PI / 180);
                  const y = 300 + 270 * Math.sin(angle * Math.PI / 180);
                  return <motion.circle key={`outer-${i}`} cx={x} cy={y} r="6" fill="hsl(var(--primary))" animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.5, 1]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25
                  }} />;
                })}
                </motion.g>

                {/* Middle hexagon - RED stroke */}
                <motion.g style={{
                y: y2
              }}>
                  <motion.polygon points="300,100 460,200 460,400 300,500 140,400 140,200" stroke="hsl(359 85% 53% / 0.3)" strokeWidth="2" fill="none" animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.4, 0.8, 0.4]
                }} transition={{
                  duration: 3,
                  repeat: Infinity
                }} />
                </motion.g>

                {/* Inner rotating RED ring */}
                <motion.g animate={{
                rotate: -360
              }} transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }} style={{
                originX: "300px",
                originY: "300px"
              }}>
                  <circle cx="300" cy="300" r="180" stroke="hsl(359 85% 53%)" strokeWidth="2" strokeDasharray="20 10" fill="none" opacity="0.5" />
                </motion.g>

                {/* Center core - RED circle with N icon from logo */}
                <motion.g animate={{
                scale: [1, 1.05, 1]
              }} transition={{
                duration: 4,
                repeat: Infinity
              }}>
                  {/* Glow */}
                  <circle cx="300" cy="300" r="100" fill="hsl(359 85% 53% / 0.15)" />
                  {/* Red outer ring */}
                  <circle cx="300" cy="300" r="90" stroke="hsl(359 85% 53%)" strokeWidth="3" fill="none" opacity="0.6" />
                  {/* Background */}
                  <circle cx="300" cy="300" r="85" fill="hsl(var(--background))" />
                  {/* Red gradient fill */}
                  <circle cx="300" cy="300" r="75" fill="url(#heroGradientRed)" />
                  
                  {/* Netrex N Logo in center */}
                  <image href={netrexLogo} x="265" y="265" width="70" height="70" style={{
                  filter: 'brightness(0) invert(1)'
                }} />
                </motion.g>

                {/* Bouncing Tech Logos - 4 at a time from different angles */}
                {categories.map((category, categoryIndex) => {
                const logos = techLogos[category];
                const path = bouncePaths[categoryIndex];
                return logos.map((tech, techIndex) => {
                  const baseAngle = path.startAngle + techIndex * 60;
                  const delay = categoryIndex * 0.8 + techIndex * 3;
                  return <motion.g key={`${category}-${techIndex}`} initial={{
                    opacity: 0
                  }} animate={{
                    opacity: [0, 1, 1, 1, 0]
                  }} transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: delay,
                    repeatDelay: categories.length * logos.length * 0.5,
                    times: [0, 0.1, 0.5, 0.9, 1]
                  }}>
                        <motion.g animate={{
                      x: [270 * Math.cos(baseAngle * Math.PI / 180), 0, -30 * Math.cos(baseAngle * Math.PI / 180), 0, 270 * Math.cos((baseAngle + 180) * Math.PI / 180)],
                      y: [270 * Math.sin(baseAngle * Math.PI / 180), 0, -30 * Math.sin(baseAngle * Math.PI / 180), 0, 270 * Math.sin((baseAngle + 180) * Math.PI / 180)]
                    }} transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: delay,
                      repeatDelay: categories.length * logos.length * 0.5,
                      ease: "easeInOut"
                    }}>
                          <circle cx="300" cy="300" r="28" fill="hsl(var(--background))" stroke="hsl(359 85% 53% / 0.4)" strokeWidth="2" />
                          <image href={tech.logo} x="280" y="280" width="40" height="40" />
                        </motion.g>
                      </motion.g>;
                });
              })}

                {/* Static orbiting tech icons */}
                {[0, 72, 144, 216, 288].map((angle, i) => {
                const x = 300 + 180 * Math.cos(angle * Math.PI / 180);
                const y = 300 + 180 * Math.sin(angle * Math.PI / 180);
                const allTech = [...techLogos.web, ...techLogos.mobile, ...techLogos.cloud];
                const tech = allTech[i % allTech.length];
                return <motion.g key={`orbit-${i}`} animate={{
                  rotate: 360
                }} transition={{
                  duration: 30 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }} style={{
                  originX: "300px",
                  originY: "300px"
                }}>
                      <motion.g animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4
                  }}>
                        <circle cx={x} cy={y} r="24" fill="hsl(var(--background))" stroke="hsl(359 85% 53% / 0.3)" strokeWidth="2" />
                        <image href={tech.logo} x={x - 14} y={y - 14} width="28" height="28" />
                      </motion.g>
                    </motion.g>;
              })}

                {/* Connection beams */}
                {[30, 150, 270].map((angle, i) => {
                const x1 = 300 + 90 * Math.cos(angle * Math.PI / 180);
                const y1 = 300 + 90 * Math.sin(angle * Math.PI / 180);
                const x2 = 300 + 230 * Math.cos(angle * Math.PI / 180);
                const y2 = 300 + 230 * Math.sin(angle * Math.PI / 180);
                return <motion.line key={`beam-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(359 85% 53% / 0.3)" strokeWidth="2" strokeDasharray="6 6" animate={{
                  opacity: [0.2, 0.8, 0.2],
                  strokeDashoffset: [0, 24]
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }} />;
              })}

                {/* Floating particles */}
                {[...Array(16)].map((_, i) => {
                const angle = i * 22.5 * Math.PI / 180;
                const radius = 130 + i % 3 * 45;
                return <motion.circle key={`particle-${i}`} cx={300 + radius * Math.cos(angle)} cy={300 + radius * Math.sin(angle)} r={2 + i % 3} fill={i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"} animate={{
                  opacity: [0, 1, 0],
                  y: [0, -15, 0]
                }} transition={{
                  duration: 2.5 + i % 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }} />;
              })}

                {/* Gradient definitions */}
                <defs>
                  <radialGradient id="heroGradientRed" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(359 85% 53%)" />
                    <stop offset="100%" stopColor="hsl(359 85% 40%)" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Floating Badge - Crown + Logos */}
            <motion.div initial={{
            opacity: 0,
            scale: 0
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.8
          }} className="absolute -bottom-4 -left-4 md:-left-8 bg-card border border-border rounded-full p-4 shadow-lg flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <motion.div animate={{
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.15, 1, 1.15, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}>
                  <Crown className="w-6 h-6 text-amber-500 fill-amber-500" />
                </motion.div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Top Rated</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <img src="https://cdn.simpleicons.org/upwork/6FDA44" alt="Upwork" className="h-3.5 w-3.5" />
                  <img alt="Fiverr" className="h-3.5 w-3.5 object-contain" src="/lovable-uploads/651e2013-4e21-40f3-94d8-84fcdfe29eff.png" />
                  <img alt="Clutch" className="h-3.5 w-3.5 object-contain" src="/lovable-uploads/ced4b15c-5f92-4389-8b5a-d1a1565a8cea.jpg" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">{t('hero.scroll')}</span>
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>;
}