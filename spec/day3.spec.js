const day3 = require('../src/day3');

describe('day3', () => {
  describe('move', () => {
    it('moves up', () => {
      const direction = day3.Direction.UP;
      const result = day3.move([0, 0], direction);
      expect(result).toEqual([0, 1]);
    });
    it('moves right', () => {
      const direction = day3.Direction.RIGHT;
      const result = day3.move([0, 0], direction);
      expect(result).toEqual([1, 0]);
    });
    it('moves down', () => {
      const direction = day3.Direction.DOWN;
      const result = day3.move([0, 0], direction);
      expect(result).toEqual([0, -1]);
    });
    it('moves left', () => {
      const direction = day3.Direction.LEFT;
      const result = day3.move([0, 0], direction);
      expect(result).toEqual([-1, 0]);
    });
  });
  describe('spiral', () => {
    it('produces correct output at 1', () => {
      const result = day3.spiral(1);
      expect(result).toEqual([undefined, [0, 0]]);
    });
    it('produces correct output at 10', () => {
      const result = day3.spiral(10);
      expect(result).toEqual([
        undefined, // 0 has no value.
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
        [0, -1],
        [1, -1],
        [2, -1],
      ]);
    });
  });
  describe('sumAdjacent', () => {
    it('produces correct output at 1', () => {
      const spiral = day3.spiral(10);
      const coords = [0, 0];
      const result = day3.sumAdjacent(spiral, coords);
      expect(result).toBe(1);
    });
    it('produces correct output at 1', () => {
      const spiral = day3.spiral(10);
      const coords = [0, 0];
      const result = day3.sumAdjacent(spiral, coords);
      expect(result).toBe(1);
    });
  });
  describe('part1', () => {
    it('Produces the correct output', () => {
      const input = 1;
      const result = day3.part1(input);
      expect(result).toBe(0);
    });
    it('Produces the correct output', () => {
      const input = 12;
      const result = day3.part1(input);
      expect(result).toBe(3);
    });
    it('Produces the correct output', () => {
      const input = 1024;
      const result = day3.part1(input);
      expect(result).toBe(31);
    });
  });
  describe('part2', () => {
    if ('Produces the correct output', () => {
      const input = '';
      const result = day3.part2(input);
      expect(result).toBe(0);
    });
  });
});
