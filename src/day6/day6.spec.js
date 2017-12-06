const day6 = require('./day6');

describe('day6', () => {
  describe('reallocate', () => {
    it('Produces the correct output', () => {
      const input = [0, 2, 7, 0];
      const next = day6.reallocate(input);
      expect(next).toEqual([2, 4, 1, 2]);
    });
    it('Produces the correct output', () => {
      const input = [2, 4, 1, 2];
      const next = day6.reallocate(input);
      expect(next).toEqual([3, 1, 2, 3]);
    });
    it('Produces the correct output', () => {
      const input = [3, 1, 2, 3];
      const next = day6.reallocate(input);
      expect(next).toEqual([0, 2, 3, 4]);
    });
    it('Produces the correct output', () => {
      const input = [0, 2, 3, 4];
      const next = day6.reallocate(input);
      expect(next).toEqual([1, 3, 4, 1]);
    });
    it('Produces the correct output', () => {
      const input = [1, 3, 4, 1];
      const next = day6.reallocate(input);
      expect(next).toEqual([2, 4, 1, 2]);
    });
  });
  describe('part1', () => {
    it('Produces the correct output', () => {
      const input = '0 2 7 0';
      expect (day6.part1(input)).toEqual(5);
    });
  });
  describe('part2', () => {
    if ('Produces the correct output', () => {
      const input = '0 2 7 0';
      expect (day6.part2(input)).toEqual(4);
    });
  });
});
