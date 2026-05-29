'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SeparatorPro } from '@/components/ui/seperatorpro';
import GlobeWireframe from '@/components/ui/globe-wireframe';

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

interface ContactWithGlobeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function ContactWithGlobe({
  title = 'Contact us',
  subtitle = 'Contact',
  description = 'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.',
  className,
}: ContactWithGlobeProps) {
  return (
    <section
      className={cn(
        'relative w-full bg-transparent overflow-hidden py-20',
        className,
      )}
    >
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex flex-col items-center text-center gap-4 mb-12'>
          

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: smoothEase }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white'
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: smoothEase }}
            className='text-base text-zinc-500 dark:text-zinc-400 max-w-md'
          >
            {description}
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start'>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2, ease: smoothEase }}
            className='flex flex-col gap-6'
          >
            <div className='flex flex-col gap-1'>
              <h3 className='text-xl font-semibold text-zinc-900 dark:text-white'>
                Better yet, see us in person!
              </h3>
              <p className='text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs'>
                Submit form in order to schedule appointment to come visit our
                office.
              </p>
            </div>

            <div className='flex flex-col gap-1 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed'>
              <p>Two Datran Center</p>
              <p>9130 South Dadeland Blvd</p>
              <p>Suite 1902</p>
              <p>Miami, FL 33156</p>
            </div>

            <div className='relative overflow-hidden h-52'>
              <GlobeWireframe
                className='w-full aspect-square max-w-full absolute top-0 left-0'
                variant='wireframesolid'
                autoRotate
                autoRotateSpeed={0.45}
                strokeWidth={0.6}
                graticuleOpacity={0.12}
              />
              <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#060a16] to-transparent' />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.35, ease: smoothEase }}
            className='rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 flex flex-col gap-5'
          >
            <div>
              <h3 className='text-lg font-semibold text-zinc-900 dark:text-white mb-0.5'>
                Send a message
              </h3>
              <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                Fill out the form and we'll get back to you promptly.
              </p>
            </div>

            <SeparatorPro variant='dots' />

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500'>
                  Full Name
                </label>
                <input
                  type='text'
                  placeholder='Ahdeetai'
                  className='w-full bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-rose-400 dark:focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/10 transition-all duration-200'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500'>
                  Company
                </label>
                <input
                  type='text'
                  placeholder='ScrollX UI'
                  className='w-full bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-rose-400 dark:focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/10 transition-all duration-200'
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500'>
                Email Address
              </label>
              <input
                type='email'
                placeholder='support@scrollxui.com'
                className='w-full bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-rose-400 dark:focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/10 transition-all duration-200'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500'>
                Message
              </label>
              <textarea
                placeholder='Type your message here'
                rows={4}
                className='w-full bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none focus:border-rose-400 dark:focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/10 resize-none transition-all duration-200'
              />
            </div>

            <Button className='w-fit h-11 px-8 rounded-xl font-semibold text-sm bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 group'>
              Submit
              <ArrowRight className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1' />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
