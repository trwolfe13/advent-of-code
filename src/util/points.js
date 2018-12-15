
const coerceToPoint = p => isNaN(p[0]) ? p : { x: p[0], y: p[1] };

module.exports = {
  manhattan: (p1, p2) => {
    const point1 = coerceToPoint(p1);
    const point2 = coerceToPoint(p2);
    return Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y);
  }
};
