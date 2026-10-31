import React from 'react';
import CursorTag from '../ui/cursor/CursorTag';

const NEWS_ARTICLES = [
  {
    id: 'devin-voice',
    image: '/assets/news-devin-voice.webp',
    date: 'Oct 14, 2026',
    category: null,
    title: 'Introducing Devin Voice 3.0',
    cursorLabel: 'Voice 3.0',
    link: '#',
  },
  {
    id: 'spacex-partner',
    image: '/assets/news-spacex-partner.png',
    date: 'Oct 22, 2026',
    category: 'Company',
    title: 'Introducing the SpaceX Super Intelligence Partner Network',
    cursorLabel: 'SpaceX',
    link: '#',
  },
  {
    id: 'devin-incidents',
    image: '/assets/news-devin-incidents.webp',
    date: 'Oct 20, 2026',
    category: 'Product',
    title: 'Using Devin to detect and respond to incidents',
    cursorLabel: 'Incident Bot',
    link: '#',
  },
  {
    id: 'x-subscription',
    image: '/assets/news-x-subscription.webp',
    date: 'Oct 12, 2026',
    category: 'Product',
    title: 'Introducing The X Subscription',
    cursorLabel: 'Subscription',
    link: '#',
  },
];

export default function LatestNews() {
  return (
    <section
      style={{
        borderBottom: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-bg-page)',
        paddingBlock: '80px',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div className="container-constrained">
        <div className="inner-border-column" style={{ paddingInline: '16px' }}>
          {/* Section Header: Title & "All posts" Link */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '36px',
            }}
          >
            <h2
              style={{
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '32px',
                fontWeight: 400,
                letterSpacing: '-0.6px',
                lineHeight: '120%',
                margin: 0,
              }}
            >
              Latest news
            </h2>

            <a
              href="#news"
              className="news-all-posts-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '20px',
                transition: 'color 0.15s ease',
              }}
            >
              <span>All posts</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* 4 Cards Grid */}
          <div
            className="news-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '24px',
            }}
          >
            {NEWS_ARTICLES.map((article) => (
              <a
                key={article.id}
                href={article.link}
                className="news-article-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                }}
              >
                {/* Image Banner with CursorTag custom follower */}
                <CursorTag
                  label={article.cursorLabel}
                  className="news-card-media"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderColor: 'var(--color-card-border)',
                    borderRadius: '8px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    overflow: 'hidden',
                    aspectRatio: '1200 / 630',
                    width: '100%',
                    position: 'relative',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.35s ease',
                    }}
                  />
                </CursorTag>

                {/* Date & Category */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '14px',
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    lineHeight: '16px',
                  }}
                >
                  {article.category && (
                    <>
                      <span style={{ fontWeight: 500 }}>{article.category}</span>
                      <span style={{ color: 'var(--color-text-muted)' }}>·</span>
                    </>
                  )}
                  <span>{article.date}</span>
                </div>

                {/* Title & Arrow */}
                <div
                  style={{
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '6px',
                  }}
                >
                  <h3
                    className="news-card-title"
                    style={{
                      margin: 0,
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '16px',
                      fontWeight: 500,
                      letterSpacing: '-0.16px',
                      lineHeight: '138%',
                      flex: 1,
                      transition: 'color 0.15s ease',
                    }}
                  >
                    {article.title}
                  </h3>
                  <div
                    className="news-card-arrow"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '16px',
                      height: '16px',
                      flexShrink: 0,
                      marginTop: '3px',
                      color: 'var(--color-text-secondary)',
                      transition: 'color 0.15s ease, transform 0.15s ease',
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .news-all-posts-link:hover {
          color: var(--color-accent-blue) !important;
        }
        .news-article-card:hover .news-card-media {
          border-color: var(--color-card-border-hover);
        }
        .news-article-card:hover .news-card-media img {
          transform: scale(1.02);
        }
        .news-article-card:hover .news-card-title {
          color: var(--color-accent-blue) !important;
        }
        .news-article-card:hover .news-card-arrow {
          color: var(--color-accent-blue) !important;
          transform: translate(2px, -2px);
        }

        @media (max-width: 1024px) {
          .news-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 640px) {
          .news-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
