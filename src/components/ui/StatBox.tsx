import type { LucideIcon } from 'lucide-react';

interface StatBoxProps {
  value: string;
  label: string;
  icon: LucideIcon;
}

export default function StatBox({ value, label, icon: Icon }: StatBoxProps) {
  return (
    <div
      className="
        flex flex-col items-center gap-2 p-5
        bg-white dark:bg-zinc-800/50
        border border-zinc-200 dark:border-zinc-700/50
        rounded-xl
        transition-all duration-200
        hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10
      "
    >
      <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
      <span className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {value}
      </span>
      <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 text-center">
        {label}
      </span>
    </div>
  );
}
