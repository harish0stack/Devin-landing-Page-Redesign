import React, { useState } from 'react';

const SHIPPED_ITEMS = [
  {
    date: "10.15",
    title: "Introducing Devin Oncall",
    category: "Product",
    link: "#"
  },
  {
    date: "10.13",
    title: "Devin in Pylon: Driving faster Median Time To Fix",
    category: "Product",
    link: "#"
  },
  {
    date: "10.13",
    title: "Gemini 4 Argon is now available in Devin",
    category: "Product",
    link: "#"
  },
  {
    date: "10.07",
    title: "Claude Haiku 5.5 is now available in Devin",
    category: "Product",
    link: "#"
  },
  {
    date: "10.05",
    title: "Memory and dreaming: how Devin learns from working with you",
    category: "Product",
    link: "#"
  },
  {
    date: "09.29",
    title: "GPT-6.1 Sol is now available in Devin",
    category: "Product",
    link: "#"
  },
  {
    date: "09.29",
    title: "Sign in with ChatGPT",
    category: "Product",
    link: "#"
  }
];

export default function RecentlyShipped() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section style={{
      borderBottom: '1px solid var(--color-border-subtle)',
      backgroundColor: 'var(--color-bg-page)',
      paddingBlock: '60px',
      transition: 'background-color 0.2s ease, border-color 0.2s ease',
    }}>
      <div className="container-constrained">
        <div className="inner-border-column" style={{ paddingInline: '20px' }}>
          <div className="shipped-layout" style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '40px',
          }}>
            {/* Left Header & Thumbnail */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <h2 style={{
                  fontSize: '40px',
                  lineHeight: '104%',
                  letterSpacing: '-1.2px',
                  color: 'var(--color-text-primary)',
                  fontWeight: 400,
                  marginBottom: '4px',
                }}>
                  Recently
                </h2>
                <h2 style={{
                  fontSize: '40px',
                  lineHeight: '104%',
                  letterSpacing: '-1.2px',
                  color: 'var(--color-text-primary)',
                  fontWeight: 400,
                }}>
                  shipped
                </h2>
              </div>

              <div style={{ marginTop: '40px' }}>
                <div style={{
                  fontSize: '14px',
                  color: 'var(--color-text-muted)',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-sans)',
                }}>
                  [ 06 ]
                </div>
                <div style={{
                  width: '210px',
                  height: '110px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-card-bg)',
                  border: '1px solid var(--color-card-border)',
                  boxShadow: 'var(--shadow-card)',
                }}>
                  <img
                    src="/assets/16JFA5KRMF82TVWASCE6D2FP3D.webp"
                    alt="Recently shipped badge"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Right Updates List */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {SHIPPED_ITEMS.map((item, idx) => {
                const isHovered = hoveredIdx === idx;
                return (
                  <a
                    key={item.title}
                    href={item.link}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '75px 1fr 106px max-content',
                      alignItems: 'center',
                      columnGap: '24px',
                      paddingBlock: '16px',
                      paddingInline: '8px',
                      borderRadius: '8px',
                      borderTop: idx > 0 ? '1px solid var(--color-border-subtle)' : 'none',
                      backgroundColor: isHovered ? 'var(--color-badge-bg)' : 'transparent',
                      transition: 'background-color 0.15s ease',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    {/* Date */}
                    <div style={{
                      fontSize: '20px',
                      lineHeight: '120%',
                      letterSpacing: '-0.2px',
                      color: 'var(--color-text-muted)',
                      fontFamily: 'var(--font-sans)',
                    }}>
                      {item.date}
                    </div>

                    {/* Title */}
                    <div style={{
                      fontSize: '20px',
                      lineHeight: '120%',
                      letterSpacing: '-0.2px',
                      color: isHovered ? 'var(--color-accent-blue)' : 'var(--color-text-primary)',
                      fontWeight: 400,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.15s ease',
                    }}>
                      {item.title}
                    </div>

                    {/* Category */}
                    <div style={{
                      fontSize: '16px',
                      color: 'var(--color-text-muted)',
                    }}>
                      {item.category}
                    </div>

                    {/* Read More Action */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      justifyContent: 'flex-end',
                    }}>
                      <span style={{
                        fontSize: '16px',
                        color: 'var(--color-text-primary)',
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateX(0)' : 'translateX(-6px)',
                        transition: 'opacity 0.15s ease, transform 0.15s ease',
                      }}>
                        Read more
                      </span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{
                          color: isHovered ? 'var(--color-accent-blue)' : 'var(--color-text-muted)',
                          transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                          transition: 'color 0.15s ease, transform 0.15s ease',
                        }}
                      >
                        <path d="M8.970 5.210 L 8.440 5.740 11.570 8.870 L 14.700 12.000 11.570 15.130 L 8.440 18.261 8.970 18.790 L 9.501 19.320 13.160 15.660 L 16.820 12.000 13.160 8.340 L 9.500 4.680 8.970 5.210" fillRule="evenodd" />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .shipped-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
