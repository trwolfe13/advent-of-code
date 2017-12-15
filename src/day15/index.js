const fs = require('fs');
const path = require('path');
const day15 = require('./day15');

const input1 = 618;
const input2 = 814;

let answer = day15.part1(input1, input2, 40000000);
console.log('Part 1', answer);

answer = day15.part2(input1, input2, 5000000);
console.log('Part 2', answer);