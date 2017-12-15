function gen(f, m = 1) {
  return s => {
    let n = s;
    do { n = (n * f) % 2147483647; } while ((n % m) !== 0)
    return n;
  }
}

function count(a, b, c, am = 1, bm = 1) {
  const ag = gen(16807, am), bg = gen(48271, bm);
  let t = 0, ap = a, bp = b;
  for (let n = 0; n < c; n++) {
    if ((ap & 65535) === (bp & 65535)) { t++; }
    ap = ag(ap); bp = bg(bp);
  }
  return t;
}

module.exports = {
  part1: function (a, b, c) {
    return count(a, b, c);
  },
  part2: function (a, b, c) {
    return count(a, b, c, 4, 8);
  }
}