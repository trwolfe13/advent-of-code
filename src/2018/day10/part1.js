const message = require('./message');
const _ = require('lodash');

module.exports = function (input) {
  const points = message.parse(input);
  let minBounds;

  const smallest = message.minBounds(points);

  let buffer = '\n';
  for (let y = smallest.bounds.minY; y <= smallest.bounds.maxY; y++) {
    for (let x = smallest.bounds.minX; x <= smallest.bounds.maxX; x++) {
      if (smallest.points.find(p => p.position[0] === x && p.position[1] === y)) {
        buffer += '#';
      } else {
        buffer += '.';
      }
    }
    buffer += '\n';
  }
  return buffer;
}