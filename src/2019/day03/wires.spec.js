const wires = require('./wires');

describe('wires', () => {
  describe('expand', () => {
    it('true', () => {
      const result = wires.expand([
        { direction: 'R', count: 5 },
        { direction: 'U', count: 10 }
      ]);
      // expect(result).toBe(true);
    });
  });
  describe('fastest', () => {
    it('true', () => {
      const w1 = wires.expand(wires.parse('R8,U5,L5,D3'));
      const w2 = wires.expand(wires.parse('U7,R6,D4,L4'));
      const int = wires.intersections(w1, w2);
      expect(wires.fastest(int)).toBe(30);
    });
    it('true', () => {
      const w1 = wires.expand(wires.parse('R75,D30,R83,U83,L12,D49,R71,U7,L72'));
      const w2 = wires.expand(wires.parse('U62,R66,U55,R34,D71,R55,D58,R83'));
      const int = wires.intersections(w1, w2);
      expect(wires.fastest(int)).toBe(610);
    });
    it('true', () => {
      const w1 = wires.expand(wires.parse('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51'));
      const w2 = wires.expand(wires.parse('U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'));
      const int = wires.intersections(w1, w2);
      expect(wires.fastest(int)).toBe(410);
    });
  });
});
