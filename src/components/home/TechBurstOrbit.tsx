import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { CX, CY, R_EDGE, polar } from "./hero/heroShared";

const dev = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

/**
 * Full technology stack behind every NETREX service line: web, mobile, design,
 * cloud/DevOps, data/AI, e-commerce, blockchain and business platforms.
 */
export const techs = [
  // Web / frontend
  { name: "React", logo: dev("react/react-original") },
  { name: "Next.js", logo: dev("nextjs/nextjs-original") },
  { name: "Vue", logo: dev("vuejs/vuejs-original") },
  { name: "Angular", logo: dev("angularjs/angularjs-original") },
  { name: "Svelte", logo: dev("svelte/svelte-original") },
  { name: "Nuxt", logo: dev("nuxtjs/nuxtjs-original") },
  { name: "TypeScript", logo: dev("typescript/typescript-original") },
  { name: "JavaScript", logo: dev("javascript/javascript-original") },
  { name: "Tailwind CSS", logo: dev("tailwindcss/tailwindcss-original") },
  { name: "Sass", logo: dev("sass/sass-original") },
  { name: "Bootstrap", logo: dev("bootstrap/bootstrap-original") },
  { name: "Vite", logo: dev("vitejs/vitejs-original") },
  { name: "Webpack", logo: dev("webpack/webpack-original") },
  { name: "Three.js", logo: dev("threejs/threejs-original") },

  // Backend
  { name: "Node.js", logo: dev("nodejs/nodejs-original") },
  { name: "Express", logo: dev("express/express-original") },
  { name: "NestJS", logo: dev("nestjs/nestjs-original") },
  { name: "Python", logo: dev("python/python-original") },
  { name: "Django", logo: dev("django/django-plain") },
  { name: "FastAPI", logo: dev("fastapi/fastapi-original") },
  { name: "PHP", logo: dev("php/php-original") },
  { name: "Laravel", logo: dev("laravel/laravel-original") },
  { name: "Java", logo: dev("java/java-original") },
  { name: "Spring", logo: dev("spring/spring-original") },
  { name: "Go", logo: dev("go/go-original-wordmark") },
  { name: "Rust", logo: dev("rust/rust-original") },
  { name: ".NET", logo: dev("dotnetcore/dotnetcore-original") },
  { name: "C#", logo: dev("csharp/csharp-original") },
  { name: "Ruby on Rails", logo: dev("rails/rails-plain") },

  // CMS & e-commerce
  { name: "WordPress", logo: dev("wordpress/wordpress-original") },
  { name: "WooCommerce", logo: dev("woocommerce/woocommerce-original") },
  { name: "Magento", logo: dev("magento/magento-original") },
  { name: "Drupal", logo: dev("drupal/drupal-original") },

  // Mobile
  { name: "Flutter", logo: dev("flutter/flutter-original") },
  { name: "Swift", logo: dev("swift/swift-original") },
  { name: "Kotlin", logo: dev("kotlin/kotlin-original") },
  { name: "Android", logo: dev("android/android-original") },
  { name: "iOS", logo: dev("apple/apple-original") },
  { name: "Ionic", logo: dev("ionic/ionic-original") },
  { name: "Electron", logo: dev("electron/electron-original") },

  // Design
  { name: "Figma", logo: dev("figma/figma-original") },
  { name: "Sketch", logo: dev("sketch/sketch-original") },
  { name: "Adobe XD", logo: dev("xd/xd-plain") },
  { name: "Illustrator", logo: dev("illustrator/illustrator-plain") },
  { name: "Photoshop", logo: dev("photoshop/photoshop-plain") },
  { name: "After Effects", logo: dev("aftereffects/aftereffects-plain") },
  { name: "Blender", logo: dev("blender/blender-original") },
  { name: "Unity", logo: dev("unity/unity-original") },
  { name: "Canva", logo: dev("canva/canva-original") },

  // Cloud & DevOps
  { name: "AWS", logo: dev("amazonwebservices/amazonwebservices-plain-wordmark") },
  { name: "Google Cloud", logo: dev("googlecloud/googlecloud-original") },
  { name: "Azure", logo: dev("azure/azure-original") },
  { name: "Docker", logo: dev("docker/docker-original") },
  { name: "Kubernetes", logo: dev("kubernetes/kubernetes-plain") },
  { name: "Terraform", logo: dev("terraform/terraform-original") },
  { name: "Ansible", logo: dev("ansible/ansible-original") },
  { name: "Jenkins", logo: dev("jenkins/jenkins-original") },
  { name: "GitHub Actions", logo: dev("githubactions/githubactions-original") },
  { name: "GitLab", logo: dev("gitlab/gitlab-original") },
  { name: "Git", logo: dev("git/git-original") },
  { name: "Nginx", logo: dev("nginx/nginx-original") },
  { name: "Linux", logo: dev("linux/linux-original") },
  { name: "Grafana", logo: dev("grafana/grafana-original") },
  { name: "Prometheus", logo: dev("prometheus/prometheus-original") },

  // Data & platforms
  { name: "PostgreSQL", logo: dev("postgresql/postgresql-original") },
  { name: "MySQL", logo: dev("mysql/mysql-original") },
  { name: "MongoDB", logo: dev("mongodb/mongodb-original") },
  { name: "Redis", logo: dev("redis/redis-original") },
  { name: "SQL Server", logo: dev("microsoftsqlserver/microsoftsqlserver-plain") },
  { name: "Oracle", logo: dev("oracle/oracle-original") },
  { name: "Elasticsearch", logo: dev("elasticsearch/elasticsearch-original") },
  { name: "Apache Kafka", logo: dev("apachekafka/apachekafka-original") },
  { name: "RabbitMQ", logo: dev("rabbitmq/rabbitmq-original") },
  { name: "GraphQL", logo: dev("graphql/graphql-plain") },
  { name: "Firebase", logo: dev("firebase/firebase-plain") },
  { name: "Supabase", logo: dev("supabase/supabase-original") },
  { name: "Socket.IO", logo: dev("socketio/socketio-original") },

  // AI / ML & analytics
  { name: "TensorFlow", logo: dev("tensorflow/tensorflow-original") },
  { name: "PyTorch", logo: dev("pytorch/pytorch-original") },
  { name: "OpenCV", logo: dev("opencv/opencv-original") },
  { name: "Pandas", logo: dev("pandas/pandas-original") },
  { name: "NumPy", logo: dev("numpy/numpy-original") },
  { name: "Jupyter", logo: dev("jupyter/jupyter-original") },

  // Web3 & business
  { name: "Solidity", logo: dev("solidity/solidity-original") },
  { name: "Salesforce", logo: dev("salesforce/salesforce-original") },
  { name: "Jira", logo: dev("jira/jira-original") },
  { name: "Slack", logo: dev("slack/slack-original") },
];

const PERIOD = 14; // full loop for one icon (s)
const TRAVEL = 4.2; // time an icon is visible while travelling (s)
const SWING_AT = TRAVEL * 0.55; // moment it skims closest to the core -> triggers radar pulse
const BURST_AT = TRAVEL - 0.55; // burst fires as the icon crosses the ring
const SHARDS = 9;
const TRAIL_GHOSTS = 3;
/** Max icons in flight at once (keeps 90+ logo library performant). */
const MAX_FLYERS = 24;

interface TechBurstOrbitProps {
  /** Density multiplier (0 disables motion entirely -> static ring of icons). */
  density?: number;
  reducedMotion?: boolean;
  /** Called each time a travelling icon skims past the core, for the core's radar pulse. */
  onIconFlyby?: () => void;
}

/**
 * Tech icons stream in from outside the ring, slingshot around the red core
 * trailing a glowing energy tail, then exit on the far side where they burst
 * into gravity-affected shards. Rendered as SVG content inside the hero <svg>.
 */
export function TechBurstOrbit({ density = 1, reducedMotion = false, onIconFlyby }: TechBurstOrbitProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  // Even sampling across the whole library so every service area is represented,
  // while keeping concurrent flyers (and DOM nodes) bounded.
  const activeTechs = useMemo(() => {
    if (reducedMotion) return techs.filter((_, i) => i % 4 === 0).slice(0, 20);
    const count = Math.max(8, Math.round(MAX_FLYERS * density));
    const step = techs.length / count;
    return Array.from({ length: count }, (_, i) => techs[Math.floor(i * step)]);
  }, [density, reducedMotion]);

  // Fire the core radar pulse each time an icon skims by, synced to each icon's loop.
  useEffect(() => {
    if (reducedMotion || !onIconFlyby) return;
    const timers: number[] = [];
    activeTechs.forEach((_, i) => {
      const delay = (i * PERIOD) / activeTechs.length;
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
        const delay = (i * PERIOD) / activeTechs.length;
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
                      x={CX - 52}
                      y={CY + 30}
                      width="104"
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
