const number = require('../../util/number');

const cookies = require('./cookies');

module.exports = function (input) {
  const i = cookies.parse(input);
  const perms = number.sumParts(100, i.length);
  console.log(perms);
  return undefined;
}