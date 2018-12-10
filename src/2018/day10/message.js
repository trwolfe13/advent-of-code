const string = require('../../util/string');
const _ = require('lodash');

const parse = input => string.lines(input).map(line => {
  const [_, px, py, vx, vy] = line.match(/position=<\s*(-?\d+),\s*(-?\d+)> velocity=<\s*(-?\d+),\s*(-?\d+)>/)
  return { position: [Number(px), Number(py)], velocity: [Number(vx), Number(vy)] };
});

const move = points => points.forEach(point => {
  point.position[0] += point.velocity[0];
  point.position[1] += point.velocity[1];
});

const bounds = points => {
  const minX = _.min(points.map(p => p.position[0]));
  const minY = _.min(points.map(p => p.position[1]));
  const maxX = _.max(points.map(p => p.position[0]));
  const maxY = _.max(points.map(p => p.position[1]));
  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
};

const minBounds = points => {
  let min;
  for (let x = 1; x <= 11000; x++) {
    move(points);
    const b = bounds(points);
    if (!min || b.width * b.height < min.size) {
      min = { size: b.width * b.height, bounds: b, seconds: x, points: _.cloneDeep(points) };
    }
  }
  return min;
};

module.exports = {
  parse,
  move,
  bounds,
  minBounds
};