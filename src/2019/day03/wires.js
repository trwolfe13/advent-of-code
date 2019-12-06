const _ = require('lodash');

const Direction = {
  UP: 'U',
  DOWN: 'D',
  LEFT: 'L',
  RIGHT: 'R'
};

const parse = wire => wire.split(',').map(i => ({ direction: i[0], count: Number(i.slice(1)) }));

const expand = directions => {
  let current = { x: 0, y: 0 };
  const output = [];
  directions.forEach(d => {
    const points = [{ ...current }];
    for (let n = 0; n < d.count; n++) {
      switch (d.direction) {
        case Direction.UP: current.y++; break;
        case Direction.DOWN: current.y--; break;
        case Direction.LEFT: current.x--; break;
        case Direction.RIGHT: current.x++; break;
      }
      points.push({ ...current });
    }
    output.push(points);
  });
  return output;
}

const intersections = (wire1, wire2) => {
  const output = [];
  let w1Steps = 0;
  wire1.forEach(w1 => {
    let w2Steps = 0;
    wire2.forEach(w2 => {
      const i = intersection(w1, w2);
      if (i) {
        const steps =
          w1Steps + w2Steps
          + w1.findIndex(p => p.x === i.x && p.y === i.y)
          + w2.findIndex(p => p.x === i.x && p.y === i.y);
        output.push({ ...i, steps });
      }
      w2Steps += w2.length - 1;
    })
    w1Steps += w1.length - 1;
  });
  return output;
};

const intersection = (line1, line2) => _.intersectionWith(line1, line2, (p1, p2) => p1.x === p2.x && p1.y === p2.y)[0];
const nearest = points => _.min(points.map(p => Math.abs(p.x) + Math.abs(p.y).filter(d => d)));
const fastest = points => _.min(points.map(p => p.steps).filter(d => d > 2));

module.exports = {
  intersection,
  nearest,
  fastest,
  intersections,
  expand,
  parse
}