const day1 = require('../src/day1');

describe('day1', () => {
  describe('part1', () => {
    it('1122 produces 3', () => {
      const result = day1.part1('1122');
      expect(result).toBe(3);
    });

    it('1111 produces 4', () => {
      const result = day1.part1('1111');
      expect(result).toBe(4);
    });

    it('1234 produces 0', () => {
      const result = day1.part1('1234');
      expect(result).toBe(0);
    });

    it('91212129 produces 9', () => {
      const result = day1.part1('91212129');
      expect(result).toBe(9);
    });
  });
  describe('part2', () => {
    it('1212 produces 6', () => {
      const result = day1.part2('1212');
      expect(result).toBe(6);
    });

    it('1221 produces 0', () => {
      const result = day1.part2('1221');
      expect(result).toBe(0);
    });

    it('123425 produces 0', () => {
      const result = day1.part2('123425');
      expect(result).toBe(4);
    });

    it('123123 produces 12', () => {
      const result = day1.part2('123123');
      expect(result).toBe(12);
    });

    it('12131415 produces 4', () => {
      const result = day1.part2('12131415');
      expect(result).toBe(4);
    });
  });
});
