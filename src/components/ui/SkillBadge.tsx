import { motion } from 'framer-motion';

interface SkillBadgeProps {
  label: string;
  variant?: 'primary' | 'accent' | 'info';
}

export default function SkillBadge({ label, variant = 'primary' }: SkillBadgeProps) {
  const variants = {
    primary: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light border-primary/20',
    accent: 'bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-light border-accent/20',
    info: 'bg-info/10 text-info dark:bg-info/20 dark:text-info border-info/20',
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`inline-block px-3 py-1.5 text-sm font-medium rounded-lg border ${variants[variant]} transition-colors duration-200`}
    >
      {label}
    </motion.span>
  );
}
