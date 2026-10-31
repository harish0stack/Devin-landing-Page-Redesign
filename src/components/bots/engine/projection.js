/**
 * 3D spherical projection and kinematic math engine for GrokBot and BigBot.
 */

export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
export const degToRad = (d) => (d * Math.PI) / 180;

/** 3D Vector spinning in plane */
export function spin(u, v, angle) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return [
    [u[0] * c + v[0] * s, u[1] * c + v[1] * s, u[2] * c + v[2] * s],
    [v[0] * c - u[0] * s, v[1] * c - u[1] * s, v[2] * c - u[2] * s],
  ];
}

/**
 * 3D spherical tangent projection for eye poses.
 * Calculates exact screen-space coordinates, 2x2 tangent matrix, and depth.
 */
export function computeEyePoses(gaze, scale = 100, split = 15.46) {
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
      z: ef[2],
      tanX: [er[0], er[1]],
      tanY: [down[0], down[1]],
    };
  };

  return {
    left: build(-1),
    right: build(1),
  };
}

