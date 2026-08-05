import { motion, MotionValue, useTransform } from "framer-motion";
import { CX, CY } from "./heroShared";

interface ParallaxFieldProps {
  /** normalized pointer position, -0.5..0.5, spring-smoothed */
  px: MotionValue<number>;
  py: MotionValue<number>;
  density: number;
  reducedMotion: boolean;
}

/**
 * Depth-layered backdrop: faint rings + drifting particles at different
 * parallax factors, so the whole scene reacts subtly to the cursor even
 * where nothing is "on rails". Purely decorative — sits behind the core.
 */
export function ParallaxField({ px, py, density, reducedMotion }: ParallaxFieldProps) {
  const layers = [
    { radius: 250, factor: 10, count: Math.round(10 * density), size: [1, 2.4], opacity: 0.35 },
    { radius: 195, factor: 18, count: Math.round(8 * density), size: [1.4, 3], opacity: 0.5 },
    { radius: 130, factor: 28, count: Math.round(6 * density), size: [1.8, 3.4], opacity: 0.65 },
  ];

  return (
    <>
      {layers.map((layer, li) => {
        const x = useTransform(px, (v) => v * layer.factor);
        const y = useTransform(py, (v) => v * layer.factor);
        return (
          <motion.g key={li} style={reducedMotion ? undefined : { x, y }}>
            {[...Array(layer.count)].map((_, i) => {
              const angle = (i / layer.count) * 360 + li * 17;
              const r = layer.radius + (i % 2 === 0 ? 8 : -8);
              const cx = CX + r * Math.cos((angle * Math.PI) / 180);
              const cy = CY + r * Math.sin((angle * Math.PI) / 180);
              const size = layer.size[0] + (i % 3) * ((layer.size[1] - layer.size[0]) / 2);
              return (
                <motion.circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={size}
                  fill={i % 3 === 0 ? "hsl(var(--accent))" : "hsl(359 85% 53%)"}
                  opacity={layer.opacity}
                  animate={
                    reducedMotion
                      ? undefined
                      : {
                          opacity: [layer.opacity * 0.3, layer.opacity, layer.opacity * 0.3],
                          scale: [0.85, 1.2, 0.85],
                        }
                  }
                  transition={{
                    duration: 3.5 + (i % 4) * 0.6,
                    repeat: Infinity,
                    delay: i * 0.18 + li * 0.3,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </motion.g>
        );
      })}
    </>
  );
}
