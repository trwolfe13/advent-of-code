const fs = require('fs');
const path = require('path');

const day4 = require('./day4');

{ // Day 4
  const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');
  { // Part 1    
    const answer = day4.part1(input);
    console.log('Day 4, Part 1 Answer:', answer);
  }
  { // Part 2
    const answer = day4.part2(input);
    console.log('Day 4, Part 2 Answer:', answer);
  }
}
