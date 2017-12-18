const fs = require('fs');
const path = require('path');
const day18 = { part1: require('./day18.part1'), part2: require('./day18.part2') };

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

let answer = day18.part1(input);
console.log('Part 1', answer);

answer = day18.part2(input);
console.log('Part 2', answer);