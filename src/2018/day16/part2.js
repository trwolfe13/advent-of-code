const operations = require('./operations');
const _ = require('lodash');

module.exports = function (part1, part2) {
  const tests = operations.parse(part1);
  const behaviors = tests.map(t => ({ code: t.opcode, couldBe: operations.testBehavior(t)}));

  let unknownCodes = tests.map(t => t.code);
  const operationMap = {};

  while (unknownCodes.length) {
    const knownCodes = _.uniq(behaviors.filter(b => b.couldBe.length === 1).map(b => b.code));
    console.log('Known codes', knownCodes);
    const known = knownCodes.map(code => behaviors.find(b => b.code === code && b.couldBe.length === 1)); 

    console.log('Known', known);

    known.forEach(behavior => {
      operationMap[behavior.code] === behavior.couldBe[0];
    });
    console.log('New op map', operationMap);

    unknownCodes = unknownCodes.filter(c => !knownCodes.includes(c));
    console.log('Remaining codes', unknownCodes);
    
    break;
  }

  console.log(operationMap);
  return 0;
}