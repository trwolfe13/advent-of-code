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

const hasLetter = points => {
  const length = 8;
  const b = bounds(points);
  for (let x = 0; x <= b.maxX; x++) {
    for (let y = b.minY; y <= b.maxY; y++) {

    }
  }
}

module.exports = function (input) {
  const points = parse(input);
  // console.log(points);

  let minBounds;

  for (let x = 1; x <= 10619; x++) {
    move(points);
    const b = bounds(points);
    if (!minBounds || b.width * b.height < minBounds.size) {
      minBounds = { size: b.width * b.height, bounds: b, seconds: x };
    }
  }

  let buffer = '';
  const b = bounds(points);
  for (let y = b.minY; y <= b.maxY; y++) {
    for (let x = b.minX; x <= b.maxX; x++) {
      if (points.find(p => p.position[0] === x && p.position[1] === y)) {
        buffer += '#';
      } else {
        buffer += '.';
      }
    }
    buffer += '\n';
  }
  return buffer;
}