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

const largestSquare = (power, size) => {
  let total = 0, coords = [];
  for (let y = 0; y < power.length - size; y++) {
    for (let x = 0; x < power[y].length - size; x++) {
      const nTotal = array.squareSum(power, x, y, size);
      if (nTotal > total) {
        total = nTotal;
        coords = [x + 1, y + 1];
      }
    }
  }
  return { coords, size, total };
}

module.exports = {
  largestSquare,
  powerMap
};
