const allRoutes = require('./all-routes');

const longestRoute = routes => routes.reduce((p, route) => {
  const distance = route.reduce((p, c) => p + c.distance, 0);
  return (!p || distance > p.distance) ? { distance, route } : p
}, undefined);

module.exports = function (input) {
  const graph = allRoutes(input);
  const shortest = longestRoute(graph);
  return shortest.distance;
}