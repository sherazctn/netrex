import { useEffect, useState } from "react";

export const CX = 300;
export const CY = 300;
export const R_EDGE = 300;

/** Detects prefers-reduced-motion and viewport "compactness" so the hero can
 * scale down particle density / disable 3D tilt gracefully. */
export function useHeroMotionProfile() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    const updateSize = () => setCompact(window.innerWidth < 1280);
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      motionQuery.removeEventListener("change", updateMotion);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return {
    reducedMotion,
    compact,
    /** 1 = full richness, lower = fewer particles/shards */
    density: reducedMotion ? 0 : compact ? 0.55 : 1,
  };
}

export const polar = (angle: number, radius: number, cx = CX, cy = CY) => ({
  x: cx + radius * Math.cos((angle * Math.PI) / 180),
  y: cy + radius * Math.sin((angle * Math.PI) / 180),
});
