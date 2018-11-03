function g(f, s, m) {
  let n = s;
  return () => {
    do { n = (n * f) % 0x7FFFFFFF; } while ((n % m) !== 0)
    return n & 0xFFFF;
  }
}
function t(a, b, c, am, bm) {
  const ag = g(16807, a, am), bg = g(48271, b, bm);
  return [...Array(c).keys()].filter(() => ag() === bg()).length;
}
module.exports = {
  part1: (a, b, c) => t(a, b, c, 1, 1),
  part2: (a, b, c) => t(a, b, c, 4, 8)
}