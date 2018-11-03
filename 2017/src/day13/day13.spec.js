const day13 = require('./day13');

describe('day13', () => {
  const input = `
    0: 3
    1: 2
    4: 4
    6: 4
  `.trim();

  describe('positionAt', () => {
    it('Calculates the correct position at 0', () => {
      expect(day13.positionAt(3, 0)).toBe(0);
      expect(day13.positionAt(2, 0)).toBe(0);
      expect(day13.positionAt(4, 0)).toBe(0);
    });
    it('Calculates the correct position at 1', () => {
      expect(day13.positionAt(3, 1)).toBe(1);
      expect(day13.positionAt(2, 1)).toBe(1);
      expect(day13.positionAt(4, 1)).toBe(1);
    });
    it('Calculates the correct position at 2', () => {
      expect(day13.positionAt(3, 2)).toBe(2);
      expect(day13.positionAt(2, 2)).toBe(0);
      expect(day13.positionAt(4, 2)).toBe(2);
    });
    it('Calculates the correct position at 3', () => {
      expect(day13.positionAt(3, 3)).toBe(1);
      expect(day13.positionAt(2, 3)).toBe(1);
      expect(day13.positionAt(4, 3)).toBe(3);
    });
    it('Calculates the correct position at 4', () => {
      expect(day13.positionAt(3, 4)).toBe(0);
      expect(day13.positionAt(2, 4)).toBe(0);
      expect(day13.positionAt(4, 4)).toBe(2);
    });
  });
  describe('part1', () => {
    it('Produces the correct output 1', () => {
      expect(day13.part1(input)).toBe(24);
    });
  });
  describe('part2', () => {
    it('Produces the correct output 1', () => {
      expect(day13.part2(input)).toBe(10);
    });
  });
});
