const allRoutes = require('./all-routes');
const array = require('../../util/array');

module.exports = function (input) {
  const graph = allRoutes(input);
  const distance = array.projectReduce(graph, r => r.reduce((p, c) => p + c.distance, 0), (p, c) => c > p);
  return distance.value;
}