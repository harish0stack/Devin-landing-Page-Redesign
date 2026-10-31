import React from 'react';

const LOGOS = [
  "0GJQB87S29F9BSHQCY9DP53GPZ.svg",
  "54SD34AE5Z3ACVRRXYZMRDFMMH.svg",
  "3MNZKEJ44BJ9TQRNWEE4WB6PNX.svg",
  "06WCT0K6JQ516VXEZC0590YR75.svg",
  "71MAHRSQCYHWW7JYGV4KAZCSVG.svg",
  "2FY9GWRRWP2M82EAKSRKXJW3A8.svg",
  "2KJT8YRDYARM8DQQGS2GZZ5BER.svg",
  "7G7FH4V52Z8VRSH0XATNECE3NS.svg",
  "28BWF3B733Y84H01W6QMJ4PPKH.svg",
  "1AWCJAA3QQN3WZ4AYC1NB1ZC11.svg",
  "6RQF5DT90QWVCW1RVJMNPFZVP1.svg",
  "6A36WBYBMX7HHS50A0GWB6B92B.svg",
  "6GV4ZAZK2NFBNKHRF6EYT9VGQK.svg",
  "4ABYG6A9KV9K8H4HY8HM747N0S.svg",
  "2A0DABAVQQ504S5ASWFPB1Z45H.svg",
  "615T1G0NBJCYTAJDGBD0YHM3YW.svg",
  "7QSK2V40YRA4Z0ZS2X18XH0T9P.svg",
  "00JWXEK57VXTYYG7V2P6E67NN5.svg",
  "4W5PN6QJ690VBN9S820D0C27PF.svg"
];

export default function LogoTicker() {
  return (
    <div style={{
      borderTop: '1px solid var(--color-border-subtle)',
      borderBottom: '1px solid var(--color-border-subtle)',
      backgroundColor: 'var(--color-bg-page)',
      overflow: 'hidden',
      transition: 'background-color 0.2s ease, border-color 0.2s ease',
    }}>
      <div className="container-constrained">
        <div className="inner-border-column" style={{
          position: 'relative',
          height: '76px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          maskImage: 'linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
        }}>
          <div className="ticker-track">
            {/* First set */}
            {LOGOS.map((file, i) => (
              <div key={`logo-1-${i}`} style={{
                width: '135px',
                height: '76px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <img
                  src={`/assets/${file}`}
                  alt="Customer Logo"
                  style={{
                    height: '92px',
                    width: 'auto',
                    maxWidth: 'none',
                    objectFit: 'contain',
                    opacity: 1,
                    filter: 'var(--color-logo-filter)',
                    transition: 'transform 0.2s ease, opacity 0.2s ease, filter 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
            ))}
            {/* Second set for loop */}
            {LOGOS.map((file, i) => (
              <div key={`logo-2-${i}`} style={{
                width: '135px',
                height: '76px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <img
                  src={`/assets/${file}`}
                  alt="Customer Logo"
                  style={{
                    height: '92px',
                    width: 'auto',
                    maxWidth: 'none',
                    objectFit: 'contain',
                    opacity: 1,
                    filter: 'var(--color-logo-filter)',
                    transition: 'transform 0.2s ease, opacity 0.2s ease, filter 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ticker-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
