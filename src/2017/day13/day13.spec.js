const day13 = require('./day13');

describe('day13', () => {
  const input = `
    0: 3
    1: 2
    4: 4
    6: 4
  `.trim();

  describe('part1', () => {
    it('Produces the correct output 1', () => {
      expect(day13.part1(input)).toBe(24);
    });
  });
  describe('part2', () => {
    it('Produces the correct output 1', () => {
      return 0;
    });
  });
});
