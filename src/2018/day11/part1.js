const array = require('../../util/array');
const power = require('./power');

module.exports = function (input) {
  const grid = array.grid(300, 300);
  const serial = Number(input);
  const p = power.powerMap(grid, serial);
  const ls = power.largestSquare(p, 3)
  return `${ls.coords[0]},${ls.coords[1]}`;
}