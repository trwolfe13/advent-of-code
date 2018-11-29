const file = require('../../../util/file');
const part1 = require('./part1');
const part2 = require('./part2');

console.log('Day 2');
const input = file.readString(__dirname, 'input.txt');

console.log('  Part 1');
console.log('Answer:', part1(input));

console.log('  Part 2');
console.log('Answer:', part2(input));
