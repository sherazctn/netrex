import { motion, motionValue, useTransform } from "framer-motion";
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

const PERIOD = 17;
const TRAVEL = 6.4;
const SWING_AT = TRAVEL * 0.52;
const BURST_AT = TRAVEL - 0.42;
const MAX_FLYERS = 14;

type AxisMotion = import("framer-motion").MotionValue<number>;

interface TechBurstOrbitProps {
  density?: number;
  reducedMotion?: boolean;
  onIconFlyby?: () => void;
  pointerX?: AxisMotion;
  pointerY?: AxisMotion;
}

interface FlyerProps {
  tech: (typeof techs)[number];
  index: number;
  total: number;
  hovered: string | null;
  setHovered: (name: string | null) => void;
  pointerX?: AxisMotion;
  pointerY?: AxisMotion;
}

function TechFlyer({ tech, index, total, hovered, setHovered, pointerX, pointerY }: FlyerProps) {
  const lane = index % 4;
  const clockwise = index % 2 === 0 ? 1 : -1;
  const entryAngle = (index * 137.508 + lane * 19) % 360;
  const exitAngle = entryAngle + clockwise * (142 + lane * 13);
  const start = polar(entryAngle, R_EDGE + 22);
  const approach = polar(entryAngle + clockwise * (30 + lane * 5), 225 - lane * 8);
  const swing = polar(entryAngle + clockwise * (82 + lane * 7), 148 + lane * 13);
  const release = polar(exitAngle - clockwise * 24, 220 + lane * 6);
  const exit = polar(exitAngle, R_EDGE + 30);
  const path = [start, approach, swing, release, exit];
  const delay = (index * PERIOD) / total;
  const duration = TRAVEL + lane * 0.45;
  const cycle = { duration, repeat: Infinity, repeatDelay: PERIOD - duration, delay };

  const pushX = useTransform(pointerX ?? ZERO_MOTION, [-0.5, 0.5], [clockwise * -8, clockwise * 8]);
  const pushY = useTransform(pointerY ?? ZERO_MOTION, [-0.5, 0.5], [clockwise * -6, clockwise * 6]);

  return (
    <g>
      <motion.path
        d={`M ${start.x} ${start.y} Q ${swing.x} ${swing.y} ${exit.x} ${exit.y}`}
        fill="none"
        stroke="hsl(var(--primary) / 0.16)"
        strokeWidth="1.5"
        strokeDasharray="2 12"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.45, 0.18, 0] }}
        transition={{ ...cycle, ease: "easeInOut", times: [0, 0.28, 0.72, 1] }}
      />

      <motion.g
        initial={{ opacity: 0 }}
        animate={{
          x: path.map((point) => point.x - CX),
          y: path.map((point) => point.y - CY),
          opacity: [0, 1, 1, 1, 0],
          scale: [0.65, 0.9, 1.06, 0.96, 0.72],
        }}
        transition={{ ...cycle, ease: [0.45, 0, 0.25, 1], times: [0, 0.25, 0.52, 0.78, 1] }}
      >
        <motion.g style={{ x: pushX, y: pushY }}>
          <motion.g
            whileHover={{ scale: 1.22 }}
            whileTap={{ scale: 1.16 }}
            onHoverStart={() => setHovered(tech.name)}
            onHoverEnd={() => setHovered(null)}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            style={{ cursor: "pointer" }}
          >
            <circle
              cx={CX}
              cy={CY}
              r="25"
              fill="hsl(var(--background))"
              stroke={hovered === tech.name ? "hsl(var(--accent))" : "hsl(var(--primary) / 0.48)"}
              strokeWidth={hovered === tech.name ? 3 : 1.5}
            />
            <image href={tech.logo} x={CX - 16} y={CY - 16} width="32" height="32" />
            {hovered === tech.name && (
              <g className="pointer-events-none">
                <rect x={CX - 54} y={CY + 32} width="108" height="24" rx="6" fill="hsl(var(--foreground))" />
                <text x={CX} y={CY + 48} textAnchor="middle" fontSize="11" fontWeight="600" fill="hsl(var(--background))">
                  {tech.name}
                </text>
              </g>
            )}
          </motion.g>
        </motion.g>
      </motion.g>

      <motion.path
        d={`M ${exit.x - 9} ${exit.y} Q ${exit.x} ${exit.y - 10} ${exit.x + 9} ${exit.y}`}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: [0, 0.8, 0], pathLength: [0, 1, 1] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatDelay: PERIOD - 0.55, delay: delay + BURST_AT, ease: "easeOut" }}
      />
      {[0, 1, 2, 3].map((shard) => {
        const angle = exitAngle - 36 + shard * 24;
        const distance = 18 + (shard % 2) * 8;
        return (
          <motion.circle
            key={shard}
            cx={exit.x}
            cy={exit.y}
            r={1.8 + (shard % 2) * 0.7}
            fill={shard === 2 ? "hsl(var(--accent))" : "hsl(var(--primary))"}
            initial={{ opacity: 0 }}
            animate={{
              x: [0, distance * Math.cos((angle * Math.PI) / 180)],
              y: [0, distance * Math.sin((angle * Math.PI) / 180) + 8],
              opacity: [0, 0.9, 0],
            }}
            transition={{ duration: 0.65, repeat: Infinity, repeatDelay: PERIOD - 0.65, delay: delay + BURST_AT + shard * 0.025, ease: "easeOut" }}
          />
        );
      })}
    </g>
  );
}

const ZERO_MOTION = motionValue(0);

/** Varied, bidirectional technology paths with restrained pointer response. */
export function TechBurstOrbit({ density = 1, reducedMotion = false, onIconFlyby, pointerX, pointerY }: TechBurstOrbitProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeTechs = useMemo(() => {
    const count = reducedMotion ? 10 : Math.max(8, Math.round(MAX_FLYERS * density));
    const step = techs.length / count;
    return Array.from({ length: count }, (_, index) => techs[Math.floor(index * step)]);
  }, [density, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !onIconFlyby) return;
    const timers: number[] = [];
    activeTechs.forEach((_, index) => {
      const delay = (index * PERIOD) / activeTechs.length;
      const timeout = window.setTimeout(() => {
        onIconFlyby();
        timers.push(window.setInterval(onIconFlyby, PERIOD * 1000));
      }, (delay + SWING_AT) * 1000);
      timers.push(timeout);
    });
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [activeTechs, reducedMotion, onIconFlyby]);

  if (reducedMotion) {
    return (
      <>
        {activeTechs.map((tech, index) => {
          const { x, y } = polar((index / activeTechs.length) * 360, 215 + (index % 2) * 26);
          return (
            <g key={tech.name}>
              <circle cx={x} cy={y} r="21" fill="hsl(var(--background))" stroke="hsl(var(--primary) / 0.35)" strokeWidth="1.5" />
              <image href={tech.logo} x={x - 13} y={y - 13} width="26" height="26" />
            </g>
          );
        })}
      </>
    );
  }

  return (
    <>
      {activeTechs.map((tech, index) => (
        <TechFlyer
          key={tech.name}
          tech={tech}
          index={index}
          total={activeTechs.length}
          hovered={hovered}
          setHovered={setHovered}
          pointerX={pointerX}
          pointerY={pointerY}
        />
      ))}
    </>
  );
}
