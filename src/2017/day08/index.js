const fs = require('fs');
const path = require('path');

const file = require('../../util/file');
const day = require('./day8');

console.log('  Day 8');

const input = file.readString(__dirname, 'input.txt');

const history = {};
console.log('    Part 1:', day.part1(input, history));
console.log('    Part 2:', day.part2(input));

fs.writeFileSync(path.join(__dirname, './graph/data.json'), JSON.stringify(history));