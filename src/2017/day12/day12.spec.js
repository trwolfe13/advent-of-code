const day12 = require('./day12');

describe('day12', () => {
  const input = `
    0 <-> 2
    1 <-> 1
    2 <-> 0, 3, 4
    3 <-> 2, 4
    4 <-> 2, 3, 6
    5 <-> 6
    6 <-> 4, 5
  `.trim();
  
  describe('part1', () => {
    it('Produces the correct output 1', () => {
      expect(day12.part1(input)).toBe(6);
    });
  });
  describe('part2', () => {
    it('Produces the correct output 1', () => {

    });
  });
});
