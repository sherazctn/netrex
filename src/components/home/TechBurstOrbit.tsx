import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { CX, CY, R_EDGE, polar } from "./hero/heroShared";

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
  { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
];

const PERIOD = 14; // full loop for one icon (s)
const TRAVEL = 4.2; // time an icon is visible while travelling (s)
const SWING_AT = TRAVEL * 0.55; // moment it skims closest to the core -> triggers pulse
const BURST_AT = TRAVEL - 0.55; // burst fires as the icon crosses the ring
const SHARDS = 9;
const TRAIL_GHOSTS = 3;

interface TechBurstOrbitProps {
  /** Density multiplier (0 disables motion entirely -> static ring of icons). */
  density?: number;
  reducedMotion?: boolean;
  /** Called each time a travelling icon skims past the core, for the core's reactive pulse. */
  onIconFlyby?: () => void;
}

/**
 * Tech icons stream in from outside the ring, slingshot around the red core
 * trailing a glowing energy tail, then exit on the far side where they burst
 * into gravity-affected shards. Rendered as SVG content inside the hero <svg>.
 */
export function TechBurstOrbit({ density = 1, reducedMotion = false, onIconFlyby }: TechBurstOrbitProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  // Fewer concurrent flyers on smaller/lower-power viewports.
  const activeTechs = useMemo(() => {
    const count = Math.max(8, Math.round(techs.length * (reducedMotion ? 0 : density)));
    return techs.slice(0, count);
  }, [density, reducedMotion]);

  // Fire a core pulse each time an icon skims by, synced to each icon's loop.
  useEffect(() => {
    if (reducedMotion || !onIconFlyby) return;
    const timers: number[] = [];
    activeTechs.forEach((_, i) => {
      const delay = (i * PERIOD) / techs.length;
      const firstFire = (delay + SWING_AT) * 1000;
      const t = window.setTimeout(() => {
        onIconFlyby();
        const interval = window.setInterval(onIconFlyby, PERIOD * 1000);
        timers.push(interval);
      }, firstFire);
      timers.push(t);
    });
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [activeTechs, reducedMotion, onIconFlyby]);

  if (reducedMotion) {
    // Static, calm composition: icons parked evenly around a single ring.
    return (
      <>
        {activeTechs.map((tech, i) => {
          const angle = (i / activeTechs.length) * 360;
          const { x, y } = polar(angle, 235);
          return (
            <g key={tech.name}>
              <circle cx={x} cy={y} r="22" fill="hsl(var(--background))" stroke="hsl(359 85% 53% / 0.4)" strokeWidth="2" />
              <image href={tech.logo} x={x - 13} y={y - 13} width="26" height="26" />
            </g>
          );
        })}
      </>
    );
  }

  return (
    <>
      {activeTechs.map((tech, i) => {
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
        const path = [start, approach, swing, release, exit];

        return (
          <g key={tech.name}>
            {/* Glowing energy trail: fading ghost copies chasing the icon */}
            {[...Array(TRAIL_GHOSTS)].map((_, g) => {
              const lag = (g + 1) * 0.07;
              return (
                <motion.circle
                  key={`trail-${g}`}
                  r={7 - g * 1.6}
                  fill="hsl(359 85% 53%)"
                  filter="url(#heroTrailGlow)"
                  initial={{ opacity: 0 }}
                  animate={{
                    x: path.map((p) => p.x - CX),
                    y: path.map((p) => p.y - CY),
                    opacity: [0, 0.5 - g * 0.12, 0.55 - g * 0.12, 0.4 - g * 0.1, 0],
                  }}
                  transition={{ ...cycle, delay: delay + lag, ease: "easeInOut", times: [0, 0.3, 0.55, 0.8, 1] }}
                  style={{ translateX: CX, translateY: CY }}
                />
              );
            })}

            {/* Travelling icon capsule */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{
                x: path.map((p) => p.x - CX),
                y: path.map((p) => p.y - CY),
                opacity: [0, 1, 1, 1, 0],
                scale: [0.35, 0.95, 1.1, 1, 0.7],
              }}
              transition={{ ...cycle, ease: [0.22, 1, 0.36, 1], times: [0, 0.3, 0.55, 0.8, 1] }}
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
                {/* soft pulsing halo */}
                <motion.circle
                  cx={CX}
                  cy={CY}
                  r="34"
                  fill="hsl(359 85% 53% / 0.12)"
                  filter="url(#heroTrailGlow)"
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
                  <g>
                    <rect
                      x={CX - 46}
                      y={CY + 30}
                      width="92"
                      height="22"
                      rx="11"
                      fill="hsl(var(--background))"
                      stroke="hsl(359 85% 53% / 0.4)"
                    />
                    <text
                      x={CX}
                      y={CY + 45}
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="600"
                      fill="hsl(var(--foreground))"
                    >
                      {tech.name}
                    </text>
                  </g>
                )}
              </motion.g>
            </motion.g>

            {/* Balloon burst at the exit point, with gravity pulling shards down */}
            <g>
              {/* splash ring */}
              <motion.circle
                cx={exit.x}
                cy={exit.y}
                r="12"
                fill="none"
                stroke="hsl(359 85% 53%)"
                strokeWidth="2"
                filter="url(#heroTrailGlow)"
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
              {/* droplet shards with gravity arc + varied size + motion-blur fade */}
              {[...Array(SHARDS)].map((_, s) => {
                const shardAngle = outAngle - 70 + (s * 140) / (SHARDS - 1);
                const dist = 30 + (s % 4) * 20;
                const dx = dist * Math.cos((shardAngle * Math.PI) / 180);
                const dyOut = dist * Math.sin((shardAngle * Math.PI) / 180);
                const gravity = 26 + (s % 3) * 14; // extra downward pull over time
                const size = 1.5 + (s % 4) * 1.1;
                return (
                  <motion.circle
                    key={s}
                    cx={exit.x}
                    cy={exit.y}
                    r={size}
                    fill={s % 3 === 0 ? "hsl(var(--accent))" : "hsl(359 85% 53%)"}
                    initial={{ opacity: 0 }}
                    animate={{
                      x: [0, dx, dx * 1.2],
                      y: [0, dyOut, dyOut * 1.15 + gravity],
                      opacity: [0, 1, 0],
                      scale: [0.3, 1, 0.15],
                      filter: ["blur(0px)", "blur(0px)", "blur(2px)"],
                    }}
                    transition={{
                      duration: 1.05,
                      repeat: Infinity,
                      repeatDelay: PERIOD - 1.05,
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
