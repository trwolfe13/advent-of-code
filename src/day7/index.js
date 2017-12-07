const fs = require('fs');
const path = require('path');
const day7 = require('./day7');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day7.part1(input);
console.log('Part 1', answer);

// answer = day7.part2(input);
// console.log('Part 2', answer);