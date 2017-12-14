const day14 = require('./day14');

describe('day14', () => {
  describe('toBinary', () => {
    it('Produces the correct output 1', () => {
      expect(day14.toBinary('4')).toEqual([0, 1, 0, 0]);
    });
    it('Produces the correct output 1', () => {
      expect(day14.toBinary('5')).toEqual([0, 1, 0, 1]);
    });
    it('Produces the correct output 1', () => {
      expect(day14.toBinary('a')).toEqual([1, 0, 1, 0]);
    });
    it('Produces the correct output 1', () => {
      expect(day14.toBinary('ae')).toEqual([1, 0, 1, 0, 1, 1, 1, 0]);
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
