'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import {
  Menu as List,
  X as Close,
  ChevronDown as ArrowDown,
  ChevronUp as ArrowUp,
} from 'lucide-react';

interface NavLink {
  text: string;
  url?: string;
  submenu?: React.ReactNode;
}

interface NavbarFlowProps {
  emblem?: React.ReactNode;
  links?: NavLink[];
  extraIcons?: React.ReactNode[];
  styleName?: string;
  rightComponent?: React.ReactNode;
  showConnections?: boolean;
}

interface ListItemProps {
  setSelected: (element: string | null) => void;
  selected: string | null;
  element: string;
  children: React.ReactNode;
}

interface HoverLinkProps {
  url: string;
  children: React.ReactNode;
  onPress?: () => void;
}

interface FeatureItemProps {
  heading: string;
  url: string;
  info: string;
  onPress?: () => void;
}

const springTransition = {
  type: 'spring' as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const ListItem: React.FC<ListItemProps> = ({
  setSelected,
  selected,
  element,
  children,
}) => {
  return (
    <div
      className='relative'
      onMouseEnter={() => setSelected(element)}
      onMouseLeave={(e) => {
        const dropdown = e.currentTarget.querySelector('.dropdown-content');
        if (dropdown) {
          const dropdownRect = dropdown.getBoundingClientRect();
          if (e.clientY < dropdownRect.top - 20) {
            setSelected(null);
          }
        }
      }}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-gray-800 dark:text-gray-200 font-medium text-sm lg:text-lg whitespace-nowrap hover:opacity-[0.9] hover:text-gray-900 dark:hover:text-white py-1'
      >
        {element}
      </motion.p>
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={springTransition}
        >
          {selected === element && (
            <div className='absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 z-50'>
              <motion.div
                transition={springTransition}
                layoutId='selected'
                className='dropdown-content bg-white dark:bg-black backdrop-blur-xs rounded-2xl overflow-hidden border-2 border-[#f3de6c]/30 shadow-2xl'
                style={{
                  maxWidth: 'min(90vw, 400px)',
                }}
                onMouseEnter={() => setSelected(element)}
                onMouseLeave={() => setSelected(null)}
              >
                <motion.div layout className='w-max h-full p-4 min-w-48'>
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const HoverLink: React.FC<HoverLinkProps> = ({
  url,
  children,
  onPress,
}) => {
  return (
    <a
      href={url}
      onClick={onPress}
      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
    >
      {children}
    </a>
  );
};

export const FeatureItem: React.FC<FeatureItemProps> = ({
  heading,
  url,
  info,
  onPress,
}) => {
  return (
    <a
      href={url}
      onClick={onPress}
      className='block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
    >
      <h4 className='font-medium text-sm text-gray-900 dark:text-white'>{heading}</h4>
      <p className='text-xs text-gray-600 dark:text-gray-400 mt-0.5'>{info}</p>
    </a>
  );
};

const NavbarFlow: React.FC<NavbarFlowProps> = ({
  emblem,
  links = [],
  extraIcons = [],
  styleName = '',
  rightComponent,
  showConnections = true,
}) => {
  const [sequenceDone, setSequenceDone] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [selectedSubmenu, setSelectedSubmenu] = useState<string | null>(null);
  const [openedSections, setOpenedSections] = useState<Record<string, boolean>>(
    {},
  );
  const [isMounted, setIsMounted] = useState(true);
  const [isOnLightCard, setIsOnLightCard] = useState(false);

  const navMotion = useAnimation();
  const emblemMotion = useAnimation();
  const switchMotion = useAnimation();
  const svgMotion = useAnimation();

  useEffect(() => {
    const detectMobile = () => {
      setMobileView(window.innerWidth < 768);
    };

    detectMobile();
    window.addEventListener('resize', detectMobile);
    return () => window.removeEventListener('resize', detectMobile);
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateNavbarContrast = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const sensor = Array.from(
          document.querySelectorAll('[data-navbar-sensor="true"]'),
        ).find((element) => {
          const rect = element.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        });
        if (!sensor) return;

        const rect = sensor.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const elements = document.elementsFromPoint(x, y);
        const onLightCard = elements.some((element) =>
          element.closest('[data-navbar-invert="true"]'),
        );

        setIsOnLightCard((current) =>
          current === onLightCard ? current : onLightCard,
        );
      });
    };

    updateNavbarContrast();
    window.addEventListener('scroll', updateNavbarContrast, { passive: true });
    window.addEventListener('resize', updateNavbarContrast);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateNavbarContrast);
      window.removeEventListener('resize', updateNavbarContrast);
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const runSequence = async () => {
      if (mobileView) {
        await Promise.all([
          emblemMotion.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }),
          navMotion.start({
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
          }),
          switchMotion.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }),
        ]);
      } else {
        await navMotion.start({
          width: 'auto',
          padding: '10px 44px 10px 34px',
          transition: { duration: 0.8, ease: 'easeOut' },
        });

        await svgMotion.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });

        await Promise.all([
          emblemMotion.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }),
          switchMotion.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          }),
        ]);
      }

      setSequenceDone(true);
    };

    runSequence();
  }, [navMotion, emblemMotion, switchMotion, svgMotion, mobileView, isMounted]);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const toggleSection = (text: string) => {
    setOpenedSections((prev) => ({
      ...prev,
      [text]: !prev[text],
    }));
  };

  const hideMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  const navLinkClass = isOnLightCard
    ? 'text-black/85 hover:text-black'
    : 'text-white/90 hover:text-white';

  const renderSubmenuItems = (submenu: React.ReactNode) => {
    if (!React.isValidElement(submenu)) return null;

    const submenuProps = submenu.props as { children?: React.ReactNode };
    if (!submenuProps.children) return null;

    return React.Children.map(submenuProps.children, (child, childIdx) => (
      <div key={childIdx} onClick={hideMobileMenu}>
        {child}
      </div>
    ));
  };

  return (
    <div className={`sticky top-0 z-50 w-full ${styleName}`}>
      <div className='hidden md:block'>
        <div className='relative w-full max-w-5xl mx-auto h-32 flex items-center px-4 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={emblemMotion}
            className='bg-white/10 dark:bg-white/7 backdrop-blur-xl border-2 border-[#f3de6c]/30 font-neue-montreal text-gray-800 dark:text-gray-200 px-2 lg:px-3 py-1 rounded-full text-base lg:text-lg z-10 shrink-0'
          >
            {emblem}
          </motion.div>

          <motion.nav
            data-navbar-sensor="true"
            initial={{
              width: '120px',
              padding: '8px 20px',
            }}
            animate={navMotion}
            className='absolute left-1/2 -translate-x-1/2 bg-white/10 dark:bg-white/7 backdrop-blur-xl border-2 border-[#f3de6c]/30 font-neue-montreal rounded-full flex items-center justify-center gap-8 lg:gap-14 z-10 shrink-0'
            onMouseLeave={() => setSelectedSubmenu(null)}
          >
            {links.map((element) => (
              <div key={element.text}>
                {element.submenu ? (
                  <ListItem
                    setSelected={setSelectedSubmenu}
                    selected={selectedSubmenu}
                    element={element.text}
                  >
                    {element.submenu}
                  </ListItem>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: sequenceDone ? 1 : 0 }}
                  >
                    <a
                      href={element.url || '#'}
                      className={`${navLinkClass} text-[1rem] lg:text-[1.1rem] whitespace-nowrap transition-colors py-1 ml-2 lg:ml-4`}
                    >
                      {element.text}
                    </a>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.nav>

          {(extraIcons.length > 0 || rightComponent) && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={switchMotion}
              className='bg-white/10 dark:bg-white/7 backdrop-blur-xl border-2 border-[#f3de6c]/30 font-neue-montreal rounded-full p-2 lg:p-3 z-10 shrink-0 flex items-center gap-2 lg:gap-3'
            >
              {extraIcons.map((icon, idx) => (
                <div key={idx} className='flex items-center justify-center'>
                  {icon}
                </div>
              ))}

              {rightComponent && (
                <div className='flex items-center justify-center'>
                  {rightComponent}
                </div>
              )}
            </motion.div>
          )}

          {showConnections && (
          <motion.svg
            initial={{ opacity: 0 }}
            animate={svgMotion}
            className='absolute inset-0 w-full h-full z-0 pointer-events-none'
            viewBox='0 0 1400 96'
            preserveAspectRatio='none'
          >
            <defs>
              <filter id='connectionBlur'>
                <feGaussianBlur in='SourceGraphic' stdDeviation='3' />
              </filter>
              <linearGradient
                id='blueGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#3b82f6' stopOpacity='0' />
                <stop offset='50%' stopColor='#3b82f6' stopOpacity='1' />
                <stop offset='100%' stopColor='#3b82f6' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='cyanGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#06b6d4' stopOpacity='0' />
                <stop offset='50%' stopColor='#06b6d4' stopOpacity='1' />
                <stop offset='100%' stopColor='#06b6d4' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='purpleGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#8b5cf6' stopOpacity='0' />
                <stop offset='50%' stopColor='#8b5cf6' stopOpacity='1' />
                <stop offset='100%' stopColor='#8b5cf6' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='orangeGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#f59e0b' stopOpacity='0' />
                <stop offset='50%' stopColor='#f59e0b' stopOpacity='1' />
                <stop offset='100%' stopColor='#f59e0b' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='redGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#ef4444' stopOpacity='0' />
                <stop offset='50%' stopColor='#ef4444' stopOpacity='1' />
                <stop offset='100%' stopColor='#ef4444' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='greenGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='#10b981' stopOpacity='0' />
                <stop offset='50%' stopColor='#10b981' stopOpacity='1' />
                <stop offset='100%' stopColor='#10b981' stopOpacity='0' />
              </linearGradient>
            </defs>

            <motion.path
              d='M 700 48 Q 500 30, 300 40 Q 200 35, 120 48'
              stroke='url(#blueGradient)'
              strokeWidth='3'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, ease: 'easeOut', delay: 1.5 }}
            />
            <motion.path
              d='M 700 48 Q 500 30, 300 40 Q 200 35, 120 48'
              stroke='url(#blueGradient)'
              strokeWidth='3'
              fill='none'
              transform='scale(-1,1) translate(-1400,0)'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, ease: 'easeOut', delay: 1.5 }}
            />
            <motion.path
              d='M 700 44 Q 520 60, 320 50 Q 220 55, 130 44'
              stroke='url(#cyanGradient)'
              strokeWidth='2.5'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 2.2, ease: 'easeOut', delay: 1.7 }}
            />
            <motion.path
              d='M 700 44 Q 520 60, 320 50 Q 220 55, 130 44'
              stroke='url(#cyanGradient)'
              strokeWidth='2.5'
              fill='none'
              transform='scale(-1,1) translate(-1400,0)'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 2.2, ease: 'easeOut', delay: 1.7 }}
            />
            <motion.path
              d='M 700 52 Q 480 25, 280 45 Q 180 30, 110 52'
              stroke='url(#purpleGradient)'
              strokeWidth='2.5'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.8, ease: 'easeOut', delay: 1.9 }}
            />
            <motion.path
              d='M 700 52 Q 480 25, 280 45 Q 180 30, 110 52'
              stroke='url(#purpleGradient)'
              strokeWidth='2.5'
              fill='none'
              transform='scale(-1,1) translate(-1400,0)'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.8, ease: 'easeOut', delay: 1.9 }}
            />
            <motion.path
              d='M 700 48 Q 900 35, 1100 45 Q 1200 40, 1280 48'
              stroke='url(#orangeGradient)'
              strokeWidth='3'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, ease: 'easeOut', delay: 2.1 }}
            />
            <motion.path
              d='M 700 48 Q 900 35, 1100 45 Q 1200 40, 1280 48'
              stroke='url(#orangeGradient)'
              strokeWidth='3'
              fill='none'
              transform='scale(-1,1) translate(-1400,0)'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, ease: 'easeOut', delay: 2.1 }}
            />
            <motion.path
              d='M 700 44 Q 880 65, 1080 50 Q 1180 60, 1270 44'
              stroke='url(#redGradient)'
              strokeWidth='2.5'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 2.2, ease: 'easeOut', delay: 2.3 }}
            />
            <motion.path
              d='M 700 44 Q 880 65, 1080 50 Q 1180 60, 1270 44'
              stroke='url(#redGradient)'
              strokeWidth='2.5'
              fill='none'
              transform='scale(-1,1) translate(-1400,0)'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 2.2, ease: 'easeOut', delay: 2.3 }}
            />
            <motion.path
              d='M 700 52 Q 920 25, 1120 40 Q 1220 30, 1290 52'
              stroke='url(#greenGradient)'
              strokeWidth='2.5'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.8, ease: 'easeOut', delay: 2.5 }}
            />
            <motion.path
              d='M 700 52 Q 920 25, 1120 40 Q 1220 30, 1290 52'
              stroke='url(#greenGradient)'
              strokeWidth='2.5'
              fill='none'
              transform='scale(-1,1) translate(-1400,0)'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.8, ease: 'easeOut', delay: 2.5 }}
            />

            <g filter='url(#connectionBlur)' opacity='0.3'>
              <path
                d='M 700 48 Q 500 30, 300 40 Q 200 35, 120 48'
                stroke='#3b82f6'
                strokeWidth='4'
                fill='none'
              />
              <path
                d='M 700 44 Q 520 60, 320 50 Q 220 55, 130 44'
                stroke='#06b6d4'
                strokeWidth='4'
                fill='none'
              />
              <path
                d='M 700 52 Q 480 25, 280 45 Q 180 30, 110 52'
                stroke='#8b5cf6'
                strokeWidth='4'
                fill='none'
              />
              <path
                d='M 700 48 Q 900 35, 1100 45 Q 1200 40, 1280 48'
                stroke='#f59e0b'
                strokeWidth='4'
                fill='none'
              />
              <path
                d='M 700 44 Q 880 65, 1080 50 Q 1180 60, 1270 44'
                stroke='#ef4444'
                strokeWidth='4'
                fill='none'
              />
              <path
                d='M 700 52 Q 920 25, 1120 40 Q 1220 30, 1290 52'
                stroke='#10b981'
                strokeWidth='4'
                fill='none'
              />
            </g>
          </motion.svg>
          )}
        </div>
      </div>

      <div className='block md:hidden'>
        <div data-navbar-sensor="true" className='top-0 z-50 w-full border-b border-[#f3de6c]/20 bg-[rgba(6,10,22,0.85)] backdrop-blur-xl supports-backdrop-filter:bg-[rgba(6,10,22,0.85)] relative'>
          <div className='flex h-14 max-w-(--breakpoint-2xl) items-center px-4'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={emblemMotion}
              className='mr-3 shrink-0'
            >
              <div className='font-neue-montreal text-white px-3 py-1.5 rounded-full text-sm'>
                {emblem}
              </div>
            </motion.div>

            <div className='flex flex-1 items-center justify-end space-x-2'>
              {(extraIcons.length > 0 || rightComponent) && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={switchMotion}
                  className='flex items-center space-x-2'
                >
                  {extraIcons.map((icon, idx) => (
                    <div key={idx} className='flex items-center justify-center'>
                      {icon}
                    </div>
                  ))}

                  {rightComponent && (
                    <div className='flex items-center justify-center'>
                      {rightComponent}
                    </div>
                  )}
                </motion.div>
              )}

              <button
                onClick={toggleMobileMenu}
                className='flex items-center justify-center w-10 h-10 text-white/90 hover:text-white transition-colors rounded-lg hover:bg-white/10'
              >
                {mobileMenuVisible ? (
                  <Close className='h-6 w-6' />
                ) : (
                  <List className='h-6 w-6' />
                )}
                <span className='sr-only'>Toggle menu</span>
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{
              opacity: mobileMenuVisible ? 1 : 0,
              maxHeight: mobileMenuVisible ? '80vh' : 0,
            }}
            transition={{ duration: 0.3 }}
            className='absolute right-[16px] max-w-[280px] top-full z-40 overflow-y-auto border-b border-[#f3de6c]/20 bg-[rgba(6,10,22,0.95)] backdrop-blur-xl rounded-b-xl'
          >
            <div className='py-3 px-4'>
              <nav className='flex flex-col space-y-1 font-neue-montreal'>
                {links.map((element, idx) => (
                  <div key={element.text}>
                    {element.submenu ? (
                      <>
                        <button
                          className='flex items-center justify-between w-full text-white/80 hover:text-white text-sm py-2.5 px-3 rounded-lg hover:bg-white/10 transition-colors'
                          onClick={() => toggleSection(element.text)}
                        >
                          <span>{element.text}</span>
                          <span>
                            {openedSections[element.text] ? (
                              <ArrowUp className='h-4 w-4' />
                            ) : (
                              <ArrowDown className='h-4 w-4' />
                            )}
                          </span>
                        </button>

                        {openedSections[element.text] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.2 }}
                            className='pl-4 space-y-1 overflow-hidden'
                          >
                            {renderSubmenuItems(element.submenu)}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <a
                        href={element.url || '#'}
                        onClick={hideMobileMenu}
                        className='text-white/80 hover:text-white text-sm py-2.5 px-3 rounded-lg hover:bg-white/10 transition-colors block'
                      >
                        {element.text}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavbarFlow;
