import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface SkillBarProps {
  name: string;
  level: number; // 0-100
}

export default function SkillBar({ name, level }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {name}
        </span>
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {level}%
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-700/50 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
          initial={prefersReducedMotion ? { width: `${level}%` } : { width: 0 }}
          animate={isInView ? { width: `${level}%` } : prefersReducedMotion ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.1 }}
        />
      </div>
    </div>
  );
}
