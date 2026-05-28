'use client';

import { cn } from '@/lib/utils';
import { Dot } from 'lucide-react';

interface SeparatorProProps {
  variant?: 'dots' | 'solid' | 'gradient';
  className?: string;
}

export function SeparatorPro({
  variant = 'solid',
  className,
}: SeparatorProProps) {
  if (variant === 'dots') {
    return (
      <div
        className={cn(
          'flex items-center justify-center gap-1.5',
          className,
        )}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <Dot
            key={i}
            className='w-4 h-4 text-zinc-300 dark:text-zinc-600'
          />
        ))}
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div
        className={cn(
          'h-px bg-linear-to-r from-transparent via-zinc-300 dark:via-zinc-600 to-transparent',
          className,
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        'h-px bg-zinc-200 dark:bg-zinc-800',
        className,
      )}
    />
  );
}
