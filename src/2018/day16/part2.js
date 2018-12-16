const operations = require('./operations');
const _ = require('lodash');

module.exports = function (part1, part2) {
  const tests = operations.parse(part1);
  const behaviors = tests.map(t => ({ code: t.opcode, couldBe: operations.testBehavior(t)}));

  let unknownCodes = tests.map(t => t.code);
  const operationMap = {};

  while (unknownCodes.length) {
    const knownCodes = _.uniq(behaviors.filter(b => b.couldBe.length === 1).map(b => b.code));
    const known = knownCodes.map(code => behaviors.find(b => b.code === code && b.couldBe.length === 1)); 
    known.forEach(behavior => {
      operationMap[behavior.code] === behavior.couldBe[0];
    })
    unknownCodes = unknownCodes.filter(c => !knownCodes.includes(c));
  }

  console.log(operationMap);
  return 0;
}