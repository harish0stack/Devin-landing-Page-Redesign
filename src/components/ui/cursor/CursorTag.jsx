'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CursorProvider, Cursor, CursorFollow, useCursor } from '../cursor.jsx';

/**
 * Production-Grade Custom Follow-Cursor with Spring-Lagged Name Tag
 * Implemented using atomic primitives (CursorProvider, Cursor, CursorFollow)
 * with the exact custom delta SVG path, sideOffset=15, rounded-lg pill radius,
 * and stiffness: 500, damping: 50 spring animation.
 */
export function CursorTag({
  label,
  children,
  className = '',
  style = {},
  color = '#3b82f6',
  sideOffset = 15,
  align = 'bottom-right',
  transition = { stiffness: 500, damping: 50, bounce: 0 },
  pillClassName = '',
  pillStyle = {},
}) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
      <CursorProvider>
        <Cursor>
          <svg
            className="size-6 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            style={{
              width: '26px',
              height: '26px',
              color: color,
              fill: 'currentColor',
              display: 'block',
              filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.25))',
            }}
          >
            <path
              fill="currentColor"
              d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
            />
          </svg>
        </Cursor>
        <CursorFollow
          sideOffset={sideOffset}
          align={align}
          transition={transition}
        >
          <div
            className={cn(
              'bg-blue-500 text-white px-2 py-1 rounded-lg text-sm shadow-lg',
              pillClassName,
            )}
            style={{
              backgroundColor: color,
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.2',
              letterSpacing: '-0.1px',
              whiteSpace: 'nowrap',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
              userSelect: 'none',
              pointerEvents: 'none',
              ...pillStyle,
            }}
          >
            {label}
          </div>
        </CursorFollow>
      </CursorProvider>
    </div>
  );
}

export { CursorProvider, Cursor, CursorFollow, useCursor };
export default CursorTag;
