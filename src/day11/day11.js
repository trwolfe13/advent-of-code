const move = {
  'n': ([x, y]) => [x, y - 1], 's': ([x, y]) => [x, y + 1],
  'nw': ([x, y]) => [x - 1, y], 'sw': ([x, y]) => [x - 1, y + 1],
  'ne': ([x, y]) => [x + 1, y - 1], 'se': ([x, y]) => [x + 1, y],
};

function distance(e) {
  return Math.sign(e[0]) === Math.sign(e[1]) ? Math.abs(e[0]) + Math.abs(e[1]) : Math.max(Math.abs(e[0]), Math.abs(e[1]));
}

module.exports = {
  move,
  part1: function (input) {
    let c = [0, 0];
    input.split(',').forEach(s => c = move[s](c));
    return distance(c);
  },
  part2: function (input) {
    let c = [0, 0];
    return Math.max(...input.split(',').map(s => distance(c = move[s](c))));
  }
}