const fs = require('fs');
const path = require('path');
const day20 = require('./day20')

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day20.part1(input);
console.log('Part 1', answer);

answer = day20.part2(input);
console.log('Part 2', answer);