const fs = require('fs');
const path = require('path');
const day22 = require('./day22')

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day22.part1(input);
console.log('Part 1', answer);

answer = day22.part2(input);
console.log('Part 2', answer);