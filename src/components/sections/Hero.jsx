import React from 'react';
import DevinBot from '../bots/DevinBot';
import PointerHighlight from '../ui/PointerHighlight';
import Reveal from '../ui/Reveal';

export default function Hero({ onOpenLogin }) {
  return (
    <Reveal root as="section" style={{
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--color-border-subtle)',
      paddingTop: '60px',
      paddingBottom: '80px',
      backgroundColor: 'var(--color-bg-page)',
    }}>
      <div className="container-constrained" style={{ position: 'relative' }}>
        {/* Hero Header Content - Centered with Playful Interactive Devin Bots */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '920px',
          margin: '0 auto 52px auto',
          position: 'relative',
        }}>
          {/* Bot 2: Triangle Droplet - High Top-Left Sky */}
          <div className="hero-floating-bot" style={{
            position: 'absolute',
            top: '-36px',
            left: '-24px',
            zIndex: 15,
          }}>
            <DevinBot
              shape="triangle"
              color="#818CF8"
              size={84}
              radius={450}
              eyeColor="#0A0B0E"
              initialState="attentive"
              floatDuration="4.6s"
              floatDelay="0.2s"
            />
          </div>

          {/* Bot 3: Soft Cloud Bot - Top-Right Sky */}
          <div className="hero-floating-bot" style={{
            position: 'absolute',
            top: '-24px',
            right: '-28px',
            zIndex: 15,
          }}>
            <DevinBot
              shape="cloud"
              color="#C084FC"
              size={82}
              radius={450}
              eyeColor="#0A0B0E"
              initialState="happy"
              floatDuration="5.2s"
              floatDelay="0.7s"
            />
          </div>

          {/* Bot 4: Mint Capsule Bot - Peeking High Above Headline on Center-Right */}
          <div className="hero-floating-bot" style={{
            position: 'absolute',
            top: '-46px',
            right: '160px',
            zIndex: 15,
          }}>
            <DevinBot
              shape="capsule"
              color="#10B981"
              size={80}
              radius={450}
              eyeColor="#0A0B0E"
              initialState="excited"
              floatDuration="4.8s"
              floatDelay="1.1s"
            />
          </div>

          {/* Bot 5: Golden Amber Squircle Bot - Pushed Wide Mid-Left */}
          <div className="hero-floating-bot" style={{
            position: 'absolute',
            top: '56px',
            left: '-86px',
            zIndex: 15,
          }}>
            <DevinBot
              shape="squircle"
              color="#F59E0B"
              size={82}
              radius={450}
              eyeColor="#0A0B0E"
              initialState="confused"
              floatDuration="5.4s"
              floatDelay="0.5s"
            />
          </div>

          {/* Bot 6: Distinct Teardrop Droplet Bot - Curious State - Floating Asymmetrically near CTA Buttons on Bottom-Left */}
          <div className="hero-floating-bot" style={{
            position: 'absolute',
            bottom: '-32px',
            left: '20px',
            zIndex: 15,
          }}>
            <DevinBot
              shape="droplet"
              color="#F43F5E"
              size={98}
              radius={450}
              eyeColor="#0A0B0E"
              initialState="curious"
              floatDuration="4.2s"
              floatDelay="1.4s"
            />
          </div>

          {/* Bot 7: Distinct Pebble Bot - Neutral State - Pushed Wide on Mid-Right */}
          <div className="hero-floating-bot" style={{
            position: 'absolute',
            top: '80px',
            right: '-84px',
            zIndex: 15,
          }}>
            <DevinBot
              shape="pebble"
              color="#FB923C"
              size={84}
              radius={450}
              eyeColor="#0A0B0E"
              initialState="neutral"
              floatDuration="4.9s"
              floatDelay="0.9s"
            />
          </div>

          {/* Bot 8: Distinct Hexagon Bot - Curious State - Lower-Right Flanking Description */}
          <div className="hero-floating-bot" style={{
            position: 'absolute',
            top: '190px',
            right: '-46px',
            zIndex: 15,
          }}>
            <DevinBot
              shape="hexagon"
              color="#06B6D4"
              size={84}
              radius={450}
              eyeColor="#0A0B0E"
              initialState="curious"
              floatDuration="4.4s"
              floatDelay="1.7s"
            />
          </div>

          {/* Top Announcement Pill (Delay 0.45s) */}
          <Reveal delay={0.45} y={10} style={{ display: 'inline-flex' }}>
            <a
              href="#login"
              onClick={(e) => {
                e.preventDefault();
                onOpenLogin();
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--color-badge-bg)',
                border: '1px solid var(--color-border-subtle)',
                color: 'var(--color-text-secondary)',
                fontSize: '13px',
                fontWeight: 500,
                marginBottom: '24px',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-badge-bg-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-badge-bg)';
              }}
            >
              <span style={{ color: 'var(--color-text-primary)' }}>Devin Bot is here</span>
              <span style={{ opacity: 0.5 }}>·</span>
              <span>Read the launch post</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </Reveal>

          {/* Centered Heading: Strictly 2-Line Punchy & Balanced Structure with per-word reveal */}
          <h1 className="hero-main-heading" style={{
            fontSize: 'clamp(36px, 4.4vw, 48px)',
            lineHeight: '116%',
            letterSpacing: '-1.5px',
            color: 'var(--color-text-primary)',
            fontWeight: 400,
            marginBottom: '18px',
            fontFamily: 'var(--font-sans)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}>
            {/* Line 1: Meet [Circle Bot] Devin, */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              whiteSpace: 'nowrap',
            }}>
              <Reveal as="span" delay={0.00} y={8} style={{ display: 'inline-block' }}>Meet</Reveal>
              <Reveal as="span" delay={0.09} y={8} style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' }}>
                <DevinBot
                  shape="circle"
                  color="#38BDF8"
                  size={70}
                  radius={450}
                  eyeColor="#0A0B0E"
                  floatDuration="3.8s"
                  floatDelay="0s"
                />
              </Reveal>
              <Reveal as="span" delay={0.18} y={8} style={{ display: 'inline-block' }}>Devin,</Reveal>
            </div>

            {/* Line 2: your autonomous engineer */}
            <div className="hero-main-heading-line2" style={{
              whiteSpace: 'nowrap',
              color: 'var(--color-text-primary)',
            }}>
              <Reveal as="span" delay={0.27} y={8} style={{ display: 'inline-block' }}>your&nbsp;</Reveal>
              <Reveal as="span" delay={0.36} y={8} style={{ display: 'inline-block' }}>autonomous&nbsp;</Reveal>
              <Reveal as="span" delay={0.45} y={8} style={{ display: 'inline-block' }}>
                <PointerHighlight delay={0.8}>
                  engineer
                </PointerHighlight>
              </Reveal>
            </div>
          </h1>

          {/* Centered Description (Delay 0.55s) */}
          <Reveal as="p" delay={0.55} y={12} style={{
            fontSize: '16px',
            lineHeight: '145%',
            color: 'var(--color-text-secondary)',
            marginBottom: '28px',
            maxWidth: '540px',
            letterSpacing: '-0.1px',
          }}>
            Devin runs in the cloud or on your machine, tests in its own browser, and won't stop until the PR is ready to merge
          </Reveal>

          {/* Centered Action Buttons (Delay 0.65s, stagger 0.08s) */}
          <Reveal delay={0.65} stagger={0.08} y={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <button
              onClick={onOpenLogin}
              style={{
                height: '42px',
                paddingInline: '22px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--btn-primary-bg)',
                color: 'var(--btn-primary-text)',
                fontSize: '15px',
                lineHeight: '150%',
                fontWeight: 500,
                cursor: 'pointer',
                border: 'none',
                transition: 'opacity 0.15s ease, background-color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.88';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              Get started
            </button>
            <button style={{
              height: '42px',
              paddingInline: '22px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'transparent',
              color: 'var(--color-text-primary)',
              fontSize: '15px',
              lineHeight: '150%',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease, border-color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-badge-bg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            >
              Book a demo
            </button>
          </Reveal>
        </div>

        {/* Hero Graphic & Mockup Showcase (Delay 0.85s, y=24, blur=0) */}
        <Reveal delay={0.85} y={24} blur={0} className="hero-dashboard-container" style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1060px',
          margin: '0 auto',
        }}>
          {/* Dual-Layer Parallax Background Collage Sliding to Right (Full Viewport Width) */}
          <div
            className="hero-parallax-bg-wrapper"
            style={{
              position: 'absolute',
              top: '-80px',
              bottom: '-80px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100vw',
              pointerEvents: 'none',
              zIndex: 0,
              overflow: 'hidden',
            }}
          >
            {/* Layer 1: Heavily Blurred (6px), moving right at 75s */}
            <div style={{
              position: 'absolute',
              inset: 0,
              filter: 'blur(6px)',
              opacity: 'var(--color-hero-collage-opacity-layer1)',
              transition: 'opacity 0.25s ease',
            }}>
              <div className="hero-pan-track-slow" style={{
                display: 'flex',
                width: '7600px',
                height: '100%',
                position: 'relative',
              }}>
                {[0, 1, 2, 3].map((copy) => (
                  <div key={`layer1-${copy}`} style={{
                    position: 'relative',
                    width: '1900px',
                    height: '100%',
                    flexShrink: 0,
                  }}>
                    <img src="/assets/6RBXHCJ323CR6Y01XAE4T8PKMN.webp" alt="" style={{ position: 'absolute', left: '120px', top: '4%', width: '110px', height: '83px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/4P8P2BQPNSB37VXB8C0F1E3G4Q.webp" alt="" style={{ position: 'absolute', left: '380px', top: '15%', width: '83px', height: '110px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/0B0JGKMHZ0HQB17349MBQGGN8Y.webp" alt="" style={{ position: 'absolute', left: '560px', top: '6%', width: '110px', height: '110px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/2YEP43ZGKSBH1JDZBG4ZN22S6B.webp" alt="" style={{ position: 'absolute', left: '840px', top: '38%', width: '143px', height: '143px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/48KX5EKN2B4STM1DT2M6646FMD.webp" alt="" style={{ position: 'absolute', left: '1060px', top: '18%', width: '83px', height: '110px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/758TXRRJFAZW06TBG3PKRQ59Y8.webp" alt="" style={{ position: 'absolute', left: '1280px', top: '48%', width: '110px', height: '83px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/0CHE7FA82ZJ9MQ8CWPFM40FYKH.webp" alt="" style={{ position: 'absolute', left: '1480px', top: '22%', width: '107px', height: '143px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/3XVTXR9EETJX82AHG31GGR5ZTR.webp" alt="" style={{ position: 'absolute', left: '1720px', top: '8%', width: '83px', height: '110px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/5FQ30P4CZWCPV5E829N8DT9KFY.webp" alt="" style={{ position: 'absolute', left: '260px', bottom: '12%', width: '83px', height: '110px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/7HVBKV0ZEPAFE7K0NFB3JXWYX4.webp" alt="" style={{ position: 'absolute', left: '720px', bottom: '16%', width: '66px', height: '50px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/0JQ4M2Z5NXKJ9SNR9GJXZ4AH6V.webp" alt="" style={{ position: 'absolute', left: '980px', bottom: '8%', width: '110px', height: '83px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/5BZKTHDBVGB4XF793XZRBVH0C2.webp" alt="" style={{ position: 'absolute', left: '1360px', bottom: '10%', width: '143px', height: '107px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/1RCZQ0VS7KQA4R0BYP6N61PGGH.webp" alt="" style={{ position: 'absolute', left: '1640px', bottom: '14%', width: '143px', height: '143px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Layer 2: Sharper (1px blur), moving right at 48s */}
            <div style={{
              position: 'absolute',
              inset: 0,
              filter: 'blur(0.8px)',
              opacity: 'var(--color-hero-collage-opacity-layer2)',
              transition: 'opacity 0.25s ease',
            }}>
              <div className="hero-pan-track-fast" style={{
                display: 'flex',
                width: '7600px',
                height: '100%',
                position: 'relative',
              }}>
                {[0, 1, 2, 3].map((copy) => (
                  <div key={`layer2-${copy}`} style={{
                    position: 'relative',
                    width: '1900px',
                    height: '100%',
                    flexShrink: 0,
                  }}>
                    <img src="/assets/29EBKJHBA65EP33PNF63AJWMXM.webp" alt="" style={{ position: 'absolute', left: '220px', top: '16%', width: '180px', height: '240px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/5AT4MEEHNDPJHN5E9GNXQ9B71B.webp" alt="" style={{ position: 'absolute', left: '520px', top: '3%', width: '90px', height: '120px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/032KTRWQS0E75EQZ3XJS3WGPCJ.webp" alt="" style={{ position: 'absolute', left: '760px', bottom: '10%', width: '180px', height: '240px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/48KX5EKN2B4STM1DT2M6646FMD.webp" alt="" style={{ position: 'absolute', left: '1020px', top: '24%', width: '150px', height: '200px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/758TXRRJFAZW06TBG3PKRQ59Y8.webp" alt="" style={{ position: 'absolute', left: '1260px', top: '8%', width: '220px', height: '165px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/0CHE7FA82ZJ9MQ8CWPFM40FYKH.webp" alt="" style={{ position: 'absolute', left: '1540px', top: '32%', width: '150px', height: '200px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/1RCZQ0VS7KQA4R0BYP6N61PGGH.webp" alt="" style={{ position: 'absolute', left: '1760px', bottom: '18%', width: '120px', height: '120px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                    <img src="/assets/7HVBKV0ZEPAFE7K0NFB3JXWYX4.webp" alt="" style={{ position: 'absolute', left: '380px', bottom: '25%', width: '120px', height: '90px', mixBlendMode: 'var(--color-hero-collage-blend)', filter: 'var(--color-hero-collage-filter)' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Devin Workspace UI Container */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '16px',
            outline: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-bg-secondary)',
            boxShadow: 'var(--shadow-card)',
            backdropFilter: 'blur(8px)',
            overflow: 'hidden',
          }}>
            {/* Window Top Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              borderBottom: '1px solid var(--color-border-subtle)',
              backgroundColor: 'var(--color-bg-surface)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF544E' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBB00' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#00C926' }} />
                <div style={{ marginLeft: '12px', display: 'flex', gap: '4px' }}>
                  <button style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '12px', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                    <span>acme/platform</span>
                    <span style={{ fontSize: '10px' }}>▾</span>
                  </button>
                </div>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                Devin Studio — enterprise-sso
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)' }} />
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Online</span>
              </div>
            </div>

            {/* Window Main Body Split */}
            <div style={{ display: 'flex', minHeight: '540px', position: 'relative' }}>
              {/* Left Sidebar */}
              <div className="hero-sidebar" style={{
                width: '240px',
                borderRight: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-bg-surface)',
                padding: '12px 8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                flexShrink: 0
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--color-badge-bg)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  New session
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 7v5l3 3"/>
                  </svg>
                  Automations
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Security
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                  Review
                </div>

                <div style={{ marginTop: '20px', paddingInline: '10px', fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Recent Work
                </div>
                <div style={{ padding: '6px 10px', fontSize: '12px', color: 'var(--color-text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  #2922 Add enterprise SSO
                </div>
                <div style={{ padding: '6px 10px', fontSize: '12px', color: 'var(--color-text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  #2918 Fix Stripe webhook retry
                </div>
                <div style={{ padding: '6px 10px', fontSize: '12px', color: 'var(--color-text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  #2905 Upgrade Prisma schema
                </div>
              </div>

              {/* Center Workspace / Terminal / Code View */}
              <div style={{
                flex: 1,
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backgroundColor: 'var(--color-bg-page)',
              }}>
                {/* Session header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--color-border-subtle)',
                  paddingBottom: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      backgroundColor: 'rgba(49, 124, 255, 0.1)',
                      color: 'var(--color-accent-blue)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500,
                    }}>
                      Session #4829
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                      Configure Okta SAML 2.0 Identity Provider
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Runtime: 4m 12s
                  </div>
                </div>

                {/* Devin Activity Log Preview */}
                <div style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  borderRadius: '8px',
                  padding: '14px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: 'var(--color-text-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  border: '1px solid var(--color-border-subtle)',
                }}>
                  <div style={{ color: 'var(--color-text-muted)' }}>$ devin plan --target "Enterprise SSO"</div>
                  <div>✓ Analyzed authentication middleware in <span style={{ color: 'var(--color-accent-blue)' }}>packages/auth/server.ts</span></div>
                  <div>✓ Provisioned isolated test organization with SAML mock certificates</div>
                  <div>✓ Executing end-to-end authentication spec in Chromium headless environment...</div>
                  <div style={{ color: 'var(--color-accent-green)' }}>✓ All 18 automated SSO assertions passed (0 errors, 0 flaky)</div>
                </div>

                {/* Virtual machine recording preview */}
                <div style={{
                  borderRadius: '8px',
                  border: '1px solid var(--color-border-subtle)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-bg-surface)',
                  height: '240px',
                  position: 'relative'
                }}>
                  <img
                    src="/assets/5GREN0T53QXVGVGTVJJNE5Z5N9.webp"
                    alt="Devin virtual environment test recording"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '12px',
                    right: '12px',
                    backgroundColor: 'var(--color-glass-card-bg)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid var(--color-glass-card-border)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '11px',
                    color: 'var(--color-text-primary)'
                  }}>
                    <span>Test playback (Mac OS X virtual environment)</span>
                    <span style={{ color: 'var(--color-accent-blue)', fontWeight: 600 }}>Recorded & Verified</span>
                  </div>
                </div>
              </div>

              {/* Floating PR Card Overlay (matching VMG-0) */}
              <div className="hero-pr-card" style={{
                position: 'absolute',
                right: '24px',
                top: '24px',
                width: '460px',
                backgroundColor: 'var(--color-glass-card-bg)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-window)',
                border: '1px solid var(--color-glass-card-border)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                zIndex: 10,
              }}>
                {/* PR Header */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#00A558">
                      <path d="M12.340 4.360 L 10.700 6.000 12.350 7.650 L 14.000 9.300 14.530 8.770 L 15.059 8.240 14.320 7.500 L 13.581 6.760 L 15.410 6.760 L 17.240 6.760 L 17.240 10.932 L 17.240 15.105 17.050 15.154 C 16.798 15.218,16.350 15.470,16.089 15.695 C 15.608 16.108,15.295 16.579,15.114 17.160 C 14.979 17.594,14.979 18.406,15.114 18.840 C 15.421 19.826,16.174 20.579,17.160 20.886 C 17.594 21.021,18.406 21.021,18.840 20.886 C 19.807 20.585,20.552 19.852,20.872 18.887 C 20.961 18.620,20.974 18.508,20.977 18.020 C 20.980 17.389,20.912 17.088,20.656 16.600 C 20.321 15.962,19.549 15.307,18.950 15.154 L 18.760 15.105 18.760 10.172 L 18.760 5.240 L 16.170 5.240 L 13.581 5.240 L 14.320 4.500 L 15.059 3.760 L 14.540 3.240 C 14.255 2.954,14.012 2.720,14.000 2.720 C 13.989 2.720,13.242 3.458,12.340 4.360 M5.499 3.040 C 4.363 3.246,3.460 4.049,3.114 5.160 C 2.979 5.594,2.979 6.406,3.114 6.840 C 3.403 7.768,4.135 8.539,5.010 8.836 L 5.220 8.908 5.230 12.006 L 5.240 15.105 5.050 15.154 C 4.798 15.218,4.350 15.470,4.089 15.695 C 3.608 16.108,3.295 16.579,3.114 17.160 C 2.979 17.594,2.979 18.406,3.114 18.840 C 3.421 19.826,4.174 20.579,5.160 20.886 C 5.594 21.021,6.406 21.021,6.840 20.886 C 7.826 20.579,8.579 19.826,8.886 18.840 C 9.021 18.406,9.021 17.594,8.886 17.160 C 8.705 16.579,8.392 16.108,7.911 15.695 C 7.650 15.470,7.202 15.218,6.950 15.154 L 6.760 15.105 6.770 12.006 L 6.780 8.908 6.990 8.836 C 7.865 8.539,8.597 7.768,8.886 6.840 C 9.021 6.406,9.021 5.594,8.886 5.160 C 8.581 4.179,7.810 3.407,6.861 3.129 C 6.500 3.023,5.832 2.980,5.499 3.040" fillRule="evenodd"/>
                    </svg>
                    <span style={{ color: '#00A558', fontWeight: 600 }}>PR Open</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>·</span>
                    <span style={{ color: 'var(--color-text-secondary)' }}>acme/platform #2922</span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-text-primary)', letterSpacing: '-0.3px' }}>
                    Add enterprise SSO
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--color-text-secondary)', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <img src="/assets/1NYAXKHPEPHXY0TTJK62RMXHYM.webp" alt="avatar" style={{ width: '16px', height: '16px', borderRadius: '50%' }} />
                      <span>bwhuffman</span>
                    </div>
                    <span>·</span>
                    <span style={{ backgroundColor: 'var(--color-badge-bg)', padding: '2px 6px', borderRadius: '4px', color: 'var(--color-text-primary)' }}>main</span>
                    <span>←</span>
                    <span style={{ backgroundColor: 'var(--color-badge-bg)', padding: '2px 6px', borderRadius: '4px', color: 'var(--color-text-primary)' }}>enterprise-sso</span>
                    <span>·</span>
                    <span>12 files changed</span>
                    <span style={{ color: 'var(--color-accent-green)', fontWeight: 600 }}>+8</span>
                    <span style={{ color: 'var(--color-accent-red)', fontWeight: 600 }}>-14</span>
                  </div>
                </div>

                {/* Analysis Box */}
                <div style={{
                  backgroundColor: 'var(--color-badge-bg)',
                  borderRadius: '10px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                    <img src="/assets/3VVSPX1BWJY5T17DG5S03MN2CC.svg" alt="Devin" style={{ width: '14px', height: '14px', filter: 'var(--color-logo-filter)' }} />
                    <span style={{ fontWeight: 500 }}>Devin's analysis</span>
                  </div>
                  <p style={{ fontSize: '13px', lineHeight: '18px', color: 'var(--color-text-primary)' }}>
                    Adds SAML single sign-on for enterprise organizations. Admins can configure their identity provider, verify the connection, and require SSO from organization settings.
                  </p>
                </div>

                {/* Progress bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
                    <span>Testing end-to-end flow</span>
                    <span>Step 3 of 5</span>
                  </div>
                  <div style={{ height: '4px', width: '100%', backgroundColor: 'rgba(49, 124, 255, 0.15)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: '65%', height: '100%', backgroundColor: 'var(--color-accent-blue)', borderRadius: '9999px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-main-heading {
            font-size: clamp(28px, 7vw, 36px) !important;
            letter-spacing: -0.8px !important;
          }
          .hero-main-heading-line1,
          .hero-main-heading-line2 {
            white-space: normal !important;
          }
        }
        @media (max-width: 900px) {
          .hero-floating-bot {
            display: none !important;
          }
          .hero-dashboard-container {
            max-width: 100% !important;
          }
        }
        @media (max-width: 1024px) {
          .hero-sidebar {
            display: none !important;
          }
          .hero-pr-card {
            position: static !important;
            width: 100% !important;
            margin-top: 16px !important;
          }
        }
        @keyframes heroPanRight {
          0% {
            transform: translate3d(-1900px, 0, 0);
          }
          100% {
            transform: translate3d(0px, 0, 0);
          }
        }
        .hero-pan-track-slow {
          animation: heroPanRight 75s linear infinite;
          will-change: transform;
        }
        .hero-pan-track-fast {
          animation: heroPanRight 48s linear infinite;
          will-change: transform;
        }
      `}</style>
    </Reveal>
  );
}
