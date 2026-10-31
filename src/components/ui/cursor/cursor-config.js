/**
 * Production-Grade Cursor Design System Tokens
 * Configurable, accessible, and scalable across future dashboard views and themes.
 */

export const CURSOR_THEMES = {
  primary: {
    fill: '#2563EB',
    stroke: '#93C5FD',
    text: '#FFFFFF',
    glow: 'rgba(37, 99, 235, 0.35)',
  },
  sky: {
    fill: '#0284C7',
    stroke: '#BAE6FD',
    text: '#FFFFFF',
    glow: 'rgba(2, 132, 199, 0.35)',
  },
  indigo: {
    fill: '#4F46E5',
    stroke: '#C7D2FE',
    text: '#FFFFFF',
    glow: 'rgba(79, 70, 229, 0.35)',
  },
  emerald: {
    fill: '#059669',
    stroke: '#A7F3D0',
    text: '#FFFFFF',
    glow: 'rgba(5, 150, 105, 0.35)',
  },
  amber: {
    fill: '#D97706',
    stroke: '#FDE68A',
    text: '#FFFFFF',
    glow: 'rgba(217, 119, 6, 0.35)',
  },
  rose: {
    fill: '#E11D48',
    stroke: '#FECDD3',
    text: '#FFFFFF',
    glow: 'rgba(225, 29, 72, 0.35)',
  },
};

export const SPRING_PRESETS = {
  arrow: { stiffness: 900, damping: 60 },
  trail: { stiffness: 220, damping: 24, mass: 0.6 },
  pop: { type: 'spring', stiffness: 400, damping: 30 },
};

export const CURSOR_SIZES = {
  sm: {
    cursorSize: 26,
    fontSize: '13px',
    padding: '6px 14px',
    radius: 'var(--radius-pill, 9999px)',
    offset: { x: 16, y: 18 },
  },
  default: {
    cursorSize: 34,
    fontSize: '15px',
    padding: '7px 18px',
    radius: 'var(--radius-pill, 9999px)',
    offset: { x: 20, y: 24 },
  },
  lg: {
    cursorSize: 42,
    fontSize: '17px',
    padding: '10px 24px',
    radius: 'var(--radius-pill, 9999px)',
    offset: { x: 26, y: 30 },
  },
};
