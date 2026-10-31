import React from 'react';

/**
 * ChatPreview - Replicates Image 2
 * Clean, modern conversational thread with subtle dark bubbles.
 */
export function ChatPreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#0C0D10',
      padding: '20px 18px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '12px',
      overflow: 'hidden',
    }}>
      {/* User Bubble 1 */}
      <div style={{
        alignSelf: 'flex-end',
        backgroundColor: '#1E2025',
        color: '#E4E4E7',
        padding: '10px 16px',
        borderRadius: '16px 16px 4px 16px',
        fontSize: '13px',
        maxWidth: '80%',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      }}>
        What causes aurora borealis?
      </div>

      {/* Bot Bubble 1 */}
      <div style={{
        alignSelf: 'flex-start',
        backgroundColor: '#15171B',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        color: '#A1A1AA',
        padding: '12px 16px',
        borderRadius: '16px 16px 16px 4px',
        fontSize: '13px',
        lineHeight: '1.45',
        maxWidth: '84%',
      }}>
        Solar particles hit atmospheric gases near the poles, exciting them to glow.
      </div>

      {/* User Bubble 2 */}
      <div style={{
        alignSelf: 'flex-end',
        backgroundColor: '#1E2025',
        color: '#E4E4E7',
        padding: '10px 16px',
        borderRadius: '16px 16px 4px 16px',
        fontSize: '13px',
        maxWidth: '80%',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      }}>
        Explain quantum entanglement simply
      </div>

      {/* Bot Bubble 2 */}
      <div style={{
        alignSelf: 'flex-start',
        backgroundColor: '#15171B',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        color: '#A1A1AA',
        padding: '12px 16px',
        borderRadius: '16px 16px 16px 4px',
        fontSize: '13px',
        lineHeight: '1.45',
        maxWidth: '84%',
      }}>
        Two particles become linked — measuring one instantly determines the other, regardless of distance.
      </div>

      {/* User Bubble 3 */}
      <div style={{
        alignSelf: 'flex-end',
        backgroundColor: '#1E2025',
        color: '#E4E4E7',
        padding: '10px 16px',
        borderRadius: '16px 16px 4px 16px',
        fontSize: '13px',
        maxWidth: '80%',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      }}>
        Why is the sky blue?
      </div>
    </div>
  );
}

/**
 * VoicePreview - Replicates Image 3
 * Luminous celestial cosmic glass sphere with internal nebula and star sparkles.
 */
export function VoicePreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#07080A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background cosmic haze */}
      <div style={{
        position: 'absolute',
        width: '260px',
        height: '260px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 70%)',
        filter: 'blur(30px)',
      }} />

      {/* The 3D Cosmic Glass Orb */}
      <div style={{
        position: 'relative',
        width: '230px',
        height: '230px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #2A1B4E 0%, #150E28 45%, #05040A 80%, #000000 100%)',
        boxShadow: '0 0 50px rgba(120, 60, 240, 0.25), inset 0 0 35px rgba(255, 255, 255, 0.2), inset -10px -10px 30px rgba(6, 182, 212, 0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.22)',
      }}>
        {/* Nebular swirls inside the orb */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 65% 45%, rgba(192, 132, 252, 0.45) 0%, rgba(56, 189, 248, 0.35) 30%, transparent 65%)',
          filter: 'blur(8px)',
        }} />

        {/* Dynamic Celestial Sparkles & Chromatic Dust */}
        <svg width="230" height="230" viewBox="0 0 230 230" style={{ position: 'absolute', inset: 0 }}>
          <circle cx="95" cy="85" r="1.8" fill="#FFFFFF" />
          <circle cx="115" cy="115" r="2.2" fill="#FFFFFF" filter="drop-shadow(0 0 2px #fff)" />
          <circle cx="140" cy="75" r="1.5" fill="#38BDF8" />
          <circle cx="75" cy="130" r="1.6" fill="#F43F5E" />
          <circle cx="155" cy="135" r="2.4" fill="#FFFFFF" />
          <circle cx="120" cy="155" r="1.7" fill="#A855F7" />
          <circle cx="65" cy="95" r="1.2" fill="#FFFFFF" />
          <circle cx="165" cy="105" r="1.5" fill="#FFFFFF" />
          <circle cx="110" cy="55" r="2.0" fill="#34D399" />
          <circle cx="130" cy="100" r="1.4" fill="#FFFFFF" />
          <circle cx="85" cy="150" r="1.3" fill="#38BDF8" />
          <circle cx="145" cy="120" r="1.8" fill="#FFFFFF" />
          <circle cx="105" cy="140" r="1.5" fill="#FB7185" />
          <circle cx="125" cy="80" r="1.9" fill="#FFFFFF" filter="drop-shadow(0 0 3px #fff)" />
        </svg>

        {/* Realistic Glass Specular Surface Reflections */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '28px',
          width: '75px',
          height: '42px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 70%)',
          transform: 'rotate(-32deg)',
          pointerEvents: 'none',
        }} />

        {/* Secondary Lower Glass Reflection */}
        <div style={{
          position: 'absolute',
          bottom: '18px',
          right: '32px',
          width: '50px',
          height: '24px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.45) 0%, transparent 70%)',
          transform: 'rotate(24deg)',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  );
}

/**
 * ImaginePreview - Replicates Image 2
 * Creative showcase collage: Left large golden-hour portrait, Top right "La Belle Vie" editorial magazine, Bottom right white athletic sneaker.
 */
export function ImaginePreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#090A0D',
      padding: '8px',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: '8px',
    }}>
      {/* Left Large Card: Golden Hour Portrait */}
      <div style={{
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'linear-gradient(155deg, #382015 0%, #160D08 60%, #080503 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}>
        {/* Warm Golden Hour Ambient Glow */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.45) 0%, rgba(217, 119, 6, 0.2) 50%, transparent 75%)',
          filter: 'blur(20px)',
        }} />

        {/* Model Portrait Silhouette */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 1,
        }}>
          {/* Hair & Head glow */}
          <div style={{
            width: '68px',
            height: '84px',
            borderRadius: '50% 50% 45% 45%',
            background: 'linear-gradient(145deg, #FDE68A 0%, #F59E0B 40%, #B45309 100%)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Face highlight */}
            <div style={{
              position: 'absolute',
              top: '18px',
              left: '12px',
              width: '44px',
              height: '52px',
              borderRadius: '45%',
              background: 'linear-gradient(160deg, #FED7AA 0%, #FDBA74 60%, #EA580C 100%)',
            }} />
          </div>
          {/* Linen Shirt Shoulders */}
          <div style={{
            width: '120px',
            height: '50px',
            marginTop: '-6px',
            borderRadius: '20px 20px 0 0',
            background: 'linear-gradient(to bottom, #F8FAFC 0%, #E2E8F0 60%, #94A3B8 100%)',
            opacity: 0.9,
          }} />
        </div>
      </div>

      {/* Right Column: Two Stacked Cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        {/* Top Right Card: La Belle Vie Magazine */}
        <div style={{
          flex: 1,
          borderRadius: '10px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #271E19 0%, #15100D 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
          {/* Magazine Cover Card held in hands */}
          <div style={{
            width: '100px',
            height: '115px',
            borderRadius: '6px',
            backgroundColor: '#FBF8F3',
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '8px 6px',
            boxSizing: 'border-box',
            transform: 'rotate(-2deg)',
          }}>
            <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.8px', color: '#1E1B18', fontFamily: 'serif' }}>
              La Belle Vie
            </span>
            {/* Seaside perfume photo on cover */}
            <div style={{
              width: '100%',
              flex: 1,
              marginTop: '5px',
              borderRadius: '3px',
              background: 'linear-gradient(to bottom, #93C5FD 0%, #FDBA74 60%, #3B82F6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ width: '16px', height: '24px', backgroundColor: '#FEF08A', borderRadius: '2px', border: '1px solid #FFFFFF' }} />
            </div>
            <span style={{ fontSize: '5px', color: '#78716C', marginTop: '3px' }}>Eau de Parfum</span>
          </div>
        </div>

        {/* Bottom Right Card: White Athletic Sneaker */}
        <div style={{
          flex: 1,
          borderRadius: '10px',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, #181A1E 0%, #0D0E11 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
          {/* Shoe Box Backdrop */}
          <div style={{
            position: 'absolute',
            top: '8px',
            width: '85px',
            height: '24px',
            backgroundColor: '#090A0C',
            borderRadius: '3px',
            border: '1px solid rgba(255,255,255,0.06)',
          }} />

          {/* White Sneaker Silhouette */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 1,
          }}>
            <div style={{
              width: '95px',
              height: '34px',
              borderRadius: '8px 24px 6px 12px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 50%, #E2E8F0 100%)',
              boxShadow: '0 6px 16px rgba(0,0,0,0.6)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Sole */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '8px',
                backgroundColor: '#F8FAFC',
                borderRadius: '0 0 6px 12px',
                borderTop: '1px solid #CBD5E1',
              }} />
              {/* Laces */}
              <div style={{
                position: 'absolute',
                top: '4px',
                right: '28px',
                width: '18px',
                height: '10px',
                borderBottom: '2px solid #94A3B8',
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * BuildPreview - Terminal & autonomous code execution mockup
 */
export function BuildPreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#0B0D11',
      padding: '16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-mono, monospace)',
      fontSize: '12px',
      color: '#E2E8F0',
      overflow: 'hidden',
    }}>
      {/* Terminal Title Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
        <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
        <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
        <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10B981' }} />
        <span style={{ marginLeft: '8px', fontSize: '11px', color: '#64748B' }}>devin-cli — v2.4</span>
      </div>

      <div style={{ color: '#38BDF8', marginBottom: '8px' }}>
        $ devin build --target autonomous
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: '#94A3B8', fontSize: '11.5px' }}>
        <div><span style={{ color: '#10B981' }}>✓</span> Analyzed dependency graph (482 modules)</div>
        <div><span style={{ color: '#10B981' }}>✓</span> Isolated sandbox container provisioned</div>
        <div><span style={{ color: '#10B981' }}>✓</span> Generated 6 unit tests with 100% coverage</div>
      </div>

      {/* Diff Box */}
      <div style={{
        marginTop: '12px',
        backgroundColor: '#13161C',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '10px 12px',
        fontSize: '11px',
        lineHeight: '1.6',
      }}>
        <div style={{ color: '#EF4444' }}>- const auth = legacyAuth(req);</div>
        <div style={{ color: '#10B981' }}>+ const auth = await enterpriseSSO.verify(req);</div>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981' }} />
        <span style={{ fontSize: '11px', color: '#10B981' }}>PR #2922 ready to merge</span>
      </div>
    </div>
  );
}

/**
 * BotPreview - Autonomous agent session mockup
 */
export function BotPreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#0B0D11',
      padding: '16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      {/* Session Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '10px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#F1F5F9' }}>Devin Session #4829</span>
        </div>
        <span style={{ fontSize: '11px', color: '#38BDF8', backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>
          Autonomous
        </span>
      </div>

      {/* Task Description */}
      <div style={{
        backgroundColor: '#13161C',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '12px',
      }}>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px' }}>
          Configure Okta SAML 2.0 Identity Provider
        </div>
        <p style={{ fontSize: '11.5px', color: '#94A3B8', margin: 0, lineHeight: 1.4 }}>
          Auto-generating identity middleware, mocking IdP responses, and executing browser authentication flow.
        </p>
      </div>

      {/* Mini Virtual Browser Bar */}
      <div style={{
        backgroundColor: '#161922',
        borderRadius: '8px',
        padding: '10px 12px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '11px', color: '#94A3B8' }}>Test playback (macOS VM)</span>
        <span style={{ fontSize: '11px', color: '#38BDF8', fontWeight: 500 }}>Recorded & Verified ✓</span>
      </div>
    </div>
  );
}
