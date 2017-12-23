const fs = require('fs');
const path = require('path');
const day21 = require('./day21');

describe('day21', () => {
  describe('parse', () => {
    it('Produces the correct output 1', () => {
      const input = "##./.../... => ##.#/#.##/..#./...#";
      expect(day21.parse(input)).toEqual({
        '110/000/000': [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1]
      });
    });
  });

  describe('split', () => {
    it('Produces the correct output 4x4', () => {
      const input = [
        [1, 1, 0, 1],
        [1, 0, 1, 1],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ];
      expect(day21.split(input)).toEqual([
        [1, 1, 1, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0],
        [1, 0, 0, 1]
      ]);
    });
    it('Produces the correct output 6x6', () => {
      const input = [
        [1, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      expect(day21.split(input)).toEqual([
        [1, 1, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 0, 0, 0, 0],
      ]);
    });
  });

  describe('join', () => {
    it('Produces the correct output 4x4', () => {
      const input = [
        [1, 1, 1, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0],
        [1, 0, 0, 1]
      ];
      const join = day21.join(input);
      expect(join).toEqual([
        [1, 1, 0, 1],
        [1, 0, 1, 1],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ]);
    });
    it('Produces the correct output 6x6', () => {
      const input = [
        [1, 1, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 0, 0, 0, 0],
      ];
      const join = day21.join(input);
      expect(join).toEqual([
        [1, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]);
    });
  });

  describe('match', () => {
    it('Finds an exact match', () => {
      const input = [1, 1, 0, 1];
      const patterns = {
        '11/01': [0, 0, 1, 0],
      };
      const match = day21.match(input, patterns);
      expect(match).toEqual([0, 0, 1, 0]);
    });

    it('Finds a 90 degree rotated match', () => {
      const input = [1, 1, 0, 1];
      const patterns = {
        '01/11': [0, 0, 1, 0],
      };
      const match = day21.match(input, patterns);
      expect(match).toEqual([0, 0, 1, 0]);
    });

    it('Finds a 180 degree rotated match', () => {
      const input = [1, 1, 0, 1];
      const patterns = {
        '10/11': [0, 0, 1, 0],
      };
      const match = day21.match(input, patterns);
      expect(match).toEqual([0, 0, 1, 0]);
    });

    it('Finds a 270 degree rotated match', () => {
      const input = [1, 1, 0, 1];
      const patterns = {
        '11/10': [0, 0, 1, 0],
      };
      const match = day21.match(input, patterns);
      expect(match).toEqual([0, 0, 1, 0]);
    });

    it('Finds a flipped match', () => {
      const input = [0, 1, 0, 0, 0, 1, 1, 1, 1];
      const patterns = {
        '010/100/111': [0, 0, 1, 0],
      };
      const match = day21.match(input, patterns);
      expect(match).toEqual([0, 0, 1, 0]);
    });
  });

  describe('rotate90', () => {
    it('Correct output 1', () => {
      const input = [0, 1, 2, 3];
      expect(day21.rotate90(input)).toEqual([2, 0, 3, 1]);
    });
    it('Correct output 2', () => {
      const input = [0, 1, 0, 0, 0, 1, 1, 1, 1];
      expect(day21.rotate90(input)).toEqual([1, 0, 0, 1, 0, 1, 1, 1, 0]);
    });
  });

  describe('flipV', () => {
    it('Correct output 1', () => {
      const input = [0, 1, 2, 3];
      expect(day21.flipV(input)).toEqual([1, 0, 3, 2]);
    });
    it('Correct output 2', () => {
      const input = [0, 1, 0, 0, 0, 1, 1, 1, 1];
      expect(day21.flipV(input)).toEqual([0, 1, 0, 1, 0, 0, 1, 1, 1]);
    });
  });

  describe('part1', () => {
    it('Produces the correct output 3x3', () => {
      const input = [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1]
      ];
      const patterns = {
        '010/001/111': [0, 1, 0, 0, 0, 1, 1, 1, 1]
      };
      const split = day21.split(input);
      const matches = split.map(p => day21.match(p, patterns));
      const join = day21.join(matches);
      expect(join).toEqual([
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1]
      ]);
    });
    it('Produces the correct output 4x4', () => {
      const input = [
        [0, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0],
      ];
      const patterns = {
        '01/10': [0, 1, 0, 0, 0, 1, 1, 1, 1]
      };
      const split = day21.split(input);
      const matches = split.map(p => day21.match(p, patterns));
      const join = day21.join(matches);
      expect(join).toEqual([
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 1],
      ]);
    });
  });

  describe('part2', () => {
    it('Produces the correct output 1', () => {

    });
  });
});
