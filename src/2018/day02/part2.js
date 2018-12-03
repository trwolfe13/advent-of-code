const string = require('../../util/string');
const _ = require('lodash');

const same = (s1, s2) => {
  let same = '';
  for (let x = 0; x < s1.length; x++) {
    if (s1[x] === s2[x]) { same += s1[x]; }
  }
  return same;
}

const findDiff = (line, list) => list.find(l => same(l, line).length === line.length - 1);

module.exports = function (input) {
  const lines = string.lines(input);
  for (let x = 0; x < lines.length; x++) {
    const diff = findDiff(lines[x], lines);
    if (diff) { return same(diff, lines[x]); }
  }
}