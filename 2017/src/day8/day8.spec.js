const day8 = require('./day8');

describe('day8', () => {

  const input = `
    b inc 5 if a > 1
    a inc 1 if b < 5
    c dec -10 if a >= 1
    c inc -20 if c == 10
  `;

  describe('part1', () => {
    it('Produces the correct output', () => {
      const max = day8.part1(input);
      expect(max).toEqual(1);
    });
  });
  describe('part2', () => {
    it('Produces the correct output', () => {
      const max = day8.part2(input);
      expect(max).toEqual(10);
    });
  });
});
