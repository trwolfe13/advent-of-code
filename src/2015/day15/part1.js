const array = require('../../util/array');
const number = require('../../util/number');

const cookies = require('./cookies');

module.exports = function (input) {
  const i = cookies.parse(input);
  const perms = number.sumParts(100, i.length);
  return array.projectReduce(perms, p => cookies.total(i, p).total, (p, c) => c > p).value;
}