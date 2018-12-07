const points = require('../../util/points');
const locations = require('./locations');

module.exports = function (input) {
  const s = { dir: 'N', pos: [0, 0] };
  locations.walk(input, s);
  return points.manhattan([0, 0], s.pos);
}