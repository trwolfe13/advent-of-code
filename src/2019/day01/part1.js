const string = require('../../util/string');
const fuel = require('./fuel');

module.exports = function (input) {
  return string.lines(input).reduce((p, c) => p += fuel.moduleFuel(Number(c)), 0);
}