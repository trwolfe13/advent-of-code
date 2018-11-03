const fs = require('fs');
const path = require('path');

const day4 = require('./day4');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day4.part1(input);
console.log('Part 1', answer);

answer = day4.part2(input);
console.log('Part 2', answer);