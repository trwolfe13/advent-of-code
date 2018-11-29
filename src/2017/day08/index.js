const fs = require('fs');
const file = require('../../util/file');
const day8 = require('./day8');

console.log('  Day 8');

const input = file.readString(__dirname, 'input.txt');

const history = {};
console.log('    Part 1:', day8.part1(input, history));
console.log('    Part 2:', day8.part2(input));

fs.writeFileSync(path.join(__dirname, './graph/data.json'), JSON.stringify(history));