const array = require('../../util/array');
const string = require('../../util/string');

const parse = i => {
  const nodes = [];
  string.lines(i).forEach(l => {
    const m = l.match(/(.+) to (.+) = (\d+)/);
    nodes.push({ start: m[1], end: m[2], distance: Number(m[3]) });
    nodes.push({ start: m[2], end: m[1], distance: Number(m[3]) });
  });
  return nodes;
};

const startingCities = journeys => {
  const c = [];
  journeys.forEach(j => { if (!c.includes(j.start)) { c.push(j.start) } });
  return c;
};

const possibleRoutes = (cities, journeys, routes, currentRoute) => {
  const curCity = array.last(currentRoute).end;
  const visitedCities = currentRoute.map(r => r.start);
  visitedCities.push(curCity);

  if (visitedCities.length === cities.length) {
    routes.push(currentRoute);
  } else {
    const allowedJourneys = journeys.filter(j => j.start === curCity && !visitedCities.includes(j.end));
    allowedJourneys.forEach(journey => {
      const curRoute = [...currentRoute, journey];
      possibleRoutes(cities, journeys, routes, curRoute);
    });
  }
}

const allPossibleRoutes = (input) => {
  const journeys = parse(input);
  const cities = startingCities(journeys);
  const routes = [];
  journeys.forEach(j => {
    possibleRoutes(cities, journeys, routes, [j]);
  });
  return routes;
}

module.exports = allPossibleRoutes;