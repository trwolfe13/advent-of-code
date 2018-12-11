const string = require('../../util/string')
const _ = require('lodash');

const parse = input => string.lines(input).map(line => line.split(' ').map(Number));

const isPossible = triangle => { const max = _.max(triangle); return max < _.sum(triangle) - max; }

module.exports = function (input) {
  const triangles = parse(input);
  return triangles.filter(isPossible).length;
}