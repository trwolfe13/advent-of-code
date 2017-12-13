const fs = require('fs');
const path = require('path');
const day13 = require('./day13');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day13.part1(input);
console.log('Part 1', answer);

answer = day13.part2(input);
console.log('Part 2', answer);