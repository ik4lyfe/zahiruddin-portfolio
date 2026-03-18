import { useState, useEffect, useCallback } from 'react';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface TypingTextProps {
  texts: string[];
  speed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypingText({
  texts,
  speed = 80,
  pauseDuration = 2000,
  className,
}: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentFullText = texts[currentTextIndex];

    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      const next = currentFullText.slice(0, displayedText.length + 1);
      setDisplayedText(next);

      if (next === currentFullText) {
        setIsPaused(true);
      }
    } else {
      // Deleting
      const next = currentFullText.slice(0, displayedText.length - 1);
      setDisplayedText(next);

      if (next === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [texts, currentTextIndex, displayedText, isDeleting, isPaused]);

  // Typing / deleting interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(tick, isDeleting ? speed / 2 : speed);
    return () => clearInterval(interval);
  }, [tick, isPaused, isDeleting, speed]);

  // Pause timer — pause at end of word before starting deletion
  useEffect(() => {
    if (!isPaused) return;
    const timeout = setTimeout(() => {
      setIsPaused(false);
      setIsDeleting(true);
    }, pauseDuration);
    return () => clearTimeout(timeout);
  }, [isPaused, pauseDuration]);

  // Reduced-motion: show first text statically
  if (prefersReducedMotion) {
    return <span className={className}>{texts[0]}</span>;
  }

  return (
    <span className={className}>
      {displayedText}
      <span
        className="inline-block w-[2px] h-[1em] bg-violet-500 ml-1 align-middle"
        style={{
          animation: 'blink-cursor 0.5s step-end infinite',
        }}
      />
      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
