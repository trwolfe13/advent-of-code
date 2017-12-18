const part1 = require('./day18.part1');
const part2 = require('./day18.part2');

describe('day18', () => {
  describe('part1', () => {
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

    it('Produces the correct output 1', () => {
      expect(part1(input)).toBe(4);
    });
  });

  describe('part2', () => {
    const input = `snd 1
snd 2
snd p
rcv a
rcv b
rcv c
rcv d`;
    it('Produces the correct output 1', () => {
      expect(part2(input)).toBe(3);
    });
  });
});
