import React from 'react';
import CursorTag from '../ui/cursor/CursorTag';

/**
 * Bento Cards configuration based on Paper design:
 * - 6-column grid structure (Top row: 3 cards span 2 each; Bottom row: 2 cards span 3 each)
 * - Concise, single-sentence descriptions (strictly <= 12 words)
 * - Descriptions are hidden with a blur filter by default and unblur into view on hover
 * - Full light & dark theme token support
 */
const BENTO_CARDS = [
  {
    id: 'chat-24-7',
    spanClass: 'card-span-2',
    themeClass: 'card-black-bg',
    tag: 'Chat',
    cursorLabel: 'Devin Chat',
    titleLine1: 'Keeps working 24/7 on',
    titleLine2: 'your computer',
    // 10 words (< 12 words max limit)
    description: 'Cloud agents handle background tasks while your laptop is closed.',
    align: 'left',
    descMaxWidth: '170px',
    image: '/assets/teammate-bento-1.png',
    imageAlt: 'Sessions window showing 24/7 background work',
    imageContainerStyle: {
      position: 'absolute',
      right: '-5px',
      bottom: '-55px',
      width: '272px',
      height: '210px',
      transform: 'rotate(10.88deg)',
      transformOrigin: 'bottom right',
      borderRadius: '15px',
      overflow: 'hidden',
    },
  },
  {
    id: 'build-joins-thread',
    spanClass: 'card-span-2',
    themeClass: 'card-grey-bg',
    tag: 'Build',
    cursorLabel: '@Devin',
    titleLine1: 'Joins the thread when',
    titleLine2: 'you @Devin',
    // Card 2 has no description in the design (as shown in reference image 4)
    description: null,
    align: 'left', // Left-aligned as in reference Paper canvas
    image: '/assets/teammate-bento-2.png',
    imageAlt: 'Slack thread showing Devin replying and resolving issues',
    imageContainerStyle: {
      position: 'absolute',
      left: '60%',
      bottom: '-60px',
      width: '360px',
      height: '240px',
      transform: 'translateX(-50%)',
      transformOrigin: 'bottom center',
      borderRadius: '15px',
      overflow: 'hidden',
    },
  },
  {
    id: 'bot-watches-issues',
    spanClass: 'card-span-2',
    themeClass: 'card-black-bg',
    tag: 'Bot',
    cursorLabel: 'Auto Fix',
    titleLine1: 'Watches for issues',
    titleLine2: 'and fixes them',
    // 9 words (< 12 words max limit)
    description: 'Proactively identifies failed CI and fixes bugs before deployment.',
    align: 'right',
    descMaxWidth: '140px',
    image: '/assets/teammate-bento-3.png',
    imageAlt: 'PagerDuty alert triggered and automatically fixed by Devin',
    imageContainerStyle: {
      position: 'absolute',
      left: '-18px',
      bottom: '-50px',
      width: '286px',
      height: '208px',
      transform: 'rotate(-5.37deg)',
      transformOrigin: 'bottom left',
      borderRadius: '15px',
      overflow: 'hidden',
    },
  },
  {
    id: 'imagine-e2e-computer',
    spanClass: 'card-span-3',
    themeClass: 'card-grey-bg',
    tag: 'Imagine',
    cursorLabel: 'VM Sandbox',
    titleLine1: 'Tests end to end on its',
    titleLine2: 'own computer',
    // 10 words (< 12 words max limit)
    description: 'Spins up sandboxes to build, test, and verify every workflow.',
    align: 'right',
    descMaxWidth: '150px',
    image: '/assets/teammate-bento-4.png',
    imageAlt: 'Virtual machines and mobile simulators running end-to-end tests',
    imageContainerStyle: {
      position: 'absolute',
      left: '-40px',
      bottom: '-30px',
      width: '420px',
      height: '272px',
      transform: 'rotate(8.44deg)',
      transformOrigin: 'bottom left',
      borderRadius: '15px',
      overflow: 'hidden',
    },
  },
  {
    id: 'voice-frontier-models',
    spanClass: 'card-span-3',
    themeClass: 'card-black-bg',
    tag: 'Voice',
    cursorLabel: 'Frontier AI',
    titleLine1: 'Gets the Best from every',
    titleLine2: 'frontier model',
    // 10 words (< 12 words max limit)
    description: 'Routes prompts intelligently across frontier models for peak performance.',
    align: 'right',
    descMaxWidth: '170px',
    image: '/assets/teammate-bento-5.png',
    imageAlt: 'Frontier model selector combining intelligence across providers',
    imageContainerStyle: {
      position: 'absolute',
      left: '-5px',
      bottom: '-77px',
      width: '364px',
      height: '242px',
      transform: 'rotate(-10deg)',
      transformOrigin: 'bottom left',
      borderRadius: '15px',
      overflow: 'hidden',
    },
  },
];

export default function FavoriteTeammate() {
  return (
    <section
      className="teammate-section"
      style={{
        borderBottom: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-bg-page)',
        paddingBlock: '72px 96px',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div className="container-constrained">
        <div className="inner-border-column" style={{ paddingInline: '16px' }}>
          {/* Section Heading with more breathing space */}
          <h2
            style={{
              fontSize: '40px',
              lineHeight: '104%',
              letterSpacing: '-1.2px',
              color: 'var(--color-text-primary)',
              fontWeight: 400,
              marginBottom: '56px',
            }}
          >
            Your teammate’s favorite teammate
          </h2>

          {/* 6-Column Bento Grid */}
          <div className="teammate-bento-grid">
            {BENTO_CARDS.map((card) => {
              const isRightAligned = card.align === 'right';
              const isCenterAligned = card.align === 'center';

              return (
                <CursorTag
                  key={card.id}
                  label={card.cursorLabel}
                  className={`teammate-bento-card ${card.spanClass} ${card.themeClass} bento-card-${card.id}`}
                >
                  {/* Decorative Background Image Tile with 14-15px border radius */}
                  <div
                    className="card-media-wrapper"
                    style={card.imageContainerStyle}
                  >
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="card-media-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Top Text Content Area */}
                  <div
                    className="card-text-container"
                    style={{
                      alignItems: isRightAligned
                        ? 'flex-end'
                        : isCenterAligned
                          ? 'center'
                          : 'flex-start',
                      textAlign: isRightAligned
                        ? 'right'
                        : isCenterAligned
                          ? 'center'
                          : 'left',
                    }}
                  >
                    <h3 className="card-title">
                      {card.titleLine1}
                      <br />
                      {card.titleLine2}
                    </h3>

                    {card.description && (
                      <p
                        className="card-desc"
                        style={{ maxWidth: card.descMaxWidth || '180px' }}
                      >
                        {card.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom Shelf Blur Gradient */}
                  <div className="card-bottom-blur-shelf" aria-hidden="true" />

                  {/* Bottom Bar: Category Pill & Explore Link */}
                  <div className="card-footer-bar">
                    <span className="card-tag-pill">{card.tag}</span>

                    <span className="card-explore-link">
                      Explore
                      <span className="explore-arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </div>
                </CursorTag>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* Bento Grid 6-column Layout */
        .teammate-bento-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 14px;
        }

        .card-span-2 {
          grid-column: span 2;
        }

        .card-span-3 {
          grid-column: span 3;
        }

        /* Card Container Base */
        .teammate-bento-card {
          position: relative;
          height: 280px;
          border-radius: 16px;
          overflow: hidden;
          /* Hardware-accelerated corner clipping to prevent subpixel antialiasing gaps */
          transform: translateZ(0);
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          box-sizing: border-box;
          box-shadow: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
          user-select: none;
        }

        /* Cards 1, 3, 5: Black Background (#1A1A1A) with White Text */
        .card-black-bg {
          background-color: #1A1A1A !important;
          border: none !important;
          box-shadow: none !important;
        }

        .card-black-bg:hover {
          border: none !important;
          box-shadow: none !important;
        }

        html.dark .card-black-bg,
        html.dark .card-black-bg:hover {
          border: none !important;
          box-shadow: none !important;
        }

        .card-black-bg .card-title {
          color: #FFFFFF !important;
        }

        .card-black-bg .card-desc {
          color: #8B8B8C !important;
        }

        .card-black-bg .card-bottom-blur-shelf {
          background: linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(26, 26, 26, 0.4) 65%, rgba(26, 26, 26, 0.95) 92%, #1A1A1A 100%) !important;
        }

        .card-black-bg .card-tag-pill {
          color: rgba(255, 255, 255, 0.9) !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
        }

        .card-black-bg .card-explore-link {
          color: rgba(255, 255, 255, 0.55) !important;
        }

        .card-black-bg:hover .card-explore-link {
          color: #FFFFFF !important;
        }

        /* Cards 2, 4 in Light Mode: Light Grey #E2E0E0 Background with Dark Text and NO border */
        :root:not(.dark) .card-grey-bg,
        html:not(.dark) .card-grey-bg {
          background-color: #E2E0E0 !important;
          border: none !important;
          box-shadow: none !important;
        }

        :root:not(.dark) .card-grey-bg:hover,
        html:not(.dark) .card-grey-bg:hover {
          background-color: #D6D4D4 !important;
          border: none !important;
          box-shadow: none !important;
        }

        :root:not(.dark) .card-grey-bg .card-title {
          color: #191919 !important;
        }

        :root:not(.dark) .card-grey-bg .card-desc {
          color: rgba(25, 25, 25, 0.65) !important;
        }

        :root:not(.dark) .card-grey-bg .card-bottom-blur-shelf {
          background: linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(226, 224, 224, 0.4) 65%, rgba(226, 224, 224, 0.95) 92%, #E2E0E0 100%) !important;
        }

        :root:not(.dark) .card-grey-bg .card-tag-pill {
          color: rgba(25, 25, 25, 0.85) !important;
          background-color: rgba(0, 0, 0, 0.05) !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
        }

        :root:not(.dark) .card-grey-bg .card-explore-link {
          color: rgba(25, 25, 25, 0.6) !important;
        }

        :root:not(.dark) .card-grey-bg:hover .card-explore-link {
          color: #000000 !important;
        }

        /* Dark Mode: Specific Colors from Paper Design for Cards 2, 3, 4 */
        /* Card 2 (Build / Joins the thread): #38BDF9 with #000000 Title */
        html.dark .bento-card-build-joins-thread {
          background-color: #38BDF9 !important;
          border: none !important;
          box-shadow: none !important;
        }
        html.dark .bento-card-build-joins-thread:hover {
          background-color: #2BA6E0 !important;
          border: none !important;
          box-shadow: none !important;
        }
        html.dark .bento-card-build-joins-thread .card-title {
          color: #000000 !important;
        }
        html.dark .bento-card-build-joins-thread .card-desc {
          color: #525252 !important;
        }
        html.dark .bento-card-build-joins-thread .card-tag-pill {
          color: #000000CC !important;
          background-color: rgba(0, 0, 0, 0.08) !important;
          border: 1px solid rgba(0, 0, 0, 0.12) !important;
        }
        html.dark .bento-card-build-joins-thread .card-explore-link {
          color: #1A1A1A8C !important;
        }
        html.dark .bento-card-build-joins-thread:hover .card-explore-link {
          color: #000000 !important;
        }
        html.dark .bento-card-build-joins-thread .card-bottom-blur-shelf {
          background: linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(56, 189, 249, 0.4) 65%, rgba(56, 189, 249, 0.95) 92%, #38BDF9 100%) !important;
        }

        /* Card 3 (Bot / Watches for issues): #12B981 with #000000 Title and #525252 Description */
        html.dark .bento-card-bot-watches-issues {
          background-color: #12B981 !important;
          border: none !important;
          box-shadow: none !important;
        }
        html.dark .bento-card-bot-watches-issues:hover {
          background-color: #0FA06F !important;
          border: none !important;
          box-shadow: none !important;
        }
        html.dark .bento-card-bot-watches-issues .card-title {
          color: #000000 !important;
        }
        html.dark .bento-card-bot-watches-issues .card-desc {
          color: #525252 !important;
        }
        html.dark .bento-card-bot-watches-issues .card-tag-pill {
          color: #000000 !important;
          background-color: rgba(0, 0, 0, 0.08) !important;
          border: 1px solid rgba(0, 0, 0, 0.12) !important;
        }
        html.dark .bento-card-bot-watches-issues .card-explore-link {
          color: #000000 !important;
        }
        html.dark .bento-card-bot-watches-issues:hover .card-explore-link {
          color: #000000 !important;
        }
        html.dark .bento-card-bot-watches-issues .card-bottom-blur-shelf {
          background: linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(18, 185, 129, 0.4) 65%, rgba(18, 185, 129, 0.95) 92%, #12B981 100%) !important;
        }

        /* Card 4 (Imagine / Tests end to end): #C085FC with #000000 Title and #525252 Description */
        html.dark .bento-card-imagine-e2e-computer {
          background-color: #C085FC !important;
          border: none !important;
          box-shadow: none !important;
        }
        html.dark .bento-card-imagine-e2e-computer:hover {
          background-color: #B06DF5 !important;
          border: none !important;
          box-shadow: none !important;
        }
        html.dark .bento-card-imagine-e2e-computer .card-title {
          color: #000000 !important;
        }
        html.dark .bento-card-imagine-e2e-computer .card-desc {
          color: #525252 !important;
        }
        html.dark .bento-card-imagine-e2e-computer .card-tag-pill {
          color: #0D0D0DCC !important;
          background-color: rgba(0, 0, 0, 0.08) !important;
          border: 1px solid rgba(0, 0, 0, 0.12) !important;
        }
        html.dark .bento-card-imagine-e2e-computer .card-explore-link {
          color: #0000008C !important;
        }
        html.dark .bento-card-imagine-e2e-computer:hover .card-explore-link {
          color: #000000 !important;
        }
        html.dark .bento-card-imagine-e2e-computer .card-bottom-blur-shelf {
          background: linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(192, 133, 252, 0.4) 65%, rgba(192, 133, 252, 0.95) 92%, #C085FC 100%) !important;
        }

        /* Media Image with 15px border radius */
        .card-media-wrapper {
          pointer-events: none;
          z-index: 1;
          border-radius: 15px;
          overflow: hidden;
        }

        .card-media-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 15px;
          box-shadow: 0 10px 28px -4px rgba(0, 0, 0, 0.3);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .teammate-bento-card:hover .card-media-img {
          transform: scale(1.02);
        }

        /* Text Container */
        .card-text-container {
          position: relative;
          z-index: 3;
          padding: 24px 22px 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          height: fit-content;
          pointer-events: none;
        }

        .card-title {
          font-family: var(--font-sans);
          font-size: 25px;
          font-weight: 500;
          line-height: 1.16;
          letter-spacing: -0.4px;
          color: var(--color-text-primary);
          margin: 0;
          max-width: 340px;
        }

        html.dark .card-title {
          color: #FFFFFF;
        }

        /* Card Description with Blur Reveal Animation on Hover */
        .card-desc {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 450;
          line-height: 1.35;
          letter-spacing: -0.1px;
          color: var(--color-text-secondary);
          margin: 0;
          max-width: 260px;
          /* Hidden by default with blur */
          opacity: 0;
          filter: blur(6px);
          transform: translateY(4px);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, filter, transform;
        }

        html.dark .card-desc {
          color: #9CA3AF;
        }

        /* On Card Hover: reveal smoothly with blur-in */
        .teammate-bento-card:hover .card-desc {
          opacity: 1;
          filter: blur(0px);
          transform: translateY(0);
        }

        /* Over-bleed Glass Blur Overlay: Bleeds past card edges so subpixel rounding on zoom never leaves gaps */
        .card-bottom-blur-shelf {
          position: absolute;
          top: -8px;
          bottom: -8px;
          left: -8px;
          right: -8px;
          height: calc(100% + 16px);
          width: calc(100% + 16px);
          z-index: 2;
          pointer-events: none;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          mask-image: linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 1) 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 1) 100%);
        }

        html.dark .card-bottom-blur-shelf {
          background: linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(26, 26, 26, 0.4) 65%, rgba(26, 26, 26, 0.95) 92%, #1A1A1A 100%);
        }

        /* Card Footer Bar */
        .card-footer-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 56px;
          padding: 0 18px 14px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          z-index: 3;
          pointer-events: none;
        }

        /* Category Tag Pill */
        .card-tag-pill {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
          color: rgba(25, 25, 25, 0.85);
          background-color: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.07);
          padding: 4px 10px;
          border-radius: 9999px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        html.dark .card-tag-pill {
          color: rgba(255, 255, 255, 0.9);
          background-color: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.12);
        }

        /* Explore Link */
        .card-explore-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
          color: rgba(25, 25, 25, 0.55);
          transition: color 0.2s ease;
          pointer-events: auto;
          cursor: pointer;
        }

        html.dark .card-explore-link {
          color: rgba(255, 255, 255, 0.55);
        }

        .teammate-bento-card:hover .card-explore-link {
          color: var(--color-text-primary);
        }

        html.dark .teammate-bento-card:hover .card-explore-link {
          color: #FFFFFF;
        }

        .explore-arrow {
          display: inline-block;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .teammate-bento-card:hover .explore-arrow {
          transform: translateX(3px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .teammate-bento-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }
          .card-span-2 {
            grid-column: span 1;
          }
          .card-span-2:nth-child(3) {
            grid-column: span 2;
          }
          .card-span-3 {
            grid-column: span 1;
          }
        }

        @media (max-width: 720px) {
          .teammate-bento-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .card-span-2,
          .card-span-3,
          .card-span-2:nth-child(3) {
            grid-column: span 1;
          }
          .teammate-bento-card {
            height: 290px;
          }
        }
      `}</style>
    </section>
  );
}
