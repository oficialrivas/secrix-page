'use client';
import { useState } from 'react';
import { motion, Variants } from 'motion/react';
import { cn } from '@/lib/utils';

interface ExpandableCard {
  id: number;
  content: React.ReactNode | ((isExpanded: boolean) => React.ReactNode);
}

interface ExpandableCardsProps {
  cards: ExpandableCard[];
  defaultExpanded?: number;
  className?: string;
}

export default function ExpandableCards({
  cards,
  defaultExpanded = 1,
  className,
}: ExpandableCardsProps) {
  const [expandedId, setExpandedId] = useState<number>(defaultExpanded);
  const elegantEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const cardVariants: Variants = {
    expanded: {
      flex: 3,
      transition: { duration: 0.45, ease: elegantEase },
    },
    collapsed: {
      flex: 1,
      transition: { duration: 0.45, ease: elegantEase },
    },
  };

  return (
    <div className={cn('flex gap-3 sm:gap-4 w-full h-full', className)}>
      {cards.map((card) => {
        const isExpanded = expandedId === card.id;
        const cardContent =
          typeof card.content === 'function' ? card.content(isExpanded) : card.content;

        return (
          <motion.div
            key={card.id}
            layout
            className='relative h-full overflow-hidden rounded-[40px] cursor-pointer group hover:border-[#d5b439]/40 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl shadow-black/40'
            variants={cardVariants}
            initial={isExpanded ? 'expanded' : 'collapsed'}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            onMouseEnter={() => setExpandedId(card.id)}
            whileHover={{ y: -8 }}
          >
            {isExpanded && (
              <motion.div
                layoutId='services-active-glow'
                className='pointer-events-none absolute inset-0 rounded-[40px] border border-[#f3de6c]/24 bg-[radial-gradient(120%_90%_at_70%_80%,rgba(243,222,108,0.14)_0%,rgba(213,180,57,0.08)_38%,transparent_72%)]'
                transition={{ duration: 0.5, ease: elegantEase }}
              />
            )}

            {isExpanded && (
              <motion.div
                layoutId='services-travel-orb'
                className='pointer-events-none absolute right-4 top-4 h-20 w-20'
                transition={{ type: 'spring', stiffness: 190, damping: 24, mass: 0.8 }}
              >
                <div className='absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(243,222,108,0.26)_0%,rgba(213,180,57,0.14)_42%,transparent_72%)] blur-sm' />
                <div className='absolute right-4 top-4 h-7 w-7 rounded-full border border-[#f3de6c]/45 bg-white/15 shadow-[0_0_18px_rgba(213,180,57,0.35)]' />
                <div className='absolute right-9 top-8 h-[2px] w-12 -rotate-[16deg] bg-gradient-to-r from-transparent via-[#f3de6c]/45 to-transparent' />
              </motion.div>
            )}

            <div className='absolute inset-0'>{cardContent}</div>

            {!isExpanded && (
              <motion.div
                className='absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300'
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            )}
          </motion.div>
        );
      })}
    </div> 
  );
}
