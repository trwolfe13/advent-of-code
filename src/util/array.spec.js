const array = require('./array');

describe('array', () => {
  describe('permute', () => {
    it('works', () => {
      const res = array.permute([1, 2, 3]);
      expect(res.length).toBe(6);
      console.log(res);
      expect(res[0]).toEqual([1, 2, 3]);
      expect(res[1]).toEqual([2, 1, 3]);
      expect(res[2]).toEqual([3, 1, 2]);
      expect(res[3]).toEqual([1, 3, 2]);
      expect(res[4]).toEqual([2, 3, 1]);
      expect(res[5]).toEqual([3, 2, 1]);
    });
  });
  describe('part2', () => {
    it('empty', () => {

    });
  });
});
