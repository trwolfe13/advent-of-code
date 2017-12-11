const day9 = require('./day9');

describe('day8', () => {
  describe('part1', () => {
    it('Produces the correct output 1', () => {
      const input = '{}'
      const total = day9.part1(input);
      expect(total).toEqual(1);
    });
    it('Produces the correct output 2', () => {
      const input = '{{{}}}'
      const total = day9.part1(input);
      expect(total).toEqual(6);
    });
    it('Produces the correct output 3', () => {
      const input = '{{},{}}';
      const total = day9.part1(input);
      expect(total).toEqual(5);
    });
    it('Produces the correct output 4', () => {
      const input = '{{{},{},{{}}}}';
      const total = day9.part1(input);
      expect(total).toEqual(16);
    });
    it('Produces the correct output 5', () => {
      const input = '{<a>,<a>,<a>,<a>}';
      const total = day9.part1(input);
      expect(total).toEqual(1);
    });
    it('Produces the correct output 6', () => {
      const input = '{{<ab>},{<ab>},{<ab>},{<ab>}}';
      const total = day9.part1(input);
      expect(total).toEqual(9);
    });
    it('Produces the correct output 7', () => {
      const input = '{{<!!>},{<!!>},{<!!>},{<!!>}}';
      const total = day9.part1(input);
      expect(total).toEqual(9);
    });
    it('Produces the correct output 8', () => {
      const input = '{{<a!>},{<a!>},{<a!>},{<ab>}}';
      const total = day9.part1(input);
      expect(total).toEqual(3);
    });
  });
  describe('part2', () => {
    it('Produces the correct output 1', () => {
      const input = '<>';
      const total = day9.part2(input);
      expect(total).toEqual(0);
    });
    it('Produces the correct output 2', () => {
      const input = '<random characters>';
      const total = day9.part2(input);
      expect(total).toEqual(17);
    });
    it('Produces the correct output 3', () => {
      const input = '<<<<>';
      const total = day9.part2(input);
      expect(total).toEqual(3);
    });
    it('Produces the correct output 4', () => {
      const input = '<{!>}>';
      const total = day9.part2(input);
      expect(total).toEqual(2);
    });
    it('Produces the correct output 5', () => {
      const input = '<!!>';
      const total = day9.part2(input);
      expect(total).toEqual(0);
    });
    it('Produces the correct output 6', () => {
      const input = '<!!!>>';
      const total = day9.part2(input);
      expect(total).toEqual(0);
    });
    it('Produces the correct output 7', () => {
      const input = '<{o"i!a,<{i<a>';
      const total = day9.part2(input);
      expect(total).toEqual(10);
    });
  });
});
