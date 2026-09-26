import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  prefix = '',
  suffix = ''
}: UseCountUpOptions) {
  // Show the final number straight away for automated renderers (pre-rendering, crawlers) and for
  // visitors who prefer reduced motion, so the HTML never says "0+ projects".
  const skipAnimation =
    typeof window !== 'undefined' &&
    (navigator.webdriver === true ||
      (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches));
  const [count, setCount] = useState(skipAnimation ? end : start);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (skipAnimation) {
      setCount(end);
      return;
    }
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.round(start + (end - start) * easeOutQuart);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, start, end, duration, delay, skipAnimation]);

  return { count, ref, displayValue: `${prefix}${count.toLocaleString()}${suffix}` };
}
