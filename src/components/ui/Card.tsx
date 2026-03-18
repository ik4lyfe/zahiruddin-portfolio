import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-zinc-800/50
        border border-zinc-200 dark:border-zinc-700/50
        rounded-xl p-6
        transition-all duration-200
        ${
          hover
            ? 'hover:border-violet-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10'
            : ''
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
