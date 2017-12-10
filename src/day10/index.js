const fs = require('fs');
const path = require('path');
const day10 = require('./day10');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day10.part1(input);
console.log('Part 1', answer);

answer = day10.part2(input);
console.log('Part 2', answer);