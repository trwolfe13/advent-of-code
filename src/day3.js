const _ = require('lodash');

function spiral(maxNumber) {
  const layers = Math.ceil((Math.ceil(Math.sqrt(maxNumber)) - 1) / 2 + 1);
  return [
    [0, 0]
    [1, 0],
    [1, -1]
  ];
}

module.exports = {
  spiral,
  part1: function (sequence) {
    // TODO: Solve problem.
    return 0;
  },
  part2: function (sequence) {
    // TODO: Solve problem.
    return 0;
  }
}