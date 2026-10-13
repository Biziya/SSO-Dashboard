/**
 * Geometry of the status circle (viewBox 0 0 100 100).
 *
 * The circle is four equal quarters, each worth 25%. The fill starts in the
 * bottom-left quarter (at 6 o'clock) and runs clockwise:
 *   25% bottom-left, 50% + top-left, 75% + top-right, 100% all four.
 * Values in between fill the next quarter proportionally.
 */

export const center = 50;
export const radius = 40;

/** 6 o'clock, where the bottom-left quarter begins, in SVG degrees (0 = 3 o'clock, increasing clockwise). */
const startAngle = 90;

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

/**
 * The upright dividers (one horizontal, one vertical line) that split the
 * circle into its four quarters. Nothing is rotated: the fill wedge is
 * computed from its start angle above.
 */
export const crosshair: Array<[Point, Point]> = [
  [{ x: center - radius, y: center }, { x: center + radius, y: center }],
  [{ x: center, y: center - radius }, { x: center, y: center + radius }],
];
