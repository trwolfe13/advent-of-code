const guards = require('./guards');

const strategy1 = g => {
  const guard = guards.mostAsleep(g);
  const minute = guards.minuteMostAsleep(guard);
  return guard.id * minute;
}

module.exports = function (input) {
  const g = guards.parse(input);
  return strategy1(g);
}