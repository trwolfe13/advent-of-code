const part1 = require('./part1');
const part2 = require('./part2');

describe('day1', () => {
  describe('part1', () => {
    it('(()) equals 0', () => {
      const result = part1('(())');
      expect(result).toBe(0);
    });
    it('()() equals 0', () => {
      const result = part1('()()');
      expect(result).toBe(0);
    });
    it('((( equals 3', () => {
      const result = part1('(((');
      expect(result).toBe(3);
    });
    it('(()(()( equals 3', () => {
      const result = part1('(()(()(');
      expect(result).toBe(3);
    });
    it('))((((( equals 3', () => {
      const result = part1('))(((((');
      expect(result).toBe(3);
    });
    it('()) equals -1', () => {
      const result = part1('())');
      expect(result).toBe(-1);
    });
    it('))( equals -1', () => {
      const result = part1('))(');
      expect(result).toBe(-1);
    });
    it('))) equals -3', () => {
      const result = part1(')))');
      expect(result).toBe(-3);
    });
    it(')())()) equals -3', () => {
      const result = part1(')())())');
      expect(result).toBe(-3);
    });
  });
  describe('part2', () => {
    it(') equals 1', () => {
      const result = part2(')');
      expect(result).toBe(1);
    });
    it('()()) equals 5', () => {
      const result = part2('()())');
      expect(result).toBe(5);
    });
  });
});
