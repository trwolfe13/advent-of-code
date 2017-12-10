const day10 = require('./day10');

describe('day8', () => {
  const inputs = [
    { list: [0, 1, 2, 3, 4], index: 0, length: 3 },
    { list: [2, 1, 0, 3, 4], index: 3, length: 4 },
    { list: [4, 3, 0, 1, 2], index: 3, length: 1 },
    { list: [4, 3, 0, 1, 2], index: 1, length: 5 },
  ];

  describe('reverse', () => {
    it('Produces the correct output 1', () => {
      const input = inputs[0];
      const reversed = day10.reverse(input.list, input.index, input.length);
      expect(reversed).toEqual([2, 1, 0, 3, 4]);
    });
    it('Produces the correct output 2', () => {
      const input = inputs[1];
      const reversed = day10.reverse(input.list, input.index, input.length);
      expect(reversed).toEqual([4, 3, 0, 1, 2]);
    });
    it('Produces the correct output 3', () => {
      const input = inputs[2];
      const reversed = day10.reverse(input.list, input.index, input.length);
      expect(reversed).toEqual([4, 3, 0, 1, 2]);
    });
    it('Produces the correct output 4', () => {
      const input = inputs[3];
      const reversed = day10.reverse(input.list, input.index, input.length);
      expect(reversed).toEqual([3, 4, 2, 1, 0]);
    });
  });
  describe('part1', () => {
    it('Produces the correct output 1', () => {

    });
  });
  describe('part2', () => {
    it('Produces the correct output 1', () => {

    });
  });
});
