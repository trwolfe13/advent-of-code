const day5 = require('./day5');

describe('day5', () => {
  const input = `
    0
    3
    0
    1
    -3
  `;
  describe('part1', () => {
    it('Produces the correct output', () => {
      const steps = day5.part1(input);
      expect(steps).toBe(5);
    });
  });
  describe('part2', () => {
    it('Produces the correct output', () => {
      const steps = day5.part2(input);
      expect(steps).toBe(10);
    });
  });
});
