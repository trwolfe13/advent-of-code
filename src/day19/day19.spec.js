const fs = require('fs');
const path = require('path');
const day19 = require('./day19');

describe('day19', () => {

  const input = fs.readFileSync(path.join(__dirname, './input.test.txt'), 'utf8');

  describe('findStart', () => {
    it('should find the start point', () => {
      const graph = day19.parse(input);
      expect(day19.findStart(graph)).toEqual([5, 0]);
    });
  });

  describe('part1', () => {
    it('Produces the correct output 1', () => {
      expect(day19.part1(input)).toBe('ABCDEF');
    });
  });

  describe('part2', () => {
    it('Produces the correct output 1', () => {
      expect(day19.part2(input)).toBe(38);
    });
  });
});
