import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const features = ["Custom app development with advanced AI capabilities", "End-to-end digital marketing solutions", "Scalable enterprise solutions worldwide"];
const stats = [{
  number: "500+",
  label: "Projects Delivered"
}, {
  number: "8+",
  label: "Years Experience"
}, {
  number: "6",
  label: "Global Offices"
}, {
  number: "98%",
  label: "Client Satisfaction"
}];
export function Hero() {
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
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-border mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-foreground">Global IT & Digital Agency</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 md:text-5xl">
              Where{" "}
              <span className="text-gradient">Innovation</span>
              <br />
              Meets The Real World
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
          }} className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              We empower businesses to <strong className="text-foreground">innovate, optimize, and scale</strong> with 
              cutting-edge digital solutions across 6 countries.
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
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
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
                  Start Your Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="xl" className="group">
                  <Play className="h-5 w-5" />
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Stats Grid */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1
            }} className={`relative p-6 md:p-8 rounded-3xl bg-card border border-border hover-lift shadow-sm ${index === 0 ? "md:translate-y-8" : ""} ${index === 3 ? "md:-translate-y-8" : ""}`}>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>)}
            </div>

            {/* Floating Badge */}
            <motion.div initial={{
            opacity: 0,
            scale: 0
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.8
          }} className="absolute -bottom-4 -left-4 md:-left-8 bg-card border border-border rounded-full p-4 shadow-lg hidden md:flex items-center gap-3">
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
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
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