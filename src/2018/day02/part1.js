const string = require('../../util/string');

const hasChars = (input, n) => {
  return string.chars(input).some(l => input.match(new RegExp(l, 'g')).length === n);
}

module.exports = function (input) {
  let a = 0, b = 0;
  string.lines(input).forEach(c => {
    if (hasChars(c, 2)) { a++; }
    if (hasChars(c, 3)) { b++; }
  });
  return a * b;
}