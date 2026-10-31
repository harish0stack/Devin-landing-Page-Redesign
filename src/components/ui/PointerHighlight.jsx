'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useAnimate, useInView, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

/**
 * Production-Grade Pointer Highlight Component
 *
 * Encloses text inside a thin blue bounding box with a square anchor handle
 * at the top-left corner and circular handles at the other three corners.
 * Handles are placed prominently on the vertices extending outside the box.
 * The live cursor animates dragging the selection box from top-left and
 * finishes strictly OUTSIDE the box at the bottom-right corner.
 */
export function PointerHighlight({
  children,
  color = 'var(--color-accent-blue, #317CFF)',
  fillColor = 'rgba(49, 124, 255, 0.05)',
  handleSize = 12,
  delay = 0.6,
  duration = 1.15,
  autoPlay = true,
  replayOnHover = true,
  replayOnClick = true,
  className = '',
  style = {},
  showHandles = true,
}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();
  const isRunningRef = useRef(false);
  const isMountedRef = useRef(true);

  // Offset to place handles centered on vertices and slightly outside
  const handleOffset = -Math.round(handleSize * 0.58);

  const runAnimation = useCallback(async () => {
    if (!scope.current || isRunningRef.current) return;
    isRunningRef.current = true;

    try {
      // 1. Initial State: reset box and handles, position cursor outside top-left
      await Promise.all([
        animate('.highlight-box', { width: 0, height: 0, opacity: 0 }, { duration: 0 }),
        animate('.handle-tl', { scale: 0, opacity: 0 }, { duration: 0 }),
        animate('.handle-other', { scale: 0, opacity: 0 }, { duration: 0 }),
        animate('.highlight-cursor', { x: -28, y: -28, opacity: 0, scale: 0.8 }, { duration: 0 }),
      ]);

      // Initial delay
      if (delay > 0) {
        await new Promise((r) => setTimeout(r, delay * 1000));
      }
      if (!isMountedRef.current || !scope.current) return;

      // 2. Cursor approaches top-left corner
      await animate(
        '.highlight-cursor',
        { x: 0, y: 0, opacity: 1, scale: 1 },
        { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
      );
      if (!isMountedRef.current || !scope.current) return;

      // 3. Click down: cursor compresses + top-left square handle pops in
      await animate('.highlight-cursor', { scale: 0.86 }, { duration: 0.1, ease: 'easeIn' });
      if (!isMountedRef.current || !scope.current) return;

      animate('.highlight-box', { opacity: 1 }, { duration: 0.04 });
      await animate(
        '.handle-tl',
        { scale: [0, 1.25, 1], opacity: 1 },
        { duration: 0.18, ease: 'easeOut' }
      );
      if (!isMountedRef.current || !scope.current) return;

      // 4. Drag selection: expand box from 0% to 100%
      // Cursor is anchored at top: 100%, left: 100% of .highlight-box,
      // so it moves diagonally to the bottom-right OUTSIDE the box!
      await Promise.all([
        animate(
          '.highlight-box',
          { width: '100%', height: '100%' },
          { duration, ease: [0.16, 1, 0.3, 1] }
        ),
        animate('.highlight-cursor', { scale: 1 }, { duration: 0.2 }),
      ]);
      if (!isMountedRef.current || !scope.current) return;

      // 5. Circle handles pop into the other three corners (top-right, bottom-left, bottom-right)
      await animate(
        '.handle-other',
        { scale: [0, 1.3, 1], opacity: 1 },
        { duration: 0.24, ease: 'easeOut' }
      );
      if (!isMountedRef.current || !scope.current) return;

      // 6. Pause to let the user appreciate the crisp selected bounding box
      await new Promise((r) => setTimeout(r, 700));
      if (!isMountedRef.current || !scope.current) return;

      // 7. Cursor dissolves smoothly
      await animate(
        '.highlight-cursor',
        { opacity: 0, scale: 0.75 },
        { duration: 0.35, ease: 'easeInOut' }
      );
    } catch {
      // Abort silently if interrupted
    } finally {
      isRunningRef.current = false;
    }
  }, [animate, delay, duration, scope]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!autoPlay || !isInView) return;

    if (prefersReduced) {
      animate('.highlight-box', { width: '100%', height: '100%', opacity: 1 }, { duration: 0 });
      animate('.handle-tl', { scale: 1, opacity: 1 }, { duration: 0 });
      animate('.handle-other', { scale: 1, opacity: 1 }, { duration: 0 });
      animate('.highlight-cursor', { opacity: 0 }, { duration: 0 });
    } else {
      runAnimation();
    }
  }, [autoPlay, isInView, prefersReduced, runAnimation, animate]);

  const handleMouseEnter = () => {
    if (replayOnHover && !isRunningRef.current) {
      runAnimation();
    }
  };

  const handleClick = (e) => {
    if (replayOnClick && !isRunningRef.current) {
      e.stopPropagation();
      runAnimation();
    }
  };

  return (
    <span
      ref={scope}
      className={cn('pointer-highlight-wrapper', className)}
      style={{
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'baseline',
        cursor: replayOnHover || replayOnClick ? 'pointer' : 'default',
        userSelect: 'none',
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      title={replayOnClick ? 'Click to replay highlight animation' : undefined}
    >
      {/* Content text */}
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'inline-block',
          paddingInline: '7px',
          paddingBlock: '3px',
        }}
      >
        {children}
      </span>

      {/* Frame overlay */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'visible',
        }}
      >
        {/* Expanding selection box */}
        <span
          className="highlight-box"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            opacity: 0,
            border: `1.5px solid ${color}`,
            backgroundColor: fillColor,
            boxSizing: 'border-box',
            overflow: 'visible',
            display: 'block',
          }}
        >
          {/* Top-Right Corner Handle (Circle - positioned slightly outside) */}
          {showHandles && (
            <span
              className="handle-other"
              style={{
                position: 'absolute',
                top: `${handleOffset}px`,
                right: `${handleOffset}px`,
                width: `${handleSize}px`,
                height: `${handleSize}px`,
                borderRadius: '50%',
                backgroundColor: color,
                display: 'block',
                zIndex: 6,
                transformOrigin: 'center center',
              }}
            />
          )}

          {/* Bottom-Left Corner Handle (Circle - positioned slightly outside) */}
          {showHandles && (
            <span
              className="handle-other"
              style={{
                position: 'absolute',
                bottom: `${handleOffset}px`,
                left: `${handleOffset}px`,
                width: `${handleSize}px`,
                height: `${handleSize}px`,
                borderRadius: '50%',
                backgroundColor: color,
                display: 'block',
                zIndex: 6,
                transformOrigin: 'center center',
              }}
            />
          )}

          {/* Bottom-Right Corner Handle (Circle - positioned slightly outside) */}
          {showHandles && (
            <span
              className="handle-other"
              style={{
                position: 'absolute',
                bottom: `${handleOffset}px`,
                right: `${handleOffset}px`,
                width: `${handleSize}px`,
                height: `${handleSize}px`,
                borderRadius: '50%',
                backgroundColor: color,
                display: 'block',
                zIndex: 6,
                transformOrigin: 'center center',
              }}
            />
          )}

          {/* Live Dragging Pointer Cursor - Anchored at top: 100%, left: 100% to land strictly OUTSIDE the box */}
          <span
            className="highlight-cursor"
            style={{
              position: 'absolute',
              top: '114%',
              left: '108%',
              pointerEvents: 'none',
              zIndex: 20,
              display: 'block',
            }}
          >
            <svg
              className="size-6 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              style={{
                width: '26px',
                height: '26px',
                color,
                fill: 'currentColor',
                display: 'block',
                transform: 'translate(2px, 2px)',
                filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.28))',
              }}
            >
              <path
                fill="currentColor"
                d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
              />
            </svg>
          </span>
        </span>

        {/* Top-Left Origin Handle (Square - positioned slightly outside) */}
        {showHandles && (
          <span
            className="handle-tl"
            style={{
              position: 'absolute',
              top: `${handleOffset}px`,
              left: `${handleOffset}px`,
              width: `${handleSize}px`,
              height: `${handleSize}px`,
              borderRadius: '2px',
              backgroundColor: color,
              display: 'block',
              zIndex: 7,
              transformOrigin: 'center center',
            }}
          />
        )}
      </span>
    </span>
  );
}

export default PointerHighlight;
