const file = require('../../util/file');

const day1 = require('./day1');

console.log('  Day 1');
const input = file.readString(__dirname, 'input.txt');

console.log('    Part 1:', day1.part1(input));
console.log('    Part 2:', day1.part2(input));