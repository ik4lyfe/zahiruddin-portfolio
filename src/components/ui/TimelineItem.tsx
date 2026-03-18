import { motion } from 'framer-motion';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  isLast?: boolean;
  index?: number;
}

export default function TimelineItem({
  year,
  title,
  organization,
  description,
  isLast = false,
  index = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
      className="relative pl-8 sm:pl-10"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] sm:left-[15px] top-8 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 sm:left-1 top-1.5 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      {/* Content */}
      <div className="pb-8">
        <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-primary dark:text-primary-light bg-primary/10 rounded-full mb-2">
          {year}
        </span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm font-medium text-primary dark:text-primary-light mb-2">
          {organization}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
