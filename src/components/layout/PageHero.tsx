import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  /** Small uppercase eyebrow label above the title. */
  badge?: ReactNode;
  /** Main heading text (rendered as the page H1). */
  title: ReactNode;
  /** Optional trailing part of the heading, rendered in brand red. */
  highlight?: ReactNode;
  /** Supporting paragraph under the heading. */
  description?: ReactNode;
  /** Optional CTA buttons / extra content below the description. */
  children?: ReactNode;
}

/**
 * Uniform hero band used at the top of every inner page.
 * Minimal, centered, subtle red glow + grid texture.
 */
export function PageHero({ badge, title, highlight, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-secondary/30 pt-32 pb-16 md:pb-20">
      {/* Texture + glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-hero-grid)" />
        </svg>
        <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {badge && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {badge}
              </span>
            </div>
          )}

          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-primary">{highlight}</span>
              </>
            )}
          </h1>

          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
