const file = require('../../util/file');
const string = require('../../util/string');

const part1 = require('./part1');
const part2 = require('./part2');

const tests = file.readString(__dirname, 'input.spec.txt');
const testLines = string.lines(tests);

describe('day8', () => {
  describe('part1', () => {
    it(testLines[0], () => {
      const result = part1(testLines[0]);
      expect(result).toBe(2);
    });
    it(testLines[1], () => {
      const result = part1(testLines[1]);
      expect(result).toBe(2);
    });
    it(testLines[2], () => {
      const result = part1(testLines[2]);
      expect(result).toBe(3);
    });
    it(testLines[3], () => {
      const result = part1(testLines[3]);
      expect(result).toBe(5);
    });
    it('all test data', () => {
      const result = part1(tests);
      expect(result).toBe(12);
    });
  });
  describe('part2', () => {
    it(testLines[0], () => {
      const result = part2(testLines[0]);
      expect(result).toBe(4);
    });
    it(testLines[1], () => {
      const result = part2(testLines[1]);
      expect(result).toBe(4);
    });
    it(testLines[2], () => {
      const result = part2(testLines[2]);
      expect(result).toBe(6);
    });
    it(testLines[3], () => {
      const result = part2(testLines[3]);
      expect(result).toBe(5);
    });
    it('all test data', () => {
      const result = part2(tests);
      expect(result).toBe(19);
    });
  });
});
