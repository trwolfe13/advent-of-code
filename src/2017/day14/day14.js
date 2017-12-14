const day10 = require('../day10/day10');

function toBinary(hex) {
  return hex.split('').map(h => parseInt(h, 16).toString(2).padStart(4, '0').split('').map(Number)).reduce((p, c) => p.concat(c));
}

module.exports = {
  toBinary,
  part1: function (input) {
    return [...Array(128).keys()].map(k => day10.part2(`${input}-${k}`)).map(toBinary).map(b => b.filter(i => i).length).reduce((p, c) => p + c, 0);
  },
  part2: function (input) {
    return 0;
  }
}