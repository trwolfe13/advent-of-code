const fs = require('fs');
const path = require('path');
const day23 = require('./day23')

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day23.part1(input);
console.log('Part 1', answer);

answer = day23.part2();
console.log('Part 2', answer);