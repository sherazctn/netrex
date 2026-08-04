import { motion } from "framer-motion";
import { useState } from "react";


/** Tech icons that fly through the hero core. */
const techs = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
];

const CX = 300;
const CY = 300;
const R_EDGE = 300; // spawn / burst radius
const PERIOD = 14; // full loop for one icon (s)
const TRAVEL = 4.2; // time an icon is visible while travelling (s)
const BURST_AT = TRAVEL - 0.55; // burst fires as the icon crosses the ring
const SHARDS = 9;

const polar = (angle: number, radius: number) => ({
  x: CX + radius * Math.cos((angle * Math.PI) / 180),
  y: CY + radius * Math.sin((angle * Math.PI) / 180),
});

/**
 * Tech icons stream in from outside the ring, slingshot around the red core,
 * then exit on the far side where they pop like a water balloon into shards.
 * Rendered as SVG content - must be placed inside the hero <svg>.
 */
export function TechBurstOrbit() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (

    <>
      {techs.map((tech, i) => {
        const inAngle = (i * 137.508) % 360; // golden-angle spread keeps concurrent icons apart
        const outAngle = inAngle + 168 + (i % 3) * 8;
        const delay = (i * PERIOD) / techs.length;
        const start = polar(inAngle, R_EDGE);
        // Curved slingshot: skim around the red core instead of covering it
        const approach = polar(inAngle + 42, 195);
        const swing = polar(inAngle + 108, 145);
        const release = polar(outAngle - 40, 205);
        const exit = polar(outAngle, R_EDGE);
        const cycle = {
          duration: TRAVEL,
          repeat: Infinity,
          repeatDelay: PERIOD - TRAVEL,
          delay,
        };

        return (
          <g key={tech.name}>
            {/* Travelling icon capsule */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{
                x: [start.x - CX, approach.x - CX, swing.x - CX, release.x - CX, exit.x - CX],
                y: [start.y - CY, approach.y - CY, swing.y - CY, release.y - CY, exit.y - CY],
                opacity: [0, 1, 1, 1, 0],
                scale: [0.35, 0.95, 1.1, 1, 0.7],
              }}
              transition={{ ...cycle, ease: "easeInOut", times: [0, 0.3, 0.55, 0.8, 1] }}
            >
              {/* Hover-reactive capsule (scales + glows under cursor/touch) */}
              <motion.g
                whileHover={{ scale: 1.45 }}
                whileTap={{ scale: 1.6 }}
                onHoverStart={() => setHovered(tech.name)}
                onHoverEnd={() => setHovered(null)}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                style={{ originX: `${CX}px`, originY: `${CY}px`, cursor: "pointer" }}
              >
                {/* motion trail */}
                <motion.circle
                  cx={CX}
                  cy={CY}
                  r="34"
                  fill="hsl(359 85% 53% / 0.12)"
                  animate={{ scale: [0.7, 1.25, 0.7] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay }}
                />
                <circle
                  cx={CX}
                  cy={CY}
                  r="26"
                  fill="hsl(var(--background))"
                  stroke={hovered === tech.name ? "hsl(359 85% 53%)" : "hsl(359 85% 53% / 0.55)"}
                  strokeWidth={hovered === tech.name ? 3 : 2}
                />
                <image href={tech.logo} x={CX - 17} y={CY - 17} width="34" height="34" />
                {hovered === tech.name && (
                  <text
                    x={CX}
                    y={CY + 44}
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="600"
                    fill="hsl(var(--foreground))"
                  >
                    {tech.name}
                  </text>
                )}
              </motion.g>
            </motion.g>


            {/* Balloon burst at the exit point */}
            <g>
              {/* splash ring */}
              <motion.circle
                cx={exit.x}
                cy={exit.y}
                r="12"
                fill="none"
                stroke="hsl(359 85% 53%)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.9, 0], scale: [0.3, 2.6, 3.2] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: PERIOD - 0.8,
                  delay: delay + BURST_AT,
                  ease: "easeOut",
                }}
                style={{ originX: `${exit.x}px`, originY: `${exit.y}px` }}
              />
              {/* droplet shards */}
              {[...Array(SHARDS)].map((_, s) => {
                const shardAngle = outAngle - 70 + (s * 140) / (SHARDS - 1);
                const dist = 34 + (s % 3) * 22;
                const dx = dist * Math.cos((shardAngle * Math.PI) / 180);
                const dy = dist * Math.sin((shardAngle * Math.PI) / 180);
                return (
                  <motion.circle
                    key={s}
                    cx={exit.x}
                    cy={exit.y}
                    r={2 + (s % 3)}
                    fill={s % 3 === 0 ? "hsl(var(--accent))" : "hsl(359 85% 53%)"}
                    initial={{ opacity: 0 }}
                    animate={{
                      x: [0, dx, dx * 1.25],
                      y: [0, dy, dy * 1.25 + 18],
                      opacity: [0, 1, 0],
                      scale: [0.4, 1, 0.2],
                    }}
                    transition={{
                      duration: 0.95,
                      repeat: Infinity,
                      repeatDelay: PERIOD - 0.95,
                      delay: delay + BURST_AT + (s % 3) * 0.04,
                      ease: "easeOut",
                    }}
                  />
                );
              })}
            </g>
          </g>
        );
      })}
    </>
  );
}
