const _ = require('lodash');

const sectors = require('./sectors');

module.exports = function (input) {
  // input = '1, 1\n1, 6\n8, 3\n3, 4\n5, 5\n8, 9';
  const coords = sectors.parse(input);
  const grid = sectors.buildGrid(coords, 20);
  sectors.mapRegion(grid, coords, 10000);
  return sectors.sectorSize(grid, 1);
}