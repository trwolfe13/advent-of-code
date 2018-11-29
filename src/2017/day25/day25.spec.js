const fs = require('fs');
const path = require('path');
const day25 = require('./day25');

describe('day25', () => {
  describe('testBlueprint', () => {
    it('Produces the correct output 1', () => {
      const tape = day25.turingTape();
      for (let n = 0; n < 6; n++) {
        day25.testBlueprint(tape);
      }
      expect(tape.checksum()).toBe(3);
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
