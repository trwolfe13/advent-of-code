function g(f, s, m = 1) {
  let n = s;
  return () => {
    do { n = (n * f) % 0x7FFFFFFF; } while ((n % m) !== 0)
    return n & 0xFFFF;
  }
}
function t(a, b, c, am = 1, bm = 1) {
  const ag = g(16807, a, am), bg = g(48271, b, bm);
  return [...Array(c).keys()].filter(() => ag() === bg()).length;
}
module.exports = {
  part1: () => t(618, 814, 40000000),
  part2: () => t(618, 814, 5000000, 4, 8)
}