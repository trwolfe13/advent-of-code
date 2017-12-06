const fs = require('fs');
const path = require('path');
const day6 = require('./day6');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day6.part1(input);
console.log('Part 1', answer);

answer = day6.part2(input);
console.log('Part 2', answer);