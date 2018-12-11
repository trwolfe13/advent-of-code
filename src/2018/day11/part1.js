const array = require('../../util/array');

const power = (x, y, serial) => {
  const rackId = x + 10;
  const f = ((rackId * y + serial) * rackId).toString();
  return Number(f[f.length - 3]) - 5;
}

const powerMap = (grid, serial) => {
  const g = [];
  grid.forEach((row, y) => {
    const r = [];
    row.forEach((cell, x) => {
      r.push(power(x + 1, y + 1, serial))
    });
    g.push(r);
  });
  return g;
};

const largestSquare = power => {
  let total = 0, coords = [];
  for (let y = 0; y < power.length - 3; y++) {
    for (let x = 0; x < power[y].length - 3; x++) {
      const nTotal = array.squareSum(power, x, y, 3);
      if (nTotal > total) {
        total = nTotal;
        coords = [x + 1, y + 1];
      }
    }
  }
  console.log(coords, total);
}

module.exports = function (input) {
  const grid = array.grid(300, 300);
  const serial = 5535;
  const power = powerMap(grid, serial);
  return largestSquare(power);
  return undefined;
}