const _ = require('lodash');

const string = require('../../util/string');

const parse = input => string.lines(input).map((n, id) => ({ id, size: Number(n) }));

const permuteSum = (arr, sum, cur = [], all = []) => {
  arr.forEach(c => {
    const newCur = [...cur, c.id];
    if (c.size === sum) {
      if (!all.find(a => _.isEqual(a, newCur))) {
        all.push(newCur);
      }
      return;
    } else {
      const remaining = arr.filter(n => n.size <= sum && n.id > c.id);
      if (remaining.length > 0) {
        permuteSum(remaining, sum - c.size, newCur, all);
      }
    }
  });
  return all;
};

module.exports = function (input) {
  const containers = parse(input);
  const result = permuteSum(containers, 150);
  return result.length;
}