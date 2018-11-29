const file = require('../../util/file');

const day6 = require('./day6');

console.log('  Day 6');
const input = file.readString(__dirname, 'input.txt');

console.log('    Part 1:', day6.part1(input));
console.log('    Part 2:', day6.part2(input));