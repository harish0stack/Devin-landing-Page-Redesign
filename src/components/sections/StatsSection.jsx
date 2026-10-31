import React, { useState, useEffect, useRef } from 'react';
import { TextMorph } from 'torph/react';

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // States for morphing numbers
  const [stat1, setStat1] = useState('0M+');
  const [stat2, setStat2] = useState('0K');
  const [stat3, setStat3] = useState('0');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Trigger smooth number morphing animation via torph
          setStat1('400M+');
          setStat2('200K');
          setStat3('122');
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleReplay = () => {
    // Reset and morph again on interaction
    setStat1('0M+');
    setStat2('0K');
    setStat3('0');
    setTimeout(() => {
      setStat1('400M+');
      setStat2('200K');
      setStat3('122');
    }, 150);
  };

  return (
    <section
      ref={sectionRef}
      style={{
        borderBottom: '1px solid var(--color-border-subtle)',
        borderTop: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-bg-page)',
        paddingBlock: '48px',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div className="container-constrained">
        <div className="inner-border-column" style={{ paddingInline: '16px' }}>
          <div
            className="stats-grid"
            onClick={handleReplay}
            title="Click to re-morph numbers"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              columnGap: '40px',
              rowGap: '32px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {/* Stat 1: 400M+ queries processed daily */}
            <div className="stat-col" style={{ boxSizing: 'border-box' }}>
              <div
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '48px',
                  fontWeight: 500,
                  letterSpacing: '-0.48px',
                  lineHeight: '100%',
                  width: 'max-content',
                }}
              >
                <TextMorph numbers duration={800}>
                  {stat1}
                </TextMorph>
              </div>
              <div
                style={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  marginTop: '10px',
                }}
              >
                queries processed daily
              </div>
            </div>

            {/* Stat 2: 200K GPUs in Colossus */}
            <div
              className="stat-col stat-col-divider"
              style={{
                borderLeft: '1px solid var(--color-border-subtle)',
                paddingLeft: '40px',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '48px',
                  fontWeight: 500,
                  letterSpacing: '-0.48px',
                  lineHeight: '100%',
                  width: 'max-content',
                }}
              >
                <TextMorph numbers duration={800}>
                  {stat2}
                </TextMorph>
              </div>
              <div
                style={{
                  marginTop: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '20px',
                  }}
                >
                  GPUs in
                </span>
                <svg
                  viewBox="0 0 1550 114"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    height: '10px',
                    width: '110px',
                    flexShrink: 0,
                    overflow: 'visible',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}
                  aria-label="Colossus"
                >
                  <path
                    d="M428.636 91.184H505.96C505.952 91.173 505.943 91.162 505.935 91.151L719.285 91.143C738.395 91.142 753.887 75.651 753.887 56.541C753.887 52.108 753.053 47.871 751.534 43.976H781.262C782.181 48.02 782.666 52.23 782.666 56.552C782.666 87.745 757.389 113.041 726.195 113.041H552.849V113.082H423.662C410.466 113.082 399.768 102.384 399.768 89.188V0H428.636V91.184Z"
                    fill="currentColor"
                    style={{ color: 'var(--color-text-secondary)' }}
                  />
                  <path
                    d="M138.89 0.041C150.984 0.041 160.788 9.845 160.788 21.939H28.868V91.143H160.788C160.788 103.237 150.984 113.041 138.89 113.041H23.895C10.698 113.041 0 102.343 0 89.147V23.936C0 10.739 10.698 0.041 23.895 0.041H138.89Z"
                    fill="currentColor"
                    style={{ color: 'var(--color-text-secondary)' }}
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M358.894 21.939C358.894 9.845 349.089 0.041 336.995 0.041H220.005C207.911 0.041 198.106 9.845 198.106 21.939H198.188C198.134 22.598 198.105 23.263 198.105 23.936V89.147C198.105 89.819 198.134 90.484 198.188 91.143H198.106C198.106 103.237 207.911 113.041 220.005 113.041H336.995C349.089 113.041 358.894 103.237 358.894 91.143H358.812C358.844 90.755 358.867 90.365 358.88 89.972C358.89 89.698 358.895 89.423 358.895 89.147V23.936C358.895 23.263 358.866 22.598 358.812 21.939H358.894ZM226.974 91.143H330.026V21.939H226.974V91.143Z"
                    fill="currentColor"
                    style={{ color: 'var(--color-text-secondary)' }}
                  />
                  <path
                    d="M933.873 45.838C947.069 45.838 957.767 56.536 957.767 69.732V89.147C957.767 102.343 947.069 113.041 933.873 113.041H818.877C806.783 113.041 796.979 103.237 796.979 91.143H928.899V67.741H822.864C810.338 67.741 800.063 58.103 799.052 45.838H933.873Z"
                    fill="currentColor"
                    style={{ color: 'var(--color-text-secondary)' }}
                  />
                  <path
                    d="M1129.27 0.041C1141.36 0.041 1151.17 9.845 1151.17 21.939H1023.23V45.838H1129.26C1142.46 45.838 1153.16 56.536 1153.16 69.732V89.147C1153.16 102.343 1142.46 113.041 1129.26 113.041H1014.27C1002.17 113.041 992.369 103.237 992.369 91.143H1124.29V67.741H1018.25C1005.06 67.741 994.361 57.044 994.36 43.848V23.936C994.36 10.739 1005.06 0.041 1018.25 0.041H1129.27Z"
                    fill="currentColor"
                    style={{ color: 'var(--color-text-secondary)' }}
                  />
                  <path
                    d="M1221.1 91.143H1324.16V0.041H1331.13C1343.22 0.041 1353.02 9.845 1353.02 21.939L1352.94 21.925C1353 22.588 1353.03 23.258 1353.03 23.936V89.147C1353.03 89.819 1353 90.484 1352.94 91.143H1353.02C1353.02 103.237 1343.22 113.041 1331.13 113.041H1214.14C1202.04 113.041 1192.24 103.237 1192.24 91.143H1192.32C1192.26 90.484 1192.24 89.819 1192.24 89.147V23.936C1192.24 23.258 1192.27 22.588 1192.32 21.925L1192.24 21.939C1192.24 9.845 1202.04 0.041 1214.14 0.041H1221.1V91.143Z"
                    fill="currentColor"
                    style={{ color: 'var(--color-text-secondary)' }}
                  />
                  <path
                    d="M1525.49 0.041C1537.59 0.041 1547.39 9.845 1547.39 21.939H1419.46V45.838H1525.49C1538.69 45.838 1549.38 56.536 1549.38 69.732V89.147C1549.38 102.343 1538.69 113.041 1525.49 113.041H1410.49C1398.4 113.041 1388.6 103.237 1388.6 91.143H1520.52V67.741H1414.48C1401.29 67.741 1390.59 57.044 1390.59 43.848V23.936C1390.59 10.739 1401.29 0.041 1414.48 0.041H1525.49Z"
                    fill="currentColor"
                    style={{ color: 'var(--color-text-secondary)' }}
                  />
                  <path
                    d="M933.876 0.041C945.97 0.041 955.774 9.845 955.774 21.939H770.834L770.89 22.012H721.533C720.79 21.964 720.04 21.939 719.285 21.939H707.837V22.012H679.045L679.051 21.939H557.436C538.326 21.939 522.834 37.431 522.834 56.541C522.834 61.004 523.679 65.27 525.218 69.188H495.458C494.507 65.079 494.002 60.8 493.998 56.404C493.97 25.24 519.252 0.041 550.417 0.041H933.876Z"
                    fill="currentColor"
                    style={{ color: 'var(--color-text-secondary)' }}
                  />
                </svg>
              </div>
            </div>

            {/* Stat 3: 122 days to build Colossus */}
            <div
              className="stat-col stat-col-divider"
              style={{
                borderLeft: '1px solid var(--color-border-subtle)',
                paddingLeft: '40px',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '48px',
                  fontWeight: 500,
                  letterSpacing: '-0.48px',
                  lineHeight: '100%',
                  width: 'max-content',
                }}
              >
                <TextMorph numbers duration={800}>
                  {stat3}
                </TextMorph>
              </div>
              <div
                style={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  marginTop: '10px',
                }}
              >
                days to build Colossus
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            row-gap: 36px !important;
          }
          .stat-col-divider {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid var(--color-border-subtle);
            padding-top: 28px;
          }
        }
      `}</style>
    </section>
  );
}
