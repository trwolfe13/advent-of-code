const string = require('../../util/string');
const _ = require('lodash');

const parse = input => {
  const lines = string.lines(input);
  const tests = [];
  for (let x = 0; x < lines.length; x += 3) {
    const inst = lines[x + 1].split(' ').map(Number);
    const before = JSON.parse(lines[x].substring(8));
    const after = JSON.parse(lines[x + 2].substring(8));
    tests.push({ before, after, opcode: inst[0], params: inst.slice(1) });
  }
  return tests;
}

const operations = {
  addr: ([a, b, c], r) => { r[c] = r[a] + r[b]; },
  addi: ([a, b, c], r) => { r[c] = r[a] + b; },
  mulr: ([a, b, c], r) => { r[c] = r[a] * r[b]; },
  muli: ([a, b, c], r) => { r[c] = r[a] * b; },
  banr: ([a, b, c], r) => { r[c] = r[a] & r[b]; },
  bani: ([a, b, c], r) => { r[c] = r[a] & b; },
  borr: ([a, b, c], r) => { r[c] = r[a] | r[b]; },
  bori: ([a, b, c], r) => { r[c] = r[a] | b; },
  setr: ([a, b, c], r) => { r[c] = r[a]; },
  seti: ([a, b, c], r) => { r[c] = a; },
  gtir: ([a, b, c], r) => { r[c] = a > r[b] ? 1 : 0; },
  gtri: ([a, b, c], r) => { r[c] = r[a] > b ? 1 : 0; },
  gtrr: ([a, b, c], r) => { r[c] = r[a] > r[b] ? 1 : 0; },
  eqir: ([a, b, c], r) => { r[c] = a === r[b] ? 1 : 0; },
  eqri: ([a, b, c], r) => { r[c] = r[a] === b ? 1 : 0; },
  eqrr: ([a, b, c], r) => { r[c] = r[a] === r[b] ? 1 : 0; },
};

const testBehavior = test => {
  return Object.keys(operations).filter(op => {
    const registers = [...test.before];
    operations[op](test.params, registers);
    return _.isEqual(registers, test.after);
  });
}

const decodeOpMap = tests => {
  const behaviors = tests.map(t => ({ code: t.opcode, couldBe: testBehavior(t) }));

  let unknownIds = _.uniq(tests.map(t => t.opcode)).sort((a, b) => a - b);
  const knownCodes = [];
  const operationMap = {};

  while (unknownIds.length) {
    const knownIds = _.uniq(behaviors.filter(b => b.couldBe.length === 1).map(n => n.code));
    const knownBehaviors = knownIds.map(code => behaviors.find(b => b.code === code && b.couldBe.length === 1));
    knownBehaviors.forEach(behavior => {
      knownCodes.push(behavior.couldBe[0]);
      operationMap[behavior.code] = behavior.couldBe[0];
    });
    unknownIds = unknownIds.filter(c => !knownIds.includes(c));
    behaviors.forEach(b => b.couldBe = b.couldBe.filter(c => !knownCodes.includes(c)));
  }
  return operationMap;
};

const runProgram = (program, operationMap, registers = [0, 0, 0, 0]) => {
  program.forEach(line => {
    const opcode = operationMap[line[0]];
    operations[opcode](line.slice(1), registers);
  });
  return registers;
};

module.exports = {
  parse,
  testBehavior,
  decodeOpMap,
  runProgram
}