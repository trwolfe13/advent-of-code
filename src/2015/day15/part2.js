const array = require('../../util/array');
const number = require('../../util/number');

const cookies = require('./cookies');

module.exports = function (input) {
  const i = cookies.parse(input);
  const perms = number.sumParts(100, i.length);
  const recipes = perms.map(p => cookies.total(i, p)).filter(r => r.calories === 500);
  return array.projectReduce(recipes, p => p.total, (p, c) => c > p).value;
}