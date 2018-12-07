const _ = require('lodash');
const points = require('../../util/points');
const locations = require('./locations');

const firstDuplicate = points => {
  const visited = [];
  const duplicates = [];

  points.forEach(point => {
    const n = visited.find(n => _.isEqual(n, point));
    if (n) { duplicates.push(n); }
    visited.push(point);
  });
  return duplicates[0];
}

module.exports = function (input) {
  const s = { dir: 'N', pos: [0, 0] };
  locations.walk(input, s);
  const firstDup = firstDuplicate(s.vis);
  return points.manhattan([0, 0], firstDup);
}