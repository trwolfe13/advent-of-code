const string = require('../../util/string');

const escape = c =>
  '"' + c
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
  + '"';

module.exports = function (input) {
  return string.lines(input).reduce((p, c) => p + (escape(c).length - c.length), 0);
}