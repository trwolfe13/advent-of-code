const day10 = require('../day10/day10');

const list = n => [...Array(n).keys()];
const hash = i => k => day10.part2(`${i}-${k}`)
const truthCount = a => a.filter(e => e).length;
const sum = (p, c) => p + c;
const concat = (p, c) => p.concat(c);
const hex2bin = hex => hex.split('').map(h => parseInt(h, 16).toString(2).padStart(4, '0').split('').map(Number)).reduce(concat);
const binary = i => list(128).map(hash(i)).map(hex2bin);

module.exports = {
  toBinary: hex2bin,
  part1: function (input) {
    return binary(input).map(truthCount).reduce(sum, 0);
  },
  part2: function (input) {
    const d = binary(input);
    console.log(d.map(f => f.map(String).join('')).join('\n'));
  }
}