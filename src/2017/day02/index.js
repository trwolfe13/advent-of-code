const file = require('../../util/file');

const day2 = require('./day2');

console.log('  Day 2');
const input = file.readString(__dirname, 'input.txt');

console.log('    Part 1:', day2.part1(input));
console.log('    Part 2:', day2.part2(input));