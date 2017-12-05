const fs = require('fs');

const day1 = require('./day1');
const day2 = require('./day2');
const day3 = require('./day3');
const day4 = require('./day4');
const day5 = require('./day5');

{ // Day 1
  const input = fs.readFileSync('./src/assets/day1.txt', 'utf8');
  { // Part 1    
    const answer = day1.part1(input);
    console.log('Day 1, Part 1 Answer:', answer);
  }
  { // Part 2
    const answer = day1.part2(input);
    console.log('Day 1, Part 2 Answer:', answer);
  }
}

{ // Day 2
  const input = fs.readFileSync('./src/assets/day2.txt', 'utf8');
  { // Part 1    
    const answer = day2.part1(input);
    console.log('Day 2, Part 1 Answer:', answer);
  }
  { // Part 2
    const answer = day2.part2(input);
    console.log('Day 2, Part 2 Answer:', answer);
  }
}

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

{ // Day 4
  const input = fs.readFileSync('./src/assets/day4.txt', 'utf8');
  { // Part 1    
    const answer = day4.part1(input);
    console.log('Day 4, Part 1 Answer:', answer);
  }
  { // Part 2
    const answer = day4.part2(input);
    console.log('Day 4, Part 2 Answer:', answer);
  }
}

{ // Day 5
  const input = fs.readFileSync('./src/assets/day5.txt', 'utf8');
  { // Part 1    
    const answer = day5.part1(input);
    console.log('Day 5, Part 1 Answer:', answer);
  }
  { // Part 2
    
  }
}