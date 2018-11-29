const part1 = require('./part1');
const part2 = require('./part2');

describe('day6', () => {
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
    it('qjhvhtzxzqqjkmpb', () => {
      const result = part2('qjhvhtzxzqqjkmpb');
      expect(result).toBe(1);
    });
    it('uurcxstgmygtbstg', () => {
      const result = part1('uurcxstgmygtbstg');
      expect(result).toBe(0);
    });
    it('ieodomkazucvgmuy', () => {
      const result = part1('ieodomkazucvgmuy');
      expect(result).toBe(0);
    });
  });
});
