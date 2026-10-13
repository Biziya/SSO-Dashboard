/**
 * Geometry of the status circle (viewBox 0 0 100 100).
 *
 * The fill starts at the bottom-left of the circle, 7:30 on a clock face,
 * and sweeps clockwise in proportion to the percentage.
 */

export const center = 50;
export const radius = 40;

/** 7:30 on a clock, in SVG degrees (0 = 3 o'clock, increasing clockwise). */
const startAngle = 135;

interface Point {
  x: number;
  y: number;
}

function pointAt(angleDegrees: number): Point {
  const radians = (angleDegrees * Math.PI) / 180;
  return {
    x: Number((center + radius * Math.cos(radians)).toFixed(3)),
    y: Number((center + radius * Math.sin(radians)).toFixed(3)),
  };
}

/**
 * The filled wedge for a percentage: null when empty, "full" when complete,
 * otherwise an SVG path from the centre along the arc.
 */
export function progressWedge(percent: number): string | 'full' | null {
  const clamped = Math.min(Math.max(percent, 0), 100);

  if (clamped === 0) {
    return null;
  }

  if (clamped === 100) {
    return 'full';
  }

  const sweep = (clamped / 100) * 360;
  const start = pointAt(startAngle);
  const end = pointAt(startAngle + sweep);
  const largeArc = sweep > 180 ? 1 : 0;

  return `M${center},${center} L${start.x},${start.y} A${radius},${radius} 0 ${largeArc} 1 ${end.x},${end.y} Z`;
}

/** Quarter marks drawn through the centre, on the diagonals where each 25% step ends. */
export const quarterMarks: Array<[Point, Point]> = [
  [pointAt(startAngle), pointAt(startAngle + 180)],
  [pointAt(startAngle + 90), pointAt(startAngle + 270)],
];
