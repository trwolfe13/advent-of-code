const part1 = require('./part1');
const part2 = require('./part2');

describe('day5', () => {
  describe('part1', () => {
    it('ugknbfddgicrmopn', () => {
      const result = part1('ugknbfddgicrmopn');
      expect(result).toBe(1);
    });
    it('aaa', () => {
      const result = part1('aaa');
      expect(result).toBe(1);
    });
    it('jchzalrnumimnmhp', () => {
      const result = part1('jchzalrnumimnmhp');
      expect(result).toBe(0);
    });
    it('haegwjzuvuyypxyu', () => {
      const result = part1('haegwjzuvuyypxyu');
      expect(result).toBe(0);
    });
    it('dvszwmarrgswjxmb', () => {
      const result = part1('dvszwmarrgswjxmb');
      expect(result).toBe(0);
    });
  });
  describe('part2', () => {
    // it('^v', () => {
    //   const result = part2('^v');
    //   expect(result).toBe(3);
    // });
    // it('^>v<', () => {
    //   const result = part2('^>v<');
    //   expect(result).toBe(3);
    // });
    // it('^v^v^v^v^v', () => {
    //   const result = part2('^v^v^v^v^v');
    //   expect(result).toBe(11);
    // });
  });
});
