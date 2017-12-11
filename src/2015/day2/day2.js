module.exports = {
  part1: function (input) {
    return input.split('\n').reduce((p, c) => {
      const [l, w, h] = [...c.split('x').map(Number)];
      const s = [l * w, w * h, h * l];
      return p + s.map(f => f * 2).reduce((pf, cf) => pf + cf, 0) + Math.min(...s);
    }, 0);
  },
  part2: function (input) {
    return 0;
  }
}