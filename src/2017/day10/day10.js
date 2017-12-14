const _ = require('lodash');

function reverse(l, i, len) {
  const w = Math.max((i + len) - l.length, 0);
  const s = [...l.slice(i, i + len), ...l.slice(0, w)].reverse();
  return [...s.slice(s.length - w), ...l.slice(w, i), ...s.slice(0, s.length - w), ...l.slice(i + len)];
}

function checksum(l, lens, times = 1) {
  let i = 0, s = 0;
  for (let n = 0; n < times; n++) {
    lens.forEach(n => {
      l = reverse(l, i, n);
      i = (i + n + s++) % l.length;
    });
  }
  return l;
}

const dense = l =>_.chunk(l, 16).map(c => c.reduce((p, c) => p ^ c, 0));
const toHex = a => a.map(n => n.toString(16)).map(n => n.length === 1 ? '0' + n : n).join('');

module.exports = {
  reverse,
  checksum,
  part1: function (input) {
    let l = [...Array(256).keys()], lens = input.split(',').map(Number);
    const check = checksum(l, lens);
    return check[0] * check[1];
  },
  part2: function (input) {
    let l = [...Array(256).keys()], lens = [...input.split('').map(s => s.charCodeAt(0)), 17, 31, 73, 47, 23];
    return toHex(dense(checksum(l, lens, 64)));
  }
}