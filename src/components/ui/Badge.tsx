import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'primary' | 'accent';
  size?: 'sm' | 'md';
}

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
}: BadgeProps) {
  const base =
    'inline-flex items-center font-medium rounded-full transition-all duration-200';

  const variants: Record<string, string> = {
    default:
      'bg-zinc-700/50 text-zinc-300 dark:bg-zinc-700/50 dark:text-zinc-300',
    success:
      'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 ring-1 ring-emerald-500/20',
    primary:
      'bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400 ring-1 ring-violet-500/20',
    accent:
      'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400 ring-1 ring-cyan-500/20',
  };

  const sizes: Record<string, string> = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}
