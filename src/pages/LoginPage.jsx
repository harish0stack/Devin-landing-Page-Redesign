import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from '../components/common/ThemeToggle';
import { LOGIN_SLIDES as SLIDES } from '../data/slides';

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function LoginPage({ onBack }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 900;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatic timer with correct downward loader animation synchronization (paused on mobile to save CPU/battery)
  useEffect(() => {
    if (isPaused || isMobile) return;

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [currentSlide, isPaused, isMobile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const active = SLIDES[currentSlide];

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'var(--login-page-bg)',
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      color: 'var(--login-text-primary)',
      transition: 'background-color 0.2s ease, color 0.2s ease',
    }}>
      {/* Top Floating Controls */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '24px',
        right: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 40,
        pointerEvents: 'none',
      }}>
        <button
          onClick={onBack}
          style={{
            pointerEvents: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--login-glass-bg)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid var(--login-glass-border)',
            color: 'var(--login-glass-text)',
            padding: '7px 16px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '13px',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Devin</span>
        </button>

        {/* Top Right: Theme Toggle (Sun / Monitor / Moon) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          pointerEvents: 'auto',
        }}>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Full-Page Grid Split */}
      <div className="login-fullpage-grid" style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        position: 'relative',
      }}>
        {/* LEFT PANEL: Showcase Carousel taking entire height with sleek rounded inset (omitted on mobile to optimize performance and prevent layout shift) */}
        {!isMobile && (
          <div
            className="login-carousel-container"
          style={{
            padding: '12px',
            height: '100%',
            position: 'relative',
            boxSizing: 'border-box',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#121417',
            border: 'none',
            boxShadow: 'none',
          }}>
            {/* Background Images with continuous Ken Burns pan animation & smooth crossfade */}
            {SLIDES.map((slide, index) => {
              const isCurrent = index === currentSlide;
              return (
                <div
                  key={slide.id}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: isCurrent ? 1 : 0,
                    transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={isCurrent ? 'ken-burns-active' : ''}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'brightness(0.92) contrast(1.05)',
                    }}
                  />
                </div>
              );
            })}

            {/* Cinematic Gradient Overlays: Top Vignette & Deep Bottom Shadow for Legibility */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.88) 100%)',
              pointerEvents: 'none',
            }} />

            {/* Bottom Content Area: Left Text Block & Right-Most 1-Dimensional Loader */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '36px 36px 28px 36px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
              zIndex: 10,
            }}>
              {/* Left: Badge, Title & Description */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                maxWidth: '620px',
                flex: 1,
              }}>
                {/* Pro / Feature Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  alignSelf: 'flex-start',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '3px 9px',
                  borderRadius: '6px',
                  letterSpacing: '0.2px',
                }}>
                  {active.badgeIcon}
                  <span>{active.badge}</span>
                </div>

                {/* Title & Description with smooth fade transition */}
                <div key={active.id} className="slide-content-fade" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h2 style={{
                    fontSize: '32px',
                    lineHeight: '112%',
                    letterSpacing: '-0.8px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    margin: 0,
                  }}>
                    {active.title}
                  </h2>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '145%',
                    color: 'rgba(255, 255, 255, 0.72)',
                    letterSpacing: '-0.1px',
                    margin: 0,
                  }}>
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Right-most 1-Dimensional Loader */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                flexShrink: 0,
                paddingBottom: '4px',
              }}>
                {SLIDES.map((slide, index) => {
                  const isCurrent = index === currentSlide;
                  return (
                    <div
                      key={slide.id}
                      onClick={() => setCurrentSlide(index)}
                      title={`Jump to slide ${index + 1}: ${slide.title}`}
                      style={{
                        height: '6px',
                        width: isCurrent ? '68px' : '10px',
                        borderRadius: '3px',
                        backgroundColor: 'rgba(255, 255, 255, 0.28)',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        position: 'relative',
                        transition: 'width 0.35s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease',
                      }}
                    >
                      {/* White Progress Fill moving downwards/across active bar */}
                      {isCurrent && (
                        <div
                          key={`loader-${currentSlide}`}
                          className={isPaused ? 'loader-paused' : 'loader-running'}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '3px',
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

        {/* RIGHT PANEL: Centered Authentic Login / Sign Up Form */}
        <div className="login-form-container" style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 32px',
          overflowY: 'auto',
          position: 'relative',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '384px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}>
            {/* Devin Logo (WQ3-0) */}
            <svg
              aria-label="Devin logo"
              width="64"
              height="64"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: '64px',
                width: '64px',
                flexShrink: 0,
              }}
            >
              <path
                d="M18.585 20.129L18.585 20.132C19.263 19.741 20.033 19.534 20.814 19.534L20.871 19.534L20.952 19.535C21.006 19.537 21.059 19.539 21.113 19.543L21.153 19.547C21.796 19.594 22.407 19.776 22.977 20.089C23.035 20.121 23.09 20.153 23.146 20.186C23.189 20.213 23.232 20.24 23.276 20.269L23.318 20.296C23.67 20.533 23.986 20.821 24.267 21.158C24.305 21.204 24.341 21.251 24.386 21.309L24.408 21.338C24.437 21.376 24.466 21.416 24.493 21.456L24.542 21.527C24.564 21.561 24.585 21.594 24.606 21.628C24.623 21.656 24.641 21.685 24.658 21.714L24.689 21.765C25.08 22.441 25.287 23.214 25.287 23.997L25.286 23.997C25.286 24.781 25.079 25.553 24.687 26.229L24.619 26.345C24.59 26.392 24.561 26.436 24.533 26.481L24.51 26.514C24.147 27.047 23.686 27.485 23.127 27.822C23.071 27.855 23.015 27.887 22.958 27.919C22.913 27.945 22.867 27.967 22.821 27.991L22.777 28.013C22.395 28.199 21.987 28.329 21.555 28.403C21.497 28.412 21.438 28.42 21.379 28.428L21.329 28.434C21.282 28.439 21.234 28.444 21.184 28.449C21.156 28.45 21.127 28.454 21.099 28.455C21.059 28.458 21.02 28.46 20.981 28.46C20.947 28.46 20.914 28.462 20.88 28.463L20.82 28.463L20.817 28.463C20.035 28.463 19.265 28.256 18.586 27.865L14.453 25.481L6.184 30.261L6.181 39.8L14.45 44.572L22.722 39.798L22.722 35.026C22.722 34.242 22.929 33.47 23.321 32.794L23.39 32.678C23.418 32.632 23.447 32.587 23.476 32.543L23.498 32.509C23.861 31.976 24.322 31.539 24.881 31.201C24.937 31.168 24.993 31.136 25.05 31.104C25.095 31.081 25.139 31.057 25.187 31.033L25.232 31.011C25.614 30.824 26.021 30.694 26.453 30.621C26.512 30.611 26.57 30.603 26.629 30.595L26.679 30.589C26.726 30.584 26.774 30.579 26.825 30.575L26.91 30.568C26.949 30.565 26.988 30.563 27.027 30.563C27.061 30.563 27.094 30.562 27.128 30.56L27.188 30.56L27.191 30.56C27.973 30.56 28.744 30.767 29.422 31.159L33.556 33.542L41.829 28.769L41.825 19.227L33.558 14.454L29.423 16.843L29.42 16.837C28.74 17.228 27.971 17.43 27.185 17.435L27.132 17.435L27.05 17.434C26.995 17.432 26.943 17.43 26.889 17.426L26.849 17.422C26.206 17.375 25.595 17.193 25.024 16.88C24.967 16.848 24.912 16.816 24.856 16.783C24.811 16.756 24.768 16.727 24.725 16.7L24.684 16.673C24.332 16.436 24.015 16.148 23.735 15.811C23.697 15.764 23.66 15.718 23.616 15.659L23.593 15.631C23.565 15.593 23.536 15.553 23.509 15.513L23.459 15.441C23.437 15.408 23.417 15.375 23.396 15.341C23.378 15.313 23.359 15.284 23.342 15.254L23.313 15.204C22.921 14.528 22.715 13.755 22.715 12.972L22.713 12.972L22.713 8.202L14.484 3.451L14.444 3.429L6.175 8.208L6.171 17.747L14.441 22.519L18.577 20.132L18.585 20.129Z"
                fill="var(--login-logo-fill)"
              />
            </svg>

            {/* Title & Subtitle (WQ5-0) */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h1 style={{
                fontSize: '25px',
                lineHeight: '26px',
                letterSpacing: '-0.43px',
                color: 'var(--login-text-primary)',
                fontWeight: 400,
                margin: 0,
              }}>
                {isSignUp ? 'Create your account' : 'Welcome back'}
              </h1>
              <p style={{
                fontSize: '14px',
                lineHeight: '18px',
                letterSpacing: '-0.065px',
                color: 'var(--login-text-secondary)',
                margin: 0,
              }}>
                {isSignUp ? 'Get started with autonomous engineering' : 'Log in to your account'}
              </p>
            </div>

            {/* Social Login Buttons (WQ8-0) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
              {/* GitHub */}
              <button
                className="oauth-btn"
                onClick={() => alert('Devin OAuth: Continue with GitHub')}
                style={{
                  height: '42px',
                  backgroundColor: 'var(--login-btn-bg)',
                  border: '1px solid var(--login-btn-border)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  paddingInline: '14px',
                  cursor: 'pointer',
                  color: 'var(--login-btn-color)',
                  fontSize: '14px',
                  letterSpacing: '-0.065px',
                  transition: 'background-color 0.15s ease, border-color 0.15s ease',
                }}
              >
                <svg
                  viewBox="0 0 39 39"
                  width="22"
                  height="22"
                  fill="currentColor"
                  style={{ position: 'absolute', left: '14px' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.517 2.438C10.07 2.438 2.439 10.258 2.439 19.934 2.439 27.665 7.329 34.213 14.115 36.53 14.966 36.705 15.271 36.154 15.271 35.691 15.271 35.283 15.244 33.896 15.244 32.445 10.496 33.488 9.508 30.361 9.508 30.361 8.741 28.333 7.613 27.812 7.613 27.812 6.057 26.739 7.723 26.739 7.723 26.739 9.447 26.855 10.353 28.535 10.353 28.535 11.881 31.2 14.343 30.447 15.332 29.981 15.471 28.854 15.921 28.073 16.405 27.638 12.614 27.232 8.629 25.725 8.629 19.006 8.629 17.093 9.308 15.529 10.381 14.313 10.214 13.88 9.619 12.084 10.552 9.678 10.552 9.678 11.993 9.215 15.243 11.473 16.637 11.094 18.071 10.896 19.517 10.895 20.956 10.895 22.428 11.099 23.785 11.473 27.036 9.215 28.475 9.678 28.475 9.678 29.409 12.084 28.815 13.88 28.647 14.313 29.748 15.529 30.398 17.093 30.398 19.006 30.398 25.725 26.413 27.202 22.595 27.638 23.218 28.186 23.756 29.23 23.756 30.882 23.756 33.228 23.729 35.11 23.729 35.691 23.729 36.154 24.041 36.705 24.885 36.53 31.671 34.212 36.561 27.665 36.561 19.934 36.589 10.258 28.93 2.438 19.517 2.438Z"
                  />
                </svg>
                <span>Continue with GitHub</span>
              </button>

              {/* Google */}
              <button
                className="oauth-btn"
                onClick={() => alert('Devin OAuth: Continue with Google')}
                style={{
                  height: '42px',
                  backgroundColor: 'var(--login-btn-bg)',
                  border: '1px solid var(--login-btn-border)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  paddingInline: '14px',
                  cursor: 'pointer',
                  color: 'var(--login-btn-color)',
                  fontSize: '14px',
                  letterSpacing: '-0.065px',
                  transition: 'background-color 0.15s ease, border-color 0.15s ease',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  style={{ position: 'absolute', left: '14px' }}
                >
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.4l3.7 2.9C6.5 7.4 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.7c-.2-.7-.4-1.5-.4-2.7s.2-2 .4-2.7L1.9 6.4C.7 8.8 0 10.8 0 12s.7 3.2 1.9 5.6l3.7-2.9z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.3 7.5 23 12 23z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* ChatGPT */}
              <button
                className="oauth-btn"
                onClick={() => alert('Devin OAuth: Continue with ChatGPT')}
                style={{
                  height: '42px',
                  backgroundColor: 'var(--login-btn-bg)',
                  border: '1px solid var(--login-btn-border)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  paddingInline: '14px',
                  cursor: 'pointer',
                  color: 'var(--login-btn-color)',
                  fontSize: '14px',
                  letterSpacing: '-0.065px',
                  transition: 'background-color 0.15s ease, border-color 0.15s ease',
                }}
              >
                <svg
                  viewBox="0 0 39 39"
                  width="20"
                  height="20"
                  fill="currentColor"
                  style={{ position: 'absolute', left: '14px' }}
                >
                  <path d="M33.251 16.626C33.52 15.823 33.659 14.981 33.659 14.133 33.659 12.732 33.282 11.354 32.563 10.145 31.12 7.667 28.444 6.138 25.549 6.138 24.978 6.138 24.409 6.197 23.85 6.315 23.1 5.482 22.18 4.814 21.147 4.355 20.118 3.899 19 3.662 17.868 3.662H17.818L17.799 3.662C14.292 3.662 11.18 5.896 10.103 9.188 8.987 9.414 7.932 9.872 7.009 10.532 6.087 11.192 5.319 12.04 4.755 13.017 4.039 14.234 3.663 15.615 3.661 17.022 3.661 19 4.405 20.908 5.749 22.375 5.478 23.178 5.339 24.02 5.339 24.868 5.339 26.269 5.718 27.645 6.437 28.856 7.289 30.323 8.592 31.483 10.16 32.172 11.726 32.86 13.473 33.04 15.149 32.686 15.898 33.519 16.82 34.187 17.851 34.645 18.882 35.102 20 35.339 21.13 35.339H21.181 21.201C24.711 35.339 27.822 33.105 28.898 29.809 30.015 29.584 31.07 29.125 31.992 28.466 32.914 27.806 33.682 26.958 34.247 25.981 34.962 24.765 35.339 23.384 35.339 21.979 35.337 20.001 34.595 18.093 33.251 16.627L33.251 16.626ZM21.184 33.267H21.175C19.769 33.267 18.411 32.782 17.333 31.894 17.396 31.86 17.458 31.824 17.522 31.787L23.914 28.145C24.074 28.054 24.206 27.926 24.299 27.768 24.391 27.612 24.44 27.434 24.44 27.253V18.355L27.141 19.895C27.155 19.902 27.168 19.912 27.176 19.925 27.187 19.938 27.191 19.952 27.194 19.968V27.331C27.19 30.606 24.501 33.261 21.184 33.267ZM8.257 27.82C7.728 26.92 7.451 25.898 7.451 24.856 7.451 24.517 7.48 24.177 7.538 23.842 7.587 23.872 7.67 23.92 7.728 23.955L14.121 27.598C14.28 27.69 14.462 27.738 14.646 27.738 14.831 27.738 15.011 27.689 15.17 27.598L22.976 23.152V26.23L22.976 26.236C22.976 26.251 22.973 26.265 22.966 26.278 22.96 26.291 22.95 26.303 22.937 26.312L16.476 29.993C15.56 30.511 14.525 30.786 13.47 30.786 12.413 30.786 11.377 30.511 10.461 29.991 9.547 29.471 8.786 28.722 8.257 27.82V27.82ZM6.575 14.052C7.277 12.848 8.387 11.926 9.706 11.449 9.706 11.504 9.704 11.6 9.704 11.666V18.953L9.703 18.958C9.704 19.14 9.752 19.317 9.845 19.473 9.937 19.63 10.068 19.759 10.227 19.85L18.033 24.294 15.331 25.835C15.317 25.843 15.303 25.848 15.286 25.849 15.27 25.851 15.254 25.848 15.239 25.843L8.777 22.157C7.863 21.636 7.104 20.885 6.578 19.983 6.05 19.081 5.774 18.057 5.772 17.016 5.774 15.976 6.05 14.954 6.576 14.052L6.575 14.052ZM28.774 19.148L20.968 14.702 23.671 13.163C23.684 13.155 23.701 13.15 23.715 13.148 23.732 13.147 23.747 13.15 23.762 13.155L30.224 16.837C31.14 17.359 31.899 18.108 32.427 19.01 32.953 19.913 33.233 20.935 33.233 21.979 33.233 24.465 31.66 26.691 29.294 27.549V20.045C29.296 20.043 29.296 20.04 29.296 20.037 29.296 19.856 29.247 19.679 29.155 19.523 29.063 19.367 28.932 19.239 28.774 19.148ZM31.463 15.155C31.4 15.116 31.336 15.08 31.273 15.043L24.88 11.4C24.721 11.309 24.541 11.26 24.356 11.26 24.172 11.26 23.99 11.309 23.831 11.4L16.025 15.846V12.768L16.025 12.762C16.025 12.732 16.04 12.703 16.065 12.685L22.527 9.008C23.441 8.488 24.477 8.213 25.532 8.213 28.855 8.213 31.549 10.872 31.549 14.151 31.549 14.487 31.52 14.824 31.463 15.155V15.155ZM14.557 20.643L11.854 19.102C11.841 19.096 11.828 19.086 11.819 19.073 11.81 19.06 11.804 19.045 11.802 19.029V11.666C11.804 8.389 14.499 5.733 17.819 5.733 19.225 5.733 20.589 6.219 21.669 7.107 21.621 7.134 21.536 7.18 21.479 7.214L15.086 10.857C14.927 10.946 14.796 11.076 14.702 11.232 14.61 11.388 14.562 11.567 14.562 11.748V11.754L14.557 20.643ZM16.025 17.52L19.502 15.539 22.978 17.518V21.478L19.502 23.459 16.025 21.478V17.52Z" />
                </svg>
                <span>Continue with ChatGPT</span>
              </button>
            </div>

            {/* Divider (WQM-0) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              marginBlock: '2px',
            }}>
              <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border-subtle)' }} />
              <span style={{
                fontSize: '11px',
                color: 'var(--login-text-muted)',
                letterSpacing: '0.1px',
                fontWeight: 500,
              }}>
                OR
              </span>
              <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border-subtle)' }} />
            </div>

            {/* Email form (WQQ-0) */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  height: '38px',
                  backgroundColor: 'var(--login-input-bg)',
                  border: '1px solid var(--login-input-border)',
                  borderRadius: '6px',
                  paddingInline: '12px',
                  color: 'var(--login-input-color)',
                  fontSize: '14px',
                  letterSpacing: '-0.065px',
                  outline: 'none',
                  transition: 'border-color 0.15s ease, background-color 0.15s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-accent-blue)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--login-input-border)';
                }}
              />

              <button
                type="submit"
                style={{
                  height: '36px',
                  backgroundColor: 'var(--login-submit-bg)',
                  color: 'var(--login-submit-color)',
                  borderRadius: '6px',
                  border: '1px solid var(--color-border-default)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.15s ease, background-color 0.15s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {submitted ? 'Checking...' : isSignUp ? 'Sign up' : 'Log in'}
              </button>
            </form>

            {/* Toggle Sign Up / Login (WQW-0) */}
            <div style={{
              fontSize: '13px',
              color: 'var(--login-text-secondary)',
              textAlign: 'center',
              cursor: 'pointer',
              marginTop: '4px',
            }}>
              <span>{isSignUp ? 'Already have an account? ' : "Don't have an account? "}</span>
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setSubmitted(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: 'var(--login-text-primary)',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {isSignUp ? 'Log in' : 'Sign up'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Continuous Ken Burns zoom & pan effect */
        .ken-burns-active {
          animation: kenBurnsPan 8s ease-out infinite alternate;
        }

        @keyframes kenBurnsPan {
          0% {
            transform: scale(1) translate(0%, 0%);
          }
          100% {
            transform: scale(1.08) translate(-1.5%, -1%);
          }
        }

        /* Slide text smooth entrance */
        .slide-content-fade {
          animation: slideContentIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideContentIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Downwards Loader Animation Fill matching Image 2 */
        .loader-running {
          animation: loaderFill ${SLIDE_DURATION}ms linear forwards;
        }

        .loader-paused {
          animation: loaderFill ${SLIDE_DURATION}ms linear forwards;
          animation-play-state: paused;
        }

        @keyframes loaderFill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .oauth-btn:hover {
          background-color: var(--login-btn-hover-bg) !important;
          border-color: var(--login-btn-border) !important;
        }

        @media (max-width: 900px) {
          .login-fullpage-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: 1fr !important;
            height: 100vh !important;
            overflow-y: auto !important;
          }
          .login-carousel-container {
            display: none !important;
          }
          .login-form-container {
            padding: 80px 24px 40px 24px !important;
            min-height: 100vh !important;
            height: auto !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
}
