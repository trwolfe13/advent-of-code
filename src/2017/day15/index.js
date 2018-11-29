const fs = require('fs');
const path = require('path');
const day15 = require('./day15');

let answer = day15.part1(618, 814, 40000000);
console.log('Part 1', answer);

answer = day15.part2(618, 814, 5000000);
console.log('Part 2', answer);