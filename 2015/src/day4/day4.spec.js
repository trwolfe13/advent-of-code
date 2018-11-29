const part1 = require('./part1');
const part2 = require('./part2');

describe('day4', () => {
  describe('part1', () => {
    it('abcdef', () => {
      const result = part1('abcdef');
      expect(result).toBe(609043);
    });
    it('pqrstuv', () => {
      const result = part1('pqrstuv');
      expect(result).toBe(1048970);
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
