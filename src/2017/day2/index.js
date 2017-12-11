const fs = require('fs');
const path = require('path');

const day2 = require('./day2');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day2.part1(input);
console.log('Part 1', answer);

answer = day2.part2(input);
console.log('Part 2', answer);