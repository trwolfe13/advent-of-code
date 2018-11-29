const string = require('../../util/string');

module.exports = function (input) {
  return string.lines(input).reduce((p, c) => p + (c.length - eval(c).length), 0);
}