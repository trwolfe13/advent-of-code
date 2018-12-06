const _ = require('lodash');

const sectors = require('./sectors');

module.exports = function (input) {
  const coords = sectors.parse(input);
  const grid = sectors.buildGrid(coords, 20);
  sectors.mapSectors(grid, coords);
  const possibleSectors = sectors.finiteSectors(grid, coords);
  const sizes = sectors.sectorSizes(grid, possibleSectors);
  return _.max(sizes.map(s => s.size));
}