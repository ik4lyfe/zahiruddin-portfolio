import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className="w-1 h-5 rounded-full bg-violet-600 dark:bg-violet-400" />
      <span className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
        {children}
      </span>
    </div>
  );
}
