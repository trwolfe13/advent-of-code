const fs = require('fs');
const path = require('path');
const day21 = require('./day21');

describe('day21', () => {
  describe('parse', () => {
    it('Produces the correct output 1', () => {
      const input = "##./.../... => ##.#/#.##/..#./...#";
      expect(day21.parse(input)).toEqual({
        '110/000/000': [
          [1, 1, 0, 1],
          [1, 0, 1, 1],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
        ]
      })
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
