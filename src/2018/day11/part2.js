const array = require('../../util/array');
const power = require('./power');

module.exports = function (input) {
  const grid = array.grid(300, 300);
  const serial = Number(input);
  const p = power.powerMap(grid, serial);
  let lSquare;
  for (let size = 1; size <= p.length; size++) {
    const n = power.largestSquare(p, size);
    if (!lSquare || n.total > lSquare.total) {
      lSquare = n;
    }
  }
  return `${lSquare.coords[0]},${lSquare.coords[1]},${lSquare.size}}`;
}