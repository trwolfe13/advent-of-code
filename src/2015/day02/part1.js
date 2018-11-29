const string = require('../../util/string');
const func = require('../../util/func');

const split = line => line.split('x').map(Number);
const area = (l, w, h) => [l * w, w * h, h * l];
const paper = (t, f, s) => 2 * t + 2 * f + 2 * s + Math.min(t, f, s);
const all = line => func.chain([line], split, area, paper);

module.exports = function (input) {
  return string.lines(input).reduce((p, c) => p + all(c), 0);
}