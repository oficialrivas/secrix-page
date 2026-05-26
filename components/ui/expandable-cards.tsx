'use client';
import { useState } from 'react';
import { motion, Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ExpandableCard {
  id: number;
  image: string;
  title: string;
  description: string;
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

  const cardVariants: Variants = {
    expanded: {
      flex: 3,
      transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
    },
    collapsed: {
      flex: 1,
      transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  return (
    <div className={cn('flex gap-3 sm:gap-4 w-full h-full', className)}>
      {cards.map((card) => {
        const isExpanded = expandedId === card.id;

        return (
          <motion.div
            key={card.id}
            className='relative h-full overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer group border border-white/5 shadow-2xl shadow-black/50'
            variants={cardVariants}
            initial={isExpanded ? 'expanded' : 'collapsed'}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            onMouseEnter={() => setExpandedId(card.id)}
          >
            <div className='absolute inset-0'>
              <img 
                src={card.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={card.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a16] via-[#060a16]/60 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end h-full z-10">
              <h3 className="text-xl sm:text-2xl font-neue-montreal-medium text-white mb-2 min-w-[200px] leading-tight">
                {card.title}
              </h3>
              
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }}
                transition={{ duration: 0.3, delay: isExpanded ? 0.2 : 0 }}
                className="overflow-hidden"
              >
                <div className="h-px w-12 bg-blue-500/50 mb-4 mt-2"></div>
                <p className="text-sm sm:text-base font-neue-montreal-light text-white/80 leading-relaxed mb-6 max-w-xl">
                  {card.description}
                </p>
                <button className="text-blue-400 font-neue-montreal-medium text-sm flex items-center gap-2 hover:text-blue-300 transition-colors uppercase tracking-wider">
                  Learn More <span>↗</span>
                </button>
              </motion.div>
            </div>

            {!isExpanded && (
              <motion.div
                className='absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-300 z-0'
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
