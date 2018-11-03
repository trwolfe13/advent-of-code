const fs = require('fs');
const path = require('path');
const day8 = require('./day8');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');

const history = {};
let answer = day8.part1(input, history);
console.log('Part 1', answer);

fs.writeFileSync(path.join(__dirname, './graph/data.json'), JSON.stringify(history));

answer = day8.part2(input);
console.log('Part 2', answer);