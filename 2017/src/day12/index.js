const fs = require('fs');
const path = require('path');
const day12 = require('./day12');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day12.part1(input);
console.log('Part 1', answer);

answer = day12.part2(input);
console.log('Part 2', answer);