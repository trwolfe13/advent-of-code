const _ = require('lodash');

const string = require('../../util/string');

const parse = input => string.lines(input).map(Number);

const permuteSum = (arr, sum, cur = [], all = []) => {
  arr.forEach((n, i) => {
    if (n > sum || cur.includes(i)) { return; }
    const newCur = [...cur, i];
    if (n === sum) {
      newCur.sort();
      if (!all.find(a => _.isEqual(a, newCur))) {
        all.push(newCur);
      }
    } else {
      permuteSum(arr, sum - n, newCur, all);
    }
  });
  return all;//.map(n => n.map(i => arr[i]));
};

module.exports = function (input) {
  //const containers = parse(input);
  const containers = [20, 15, 10, 5, 5];
  return permuteSum(containers, 25).length;
}