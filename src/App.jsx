import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/common/ErrorBoundary';

export default function App() {
  const [view, setView] = useState(() => {
    if (typeof window === 'undefined') return 'landing';
    return window.location.hash === '#login' || window.location.pathname === '/login'
      ? 'login'
      : 'landing';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#login' || window.location.pathname === '/login') {
        setView('login');
      } else {
        setView('landing');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openLogin = () => {
    window.location.hash = 'login';
    setView('login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeLogin = () => {
    window.location.hash = '';
    setView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <ThemeProvider>
        {view === 'login' ? (
          <LoginPage onBack={closeLogin} />
        ) : (
          <LandingPage onOpenLogin={openLogin} />
        )}
      </ThemeProvider>
    </ErrorBoundary>
  );
}
