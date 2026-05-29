'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';

interface ParallaxCard {
  variant?: 'glass' | 'light';
  content: React.ReactNode;
}

interface ParallaxCardsProps {
  cards?: ParallaxCard[];
  height?: number | string;
}

export default function ParallaxCards({
  cards,
  height = '100vh',
}: ParallaxCardsProps) {
  const cardCount = cards?.length || 0;
  const stackHeight = `${cardCount * 70}vh`;
  const resolvedHeight =
    typeof height === 'number' ? `${height}px` : stackHeight;

  return (
    <section className='relative w-full' style={{ height: resolvedHeight }}>
      <div className='absolute inset-0 pointer-events-none z-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#060a16]/90 via-[#0b1129]/70 to-[#001c49]/90' />
        <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-blue-950/40 to-transparent' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.5)_40%,transparent_70%)]' />
      </div>

      <div style={{ height: stackHeight }} className='relative z-10'>
        {cards?.map((card, index) => (
          <div key={index} className='sticky top-0 h-[70vh] z-1'>
            <Card
              className={
                card.variant === 'light'
                  ? 'w-full h-full flex items-center justify-center text-center p-8 rounded-none bg-white border-gray-200/80 shadow-xl shadow-gray-200/50'
                  : "w-full h-full flex items-center justify-center text-center p-8 rounded-none bg-transparent border-white/[0.06] backdrop-blur-xl shadow-2xl shadow-black/40 relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/[0.03] after:to-transparent after:pointer-events-none"
              }
              style={
                card.variant === 'light'
                  ? undefined
                  : {
                      background:
                        'linear-gradient(135deg, rgba(8,12,24,0.75), rgba(0,16,40,0.6))',
                    }
              }
            >
              {card.content}
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
