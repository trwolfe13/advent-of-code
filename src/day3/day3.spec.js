const day3 = require('./day3');

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
  describe('coordinatesAdjacent', () => {
    it('produces correct output', () => {
      expect(day3.coordinatesAdjacent([0, 0], [-1, 1])).toBeTruthy();
      expect(day3.coordinatesAdjacent([0, 0], [0, 1])).toBeTruthy();
      expect(day3.coordinatesAdjacent([0, 0], [1, 1])).toBeTruthy();
      expect(day3.coordinatesAdjacent([0, 0], [-1, 0])).toBeTruthy();
      expect(day3.coordinatesAdjacent([0, 0], [0, 0])).toBeFalsy();
      expect(day3.coordinatesAdjacent([0, 0], [1, 0])).toBeTruthy();
      expect(day3.coordinatesAdjacent([0, 0], [-1, -1])).toBeTruthy();
      expect(day3.coordinatesAdjacent([0, 0], [0, -1])).toBeTruthy();
      expect(day3.coordinatesAdjacent([0, 0], [1, -1])).toBeTruthy();
      expect(day3.coordinatesAdjacent([0, 0], [2, -1])).toBeFalsy();
      expect(day3.coordinatesAdjacent([-1, 1], [1, 1])).toBeFalsy();
    });
  });
  describe('adjacentCoords', () => {
    it('produces correct output', () => {

      const sumSpiral = [
        { coords: undefined, total: 0 },
        { coords: [0, 0], total: 0 },
        { coords: [1, 0], total: 0 },
        { coords: [1, 1], total: 0 },
        { coords: [0, 1], total: 0 },
        { coords: [-1, 1], total: 0 },
        { coords: [-1, 0], total: 0 },
        { coords: [-1, -1], total: 0 },
        { coords: [0, -1], total: 0 },
        { coords: [1, -1], total: 0 },
        { coords: [2, -1], total: 0 },
      ];

      expect(day3.adjacentCoords(sumSpiral, 1)).toEqual([]);
      expect(day3.adjacentCoords(sumSpiral, 2)).toEqual([{ coords: [0, 0], total: 0 }]);
      expect(day3.adjacentCoords(sumSpiral, 3)).toEqual([
        { coords: [0, 0], total: 0 },
        { coords: [1, 0], total: 0 }
      ]);
      expect(day3.adjacentCoords(sumSpiral, 4)).toEqual([
        { coords: [0, 0], total: 0 },
        { coords: [1, 0], total: 0 },
        { coords: [1, 1], total: 0 },
      ]);
    });
  });
  describe('sumSpiral', () => {
    it('produces correct output at 1', () => {
      const spiral = day3.spiral(10);
      const result = day3.sumSpiral(spiral);
      expect(result[1].total).toBe(1);
      expect(result[2].total).toBe(1);
      expect(result[3].total).toBe(2);
      expect(result[4].total).toBe(4);
      expect(result[5].total).toBe(5);
      expect(result[6].total).toBe(10);
      expect(result[7].total).toBe(11);
      expect(result[8].total).toBe(23);
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
});
