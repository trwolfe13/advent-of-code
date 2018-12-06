const _ = require('lodash');

const array = require('../../util/array');
const points = require('../../util/points');
const string = require('../../util/string');

const parse = input => string.lines(input).map((n, id) => ({ id, coord: n.split(', ').map(Number) }));

const buildGrid = (coords, buffer) => array.grid(
  _.max(coords.map(c => c.coord[0])) + buffer,
  _.max(coords.map(c => c.coord[1])) + buffer
);

const mapSectors = (grid, coords) => {
  grid.forEach((row, y) => {
    row.forEach((_c, x) => {
      const distances = coords.map(c => ({ ...c, distance: points.manhattan([x, y], c.coord) }));
      const shortest = _.min(distances.map(d => d.distance));
      const closestCoords = distances.filter(d => d.distance === shortest);
      grid[y][x] = closestCoords.length > 1 ? '.' : closestCoords[0].id;
    });
  });
}

const sectorSize = (grid, index) => grid.reduce((p, c) => p + c.filter(n => n === index).length, 0)
const sectorSizes = (grid, coords) => coords.map(c => ({ ...c, size: sectorSize(grid, c.id) }));

const finiteSectors = (grid, coords) => {
  const edges = _.uniq([
    ...grid[0],
    ...grid[grid.length - 1],
    ...grid.map(n => n[0]),
    ...grid.map(n => n[n.length - 1])
  ]);
  return coords.filter((_, i) => !edges.includes(i));
};

module.exports = function (input) {
  // input = '1, 1\n1, 6\n8, 3\n3, 4\n5, 5\n8, 9';
  const coords = parse(input);
  const grid = buildGrid(coords, 20);
  mapSectors(grid, coords);
  const possibleSectors = finiteSectors(grid, coords);
  const sizes = sectorSizes(grid, possibleSectors);
  return _.max(sizes.map(s => s.size));
}