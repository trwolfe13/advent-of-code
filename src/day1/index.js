const fs = require('fs');
const path = require('path');

const day1 = require('./day1');

{ // Day 1
  const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');
  { // Part 1    
    const answer = day1.part1(input);
    console.log('Day 1, Part 1 Answer:', answer);
  }
  { // Part 2
    const answer = day1.part2(input);
    console.log('Day 1, Part 2 Answer:', answer);
  }
}