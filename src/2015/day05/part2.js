const string = require('../../util/string');

const repeatingPair = s => s.search(/(..).*\1/) > -1;
const repeatGap = s => s.search(/(.).\1/) > -1;

const nice = s => repeatingPair(s) && repeatGap(s);

module.exports = function (input) {
  return string.lines(input).filter(nice).length;
}