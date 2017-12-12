const fs = require('fs');
const path = require('path');

const day3 = require('./day3');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day3.part1(input);
console.log('Part 1', answer);

answer = day3.part2(input);
console.log('Part 2', answer);