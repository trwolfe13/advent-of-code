const string = require('../../util/string');
const func = require('../../util/func');

const split = line => line.split('x').map(Number);
const box = (l, w, h) => (l + w + h - Math.max(l, w, h)) * 2;
const bow = (l, w, h) => l * w * h;
const ribbon = (l, w, h) => box(l, w, h) + bow(l, w, h);
const all = line => func.chain([line], split, ribbon);

module.exports = function (input) {
  return string.lines(input).reduce((p, c) => p + all(c), 0);
}