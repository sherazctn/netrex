/**
 * Animated favicon.
 *
 * Browsers do not play GIF or SVG animation in the tab icon (Chrome shows the first frame),
 * so the motion is drawn on a small canvas and swapped into the icon link frame by frame.
 *
 * Motion: the NETREX mark draws itself in from left to right on first load, then every few
 * seconds it lifts slightly while a light sheen sweeps across the arches. Between sweeps the
 * icon is static and nothing is redrawn.
 *
 * Skipped for prefers-reduced-motion, automated browsers (the prerender step) and when the
 * canvas is unavailable; the static favicon links in index.html are then used as normal.
 */

const SIZE = 64;
const FPS = 24;
const REVEAL_MS = 1100;
const CYCLE_MS = 3600; // time between sheen sweeps
const SWEEP_MS = 900;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

export function startAnimatedFavicon(src = "/favicon-mark.png") {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (navigator.webdriver) return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Layer used to paint the sheen only where the mark is.
  const layer = document.createElement("canvas");
  layer.width = SIZE;
  layer.height = SIZE;
  const lctx = layer.getContext("2d");
  if (!lctx) return;

  let link = document.querySelector<HTMLLinkElement>("link#app-favicon");
  if (!link) {
    link = document.createElement("link");
    link.id = "app-favicon";
    link.rel = "icon";
    link.type = "image/png";
    document.head.appendChild(link);
  }
  const staticHref = link.href;

  const img = new Image();
  img.decoding = "async";
  img.src = src;

  let startedAt = 0;
  let timer = 0;
  let lastWasIdle = false;

  const drawMark = (target: CanvasRenderingContext2D, lift: number, scale: number) => {
    const s = SIZE * scale;
    const o = (SIZE - s) / 2;
    target.drawImage(img, o, o - lift, s, s);
  };

  const render = (now: number) => {
    const t = now - startedAt;
    ctx.clearRect(0, 0, SIZE, SIZE);

    // 1) First load: draw-in reveal with a glowing leading edge.
    if (t < REVEAL_MS) {
      const p = easeOutCubic(t / REVEAL_MS);
      const edge = SIZE * p;
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, edge, SIZE);
      ctx.clip();
      drawMark(ctx, 0, 0.9 + 0.1 * p);
      ctx.restore();

      lctx.clearRect(0, 0, SIZE, SIZE);
      lctx.globalCompositeOperation = "source-over";
      drawMark(lctx, 0, 0.9 + 0.1 * p);
      lctx.globalCompositeOperation = "source-in";
      const g = lctx.createLinearGradient(edge - 10, 0, edge + 2, 0);
      g.addColorStop(0, "rgba(255,255,255,0)");
      g.addColorStop(1, "rgba(255,255,255,0.9)");
      lctx.fillStyle = g;
      lctx.fillRect(edge - 10, 0, 12, SIZE);
      ctx.drawImage(layer, 0, 0);
      return true;
    }

    // 2) Every cycle: a small lift plus a diagonal sheen across the arches.
    const c = (t - REVEAL_MS) % CYCLE_MS;
    if (c < SWEEP_MS) {
      const p = c / SWEEP_MS;
      const lift = Math.sin(Math.PI * p) * 3; // up and back down
      const scale = 1 + Math.sin(Math.PI * p) * 0.04;
      drawMark(ctx, lift, scale);

      lctx.clearRect(0, 0, SIZE, SIZE);
      lctx.globalCompositeOperation = "source-over";
      drawMark(lctx, lift, scale);
      lctx.globalCompositeOperation = "source-in";
      const x = -SIZE * 0.6 + easeInOutSine(p) * SIZE * 2.2;
      const g = lctx.createLinearGradient(x - 14, 0, x + 14, SIZE * 0.35);
      g.addColorStop(0, "rgba(255,255,255,0)");
      g.addColorStop(0.5, "rgba(255,255,255,0.75)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      lctx.fillStyle = g;
      lctx.fillRect(0, 0, SIZE, SIZE);
      ctx.drawImage(layer, 0, 0);
      return true;
    }

    // 3) Resting: plain mark, drawn once per rest.
    drawMark(ctx, 0, 1);
    return false;
  };

  const frame = () => {
    timer = window.setTimeout(frame, 1000 / FPS);
    if (document.hidden) return;
    const moving = render(performance.now());
    if (!moving && lastWasIdle) return; // nothing changed since the last frame
    lastWasIdle = !moving;
    link!.href = canvas.toDataURL("image/png");
  };

  img.onload = () => {
    startedAt = performance.now();
    frame();
  };

  const stop = () => {
    window.clearTimeout(timer);
    if (staticHref) link!.href = staticHref;
  };
  window.addEventListener("pagehide", stop, { once: true });
  return stop;
}
