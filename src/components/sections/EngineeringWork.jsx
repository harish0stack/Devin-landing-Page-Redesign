import React from 'react';
import CursorTag from '../ui/cursor/CursorTag';

export default function EngineeringWork() {
  return (
    <section style={{
      borderBottom: '1px solid var(--color-border-subtle)',
      backgroundColor: 'var(--color-bg-page)',
      paddingBlock: '80px 100px',
      transition: 'background-color 0.2s ease, border-color 0.2s ease',
    }}>
      <div className="container-constrained">
        <div className="inner-border-column" style={{ paddingInline: '16px' }}>
          {/* Main Section Header */}
          <h2 style={{
            fontSize: '40px',
            lineHeight: '104%',
            letterSpacing: '-1.2px',
            fontWeight: 400,
            marginBottom: '80px',
            maxWidth: '650px',
          }}>
            <span style={{ color: 'var(--color-text-muted)' }}>From problem to merged PR,</span>
            <br />
            <span style={{ color: 'var(--color-text-primary)' }}>Devin gets hard engineering work done.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
            {/* Step 01: Understand and plan */}
            <div className="step-row" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}>
              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '32px', color: 'var(--color-text-muted)', fontWeight: 400 }}>
                  01
                </div>
                <h3 style={{ fontSize: '32px', lineHeight: '120%', letterSpacing: '-0.64px', fontWeight: 400, color: 'var(--color-text-primary)' }}>
                  Understand and plan
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '140%', color: 'var(--color-text-secondary)', marginTop: '4px', maxWidth: '480px' }}>
                  Map the codebase and systems architecture accurately and efficiently. Devin updates diagrams and code maps as quickly as the codebase changes.
                </p>
                <div style={{ marginTop: '16px' }}>
                  <a href="#" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--color-accent-blue)',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}>
                    <span>Explore Wiki</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.970 5.210 L 8.440 5.740 11.570 8.870 L 14.700 12.000 11.570 15.130 L 8.440 18.261 8.970 18.790 L 9.501 19.320 13.160 15.660 L 16.820 12.000 13.160 8.340 L 9.500 4.680 8.970 5.210" fillRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Visual */}
              <CursorTag
                label="Plan Architecture"
                className="step-visual-card"
                style={{
                  borderRadius: '16px',
                  border: '1px solid var(--color-card-border)',
                  backgroundColor: 'var(--color-card-bg)',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <img
                  src="/assets/step-01-understand-and-plan.webp"
                  alt="Understand and plan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CursorTag>
            </div>

            {/* Step 02: Code and test (Alternating) */}
            <div className="step-row" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}>
              {/* Visual (Left on desktop) */}
              <CursorTag
                label="Code & Test"
                className="step-visual-alt step-visual-card"
                style={{
                  borderRadius: '16px',
                  border: '1px solid var(--color-card-border)',
                  backgroundColor: 'var(--color-card-bg)',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <img
                  src="/assets/step-02-code-and-test.webp"
                  alt="Code and test"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CursorTag>

              {/* Text (Right on desktop) */}
              <div className="step-text-alt" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '32px', color: 'var(--color-text-muted)', fontWeight: 400 }}>
                  02
                </div>
                <h3 style={{ fontSize: '32px', lineHeight: '120%', letterSpacing: '-0.64px', fontWeight: 400, color: 'var(--color-text-primary)' }}>
                  Code and test
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '140%', color: 'var(--color-text-secondary)', marginTop: '4px', maxWidth: '480px' }}>
                  Delegate to Devin Cloud, iterate in Desktop or CLI, or tag @Devin. Wherever you work, Devin gives you the best of all frontier models.
                </p>
                <div style={{ marginTop: '16px' }}>
                  <a href="#" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--color-accent-blue)',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}>
                    <span>Explore Devin Cloud</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.970 5.210 L 8.440 5.740 11.570 8.870 L 14.700 12.000 11.570 15.130 L 8.440 18.261 8.970 18.790 L 9.501 19.320 13.160 15.660 L 16.820 12.000 13.160 8.340 L 9.500 4.680 8.970 5.210" fillRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Step 03: Review */}
            <div className="step-row" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}>
              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '32px', color: 'var(--color-text-muted)', fontWeight: 400 }}>
                  03
                </div>
                <h3 style={{ fontSize: '32px', lineHeight: '120%', letterSpacing: '-0.64px', fontWeight: 400, color: 'var(--color-text-primary)' }}>
                  Review
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '140%', color: 'var(--color-text-secondary)', marginTop: '4px', maxWidth: '480px' }}>
                  Devin Review finds bugs and vulnerabilities before they reach production. Assign Devin to fix in one click.
                </p>
                <div style={{ marginTop: '16px' }}>
                  <a href="#" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--color-accent-blue)',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}>
                    <span>Explore Devin Review</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.970 5.210 L 8.440 5.740 11.570 8.870 L 14.700 12.000 11.570 15.130 L 8.440 18.261 8.970 18.790 L 9.501 19.320 13.160 15.660 L 16.820 12.000 13.160 8.340 L 9.500 4.680 8.970 5.210" fillRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Visual */}
              <CursorTag
                label="Code Review"
                className="step-visual-card"
                style={{
                  borderRadius: '16px',
                  border: '1px solid var(--color-card-border)',
                  backgroundColor: 'var(--color-card-bg)',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <img
                  src="/assets/step-03-review.webp"
                  alt="Review"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CursorTag>
            </div>

            {/* Step 04: Automate and maintain (Alternating) */}
            <div className="step-row" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}>
              {/* Visual (Left on desktop) */}
              <CursorTag
                label="Auto Swarm"
                className="step-visual-alt step-visual-card"
                style={{
                  borderRadius: '16px',
                  border: '1px solid var(--color-card-border)',
                  backgroundColor: 'var(--color-card-bg)',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <img
                  src="/assets/step-04-automate-and-maintain.webp"
                  alt="Automate and maintain"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CursorTag>

              {/* Text (Right on desktop) */}
              <div className="step-text-alt" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '32px', color: 'var(--color-text-muted)', fontWeight: 400 }}>
                  04
                </div>
                <h3 style={{ fontSize: '32px', lineHeight: '120%', letterSpacing: '-0.64px', fontWeight: 400, color: 'var(--color-text-primary)' }}>
                  Automate and maintain
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '140%', color: 'var(--color-text-secondary)', marginTop: '4px', maxWidth: '480px' }}>
                  Create scheduled workflows and trigger-based automations for repetitive work. Devin swarms can proactively find novel vulnerabilities, performance issues, and gaps in test coverage.
                </p>
                <div style={{ marginTop: '16px' }}>
                  <a href="#" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--color-accent-blue)',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}>
                    <span>Explore Security Swarm</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.970 5.210 L 8.440 5.740 11.570 8.870 L 14.700 12.000 11.570 15.130 L 8.440 18.261 8.970 18.790 L 9.501 19.320 13.160 15.660 L 16.820 12.000 13.160 8.340 L 9.500 4.680 8.970 5.210" fillRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .step-visual-card:hover {
          border-color: var(--color-card-border-hover);
        }
        @media (max-width: 900px) {
          .step-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .step-visual-alt {
            order: 2 !important;
          }
          .step-text-alt {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
