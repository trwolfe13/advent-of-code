const part1 = require('./part1');
const part2 = require('./part2');

describe('day2', () => {
  describe('part1', () => {
    it('2x3x4', () => {
      const result = part1('2x3x4');
      expect(result).toBe(58);
    });
    it('1x1x10', () => {
      const result = part1('1x1x10');
      expect(result).toBe(43);
    });
  });
  describe('part2', () => {
    it('2x3x4', () => {
      const result = part2('2x3x4');
      expect(result).toBe(34);
    });
    it('1x1x10', () => {
      const result = part2('1x1x10');
      expect(result).toBe(14);
    });
  });
});
