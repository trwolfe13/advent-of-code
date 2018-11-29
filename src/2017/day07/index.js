const file = require('../../util/file');

const day = require('./day7');

console.log('  Day 7');
const input = file.readString(__dirname, 'input.txt');

console.log('    Part 1:', day.part1(input));
console.log('    Part 2:', day.part2(input));