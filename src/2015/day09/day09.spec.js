const file = require('../../util/file');

const part1 = require('./part1');
const part2 = require('./part2');

const test = file.readString(__dirname, 'input.spec.txt');

describe('day9', () => {
  describe('part1', () => {
    it('test data', () => {
      const result = part1(test);
      expect(result).toBe(605);
    });
  });
  describe('part2', () => {

  });
});
