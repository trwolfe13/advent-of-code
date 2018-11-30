const part1 = require('./part1');
const part2 = require('./part2');

describe('day12', () => {
  describe('part1', () => {
    it('array', () => {
      expect(part1('[1, 2, 3]')).toEqual(6);
    });
    it('object', () => {
      expect(part1('{"a":2,"b":4}')).toEqual(6);
    });
    it('nested array', () => {
      expect(part1('[[[3]]]')).toEqual(3);
    });
    it('nested object', () => {
      expect(part1('{"a":{"b":4},"c":-1}')).toEqual(3);
    });
    it('combination', () => {
      expect(part1('{"a":[-1,1]}')).toEqual(0);
      expect(part1('[-1,{"a":1}]')).toEqual(0);
    });
  });
  describe('part2', () => {
    it('any', () => {
      expect(part2('[1, 2, 3]')).toEqual(6);
      expect(part2('[1,{"c":"red","b":2},3]')).toEqual(4);
      expect(part2('{"d":"red","e":[1,2,3,4],"f":5}')).toEqual(0);
      expect(part2('[1,"red",5]')).toEqual(6);
    });
  });
});
