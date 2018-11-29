const file = require('../../util/file');

const day4 = require('./day4');

console.log('  Day 4');
const input = file.readString(__dirname, 'input.txt');

console.log('    Part 1:', day4.part1(input));
console.log('    Part 2:', day4.part2(input));