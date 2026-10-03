import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Solution } from "@/data/solutions";

export function SolutionGallery({ solution, compact = false }: { solution: Solution; compact?: boolean }) {
  const [active, setActive] = useState(0);
  const slides = solution.slides;
  const select = (index: number) => setActive((index + slides.length) % slides.length);

  return (
    <div className="space-y-3">
      <div className={`relative overflow-hidden rounded-2xl border border-border bg-muted ${compact ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
        <div className="absolute inset-y-0 w-[500%] max-w-none transition-transform duration-500 ease-out" style={{ left: `${active * -100}%` }}>
          <img src={solution.image} alt={`${solution.name} product views`} loading="lazy" width={1920} height={1152} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-foreground/90 to-transparent p-4 pt-12">
          <span className="text-sm font-semibold text-background">{slides[active].title}</span>
          <span className="text-xs tabular-nums text-background/70">{active + 1} / {slides.length}</span>
        </div>
        <Button type="button" variant="secondary" size="icon" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl shadow-md" onClick={() => select(active - 1)} aria-label="Previous screenshot"><ChevronLeft /></Button>
        <Button type="button" variant="secondary" size="icon" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl shadow-md" onClick={() => select(active + 1)} aria-label="Next screenshot"><ChevronRight /></Button>
      </div>
      <div className="flex justify-center gap-2" role="tablist" aria-label={`${solution.name} screenshots`}>
        {slides.map((slide, index) => (
          <button key={slide.title} type="button" role="tab" aria-selected={active === index} aria-label={`Show ${slide.title}`} onClick={() => select(index)} className={`h-2 transition-all ${active === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}`} />
        ))}
      </div>
    </div>
  );
}
