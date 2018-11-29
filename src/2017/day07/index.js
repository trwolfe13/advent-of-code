const file = require('../../util/file');

const day7 = require('./day7');

console.log('  Day 7');
const input = file.readString(__dirname, 'input.txt');

console.log('    Part 1:', day7.part1(input));
console.log('    Part 2:', day7.part2(input));