const part1 = require('./part1');

module.exports = function (input) {
  return part1(part1(input));
}