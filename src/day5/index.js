const fs = require('fs');
const path = require('path');

const day5 = require('./day5');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day5.part1(input);
console.log('Part 1', answer);

answer = day5.part2(input);
console.log('Part 2', answer);