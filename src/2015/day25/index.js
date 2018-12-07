const file = require('../../util/file');
const part1 = require('./part1');

console.log('  Day 25');
let input = file.readString(__dirname, 'input.txt');

console.log('    Part 1:', part1(input));
