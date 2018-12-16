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

const operations = [
  { name: 'addr', exec: ([a, b, c], r) => { r[c] = r[a] + r[b]; } },
  { name: 'addi', exec: ([a, b, c], r) => { r[c] = r[a] + b; } },
  { name: 'mulr', exec: ([a, b, c], r) => { r[c] = r[a] * r[b]; } },
  { name: 'muli', exec: ([a, b, c], r) => { r[c] = r[a] * b; } },
  { name: 'banr', exec: ([a, b, c], r) => { r[c] = r[a] & r[b]; } },
  { name: 'bani', exec: ([a, b, c], r) => { r[c] = r[a] & b; } },
  { name: 'borr', exec: ([a, b, c], r) => { r[c] = r[a] | r[b]; } },
  { name: 'bori', exec: ([a, b, c], r) => { r[c] = r[a] | b; } },
  { name: 'borr', exec: ([a, b, c], r) => { r[c] = r[a] | r[b]; } },
  { name: 'setr', exec: ([a, b, c], r) => { r[c] = r[a]; } },
  { name: 'seti', exec: ([a, b, c], r) => { r[c] = a; } },
  { name: 'gtir', exec: ([a, b, c], r) => { r[c] = a > r[b] ? 1 : 0; } },
  { name: 'gtri', exec: ([a, b, c], r) => { r[c] = r[a] > b ? 1 : 0; } },
  { name: 'gtrr', exec: ([a, b, c], r) => { r[c] = r[a] > r[b] ? 1 : 0; } },
  { name: 'gtir', exec: ([a, b, c], r) => { r[c] = a === r[b] ? 1 : 0; } },
  { name: 'gtri', exec: ([a, b, c], r) => { r[c] = r[a] === b ? 1 : 0; } },
  { name: 'gtrr', exec: ([a, b, c], r) => { r[c] = r[a] === r[b] ? 1 : 0; } },
];

const testBehavior = test => {
  return operations.filter(op => {
    const registers = [...test.before];
    op.exec(test.params, registers);
    return _.isEqual(registers, test.after);
  }).map(o => o.name);
}

module.exports = function (input) {
  const tests = parse(input);
  const behaviors = tests.map(testBehavior);
  return behaviors.filter(t => t.length >= 3).length;
}