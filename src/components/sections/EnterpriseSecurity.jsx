import React from 'react';

export default function EnterpriseSecurity() {
  const BADGES = [
    "221EWD3BG78JYZM0WG14K1ZQ7N.svg",
    "4MNMXFP671DVFXR582WC04KNK7.svg",
    "03X9MT0KSPAN6EQWMHX2VXWZEM.svg"
  ];

  const col1 = [
    "Inputs and outputs are always your IP",
    "Zero data retention enforced with model providers",
    "Comprehensive audit logs"
  ];

  const col2 = [
    "Every session runs in its own VM",
    "RBAC / SSO / SCIM / OIDC",
    "Private networking available"
  ];

  return (
    <section style={{
      borderBottom: '1px solid var(--color-border-subtle)',
      backgroundColor: 'var(--color-bg-page)',
      paddingBlock: '60px 80px',
      transition: 'background-color 0.2s ease, border-color 0.2s ease',
    }}>
      <div className="container-constrained">
        <div className="inner-border-column" style={{ paddingInline: '16px' }}>
          <div className="security-layout" style={{
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            gap: '40px',
          }}>
            {/* Left Title */}
            <div>
              <h2 style={{
                fontSize: '40px',
                lineHeight: '104%',
                letterSpacing: '-1.2px',
                fontWeight: 400,
                maxWidth: '360px',
              }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Enterprise security</span>
                <br />
                <span style={{ color: 'var(--color-text-primary)' }}>with fine-grained controls</span>
              </h2>
            </div>

            {/* Right Badges & Features */}
            <div>
              {/* Badges Grid */}
              <div className="badges-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                marginBottom: '36px',
              }}>
                {BADGES.map((b, idx) => (
                  <div key={b} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBlock: '24px',
                    paddingInline: '16px',
                    borderLeft: idx > 0 ? '1px solid var(--color-border-subtle)' : 'none',
                  }}>
                    <img
                      src={`/assets/${b}`}
                      alt="Security compliance certification"
                      style={{
                        width: '84px',
                        height: '84px',
                        objectFit: 'contain',
                        opacity: 0.85,
                        filter: 'var(--color-badge-filter)',
                        transition: 'filter 0.2s ease, opacity 0.2s ease, transform 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'scale(1.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.85';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* 2 Column Checklist */}
              <div className="checklist-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                columnGap: '24px',
              }}>
                <div>
                  {col1.map((item) => (
                    <div key={item} style={{
                      paddingBlock: '16px',
                      borderBottom: '1px solid var(--color-border-subtle)',
                      fontSize: '16px',
                      lineHeight: '150%',
                      color: 'var(--color-text-secondary)',
                    }}>
                      {item}
                    </div>
                  ))}
                </div>
                <div>
                  {col2.map((item) => (
                    <div key={item} style={{
                      paddingBlock: '16px',
                      borderBottom: '1px solid var(--color-border-subtle)',
                      fontSize: '16px',
                      lineHeight: '150%',
                      color: 'var(--color-text-secondary)',
                    }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .security-layout {
            grid-template-columns: 1fr !important;
          }
          .checklist-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
