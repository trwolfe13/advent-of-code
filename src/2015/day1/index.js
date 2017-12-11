const fs = require('fs');
const path = require('path');

const day1 = require('./day1');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day1.part1(input);
console.log('Part 1', answer);

answer = day1.part2(input);
console.log('Part 2', answer);