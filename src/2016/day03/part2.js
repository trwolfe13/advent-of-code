const string = require('../../util/string')
const _ = require('lodash');

const parse = input => {
  const lines = string.lines(input).map(line => line.split(/\s+/).map(Number));
  const output = [];
  for (let x = 0; x < lines.length; x += 3) {
    for (let n = 0; n < 3; n++) {
      output.push([lines[x][n], lines[x + 1][n], lines[x + 2][n]]);
    }
  }
  console.log(output)
  return output;
}


const isPossible = triangle => { const max = _.max(triangle); return max < _.sum(triangle) - max; }

module.exports = function (input) {
  // input = '101 301 501\n102 302 502\n103 303 503\n201 401 601\n202 402 602\n203 403 603';
  const triangles = parse(input);
  return triangles.filter(isPossible).length;
}