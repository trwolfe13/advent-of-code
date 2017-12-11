const fs = require('fs');
const path = require('path');
const day11 = require('./day11');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day11.part1(input);
console.log('Part 1', answer);

answer = day11.part2(input);
console.log('Part 2', answer);