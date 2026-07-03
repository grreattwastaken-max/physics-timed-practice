/** Sample a function into points for the SVG physics plotter. */
export function sample(
  fn: (x: number) => number,
  x0: number,
  x1: number,
  n = 80
): { x: number; y: number }[] {
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    const y = fn(x);
    if (Number.isFinite(y)) pts.push({ x, y });
  }
  return pts;
}

/** Clamp extreme values so 1/r-style curves stay plottable. */
export function clamped(
  fn: (x: number) => number,
  max: number
): (x: number) => number {
  return (x) => Math.max(-max, Math.min(max, fn(x)));
}
