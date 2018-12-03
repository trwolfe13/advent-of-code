const array = require('../../util/array');
const eggnog = require('./eggnog');

module.exports = function (input) {
  const containers = eggnog.parse(input);
  const result = eggnog.permuteSum(containers, 150);
  const min = array.projectReduce(result, p => p.length, (p, c) => c < p).value;
  return result.filter(r => r.length === min).length;
}