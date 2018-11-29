const string = require('../../util/string');

const has3Vowels = s => (s.match(/[aeiou]/g) || []).length >= 3;
const doubleLetter = s => s.search(/(.)\1/) > -1;
const notContains = s => ['ab', 'cd', 'pq', 'xy'].every(p => !s.includes(p));
const nice = s => has3Vowels(s) && doubleLetter(s) && notContains(s);

module.exports = function (input) {
  return string.lines(input).filter(nice).length;
}