const fs = require('fs');
const path = require('path');
const day24 = require('./day24')

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day24.part1(input);
console.log('Part 1', answer);

answer = day24.part2();
console.log('Part 2', answer);