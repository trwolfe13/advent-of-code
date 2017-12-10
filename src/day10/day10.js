const _ = require('lodash');
const list = n => _.times(n, Number);

function reverse (l, i, len) {
  const w = Math.max((i + len) - l.length, 0);
  const s = [...l.slice(i, i + len), ...l.slice(0, w)].reverse();
  return [...s.slice(s.length - w), ...l.slice(w, i), ...s.slice(0, s.length - w), ...l.slice(i + len)];
}

module.exports = {
  reverse,
  part1: function (input) {
    return countGroups(input).t;
  },
  part2: function (input) {
    return countGroups(input).f;
  }
}