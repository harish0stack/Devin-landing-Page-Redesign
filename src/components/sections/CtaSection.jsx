import React from 'react';
import BigBot from '../bots/BigBot';

/**
 * CtaSection ("Stop deprioritizing / Do it all with Devin"):
 * Features headline, subtitle, action buttons, and a giant circle-shaped bot
 * rising like a glowing horizon dome at the bottom of the section,
 * with its lower hemisphere submerged behind the footer.
 * Features 3D cursor tracking and continuous smooth mood cycling.
 */
export default function CtaSection({ onOpenLogin }) {
  return (
    <section
      className="cta-section"
      style={{
        borderTop: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-bg-page)',
        paddingTop: '128px',
        paddingBottom: 0, // Big bot sits flush against the bottom edge touching the footer
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div className="container-constrained">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            maxWidth: '680px',
            margin: '0 auto',
          }}
        >
          {/* Section Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2
              className="cta-heading"
              style={{
                fontSize: '46px',
                lineHeight: '100%',
                letterSpacing: '-1.92px',
                fontWeight: 400,
                margin: 0,
              }}
            >
              <span style={{ color: 'var(--color-text-muted)' }}>Stop deprioritizing Do it</span>
              <br />
              <span style={{ color: 'var(--color-text-primary)' }}>all with Devin</span>
            </h2>
            <p
              style={{
                fontSize: '18px',
                lineHeight: '26px',
                color: 'var(--color-text-secondary)',
                margin: 0,
                fontWeight: 400,
              }}
            >
              An AI teammate you can trust to get work done
            </p>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '4px',
            }}
          >
            <button
              onClick={onOpenLogin}
              style={{
                height: '44px',
                paddingInline: '24px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                backgroundColor: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-text)',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '150%',
                cursor: 'pointer',
                transition: 'opacity 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Get started for free
            </button>
            <button
              style={{
                height: '44px',
                paddingInline: '24px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--color-border-default)',
                backgroundColor: 'transparent',
                color: 'var(--color-text-primary)',
                fontSize: '16px',
                lineHeight: '150%',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = 'var(--color-badge-bg)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'transparent')
              }
            >
              Contact sales
            </button>
          </div>
        </div>
      </div>

      {/* Big Bot Dome rising from the bottom */}
      <div
        className="big-bot-wrapper"
        style={{
          marginTop: '80px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '-1px', // Seamless touch with footer top border
        }}
      >
        <BigBot radius={1600} />

        {/* Smooth Horizon Depth Overlay from Devin reference website */}
        <div className="big-bot-horizon-overlay" aria-hidden="true" />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-section {
            padding-top: 72px !important;
          }
          .cta-heading {
            font-size: clamp(30px, 7.5vw, 42px) !important;
            letter-spacing: -1.2px !important;
            line-height: 108% !important;
          }
          .big-bot-wrapper {
            margin-top: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
