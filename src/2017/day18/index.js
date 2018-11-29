const file = require('../../util/file');

const day = { part1: require('./day18.part1'), part2: require('./day18.part2') };

console.log('  Day 18');
const input = file.readString(__dirname, 'input.txt');

console.log('    Part 1:', day.part1(input));
console.log('    Part 2:', day.part2(input));