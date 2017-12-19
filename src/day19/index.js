const fs = require('fs');
const path = require('path');
const day19 = require('./day19')

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day19.part1(input);
console.log('Part 1', answer);

answer = day19.part2(input);
console.log('Part 2', answer);