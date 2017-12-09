const fs = require('fs');
const path = require('path');
const day9 = require('./day9');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day9.part1(input);
console.log('Part 1', answer);

answer = day9.part2(input);
console.log('Part 2', answer);