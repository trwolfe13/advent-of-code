const string = require('../../util/string');
const getValue = require('./get-value');

module.exports = function (input) {
  const i = string.lines(input).map(c => c.split(' -> '));
  return getValue(i, 'a');
}