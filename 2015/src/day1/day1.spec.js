const part1 = require('./part1');

describe('day1', () => {
  describe('part1', () => {
    it('(()) equals 0', () => {
      const result = part1.process('(())');
      expect(result).toBe(0);
    });

    it('()() equals 0', () => {
      const result = part1.process('()()');
      expect(result).toBe(0);
    });
  });
  describe('part2', () => {

  });
});
