import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedHeroVector() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <motion.div 
      style={{ y, rotate, scale }}
      className="relative w-full h-full"
    >
      {/* Main animated SVG */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer rotating ring */}
        <motion.circle
          cx="300"
          cy="300"
          r="250"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeDasharray="20 10"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ originX: "300px", originY: "300px" }}
        />
        
        {/* Middle pulsing ring */}
        <motion.circle
          cx="300"
          cy="300"
          r="200"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          fill="none"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Inner rotating ring */}
        <motion.circle
          cx="300"
          cy="300"
          r="150"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeDasharray="15 8"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ originX: "300px", originY: "300px" }}
        />
        
        {/* Floating nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = 300 + 200 * Math.cos((angle * Math.PI) / 180);
          const y = 300 + 200 * Math.sin((angle * Math.PI) / 180);
          return (
            <motion.g key={i}>
              <motion.circle
                cx={x}
                cy={y}
                r="12"
                fill="url(#gradient1)"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r="6"
                fill="hsl(var(--background))"
              />
            </motion.g>
          );
        })}
        
        {/* Center element */}
        <motion.g
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="300" cy="300" r="80" fill="url(#gradient3)" />
          <circle cx="300" cy="300" r="60" fill="hsl(var(--background))" />
          <motion.path
            d="M280 290 L300 270 L320 290 L300 310 Z"
            fill="url(#gradient1)"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ originX: "300px", originY: "290px" }}
          />
        </motion.g>
        
        {/* Connecting lines */}
        {[45, 135, 225, 315].map((angle, i) => {
          const x1 = 300 + 90 * Math.cos((angle * Math.PI) / 180);
          const y1 = 300 + 90 * Math.sin((angle * Math.PI) / 180);
          const x2 = 300 + 190 * Math.cos((angle * Math.PI) / 180);
          const y2 = 300 + 190 * Math.sin((angle * Math.PI) / 180);
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#gradient2)"
              strokeWidth="1"
              strokeDasharray="4 4"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          );
        })}
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const radius = 120 + (i % 3) * 40;
          return (
            <motion.circle
              key={`particle-${i}`}
              cx={300 + radius * Math.cos(angle)}
              cy={300 + radius * Math.sin(angle)}
              r="3"
              fill="hsl(var(--primary))"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
            />
          );
        })}
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(359 85% 53%)" />
            <stop offset="100%" stopColor="hsl(196 76% 44%)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(196 76% 44%)" />
            <stop offset="100%" stopColor="hsl(217 95% 18%)" />
          </linearGradient>
          <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(359 85% 53% / 0.3)" />
            <stop offset="100%" stopColor="hsl(196 76% 44% / 0.1)" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
