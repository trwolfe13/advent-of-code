const file = require('../../util/file');
const part1 = require('./part1');
const part2 = require('./part2');

console.log('  Day 16');
let input1 = file.readString(__dirname, 'input.part1.txt');
let input2 = file.readString(__dirname, 'input.part2.txt');

console.log('    Part 1:', part1(input1));
console.log('    Part 2:', part2(input1, input2));
