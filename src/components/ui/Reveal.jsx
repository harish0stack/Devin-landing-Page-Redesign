import React, { useMemo } from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];

const isPhone = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

/**
 * Choreographed Staggered Blur-Fade-In Reveal Component
 *
 * Implements a calm, premium entrance animation where elements transition
 * from opacity 0 + blur + downward offset into sharp focus in place.
 *
 * Key Performance Features:
 * - LazyMotion + m for minimal bundle weight and fast startup.
 * - Animates only opacity, transform (y), and filter (blur) - no layout reflow.
 * - transitionEnd: { filter: 'none' } releases compositor blur layer on completion.
 * - Caps blur at 4px and y at 8px on mobile devices (e.g. low-end Android / 32-bit CPUs).
 * - Respects prefers-reduced-motion with a swift 200ms opacity-only fade.
 * - Triggered once-only per section (viewport.once: true) with -80px margin.
 */
export function Reveal({
  as = 'div',
  root = false,
  inView = false,
  y = 12,
  blur = 8,
  duration = 0.6,
  stagger = 0,
  delay = 0,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const reduce = useReducedMotion();

  const variants = useMemo(() => {
    const b = reduce ? 0 : isPhone() ? Math.min(blur, 4) : blur;
    const dy = reduce ? 0 : isPhone() ? Math.min(y, 8) : y;

    return {
      hidden: {
        opacity: 0,
        y: dy,
        filter: b > 0 ? `blur(${b}px)` : 'none',
      },
      show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transitionEnd: {
          filter: 'none', // Release blur layer when settled to conserve GPU VRAM
        },
        transition: {
          duration: reduce ? 0.2 : duration,
          ease: EASE,
          delay,
          delayChildren: delay,
          staggerChildren: reduce ? 0 : stagger,
        },
      },
    };
  }, [reduce, blur, y, duration, delay, stagger]);

  const Tag = m[as] || m.div;

  const trigger = root
    ? inView
      ? {
          initial: 'hidden',
          whileInView: 'show',
          viewport: { once: true, margin: '-80px' },
        }
      : {
          initial: 'hidden',
          animate: 'show',
        }
    : {};

  const node = (
    <Tag
      variants={variants}
      className={className}
      style={style}
      {...trigger}
      {...rest}
    >
      {children}
    </Tag>
  );

  return root ? <LazyMotion features={domAnimation}>{node}</LazyMotion> : node;
}

export default Reveal;
