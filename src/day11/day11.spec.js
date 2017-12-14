const day11 = require('./day11');

describe('day11', () => {
  describe('move', () => {
    it('moves north', () => {
      expect(day11.move['n']([0, 0])).toEqual([0, -1]);
    });
    it('moves south', () => {
      expect(day11.move['s']([0, 0])).toEqual([0, 1]);
    });
    it('moves north west', () => {
      expect(day11.move['nw']([0, 0])).toEqual([-1, 0]);
    });
    it('moves south west', () => {
      expect(day11.move['sw']([0, 0])).toEqual([-1, 1]);
    });
    it('moves north east', () => {
      expect(day11.move['ne']([0, 0])).toEqual([1, -1]);
    });
    it('moves south east', () => {
      expect(day11.move['se']([0, 0])).toEqual([1, 0]);
    });
  });
  describe('part1', () => {
    it('Produces the correct output 1', () => {
      const input = 'ne,ne,ne';
      expect(day11.part1(input)).toEqual(3);
    });
    it('Produces the correct output 2', () => {
      const input = 'ne,ne,sw,sw';
      expect(day11.part1(input)).toEqual(0);
    });
    it('Produces the correct output 3', () => {
      const input = 'ne,ne,s,s';
      expect(day11.part1(input)).toEqual(2);
    });
    it('Produces the correct output 4', () => {
      const input = 'se,sw,se,sw,sw';
      expect(day11.part1(input)).toEqual(3);
    });
  });
  describe('part2', () => {
    it('Produces the correct output 1', () => {

    });
  });
});
