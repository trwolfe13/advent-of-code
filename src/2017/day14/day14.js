const day10 = require('../day10/day10');

function toBinary(hex) {
  const bits = [];
  for (var n = 0; n < hex.length; n++) {
    bits.push(...parseInt(hex[n], 16).toString(2).padStart(4, '0').split('').map(Number));
  }
  return bits;
}

module.exports = {
  toBinary,
  part1: function (input) {
    return[...Array(128).keys()].map(k => day10.part2(input + '-' + k.toString())).map(toBinary).map(b => b.filter(i => i).length).reduce((p, c) => p + c, 0);
  },
  part2: function (input) {
    return 0;
  }
}