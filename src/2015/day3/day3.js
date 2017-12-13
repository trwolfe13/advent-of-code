const move = {
  '<': c => [c[0] - 1, c[1]],
  '>': c => [c[0] + 1, c[1]],
  'v': c => [c[0], c[1] + 1],
  '^': c => [c[0], c[1] - 1],
};
module.exports = {
  part1: function (input) {
    const p = [];
    let c = [0, 0];
    input.split('').forEach(d => {
      if (!p[c[0]]) p[c[0]] = [];
      p[c[0]][c[1]] = (p[c[0]][c[1]] || 0) + 1;
      c = move[d](c);
    });
    return p.filter(n => n).reduce((p, c) => p + c.filter(n => n).length, 0);
  },
  part2: function (input) {
    return 0;
  }
}