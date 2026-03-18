import { useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook that returns a ref and an isInView boolean.
 * The element is considered "in view" once it crosses –80px
 * of the viewport and stays revealed (once: true).
 */
export function useScrollReveal(margin = '-80px') {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin });

  return { ref, isInView };
}
