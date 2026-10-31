import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const MODES = [
  {
    m: 'light',
    label: 'Light theme',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
  },
  {
    m: 'system',
    label: 'System theme',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
  {
    m: 'dark',
    label: 'Dark theme',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
];

const mq = () => window.matchMedia('(prefers-color-scheme: dark)');
const resolve = (m) => (m === 'system' ? (mq().matches ? 'dark' : 'light') : m);

const apply = (m) => {
  const r = resolve(m);
  const el = document.documentElement;
  el.classList.toggle('dark', r === 'dark');
  el.style.colorScheme = r;
};

export default function ThemeToggle({ className = '', style = {} }) {
  const context = useContext(ThemeContext);
  const isContextAvailable = Boolean(context && context.setTheme);

  const [localMode, setLocalMode] = React.useState('system');

  React.useEffect(() => {
    if (isContextAvailable) return;
    const saved = localStorage.getItem('theme') || 'system';
    setLocalMode(saved);
    apply(saved);

    const onMediaChange = () => {
      const current = localStorage.getItem('theme') || 'system';
      if (current === 'system') apply('system');
    };

    const mediaQuery = mq();
    mediaQuery.addEventListener('change', onMediaChange);
    return () => mediaQuery.removeEventListener('change', onMediaChange);
  }, [isContextAvailable]);

  const mode = isContextAvailable ? context.theme : localMode;

  const handleSetMode = (next) => {
    if (isContextAvailable) {
      context.setTheme(next);
      return;
    }

    if (next === localMode) return;
    const to = resolve(next);
    const same = to === resolve(localMode);

    localStorage.setItem('theme', next);
    setLocalMode(next);

    if (!document.startViewTransition || same || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return apply(next);
    }

    const transition = document.startViewTransition(() => {
      apply(next);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            to === 'light' ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)',
            'inset(0)',
          ],
        },
        {
          duration: 480,
          easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  const onKeyDown = (e) => {
    const currentIndex = MODES.findIndex((x) => x.m === mode);
    let delta = 0;
    if (e.key === 'ArrowRight') delta = 1;
    else if (e.key === 'ArrowLeft') delta = -1;

    if (delta !== 0) {
      e.preventDefault();
      const nextIndex = (currentIndex + delta + MODES.length) % MODES.length;
      handleSetMode(MODES[nextIndex].m);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Theme preference"
      onKeyDown={onKeyDown}
      className={`theme-toggle-group ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '12px',
        border: '1px solid #262626',
        backgroundColor: '#0D0D0D',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {MODES.map(({ m, label, icon }, i) => {
        const isActive = mode === m;
        return (
          <button
            key={m}
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            title={label}
            tabIndex={isActive ? 0 : -1}
            onClick={() => handleSetMode(m)}
            className="theme-toggle-cell"
            style={{
              width: '36px',
              height: '32px',
              display: 'grid',
              placeItems: 'center',
              background: isActive ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
              color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.55)',
              border: 'none',
              borderLeft: i > 0 ? '1px solid #262626' : 'none',
              cursor: 'pointer',
              outline: 'none',
              padding: 0,
              transition: 'color 120ms ease, background-color 120ms ease, transform 120ms ease',
            }}
          >
            {icon}
          </button>
        );
      })}

      <style>{`
        .theme-toggle-cell:hover {
          color: rgba(255, 255, 255, 0.85) !important;
        }
        .theme-toggle-cell:active {
          transform: scale(0.94);
        }
        .theme-toggle-cell:focus-visible {
          outline: 1px solid rgba(255, 255, 255, 0.6);
          outline-offset: -2px;
        }
      `}</style>
    </div>
  );
}

