'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { useState, useEffect, useCallback } from 'react';

type SpeedType = number | 'slow' | 'normal' | 'fast';

interface TypeanimationProps {
  words?: string[];
  className?: string;
  typingSpeed?: SpeedType;
  deletingSpeed?: SpeedType;
  pauseDuration?: number;
  gradientFrom?: string;
  gradientTo?: string;
  wordClassMap?: Record<string, string>;
}

const speedMap: Record<string, number> = {
  slow: 150,
  normal: 80,
  fast: 30,
};

function resolveSpeed(speed: SpeedType): number {
  if (typeof speed === 'number') return speed;
  return speedMap[speed] ?? 80;
}

const Typeanimation = ({
  words = [' existence', ' reality', ' the Internet'],
  className,
  typingSpeed = 50,
  deletingSpeed = 50,
  pauseDuration = 1000,
  gradientFrom = 'blue-500',
  gradientTo = 'purple-600',
  wordClassMap,
}: TypeanimationProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const currentWord = words[currentWordIndex];

  const startNextWord = useCallback(() => {
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
    setDisplayedText('');
    setIsTyping(true);
  }, [words.length]);

  useEffect(() => {
    if (!currentWord) return;

    let timer: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, resolveSpeed(typingSpeed));
      } else {
        timer = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, resolveSpeed(deletingSpeed));
      } else {
        startNextWord();
      }
    }

    return () => clearTimeout(timer);
  }, [currentWord, displayedText, isTyping, typingSpeed, deletingSpeed, pauseDuration, startNextWord]);

  const extraClass = wordClassMap?.[currentWord] ?? '';

  return (
    <motion.span
      className={cn(
        `bg-clip-text text-transparent bg-linear-to-r from-${gradientFrom} to-${gradientTo}`,
        className,
        extraClass,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
};

export default Typeanimation;
