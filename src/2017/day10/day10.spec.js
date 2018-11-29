const day10 = require('./day10');

describe('day10', () => {
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
  describe('checksum', () => {
    it('Produces the correct output 1', () => {
      const input = inputs[0];
      const checksum = day10.checksum(input.list, [3, 4, 1, 5]);
      const m = checksum[0] * checksum[1];
      expect(m).toEqual(12);
    });
  });
  describe('part1', () => {
    it('Produces the correct output 1', () => {
    });
  });
  describe('part2', () => {
    it('Produces the correct output 1', () => {
      expect(day10.part2('')).toEqual('a2582a3a0e66e6e86e3812dcb672a272');
    });
    it('Produces the correct output 2', () => {
      expect(day10.part2('AoC 2017')).toEqual('33efeb34ea91902bb2f59c9920caa6cd');
    });
    it('Produces the correct output 3', () => {
      expect(day10.part2('1,2,3')).toEqual('3efbe78a8d82f29979031a4aa0b16a9d');
    });
    it('Produces the correct output 3', () => {
      expect(day10.part2('1,2,4')).toEqual('63960835bcdc130f0b66d7ff4f6a5a8e');
    });
  });
});
