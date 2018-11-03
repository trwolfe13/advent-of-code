const fs = require('fs');
const path = require('path');
const day24 = require('./day24');

describe('day24', () => {

  const input = fs.readFileSync(path.join(__dirname, './input.test.txt'), 'utf8');

  describe('buildTree', () => {
    it('Produces the correct output 1', () => {
      const connectors = day24.parse(input);
      const roots = connectors.filter(c => c[0] === 0 || c[1] === 0);
      const nonRoots = connectors.filter(c => !roots.includes(c));

      expect(roots.length).toBe(2);
      expect(nonRoots.length).toBe(6);

      const trees = roots.map(root => day24.buildTree(root, nonRoots));

      expect(trees[0].connector[0]).toBe(0);
      expect(trees[0].connector[1]).toBe(2);

      expect(trees[0].children.length).toBe(2);
      expect(trees[0].children[0].connector[0]).toBe(2);
      expect(trees[0].children[0].connector[1]).toBe(2);
      expect(trees[0].children[0].children.length).toBe(1);
      expect(trees[0].children[0].children[0].connector[0]).toBe(2);
      expect(trees[0].children[0].children[0].connector[1]).toBe(3);
      expect(trees[0].children[0].children[0].children.length).toBe(2);
      expect(trees[0].children[0].children[0].children[0].connector[0]).toBe(3);
      expect(trees[0].children[0].children[0].children[0].connector[1]).toBe(4);
      expect(trees[0].children[0].children[0].children[0].children.length).toBe(0);
      expect(trees[0].children[0].children[0].children[1].connector[0]).toBe(3);
      expect(trees[0].children[0].children[0].children[1].connector[1]).toBe(5);
      expect(trees[0].children[0].children[0].children[1].children.length).toBe(0);

      expect(trees[1].connector[0]).toBe(0);
      expect(trees[1].connector[1]).toBe(1);

      expect(trees[1].children.length).toBe(1);
      expect(trees[1].children[0].connector[0]).toBe(10);
      expect(trees[1].children[0].connector[1]).toBe(1);      
      expect(trees[1].children[0].children.length).toBe(1);
      expect(trees[1].children[0].children[0].connector[0]).toBe(9);
      expect(trees[1].children[0].children[0].connector[1]).toBe(10);
      expect(trees[1].children[0].children[0].children.length).toBe(0);

    });
  });

  describe('part1', () => {
    it('Produces the correct output 1', () => {
      expect(day24.part1(input)).toBe(31);
    });
  });

  describe('part2', () => {
    it('Produces the correct output 1', () => {

    });
  });
});
