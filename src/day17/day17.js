function spin (t) {
  let b = [0], p = 0;
  for (let n = 1; n < 2018; n++) {
    b.splice(p = (p + t) % b.length + 1, 0, n);
  }
  return b[p + 1 % b.length];
}

module.exports = {
  part1: i => spin(i),
  part2: i => 0,
}