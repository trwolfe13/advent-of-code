const array = require('../../util/array');
const object = require('../../util/object');
const guards = require('./guards');

const strategy2 = g => {
  let mostValue = -1, guard, minute;
  const gs = object.values(g);
  for (let m = 0; m < 60; m++) {
    const mostSlept = array.projectReduce(gs, gd => guards.minuteSlept(gd, m), (p, c) => c > p);
    if (mostSlept.value > mostValue) {
      mostValue = mostSlept.value;
      guard = mostSlept.obj;
      minute = m;
    }
  }
  return guard.id * minute;
}

module.exports = function (input) {
  const g = guards.parse(input);
  return strategy2(g);
}