const fs = require('fs');
const path = require('path');
const day16 = require('./day16');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day16.part1(input);
console.log('Part 1', answer);

answer = day16.part2(input);
console.log('Part 2', answer);