const eggnog = require('./eggnog');

module.exports = function (input) {
  const containers = eggnog.parse(input);
  const result = eggnog.permuteSum(containers, 150);
  return result.length;
}