const day4 = require('./day4');

describe('day4', () => {
  describe('part1', () => {
    it('Produces the correct output 1', () => {
      const input = 'aa bb cc dd ee';
      expect(day4.part1(input)).toBe(1);
    });
    it('Produces the correct output 2', () => {
      const input = 'aa bb cc dd aa';
      expect(day4.part1(input)).toBe(0);
    });
    it('Produces the correct output 3', () => {
      const input = 'aa bb cc dd aaa';
      expect(day4.part1(input)).toBe(1);
    });
  });
  describe('part2', () => {
    it('Produces the correct output 1', () => {
      const input = 'abcde fghij';
      expect(day4.part2(input)).toBe(1);
    });
    it('Produces the correct output 2', () => {
      const input = 'abcde xyz ecdab';
      expect(day4.part2(input)).toBe(0);
    });
    it('Produces the correct output 3', () => {
      const input = 'a ab abc abd abf abj';
      expect(day4.part2(input)).toBe(1);
    });
    it('Produces the correct output 4', () => {
      const input = 'a ab abc abd abf abj';
      expect(day4.part2(input)).toBe(1);
    });
    it('Produces the correct output 5', () => {
      const input = 'iiii oiii ooii oooi oooo';
      expect(day4.part2(input)).toBe(1);
    });
    it('Produces the correct output 5', () => {
      const input = 'oiii ioii iioi iiio';
      expect(day4.part2(input)).toBe(0);
    });
  });
});
