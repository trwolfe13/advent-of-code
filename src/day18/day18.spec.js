const day18 = require('./day18');

describe('day18', () => {

  const input = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`;

  describe('part1', () => {
    it('Produces the correct output 1', () => {
      expect(day18.part1(input)).toBe(4);
    });
  });
  describe('part2', () => {
    it('Produces the correct output 1', () => {

    });
  });
});
