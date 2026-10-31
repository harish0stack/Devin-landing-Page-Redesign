import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export const ThemeContext = createContext({
  theme: 'system',
  resolvedTheme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
});

const getSystemTheme = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const resolveTheme = (m) => (m === 'system' ? getSystemTheme() : m);

const applyDocumentTheme = (theme) => {
  if (typeof document === 'undefined') return;
  const resolved = resolveTheme(theme);
  const el = document.documentElement;
  el.classList.toggle('dark', resolved === 'dark');
  el.style.colorScheme = resolved;
};

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'system';
    return localStorage.getItem('theme') || 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState(() => resolveTheme(theme));

  const applyTheme = useCallback((nextTheme) => {
    const nextResolved = resolveTheme(nextTheme);
    const prevResolved = resolveTheme(theme);

    localStorage.setItem('theme', nextTheme);
    setThemeState(nextTheme);
    setResolvedTheme(nextResolved);

    // If browser supports View Transitions and no reduced motion, animate smooth vertical wipe
    const supportsTransition = typeof document !== 'undefined' && 'startViewTransition' in document;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsTransition || prevResolved === nextResolved || prefersReducedMotion) {
      applyDocumentTheme(nextTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      applyDocumentTheme(nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            nextResolved === 'light' ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)',
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
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system';
    setThemeState(saved);
    const resolved = resolveTheme(saved);
    setResolvedTheme(resolved);
    applyDocumentTheme(saved);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      const current = localStorage.getItem('theme') || 'system';
      if (current === 'system') {
        const nextResolved = getSystemTheme();
        setResolvedTheme(nextResolved);
        applyDocumentTheme('system');
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
      return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const order = ['light', 'dark', 'system'];
    const nextIndex = (order.indexOf(theme) + 1) % order.length;
    applyTheme(order[nextIndex]);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme: applyTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;

