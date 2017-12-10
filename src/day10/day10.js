const _ = require('lodash');

function reverse (l, i, len) {
  const w = Math.max((i + len) - l.length, 0);
  const s = [...l.slice(i, i + len), ...l.slice(0, w)].reverse();
  return [...s.slice(s.length - w), ...l.slice(w, i), ...s.slice(0, s.length - w), ...l.slice(i + len)];
}

function checksum (l, lens) {
  let i = 0, s = 0;
  lens.forEach(n => {
    l = reverse(l, i, n);
    i = (i + n + s++) % l.length;
  });
  return l[0] * l[1];
}

module.exports = {
  reverse,
  checksum,
  part1: function (input) {
    let l = _.times(256, Number), lens = input.split(',').map(Number);
    return checksum(l, lens);
  },
  part2: function (input) {
    return 0;
  }
}