function spin (t) {
  let b = [0], p = 0;
  for (let n = 1; n < 2018; n++) {
    b.splice(p = (p + t) % b.length + 1, 0, n);
  }
  return b[p + 1 % b.length];
}

function spin2 (t) {
  let p = 0, o = 1;
  for (let n = 1; n < 50000000; n++) {
    if ((p = (p + t) % n + 1) === 1) { o = n; }
  }
  return o;
}

module.exports = {
  part1: i => spin(i),
  part2: i => spin2(i),
}