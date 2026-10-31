import React, { useEffect, useRef, useId } from 'react';

// Math helpers
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const degToRad = (d) => (d * Math.PI) / 180;

/** 3D Vector spinning in plane */
function spin(u, v, angle) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return [
    [u[0] * c + v[0] * s, u[1] * c + v[1] * s, u[2] * c + v[2] * s],
    [v[0] * c - u[0] * s, v[1] * c - u[1] * s, v[2] * c - u[2] * s],
  ];
}

/**
 * 3D spherical tangent projection for eye poses.
 * Center of the sphere: (600, 560), radius: 480.
 * Calculates exact screen-space coordinates, 2x2 tangent matrix, and depth.
 */
function computeEyePoses(gaze, scale = 410, split = 17) {
  let f = [0, 0, 1];
  let right = [1, 0, 0];
  let down = [0, 1, 0];

  [f, right] = spin(f, right, degToRad(gaze.yaw));
  [down, f] = spin(down, f, degToRad(gaze.pitch));
  [right, down] = spin(right, down, degToRad(gaze.roll));

  const build = (side) => {
    const [ef, er] = spin(f, right, degToRad(split * side));
    return {
      x: ef[0] * scale,
      y: ef[1] * scale,
      a: er[0],
      b: er[1],
      c: down[0],
      d: down[1],
      depth: ef[2],
    };
  };

  return [build(-1), build(1)];
}

/** Generates SVG capsule path centered at origin */
function getCapsulePath(w, h, isHorizontal = false) {
  if (isHorizontal || w > h) {
    const r = h / 2;
    const s = Math.max(0, w / 2 - r);
    return `M ${-s.toFixed(2)} ${(-r).toFixed(2)} L ${s.toFixed(2)} ${(-r).toFixed(2)} A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${s.toFixed(2)} ${r.toFixed(2)} L ${(-s).toFixed(2)} ${r.toFixed(2)} A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${(-s).toFixed(2)} ${(-r).toFixed(2)} Z`;
  }
  const r = w / 2;
  const s = Math.max(0, h / 2 - r);
  return `M ${(-r).toFixed(2)} ${(-s).toFixed(2)} A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${r.toFixed(2)} ${(-s).toFixed(2)} L ${r.toFixed(2)} ${s.toFixed(2)} A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${(-r).toFixed(2)} ${s.toFixed(2)} Z`;
}

/**
 * 16 Authentic Expressions scaled for the giant circle bot dome
 */
const EXPRESSIONS = {
  neutral: {
    gaze: { yaw: 0, pitch: 18, roll: 0 },
    split: 17,
    eyes: [
      { w: 80, h: 175, tilt: 0, open: 1 },
      { w: 80, h: 175, tilt: 0, open: 1 },
    ],
  },
  attentive: {
    gaze: { yaw: 2, pitch: 22, roll: -2 },
    split: 16.5,
    eyes: [
      { w: 86, h: 185, tilt: 0, open: 1 },
      { w: 86, h: 185, tilt: 0, open: 1 },
    ],
  },
  surprised: {
    gaze: { yaw: 0, pitch: 22, roll: 0 },
    split: 18.5,
    eyes: [
      { w: 140, h: 170, tilt: 0, open: 1 },
      { w: 140, h: 170, tilt: 0, open: 1 },
    ],
  },
  excited: {
    gaze: { yaw: 4, pitch: 26, roll: 0 },
    split: 19,
    eyes: [
      { w: 120, h: 200, tilt: -8, open: 1 },
      { w: 120, h: 200, tilt: 8, open: 1 },
    ],
  },
  happy: {
    gaze: { yaw: 0, pitch: 20, roll: 0 },
    split: 17.5,
    eyes: [
      { w: 110, h: 75, tilt: 16, open: 1 },
      { w: 110, h: 75, tilt: -16, open: 1 },
    ],
  },
  laughing: {
    gaze: { yaw: 0, pitch: 24, roll: 0 },
    split: 18,
    eyes: [
      { w: 125, h: 60, tilt: 22, open: 1 },
      { w: 125, h: 60, tilt: -22, open: 1 },
    ],
  },
  curious: {
    gaze: { yaw: 14, pitch: 20, roll: -12 },
    split: 17,
    eyes: [
      { w: 96, h: 185, tilt: -8, open: 1 },
      { w: 80, h: 160, tilt: -8, open: 1 },
    ],
  },
  proud: {
    gaze: { yaw: 2, pitch: 24, roll: 0 },
    split: 17.5,
    eyes: [
      { w: 115, h: 70, tilt: 18, open: 1 },
      { w: 115, h: 70, tilt: -18, open: 1 },
    ],
  },
  shy: {
    gaze: { yaw: -16, pitch: 10, roll: -6 },
    split: 15,
    eyes: [
      { w: 72, h: 135, tilt: 0, open: 0.88 },
      { w: 72, h: 135, tilt: 0, open: 0.88 },
    ],
  },
  sleepy: {
    gaze: { yaw: 4, pitch: 12, roll: -2 },
    split: 16.5,
    eyes: [
      { w: 82, h: 160, tilt: 0, open: 0.32 },
      { w: 82, h: 160, tilt: 0, open: 0.32 },
    ],
  },
  confused: {
    gaze: { yaw: -12, pitch: 18, roll: 8 },
    split: 17,
    eyes: [
      { w: 82, h: 180, tilt: -16, open: 1 },
      { w: 108, h: 75, tilt: 14, open: 1 },
    ],
  },
  scared: {
    gaze: { yaw: 0, pitch: 16, roll: 0 },
    split: 20,
    eyes: [
      { w: 145, h: 215, tilt: 0, open: 1.05 },
      { w: 145, h: 215, tilt: 0, open: 1.05 },
    ],
  },
  wary: {
    gaze: { yaw: 10, pitch: 16, roll: -6 },
    split: 16.5,
    eyes: [
      { w: 84, h: 165, tilt: 0, open: 1 },
      { w: 90, h: 68, tilt: 0, open: 0.7 },
    ],
  },
  sad: {
    gaze: { yaw: 0, pitch: 14, roll: 0 },
    split: 16.5,
    eyes: [
      { w: 88, h: 165, tilt: -24, open: 1 },
      { w: 88, h: 165, tilt: 24, open: 1 },
    ],
  },
  angry: {
    gaze: { yaw: 0, pitch: 22, roll: 0 },
    split: 17.5,
    eyes: [
      { w: 125, h: 65, tilt: 28, open: 1 },
      { w: 125, h: 65, tilt: -28, open: 1 },
    ],
  },
  bored: {
    gaze: { yaw: -18, pitch: 15, roll: 0 },
    split: 16.5,
    eyes: [
      { w: 110, h: 55, tilt: 0, open: 0.9 },
      { w: 110, h: 55, tilt: 0, open: 0.9 },
    ],
  },
};

const STATE_KEYS = Object.keys(EXPRESSIONS);

/**
 * BigBot Component:
 * - Sits at the bottom of the CTA section like a glowing horizon dome
 * - Top half of circle body visible, bottom half gracefully submerged behind the footer
 * - Full, unbroken, perfectly centered circle with zero edge-clipping
 * - Continuously cycles through authentic moods/states with organic 60fps interpolation
 * - Smoothly tracks user's cursor across the viewport with spherical 3D rotation
 */
export default function BigBot({
  radius = 1600,
  strokeWidth = 2.25,
  color = '#38BDF9',
  eyeColor = '#0A0B0E',
  initialState = 'neutral',
  className = '',
  style = {},
}) {
  const containerRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const clipId = useId().replace(/:/g, '_');

  // Target and current animated state
  const targetStateRef = useRef(initialState);

  // Physics animation state (smooth 60fps lerp)
  const animStateRef = useRef({
    gaze: { ...EXPRESSIONS[initialState].gaze, split: EXPRESSIONS[initialState].split },
    eyes: [
      { ...EXPRESSIONS[initialState].eyes[0] },
      { ...EXPRESSIONS[initialState].eyes[1] },
    ],
    pointer: { yaw: 0, pitch: 0, mix: 0 },
    targetPointer: { yaw: 0, pitch: 0, mix: 0 },
    blink: { isBlinking: false, startTime: 0, duration: 180 },
  });

  // Autonomous state cycle between expressions every 3.8 to 6.8 seconds
  useEffect(() => {
    let timeoutId;
    const cycleState = () => {
      const keys = STATE_KEYS;
      let nextState;
      do {
        nextState = keys[Math.floor(Math.random() * keys.length)];
      } while (nextState === targetStateRef.current && keys.length > 1);

      targetStateRef.current = nextState;
      const nextDuration = 3800 + Math.random() * 3000;
      timeoutId = setTimeout(cycleState, nextDuration);
    };

    timeoutId = setTimeout(cycleState, 4500);
    return () => clearTimeout(timeoutId);
  }, []);

  // Natural intermittent blinking
  useEffect(() => {
    let blinkTimeout;
    const triggerBlink = () => {
      animStateRef.current.blink.isBlinking = true;
      animStateRef.current.blink.startTime = performance.now();
      animStateRef.current.blink.duration = 160 + Math.random() * 40;

      blinkTimeout = setTimeout(triggerBlink, 3200 + Math.random() * 3800);
    };

    blinkTimeout = setTimeout(triggerBlink, 2800);
    return () => clearTimeout(blinkTimeout);
  }, []);

  // Continuous pointer tracking across viewport
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const botCenterX = rect.left + rect.width / 2;
      const botCenterY = rect.top + rect.height; // Center point of the circle on bottom baseline

      const dx = e.clientX - botCenterX;
      const dy = e.clientY - botCenterY;
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        // Cosine falloff: 1 at direct proximity, smoothly reaching 0 at radius boundary
        const proximity = Math.cos((dist / radius) * (Math.PI / 2));
        const maxAngle = 32;
        const normDist = Math.max(dist, 40);
        const yaw = clamp((dx / normDist) * maxAngle * proximity, -maxAngle, maxAngle);
        const pitch = clamp((-dy / normDist) * (maxAngle * 0.8) * proximity, -maxAngle * 0.8, maxAngle * 0.8);

        animStateRef.current.targetPointer = { yaw, pitch, mix: proximity };
      } else {
        animStateRef.current.targetPointer = { yaw: 0, pitch: 0, mix: 0 };
      }
    };

    const handlePointerLeave = () => {
      animStateRef.current.targetPointer = { yaw: 0, pitch: 0, mix: 0 };
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    // 60fps locked interpolation and direct DOM rendering loop
    let animId;
    const updateLoop = (now) => {
      const state = animStateRef.current;
      const tgtMood = EXPRESSIONS[targetStateRef.current] || EXPRESSIONS.neutral;

      // 1. Smooth pointer interpolation
      state.pointer.yaw = lerp(state.pointer.yaw, state.targetPointer.yaw, 0.08);
      state.pointer.pitch = lerp(state.pointer.pitch, state.targetPointer.pitch, 0.08);
      state.pointer.mix = lerp(state.pointer.mix, state.targetPointer.mix, 0.07);

      // 2. Smooth mood gaze interpolation
      state.gaze.yaw = lerp(state.gaze.yaw, tgtMood.gaze.yaw, 0.05);
      state.gaze.pitch = lerp(state.gaze.pitch, tgtMood.gaze.pitch, 0.05);
      state.gaze.roll = lerp(state.gaze.roll, tgtMood.gaze.roll, 0.05);
      state.gaze.split = lerp(state.gaze.split, tgtMood.split || 17, 0.05);

      // 3. Smooth eye dimension and tilt morphing
      for (let i = 0; i < 2; i++) {
        const tgtEye = tgtMood.eyes[i];
        state.eyes[i].w = lerp(state.eyes[i].w, tgtEye.w, 0.07);
        state.eyes[i].h = lerp(state.eyes[i].h, tgtEye.h, 0.07);
        state.eyes[i].tilt = lerp(state.eyes[i].tilt, tgtEye.tilt || 0, 0.07);
        state.eyes[i].open = lerp(state.eyes[i].open, tgtEye.open !== undefined ? tgtEye.open : 1, 0.07);
      }

      // 4. Smooth biological blink curve
      let blinkFactor = 1.0;
      if (state.blink.isBlinking) {
        const elapsed = now - state.blink.startTime;
        const progress = elapsed / state.blink.duration;
        if (progress >= 1.0) {
          state.blink.isBlinking = false;
        } else if (progress < 0.45) {
          blinkFactor = lerp(1.0, 0.08, progress / 0.45);
        } else {
          blinkFactor = lerp(0.08, 1.0, (progress - 0.45) / 0.55);
        }
      }

      // 5. Composite effective spherical gaze
      const effectiveYaw = state.gaze.yaw + state.pointer.yaw * state.pointer.mix;
      const effectivePitch = state.gaze.pitch + state.pointer.pitch * state.pointer.mix;
      const effectiveRoll = state.gaze.roll;

      // 6. Compute 3D eye projection matrices (scale: 410 around sphere cx=600, cy=560)
      const poses = computeEyePoses(
        { yaw: effectiveYaw, pitch: effectivePitch, roll: effectiveRoll },
        410,
        state.gaze.split
      );

      // 7. Update SVG Paths directly for zero GC pressure and locked 60fps rendering
      const applyEyeTransform = (pose, tilt) => {
        let { a, b, c, d, x, y } = pose;
        if (tilt !== 0) {
          const cosT = Math.cos(degToRad(tilt));
          const sinT = Math.sin(degToRad(tilt));
          const newA = a * cosT - c * sinT;
          const newB = b * cosT - d * sinT;
          const newC = a * sinT + c * cosT;
          const newD = b * sinT + d * cosT;
          a = newA;
          b = newB;
          c = newC;
          d = newD;
        }
        const posX = (600 + x).toFixed(2);
        const posY = (560 + y).toFixed(2);
        return `matrix(${a.toFixed(4)}, ${b.toFixed(4)}, ${c.toFixed(4)}, ${d.toFixed(4)}, ${posX}, ${posY})`;
      };

      const leftH = Math.max(8, state.eyes[0].h * state.eyes[0].open * blinkFactor);
      const rightH = Math.max(8, state.eyes[1].h * state.eyes[1].open * blinkFactor);

      const leftD = getCapsulePath(state.eyes[0].w, leftH);
      const rightD = getCapsulePath(state.eyes[1].w, rightH);

      const leftTransform = applyEyeTransform(poses[0], state.eyes[0].tilt);
      const rightTransform = applyEyeTransform(poses[1], state.eyes[1].tilt);

      if (leftEyeRef.current) {
        leftEyeRef.current.setAttribute('d', leftD);
        leftEyeRef.current.setAttribute('transform', leftTransform);
      }
      if (rightEyeRef.current) {
        rightEyeRef.current.setAttribute('d', rightD);
        rightEyeRef.current.setAttribute('transform', rightTransform);
      }

      animId = requestAnimationFrame(updateLoop);
    };

    animId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(animId);
    };
  }, [radius]);

  // Initial computed poses for immediate mount / SSR render
  const initialMood = EXPRESSIONS[initialState] || EXPRESSIONS.neutral;
  const initialPoses = computeEyePoses(initialMood.gaze, 410, initialMood.split);
  const initialLeftD = getCapsulePath(initialMood.eyes[0].w, initialMood.eyes[0].h);
  const initialRightD = getCapsulePath(initialMood.eyes[1].w, initialMood.eyes[1].h);

  return (
    <div
      ref={containerRef}
      className={`big-bot-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        marginInline: 'auto',
        aspectRatio: '2 / 1', // 2:1 ratio: top half of circle visible, bottom half submerged
        overflow: 'hidden',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        ...style,
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          overflow: 'visible',
          color: color || 'var(--color-bot-stroke, #38BDF9)',
        }}
      >
        <defs>
          <clipPath id={`bigbot-clip-${clipId}`}>
            <circle cx="600" cy="560" r="480" />
          </clipPath>
        </defs>

        <g>
          {/* Main Full Circle Body - Solid #38BDF9 filled silhouette just like hero bot */}
          <circle
            cx="600"
            cy="560"
            r="480"
            fill={color}
          />

          {/* Eyes clipped inside the body silhouette */}
          <g clipPath={`url(#bigbot-clip-${clipId})`} className="big-bot-eyes">
            {/* Left Eye Solid Capsule */}
            <path
              ref={leftEyeRef}
              d={initialLeftD}
              transform={`matrix(${initialPoses[0].a.toFixed(4)}, ${initialPoses[0].b.toFixed(4)}, ${initialPoses[0].c.toFixed(4)}, ${initialPoses[0].d.toFixed(4)}, ${(600 + initialPoses[0].x).toFixed(2)}, ${(560 + initialPoses[0].y).toFixed(2)})`}
              fill={eyeColor}
            />

            {/* Right Eye Solid Capsule */}
            <path
              ref={rightEyeRef}
              d={initialRightD}
              transform={`matrix(${initialPoses[1].a.toFixed(4)}, ${initialPoses[1].b.toFixed(4)}, ${initialPoses[1].c.toFixed(4)}, ${initialPoses[1].d.toFixed(4)}, ${(600 + initialPoses[1].x).toFixed(2)}, ${(560 + initialPoses[1].y).toFixed(2)})`}
              fill={eyeColor}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
