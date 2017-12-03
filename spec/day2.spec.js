const day2 = require('../src/day2');

describe('day2', () => {
  describe('part1', () => {
    it('Produces the correct output', () => {
      const input = `
        5 1 9 5
        7 5 3
        2 4 6 8
      `;
      const result = day2.part1(input);
      expect(result).toBe(18);
    });
  });
  describe('part2', () => {
    if ('Produces the correct output', () => {
      const input = `
        5 9 2 8
        9 4 7 3
        3 8 6 5
      `;
      const result = day2.part2(input);
      expect(result).toBe(9);
    });
  });
});
