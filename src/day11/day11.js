const move = {
  'n': ([x, y]) => [x, y - 1],
  's': ([x, y]) => [x, y + 1],
  'nw': ([x, y]) => [x - 1, y],
  'sw': ([x, y]) => [x - 1, y + 1],
  'ne': ([x, y]) => [x + 1, y - 1],
  'se': ([x, y]) => [x + 1, y],
};

function distance(end, start = [0, 0]) {
  const dx = end[0] - start[0];
  const dy = end[1] - start[0];
  if (Math.sign(dx) === Math.sign(dy)) {
    return Math.abs(dx) + Math.abs(dy);
  } else {
    return Math.max(Math.abs(dx), Math.abs(dy));
  }
}

module.exports = {
  move,
  part1: function (input) {
    let coord = [0, 0];
    input.split(',').forEach(step => {
      coord = move[step](coord);
    });
    return distance(coord);
  },
  part2: function (input) {
    let max = 0;
    let coord = [0, 0];
    input.split(',').forEach(step => {
      coord = move[step](coord);
      max = Math.max(max, distance(coord));
    });
    return max;
  }
}