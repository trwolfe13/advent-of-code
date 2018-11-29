const part1 = require('./part1');
const part2 = require('./part2');

describe('day3', () => {
  describe('part1', () => {
    it('>', () => {
      const result = part1('>');
      expect(result).toBe(2);
    });
    it('^>v<', () => {
      const result = part1('^>v<');
      expect(result).toBe(4);
    });
    it('^v^v^v^v^v', () => {
      const result = part1('^v^v^v^v^v');
      expect(result).toBe(2);
    });
  });
  describe('part2', () => {
    it('^v', () => {
      const result = part2('^v');
      expect(result).toBe(3);
    });
    it('^>v<', () => {
      const result = part2('^>v<');
      expect(result).toBe(3);
    });
    it('^v^v^v^v^v', () => {
      const result = part2('^v^v^v^v^v');
      expect(result).toBe(11);
    });
  });
});
