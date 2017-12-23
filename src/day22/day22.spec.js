const fs = require('fs');
const path = require('path');
const day22 = require('./day22');

describe('day22', () => {
  
  const start = `.........
.........
.........
.....#...
...#.....
.........
.........
.........`;

  describe('part1', () => {
    it('Produces the correct output 3x3', () => {
      expect(day22.part1(start, 4, 7)).toBe(5);
    });
    it('Produces the correct output 3x3', () => {
      expect(day22.part1(start, 4, 70)).toBe(41);
    });
    it('Produces the correct output 3x3', () => {
      expect(day22.part1(start, 4, 10000)).toBe(5587);
    });
  });

  describe('part2', () => {
    it('Produces the correct output 1', () => {
      it('Produces the correct output 3x3', () => {
        expect(day22.part2(start, 4, 100)).toBe(26);
      });
      it('Produces the correct output 3x3', () => {
        expect(day22.part2(start, 4, 10000000)).toBe(2511944);
      });
    });
  });
});
