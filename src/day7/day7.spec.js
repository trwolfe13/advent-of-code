const day7 = require('./day7');

describe('day7', () => {

  const input = `
    pbga (66)
    xhth (57)
    ebii (61)
    havc (66)
    ktlj (57)
    fwft (72) -> ktlj, cntj, xhth
    qoyq (66)
    padx (45) -> pbga, havc, qoyq
    tknk (41) -> ugml, padx, fwft
    jptl (61)
    ugml (68) -> gyxo, ebii, jptl
    gyxo (61)
    cntj (57)
  `;

  describe('part1', () => {
    it('Produces the correct output', () => {
      const root = day7.part1(input);
      expect(root).toBe('tknk');
    });
  });
  describe('part2', () => {
    it('Produces the correct output', () => {
      const root = day7.part2(input);
      expect(root).toBe(60);
    });
  });
});
