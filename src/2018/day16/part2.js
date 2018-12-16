const operations = require('./operations');
const string = require('../../util/string');

module.exports = function (part1, part2) {
  const tests = operations.parse(part1);
  const operationMap = operations.decodeOpMap(tests);
  const program = string.lines(part2).map(n => n.split(' ').map(Number));
  const registers = operations.runProgram(program, operationMap);
  return registers[0];
}