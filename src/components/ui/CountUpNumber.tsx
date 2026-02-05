import { useCountUp } from '@/hooks/useCountUp';

interface CountUpNumberProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUpNumber({
  end,
  duration = 2000,
  delay = 0,
  prefix = '',
  suffix = '',
  className = ''
}: CountUpNumberProps) {
  const { ref, displayValue } = useCountUp({ end, duration, delay, prefix, suffix });

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
