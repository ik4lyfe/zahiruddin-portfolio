import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-700/50 dark:text-zinc-300 transition-all duration-200">
      {children}
    </span>
  );
}
