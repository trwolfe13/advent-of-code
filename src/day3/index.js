const day3 = require('./day3');

{ // Day 3
  const input = 361527;
  { // Part 1    
    const answer = day3.part1(input);
    console.log('Day 3, Part 1 Answer:', answer);
  }
  { // Part 2
    const answer = day3.part2(input, 100);
    console.log('Day 3, Part 2 Answer:', answer);
  }
}