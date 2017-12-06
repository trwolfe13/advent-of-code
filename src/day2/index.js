const fs = require('fs');
const path = require('path');

const day2 = require('./day2');

{ // Day 2
  const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8');
  { // Part 1    
    const answer = day2.part1(input);
    console.log('Day 2, Part 1 Answer:', answer);
  }
  { // Part 2
    const answer = day2.part2(input);
    console.log('Day 2, Part 2 Answer:', answer);
  }
}
