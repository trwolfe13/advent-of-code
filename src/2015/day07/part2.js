const string = require('../../util/string');
const getValue = require('./get-value');

module.exports = function (input) {
  const i = string.lines(input).map(c => c.split(' -> '));
  i.forEach(n => {
    if (n[1] === 'b') {  n[0] = '46065'; }
  });
  return getValue(i, 'a');
}