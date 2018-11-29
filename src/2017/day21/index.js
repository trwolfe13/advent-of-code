const fs = require('fs');
const path = require('path');
const day21 = require('./day21')

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day21.part1(input);
console.log('Part 1', answer);

answer = day21.part2(input);
console.log('Part 2', answer);