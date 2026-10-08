"use client";

import { useEffect, useRef, useState } from "react";
import { HeadingText } from "@/components/globals/typography/heading-text";

interface CounterNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CounterNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
  className = "text-[#0F2B5C] dark:text-white",
}: CounterNumberProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic easing
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutProgress * value);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animateCount);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <div ref={elementRef} className="inline-block">
      <HeadingText variant="h2" className={className}>
        {prefix}
        {count}
        {suffix}
      </HeadingText>
    </div>
  );
}

export default CounterNumber;
