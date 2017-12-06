const fs = require('fs');
const path = require('path');

const day5 = require('./day5');

{ // Day 5
  const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');
  { // Part 1    
    const answer = day5.part1(input);
    console.log('Day 5, Part 1 Answer:', answer);
  }
  { // Part 2
    const answer = day5.part2(input);
    console.log('Day 5, Part 2 Answer:', answer);
  }
}