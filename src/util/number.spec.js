const number = require('./number');

describe('number', () => {
  describe('sumParts', () => {
    it('works with 3, 2', () => {
      const res = number.sumParts(3, 2);
      expect(res.length).toBe(4);
      expect(res[0]).toEqual([0, 3]);
      expect(res[1]).toEqual([1, 2]);
      expect(res[2]).toEqual([2, 1]);
      expect(res[3]).toEqual([3, 0]);
    });
    it('works with 3, 3', () => {
      const res = number.sumParts(3, 3);
      expect(res.length).toBe(10);
      expect(res[0]).toEqual([0, 0, 3]);
      expect(res[1]).toEqual([0, 1, 2]);
      expect(res[2]).toEqual([0, 2, 1]);
      expect(res[3]).toEqual([0, 3, 0]);
      expect(res[4]).toEqual([1, 0, 2]);
      expect(res[5]).toEqual([1, 1, 1]);
      expect(res[6]).toEqual([1, 2, 0]);
      expect(res[7]).toEqual([2, 0, 1]);
      expect(res[8]).toEqual([2, 1, 0]);
      expect(res[9]).toEqual([3, 0, 0]);
    });
  });
});
